import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function Production() {
  const { t } = useI18n();

  const items = [
    { title: t("prod_1_title"), desc: t("prod_1_desc") },
    { title: t("prod_2_title"), desc: t("prod_2_desc") },
    { title: t("prod_3_title"), desc: t("prod_3_desc") }
  ];

  return (
    <section className="flex flex-col items-center bg-[var(--color-bg-primary)] px-5 py-[120px] md:px-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[60px]">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
            PRODUCTION
          </span>
          <h2 className="font-primary text-[32px] font-bold text-[var(--color-text-primary)] md:text-[40px]">
            {t("prod_title")}
          </h2>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex h-full flex-col items-start gap-4 rounded-lg bg-[var(--color-bg-card)] p-10">
                <h3 className="font-primary text-[22px] font-semibold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="font-secondary text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
