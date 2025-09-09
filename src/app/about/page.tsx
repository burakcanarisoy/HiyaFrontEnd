// src/app/about/page.tsx
"use client";

import { motion } from 'framer-motion';
import { Target, Heart, FlaskConical, Users } from 'lucide-react';

// Placeholder data for team members
const founders = [
  { name: 'Founder Name', title: 'Co-Founder & CEO', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Founder Name', title: 'Co-Founder & CPO', imageUrl: 'https://via.placeholder.com/150' },
];
const clinicalTeam = [
  { name: 'Dr. Emily Carter', title: 'MD, Reproductive Endocrinology', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Dr. Aisha Khan', title: 'Clinical Advisor, Women\'s Health', imageUrl: 'https://via.placeholder.com/150' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-hiya-light-beige text-center py-20 px-6">
        <motion.h1 
          className="font-butler text-4xl md:text-6xl font-light text-hiya-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlocking the future of women's health.
        </motion.h1>
      </section>

      <div className="container mx-auto px-6 py-20 space-y-20">
        
        {/* Our Why Section */}
        <motion.section
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Target className="mx-auto h-12 w-12 text-hiya-terracotta" />
          <h2 className="font-butler text-4xl mt-4">Our Why</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-hiya-dark/70">
            From women to women, Hiya Healthcare unlocks research and shapes the future of women's health[cite: 202]. We believe every woman deserves access to clear, personalized, and scientifically-backed insights about her own body.
          </p>
        </motion.section>

        {/* Founders Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-butler text-4xl text-center mb-12">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {founders.map((person) => (
              <div key={person.name} className="text-center">
                <img src={person.imageUrl} alt={person.name} className="h-32 w-32 rounded-full object-cover mx-auto" />
                <h3 className="font-butler text-2xl mt-4">{person.name}</h3>
                <p className="text-hiya-dark/70">{person.title}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Clinical Team Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-butler text-4xl text-center mb-12">Our Clinical Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {clinicalTeam.map((person) => (
              <div key={person.name} className="bg-hiya-light-beige p-6 rounded-lg flex items-center gap-6">
                <img src={person.imageUrl} alt={person.name} className="h-24 w-24 rounded-full object-cover" />
                <div>
                  <h3 className="font-butler text-2xl">{person.name}</h3>
                  <p className="text-hiya-dark/70">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}