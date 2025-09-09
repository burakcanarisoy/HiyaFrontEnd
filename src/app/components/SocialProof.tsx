// src/app/components/SocialProof.tsx
"use client";

import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SocialProof() {
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

  const testimonials = [
    {
      quote: "Finally, a test that listened. Hiya gave me the data I needed to understand my cycle and feel in control of my body again. The doctor's interpretation was incredibly clear and helpful.",
      name: "Aisha M."
    },
    {
      quote: "I was planning for the future and wanted to know where I stood with my fertility. Hiya Prime was straightforward and gave me the peace of mind I was looking for without any pressure.",
      name: "Fatima A."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {inView && (
          <div className="flex flex-col gap-8">
            <GradualSpacing 
              text="Social Proof"
              className="font-butler text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-[90vw] sm:max-w-[600px]"
              duration={0.2}
              delayMultiple={0.04}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            
            <motion.div 
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[90vw] md:max-w-[1000px]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-left"
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg md:text-xl font-light italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-right font-semibold text-hiya-teal">{testimonial.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}