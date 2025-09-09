// src/components/Hero.tsx
"use client";

import Logo from "@/images/logo1.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { GradualSpacing } from "@/components/ui/gradual-spacing";

export default function Hero() {
  return (
    // Ana section: her zaman flex-row -> solda başlık, sağda butonlar
    <section className="relative bg-hiya-beige min-h-screen overflow-hidden flex flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-12 gap-6">
      
      {/* Left Grid: Heading */}
      <div className="flex-1 flex items-center justify-center text-left">
        <GradualSpacing
          text={"Hormonal Health, Finally Understood."}
          className="font-butler text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight max-w-xs sm:max-w-md md:max-w-3xl"
          duration={0.2}
          delayMultiple={0.04}
          framerProps={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        />
      </div>

      {/* Right Grid: Cards */}
      <div className="flex-1 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6">
        {/* Find Your Test Card */}
        <motion.div
          className="w-full sm:w-80 bg-[#f2d5bb] rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-2 border-[#a65f46]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <span className="bg-hiya-beige/90 text-xs sm:text-sm font-light px-4 py-1 rounded-t-lg border-t border-hiya-brown shadow-md w-full max-w-[600px] text-center">
          Home testing coming soon. Nurse and lab options available now.
        </span>
      </div>
      </div>

      {/* Logo (opsiyonel) 
        Responsive boyutlandırılmış, istersen açabilirsin */}
      {/*
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          src={Logo}
          alt="Hiya Healthcare Logo"
          width={120}
          height={120}
          className="opacity-80 sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px]"
          priority
        />
      </motion.div>
      */}
    </section>
  );
}
