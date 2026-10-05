"use client";
import React, { FunctionComponent } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavBar } from "@/app/context/navbarContext";

export const NavBarButton: FunctionComponent = () => {
  const { setIsNavBarOpen } = useNavBar();
  return (
    <button
      type="button"
      aria-label="Abrir menu"
      className="p-2 rounded-xl bg-white/5 border border-white/10 text-white text-2xl active:scale-95 transition-all hover:bg-white/10"
      onClick={() => setIsNavBarOpen(true)}
    >
      <HiMenuAlt3 />
    </button>
  );
};
