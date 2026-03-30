import Divider from "../ui/Divider";

const PHONE_RAW = "+7 913 626-34-44";
const PHONE_TEL = "+79136263444";
const EMAIL = "mebel@a-stra.ru";
const INN = "550516401202";

function BrandWordmark() {
  return (
    <span className="font-heading text-[1.15em] font-semibold tracking-[0.08em]">
      А<span className="inline-block -translate-y-[0.08em] px-[0.08em]">·</span>СТРА
    </span>
  );
}

export default function Footer() {
  return (
    <footer id="contacts" tabIndex={-1} className="scroll-mt-24 bg-graphite">
      <div className="border-t border-steel/20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 text-sm text-stone sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8 lg:pt-20 lg:pb-10 lg:text-base">

          {/* Brand column */}
          <div className="space-y-4">
            <p className="text-lg text-stone/90 lg:text-[1.625rem]">
              <BrandWordmark />
            </p>
            <p className="max-w-[240px] leading-relaxed text-ash lg:text-base">
              Мастерская мягкой мебели. Проект, производство, монтаж.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="focus-ring mt-2 block text-base font-semibold text-stone/80 transition-colors duration-200 hover:text-white lg:text-lg"
            >
              {PHONE_RAW}
            </a>
          </div>

          {/* Contacts column */}
          <div className="space-y-3">
            <p className="font-semibold text-stone/90 lg:text-[1.125rem]">Контакты</p>
            <ul className="space-y-2.5 text-ash lg:text-base">
              <li>
                <a
                  className="focus-ring inline-flex cursor-pointer items-center gap-2 text-ash transition-colors duration-200 hover:text-white"
                  href={`mailto:${EMAIL}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 8l10 7 10-7"/>
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  className="focus-ring inline-flex cursor-pointer items-center gap-2 text-ash transition-colors duration-200 hover:text-white"
                  href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.531 5.855L0 24l6.341-1.51A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-5.017-1.378l-.36-.214-3.727.888.927-3.616-.235-.371A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className="focus-ring inline-flex cursor-pointer items-center gap-2 text-ash transition-colors duration-200 hover:text-white"
                  href="https://t.me/R2D2_55"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div className="space-y-4">
            <p className="font-semibold text-stone/90 lg:text-[1.125rem]">Правовая информация</p>
            <ul className="space-y-2 text-ash lg:text-base">
              <li>ИНН: {INN}</li>
              <li>
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring cursor-pointer text-ash transition-colors duration-200 hover:text-white underline underline-offset-2"
                >
                  Политика обработки<br />персональных данных
                </a>
              </li>
              <li className="text-xs leading-relaxed text-ash/60">
                В соответствии с ФЗ №&nbsp;152-ФЗ
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Divider className="bg-steel/20" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-ash sm:flex-row sm:text-left lg:text-sm">
            <span>© 2026 АСТРА. Все права защищены.</span>
            <a
              className="focus-ring cursor-pointer text-ash transition-colors duration-200 hover:text-white"
              href={`tel:${PHONE_TEL}`}
            >
              {PHONE_RAW}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
