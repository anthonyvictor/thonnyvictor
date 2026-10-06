"use client";

import PageLayout from "@/app/components/templates/PageLayout";
import { PageTitle } from "../molecules/PageTitle";
import { PageSubtitle } from "../atoms/PageSubtitle";
import { projects } from "@/app/data/projects";
import { Project } from "../organisms/Project";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

// Variantes para animações suaves em cascata (Container)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Anima cada filho com um atraso de 0.12s
      delayChildren: 0.1, // Atraso inicial antes de começar a cascade
    },
  },
};

// Variantes para cada item (Título, Subtítulo, Projetos, Botão)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 }, // Começa invisível e um pouco abaixo
  visible: {
    opacity: 1,
    y: 0, // Sobe para a posição original
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Projects = () => {
  const [allProjects, setAllProjects] = useState(false);

  return (
    <PageLayout id="projects">
      {/* Envolvemos o conteúdo principal com o motion.div do container */}
      <motion.div
        id="projects-child"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Aciona a animação quando entra na tela
        viewport={{ once: true, margin: "-100px" }} // Anima apenas uma vez, com margem de segurança
        className="page w-full flex flex-col gap-5 max-w-6xl mx-auto"
      >
        {/* Cabeçalho da Seção */}
        <section className="flex flex-col items-center gap-4 w-full min-w-0">
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <PageTitle text1="Projetos" text2="em destaque" />
            <PageSubtitle>
              Algumas das soluções web e sistemas que desenvolvi, entregando
              alta performance, design moderno e impacto real para o negócio dos
              clientes.
            </PageSubtitle>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* AnimatePresence para controlar a animação de entrada e saída dos projetos ao clicar em 'Ver mais' */}
            <AnimatePresence>
              {projects
                .slice(0, allProjects ? projects.length : 3)
                .map((proj, index) => (
                  <motion.div
                    key={proj.id}
                    layout // Ativa animações de layout suaves ao reordenar/adicionar itens
                    initial={{ opacity: 0, y: 15 }} // Configurações iniciais para entrada (após o 'Ver mais')
                    animate={{ opacity: 1, y: 0 }} // Animação de entrada
                    exit={{ opacity: 0, y: -15, scale: 0.95 }} // Configurações de saída (após o 'Ver menos')
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      // Se preferir manter o stagger apenas na entrada inicial, pode remover o delay abaixo.
                      // Ele está aqui para simular o stagger quando o 'Ver mais' é clicado.
                      delay: allProjects ? index * 0.04 : 0,
                    }}
                    className="h-full flex flex-col" // Garante que o motion.div ocupe a altura total para não quebrar o layout do Project
                  >
                    <Project proj={proj} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={() => setAllProjects((prev) => !prev)}
            className="pb-4 text-xs font-medium text-zinc-200 hover:underline pt-1 focus:outline-none"
          >
            {allProjects ? "Ver menos" : "Ver mais projetos"}
          </motion.button>
        </section>
      </motion.div>
    </PageLayout>
  );
};

export default Projects;
