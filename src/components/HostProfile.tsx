import Reveal from "./Reveal";
import alanPortrait from "../assets/alan-portrait.png";
import { useI18n } from "../i18n";

export default function HostProfile() {
  const { t } = useI18n();

  const roles = [
    t("host_tag_1"),
    t("host_tag_2"),
    t("host_tag_3"),
    t("host_tag_4"),
    t("host_tag_5")
  ];

  return (
    <section id="host" className="flex flex-col items-center bg-[var(--color-bg-secondary)] px-5 py-[120px] md:px-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[60px]">
        <Reveal className="flex flex-col items-center gap-3">
          <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
            {t("host_label")}
          </span>
          <h2 className="font-primary text-[32px] font-bold text-[var(--color-text-primary)] md:text-[40px]">
            {t("nav_host")}
          </h2>
        </Reveal>

        <Reveal className="flex w-full flex-col items-center gap-12 md:flex-row md:gap-[60px]">
          {/* Portrait */}
          <div className="relative w-[280px] shrink-0 md:w-[400px]">
            <div className="overflow-hidden rounded-lg">
              <img
                src={alanPortrait}
                alt="Alan Voon"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex w-full flex-col items-start gap-6">
            <h3 className="font-primary text-[28px] font-bold text-[var(--color-text-primary)] md:text-[32px]">
              {t("host_name")}
            </h3>
            <p className="font-secondary text-[15px] text-[var(--color-accent-gold)] md:text-[16px]">
              {t("host_role")}
            </p>
            <p className="max-w-[640px] font-secondary text-[15px] leading-[28px] text-[var(--color-text-secondary)] md:text-[16px]">
              {t("host_bio")}
            </p>
            <span className="block h-[2px] w-[60px] bg-[var(--color-accent-gold)]" />

            {/* Identity tags */}
            <div className="flex flex-wrap gap-3">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-[4px] bg-[#1c1c1c] px-4 py-2 font-secondary text-[13px] text-[var(--color-text-secondary)]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
