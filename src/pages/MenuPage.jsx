import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function MenuPage() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:px-10 md:px-14"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm shadow-sm"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "#fff8eb",
            fontFamily: "var(--font-body)",
          }}
        >
          <ArrowLeft size={16} />
          Volver al sitio
        </Link>

        <div className="mt-10 max-w-3xl">
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.35em]"
            style={{
              color: "var(--color-terra)",
              fontFamily: "var(--font-body)",
            }}
          >
            Menú Casa Checo
          </p>

          <h1
            className="text-4xl leading-tight sm:text-5xl"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-title)",
            }}
          >
            Aquí vivirá el menú
            <br />
            interactivo.
          </h1>

          <p
            className="mt-6 text-sm leading-7 sm:text-base"
            style={{
              color: "rgba(47, 27, 5, 0.78)",
              fontFamily: "var(--font-body)",
            }}
          >
            Esta página será la base del menú digital de Casa Checo. En el
            siguiente paso empezaremos a construir la experiencia visual tipo
            libro, pensada especialmente para móvil y sin perder calidad al
            hacer zoom.
          </p>
        </div>
      </div>
    </main>
  );
}

export default MenuPage;