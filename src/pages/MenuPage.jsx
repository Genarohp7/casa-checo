import { useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import MENU_DATA from "../data/menuData";

function TabButton({ isActive, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition-all duration-300"
      style={{
        backgroundColor: isActive ? "var(--color-primary)" : "transparent",
        color: isActive ? "#fff8eb" : "var(--color-brown)",
        border: isActive
          ? "1px solid rgba(24, 35, 107, 0.2)"
          : "1px solid rgba(47, 27, 5, 0.14)",
        boxShadow: isActive
          ? "0 10px 24px rgba(24, 35, 107, 0.18)"
          : "none",
        fontFamily: "var(--font-body)",
      }}
    >
      {children}
    </button>
  );
}

function CategoryChip({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="whitespace-nowrap rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:scale-[1.02]"
      style={{
        backgroundColor: "rgba(255,255,255,0.55)",
        border: "1px solid rgba(47, 27, 5, 0.1)",
        color: "var(--color-brown)",
        fontFamily: "var(--font-body)",
      }}
    >
      {children}
    </button>
  );
}

function StandardItem({ item }) {
  return (
    <article
      className="flex items-start justify-between gap-4 border-b pb-4"
      style={{ borderColor: "rgba(47, 27, 5, 0.08)" }}
    >
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
        className="shrink-0 text-base"
        style={{
          color: "var(--color-primary)",
          fontFamily: "var(--font-body)",
        }}
      >
        {item.price}
      </div>
    </article>
  );
}

function SpiritItem({ item }) {
  return (
    <article
      className="flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-start sm:justify-between"
      style={{ borderColor: "rgba(47, 27, 5, 0.08)" }}
    >
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

      <div className="grid shrink-0 grid-cols-2 gap-3 sm:min-w-[180px]">
        <div
          className="rounded-2xl px-3 py-2 text-center"
          style={{ backgroundColor: "rgba(24, 35, 107, 0.06)" }}
        >
          <div
            className="text-[10px] uppercase tracking-[0.18em]"
            style={{
              color: "rgba(47, 27, 5, 0.55)",
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
          className="rounded-2xl px-3 py-2 text-center"
          style={{ backgroundColor: "rgba(207, 134, 33, 0.08)" }}
        >
          <div
            className="text-[10px] uppercase tracking-[0.18em]"
            style={{
              color: "rgba(47, 27, 5, 0.55)",
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
    </article>
  );
}

function SpecialSection({ section }) {
  return (
    <div
      className="rounded-[1.75rem] border p-6 shadow-sm"
      style={{
        backgroundColor: "rgba(255,255,255,0.56)",
        borderColor: "rgba(47, 27, 5, 0.1)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="text-[11px] uppercase tracking-[0.3em]"
            style={{
              color: "var(--color-terra)",
              fontFamily: "var(--font-body)",
            }}
          >
            Especial
          </p>

          <h2
            className="mt-3 text-3xl leading-tight"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-title)",
            }}
          >
            {section.title}
          </h2>
        </div>

        <div
          className="rounded-full px-4 py-2 text-sm"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "#fff8eb",
            fontFamily: "var(--font-body)",
          }}
        >
          {section.price}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {section.included.map((item) => (
          <div
            key={item}
            className="rounded-2xl border px-4 py-3 text-sm"
            style={{
              borderColor: "rgba(47, 27, 5, 0.08)",
              backgroundColor: "rgba(243, 234, 216, 0.7)",
              color: "var(--color-brown)",
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

function MenuSection({ section }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 rounded-[2rem] border p-6 shadow-sm sm:p-7"
      style={{
        backgroundColor: "rgba(255,255,255,0.58)",
        borderColor: "rgba(47, 27, 5, 0.1)",
      }}
    >
      {section.special ? (
        <SpecialSection section={section} />
      ) : (
        <>
          <div className="mb-6">
            <p
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{
                color: "var(--color-terra)",
                fontFamily: "var(--font-body)",
              }}
            >
              Casa Checo
            </p>

            <h2
              className="mt-3 text-3xl leading-tight sm:text-4xl"
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
        </>
      )}
    </section>
  );
}

function MenuPage() {
  const [activeTab, setActiveTab] = useState("foods");

  const currentMenu = MENU_DATA[activeTab];

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
      className="min-h-screen px-4 pb-12 pt-20 sm:px-6 sm:pt-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#fff8eb",
              fontFamily: "var(--font-body)",
            }}
          >
            <ArrowLeft size={16} />
            Volver
          </Link>

          <div
            className="text-[10px] uppercase tracking-[0.32em] sm:text-xs"
            style={{
              color: "rgba(47, 27, 5, 0.65)",
              fontFamily: "var(--font-body)",
            }}
          >
            Menú digital
          </div>
        </div>

        <header
          className="mt-8 rounded-[2rem] border px-6 py-7 sm:px-8 sm:py-9"
          style={{
            borderColor: "rgba(47, 27, 5, 0.1)",
            backgroundColor: "rgba(255,255,255,0.45)",
          }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.35em]"
            style={{
              color: "var(--color-terra)",
              fontFamily: "var(--font-body)",
            }}
          >
            {currentMenu.eyebrow}
          </p>

          <h1
            className="mt-4 text-4xl leading-tight sm:text-5xl"
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-title)",
            }}
          >
            {currentMenu.title}
          </h1>

          <p
            className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
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
            >
              Alimentos
            </TabButton>

            <TabButton
              isActive={activeTab === "drinks"}
              onClick={() => handleTabChange("drinks")}
            >
              Bebidas
            </TabButton>
          </div>
        </header>

        <div
          className="sticky top-4 z-20 mt-6 overflow-hidden rounded-[1.5rem] border px-4 py-4 backdrop-blur-xl sm:px-5"
          style={{
            borderColor: "rgba(47, 27, 5, 0.08)",
            backgroundColor: "rgba(243, 234, 216, 0.82)",
            boxShadow: "0 10px 24px rgba(47, 27, 5, 0.06)",
          }}
        >
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {currentMenu.sections.map((section) => (
              <CategoryChip
                key={section.id}
                onClick={() => handleJump(section.id)}
              >
                {section.title}
              </CategoryChip>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {currentMenu.sections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm"
            style={{
              backgroundColor: "rgba(24, 35, 107, 0.08)",
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
              border: "1px solid rgba(24, 35, 107, 0.1)",
            }}
          >
            Volver arriba
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </main>
  );
}

export default MenuPage;