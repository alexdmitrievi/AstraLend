import Link from "next/link";
import { collections, countByCollection, modelsPlural } from "../../lib/catalog";

const PHONE_RAW = "+7 913 626-34-44";
const PHONE_TEL = "+79136263444";
const EMAIL = "mebel@a-stra.ru";
const INN = "550516401202";

function BrandWordmark() {
  return (
    <span className="font-heading text-[22px] font-medium tracking-[0.14em]">
      А<span className="inline-block -translate-y-[0.08em] px-[0.08em]">·</span>СТРА
    </span>
  );
}

const columnTitle = "text-[12px] uppercase tracking-[0.24em] text-white/60";
const columnLink =
  "focus-ring text-[14px] text-white/75 transition-colors duration-300 hover:text-white";

export default function Footer() {
  return (
    <footer id="contacts" tabIndex={-1} className="scroll-mt-24 bg-dark">
      <div className="wrap py-16 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Бренд */}
          <div>
            <p className="text-white">
              <BrandWordmark />
            </p>
            <p className="mt-5 max-w-[26ch] text-[14px] leading-relaxed text-white/65">
              Мастерская мягкой мебели. Проект, производство, монтаж.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="focus-ring mt-6 inline-block font-heading text-[22px] font-medium text-white transition-colors duration-300 hover:text-white/70"
            >
              {PHONE_RAW}
            </a>
          </div>

          {/* Контакты */}
          <div>
            <p className={columnTitle}>Контакты</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a className={columnLink} href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  className={columnLink}
                  href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className={columnLink}
                  href="https://t.me/R2D2_55"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li className="text-[14px] text-white/65">Омск</li>
            </ul>
          </div>

          {/* Каталог */}
          <div>
            <p className={columnTitle}>Каталог</p>
            <ul className="mt-6 space-y-3">
              {collections.map((collection) => {
                const count = countByCollection(collection.id);
                return (
                  <li key={collection.id}>
                    <Link
                      className={columnLink}
                      href={`/catalog/?collection=${collection.id}`}
                    >
                      {collection.title}
                      <span className="text-white/55">
                        {" "}
                        — {count} {modelsPlural(count)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Правовая информация */}
          <div>
            <p className={columnTitle}>Правовая информация</p>
            <ul className="mt-6 space-y-3">
              <li className="text-[14px] text-white/65">ИНН: {INN}</li>
              <li>
                <Link
                  href="/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${columnLink} underline underline-offset-4`}
                >
                  Политика обработки персональных данных
                </Link>
              </li>
              <li className="text-[13px] leading-relaxed text-white/60">
                В соответствии с ФЗ №&nbsp;152-ФЗ
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-8 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 АСТРА. Все права защищены.</span>
          <a
            className="focus-ring transition-colors duration-300 hover:text-white"
            href={`tel:${PHONE_TEL}`}
          >
            {PHONE_RAW}
          </a>
        </div>
      </div>
    </footer>
  );
}
