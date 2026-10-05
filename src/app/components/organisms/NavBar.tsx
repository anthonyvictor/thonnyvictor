"use client";

import React from "react";
import { NavBarLogo } from "../atoms/NavBarLogo";
import { NavBarButton } from "../atoms/NavBarButton";
import { NavBarMenu } from "./NavBarMenu";
import Link from "next/link";
import { socialLinks } from "@/app/data/socialLinks";
import { useNavBar } from "@/app/context/navbarContext";

export const NavBar = () => {
  const { isScrolled } = useNavBar();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 lg:px-16 flex justify-center ${
        isScrolled ? "py-3" : "py-5 sm:py-6"
      }`}
    >
      <nav
        className={`w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? "bg-[#090713]/90 border-emerald-500/20 backdrop-blur-xl shadow-xl shadow-black/60"
            : "bg-[#0a0814]/70 border-white/10 backdrop-blur-md"
        }`}
      >
        <NavBarLogo />

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center">
          <NavBarMenu />
        </div>

        <div className="flex items-center gap-3">
          {/* Botão Desktop */}
          <Link
            href={socialLinks[0]?.href || "#contact"}
            target="_blank"
            className="hidden sm:inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            Contato
          </Link>

          {/* Botão Toggle Mobile */}
          <div className="lg:hidden">
            <NavBarButton />
          </div>
        </div>
      </nav>

      {/* Menu Overlay Mobile (fora da tag nav para evitar conflitos de estilo) */}
      <div className="lg:hidden">
        <NavBarMenu />
      </div>
    </header>
  );
};
