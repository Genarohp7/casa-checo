import { motion as Motion } from "motion/react";
import { MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.svg";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/casacheco_restaurante",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: FaWhatsapp,
  },
];

function FooterSection() {
  return (
    <footer
      className="px-6 pb-10 pt-24 sm:px-10 md:px-14"
      style={{ backgroundColor: "#f3ead8" }}
    >
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] px-6 py-10 sm:px-10 sm:py-12"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="Logo Casa Checo"
              className="mb-6 w-28 sm:w-32"
            />

            <h2
              className="text-4xl leading-tight text-[#fff8eb] sm:text-5xl"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Nos vemos en
              <br />
              Casa Checo.
            </h2>

            <p
              className="mt-6 max-w-2xl text-sm leading-7 text-[#fff8eb]/78 sm:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Un lugar para desayunar, comer, tomar algo y disfrutar un ambiente
              con carácter, jardín, barra y buena atención.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href !== "#" ? "_blank" : undefined}
                    rel={item.href !== "#" ? "noreferrer" : undefined}
                    aria-label={item.name}
                    title={item.name}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.05]"
                    style={{
                      borderColor: "rgba(230, 221, 188, 0.18)",
                      backgroundColor: "rgba(230, 221, 188, 0.06)",
                      color: "#fff8eb",
                    }}
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="rounded-[1.8rem] border p-6 sm:p-8"
            style={{
              borderColor: "rgba(230, 221, 188, 0.14)",
              backgroundColor: "rgba(230, 221, 188, 0.06)",
            }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.35em] text-[#e6ddbc]/68"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Visítanos
            </p>

            <div className="mt-5 flex items-start gap-3">
              <div className="mt-1">
                <MapPin size={18} color="#e6ddbc" />
              </div>

              <div>
                <p
                  className="text-base text-[#fff8eb]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Plaza Cuicuilco
                </p>

                <p
                  className="mt-2 text-sm leading-7 text-[#fff8eb]/74"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Av. San Fernando 649
                </p>
              </div>
            </div>

            <div
              className="mt-8 border-t pt-6 text-xs uppercase tracking-[0.28em] text-[#e6ddbc]/62"
              style={{
                borderColor: "rgba(230, 221, 188, 0.12)",
                fontFamily: "var(--font-body)",
              }}
            >
              Casa Checo — buena comida, buenos tragos, mejores momentos
            </div>
          </Motion.div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;