import { IProject } from "@/app/types/project";
import Link from "next/link";
import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { ImgCarousel } from "./ImgCarousel";

export const Project = ({ proj }: { proj: IProject }) => {
  return (
    <div
      key={proj.id}
      className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1 group"
    >
      <div className="space-y-2">
        <ImgCarousel images={proj.media} title={proj.title} />

        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white tracking-wide">
            {proj.title}
          </h3>

          {proj.subtitle && (
            <p className="text-xs text-zinc-400 font-bold line-clamp-3 leading-relaxed">
              {proj.subtitle}
            </p>
          )}
        </div>
        <ProjectDescription description={proj.description} />

        <ul className="flex flex-wrap gap-1">
          {proj.technologies.map((tech) => (
            <li
              key={tech}
              className="text-[7.5px] font-semibold text-zinc-400 bg-zinc-800/30 border border-zinc-500/20 px-[4px] py-[1px] rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
          {proj.type}
        </span>

        {proj.href && proj.href !== "#" ? (
          <Link
            href={proj.href}
            target="_blank"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-400 transition-colors"
          >
            Acessar
            <HiArrowUpRight className="text-base" />
          </Link>
        ) : (
          <span className="text-xs text-zinc-500 font-medium">
            Em breve / Interno
          </span>
        )}
      </div>
    </div>
  );
};

// ... dentro do seu componente onde você renderiza o proj:

function ProjectDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p
        className={`text-sm text-zinc-400 leading-relaxed ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>

      {/* Botão de alternância se houver texto */}
      {description && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[9px] font-medium text-zinc-200 hover:underline pt-1 pb-2 focus:outline-none"
        >
          {isExpanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </div>
  );
}
