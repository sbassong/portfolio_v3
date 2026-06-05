"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const variants: Variants = {
  enter: (dir: number) => ({ x: dir * 48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: -dir * 48, opacity: 0 }),
};

export default function Carousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const prev = useCallback(() => go((index - 1 + images.length) % images.length), [go, index, images.length]);
  const next = useCallback(() => go((index + 1) % images.length), [go, index, images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (images.length === 1) {
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
        <Image src={images[0]} alt={`${title} screenshot`} fill className="object-contain" sizes="(max-width: 896px) 100vw, 896px" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main viewer */}
      <div className="relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] group">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-accent transition-all duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-accent transition-all duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-mono">
          {index + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            className={`rounded-full transition-all duration-200 cursor-pointer ${
              i === index
                ? "w-5 h-2 bg-accent"
                : "w-2 h-2 bg-[var(--border)] hover:bg-[var(--fg-muted)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
