import { motion as Motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy } from "lucide-react";
import seasonalCampaign from "../data/seasonalCampaign";

function SeasonalBanner() {
  if (!seasonalCampaign.isEnabled) return null;

  return (
    <section
      className="px-4 py-8 sm:px-8 md:px-14"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border"
        style={{
          background:
            "linear-gradient(135deg, rgba(24,35,107,0.98) 0%, rgba(24,35,107,0.88) 55%, rgba(207,134,33,0.95) 100%)",
          borderColor: "rgba(230, 221, 188, 0.15)",
          boxShadow: "0 18px 40px rgba(47, 27, 5, 0.08)",
        }}
      >
        <div className="grid gap-8 px-6 py-8 sm:px-8 md:grid-cols-[1fr_auto] md:items-center md:px-10">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Trophy size={15} color="#fff8eb" />
              <span
                className="text-[10px] uppercase tracking-[0.3em] text-[#fff8eb]/80"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {seasonalCampaign.eyebrow}
              </span>
            </div>

            <h2
              className="text-3xl leading-tight text-[#fff8eb] sm:text-4xl"
              style={{ fontFamily: "var(--font-title)" }}
            >
              {seasonalCampaign.title}
            </h2>

            <p
              className="mt-4 max-w-2xl text-sm leading-7 text-[#fff8eb]/80 sm:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {seasonalCampaign.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <Link
              to="/"
              state={{ scrollTo: seasonalCampaign.ctaTarget }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm shadow-lg"
              style={{
                backgroundColor: "#fff8eb",
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              {seasonalCampaign.ctaLabel}
              <ArrowRight size={16} />
            </Link>

            <div
              className="text-[10px] uppercase tracking-[0.28em] text-[#fff8eb]/62"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Campaña temporal
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}

export default SeasonalBanner;