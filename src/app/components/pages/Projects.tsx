"use client";

import PageLayout from "@/app/components/templates/PageLayout";
import { PageTitle } from "../molecules/PageTitle";
import { PageSubtitle } from "../atoms/PageSubtitle";
import { projects } from "@/app/data/projects";
import { Project } from "../organisms/Project";
import { useState } from "react";

export const Projects = () => {
  const [allProjects, setAllProjects] = useState(false);

  return (
    <PageLayout id="projects">
      <div
        id="projects-child"
        className="page w-full flex flex-col gap-5 max-w-6xl mx-auto"
      >
        {/* Cabeçalho da Seção */}
        <section className="flex flex-col items-center gap-4 w-full min-w-0">
          <div className="text-center space-y-3">
            <PageTitle text1="Projetos" text2="em destaque" />
            <PageSubtitle>
              Algumas das soluções web e sistemas que desenvolvi, entregando
              alta performance, design moderno e impacto real para o negócio dos
              clientes.
            </PageSubtitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .slice(0, allProjects ? projects.length : 3)
              .map((proj) => (
                <Project key={proj.id} proj={proj} />
              ))}
          </div>
          <button
            onClick={() => setAllProjects((prev) => !prev)}
            className="pb-4 text-xs font-medium text-zinc-200 hover:underline pt-1 focus:outline-none"
          >
            {allProjects ? "Ver menos" : "Ver mais projetos"}
          </button>
        </section>
      </div>
    </PageLayout>
  );
};

export default Projects;
