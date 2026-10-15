import Reveal from "./Reveal";
import { useI18n } from "../i18n";

/**
 * Hero section — dark stage with radial gold glow, serif display title,
 * badge, quote and dual CTAs. Mirrors Hero frame (3:21).
 */
export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative flex flex-col items-center overflow-hidden px-5 pt-[190px] pb-[120px] md:px-20">
      {/* Radial gold atmosphere overlay (absolute, behind content) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 18%, rgba(201,169,110,0.08) 0%, rgba(10,10,10,0) 70%)"
        }}
      />

      <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-10">
        <Reveal>
          <span className="inline-block rounded-full border border-[var(--color-accent-gold)] bg-[#161616] px-4 py-2 font-secondary text-[14px] text-[var(--color-accent-gold)]">
            {t("hero_badge")}
          </span>
        </Reveal>

        <Reveal delay={80} className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-primary text-[44px] leading-tight font-bold text-[var(--color-text-primary)] md:text-[72px]">
            {t("hero_title")}
          </h1>
          <h2 className="font-primary text-[26px] font-medium text-[var(--color-accent-gold)] md:text-[36px]">
            {t("hero_subtitle")}
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="max-w-[640px] text-center font-secondary text-[15px] leading-[32px] text-[var(--color-text-secondary)] md:text-[16px]">
            {t("hero_desc")}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-[720px] text-center font-primary text-[17px] leading-[32px] text-[var(--color-text-primary)] md:text-[18px]">
            {t("hero_quote")}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <span className="block h-[2px] w-20 bg-[var(--color-accent-gold)]" />
        </Reveal>

        <Reveal delay={320}>
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <a
              href="#positioning"
              className="rounded-[4px] bg-[var(--color-accent-gold)] px-10 py-4 font-secondary text-[16px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-85"
            >
              {t("hero_cta_primary")}
            </a>
            <a
              href="#cooperation"
              className="rounded-[4px] border border-[var(--color-accent-gold)] px-10 py-4 font-secondary text-[16px] font-medium text-[var(--color-accent-gold)] transition-colors hover:bg-[var(--color-accent-gold)]/10"
            >
              {t("hero_cta_secondary")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
