import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function ValueEcosystem() {
  const { t } = useI18n();

  const values = [
    { title: t("val_1_title"), desc: t("val_1_desc") },
    { title: t("val_2_title"), desc: t("val_2_desc") },
    { title: t("val_3_title"), desc: t("val_3_desc") },
    { title: t("val_4_title"), desc: t("val_4_desc") }
  ];

  return (
    <section className="flex flex-col items-center bg-[var(--color-bg-secondary)] px-5 py-[120px] md:px-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[60px]">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
            ECOSYSTEM
          </span>
          <h2 className="font-primary text-[32px] font-bold text-[var(--color-text-primary)] md:text-[40px]">
            {t("val_title")}
          </h2>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 70}>
              <div className="flex h-full flex-col items-start gap-3 rounded-lg bg-[var(--color-bg-card)] p-8">
                <h3 className="font-primary text-[20px] font-semibold text-[var(--color-accent-gold)]">
                  {value.title}
                </h3>
                <p className="font-secondary text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
                  {value.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
