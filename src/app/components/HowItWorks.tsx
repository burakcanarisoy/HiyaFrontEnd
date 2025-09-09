// src/components/HowItWorks.tsx
"use client";

import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TestTube2, Home, FileText } from "lucide-react";

export default function HowItWorks() {
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

  // The steps for the user journey
  const steps = [
    {
      icon: <TestTube2 size={32} className="text-[#a65f46]" />,
      title: 'Step 1: Choose Your Test',
      description: 'Select the hormone test that aligns with your health goals, from understanding your cycle to planning for your future. Not sure where to start? Our quiz can help.'
    },
    {
      icon: <Home size={32} className="text-[#a65f46]" />,
      title: 'Step 2: Select Your Sampling Method',
      description: 'Choose the option that works for you. Get your sample collected by a professional nurse at home or visit one of our partner labs. (Home testing kits are coming soon!)'
    },
    {
      icon: <FileText size={32} className="text-[#a65f46]" />,
      title: 'Step 3: Get Your Results & Action Plan',
      description: 'Receive your doctor-reviewed results with a clear breakdown of what they mean for you. Use your personalized action plan to make informed decisions about your health.'
    }
  ];

  return (
    <section ref={ref} className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {inView && (
          <div className="flex flex-col gap-10">
            {/* Headline */}
            <GradualSpacing 
              text={"Your path to clarity in three simple steps."}
              className="font-butler text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-[90vw] sm:max-w-[600px]"
              duration={0.2}
              delayMultiple={0.04}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[90vw] md:max-w-[1000px] mt-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                >
                  <div className="bg-[#a65f46]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">{step.title}</h3>
                  <p className="text-[#2b2722]/80 text-sm sm:text-base">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}