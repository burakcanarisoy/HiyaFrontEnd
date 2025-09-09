// src/components/FinalCTA.tsx
"use client";

import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
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
          <div className="flex flex-col gap-8">
            {/* Headline */}
            <GradualSpacing 
              text={"Ready to take the next step in your health journey?"}
              className="font-butler text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-[90vw] sm:max-w-[800px]"
              duration={0.2}
              delayMultiple={0.04}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            
            {/* Body Text */}
            <GradualSpacing 
              text={"Get the answers you've been looking for. Explore our hormone tests today or join the waitlist to be the first to know when our at-home testing kits are available."}
              className="font-butler text-lg sm:text-xl md:text-2xl font-light leading-tight max-w-[90vw] sm:max-w-[800px] mb-8"
              duration={0.2}
              delayMultiple={0.02}
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            
            {/* CTA Cards - replacing buttons with cards similar to Hero.tsx */}
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {/* Find Your Test Card */}
              <motion.div
                className="w-full sm:w-80 bg-[#f2d5bb] rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-2 border-[#a65f46]"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2b2722] mb-2">Find Your Test</h3>
                <p className="text-sm sm:text-base text-[#2b2722] mb-4">Discover the right hormonal health test for your needs.</p>
                <button className="bg-[#a65f46] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#8a4c38] transition">
                  Explore Tests
                </button>
              </motion.div>
              
              {/* Join The Waitlist Card */}
              <motion.div
                className="w-full sm:w-80 bg-[#f2d5bb] rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-2 border-[#a65f46]"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2b2722] mb-2">Join The Waitlist</h3>
                <p className="text-sm sm:text-base text-[#2b2722] mb-4">Home testing coming soon. Enter your mail to be notified.</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-[#a68263] rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#a65f46] text-[#2b2722] bg-white"
                />
                <button className="bg-[#a65f46] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#8a4c38] transition">
                  Join Now
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}