"use client";

import React, { useState } from "react";
import PageLayout from "../templates/PageLayout";
import { PageTitle } from "../molecules/PageTitle";
import {
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import { timelineSteps } from "@/app/data/timelineSteps";
import { techCategories } from "@/app/data/techCategories";
import { experiences } from "@/app/data/experiences";
import { education } from "@/app/data/education";
import { motion, Variants, AnimatePresence } from "framer-motion";

// Variantes para animações suaves em cascata (Container)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Anima cada filho com um atraso de 0.1s
      delayChildren: 0.3, // Atraso inicial antes de começar a cascade
    },
  },
};

// Variantes para cada item/seção
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 }, // Começa invisível e um pouco abaixo
  visible: {
    opacity: 1,
    y: 0, // Sobe para a posição original
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const About = () => {
  // Timeline Interativa
  const [activeTimeline, setActiveTimeline] = useState<number>(0);

  return (
    <PageLayout id="about">
      {/* Envolvemos o conteúdo principal com o motion.div do container para cascade inicial */}
      <motion.div
        id="about-child"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full flex flex-col gap-16 max-w-6xl mx-auto"
      >
        {/* Header da Página */}
        <motion.section
          variants={itemVariants}
          className="flex flex-col items-center gap-3 text-center w-full"
        >
          <PageTitle text1="Conheça mais" text2="sobre mim" reverse />
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Desenvolvedor Full Stack apaixonado por transformar ideias complexas
            em produtos simples, robustos e realmente úteis para pessoas e
            empresas.
          </p>
        </motion.section>

        {/* Linha do Tempo Interativa (História) */}
        <motion.section
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          initial="hidden"
          className="flex flex-col gap-8 bg-zinc-900/40 border border-white/10 
        rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden"
        >
          <div
            className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 
          rounded-full blur-3xl pointer-events-none"
          />

          <div
            className="flex items-center gap-2 text-emerald-400 text-xs font-bold 
          uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 
          px-3 py-1 rounded-full w-fit"
          >
            <HiOutlineSparkles /> Trajetória
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Minha Jornada na Tecnologia
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Clique nos marcos para navegar pelos anos:
            </p>
          </div>

          {/* Botões do Timeline */}
          <div
            className="flex items-center justify-between gap-2 overflow-x-auto pb-2 
          border-b border-white/10"
          >
            {timelineSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimeline(idx)}
                className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold 
                  transition-all duration-300 text-center cursor-pointer whitespace-nowrap ${
                    activeTimeline === idx
                      ? `bg-gradient-to-r from-emerald-400 to-teal-300 text-zinc-950 
                    shadow-md shadow-emerald-500/20`
                      : `bg-zinc-950/60 text-zinc-400 hover:text-white 
                    hover:bg-zinc-800/80 border border-white/5`
                  }`}
              >
                {step.year}
              </button>
            ))}
          </div>

          {/* Conteúdo Ativo do Timeline com AnimatePresence para troca suave */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTimeline} // Importante para o AnimatePresence identificar a troca
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-zinc-950/50 p-5 rounded-2xl border border-white/5 flex 
            flex-col gap-2 min-h-[120px] justify-center transition-all"
            >
              <h3 className="text-base sm:text-lg font-bold text-emerald-400 flex items-center gap-2">
                <HiOutlineCheckCircle className="text-lg" />{" "}
                {timelineSteps[activeTimeline].title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {timelineSteps[activeTimeline].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* Qualificações & Stacks */}
        <motion.section
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          initial="hidden"
          className="flex flex-col gap-6 w-full"
        >
          <div className="flex flex-col items-center sm:items-start gap-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Qualificações & Stacks
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Tecnologias que domino e utilizo no dia a dia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techCategories.map((cat, idx) => {
              return (
                <motion.div
                  key={cat.title}
                  variants={itemVariants}
                  // Cascade suave entre os cards de categoria
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className={`p-6 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-md 
                    flex flex-col gap-4 hover:border-emerald-500/40 transition-all duration-300`}
                >
                  {/* Cabeçalho do Card */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      {cat.categoryIcon}
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl 
                          bg-zinc-950/80 border border-white/5 transition-all duration-300 
                          hover:-translate-y-0.5 hover:border-[var(--tech-color)]/50 hover:shadow-lg 
                          overflow-hidden cursor-default"
                          style={
                            {
                              "--tech-color": tech.color,
                            } as React.CSSProperties
                          }
                        >
                          <div
                            className="absolute -inset-px opacity-0 group-hover:opacity-15 
                            transition-opacity duration-500 pointer-events-none rounded-xl"
                            style={{
                              background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 70%)`,
                            }}
                          />
                          <Icon
                            className="text-sm sm:text-base text-zinc-400 transition-all 
                          duration-300 group-hover:text-[var(--tech-color)] group-hover:scale-110 shrink-0"
                          />
                          <span
                            className="text-xs font-medium text-zinc-300 transition-colors duration-300 
                            group-hover:text-[var(--tech-color)] select-none pointer-events-none"
                            style={{
                              color: undefined, // deixa a classe do Tailwind cuidar do estado normal
                            }}
                          >
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Experiências Profissionais */}
        <motion.section
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          initial="hidden"
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center sm:items-start gap-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Experiência Profissional
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Lugares onde construí soluções e colaborei com equipes
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                // Cascade suave entre os cards de experiência
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 
                backdrop-blur-md flex flex-col sm:flex-row sm:items-start justify-between 
                gap-4 hover:border-white/20 transition-all"
              >
                <div className="flex gap-4">
                  <div
                    className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 
                  border border-emerald-500/20 h-fit hidden sm:block"
                  >
                    <HiOutlineBriefcase className="text-xl" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-400">
                      {exp.company}
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2 max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <span
                  className="text-xs font-semibold text-zinc-400 bg-zinc-950 px-3 py-1.5 
                rounded-full border border-white/5 h-fit w-fit whitespace-nowrap"
                >
                  {exp.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recomendação / Referência */}
        <motion.section
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          initial="hidden"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col items-center sm:items-start gap-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Recomendações & Referências
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              O que colegas e parceiros de trabalho dizem sobre mim
            </p>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-emerald-500/30 
          backdrop-blur-md flex flex-col gap-4 overflow-hidden"
          >
            <FaQuoteLeft className="text-4xl text-emerald-500/15 absolute top-6 right-6" />

            <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed z-10">
              &quot;Fora da curva! Extremamente competente, preocupado e
              curioso. É o tipo de Dev que vai &apos;abrir o capô do carro&apos;
              sempre que um problema aparecer, vai encontrar uma solução,
              entender o porquê do problema, o porquê da solução, e vai
              compartilhar com todos de sua equipe para nivelar o conhecimento.
              Soma e vai somar muito em qualquer projeto em que for
              empregado.&quot;
            </p>

            <div className="flex items-center gap-3 pt-2 border-t border-white/5 z-10">
              <div
                className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 
              flex items-center justify-center font-bold text-emerald-400 text-sm"
              >
                MS
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">
                  Matheus Souza
                </span>
                <span className="text-[11px] text-zinc-400">
                  Engenheiro de Software
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Formação Acadêmica */}
        <motion.section
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          initial="hidden"
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
            <HiOutlineAcademicCap className="text-emerald-400 text-base" />{" "}
            Formação Acadêmica
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                // Cascade suave entre os cartões de formação
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col 
                justify-between gap-3 hover:border-white/10 transition-colors "
              >
                <div className="flex flex-col gap-1">
                  <h4 className="text-xs font-bold text-white leading-snug ">
                    {edu.degree}
                  </h4>
                  <span className="text-xs text-emerald-400 font-medium">
                    {edu.institution}
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 ">{edu.period}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </PageLayout>
  );
};

export default About;
