import { motion as Motion } from "motion/react";
import { Clock3, Martini, UtensilsCrossed } from "lucide-react";

const promotions = [
  {
    icon: UtensilsCrossed,
    eyebrow: "Promo destacada",
    title: "Menú ejecutivo $199",
    description:
      "Disponible de 13:00 a 17:00. Una opción completa para disfrutar comida bien hecha en un espacio que sí se antoja.",
    footer: "Todos los días",
    bg: "var(--color-accent)",
    text: "#fff8eb",
    border: "rgba(47, 27, 5, 0.08)",
  },
  {
    icon: Martini,
    eyebrow: "Todos los días",
    title: "2x1 en Aperol Spritz",
    description:
      "Una promo pensada para alargar la charla, brindar a gusto y disfrutar el ambiente de Casa Checo con mejor pretexto.",
    footer: "Buenos tragos, mejores momentos",
    bg: "var(--color-primary)",
    text: "#fff8eb",
    border: "rgba(230, 221, 188, 0.14)",
  },
  {
    icon: Clock3,
    eyebrow: "Casa Checo",
    title: "Abierto toda la semana",
    description:
      "Desayunos, comida, tragos y un lugar con jardín, barra e interior amplio para ir entre semana o alargar el plan el fin.",
    footer: "Horarios completos más abajo",
    bg: "rgba(255,255,255,0.58)",
    text: "var(--color-brown)",
    border: "rgba(47, 27, 5, 0.1)",
  },
];

function PromotionsSection() {
  return (
    <section
      id="promociones"
      className="px-6 py-24 sm:px-10 md:px-14"
      style={{ backgroundColor: "#f3ead8" }}
    >
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.35em]"
            style={{ color: "var(--color-terra)" }}
          >
            Promociones y momentos
          </p>

          <h2
            className="text-4xl leading-tight sm:text-5xl"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-title)",
            }}
          >
            Pretextos buenos
            <br />
            para volver.
          </h2>

          <p
            className="mt-6 max-w-2xl text-sm leading-7 sm:text-base"
            style={{
              color: "rgba(47, 27, 5, 0.78)",
              fontFamily: "var(--font-body)",
            }}
          >
            Casa Checo también se disfruta por esos detalles que vuelven más
            fácil decir “vamos”. Desde una buena comida entre semana hasta un
            trago para cerrar el día con calma.
          </p>
        </Motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {promotions.map((promotion, index) => {
            const Icon = promotion.icon;

            return (
              <Motion.article
                key={promotion.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex min-h-[320px] flex-col justify-between rounded-[2rem] border p-7 shadow-sm"
                style={{
                  backgroundColor: promotion.bg,
                  color: promotion.text,
                  borderColor: promotion.border,
                }}
              >
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
                    <Icon size={22} />
                  </div>

                  <p
                    className="text-[11px] uppercase tracking-[0.3em] opacity-75"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {promotion.eyebrow}
                  </p>

                  <h3
                    className="mt-4 text-3xl leading-tight"
                    style={{ fontFamily: "var(--font-title)" }}
                  >
                    {promotion.title}
                  </h3>

                  <p
                    className="mt-5 text-sm leading-7 opacity-90"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {promotion.description}
                  </p>
                </div>

                <div
                  className="mt-8 border-t pt-5 text-xs uppercase tracking-[0.28em] opacity-75"
                  style={{
                    borderColor:
                      promotion.text === "#fff8eb"
                        ? "rgba(255, 248, 235, 0.18)"
                        : "rgba(47, 27, 5, 0.12)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {promotion.footer}
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PromotionsSection;