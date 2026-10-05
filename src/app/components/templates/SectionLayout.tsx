"use client";
import { ReactNode, forwardRef, ForwardRefRenderFunction } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode[];
}

const Section: ForwardRefRenderFunction<HTMLDivElement, SectionProps> = (
  { children, id, className },
  ref
) => {
  return (
    <section id={id} className={`px-8 py-16 ${className}`}>
      <div
        ref={ref}
        className={`animate-duration-1000
				flex flex-col gap-4 max-w-6xl mx-auto ${className ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
};

export default forwardRef(Section);
