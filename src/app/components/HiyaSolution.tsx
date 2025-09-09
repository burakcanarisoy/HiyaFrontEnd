// src/components/HiyaSolution.tsx
"use client";

import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, FileCheck, Lightbulb } from "lucide-react";

export default function HiyaSolution() {
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
              text={"Go beyond the baseline with deeper insights."}
              className="font-butler text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-[90vw] sm:max-w-[600px]"
              duration={0.2}
              delayMultiple={0.04}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            
            {/* Solution Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[90vw] md:max-w-[1000px] mt-8">
              {/* Icon 1: Cycle-Phase Testing */}
              <motion.div 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-[#a65f46]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-[#a65f46]" />
                </div>
                <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Full-Cycle Mapping</h3>
                <p className="text-[#2b2722]/80 text-sm sm:text-base">
                  Your hormones change throughout your cycle. We test at key points—like Day 3 and Day 21—to give you a complete picture of your hormonal balance.
                </p>
              </motion.div>

              {/* Icon 2: Doctor-Reviewed Results */}
              <motion.div 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-[#a65f46]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-8 w-8 text-[#a65f46]" />
                </div>
                <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Clinical Clarity</h3>
                <p className="text-[#2b2722]/80 text-sm sm:text-base">
                  No more confusing lab reports. Every test includes a doctor-reviewed interpretation that translates your data into clear, meaningful insights about your health.
                </p>
              </motion.div>

              {/* Icon 3: Personalized Action Plan */}
              <motion.div 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="bg-[#a65f46]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-[#a65f46]" />
                </div>
                <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Actionable Guidance</h3>
                <p className="text-[#2b2722]/80 text-sm sm:text-base">
                  Your results come with personalized, science-based next steps. We provide guidance on nutrition, lifestyle, and supplements to help you support your body, right away.
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}