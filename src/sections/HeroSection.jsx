import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { motion as Motion } from "motion/react";

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <Motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70"
        >
          <MapPin size={14} />
          Casa Checo
        </Motion.span>

        <Motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          Una experiencia que se recuerda desde que llegas
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Un espacio creado para disfrutar, convivir y vivir momentos con estilo,
          presencia y una atención que marca la diferencia.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60"
        >
          <div className="inline-flex items-center gap-2">
            <CalendarDays size={16} />
            Atención con detalle
          </div>

          <div className="inline-flex items-center gap-2">
            <MapPin size={16} />
            Experiencia y presencia
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Reservar
            <ArrowRight size={16} />
          </Motion.button>

          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Conocer más
          </Motion.button>
        </Motion.div>
      </div>
    </section>
  );
}

export default HeroSection;