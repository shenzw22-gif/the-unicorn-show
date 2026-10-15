import Header from "./components/Header";
import Hero from "./components/Hero";
import HostProfile from "./components/HostProfile";
import Positioning from "./components/Positioning";
import ProgramFormats from "./components/ProgramFormats";
import Production from "./components/Production";
import MediaSection from "./components/MediaSection";
import ValueEcosystem from "./components/ValueEcosystem";
import Stats from "./components/Stats";
import Cooperation from "./components/Cooperation";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { I18nProvider } from "./i18n";

/**
 * THE UNICORN SHOW — high-end interview showcase website.
 * Section order mirrors the .ardot design file (3:1 Header → 3:194 Footer).
 */
export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen w-full bg-[var(--color-bg-primary)] font-secondary">
        <Header />
        <main>
          <Hero />
          <HostProfile />
          <Positioning />
          <ProgramFormats />
          <Production />
          <MediaSection />
          <ValueEcosystem />
          <Stats />
          <Cooperation />
          <ProcessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
