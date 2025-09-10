// src/components/ProblemHighlights.tsx
"use client";

import { GradualSpacing } from '@/components/ui/gradual-spacing';

import { useRef, useEffect, useState } from "react";

export default function ProblemHighlight() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let hasRendered = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRendered) {
          setInView(true);
          hasRendered = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {inView && (
          <div className="flex flex-col gap-6">
            <GradualSpacing 
              text={"Feeling dismissed? You are not alone."}
              className="font-butler text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-[90vw] sm:max-w-[600px]"
              duration={0.2}
              delayMultiple={0.02}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            
            <GradualSpacing 
              text={"For too long, women's health concerns have been overlooked. PMS, irregular cycles, and questions about fertility are often met with one-size-fits-all advice. But your hormonal health is unique. A single \"normal\" test result doesn't tell the whole story, leaving you without the answers you deserve."}
              className="font-butler text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-tight max-w-[90vw] sm:max-w-[600px] whitespace-pre-line"
              duration={0.2}
              delayMultiple={0.02}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
