"use client";

import { FunctionComponent, ReactNode } from "react";
import { Spotlights } from "../atoms/Spotlights";
import { motion } from "framer-motion";

interface PageLayoutProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <main
      id={id}
      className={`relative w-full min-h-screen py-8 px-4 sm:px-8 scroll-mt-24 lg:px-16 flex 
        flex-col items-center justify-center overflow-hidden bg-[#090713] text-zinc-100  
        ${className ?? ""}`}
    >
      <Spotlights />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-center flex-1"
      >
        {children}
      </motion.div>
    </main>
  );
};

export default PageLayout;
