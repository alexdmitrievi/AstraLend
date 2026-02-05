import Divider from "../ui/Divider";

export default function Footer() {
  return (
    <footer id="contacts" tabIndex={-1} className="scroll-mt-24 bg-graphite">
      <div className="border-t border-steel/40">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 text-sm text-stone sm:px-6 lg:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="font-heading text-lg font-semibold">АСТРА</p>
            <p className="text-ash">
              Мастерская корпусной мебели. Проект, производство, монтаж.
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-stone">Контакты</p>
            <ul className="space-y-2 text-ash">
              <li>телефон</li>
              <li>WhatsApp</li>
              <li>Telegram</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-stone">Правовая информация</p>
              <p className="text-ash">ИНН/ОГРН</p>
              <p className="text-ash">“Реквизиты”</p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                className="focus-ring w-fit text-stone transition hover:text-white"
                href="/privacy"
              >
                Политика конфиденциальности
              </a>
              <a
                className="focus-ring w-fit text-stone transition hover:text-white"
                href="/offer"
              >
                Публичная оферта
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Divider className="bg-steel/40" />
        </div>
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-xs text-ash sm:px-6 lg:px-8">
          © 2026 АСТРА. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
