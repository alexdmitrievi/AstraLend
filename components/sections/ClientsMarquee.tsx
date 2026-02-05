"use client";

import { motion } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

type Client = {
  name: string;
  logo?: string;
  logoText?: string;
  logoTextClassName?: string;
};

type ClientsMarqueeProps = {
  clients: Client[];
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

export default function ClientsMarquee({ clients }: ClientsMarqueeProps) {
  const { isMounted, shouldAnimate } = useDesktopMotion();
  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut", delay },
          viewport: { once: true, amount: 0.3 },
        }
      : { initial: false };
  const fadeUpProps = (delay = 0) => (isMounted ? fadeUp(delay) : {});

  return (
    <section className="section-desktop bg-cream-light py-16 sm:py-20">
      <motion.div {...fadeUpProps(0)} className="section-header">
        <div className="section-title-row">
          <div className="section-title-divider" aria-hidden="true" />
          <h2 className="section-title">
            Нам доверяют
          </h2>
        </div>
      </motion.div>
      <motion.div
        {...fadeUpProps(0.1)}
        className="mt-8 overflow-hidden lg:mx-auto lg:mt-10 lg:w-full lg:max-w-6xl lg:px-8"
      >
        <div className="marquee marquee-desktop flex w-[200%] items-center justify-center gap-8 lg:gap-12">
          {[0, 1].map((row) => (
            <ul
              key={row}
              className="flex w-1/2 min-w-max items-center justify-center gap-6 pr-8 sm:gap-8 lg:gap-10 lg:pr-16"
              aria-label="Список клиентов"
            >
              {clients.map((client, index) => (
                <li
                  key={`${client.name}-${row}-${index}`}
                  className="relative flex min-w-max flex-shrink-0 items-center gap-3 rounded-none border border-steel px-5 py-2 text-sm text-charcoal lg:gap-4 lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:tracking-[0.01em] lg:after:absolute lg:after:right-2 lg:after:top-1/2 lg:after:h-6 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-steel/60 lg:after:content-[''] lg:last:after:hidden"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} логотип`}
                      className="h-9 w-9 object-contain lg:h-10 lg:w-10"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-none border border-steel text-[10px] uppercase tracking-[0.2em] text-charcoal lg:h-10 lg:w-10 ${client.logoTextClassName ?? ""}`}
                    >
                      {(client.logoText ?? getInitials(client.name)) || "LG"}
                    </span>
                  )}
                  <span className="whitespace-nowrap">{client.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
