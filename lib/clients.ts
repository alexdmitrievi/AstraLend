export type Client = {
  name: string;
  href?: string;
  logo?: string;
  logoText?: string;
  logoTextClassName?: string;
};

export const clients: Client[] = [
  {
    name: "Банк «ВТБ»",
    logo: "/clients/vtb.webp",
    logoText: "Б",
    logoTextClassName: "text-[12px] leading-none tracking-normal",
  },
  { name: "Точка кипения", logo: "/clients/tochka-kipeniya.webp", logoText: "ТК" },
  { name: "Ресторан Шато", logo: "/clients/chateau.webp", logoText: "РШ" },
  { name: "Pine Bar", logo: "/clients/pine-bar.webp", logoText: "PB" },
  { name: "Парк Вокруг света", logo: "/clients/around-the-world.webp", logoText: "PB" },
  { name: "Апарт-отель Nova", logo: "/clients/nova.webp", logoText: "AN" },
  { name: "Расслабонoff", logo: "/clients/rasslabonoff.webp", logoText: "Р" },
  { name: "Ресторан «Base»", logo: "/clients/base.webp", logoText: "РБ" },
  { name: "Ресторан-бар «Железный мост»", logo: "/clients/iron-bridge.webp", logoText: "РЖМ" },
  { name: "Барбершоп «WILLMADE»", logo: "/clients/willmade.webp", logoText: "WM" },
];
