// src/components/ProductTeasers.tsx
"use client";

import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProductTeasers() {
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
          <div className="flex flex-col gap-10">
            {/* Headline */}
            <GradualSpacing 
              text={"Start your journey with the right test for you."}
              className="font-butler text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-[90vw] sm:max-w-[600px]"
              duration={0.2}
              delayMultiple={0.04}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            
            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[90vw] md:max-w-[1000px] mt-8">
              {/* Product Card 1: Hiya Sync */}
              <motion.div 
                className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-butler text-2xl font-semibold mb-2 text-[#2b2722]">Hiya Sync</h3>
                <p className="text-[#a65f46] text-lg font-medium mb-4">For Full-Cycle Hormone Mapping</p>
                <p className="text-[#2b2722]/80 text-base mb-6 max-w-[90%]">
                  Struggling with PMS, mood changes, or irregular cycles? Hiya Sync measures your hormones at two key points to assess ovulation and map your cycle's rhythm.
                </p>
                <button 
                  className="mt-auto px-6 py-3 bg-[#a65f46] text-white rounded-md hover:bg-[#a65f46]/90 transition-colors cursor-pointer"
                >
                  Learn More About Hiya Sync
                </button>
              </motion.div>

              {/* Product Card 2: Hiya Prime */}
              <motion.div 
                className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="font-butler text-2xl font-semibold mb-2 text-[#2b2722]">Hiya Prime</h3>
                <p className="text-[#a65f46] text-lg font-medium mb-4">Know Your Fertility Now. Decide Later.</p>
                <p className="text-[#2b2722]/80 text-base mb-6 max-w-[90%]">
                  Perfect for those who aren't trying to conceive yet but want to understand their fertility. Hiya Prime gives you a proactive look at your ovarian reserve and hormonal baseline.
                </p>
                <button 
                  className="mt-auto px-6 py-3 bg-[#a65f46] text-white rounded-md hover:bg-[#a65f46]/90 transition-colors cursor-pointer"
                >
                  Learn More About Hiya Prime
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}