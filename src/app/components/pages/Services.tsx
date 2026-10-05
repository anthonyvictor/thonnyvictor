"use client";

import { TbTargetArrow } from "react-icons/tb";
import { AiFillCode } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import PageLayout from "../templates/PageLayout";
import { TabsContainer } from "../organisms/TabsContainer";
import { PageTitle } from "../molecules/PageTitle";

const Services = () => {
  const services = [
    {
      label: "Websites",
      route: "#websites-tab-item",
      title: "SITES & LANDING PAGES",
      description:
        "Páginas modernas e otimizadas para converter visitantes em clientes. Design atrativo, 100% responsivo e alinhado com as melhores práticas de SEO e performance.",
      centralImage: "/assets/img/services-websites.svg",
      bgDesktop: "/assets/img/services-websites-bg-desktop.png",
    },
    {
      label: "Web Apps",
      route: "#webapps-tab-item",
      title: "APLICAÇÕES WEB",
      description:
        "Sistemas robustos e sob medida acessíveis direto do navegador. Painéis administrativos, SaaS e plataformas escaláveis sem necessidade de instalação.",
      centralImage: "/assets/img/services-webapps.svg",
      bgDesktop: "/assets/img/services-webapps-bg-desktop.png",
    },
    {
      label: "Mobile Apps",
      route: "#mobileapps-tab-item",
      title: "APPS MOBILE",
      description:
        "Aplicativos nativos e híbridos para Android e iOS. Foco total em usabilidade (UX), interfaces intuitivas e excelente velocidade de resposta.",
      centralImage: "/assets/img/services-mobileapps.svg",
      bgDesktop: "/assets/img/services-mobileapps-bg-desktop.png",
    },
    {
      label: "Consultoria",
      route: "#consulting-tab-item",
      title: "CONSULTORIA DE TI",
      description:
        "Análise técnica detalhada, arquitetura de software e planejamento de soluções para otimizar processos, reduzir custos e acelerar o seu negócio.",
      centralImage: "/assets/img/services-consulting.svg",
      bgDesktop: "/assets/img/services-consulting-bg-desktop.png",
    },
  ];

  const principles = [
    {
      icon: <TbTargetArrow className="text-2xl text-emerald-400" />,
      label: "OBJETIVO",
      description:
        "Entregar soluções eficientes, escaláveis e sob medida para impulsionar o seu negócio com tecnologia de ponta.",
    },
    {
      icon: <AiFillCode className="text-2xl text-teal-300" />,
      label: "QUALIDADE",
      description:
        "Código limpo, arquitetura sólida, foco em alta performance e experiência de usuário totalmente fluida.",
    },
    {
      icon: <FaBalanceScale className="text-2xl text-purple-400" />,
      label: "TRANSPARÊNCIA",
      description:
        "Comunicação direta, alinhamento constante de prazos e compromisso total com os resultados acordados.",
    },
  ];

  return (
    <PageLayout id="services">
      <div
        id="services-child"
        className="page w-full flex flex-col gap-8 max-w-6xl mx-auto flex-1 py-4"
      >
        {/* Cabeçalho */}
        <PageTitle text1="Serviços &" text2="soluções" />

        {/* Showcase de Serviços (Carrossel / Tabs) */}
        <TabsContainer items={services} />

        {/* Seção de Princípios & Diferenciais */}
        <div className="flex flex-col gap-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {principles.map((p) => (
              <div
                key={p.label}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
