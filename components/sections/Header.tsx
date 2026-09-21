"use client";

import Link from "next/link";
import { useCallback, useState, type MouseEvent } from "react";

type NavLink = { href: string; label: string; page?: boolean };

const navLinks: NavLink[] = [
  { href: "/catalog/", label: "Коллекции", page: true },
  { href: "/#process", label: "Мастерская" },
  { href: "/#contacts", label: "Контакты" },
];

export function BrandWordmark() {
  return (
    <span className="font-heading text-[22px] font-medium tracking-[0.14em]">
      А<span className="inline-block -translate-y-[0.08em] px-[0.08em]">·</span>СТРА
    </span>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAnchorClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      setIsOpen(false);

      const href = event.currentTarget.getAttribute("href") ?? "";
      const hashIndex = href.indexOf("#");
      if (hashIndex < 0) return;

      const target = href.slice(hashIndex);
      const element = document.querySelector(target);
      if (element instanceof HTMLElement) {
        window.setTimeout(() => {
          element.focus({ preventScroll: true });
        }, 0);
      }
    },
    []
  );

  const renderLink = (link: NavLink, className: string) =>
    link.page ? (
      <Link key={link.href} href={link.href} className={className} onClick={() => setIsOpen(false)}>
        {link.label}
      </Link>
    ) : (
      <Link key={link.href} href={link.href} className={className} onClick={handleAnchorClick}>
        {link.label}
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 border-b border-steel bg-cream">
      <div className="wrap flex items-center justify-between gap-6 py-4 lg:py-5">
        <Link href="/" className="focus-ring text-ink" aria-label="АСТРА — на главную">
          <BrandWordmark />
        </Link>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) =>
            renderLink(
              link,
              "focus-ring text-[13px] uppercase tracking-[0.1em] text-charcoal transition-colors duration-300 hover:text-ink"
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#lead"
            className="focus-ring btn btn-outline hidden lg:inline-flex"
            onClick={handleAnchorClick}
          >
            Рассчитать проект
          </Link>

          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-steel text-ink lg:hidden"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="flex flex-col items-center gap-[5px]">
              <span className="block h-px w-5 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      <div className={`border-t border-steel bg-cream lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav
          id="mobile-navigation"
          className="wrap flex flex-col py-2"
          aria-label="Мобильная навигация"
        >
          {navLinks.map((link) =>
            renderLink(
              link,
              "focus-ring border-b border-steel py-4 text-[13px] uppercase tracking-[0.1em] text-charcoal transition-colors duration-300 hover:text-ink"
            )
          )}
          <Link
            href="/#lead"
            className="focus-ring btn btn-dark my-4 w-full"
            onClick={handleAnchorClick}
          >
            Рассчитать проект
          </Link>
        </nav>
      </div>
    </header>
  );
}
