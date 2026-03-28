import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import menu1 from "../assets/menu/pagina1.jpeg";
import menu2 from "../assets/menu/pagina2.jpeg";
import menu3 from "../assets/menu/pagina3.jpeg";
import menu4 from "../assets/menu/pagina4.jpeg";

const pages = [menu1, menu2, menu3, menu4];

function MenuPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < pages.length - 1;

  useEffect(() => {
    pages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handlePrev = () => {
    if (canGoPrev) setCurrentPage((p) => p - 1);
  };

  const handleNext = () => {
    if (canGoNext) setCurrentPage((p) => p + 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (canGoNext) setCurrentPage((p) => p + 1);
    },
    onSwipedRight: () => {
      if (canGoPrev) setCurrentPage((p) => p - 1);
    },
    trackMouse: true,
  });

  return (
    <main
      className="min-h-screen px-3 pb-8 pt-20 sm:px-4 sm:pb-12 sm:pt-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center justify-between sm:mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#fff",
            }}
          >
            <ArrowLeft size={16} />
            Volver
          </Link>

          <div
            className="text-[10px] tracking-[0.28em] sm:text-xs sm:tracking-[0.3em]"
            style={{ color: "var(--color-brown)" }}
          >
            {currentPage + 1} / {pages.length}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="absolute left-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition hover:scale-[1.04] disabled:opacity-30 md:inline-flex"
            style={{
              borderColor: "rgba(47, 27, 5, 0.12)",
              backgroundColor: "rgba(255, 255, 255, 0.62)",
              color: "var(--color-brown)",
              boxShadow: "0 8px 20px rgba(47, 27, 5, 0.08)",
            }}
            aria-label="Página anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            {...handlers}
            className="w-full overflow-hidden rounded-[1.35rem] shadow-xl sm:rounded-2xl"
          >
            <img
              key={currentPage}
              src={pages[currentPage]}
              alt={`Menú página ${currentPage + 1}`}
              className="h-auto max-h-[82svh] w-full object-contain transition-all duration-300 ease-in-out sm:max-h-[84vh]"
            />
          </div>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="absolute right-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition hover:scale-[1.04] disabled:opacity-30 md:inline-flex"
            style={{
              borderColor: "rgba(47, 27, 5, 0.12)",
              backgroundColor: "rgba(255, 255, 255, 0.62)",
              color: "var(--color-brown)",
              boxShadow: "0 8px 20px rgba(47, 27, 5, 0.08)",
            }}
            aria-label="Página siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index)}
              aria-label={`Ir a la página ${index + 1}`}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: currentPage === index ? "28px" : "10px",
                backgroundColor:
                  currentPage === index
                    ? "var(--color-primary)"
                    : "rgba(47, 27, 5, 0.22)",
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MenuPage;