import { Line } from "../atoms/Line";
import Image from "next/image";
import { socialLinks } from "@/app/data/socialLinks";
import { SocialMediaLinkIcon } from "../atoms/SocialMediaLinkIcon";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-zinc-400 bg-zinc-950/80 backdrop-blur-md border-t border-white/10 relative overflow-hidden">
      {/* Brilho decorativo no fundo do footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Line />

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Logotipo */}
        <div className="relative w-40  h-44 flex items-center justify-center">
          <Image src="/logo.png" alt="Anthony logo" fill objectFit="cover" />
        </div>
        {/* Identificação */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-lg font-bold text-white tracking-tight">
            Anthony Victor
          </span>
          <p className="text-xs text-zinc-500">Full-Stack Developer</p>
        </div>

        <div className="flex items-center justify-center lg:justify-end gap-2.5 mt-3">
          {socialLinks.map((item) => (
            <SocialMediaLinkIcon key={item.href} item={item} />
          ))}
        </div>
        {/* Direitos Reservados */}
        <div className="text-xs text-zinc-500 text-center md:text-right">
          © {currentYear} • Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
