export interface TabItem {
  label: string;
  route: string;
  title: string;
  subtitle?: string;
  description: string;
  centralImage: string;
  href?: string;
  bgMobile?: string;
  bgDesktop?: string;
  objectFit?: "cover" | "contain" | "scale-down";
}
