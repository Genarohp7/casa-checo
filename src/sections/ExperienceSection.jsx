import { motion as Motion } from "motion/react";
import { Coffee, Trees, Wine } from "lucide-react";

const items = [
  {
    icon: Coffee,
    title: "Cocina con intención",
    text: "Desayunos, comida y opciones pensadas para disfrutarse con calma, buen gusto y antojo real.",
  },
  {
    icon: Wine,
    title: "Buenos tragos",
    text: "Un lugar para alargar la charla, brindar a gusto y aprovechar promos que sí se antojan volver costumbre.",
  },
  {
    icon: Trees,
    title: "Espacio para quedarse",
    text: "Interior cálido, jardín amplio y una atmósfera que mezcla luz, madera, vegetación y tranquilidad.",
  },
];

function ExperienceSection() {
  return (
  <section
  id="experiencia"
  className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-14"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-brown) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.35em]"
            style={{ color: "var(--color-terra)" }}
          >
            La experiencia Casa Checo
          </p>

          <h2
            className="text-4xl leading-tight sm:text-5xl"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-title)",
            }}
          >
            Un lugar para comer rico,
            <br />
            tomar algo y pasarla bien.
          </h2>

          <p
            className="mt-6 max-w-2xl text-sm leading-7 sm:text-base"
            style={{
              color: "rgba(47, 27, 5, 0.82)",
              fontFamily: "var(--font-body)",
            }}
          >
            Casa Checo no se siente como un lugar de paso. Se siente como un
            espacio al que quieres volver: por el ambiente, por la atención, por
            el jardín, por la barra y por esa mezcla entre calma y buena vibra
            que no se fuerza.
          </p>
        </Motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="rounded-[2rem] border p-7 shadow-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.55)",
                  borderColor: "rgba(47, 27, 5, 0.1)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <Icon size={22} color="#e6ddbc" />
                </div>

                <h3
                  className="text-xl"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{
                    color: "rgba(47, 27, 5, 0.78)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.text}
                </p>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;