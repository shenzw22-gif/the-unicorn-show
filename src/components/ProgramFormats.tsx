import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function ProgramFormats() {
  const { t } = useI18n();

  const formats = [
    { num: "01", title: t("fmt_1_title"), desc: t("fmt_1_desc") },
    { num: "02", title: t("fmt_2_title"), desc: t("fmt_2_desc") },
    { num: "03", title: t("fmt_3_title"), desc: t("fmt_3_desc") }
  ];

  return (
    <section className="flex flex-col items-center bg-[var(--color-bg-secondary)] px-5 py-[120px] md:px-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[60px]">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
            FORMATS
          </span>
          <h2 className="font-primary text-[32px] font-bold text-[var(--color-text-primary)] md:text-[40px]">
            {t("fmt_title")}
          </h2>
          <p className="text-center font-secondary text-[16px] text-[var(--color-text-secondary)]">
            {t("fmt_desc")}
          </p>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {formats.map((format, i) => (
            <Reveal key={format.num} delay={i * 80}>
              <div className="flex h-full flex-col items-start gap-5 rounded-lg bg-[var(--color-bg-card)] p-10">
                <span className="font-secondary text-[48px] leading-none font-bold text-[var(--color-accent-gold)]">
                  {format.num}
                </span>
                <h3 className="font-primary text-[24px] font-semibold text-[var(--color-text-primary)]">
                  {format.title}
                </h3>
                <p className="font-secondary text-[16px] leading-[26px] text-[var(--color-text-secondary)]">
                  {format.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
