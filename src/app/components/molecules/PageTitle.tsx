"use client";

import { motion, Variants } from "framer-motion";

interface PageTitleProps {
  text1: string;
  text2: string;
  reverse?: boolean;
  align?: "center" | "left" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  divide?: boolean;
}

export const PageTitle = ({
  text1,
  text2,
  reverse = false,
  align = "center",
  size = "lg",
  divide = false,
}: PageTitleProps) => {
  // Variantes para o contêiner (orquestra a animação dos filhos)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Variantes para os elementos de texto
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="space-y-3">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`font-extrabold tracking-tight text-white text-center ${
          align === "left"
            ? "lg:text-left"
            : align === "right"
              ? "lg:text-right"
              : ""
        } ${
          size === "sm"
            ? "text-3xl"
            : size === "md"
              ? "text-2xl lg:text-4xl"
              : size === "lg"
                ? "text-3xl lg:text-5xl"
                : "text-4xl lg:text-6xl"
        }`}
      >
        {reverse ? (
          <>
            <Coloured text={text1} variants={itemVariants} />{" "}
            {divide ? <hr className="opacity-0 my-1" /> : <></>}
            <motion.span variants={itemVariants} className="inline-block">
              {text2}
            </motion.span>
          </>
        ) : (
          <>
            <motion.span variants={itemVariants} className="inline-block">
              {text1}
            </motion.span>{" "}
            <Coloured text={text2} variants={itemVariants} />
          </>
        )}
      </motion.h1>
    </div>
  );
};

const Coloured = ({ text, variants }: { text: string; variants?: any }) => {
  return (
    <motion.span
      variants={variants}
      className="inline-block bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400 bg-clip-text text-transparent"
    >
      {text}
    </motion.span>
  );
};
