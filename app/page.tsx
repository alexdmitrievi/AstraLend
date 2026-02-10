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
    { name: "Ресторан-бар «Железный мост»", logoText: "РЖМ"}
  ] 

  const categories = [
    {
      id: "sofas",
      title: "Диваны",
      description: "Прямые, угловые и модульные диваны архитектурного и представительского уровня",
      items: [
        {
          title: "Модульный архитектурный диван",
          material: "Велюр, высокоэластичный ППУ",
          image: "https://i.postimg.cc/28YBLJs8/06864f01252556d06a45281bffd903ed-1770245125.png",
        },
        {
          title: "Современный Chesterfield-диван",
          material: "Натуральная кожа, металлическое основание",
          image: "https://i.postimg.cc/7L9TV6D1/a3ce72d274c2a75847a8fe18b32b1091-1770241389.png",
        },
        {
          title: "Лаунж-диван с цилиндрическими валиками",
          material: "Бархат, массив дерева",
          image: "https://i.postimg.cc/J7YZvKvz/3ef51245ed72920024ee5f3b2298b565-1770245499.png",
        },
        {
          title: "Минималистичный диван для гостиной",
          material: "Ткань премиум-класса, металл",
          image: "https://i.postimg.cc/tRF7tkbW/771f0af22663800624a9fc8c4300639e-1770247764.png",
        },
        {
          title: "Угловой диван представительского класса",
          material: "Натуральная кожа, массив дерева",
          image: "https://i.postimg.cc/NjkK8DjX/f32a4982363e0bf8828c8673e940385c-1770246413.png",
        },
      ],
    },
  
    {
      id: "armchairs",
      title: "Кресла",
      description: "Акцентные кресла для интерьеров, кабинетов и общественных пространств",
      items: [
        {
          title: "Резное кожаное кресло Heritage",
          material: "Натуральная кожа, массив дерева, латунные гвозди",
          image: "https://i.postimg.cc/ZnbB2vFd/17091dd7206c2c4550150e55426f61ad-1770240229.png",
        },
        {
          title: "Кресло Heritage на колесной базе",
          material: "Натуральная кожа, массив дерева, металлическая крестовина",
          image: "https://i.postimg.cc/cJSQh23G/1c51eec6e84c002d0d9310cb10b26ec0-1770243052.png",
        },
        {
          title: "Кресло Heritage Classic (кампейн / statement версия)",
          material: "Натуральная кожа, массив дерева, латунные гвозди",
          image: "https://i.postimg.cc/xdJWGkK1/1d9f4b66e6f2fe08bfc321f93cd1c9cd-1770645136.png",
        },
      ],
    },
  
    {
      id: "beds",
      title: "Кровати",
      description: "Кровати с мягким изголовьем и архитектурным характером",
      items: [
        {
          title: "Кровать с мягким архитектурным изголовьем",
          material: "Велюр, МДФ, металл",
          image: "https://i.postimg.cc/k41M1Y0N/720490c15029dad280131423b2d53b27-1770732955.png",
        },
        {
          title: "Современная кровать с вертикальной простёжкой",
          material: "Текстиль, массив дерева",
          image: "https://i.postimg.cc/jjnFnLfH/15cf1e42e21d4141d4ec6a52abbedb2f-1770652377.png",
        },
      ],
    },
  
    {
      id: "benches",
      title: "Банкетки и пуфы",
      description: "Функциональные элементы для спален, холлов и общественных зон",
      items: [
        {
          title: "Банкетка на металлическом основании",
          material: "Ткань, массив дерева, хромированный металл",
          image: "https://i.postimg.cc/W1rKYd9w/0f154305120eb542bd0b0ce9e9d04798-1770247952.png",
        },
        {
          title: "Мягкий пуф для интерьера",
          material: "Ткань, ППУ",
          image: "https://i.postimg.cc/GpdMMqT4/eddeff193c92e25e89c1018110825040-1770247153.png",
        },
      ],
    },
  
    {
      id: "business",
      title: "Мебель для бизнеса",
      description: "Решения для офисов, переговорных, лобби и частных кабинетов",
      items: [
        {
          title: "Диван для переговорной зоны",
          material: "Натуральная кожа, металл",
          image: "https://i.postimg.cc/k55tTbsm/d29350da0f0e5772c0e15acbc1dae661-1770245979.png",
        },
        {
          title: "Кресло для кабинета руководителя",
          material: "Натуральная кожа, массив дерева",
          image: "https://i.postimg.cc/cJSQh23G/1c51eec6e84c002d0d9310cb10b26ec0-1770243052.png",
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
