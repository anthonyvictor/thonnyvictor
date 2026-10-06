import { TabItem } from "../types/tabItem";

export const services: TabItem[] = [
  {
    label: "Sites",
    route: "#websites-tab-item",
    title: "CRIAÇÃO DE SITES",
    description:
      "Páginas modernas e otimizadas para converter visitantes em clientes. Design atrativo, 100% responsivo e alinhado com as melhores práticas de SEO e performance.",
    centralImage: "/assets/img/sites.png",
    objectFit: "contain",
  },
  {
    label: "Sistemas Web",
    route: "#webapps-tab-item",
    title: "APLICAÇÕES WEB",
    description:
      "Sistemas robustos que rodam direto no navegador. Painéis administrativos, processamento de dados, plataformas complexas, sem precisar instalar nada.",
    centralImage: "/assets/img/sistemas web.png",
    objectFit: "scale-down",
  },
  {
    label: "Aplicativos",
    route: "#mobileapps-tab-item",
    title: "APPS MOBILE",
    description:
      "Aplicativos para Android e iOS. Foco total em usabilidade (UX), interfaces intuitivas e excelente velocidade de resposta.",
    centralImage: "/assets/img/apps mobile.png",
    objectFit: "scale-down",
  },
  {
    label: "Consultoria",
    route: "#consulting-tab-item",
    title: "CONSULTORIA",
    description:
      "Análise técnica detalhada, arquitetura de software e planejamento de soluções para otimizar processos, reduzir custos e acelerar o seu negócio.",
    centralImage: "/assets/img/consultoria de ti.png",
    objectFit: "scale-down",
  },
];
