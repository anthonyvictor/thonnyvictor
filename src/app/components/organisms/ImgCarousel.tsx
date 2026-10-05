"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  images: {
    url: string;
    id: string;
  }[];
  title: string;
  autoPlayInterval?: number;
}

const Bt = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    type="button"
    className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-green-400 hover:bg-white/50 transition-colors"
  >
    {props.children}
  </button>
);
export const ImgCarousel = ({
  images,
  title,
  autoPlayInterval = 3500,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentMedia = images[currentIndex] || images[0];
  const [showButtons, setShowButtons] = useState(false);
  // Transição automática para imagens (pausa no hover ou se for vídeo)
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, isPaused, autoPlayInterval]);

  if (!images || images.length === 0) return null;

  return (
    <div
      onMouseEnter={() => {
        setIsPaused(true);
        if (images.length > 1) setShowButtons(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        if (images.length > 1) setShowButtons(false);
      }}
      className="relative w-full h-40 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-emerald-500/20 transition-colors"
    >
      <Image
        src={currentMedia.url}
        alt={title}
        fill
        className="object-fill transition-transform duration-300"
        priority={currentIndex === 0}
      />

      {showButtons && (
        <div className="absolute inset-0 flex justify-between items-center px-4 ">
          <Bt
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length,
              )
            }
          >
            <FaArrowLeft />
          </Bt>
          <Bt
            onClick={() => {
              if (images.length <= 1) return;

              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }}
          >
            <FaArrowRight />
          </Bt>
        </div>
      )}

      {/* Indicadores sutis de páginas (apenas se houver mais de 1 mídia) */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/70 backdrop-blur-xs border border-white/10 z-10">
          {images.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para mídia ${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-4 bg-emerald-400"
                  : "w-1 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
