// src/components/WhyHiya.tsx
"use client";

import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Lightbulb, Heart, Globe } from "lucide-react";

export default function WhyHiya() {
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
    <section ref={ref} className="relative bg-hiya-beige text-center min-h-screen overflow-hidden py-10">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {inView && (
          <div className="flex flex-col gap-8">
            {/* Headline */}
            <GradualSpacing 
              text={"Designed for women, by women."}
              className="font-butler text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-[90vw] sm:max-w-[600px]"
              duration={0.2}
              delayMultiple={0.04}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            
            {/* Why Hiya Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[90vw] md:max-w-[900px] mt-6">
              {/* Icon 1: Clinical Trust */}
              <motion.div 
                className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-[#a65f46]/10 w-14 h-14 rounded-full flex items-center justify-center mb-3">
                  <Stethoscope className="h-7 w-7 text-[#a65f46]" />
                </div>
                <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Clinical Trust</h3>
                <p className="text-[#2b2722]/80 text-sm">
                  Our methods are science-backed, and every result is reviewed by a qualified doctor.
                </p>
              </motion.div>

              {/* Icon 2: Empowerment */}
              <motion.div 
                className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-[#a65f46]/10 w-14 h-14 rounded-full flex items-center justify-center mb-3">
                  <Lightbulb className="h-7 w-7 text-[#a65f46]" />
                </div>
                <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Empowerment</h3>
                <p className="text-[#2b2722]/80 text-sm">
                  We give you the tools and knowledge to move from uncertainty to action.
                </p>
              </motion.div>

              {/* Icon 3: Personalized Care */}
              <motion.div 
                className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="bg-[#a65f46]/10 w-14 h-14 rounded-full flex items-center justify-center mb-3">
                  <Heart className="h-7 w-7 text-[#a65f46]" />
                </div>
                <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Personalized Care</h3>
                <p className="text-[#2b2722]/80 text-sm">
                  Your journey doesn't end with results. Our aftercare support helps you navigate your next steps.
                </p>
              </motion.div>

              {/* Icon 4: Regional Focus */}
              <motion.div 
                className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="bg-[#a65f46]/10 w-14 h-14 rounded-full flex items-center justify-center mb-3">
                  <Globe className="h-7 w-7 text-[#a65f46]" />
                </div>
                <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Regional Focus</h3>
                <p className="text-[#2b2722]/80 text-sm">
                  We understand the needs of women in our region and are building a community rooted in trust and shared experience.
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}