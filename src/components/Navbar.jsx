import { motion as Motion } from "motion/react";
import logo from "../assets/logo.svg";

const links = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Espacio", href: "#espacio" },
  { label: "Promociones", href: "#promociones" },
  { label: "Ubicación", href: "#ubicacion" },
];

function Navbar() {
  return (
    <Motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 shadow-lg backdrop-blur-xl sm:px-6"
        style={{
          backgroundColor: "rgba(24, 35, 107, 0.58)",
          borderColor: "rgba(230, 221, 188, 0.14)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
        }}
      >
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Casa Checo" className="h-9 w-auto sm:h-10" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.24em] transition duration-300 hover:opacity-100"
              style={{
                color: "#fff8eb",
                opacity: 0.82,
                fontFamily: "var(--font-body)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#ubicacion"
          className="inline-flex items-center rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.2em] sm:px-5 sm:text-[11px]"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "#fff8eb",
            fontFamily: "var(--font-body)",
            boxShadow: "0 8px 20px rgba(207, 134, 33, 0.25)",
          }}
        >
          Visítanos
        </a>
      </div>
    </Motion.header>
  );
}

export default Navbar;