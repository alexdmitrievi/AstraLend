import Divider from "../ui/Divider";

const PHONE_RAW = "+79136263444";
const PHONE_TEL = "+79136263444";
const EMAIL = "mebel@a-stra.ru";
const INN = "550516401202";

export default function Footer() {
  return (
    <footer id="contacts" tabIndex={-1} className="scroll-mt-24 bg-graphite">
      <div className="border-t border-steel/40">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 text-sm text-stone sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8 lg:pt-20 lg:pb-10 lg:text-base">
          <div className="space-y-3">
            <p className="font-heading text-lg font-semibold lg:text-[1.625rem]">
              АСТРА
            </p>
            <p className="text-ash lg:text-base">
              Мастерская корпусной мебели. Проект, производство, монтаж.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-stone lg:text-[1.125rem]">
              Контакты
            </p>
            <ul className="space-y-2 text-ash lg:text-base">
              <li>
                <a
                  className="focus-ring w-fit text-ash transition lg:transition-colors lg:hover:text-white"
                  href={`tel:${PHONE_TEL}`}
                >
                  Телефон
                </a>
              </li>

              <li>
                <a
                  className="focus-ring w-fit text-ash transition lg:transition-colors lg:hover:text-white"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </li>

              <li>
                <a
                  className="focus-ring w-fit text-ash transition lg:transition-colors lg:hover:text-white"
                  href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  className="focus-ring w-fit text-ash transition lg:transition-colors lg:hover:text-white"
                  href={`https://t.me/${PHONE_TEL.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-stone lg:text-[1.125rem]">
                Правовая информация
              </p>
              <p className="text-ash lg:text-base">ИНН: {INN}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Divider className="bg-steel/40" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-xs text-ash sm:px-6 lg:px-8 lg:text-sm">
          © 2026 АСТРА. Все права защищены. <span className="mx-2">•</span>{" "}
          <a
            className="focus-ring text-ash transition lg:transition-colors lg:hover:text-white"
            href={`tel:${PHONE_TEL}`}
          >
            {PHONE_RAW}
          </a>
        </div>
      </div>
    </footer>
  );
}

