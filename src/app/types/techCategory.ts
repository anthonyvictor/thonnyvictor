import { IconType } from "react-icons";

export interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface TechCategory {
  title: string;
  categoryIcon: React.ReactNode;
  items: TechItem[];
}
