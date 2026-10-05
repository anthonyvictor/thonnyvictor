"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import { INavItem } from "@/app/types/navItem";
import { useNavBar } from "@/app/context/navbarContext";

export const NavItem: FunctionComponent<{
  item: INavItem;
}> = ({ item }) => {
  const { currentRoute, navigateToSection } = useNavBar();
  const isActive = currentRoute === item.route;

  return (
    <li className="relative w-full lg:w-auto text-center">
      <Link
        href={item.route}
        onClick={(e) => {
          e.preventDefault();
          navigateToSection(item.route);
        }}
        className={`inline-block py-2 px-4 text-base lg:text-xs tracking-wider uppercase font-semibold transition-all duration-300 rounded-xl ${
          isActive
            ? "text-emerald-400 bg-emerald-500/10 lg:bg-transparent"
            : "text-zinc-400 hover:text-white hover:bg-white/5 lg:hover:bg-transparent"
        }`}
      >
        {item.label}
      </Link>

      {isActive && (
        <span className="hidden lg:block absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-5 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
      )}
    </li>
  );
};
