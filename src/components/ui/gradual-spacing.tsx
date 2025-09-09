// src/components/ui/gradual-spacing.tsx
"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  // Metni kelimelere ayırıyoruz
  const words = text.split(" ");

  // Animasyon gecikmesi için genel bir karakter sayacı
  let charCount = 0;

  return (
    // Ana container: Kelimelerin alt satıra inmesine izin verir (flex-wrap)
    // ve kelimeler arasında boşluk bırakır (gap-x-[1ch] -> yaklaşık 1 karakter boşluk).
    <div className="flex flex-wrap justify-center gap-x-[1ch] gap-y-4">
      <AnimatePresence>
        {words.map((word, wordIndex) => (
          // Her kelimeyi kendi flex container'ı içinde tutarak bölünmesini engelliyoruz
          <div key={wordIndex} className="flex">
            {word.split("").map((char, charIndexInWord) => {
              const delay = charCount * delayMultiple;
              charCount++; // Her karakterden sonra sayacı artır

              return (
                <motion.h1
                  key={`${wordIndex}-${charIndexInWord}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay }}
                  className={cn("drop-shadow-sm", className)}
                >
                  {char}
                </motion.h1>
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}