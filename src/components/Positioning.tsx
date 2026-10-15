import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function Positioning() {
  const { t } = useI18n();

  const pillars = [
    { num: "01", title: t("pos_1_title"), desc: t("pos_1_desc") },
    { num: "02", title: t("pos_2_title"), desc: t("pos_2_desc") },
    { num: "03", title: t("pos_3_title"), desc: t("pos_3_desc") },
    { num: "04", title: t("pos_4_title"), desc: t("pos_4_desc") },
    { num: "05", title: t("pos_5_title"), desc: t("pos_5_desc") }
  ];

  return (
    <section id="positioning" className="flex flex-col items-center bg-[var(--color-bg-primary)] px-5 py-[120px] md:px-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[60px]">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
            POSITIONING
          </span>
          <h2 className="font-primary text-[32px] font-bold text-[var(--color-text-primary)] md:text-[40px]">
            {t("pos_title")}
          </h2>
          <p className="max-w-[780px] text-center font-secondary text-[16px] leading-[32px] text-[var(--color-text-secondary)] md:text-[18px]">
            {t("pos_desc")}
          </p>
        </Reveal>

        <div className="flex w-full flex-wrap justify-center gap-6">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.num} delay={i * 60} className="w-[calc(50%-12px)] max-w-[260px] md:w-[260px]">
              <div className="flex h-full flex-col items-center gap-4 rounded-lg bg-[var(--color-bg-card)] px-8 py-8">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#1e1e1e]">
                  <span className="font-secondary text-[16px] font-bold text-[var(--color-accent-gold)]">
                    {pillar.num}
                  </span>
                </div>
                <h3 className="font-primary text-[20px] font-semibold text-[var(--color-text-primary)]">
                  {pillar.title}
                </h3>
                <p className="text-center font-secondary text-[14px] leading-[22px] text-[var(--color-text-secondary)]">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
