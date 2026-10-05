import { IProject } from "../types/project";

export const projects: IProject[] = [
  {
    id: "pizzariadb",
    title: "Plataforma de Pedidos",
    technologies: [
      "Next",
      "React",
      "TypeScript",
      "Tailwind",
      "Styled Components",
      "Figma",
      "MongoDB",
    ],
    subtitle: "P.D.B",
    type: "Aplicação Web",
    description:
      "Plataforma e catálogo digital para a Pizzaria Delícia da Bahia. Foco em alta performance, usabilidade mobile e facilidade no fluxo de pedidos online.",
    media: [
      { id: "pizzariadb1", url: "/assets/img/projects-pizzariadb.png" },
      {
        id: "pizzariadb2",
        url: "https://media.licdn.com/dms/image/v2/D4D2DAQF5hJ2BAs6eVg/profile-treasury-image-shrink_800_800/B4DZ_4vLjBHEAI-/0/1786584545727?e=1791529200&v=beta&t=ouXPJghrW-rJ_LNtLE0SjYrBuOI_hC4usfUYN0LFZYQ",
      },
      {
        id: "pizzariadb3",
        url: "https://media.licdn.com/dms/image/v2/D4D2DAQHfhlh8PfpF-g/profile-treasury-image-shrink_800_800/B4DZ_4vLnVGkAI-/0/1786584546015?e=1791529200&v=beta&t=Nl1V8SNBj1GjeVPpthUdlZ7XxL0JTRi-RkmDSgMIbpM",
      },
      {
        id: "pizzariadb4",
        url: "https://media.licdn.com/dms/image/v2/D4D2DAQHrba7h4Z7DyA/profile-treasury-image-shrink_800_800/B4DZ_4vLieHQAM-/0/1786584545713?e=1791529200&v=beta&t=Ov5jpEP5d240h75Sdf1Uxx-Pli0pUMGDdUKu5RhLZL4",
      },
    ],
    href: "https://pizzariadeliciadabahia.com",
  },
  {
    id: "agendstory",
    title: "Automação de postagens",
    subtitle: "AgendStory",
    type: "Aplicação Web",
    technologies: [
      "Next",
      "React",
      "Node",
      "TypeScript",
      "Tailwind",
      "Websocket",
      "Docker",
      "MongoDB",
      "Redis",
      "Github Actions",
    ],
    description:
      "Agendamento de postagens de stories no Instagram, Facebook e Whatsapp, para divulgação regular de conteúdo para pequenas e médias empreendas.",
    media: [
      {
        id: "agendstory1",
        url: "/assets/img/agendstory landing page home.png",
      },
    ],
    // href: "https://github.com/anthonyvictor/agendstory",
  },
  {
    id: "endereco-facil",
    title: "Busca de endereços",
    subtitle: "Endereço Fácil",
    technologies: ["Node", "TypeScript", "Geocoding"],
    type: "SDK",
    description:
      "Busca avançada de endereços brasileiros, com autocomplete, pesquisa por CEP, coordenadas, e distâncias de um ponto para outro, com fallback em diversas apis.",
    media: [
      {
        id: "enderecofacil1",
        url: "/assets/img/endereco-facil.png",
      },
    ],
    href: "https://github.com/anthonyvictor/endereco-facil",
  },
  {
    id: "techdinner",
    title: "Plataforma de gerenciamento de Delivery",
    technologies: [
      "React",
      "TypeScript",
      "Styled Components",
      "MySQL",
      "MongoDB",
    ],
    subtitle: "Techdinner",
    type: "Aplicação Web",
    description:
      "Plataforma completa de pedidos, relatórios, gerenciamento de clientes, cadrápio, pedidos, entregadores, rotas, financeiro e muito mais. Foco em controle total por parte da loja, reunindo informações úteis sobre o negócio.",
    media: [
      { id: "techdinner1", url: "/assets/img/1786583474400.jfif" },
      { id: "techdinner2", url: "/assets/img/1786583478020.jfif" },
      { id: "techdinner3", url: "/assets/img/1786583475265.jfif" },
      { id: "techdinner4", url: "/assets/img/1786583474143.jfif" },
      { id: "techdinner5", url: "/assets/img/techdinner-mensagens.png" },
    ],
    // href: "https://pizzariadeliciadabahia.com",
  },
  {
    id: "digitaxi",
    title: "Website corporativo",
    subtitle: "Digitáxi",
    type: "Landing Page",
    technologies: ["React", "Vite", "TypeScript"],
    description:
      "Landing page para cooperativa de transporte de passageiros estabelecida há mais de 26 anos no mercado. Solução focada em agilidade, usabilidade e conexão eficiente de corridas.",
    media: [
      { id: "digitaxi1", url: "/assets/img/digitaxi.png" },
      { id: "digitaxi2", url: "/assets/img/digitaxi 2.png" },
    ],
    href: "https://digitaxi.coop.br/",
  },

  {
    id: "mmadevs",
    title: "Website Corporativo",
    technologies: ["Next", "React", "TypeScript", "Tailwind", "Figma"],
    subtitle: "MMA Devs",
    type: "Landing Page",
    description:
      "Website corporativo para a MMA Devs. Empresa fundada em 2022 por Matheus Araujo, Matheus Nascimento, e por mim, Anthony. Idealizada para trabalhar em conjunto desenvolvendo projetos de alta complexidade.",
    media: [
      { id: "mmadevs1", url: "/assets/img/mmadevs1.png" },
      { id: "mmadevs2", url: "/assets/img/mmadevs2.png" },
      { id: "mmadevs3", url: "/assets/img/mmadevs3.png" },
    ],
    href: "https://mmadevs-website.vercel.app/",
  },
  {
    id: "react-easy-ui",
    title: "Biblioteca de componentes",
    subtitle: "React Easy UI",
    technologies: ["React", "Node", "TypeScript"],
    type: "SDK",
    description:
      "Biblioteca de componentes não estilizados com funções extras e comportamentos mais avançados para facilitar o desenvolvimento de interfaces web com React.",
    media: [
      {
        id: "reacteasyui1",
        url: "/assets/img/react-easy-ui.png",
      },
    ],
    href: "https://github.com/anthonyvictor/react-easy-ui",
  },
  {
    id: "whatsbot",
    title: "Chatbot com IA",
    subtitle: "Whatsbot",
    type: "Aplicação Web",
    technologies: [
      "Node",
      "TypeScript",
      "Websocket",
      "Docker",
      "MongoDB",
      "Redis",
      "Github Actions",
      "OpenAI GPT",
      "Mistral",
    ],
    description:
      "Chatbot com IA para operações comerciais, entre atendimento ao cliente, gerenciamento de pedidos, notificações, dentre outros. Utilizando IA para melhorar a performance de interações.",
    media: [
      {
        id: "agendstory1",
        url: "/assets/img/whatsbot-landing-page.png",
      },
    ],
    // href: "https://github.com/anthonyvictor/agendstory",
  },
];
