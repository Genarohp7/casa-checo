import { motion as Motion } from "motion/react";
import image14 from "../assets/14.jpeg";
import image10 from "../assets/10.jpeg";
import image16 from "../assets/16.jpeg";

function SpaceSection() {
  return (
    <section
      className="px-6 py-24 sm:px-10 md:px-14"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.35em]"
            style={{ color: "rgba(230, 221, 188, 0.82)" }}
          >
            El espacio
          </p>

          <h2
            className="text-4xl leading-tight text-[#fff8eb] sm:text-5xl"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Un lugar con
            <br />
            luz, madera,
            <br />
            jardín y carácter.
          </h2>

          <p
            className="mt-6 max-w-xl text-sm leading-7 text-[#fff8eb]/78 sm:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Casa Checo combina interiores amplios, materiales cálidos, barra,
            vegetación y un jardín que cambia por completo la experiencia. Es un
            lugar que se siente abierto, relajado y con mucha mejor vibra de la
            que promete una foto.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div
              className="rounded-[1.5rem] border px-5 py-4"
              style={{
                borderColor: "rgba(230, 221, 188, 0.18)",
                backgroundColor: "rgba(230, 221, 188, 0.06)",
              }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.28em] text-[#fff8eb]/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Ambiente
              </p>
              <p
                className="mt-2 text-sm text-[#fff8eb]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Interior cálido + exterior verde
              </p>
            </div>

            <div
              className="rounded-[1.5rem] border px-5 py-4"
              style={{
                borderColor: "rgba(230, 221, 188, 0.18)",
                backgroundColor: "rgba(230, 221, 188, 0.06)",
              }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.28em] text-[#fff8eb]/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Sensación
              </p>
              <p
                className="mt-2 text-sm text-[#fff8eb]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Espacio para quedarte a gusto
              </p>
            </div>
          </div>
        </Motion.div>

        <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="overflow-hidden rounded-[2rem]"
          >
            <img
              src={image14}
              alt="Interior principal de Casa Checo"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </Motion.div>

          <div className="grid gap-4">
            <Motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
              className="overflow-hidden rounded-[2rem]"
            >
              <img
                src={image10}
                alt="Jardín y terraza de Casa Checo"
                className="h-[205px] w-full object-cover"
              />
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
              className="overflow-hidden rounded-[2rem]"
            >
              <img
                src={image16}
                alt="Barra e interior de Casa Checo"
                className="h-[205px] w-full object-cover"
              />
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaceSection;