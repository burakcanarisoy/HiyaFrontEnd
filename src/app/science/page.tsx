// src/app/science/page.tsx
"use client"; // Required for animations

import { motion } from 'framer-motion';
import { TestTube, CalendarDays, CheckCircle } from 'lucide-react';

// Animation variants for sections that fade in as you scroll
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function SciencePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-hiya-light-beige text-center py-20 px-6">
        <motion.h1 
          className="font-butler text-4xl md:text-6xl font-light text-hiya-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Grounded in Science, Designed for You
        </motion.h1>
        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-lg text-hiya-dark/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our approach is built on established clinical principles to provide you with a clearer picture of your hormonal health.
        </motion.p>
      </section>

      <div className="container mx-auto px-6 py-20 space-y-20">
        {/* Cycle Logic Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <CalendarDays className="mx-auto h-12 w-12 text-hiya-terracotta" />
            <h2 className="font-butler text-4xl mt-4">The Importance of Cycle-Phase Testing</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-hiya-dark/70">
              Hormones shift across your cycle and a single test day often misses the full picture. We measure your hormones at two key points to understand your baseline and your luteal phase.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-hiya-light-beige p-8 rounded-lg">
              <h3 className="font-butler text-2xl">Day 3: Your Baseline</h3>
              <p className="mt-2 text-hiya-dark/70">Testing on Day 3 of your cycle establishes your baseline levels for key hormones like FSH, LH, and Estradiol. This helps us understand the foundation of your cycle's start.</p>
            </div>
            <div className="bg-hiya-light-beige p-8 rounded-lg">
              <h3 className="font-butler text-2xl">Day 21: The Luteal Phase</h3>
              <p className="mt-2 text-hiya-dark/70">Testing again around Day 21 allows us to measure Progesterone and other hormones to see if ovulation likely occurred and how well your cycle is regulated.</p>
            </div>
          </div>
        </motion.section>

        {/* Hiya Decode Section (Placeholder) */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <TestTube className="mx-auto h-12 w-12 text-hiya-terracotta" />
          <h2 className="font-butler text-4xl mt-4">The Hiya Decode Logic</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-hiya-dark/70">
            This section will feature a step-by-step explanation of the Hiya Decode logic. Content to be provided by Hiya Healthcare.
          </p>
        </motion.section>

        {/* Clinical Credibility Section (Placeholder) */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <CheckCircle className="mx-auto h-12 w-12 text-hiya-terracotta" />
          <h2 className="font-butler text-4xl mt-4">Our Clinical Credibility</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-hiya-dark/70">
            This section will feature doctor testimonials and other trust elements to establish clinical credibility.
          </p>
        </motion.section>
      </div>
    </div>
  );
}