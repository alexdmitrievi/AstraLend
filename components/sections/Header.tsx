"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";

const navLinks = [
  { href: "#portfolio", label: "Портфолио" },
  { href: "#clients", label: "Клиенты" },
  { href: "#lead", label: "Заявка" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      setIsOpen(false);
      const target = event.currentTarget.getAttribute("href");
      if (!target || !target.startsWith("#")) {
        return;
      }
      const element = document.querySelector(target);
      if (element instanceof HTMLElement) {
        window.setTimeout(() => {
          element.focus({ preventScroll: true });
        }, 0);
      }
    },
    []
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b border-steel/60 bg-stone/95 backdrop-blur-sm lg:bg-stone/90 lg:backdrop-blur-lg lg:transition lg:duration-300 ${
        isScrolled
          ? "lg:bg-stone/80 lg:backdrop-blur-lg lg:shadow-[0_10px_30px_rgba(44,44,44,0.08)]"
          : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <a
          href="#hero"
          className="focus-ring font-heading text-lg font-semibold tracking-[0.2em] text-graphite lg:text-[22px] lg:tracking-[0.16em]"
        >
          АСТРА
        </a>

        <nav
          className="hidden items-center gap-3 text-sm text-charcoal/80 md:flex lg:gap-12 lg:text-[16px]"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="focus-ring rounded-full px-3 py-1 text-charcoal transition hover:text-graphite lg:px-4 lg:py-2 lg:text-[16px]"
              href={link.href}
              onClick={handleAnchorClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#lead"
            className="focus-ring hidden rounded-none bg-graphite px-5 py-2 text-sm font-semibold text-white transition hover:bg-charcoal md:inline-flex lg:px-8 lg:py-4 lg:text-[16px]"
            onClick={handleAnchorClick}
          >
            Рассчитать проект
          </a>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-none border border-steel text-graphite md:hidden"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">
              {isOpen ? "Закрыть меню" : "Открыть меню"}
            </span>
            <span className="flex flex-col items-center gap-1">
              <span className="block h-0.5 w-5 bg-graphite" />
              <span className="block h-0.5 w-5 bg-graphite" />
              <span className="block h-0.5 w-5 bg-graphite" />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`border-t border-steel/60 bg-stone/95 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav
          id="mobile-navigation"
          className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-charcoal/80 sm:px-6"
          aria-label="Мобильная навигация"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="focus-ring rounded-2xl px-3 py-2 text-charcoal transition hover:text-graphite"
              href={link.href}
              onClick={handleAnchorClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lead"
            className="focus-ring mt-2 rounded-none bg-graphite px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-charcoal"
            onClick={handleAnchorClick}
          >
            Рассчитать проект
          </a>
        </nav>
      </div>
    </header>
  );
}
