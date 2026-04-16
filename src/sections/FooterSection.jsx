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
    href: "https://wa.me/525549453061",
    icon: FaWhatsapp,
  },
];

function FooterSection() {
  return (
    <footer
      className="px-6 pb-6 pt-14 sm:px-10 md:px-14"
      style={{ backgroundColor: "#f3ead8" }}
    >
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] px-5 py-6 sm:px-7 sm:py-7"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Logo Casa Checo"
                className="w-16 sm:w-20"
              />

              <div>
                <h2
                  className="text-2xl leading-tight text-[#fff8eb] sm:text-3xl"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  Nos vemos en Casa Checo.
                </h2>

                <p
                  className="mt-2 max-w-2xl text-xs leading-6 text-[#fff8eb]/78 sm:text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Un restaurante para desayunar, comer y disfrutar un espacio
                  con jardín, barra y una atmósfera con identidad propia.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href !== "#";

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={item.name}
                    title={item.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.05]"
                    style={{
                      borderColor: "rgba(230, 221, 188, 0.18)",
                      backgroundColor: "rgba(230, 221, 188, 0.06)",
                      color: "#fff8eb",
                    }}
                  >
                    <Icon size={16} />
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
            className="rounded-[1.4rem] border p-5 sm:p-6"
            style={{
              borderColor: "rgba(230, 221, 188, 0.14)",
              backgroundColor: "rgba(230, 221, 188, 0.06)",
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.32em] text-[#e6ddbc]/68"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Visítanos
            </p>

            <div className="mt-4 flex items-start gap-3">
              <div className="mt-1">
                <MapPin size={16} color="#e6ddbc" />
              </div>

              <div>
                <p
                  className="text-sm text-[#fff8eb] sm:text-base"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Plaza Cuicuilco
                </p>

                <p
                  className="mt-1 text-xs leading-6 text-[#fff8eb]/74 sm:text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Av. San Fernando 649
                </p>
              </div>
            </div>

            <div
              className="mt-5 border-t pt-4 text-[10px] uppercase tracking-[0.24em] text-[#e6ddbc]/62"
              style={{
                borderColor: "rgba(230, 221, 188, 0.12)",
                fontFamily: "var(--font-body)",
              }}
            >
              Casa Checo — cocina, barra y ambiente con carácter
            </div>
          </Motion.div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;