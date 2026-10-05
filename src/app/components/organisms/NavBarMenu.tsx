"use client";

import React, { FunctionComponent, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { NavItem } from "@/app/components/molecules/NavItem";
import { useNavBar } from "@/app/context/navbarContext";
import { NavBarLogo } from "../atoms/NavBarLogo";
import Link from "next/link";
import { socialLinks } from "@/app/data/socialLinks";
import { HiArrowUpRight } from "react-icons/hi2";

export const NavBarMenu: FunctionComponent = () => {
  const { navItems, isNavBarOpen, setIsNavBarOpen } = useNavBar();

  // Bloqueia o scroll da página enquanto o menu mobile estiver aberto
  useEffect(() => {
    if (isNavBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavBarOpen]);

  if (!isNavBarOpen) {
    return (
      <ul className="hidden lg:flex items-center justify-center gap-1">
        {navItems.map((item) => (
          <NavItem key={item.route} item={item} />
        ))}
      </ul>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#080612] flex flex-col justify-between p-6 sm:p-8 lg:hidden animate-in fade-in duration-200">
      {/* Top Header do Menu Mobile */}
      <div className="flex justify-between items-center w-full pb-6 border-b border-white/10">
        <NavBarLogo />
        <button
          type="button"
          aria-label="Fechar menu"
          className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 text-2xl hover:text-white active:scale-95 transition-all"
          onClick={() => setIsNavBarOpen(false)}
        >
          <MdClose />
        </button>
      </div>

      {/* Lista de Navegação Mobile */}
      <nav className="my-auto py-8">
        <ul className="flex flex-col items-center justify-center gap-6 w-full text-center">
          {navItems.map((item) => (
            <NavItem key={item.route} item={item} />
          ))}
        </ul>
      </nav>

      {/* Footer / CTA no Menu Mobile */}
      <div className="w-full pt-6 border-t border-white/10 flex flex-col gap-4">
        <Link
          href={socialLinks[0]?.href || "#contact"}
          target="_blank"
          onClick={() => setIsNavBarOpen(false)}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-bold py-3.5 px-6 rounded-xl text-sm shadow-lg shadow-emerald-500/20 active:scale-98 transition-all"
        >
          Entre em contato
          <HiArrowUpRight className="text-base" />
        </Link>
      </div>
    </div>
  );
};
