"use client";

import PageLayout from "../templates/PageLayout";
import { TabsContainer } from "../organisms/TabsContainer";
import { PageTitle } from "../molecules/PageTitle";
import { services } from "@/app/data/services";
import { principles } from "@/app/data/principles";
import { motion, Variants } from "framer-motion";

// Variantes para animações suaves em cascata (Container)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Anima cada filho com um atraso de 0.1s
      delayChildren: 0.1, // Atraso inicial antes de começar a cascade
    },
  },
};

// Variantes para cada item (Título, Tabs, Cards)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 }, // Começa invisível e um pouco abaixo
  visible: {
    opacity: 1,
    y: 0, // Sobe para a posição original
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <PageLayout id="services">
      {/* Envolvemos o conteúdo principal com o motion.div do container */}
      <motion.div
        id="services-child"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Aciona a animação quando entra na tela
        viewport={{ once: true, margin: "-100px" }} // Anima apenas uma vez, com margem de segurança
        className="page w-full flex flex-col gap-8 max-w-6xl mx-auto flex-1 py-4"
      >
        {/* Cabeçalho */}
        <motion.div variants={itemVariants}>
          <PageTitle text1="Serviços &" text2="soluções" />
        </motion.div>

        {/* Showcase de Serviços (Carrossel / Tabs) */}
        <motion.div variants={itemVariants}>
          <TabsContainer items={services} />
        </motion.div>

        {/* Seção de Princípios & Diferenciais */}
        <div className="flex flex-col gap-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {principles.map((p, index) => (
              <motion.div
                key={p.label}
                variants={itemVariants}
                // Adicionamos um delay progressivo opcional aqui para os cards
                // se eles entrarem na tela ao mesmo tempo (stagger externo)
                transition={{ delay: 0.15 + index * 0.05 }}
                className="group p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-md flex flex-col gap-3 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                    {p.icon}
                  </div>
                  <h4 className="text-xs font-bold text-zinc-300 tracking-wider uppercase">
                    {p.label}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Services;
