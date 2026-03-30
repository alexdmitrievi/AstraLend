import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — АСТРА",
  description:
    "Политика обработки персональных данных ИП Мастерской мягкой мебели АСТРА в соответствии с Федеральным законом № 152-ФЗ.",
  robots: { index: false, follow: false },
};

const UPDATED = "01 января 2026 г.";
const INN = "550516401202";
const EMAIL = "mebel@a-stra.ru";
const PHONE = "+7 913 626-34-44";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone text-graphite lg:bg-cream">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-steel/40 bg-stone/95 backdrop-blur-sm lg:bg-cream/95">
        <div className="mx-auto flex h-14 max-w-4xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center gap-2 font-body text-sm font-medium text-graphite transition-colors hover:text-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite/70 focus-visible:ring-offset-2 rounded"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Вернуться на сайт
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Title */}
        <div className="mb-10 border-b border-steel/40 pb-8">
          <h1 className="font-heading text-3xl font-semibold text-graphite lg:text-4xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-3 font-body text-sm text-ash">
            Последнее обновление: {UPDATED}
          </p>
        </div>

        <div className="prose-policy space-y-10 font-body text-[15px] leading-relaxed text-charcoal">
          {/* 1 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика конфиденциальности (далее — «Политика»)
              разработана в соответствии с требованиями Федерального закона от
              27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок
              обработки и защиты персональных данных физических лиц,
              пользующихся сайтом{" "}
              <strong className="text-graphite">a-stra.ru</strong> (далее —
              «Сайт»).
            </p>
            <p className="mt-3">
              Используя Сайт или оставляя заявку, вы выражаете согласие на
              обработку ваших персональных данных на условиях настоящей
              Политики.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              2. Оператор персональных данных
            </h2>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>
                <strong className="text-graphite">Наименование:</strong>{" "}
                Индивидуальный предприниматель, мастерская мягкой мебели «АСТРА»
              </li>
              <li>
                <strong className="text-graphite">ИНН:</strong> {INN}
              </li>
              <li>
                <strong className="text-graphite">Электронная почта:</strong>{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="cursor-pointer text-walnut underline decoration-walnut/40 hover:decoration-walnut transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <strong className="text-graphite">Телефон:</strong>{" "}
                <a
                  href="tel:+79136263444"
                  className="cursor-pointer text-walnut underline decoration-walnut/40 hover:decoration-walnut transition-colors"
                >
                  {PHONE}
                </a>
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              3. Категории обрабатываемых данных
            </h2>
            <p>Оператор может обрабатывать следующие персональные данные:</p>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>Номер телефона (обязательное поле формы заявки);</li>
              <li>Имя и фамилия (при указании субъектом);</li>
              <li>Содержание переписки в мессенджерах;</li>
              <li>
                Технические данные: IP-адрес, тип браузера, страницы посещения,
                cookie-файлы.
              </li>
            </ul>
            <p className="mt-3">
              Оператор не обрабатывает специальные категории персональных данных
              (состояние здоровья, биометрию, политические взгляды и т.д.).
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              4. Цели обработки персональных данных
            </h2>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>
                Обработка заявки и консультирование по вопросам изготовления
                мебели;
              </li>
              <li>Заключение и исполнение договора;</li>
              <li>Связь с клиентом по телефону или в мессенджере;</li>
              <li>Улучшение качества работы Сайта и сервиса;</li>
              <li>
                Аналитика посещаемости в обезличенном виде (Яндекс.Метрика,
                Google Analytics).
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              5. Правовые основания обработки
            </h2>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>
                Согласие субъекта персональных данных (ст. 6, ч. 1, п. 1
                152-ФЗ);
              </li>
              <li>
                Исполнение договора, стороной которого является субъект (ст. 6,
                ч. 1, п. 5 152-ФЗ);
              </li>
              <li>
                Законный интерес оператора для ведения предпринимательской
                деятельности.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              6. Сроки хранения данных
            </h2>
            <p>
              Персональные данные хранятся не дольше, чем этого требуют цели
              обработки:
            </p>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>
                Данные из форм заявок — до окончания работ и гарантийного
                периода (не более 3 лет);
              </li>
              <li>
                Договорная документация — в соответствии с требованиями
                законодательства (не менее 5 лет);
              </li>
              <li>Технические логи — не более 12 месяцев;</li>
              <li>
                Cookie-данные — в соответствии со сроком жизни cookie-файлов.
              </li>
            </ul>
            <p className="mt-3">
              После достижения целей обработки данные уничтожаются или
              обезличиваются.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              7. Права субъектов персональных данных
            </h2>
            <p>Вы вправе:</p>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>Получить информацию об обработке ваших данных;</li>
              <li>Потребовать уточнения, блокировки или уничтожения данных;</li>
              <li>Отозвать согласие на обработку в любой момент;</li>
              <li>
                Обжаловать действия оператора в Роскомнадзоре или в суде.
              </li>
            </ul>
            <p className="mt-3">
              Для реализации прав обратитесь по адресу{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="cursor-pointer text-walnut underline decoration-walnut/40 hover:decoration-walnut transition-colors"
              >
                {EMAIL}
              </a>
              . Запрос рассматривается в срок не более 30 дней.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              8. Передача данных третьим лицам
            </h2>
            <p>
              Персональные данные не передаются третьим лицам в коммерческих
              целях. Передача возможна только:
            </p>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>По требованию уполномоченных государственных органов;</li>
              <li>
                Сервисам-обработчикам (платёжные системы, сервисы аналитики) —
                исключительно в объёме, необходимом для выполнения функции, на
                основании договора об обработке персональных данных;
              </li>
              <li>С явного согласия субъекта.</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              9. Защита персональных данных
            </h2>
            <p>
              Оператор принимает необходимые правовые, организационные и
              технические меры для защиты персональных данных от
              несанкционированного доступа, изменения, раскрытия или
              уничтожения, в том числе:
            </p>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>Передача данных по защищённому протоколу HTTPS;</li>
              <li>Ограниченный доступ к данным только для уполномоченных лиц;</li>
              <li>Регулярный контроль мер обеспечения безопасности.</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              10. Файлы cookie
            </h2>
            <p>
              Сайт использует файлы cookie для обеспечения корректной работы,
              аналитики посещаемости и улучшения пользовательского опыта.
              Cookie не содержат персональных данных в явном виде. Вы можете
              отключить cookie в настройках браузера, однако это может привести
              к ограничению функциональности Сайта.
            </p>
            <p className="mt-3">
              Используя Сайт, вы соглашаетесь на использование cookie в
              соответствии с настоящей Политикой.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              11. Изменение политики
            </h2>
            <p>
              Оператор вправе вносить изменения в настоящую Политику. Новая
              редакция вступает в силу с момента её размещения на Сайте.
              Продолжение использования Сайта после публикации изменений
              означает ваше согласие с обновлённой Политикой.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-graphite">
              12. Контакты
            </h2>
            <p>
              По вопросам, связанным с обработкой персональных данных,
              обращайтесь:
            </p>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-gold">
              <li>
                E-mail:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="cursor-pointer text-walnut underline decoration-walnut/40 hover:decoration-walnut transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                Телефон:{" "}
                <a
                  href="tel:+79136263444"
                  className="cursor-pointer text-walnut underline decoration-walnut/40 hover:decoration-walnut transition-colors"
                >
                  {PHONE}
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Footer note */}
        <div className="mt-12 border-t border-steel/40 pt-8">
          <p className="font-body text-xs text-ash">
            ИНН {INN} · Мастерская мягкой мебели «АСТРА» ·{" "}
            <Link
              href="/"
              className="cursor-pointer text-walnut underline decoration-walnut/40 hover:decoration-walnut transition-colors"
            >
              На главную
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
