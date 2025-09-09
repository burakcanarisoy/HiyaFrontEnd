// src/app/consultation/page.tsx
"use client"; // Required for animations

import { motion } from 'framer-motion';
import { Stethoscope, Users, ArrowRight, FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';

// Placeholder data for doctors
const doctors = [
  {
    name: 'Dr. Emily Carter',
    title: 'MD, Reproductive Endocrinology',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    name: 'Dr. Aisha Khan',
    title: 'Clinical Advisor, Women\'s Health',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
];

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ConsultationPage() {
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
          Understand Your Results, Plan Your Path
        </motion.h1>
        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-lg text-hiya-dark/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A consultation with our clinical team turns your data into a clear, actionable health plan.
        </motion.p>
      </section>

      <div className="container mx-auto px-6 py-20 space-y-20">
        
        {/* Why It Matters Section */}
        <motion.section
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Stethoscope className="mx-auto h-12 w-12 text-hiya-terracotta" />
          <h2 className="font-butler text-4xl mt-4">More Than Just Numbers</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-hiya-dark/70">
            Your hormone results are the first step. A one-on-one consultation helps you connect the dots between your data, your symptoms, and your health goals, empowering you to move forward with confidence.
          </p>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-butler text-4xl text-center mb-12">Your Journey to Clarity</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center text-center">
              <FileText className="h-10 w-10 text-hiya-terracotta"/>
              <p className="font-butler text-xl mt-2">1. Receive Your Results</p>
            </div>
            <ArrowRight className="h-8 w-8 text-hiya-beige hidden md:block" />
            <div className="flex flex-col items-center text-center">
              <MessageSquare className="h-10 w-10 text-hiya-terracotta"/>
              <p className="font-butler text-xl mt-2">2. Book Your Consultation</p>
            </div>
          </div>
        </motion.section>
        
        {/* Meet The Doctors Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-butler text-4xl text-center mb-12">Meet Our Clinical Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="bg-hiya-light-beige p-6 rounded-lg flex items-center gap-6">
                <img src={doctor.imageUrl} alt={doctor.name} className="h-24 w-24 rounded-full object-cover" />
                <div>
                  <h3 className="font-butler text-2xl">{doctor.name}</h3>
                  <p className="text-hiya-dark/70">{doctor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Availability & CTA Section */}
        <motion.section
          className="text-center bg-hiya-beige p-12 rounded-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Users className="mx-auto h-12 w-12 text-hiya-terracotta" />
          <h2 className="font-butler text-3xl mt-4">Exclusively for Hiya Members</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-hiya-dark/80">
            Consultations are available exclusively after you purchase a test and receive your results. This ensures the conversation is fully personalized to your unique hormonal profile.
          </p>
          <Link href="/products">
            <button className="mt-8 bg-hiya-terracotta text-white font-semibold py-3 px-8 rounded-full transition-transform hover:scale-105">
              Explore Our Tests
            </button>
          </Link>
        </motion.section>

      </div>
    </div>
  );
}