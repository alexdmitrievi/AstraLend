import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import ClientsMarquee from "../components/sections/ClientsMarquee";
import Portfolio from "../components/sections/Portfolio";
import LeadForm from "../components/sections/LeadForm";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  const clients = [
    {
      name: "Банк «ВТБ»",
      logoText: "Б",
      logoTextClassName: "text-[12px] leading-none tracking-normal",
    },
    { name: "Точка кипения", logoText: "ТК" },
    { name: "Ресторан Шато", logoText: "РШ" },
    { name: "Pine Bar", logoText: "PB" },
    { name: "Апарт-отель Nova", logoText: "AN" },
    { name: "Расслабонoff", logoText: "Р" },
    { name: "Парк «Вокруг света»", logoText: "ПВ" },
    { name: "Ресторан «Base»", logoText: "РБ" },
  ];

  const categories = [
    {
      id: "sofas",
      title: "Диваны",
      description: "Прямые, угловые, модульные — любых размеров и конфигураций",
      items: [
        {
          title: "Модульный диван",
          material: "Велюр, массив бука",
          image: "https://picsum.photos/600/800?random=11",
        },
        {
          title: "Угловой диван",
          material: "Рогожка, металл",
          image: "https://picsum.photos/600/800?random=12",
        },
        {
          title: "Диван для ресторана",
          material: "Экокожа, массив дуба",
          image: "https://picsum.photos/600/800?random=13",
        },
      ],
    },
    {
      id: "armchairs",
      title: "Кресла",
      description: "Для дома, офиса, ресторанов и общественных пространств",
      items: [
        {
          title: "Кресло для переговорной",
          material: "Натуральная кожа, металл",
          image: "https://picsum.photos/600/800?random=14",
        },
        {
          title: "Лаунж-кресло",
          material: "Бархат, латунь",
          image: "https://picsum.photos/600/800?random=15",
        },
        {
          title: "Кресло для коворкинга",
          material: "Рогожка, фанера",
          image: "https://picsum.photos/600/800?random=16",
        },
      ],
    },
    {
      id: "beds",
      title: "Кровати",
      description: "С мягким изголовьем, подъёмным механизмом, в любом размере",
      items: [
        {
          title: "Кровать с изголовьем",
          material: "Шенилл, латунь",
          image: "https://picsum.photos/600/800?random=11",
        },
        {
          title: "Кровать-подиум",
          material: "Велюр, массив",
          image: "https://picsum.photos/600/800?random=12",
        },
      ],
    },
    {
      id: "other",
      title: "Мебель для бизнеса",
      description: "Пуфы, банкетки, изголовья, мягкие панели",
      items: [
        {
          title: "Барные пуфы",
          material: "Бархат, нержавеющая сталь",
          image: "https://picsum.photos/600/800?random=13",
        },
        {
          title: "Мягкие стеновые панели",
          material: "Экокожа, поролон",
          image: "https://picsum.photos/600/800?random=14",
        },
        {
          title: "Банкетка",
          material: "Велюр, массив ясеня",
          image: "https://picsum.photos/600/800?random=15",
        },
      ],
    },
  ];

  return (
    <div className="bg-stone text-graphite lg:bg-cream lg:text-[color:var(--color-text-primary)]">
      <Header />
      <main id="main">
        <Hero heroImageSrc="/astra_main.png" />
        <div id="clients" tabIndex={-1} className="scroll-mt-24">
          <ClientsMarquee clients={clients} />
        </div>
        <div id="portfolio" tabIndex={-1} className="scroll-mt-24">
          <Portfolio categories={categories} />
        </div>
        <div id="lead" tabIndex={-1} className="scroll-mt-24">
          <LeadForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
