import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Collections from "../components/sections/Collections";
import Cases from "../components/sections/Cases";
import ClientsMarquee from "../components/sections/ClientsMarquee";
import HowWeWork from "../components/sections/HowWeWork";
import Stats from "../components/sections/Stats";
import LeadForm from "../components/sections/LeadForm";
import Footer from "../components/sections/Footer";
import { clients } from "../lib/clients";
import { resolveMedia } from "../lib/media";

export default function HomePage() {
  // Проверяется во время сборки: ассета нет в public/ → компонент получает
  // null и рендерит фолбэк вместо битой ссылки.
  const media = resolveMedia();

  return (
    <div className="bg-cream text-charcoal">
      <Header />
      <main id="main">
        <Hero heroImageSrc="/astra_main.webp" videoSrc={media.heroVideo} />
        <Collections />
        <Cases textureSrc={media.textureDark} />
        <ClientsMarquee clients={clients} />
        <HowWeWork workshopSrc={media.workshop} />
        <Stats />
        <LeadForm textureSrc={media.textureDark} />
      </main>
      <Footer />
    </div>
  );
}
