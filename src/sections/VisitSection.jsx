import { motion as Motion } from "motion/react";
import { Clock3, MapPin, Navigation } from "lucide-react";

const schedule = [
  { days: "Lunes a miércoles", hours: "9:00 am — 7:00 pm" },
  { days: "Jueves a sábado", hours: "7:00 am — 2:00 am" },
  { days: "Domingo", hours: "7:00 am — 6:00 pm" },
];

function VisitSection() {
  return (
    <section
      id="ubicacion"
      className="px-6 py-24 sm:px-10 md:px-14"
      style={{ backgroundColor: "var(--color-brown)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="rounded-[2rem] border p-8 sm:p-10"
          style={{
            borderColor: "rgba(230, 221, 188, 0.14)",
            backgroundColor: "rgba(230, 221, 188, 0.06)",
          }}
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6ddbc]/10">
            <Clock3 size={22} color="#e6ddbc" />
          </div>

          <p
            className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#e6ddbc]/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Horarios
          </p>

          <h2
            className="text-4xl leading-tight text-[#fff8eb] sm:text-5xl"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Ven cuando
            <br />
            mejor te acomode.
          </h2>

          <div className="mt-8 space-y-4">
            {schedule.map((item) => (
              <div
                key={item.days}
                className="flex flex-col gap-2 rounded-[1.5rem] border px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                style={{
                  borderColor: "rgba(230, 221, 188, 0.12)",
                  backgroundColor: "rgba(230, 221, 188, 0.04)",
                }}
              >
                <span
                  className="text-sm text-[#fff8eb]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.days}
                </span>

                <span
                  className="text-sm text-[#e6ddbc]/75"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          className="rounded-[2rem] p-8 sm:p-10"
          style={{
            backgroundColor: "#f3ead8",
            color: "var(--color-brown)",
          }}
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(24,35,107,0.08)]">
            <MapPin size={22} color="#18236b" />
          </div>

          <p
            className="mb-4 text-[11px] uppercase tracking-[0.35em]"
            style={{
              color: "var(--color-terra)",
              fontFamily: "var(--font-body)",
            }}
          >
            Ubicación
          </p>

          <h2
            className="text-4xl leading-tight sm:text-5xl"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-title)",
            }}
          >
            Plaza Cuicuilco,
            <br />
            Av. San Fernando 649
          </h2>

          <p
            className="mt-6 max-w-xl text-sm leading-7 sm:text-base"
            style={{
              color: "rgba(47, 27, 5, 0.8)",
              fontFamily: "var(--font-body)",
            }}
          >
            Un espacio para desayunar, comer, tomar algo o simplemente alargar
            el plan en un lugar con jardín, barra e interior amplio.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div
              className="rounded-[1.5rem] border px-5 py-4"
              style={{
                borderColor: "rgba(47, 27, 5, 0.1)",
                backgroundColor: "rgba(255,255,255,0.45)",
              }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.28em]"
                style={{
                  color: "rgba(47, 27, 5, 0.5)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Zona
              </p>

              <p
                className="mt-2 text-sm"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Sur de la CDMX
              </p>
            </div>

            <div
              className="rounded-[1.5rem] border px-5 py-4"
              style={{
                borderColor: "rgba(47, 27, 5, 0.1)",
                backgroundColor: "rgba(255,255,255,0.45)",
              }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.28em]"
                style={{
                  color: "rgba(47, 27, 5, 0.5)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Ambiente
              </p>

              <p
                className="mt-2 text-sm"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Casual, cálido y con carácter
              </p>
            </div>
          </div>

        <Motion.a
  href="https://www.google.com/maps/place/Casa+Checo/@19.2973656,-99.1824757,19z/data=!4m6!3m5!1s0x85ce012337126625:0x1af168ec3a392ce4!8m2!3d19.2970377!4d-99.1823669!16s%2Fg%2F11yxy3mtll?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noreferrer"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm shadow-lg"
  style={{
    backgroundColor: "var(--color-primary)",
    color: "#fff8eb",
    fontFamily: "var(--font-body)",
  }}
>
  Cómo llegar
  <Navigation size={16} color="#fff8eb" />
</Motion.a>
        </Motion.div>
      </div>
    </section>
  );
}

export default VisitSection;