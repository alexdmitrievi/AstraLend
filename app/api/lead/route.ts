import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { leadSchema } from "../../../lib/validators";

export const runtime = "nodejs";

type RateState = {
  count: number;
  ts: number;
};

const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const rateLimitStore: Map<string, RateState> =
  (globalThis as typeof globalThis & { rateLimitStore?: Map<string, RateState> })
    .rateLimitStore ?? new Map();

if (!(globalThis as typeof globalThis & { rateLimitStore?: Map<string, RateState> })
  .rateLimitStore) {
  (globalThis as typeof globalThis & { rateLimitStore?: Map<string, RateState> })
    .rateLimitStore = rateLimitStore;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const state = rateLimitStore.get(ip);

  if (!state || now - state.ts > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, ts: now });
    return false;
  }

  if (state.count >= RATE_LIMIT_MAX) {
    return true;
  }

  state.count += 1;
  rateLimitStore.set(ip, state);
  return false;
}

async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return false;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("[lead] Telegram send failed", error);
    return false;
  }
}

async function sendEmailMessage(subject: string, html: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO,
      subject,
      html,
    });

    return true;
  } catch (error) {
    console.error("[lead] Email send failed", error);
    return false;
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Слишком много запросов. Попробуйте позже." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Некорректный формат данных." },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Проверьте заполнение формы." },
      { status: 400 }
    );
  }

  if (parsed.data.honeypot && parsed.data.honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const message = [
    "Новая заявка с лендинга",
    `Имя: ${parsed.data.name}`,
    `Контакт: ${parsed.data.contact}`,
    `Тип изделия: ${parsed.data.furnitureType}`,
    `Комментарий: ${parsed.data.comment || "—"}`,
  ].join("\n");

  const html = `
    <h2>Новая заявка с лендинга</h2>
    <p><strong>Имя:</strong> ${parsed.data.name}</p>
    <p><strong>Контакт:</strong> ${parsed.data.contact}</p>
    <p><strong>Тип изделия:</strong> ${parsed.data.furnitureType}</p>
    <p><strong>Комментарий:</strong> ${parsed.data.comment || "—"}</p>
  `;

  const sends = await Promise.allSettled([
    sendTelegramMessage(message),
    sendEmailMessage("Новая заявка АСТРА", html),
  ]);

  const hasSuccess = sends.some(
    (result) => result.status === "fulfilled" && result.value === true
  );

  if (!hasSuccess) {
    const noChannelsConfigured = sends.every(
      (result) => result.status === "fulfilled" && result.value === false
    );

    if (noChannelsConfigured) {
      return NextResponse.json({ ok: true, message: "Каналы не настроены." });
    }

    return NextResponse.json(
      { ok: false, message: "Не удалось отправить заявку." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
