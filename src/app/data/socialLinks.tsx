import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export const socialLinks = [
  {
    icon: <BsWhatsapp />,
    href: encodeURI(
      "https://api.whatsapp.com/send?phone=+5571984479191&text=Olá, vim através do seu site",
    ),
    label: "WhatsApp",
  },
  {
    icon: <BsGithub />,
    href: "https://github.com/anthonyvictor",
    label: "GitHub",
  },
  {
    icon: <BsLinkedin />,
    href: "https://linkedin.com/in/thonnyvrc",
    label: "LinkedIn",
  },
  {
    icon: <BsInstagram />,
    href: "https://www.instagram.com/anthonyvictor.dev",
    label: "Instagram",
  },
];
