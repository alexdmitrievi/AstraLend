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

export default function HomePage() {
  return (
    <div className="bg-cream text-charcoal">
      <Header />
      <main id="main">
        <Hero heroImageSrc="/astra_main.webp" />
        <Collections />
        <Cases />
        <ClientsMarquee clients={clients} />
        <HowWeWork />
        <Stats />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
