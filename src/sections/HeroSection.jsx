import { motion as Motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "../assets/14.jpeg";
import logo from "../assets/logo.svg";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa Checo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(47, 27, 5, 0.72) 0%, rgba(47, 27, 5, 0.18) 40%, rgba(0, 0, 0, 0.12) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-end px-6 pb-14 pt-28 sm:px-10 md:items-center md:pb-20">
        <div className="max-w-3xl">
          <Motion.img
            src={logo}
            alt="Logo Casa Checo"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 w-32 sm:w-36 md:w-40"
          />

          <Motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#e6ddbc]/85 sm:text-xs"
          >
            Plaza Cuicuilco
          </Motion.p>

          <Motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl leading-tight text-[#fff8eb] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Buena comida,
            <br />
            buenos tragos,
            <br />
            mejores momentos.
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-sm leading-7 text-white/78 sm:text-base"
          >
            Un espacio con carácter, luz, jardín y una atmósfera pensada para
            disfrutar desayunos, comida, tragos y tiempo bien pasado.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Motion.a
              href="#ubicacion"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-[#fff8eb] shadow-lg"
              style={{
                backgroundColor: "var(--color-accent)",
                fontFamily: "var(--font-body)",
              }}
            >
              Ver ubicación
              <MapPin size={16} />
            </Motion.a>

            <Motion.a
              href="#promociones"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm text-[#fff8eb] backdrop-blur-sm"
              style={{
                borderColor: "rgba(230, 221, 188, 0.35)",
                backgroundColor: "rgba(230, 221, 188, 0.08)",
                fontFamily: "var(--font-body)",
              }}
            >
              Ver promociones
              <ArrowRight size={16} />
            </Motion.a>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;