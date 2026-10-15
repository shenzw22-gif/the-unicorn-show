import { Fragment } from "react";
import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function Stats() {
  const { t } = useI18n();

  const stats = [
    { num: t("stats_1_value"), label: t("stats_1_label") },
    { num: t("stats_2_value"), label: t("stats_2_label") },
    { num: t("stats_3_value"), label: t("stats_3_label") },
    { num: t("stats_4_value"), label: t("stats_4_label") }
  ];

  return (
    <section className="flex flex-col items-center bg-[var(--color-bg-primary)] px-5 py-20 md:px-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 md:flex-row md:gap-0">
        {stats.map((stat, i) => (
          <Fragment key={stat.num}>
            {i > 0 && (
              <span
                aria-hidden
                className="hidden h-[60px] w-px shrink-0 bg-[var(--color-border-color)] md:block"
              />
            )}
            <Reveal delay={i * 70} className="flex w-full flex-col items-center gap-2">
              <span className="font-secondary text-[40px] leading-none font-bold text-[var(--color-accent-gold)] md:text-[48px]">
                {stat.num}
              </span>
              <span className="text-center font-secondary text-[16px] text-[var(--color-text-secondary)]">
                {stat.label}
              </span>
            </Reveal>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
