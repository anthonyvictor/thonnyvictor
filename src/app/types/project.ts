export interface IProject {
  id: string;
  title: string;
  type: "Aplicação Web" | "Landing Page" | "Website" | "API REST" | "SDK";
  subtitle?: string;
  description: string;
  technologies: string[];
  media: {
    id: string;
    url: string;
  }[];
  href?: string;
}
