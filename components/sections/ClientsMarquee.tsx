"use client";

import { motion } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

type Client = {
  name: string;
  logo?: string;
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
  const shouldAnimate = useDesktopMotion();
  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut", delay },
          viewport: { once: true, amount: 0.3 },
        }
      : { initial: false };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <motion.div
        {...fadeUp(0)}
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="h-px w-10 bg-graphite/60" aria-hidden="true" />
          <h2 className="font-heading text-2xl font-semibold lg:text-[2.875rem] lg:tracking-[0.01em]">
            Нам доверяют
          </h2>
        </div>
      </motion.div>
      <motion.div {...fadeUp(0.1)} className="mt-8 overflow-hidden lg:mt-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="marquee marquee-desktop flex w-[200%] items-center gap-8 lg:gap-12">
            {[0, 1].map((row) => (
              <ul
                key={row}
                className="flex w-1/2 min-w-max items-center gap-6 pr-8 pl-2 sm:gap-8 sm:pl-3 lg:gap-10 lg:pl-4 lg:pr-12"
                aria-label="Список клиентов"
              >
                {clients.map((client, index) => (
                  <li
                    key={`${client.name}-${row}-${index}`}
                    className="relative flex items-center gap-3 rounded-none border border-steel px-5 py-2 text-sm text-charcoal lg:gap-4 lg:px-6 lg:py-3 lg:text-base lg:tracking-[0.01em] lg:after:absolute lg:after:right-2 lg:after:top-1/2 lg:after:h-6 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-steel/60 lg:after:content-[''] lg:last:after:hidden"
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={`${client.name} логотип`}
                        className="h-9 w-9 object-contain lg:h-10 lg:w-10"
                        loading="lazy"
                      />
                    ) : (
                      <span className="flex h-9 w-9 items-center justify-center rounded-none border border-steel text-[10px] uppercase tracking-[0.2em] text-charcoal lg:h-10 lg:w-10">
                        {getInitials(client.name) || "LG"}
                      </span>
                    )}
                    <span className="whitespace-nowrap">{client.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
