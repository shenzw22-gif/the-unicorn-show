import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function Cooperation() {
  const { t } = useI18n();

  const plans = [
    {
      name: t("coop_1_title"),
      price: t("coop_1_price"),
      featured: false,
      items: [
        t("coop_1_feature_1"),
        t("coop_1_feature_2"),
        t("coop_1_feature_3"),
        t("coop_1_feature_4")
      ]
    },
    {
      name: t("coop_2_title"),
      price: t("coop_2_price"),
      featured: false,
      items: [
        t("coop_2_feature_1"),
        t("coop_2_feature_2"),
        t("coop_2_feature_3"),
        t("coop_2_feature_4")
      ]
    },
    {
      name: t("coop_3_title"),
      price: t("coop_3_price"),
      featured: true,
      items: [
        t("coop_3_feature_1"),
        t("coop_3_feature_2"),
        t("coop_3_feature_3"),
        t("coop_3_feature_4")
      ]
    },
    {
      name: t("coop_4_title"),
      price: t("coop_4_price"),
      featured: false,
      items: [
        t("coop_4_feature_1"),
        t("coop_4_feature_2"),
        t("coop_4_feature_3")
      ]
    }
  ];

  return (
    <section id="cooperation" className="flex flex-col items-center bg-[var(--color-bg-secondary)] px-5 py-[120px] md:px-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[60px]">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
            COOPERATION
          </span>
          <h2 className="font-primary text-[32px] font-bold text-[var(--color-text-primary)] md:text-[40px]">
            {t("coop_title")}
          </h2>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 70}>
              <div
                className={`flex h-full flex-col items-start gap-4 rounded-lg p-10 ${
                  plan.featured
                    ? "border-2 border-[var(--color-accent-gold)] bg-[var(--color-bg-card)]"
                    : "bg-[var(--color-bg-card)]"
                }`}
              >
                <h3 className="font-primary text-[22px] font-semibold text-[var(--color-text-primary)]">
                  {plan.name}
                </h3>
                <span className="font-secondary text-[32px] font-bold text-[var(--color-accent-gold)]">
                  {plan.price}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="font-secondary whitespace-pre-line text-[14px] leading-[24px] text-[var(--color-text-secondary)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
