// Header.tsx
"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

const navLinks = [
  { href: "#portfolio", label: "Портфолио" },
  { href: "#clients", label: "Клиенты" },
  { href: "#lead", label: "Заявка" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const desktopLogoRef = useRef<HTMLAnchorElement | null>(null);

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
      if (!target || !target.startsWith("#")) return;

      const element = document.querySelector(target);
      if (element instanceof HTMLElement) {
        window.setTimeout(() => {
          element.focus({ preventScroll: true });
        }, 0);
      }
    },
    []
  );

  // ✅ CSS vars for pixel-perfect alignment (desktop hero under brand)
  const writeHeroVars = useCallback(() => {
    if (typeof window === "undefined") return;
    const logo = desktopLogoRef.current;
    const header = headerRef.current;
    if (!logo || !header) return;

    const left = Math.round(logo.getBoundingClientRect().left);
    const height = Math.round(header.getBoundingClientRect().height);

    document.documentElement.style.setProperty("--brand-left", `${left}px`);
    document.documentElement.style.setProperty("--header-height", `${height}px`);
  }, []);

  useLayoutEffect(() => {
    // layout-first measure to avoid visible jump on first paint (client-only header)
    writeHeroVars();
  }, [writeHeroVars]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    writeHeroVars();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => writeHeroVars());
      ro.observe(document.documentElement);
      if (headerRef.current) ro.observe(headerRef.current);
      if (desktopLogoRef.current) ro.observe(desktopLogoRef.current);
    }

    const onResize = () => writeHeroVars();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [writeHeroVars]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-steel/60 bg-stone/95 backdrop-blur-sm lg:bg-cream/90 lg:backdrop-blur-xl lg:transition lg:duration-300 ${
        isScrolled
          ? "lg:bg-cream/80 lg:backdrop-blur-xl lg:shadow-[0_10px_30px_rgba(44,44,44,0.08)]"
          : ""
      }`}
    >
      {/* MOBILE & TABLET */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:hidden">
        <div className="flex items-center justify-between gap-4 py-3">
          <a
            href="#hero"
            className="focus-ring font-heading text-lg font-semibold tracking-[0.2em] text-graphite"
          >
            АСТРА
          </a>

          <nav
            className="hidden items-center gap-3 text-sm text-charcoal/80 md:flex"
            aria-label="Основная навигация"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="focus-ring rounded-full px-3 py-1 text-charcoal transition hover:text-graphite"
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
              className="focus-ring hidden rounded-none bg-graphite px-5 py-2 text-sm font-semibold text-white transition hover:bg-charcoal md:inline-flex"
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
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block w-full px-12 py-4">
        <div className="flex items-center justify-between">
          <a
            ref={desktopLogoRef}
            href="#hero"
            className="focus-ring font-heading text-[1.375rem] font-semibold tracking-[0.2em] text-graphite"
          >
            АСТРА
          </a>

          <div className="flex items-center gap-10">
            <nav
              className="flex items-center gap-8 text-[length:var(--font-nav)] text-charcoal/80 xl:gap-10"
              aria-label="Основная навигация"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="focus-ring rounded-full px-4 py-2 text-charcoal transition hover:text-graphite"
                  href={link.href}
                  onClick={handleAnchorClick}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#lead"
              className="focus-ring inline-flex rounded-none bg-graphite px-8 py-4 text-[length:var(--font-nav)] font-semibold text-white transition hover:bg-charcoal"
              onClick={handleAnchorClick}
            >
              Рассчитать проект
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
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
