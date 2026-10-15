import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function Footer() {
  const { t } = useI18n();

  const nav = [
    { label: t("nav_about"), href: "#positioning" },
    { label: t("nav_host"), href: "#host" },
    { label: t("nav_cooperation"), href: "#cooperation" },
    { label: t("nav_contact"), href: "#contact" }
  ];

  const contact = [
    { label: t("nav_cooperation"), href: "#cooperation" },
    { label: "Media", href: "#media" },
    { label: t("nav_contact"), href: "#contact" }
  ];

  return (
    <footer
      id="footer"
      className="flex flex-col items-center border-t border-[var(--color-border-color)] bg-[var(--color-bg-primary)] px-5 py-[100px] md:px-20"
    >
      <div className="flex w-full max-w-[1200px] flex-col gap-[80px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand block */}
          <Reveal className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-2">
              <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
                THE UNICORN SHOW
              </span>
              <h3 className="font-primary text-[28px] font-bold text-[var(--color-text-primary)]">
                {t("footer_brand_title")}
              </h3>
            </div>
            <p className="max-w-[340px] font-secondary text-[14px] leading-[26px] text-[var(--color-text-secondary)]">
              {t("footer_brand_desc")}
            </p>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={80} className="flex flex-col items-start gap-5">
            <span className="font-secondary text-[12px] font-medium tracking-[3px] text-[var(--color-text-secondary)]">
              {t("footer_nav_title")}
            </span>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-secondary text-[14px] text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-gold)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal delay={160} className="flex flex-col items-start gap-5">
            <span className="font-secondary text-[12px] font-medium tracking-[3px] text-[var(--color-text-secondary)]">
              {t("footer_contact_title")}
            </span>
            <ul className="flex flex-col gap-3">
              {contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-secondary text-[14px] text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-gold)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="h-px w-full bg-[var(--color-border-color)]" />

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <span className="font-secondary text-[13px] text-[var(--color-text-secondary)]">
            {t("footer_copyright")}
          </span>
          <span className="font-secondary text-[13px] text-[var(--color-text-secondary)]">
            {t("footer_tagline")}
          </span>
        </div>
      </div>
    </footer>
  );
}
