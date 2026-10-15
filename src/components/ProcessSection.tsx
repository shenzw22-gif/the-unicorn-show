import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function ProcessSection() {
  const { t } = useI18n();

  const steps = [
    { no: "01", title: t("proc_step_1"), desc: t("proc_step_1_desc") },
    { no: "02", title: t("proc_step_2"), desc: t("proc_step_2_desc") },
    { no: "03", title: t("proc_step_3"), desc: t("proc_step_3_desc") },
    { no: "04", title: t("proc_step_4"), desc: t("proc_step_4_desc") },
    { no: "05", title: t("proc_step_5"), desc: t("proc_step_5_desc") },
    { no: "06", title: t("proc_step_6"), desc: t("proc_step_6_desc") }
  ];

  return (
    <section
      id="process"
      className="flex flex-col items-center border-t border-[var(--color-border-color)] px-5 py-[120px] md:px-20"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[60px]">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
            WORKFLOW
          </span>
          <h2 className="font-primary text-[32px] font-bold text-[var(--color-text-primary)] md:text-[40px]">
            {t("proc_title")}
          </h2>
          <p className="font-secondary text-[15px] leading-[26px] text-[var(--color-text-secondary)]">
            {t("proc_desc")}
          </p>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 60}>
              <div className="flex h-full flex-col items-start gap-4 rounded-lg bg-[var(--color-bg-card)] p-8">
                <span className="font-primary text-[40px] font-bold leading-none text-[var(--color-accent-gold)]">
                  {step.no}
                </span>
                <div className="h-px w-full bg-[var(--color-border-color)]" />
                <h3 className="font-primary text-[20px] font-semibold text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="font-secondary text-[14px] leading-[24px] text-[var(--color-text-secondary)]">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
