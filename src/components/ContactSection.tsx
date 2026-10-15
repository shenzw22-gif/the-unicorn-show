import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function ContactSection() {
  const { t } = useI18n();

  const contactCards = [
    {
      label: t("contact_card_label_person"),
      value: t("contact_card_value_person"),
      sub: t("contact_card_sub_person"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      label: t("contact_card_label_phone"),
      value: t("contact_card_value_phone"),
      sub: t("contact_card_sub_phone"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      label: t("contact_card_label_email"),
      value: t("contact_card_value_email"),
      sub: t("contact_card_sub_email"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      label: t("contact_card_label_address"),
      value: t("contact_card_value_address"),
      sub: t("contact_card_sub_address"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      label: t("contact_card_label_hours"),
      value: t("contact_card_value_hours"),
      sub: t("contact_card_sub_hours"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ];

  const socials = [
    { label: "抖音", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "小红书", href: "#" }
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center border-t border-[var(--color-border-color)] bg-[var(--color-bg-primary)] px-5 py-[120px] md:px-20"
    >
      <div className="flex w-full max-w-[1200px] flex-col gap-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-5">
          <Reveal>
            <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
              {t("contact_label")}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-primary text-[40px] font-bold leading-[1.1] text-[var(--color-text-primary)] md:text-[48px]">
              {t("contact_title")}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-[640px] font-secondary text-[16px] leading-[28px] text-[var(--color-text-secondary)]">
              {t("contact_desc")}
            </p>
          </Reveal>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, i) => (
            <Reveal key={card.label} delay={i * 80}>
              <div className="group flex flex-col gap-5 rounded-lg border border-[var(--color-border-color)] bg-[var(--color-bg-card)] p-7 transition-colors duration-300 hover:border-[var(--color-accent-gold)]/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--color-border-color)] text-[var(--color-accent-gold)] transition-colors duration-300 group-hover:border-[var(--color-accent-gold)]/40">
                    {card.icon}
                  </div>
                  <span className="font-secondary text-[12px] font-medium tracking-[2px] text-[var(--color-text-secondary)]">
                    {card.label}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`font-secondary text-[18px] font-semibold leading-[28px] text-[var(--color-text-primary)] ${card.label === t("contact_card_label_address") ? "whitespace-pre-line" : ""}`}>
                    {card.value}
                  </span>
                  <span className="font-secondary text-[14px] leading-[22px] text-[var(--color-text-secondary)]">
                    {card.sub}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Social links row */}
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-lg border border-[var(--color-border-color)] bg-[var(--color-bg-card)] p-7 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-secondary text-[12px] font-medium tracking-[2px] text-[var(--color-text-secondary)]">
                {t("contact_social_label")}
              </span>
              <span className="font-secondary text-[14px] text-[var(--color-text-secondary)]">
                {t("contact_social_desc")}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-[4px] border border-[var(--color-border-color)] bg-[var(--color-bg-secondary)] px-5 py-2.5 font-secondary text-[14px] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent-gold)] hover:text-[var(--color-accent-gold)]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
