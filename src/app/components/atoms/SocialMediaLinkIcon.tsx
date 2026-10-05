import Link from "next/link";

export const SocialMediaLinkIcon = ({
  item,
}: {
  item: { label: string; icon: JSX.Element; href: string };
}) => {
  return (
    <Link
      href={item.href}
      target="_blank"
      aria-label={item.label}
      className=" w-11 h-11 flex items-center justify-center
                rounded-xl bg-zinc-900/80 border border-zinc-800
                text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40
                hover:bg-emerald-950/30 hover:-translate-y-0.5
                transition-all duration-300 text-xl
        "
    >
      {item.icon}
    </Link>
  );
};
