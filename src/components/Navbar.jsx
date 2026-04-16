import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const links = [
  { label: "Promociones", section: "promociones" },
  { label: "Espacio", section: "espacio" },
  { label: "Ubicación", section: "ubicacion" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
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
          <Link
            to="/"
            state={{ scrollTo: "top" }}
            className="flex items-center gap-3"
            onClick={handleCloseMenu}
          >
            <img src={logo} alt="Casa Checo" className="h-9 w-auto sm:h-10" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to="/"
                state={{ scrollTo: link.section }}
                className="text-xs uppercase tracking-[0.24em] transition duration-300 hover:opacity-100"
                style={{
                  color: "#fff8eb",
                  opacity: 0.82,
                  fontFamily: "var(--font-body)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden items-center whitespace-nowrap rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.14em] lg:inline-flex"
              style={{
                border: "1px solid rgba(230, 221, 188, 0.2)",
                color: "#fff8eb",
                fontFamily: "var(--font-body)",
                backgroundColor: "rgba(230, 221, 188, 0.08)",
              }}
            >
              Eventos en Aura
            </button>

            <Link
              to="/menu"
              className="hidden items-center rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.2em] lg:inline-flex"
              style={{
                border: "1px solid rgba(230, 221, 188, 0.2)",
                color: "#fff8eb",
                fontFamily: "var(--font-body)",
                backgroundColor: "rgba(230, 221, 188, 0.08)",
              }}
            >
              Menú
            </Link>

            <Link
              to="/"
              state={{ scrollTo: "ubicacion" }}
              className="hidden items-center rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.2em] lg:inline-flex"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#fff8eb",
                fontFamily: "var(--font-body)",
                boxShadow: "0 8px 20px rgba(207, 134, 33, 0.25)",
              }}
            >
              Visítanos
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden"
              style={{
                borderColor: "rgba(230, 221, 188, 0.18)",
                backgroundColor: "rgba(230, 221, 188, 0.08)",
                color: "#fff8eb",
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm lg:hidden"
              onClick={handleCloseMenu}
            />

            <Motion.aside
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-4 right-4 top-20 z-50 rounded-[2rem] border p-6 shadow-2xl lg:hidden"
              style={{
                backgroundColor: "rgba(24, 35, 107, 0.96)",
                borderColor: "rgba(230, 221, 188, 0.14)",
              }}
            >
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="rounded-2xl px-4 py-4 text-sm uppercase tracking-[0.16em] text-left transition"
                  style={{
                    color: "#fff8eb",
                    backgroundColor: "rgba(230, 221, 188, 0.1)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Aura
                </button>

                <Link
                  to="/menu"
                  onClick={handleCloseMenu}
                  className="rounded-2xl px-4 py-4 text-sm uppercase tracking-[0.22em] transition"
                  style={{
                    color: "#fff8eb",
                    backgroundColor: "rgba(230, 221, 188, 0.1)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Menú
                </Link>

                {links.map((link) => (
                  <Link
                    key={link.label}
                    to="/"
                    state={{ scrollTo: link.section }}
                    onClick={handleCloseMenu}
                    className="rounded-2xl px-4 py-4 text-sm uppercase tracking-[0.22em] transition"
                    style={{
                      color: "#fff8eb",
                      backgroundColor: "rgba(230, 221, 188, 0.06)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/"
                state={{ scrollTo: "ubicacion" }}
                onClick={handleCloseMenu}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.22em]"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#fff8eb",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 8px 20px rgba(207, 134, 33, 0.25)",
                }}
              >
                Visítanos
              </Link>
            </Motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;