import { FaHtml5, FaCss3Alt, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiExpo,
  SiTailwindcss,
  SiFigma,
  SiNestjs,
  SiExpress,
  SiSocketdotio,
  SiGooglegemini,
  SiMistralai,
  SiOllama,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiMysql,
  SiMariadb,
  SiDocker,
  SiNginx,
  SiCloudflare,
  SiFirebase,
  SiGit,
  SiGithub,
  SiYarn,
  SiAnthropic,
  SiCloudinary,
} from "react-icons/si";
import { BsOpenai } from "react-icons/bs";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineTerminal,
  HiOutlineChip,
} from "react-icons/hi";
import { LuTabletSmartphone } from "react-icons/lu";
import { BsStripe } from "react-icons/bs";
import { TechCategory } from "../types/techCategory";

export const techCategories: TechCategory[] = [
  {
    title: "Linguagens & Core",
    categoryIcon: <HiOutlineCode className="text-xl text-emerald-400" />,
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Frontend & Mobile",
    categoryIcon: <LuTabletSmartphone className="text-xl text-emerald-400" />,
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Backend & APIs",
    categoryIcon: <HiOutlineChip className="text-xl text-emerald-400" />,
    items: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "Stripe", icon: BsStripe, color: "#4169E1" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#4169E1" },
    ],
  },
  {
    title: "Inteligência Artificial",
    categoryIcon: <HiOutlineChip className="text-xl text-emerald-400" />,
    items: [
      { name: "Claude", icon: SiAnthropic, color: "#D97757" },
      { name: "Codex", icon: BsOpenai, color: "#10A37F" },
      { name: "Google Gemini", icon: SiGooglegemini, color: "#8E75FF" },
      { name: "Mistral", icon: SiMistralai, color: "#FF7000" },
      { name: "Ollama", icon: SiOllama, color: "#FFFFFF" },
    ],
  },
  {
    title: "Bancos de Dados & Caching",
    categoryIcon: <HiOutlineDatabase className="text-xl text-emerald-400" />,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
    ],
  },
  {
    title: "DevOps, Infra & Ferramentas",
    categoryIcon: <HiOutlineTerminal className="text-xl text-emerald-400" />,
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Yarn", icon: SiYarn, color: "#2C8EBB" },
    ],
  },
];
