import { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import {
  ArrowLeft,
  ChevronUp,
  Martini,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "react-router-dom";
import MENU_DATA from "../data/menuData";

function normalizeLabel(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function TabButton({ isActive, onClick, icon, children }) {
  const IconComponent = icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-[1px] hover:scale-[1.02]"
      style={{
        background: isActive
          ? "linear-gradient(135deg, rgba(24,35,107,1) 0%, rgba(42,60,160,0.96) 100%)"
          : "rgba(255,255,255,0.56)",
        color: isActive ? "#fff8eb" : "var(--color-brown)",
        border: isActive
          ? "1px solid rgba(24, 35, 107, 0.18)"
          : "1px solid rgba(47, 27, 5, 0.12)",
        boxShadow: isActive
          ? "0 14px 30px rgba(24, 35, 107, 0.22)"
          : "0 8px 18px rgba(47, 27, 5, 0.04)",
        fontFamily: "var(--font-body)",
      }}
    >
      {IconComponent ? <IconComponent size={16} /> : null}
      {children}
    </button>
  );
}

function CategoryChip({ onClick, children, highlight = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="whitespace-nowrap rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-[1px] hover:scale-[1.02]"
      style={{
        backgroundColor: highlight
          ? "rgba(207, 134, 33, 0.16)"
          : "rgba(255,255,255,0.72)",
        border: highlight
          ? "1px solid rgba(207, 134, 33, 0.34)"
          : "1px solid rgba(47, 27, 5, 0.08)",
        color: highlight ? "var(--color-primary)" : "var(--color-brown)",
        fontFamily: "var(--font-body)",
        boxShadow: highlight
          ? "0 10px 22px rgba(207, 134, 33, 0.12)"
          : "0 8px 18px rgba(47, 27, 5, 0.04)",
      }}
    >
      {children}
    </button>
  );
}

function StandardItem({ item }) {
  return (
    <article
      className="rounded-[1.4rem] border px-4 py-4 transition duration-300 hover:-translate-y-[1px]"
      style={{
        borderColor: "rgba(47, 27, 5, 0.08)",
        backgroundColor: "rgba(255,255,255,0.72)",
        boxShadow: "0 10px 24px rgba(47, 27, 5, 0.035)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            className="text-base leading-tight"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-body)",
            }}
          >
            {item.name}
            {item.meta ? (
              <span className="ml-1 text-sm opacity-60">({item.meta})</span>
            ) : null}
          </h3>

          {item.description ? (
            <p
              className="mt-2 max-w-2xl text-sm leading-6"
              style={{
                color: "rgba(47, 27, 5, 0.72)",
                fontFamily: "var(--font-body)",
              }}
            >
              {item.description}
            </p>
          ) : null}
        </div>

        <div
          className="shrink-0 rounded-full px-3 py-2 text-sm"
          style={{
            backgroundColor: "rgba(24,35,107,0.08)",
            color: "var(--color-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          {item.price}
        </div>
      </div>
    </article>
  );
}

function SpiritItem({ item }) {
  return (
    <article
      className="rounded-[1.5rem] border px-4 py-4 transition duration-300 hover:-translate-y-[1px]"
      style={{
        borderColor: "rgba(47, 27, 5, 0.08)",
        backgroundColor: "rgba(255,255,255,0.72)",
        boxShadow: "0 10px 24px rgba(47, 27, 5, 0.035)",
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3
            className="text-base leading-tight"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-body)",
            }}
          >
            {item.name}
            {item.meta ? (
              <span className="ml-1 text-sm opacity-60">({item.meta})</span>
            ) : null}
          </h3>

          {item.description ? (
            <p
              className="mt-2 text-sm leading-6"
              style={{
                color: "rgba(47, 27, 5, 0.72)",
                fontFamily: "var(--font-body)",
              }}
            >
              {item.description}
            </p>
          ) : null}
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-3 sm:min-w-[200px]">
          <div
            className="rounded-[1.2rem] px-3 py-3 text-center"
            style={{
              backgroundColor: "rgba(24, 35, 107, 0.07)",
              border: "1px solid rgba(24, 35, 107, 0.08)",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{
                color: "rgba(47, 27, 5, 0.52)",
                fontFamily: "var(--font-body)",
              }}
            >
              Botella
            </div>
            <div
              className="mt-1 text-sm"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              {item.bottlePrice}
            </div>
          </div>

          <div
            className="rounded-[1.2rem] px-3 py-3 text-center"
            style={{
              backgroundColor: "rgba(207, 134, 33, 0.09)",
              border: "1px solid rgba(207, 134, 33, 0.12)",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{
                color: "rgba(47, 27, 5, 0.52)",
                fontFamily: "var(--font-body)",
              }}
            >
              Copa
            </div>
            <div
              className="mt-1 text-sm"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              {item.servePrice}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function SpecialSection({ section }) {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border p-6 sm:p-7"
      style={{
        background:
          "linear-gradient(135deg, rgba(24,35,107,0.98) 0%, rgba(24,35,107,0.92) 55%, rgba(207,134,33,0.92) 100%)",
        borderColor: "rgba(230, 221, 188, 0.14)",
        boxShadow: "0 20px 40px rgba(47, 27, 5, 0.08)",
      }}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#fff8eb]/10 blur-2xl" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p
            className="text-[11px] uppercase tracking-[0.3em] text-[#fff8eb]/72"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Especial
          </p>

          <h2
            className="mt-3 text-3xl leading-tight text-[#fff8eb]"
            style={{ fontFamily: "var(--font-title)" }}
          >
            {section.title}
          </h2>
        </div>

        <div
          className="rounded-full px-4 py-2 text-sm"
          style={{
            backgroundColor: "#fff8eb",
            color: "var(--color-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          {section.price}
        </div>
      </div>

      <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2">
        {section.included.map((item) => (
          <div
            key={item}
            className="rounded-[1.2rem] border px-4 py-3 text-sm"
            style={{
              borderColor: "rgba(255, 248, 235, 0.14)",
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "#fff8eb",
              fontFamily: "var(--font-body)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuSection({ section, index }) {
  const motionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.55, delay: index * 0.03, ease: "easeOut" },
  };

  if (section.special) {
    return (
      <Motion.section id={section.id} className="scroll-mt-28" {...motionProps}>
        <SpecialSection section={section} />
      </Motion.section>
    );
  }

  return (
    <Motion.section
      id={section.id}
      className="scroll-mt-28 rounded-[2rem] border p-6 sm:p-7"
      style={{
        backgroundColor: "rgba(255,255,255,0.5)",
        borderColor: "rgba(47, 27, 5, 0.08)",
        boxShadow: "0 14px 30px rgba(47, 27, 5, 0.045)",
      }}
      {...motionProps}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div
            className="h-px w-10"
            style={{ backgroundColor: "rgba(207, 134, 33, 0.42)" }}
          />
          <p
            className="text-[11px] uppercase tracking-[0.3em]"
            style={{
              color: "var(--color-terra)",
              fontFamily: "var(--font-body)",
            }}
          >
            Casa Checo
          </p>
        </div>

        <h2
          className="mt-4 text-3xl leading-tight sm:text-4xl"
          style={{
            color: "var(--color-brown)",
            fontFamily: "var(--font-title)",
          }}
        >
          {section.title}
        </h2>
      </div>

      <div className="space-y-4">
        {section.items.map((item) =>
          section.spirits ? (
            <SpiritItem key={item.name} item={item} />
          ) : (
            <StandardItem key={item.name} item={item} />
          ),
        )}
      </div>
    </Motion.section>
  );
}

function MenuPage() {
  const [activeTab, setActiveTab] = useState("foods");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const currentMenu = MENU_DATA[activeTab];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const handleJump = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pt-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-15 top-16 h-48 w-48 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(24, 35, 107, 0.08)" }}
        />
        <div
          className="absolute -right-10 top-44 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(207, 134, 33, 0.09)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-[1px] hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#fff8eb",
              fontFamily: "var(--font-body)",
              boxShadow: "0 12px 24px rgba(24, 35, 107, 0.18)",
            }}
          >
            <ArrowLeft size={16} />
            Volver
          </Link>

          <div
            className="text-[10px] uppercase tracking-[0.32em] sm:text-xs"
            style={{
              color: "rgba(47, 27, 5, 0.62)",
              fontFamily: "var(--font-body)",
            }}
          >
            Menú digital
          </div>
        </div>

        <Motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-8 overflow-hidden rounded-[2.2rem] border px-6 py-7 sm:px-8 sm:py-9"
          style={{
            borderColor: "rgba(47, 27, 5, 0.08)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(243,234,216,0.82) 100%)",
            boxShadow: "0 20px 44px rgba(47, 27, 5, 0.06)",
          }}
        >
          <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-[rgba(24,35,107,0.08)] blur-2xl" />
          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[rgba(207,134,33,0.08)] blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-2">
              <Sparkles size={14} color="#18236b" />
              <p
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{
                  color: "var(--color-terra)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {currentMenu.eyebrow}
              </p>
            </div>

            <h1
              className="mt-5 text-4xl leading-tight sm:text-5xl"
              style={{
                color: "var(--color-brown)",
                fontFamily: "var(--font-title)",
              }}
            >
              {currentMenu.title}
            </h1>

            <p
              className="mt-4 max-w-2xl text-sm leading-7 sm:text-base"
              style={{
                color: "rgba(47, 27, 5, 0.76)",
                fontFamily: "var(--font-body)",
              }}
            >
              {currentMenu.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
          <TabButton
  isActive={activeTab === "foods"}
  onClick={() => handleTabChange("foods")}
  icon={UtensilsCrossed}
>
  Alimentos
</TabButton>

<TabButton
  isActive={activeTab === "drinks"}
  onClick={() => handleTabChange("drinks")}
  icon={Martini}
>
  Bebidas
</TabButton>
            </div>
          </div>
        </Motion.header>

        <div
          className="sticky top-4 z-20 mt-6 overflow-hidden rounded-[1.6rem] border px-4 py-4 backdrop-blur-xl sm:px-5"
          style={{
            borderColor: "rgba(47, 27, 5, 0.08)",
            backgroundColor: "rgba(243, 234, 216, 0.8)",
            boxShadow: "0 12px 26px rgba(47, 27, 5, 0.05)",
          }}
        >
          <div className="mb-3 flex items-center gap-3">
            <div
              className="h-px w-8"
              style={{ backgroundColor: "rgba(207, 134, 33, 0.4)" }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.28em]"
              style={{
                color: "rgba(47, 27, 5, 0.55)",
                fontFamily: "var(--font-body)",
              }}
            >
              Explora por categoría
            </p>
          </div>

          <div
            className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {currentMenu.sections.map((section) => {
              const normalizedTitle = normalizeLabel(section.title);
              const isHighlighted =
                normalizedTitle === "desayuno ejecutivo" ||
                normalizedTitle === "menu del dia";

              return (
                <CategoryChip
                  key={section.id}
                  onClick={() => handleJump(section.id)}
                  highlight={isHighlighted}
                >
                  {section.title}
                </CategoryChip>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {currentMenu.sections.map((section, index) => (
            <MenuSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>

      {showScrollTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.03]"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "#fff8eb",
            fontFamily: "var(--font-body)",
            boxShadow: "0 16px 30px rgba(24, 35, 107, 0.24)",
          }}
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ChevronUp size={16} />
          Arriba
        </button>
      ) : null}
    </main>
  );
}

export default MenuPage;