import { useEffect, useState } from "react";
import { useI18n } from "../i18n";

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav_about"), href: "#positioning" },
    { label: t("nav_host"), href: "#host" },
    { label: t("nav_cooperation"), href: "#cooperation" },
    { label: t("nav_contact"), href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex h-[72px] items-center justify-between px-5 transition-all duration-300 md:px-20 ${
        scrolled
          ? "bg-[var(--color-bg-primary)]/90 shadow-[0_1px_0_var(--color-border-color)] backdrop-blur-md"
          : "bg-[var(--color-bg-primary)]"
      }`}
    >
      <a href="#top" className="font-primary text-[20px] font-semibold text-[var(--color-text-primary)]">
        THE UNICORN SHOW
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-10 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-secondary text-[14px] font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-gold)]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Language switch */}
        <div className="hidden items-center gap-1 rounded-[4px] border border-[var(--color-border-color)] bg-[var(--color-bg-secondary)] p-1 md:flex">
          <button
            onClick={() => setLang("zh")}
            className={`px-2.5 py-1 font-secondary text-[13px] font-medium transition-colors ${
              lang === "zh" ? "text-[var(--color-accent-gold)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            {t("lang_zh")}
          </button>
          <div className="h-3 w-px bg-[var(--color-border-color)]" />
          <button
            onClick={() => setLang("en")}
            className={`px-2.5 py-1 font-secondary text-[13px] font-medium transition-colors ${
              lang === "en" ? "text-[var(--color-accent-gold)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            {t("lang_en")}
          </button>
        </div>

        <a
          href="#cooperation"
          className="hidden rounded-[4px] bg-[var(--color-accent-gold)] px-6 py-3 font-secondary text-[14px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-85 md:block"
        >
          {t("cta_book")}
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={t("cta_menu")}
        >
          <span
            className={`h-[2px] w-5 bg-[var(--color-text-primary)] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-[2px] w-5 bg-[var(--color-text-primary)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-5 bg-[var(--color-text-primary)] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[72px] left-0 right-0 flex flex-col gap-1 border-t border-[var(--color-border-color)] bg-[var(--color-bg-primary)] px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded py-3 font-secondary text-[15px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-gold)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cooperation"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-[4px] bg-[var(--color-accent-gold)] px-6 py-3 text-center font-secondary text-[14px] font-medium text-[#0a0a0a]"
          >
            {t("cta_book")}
          </a>
          {/* Mobile lang switch */}
          <div className="mt-3 flex items-center gap-1">
            <button
              onClick={() => setLang("zh")}
              className={`flex-1 rounded border border-[var(--color-border-color)] py-2 font-secondary text-[14px] font-medium ${
                lang === "zh" ? "text-[var(--color-accent-gold)]" : "text-[var(--color-text-secondary)]"
              }`}
            >
              {t("lang_zh")}
            </button>
            <button
              onClick={() => setLang("en")}
              className={`flex-1 rounded border border-[var(--color-border-color)] py-2 font-secondary text-[14px] font-medium ${
                lang === "en" ? "text-[var(--color-accent-gold)]" : "text-[var(--color-text-secondary)]"
              }`}
            >
              {t("lang_en")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
