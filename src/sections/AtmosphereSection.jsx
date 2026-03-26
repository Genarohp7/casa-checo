import { motion as Motion } from "motion/react";
import image11 from "../assets/11.jpeg";
import image12 from "../assets/12.jpeg";
import image15 from "../assets/15.jpeg";

function AtmosphereSection() {
  return (
    <section
      className="px-6 py-24 sm:px-10 md:px-14"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.35em]"
            style={{
              color: "var(--color-terra)",
              fontFamily: "var(--font-body)",
            }}
          >
            El ambiente
          </p>

          <h2
            className="text-4xl leading-tight sm:text-5xl"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-title)",
            }}
          >
            Un lugar que cambia
            <br />
            cómo se siente el plan.
          </h2>

          <p
            className="mt-6 text-sm leading-7 sm:text-base"
            style={{
              color: "rgba(47, 27, 5, 0.78)",
              fontFamily: "var(--font-body)",
            }}
          >
            Casa Checo tiene esa mezcla rara y buena entre calma, luz, diseño y
            naturaleza. Se presta para una comida tranquila, un trago largo, una
            reunión casual o simplemente una mejor pausa en el día.
          </p>
        </Motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1.15fr_0.95fr]">
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="overflow-hidden rounded-[2rem]"
          >
            <img
              src={image11}
              alt="Jardín de Casa Checo"
              className="h-[420px] w-full object-cover"
            />
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="overflow-hidden rounded-[2rem]"
          >
            <img
              src={image12}
              alt="Entrada e interior de Casa Checo"
              className="h-[420px] w-full object-cover"
            />
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.75, delay: 0.16, ease: "easeOut" }}
            className="overflow-hidden rounded-[2rem]"
          >
            <img
              src={image15}
              alt="Barra e interior cálido de Casa Checo"
              className="h-[420px] w-full object-cover"
            />
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

export default AtmosphereSection;