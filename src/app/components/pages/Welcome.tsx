"use client";

import Image from "next/image";
import Link from "next/link";
import PageLayout from "../templates/PageLayout";
import { MdStar } from "react-icons/md";
import { socialLinks } from "@/app/data/socialLinks";
import { HiArrowUpRight } from "react-icons/hi2";
import { SocialMediaLinkIcon } from "../atoms/SocialMediaLinkIcon";
import { PageTitle } from "../molecules/PageTitle";

const Welcome = () => {
  return (
    <PageLayout id="home">
      <div
        id="home-child"
        className="page w-full flex flex-col lg:grid lg:grid-cols-12 gap-6 pt-[2.6rem] lg:pt-24  lg:gap-8 items-stretch flex-1 justify-center place-content-center"
      >
        {/* Conteúdo Principal */}
        <aside className="lg:col-span-7  flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-4 w-full">
          {/* Título Principal */}
          <div className="space-y-1">
            <h2 className="text-zinc-400 text-xs  font-light tracking-wide">
              Olá! Me chamo Anthony Victor, e sou
            </h2>
            <PageTitle
              text1="Desenvolvedor"
              text2="Fullstack"
              size="lg"
              align="left"
            />
          </div>

          {/* Descrição */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
            Transformo ideias complexas em aplicações modernas, rápidas e
            escaláveis. Especialista em construir soluções de alto impacto, do
            banco de dados, backend à interface.
          </p>

          {/* Chamada para Ação (CTA) e Avaliações */}
          <div className="flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto pt-2 flex">
            <Link
              href={socialLinks[0].href}
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Entre em contato
              <HiArrowUpRight className="text-xl stroke-1" />
            </Link>

            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex text-amber-400 text-lg">
                {Array.from({ length: 5 }).map((_, i) => (
                  <MdStar key={i} />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                100% Satisfação
              </span>
            </div>
          </div>

          {/* Mini Cards de Impacto para Clientes */}
          <div className="grid grid-cols-3 gap-3 w-full pt-4 border-t border-white/10">
            <div className="text-center lg:text-left">
              <p className="text-lg sm:text-2xl font-bold text-white">100%</p>
              <p className="text-[11px] sm:text-xs text-zinc-400">
                Código Limpo
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg sm:text-2xl font-bold text-emerald-400">
                Entrega
              </p>
              <p className="text-[11px] sm:text-xs text-zinc-400">
                Dentro do Prazo
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg sm:text-2xl font-bold text-purple-400">
                Moderno
              </p>
              <p className="text-[11px] sm:text-xs text-zinc-400">
                Design & UX
              </p>
            </div>
          </div>
        </aside>

        {/* Ilustração / Redes sociais */}
        <aside
          className="lg:col-span-5 relative w-full max-w-md 
        lg:max-w-none flex-col justify-end flex gap-2"
        >
          {/* Imagem */}
          <div className="relative w-full aspect-square max-h-[280px] sm:max-h-[320px] lg:max-h-[350px] lg:flex items-center justify-center">
            {/* Detalhe de canto brilhante verde esmeralda */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-400 z-10" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-emerald-400 z-10" />

            {/* Content Container com Clip Path duplo (Corte no canto superior direito e inferior esquerdo) */}
            <div className="relative w-full h-full bg-[#0e0a1f] p-1 [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)] bg-gradient-to-br from-emerald-500/40 via-purple-500/20 to-transparent">
              <div className="relative w-full h-full overflow-hidden [clip-path:polygon(19px_0,100%_0,100%_calc(100%-19px),calc(100%-19px)_100%,0_100%,0_19px)] bg-[#0e0a1f]">
                <Image
                  src="/assets/img/euprogramando.png"
                  alt="Desenvolvedor trabalhando"
                  fill
                  className="object-cover object-center filter brightness-95 contrast-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center justify-center lg:justify-end gap-2.5 mt-3">
            {socialLinks.map((item) => (
              <SocialMediaLinkIcon key={item.href} item={item} />
            ))}
          </div>
        </aside>
      </div>
    </PageLayout>
  );
};

export default Welcome;
