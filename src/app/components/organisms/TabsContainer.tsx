"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Spotlights } from "../atoms/Spotlights";
import { TabItem } from "@/app/types/tabItem";

export const TabsContainer = ({ items }: { items: TabItem[] }) => {
  const [selectedTab, setSelectedTab] = useState(items[0].route);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ref para calcular e armazenar a altura máxima
  const maxContentHeightRef = useRef(0);
  const itemsRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSelectedTab((prevTab) => {
        const currentIndex = items.findIndex((x) => x.route === prevTab);
        const nextIndex = (currentIndex + 1) % items.length;
        return items[nextIndex].route;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [items, isPaused]);

  // useLayoutEffect para medir as alturas ANTES da renderização visível
  useLayoutEffect(() => {
    // Função para calcular a altura máxima
    const calculateMaxHeight = () => {
      let currentMaxHeight = 0;
      maxContentHeightRef.current = 0; // Reseta antes de medir

      // Itera sobre todos os elementos ocultos e mede
      Object.values(itemsRefs.current).forEach((ref) => {
        if (ref) {
          // Remove temporariamente a ocultação para medição precisa, se necessário,
          // mas como eles estão renderizados mas invisíveis (início da cascade),
          // o offsetHeight deve funcionar se eles estiverem no DOM.
          // Garante que o elemento está visível para medição (mesmo que fora da tela ou transparente)
          ref.style.display = "flex";
          ref.style.position = "absolute"; // Não afeta o layout
          ref.style.visibility = "hidden"; // Não visível

          const height = ref.offsetHeight;
          if (height > currentMaxHeight) {
            currentMaxHeight = height;
          }

          // Restaura os estilos originais
          ref.style.display = "none";
          ref.style.position = "";
          ref.style.visibility = "";
        }
      });

      maxContentHeightRef.current = currentMaxHeight;

      // Aplica a altura máxima ao container de conteúdo
      const contentContainer = containerRef.current?.querySelector(
        ".main-content-container",
      ) as HTMLDivElement;
      if (contentContainer) {
        contentContainer.style.minHeight = `${currentMaxHeight}px`;
      }
    };

    // Executa a medição inicial
    calculateMaxHeight();

    // Recalcula ao redimensionar a janela
    window.addEventListener("resize", calculateMaxHeight);
    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, [items]); // Executa se a lista de itens mudar

  const activeItem =
    items.find((item) => item.route === selectedTab) || items[0];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative flex flex-col gap-2 w-full min-w-0"
    >
      {/* Navegação por Abas (Tabs Bar) */}
      <header className="w-full overflow-x-auto no-scrollbar py-1">
        <nav className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 min-w-max px-1">
          {items.map((item) => {
            const isActive = selectedTab === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => setSelectedTab(item.route)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                  isActive
                    ? "text-zinc-950 bg-gradient-to-r from-emerald-400 to-teal-300 shadow-lg shadow-emerald-500/20"
                    : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Hero Showcase do Serviço Selecionado */}
      <main className="w-full relative">
        {/* Renderiza todos os itens invisivelmente para medição */}
        <div
          className="medição-container"
          style={{ visibility: "hidden", pointerEvents: "none" }}
        >
          {items.map((item) => (
            <div
              key={`measure-${item.route}`}
              ref={(el) => (itemsRefs.current[item.route] = el)}
              className="relative w-full gap-4 rounded-3xl bg-gradient-to-tr from-purple-950/30 via-zinc-900/80 to-emerald-950/20 py-4 sm:p-10 border border-white/10 backdrop-blur-md flex flex-col-reverse lg:flex-row items-center justify-between"
            >
              {/* Copia a estrutura Exata do conteúdo que afeta a altura */}
              <aside className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 z-10 w-full">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <small className="text-lg font-extrabold text-white tracking-tight leading-tight">
                    {item.subtitle}
                  </small>
                )}
                <p className="text-md text-zinc-300 px-2 lg:px-0 max-w-xl leading-relaxed font-normal">
                  {item.description}
                </p>
                {item.href && (
                  <div className="pt-2 h-7">Saiba mais</div> // Espaço reservado para o link
                )}
              </aside>
              <aside className="w-full lg:w-1/2 flex justify-center items-center z-10">
                <div className="relative w-full aspect-video flex items-center justify-center">
                  {/* Espaço reservado para a imagem */}
                </div>
              </aside>
            </div>
          ))}
        </div>

        {/* Container Visível com min-height aplicada */}
        <div
          className="main-content-container relative w-full gap-4 rounded-3xl bg-gradient-to-tr from-purple-950/30 via-zinc-900/80 to-emerald-950/20 py-4 sm:p-10 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden transition-all duration-500"
          //style={{ minHeight: maxContentHeightRef.current ? `${maxContentHeightRef.current}px` : undefined }} // Aplicado via JS
        >
          <Spotlights reverse />
          {/* Conteúdo do Serviço Ativo */}
          <aside className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 z-10 w-full">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {activeItem.title}
            </h3>
            {activeItem.subtitle && (
              <small className="text-lg font-extrabold text-white tracking-tight leading-tight">
                {activeItem.subtitle}
              </small>
            )}
            <p className="text-md text-zinc-300 px-2 lg:px-0 max-w-xl leading-relaxed font-normal">
              {activeItem.description}
            </p>

            {activeItem.href && (
              <Link
                target={activeItem.href !== "#" ? "_blank" : undefined}
                href={activeItem.href}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm group pt-2 transition-colors"
              >
                Saiba mais
                <HiArrowUpRight className="text-md transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </aside>

          {/* Imagem / Ilustração Central do Serviço Ativo */}
          <aside className="w-full lg:w-1/2 flex justify-center items-center z-10">
            <div className="relative w-full aspect-video flex items-center justify-center">
              <Image
                src={activeItem.centralImage}
                alt={activeItem.title}
                fill
                className={`object-contain drop-shadow-[0_10px_25px_rgba(16,185,129,0.2)] transition-all duration-500 transform hover:scale-105`}
                priority
              />
            </div>
          </aside>
        </div>
      </main>

      {/* Indicadores numéricos/pONTOS abaixo do Card */}
      <footer className="flex justify-center items-center gap-2 pt-2">
        {items.map((item) => {
          const isActive = selectedTab === item.route;
          return (
            <button
              key={item.route}
              type="button"
              onClick={() => setSelectedTab(item.route)}
              aria-label={`Ir para ${item.label}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-gradient-to-r from-emerald-400 to-teal-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          );
        })}
      </footer>
    </div>
  );
};
