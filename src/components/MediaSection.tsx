import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function MediaSection() {
  const { t } = useI18n();

  const mediaItems = [
    { tag: t("media_video_1"), note: "Long-form documentary" },
    { tag: t("media_video_2"), note: "Roundtable highlights" },
    { tag: t("media_video_3"), note: "Short-form series" }
  ];

  return (
    <section className="flex flex-col items-center bg-[var(--color-bg-secondary)] px-5 py-[120px] md:px-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[60px]">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="font-secondary text-[12px] font-medium tracking-[4px] text-[var(--color-accent-gold)]">
            MULTIMEDIA
          </span>
          <h2 className="font-primary text-[32px] font-bold text-[var(--color-text-primary)] md:text-[40px]">
            {t("media_title")}
          </h2>
          <p className="text-center font-secondary text-[16px] text-[var(--color-text-secondary)]">
            {t("media_desc")}
          </p>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {mediaItems.map((item, i) => (
            <Reveal key={item.tag} delay={i * 80}>
              <div className="flex h-full flex-col gap-4">
                {/* Video thumbnail placeholder with play button */}
                <div className="group relative flex h-[220px] items-center justify-center overflow-hidden rounded-lg bg-[var(--color-bg-card)]">
                  {/* Subtle cinematic gradient hint */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-60"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,169,110,0.06) 0%, rgba(10,10,10,0) 45%, rgba(30,30,30,0.5) 100%)"
                    }}
                  />
                  <button
                    aria-label={`Play ${item.tag}`}
                    className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-gold)] transition-transform group-hover:scale-110"
                  >
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <path d="M15 8.134a1 1 0 010 1.732l-12 6.928a1 1 0 01-1.5-.866V2.072a1 1 0 011.5-.866l12 6.928z" fill="#0A0A0A" />
                    </svg>
                  </button>
                </div>
                <span className="font-secondary text-[14px] font-medium text-[var(--color-accent-gold)]">
                  {item.tag}
                </span>
                <span className="font-secondary text-[13px] text-[var(--color-text-secondary)]">
                  {item.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
