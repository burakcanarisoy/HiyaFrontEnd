// src/app/page.tsx
"use client";

import Logo from "@/images/logo1.png";
import PrimaryLogo from "@/images/primary-logo-1.svg";
import HiyaLogo from "@/images/hiya-main-logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { Calendar, FileCheck, Lightbulb, TestTube2, Home as HomeIcon, FileText, Stethoscope, Heart, Globe } from "lucide-react";

export default function Home() {
  // Intersection observer states for each section
  const [heroInView, setHeroInView] = useState(true); // Hero starts visible
  const [problemInView, setProblemInView] = useState(false);
  const [solutionInView, setSolutionInView] = useState(false);
  const [howItWorksInView, setHowItWorksInView] = useState(false);
  const [productsInView, setProductsInView] = useState(false);
  const [socialInView, setSocialInView] = useState(false);
  const [whyHiyaInView, setWhyHiyaInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  // Refs for each section
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const howItWorksRef = useRef(null);
  const productsRef = useRef(null);
  const socialRef = useRef(null);
  const whyHiyaRef = useRef(null);
  const ctaRef = useRef(null);

  // Create intersection observer for a section
  const createObserver = (setInView: (value: boolean) => void) => {
    return new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );
  };

  useEffect(() => {
    const problemObserver = createObserver(setProblemInView);
    const solutionObserver = createObserver(setSolutionInView);
    const howItWorksObserver = createObserver(setHowItWorksInView);
    const productsObserver = createObserver(setProductsInView);
    const socialObserver = createObserver(setSocialInView);
    const whyHiyaObserver = createObserver(setWhyHiyaInView);
    const ctaObserver = createObserver(setCtaInView);

    if (problemRef.current) problemObserver.observe(problemRef.current);
    if (solutionRef.current) solutionObserver.observe(solutionRef.current);
    if (howItWorksRef.current) howItWorksObserver.observe(howItWorksRef.current);
    if (productsRef.current) productsObserver.observe(productsRef.current);
    if (socialRef.current) socialObserver.observe(socialRef.current);
    if (whyHiyaRef.current) whyHiyaObserver.observe(whyHiyaRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      problemObserver.disconnect();
      solutionObserver.disconnect();
      howItWorksObserver.disconnect();
      productsObserver.disconnect();
      socialObserver.disconnect();
      whyHiyaObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-hiya-beige min-h-screen overflow-hidden flex flex-col px-4 sm:px-6 lg:px-6 py-0">
        {/* Top Navigation Bar */}
        <motion.div 
          className="absolute top-0 left-0 right-0 z-10 w-full flex flex-row justify-between items-center py-2 mb-0 bg-white/30 backdrop-blur-sm rounded-none px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={HiyaLogo} alt="Hiya Healthcare Logo" width={150} height={50} priority className="h-12 w-auto" />
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex space-x-6 items-center">
            <button 
              onClick={() => scrollToSection('problem-highlight')} 
              className="text-hiya-dark hover:text-hiya-terracotta transition font-medium"
            >
              Problem Highlight
            </button>
            <button 
              onClick={() => scrollToSection('hiya-solution')} 
              className="text-hiya-dark hover:text-hiya-terracotta transition font-medium"
            >
              Hiya Solution
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-hiya-dark hover:text-hiya-terracotta transition font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('product-teasers')} 
              className="text-hiya-dark hover:text-hiya-terracotta transition font-medium"
            >
              Product Teasers
            </button>
            <button 
              onClick={() => scrollToSection('social-proof')} 
              className="text-hiya-dark hover:text-hiya-terracotta transition font-medium"
            >
              Social Proof
            </button>
            <button 
              onClick={() => scrollToSection('why-hiya')} 
              className="text-hiya-dark hover:text-hiya-terracotta transition font-medium"
            >
              Why Hiya
            </button>
          </div>
        </motion.div>
         
         {/* Main Hero Content */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-grow">
         
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
             className="w-full sm:w-96 bg-[#f2d5bb] rounded-lg shadow-lg px-6 py-4 flex flex-col items-center text-center border-2 border-[#a65f46]"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
           >
             <h3 className="text-lg sm:text-xl font-semibold text-[#2b2722] mb-1">Find Your Test</h3>
             <p className="text-xs sm:text-sm text-[#2b2722] mb-3">Discover the right hormonal health test for your needs.</p>
             <button className="bg-[#a65f46] text-white font-semibold py-1.5 px-4 rounded-lg hover:bg-[#8a4c38] transition text-sm">
               Explore Tests
             </button>
           </motion.div>

           {/* Join The Waitlist Card */}
           <motion.div
             className="w-full sm:w-96 bg-[#f2d5bb] rounded-lg shadow-lg px-6 py-4 flex flex-col items-center text-center border-2 border-[#a65f46]"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.5 }}
           >
             <h3 className="text-lg sm:text-xl font-semibold text-[#2b2722] mb-1">Join The Waitlist</h3>
             <p className="text-xs sm:text-sm text-[#2b2722] mb-2">Home testing coming soon. Enter your mail to be notified.</p>
             <input
               type="email"
               placeholder="Enter your email"
               className="w-full p-1.5 border border-[#a68263] rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#a65f46] text-[#2b2722] bg-white text-sm"
             />
             <button className="bg-[#a65f46] text-white font-semibold py-1.5 px-4 rounded-lg hover:bg-[#8a4c38] transition text-sm">
               Join Now
             </button>
           </motion.div>
           
           {/* Availability Banner */}
           <motion.div 
             className="mt-4 mx-auto max-w-md"
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
           >
             <div className="bg-gradient-to-r from-[#a65f46] to-[#8a4c38] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-lg border border-white/20">
               <div className="flex items-center justify-center gap-2">
                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                 <span>Home testing coming soon • Nurse and lab options available now</span>
               </div>
             </div>
           </motion.div>
         </div>
         </div>
       </section>

        {/* Problem Highlight Section */}
        <section ref={problemRef} id="problem-highlight" className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            {problemInView && (
              <div className="flex flex-col gap-6">
                <GradualSpacing 
                  text={"Feeling dismissed? You are not alone."}
                  className="font-butler text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-[90vw] sm:max-w-[600px]"
                  duration={0.2}
                  delayMultiple={0.04}
                  framerProps={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                />
                
                <GradualSpacing 
                  text={"For too long, women's health concerns have been overlooked. PMS, irregular cycles, and questions about fertility are often met with one-size-fits-all advice. But your hormonal health is unique. A single \"normal\" test result doesn't tell the whole story, leaving you without the answers you deserve."}
                  className="font-butler text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-tight max-w-[90vw] sm:max-w-[600px] whitespace-pre-line"
                  duration={0.1}
                  delayMultiple={0.02}
                  framerProps={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                />
              </div>
            )}
          </div>
        </section>

         {/* Hiya Solution Section */}
         <section ref={solutionRef} id="hiya-solution" className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
           <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
             {solutionInView && (
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
                  animate={{ opacity: 1, y: 0 }}
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
                  animate={{ opacity: 1, y: 0 }}
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
                  animate={{ opacity: 1, y: 0 }}
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

      {/* How It Works Section */}
          <section ref={howItWorksRef} id="how-it-works" className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              {howItWorksInView && (
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
                 {/* Step 1 */}
                 <motion.div 
                   className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.3 }}
                 >
                   <div className="bg-[#a65f46]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                     <TestTube2 size={32} className="text-[#a65f46]" />
                   </div>
                   <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Step 1: Choose Your Test</h3>
                   <p className="text-[#2b2722]/80 text-sm sm:text-base">
                     Select the hormone test that aligns with your health goals, from understanding your cycle to planning for your future. Not sure where to start? Our quiz can help.
                   </p>
                 </motion.div>

                 {/* Step 2 */}
                 <motion.div 
                   className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.5 }}
                 >
                   <div className="bg-[#a65f46]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                     <HomeIcon size={32} className="text-[#a65f46]" />
                   </div>
                   <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Step 2: Select Your Sampling Method</h3>
                   <p className="text-[#2b2722]/80 text-sm sm:text-base">
                     Choose the option that works for you. Get your sample collected by a professional nurse at home or visit one of our partner labs. (Home testing kits are coming soon!)
                   </p>
                 </motion.div>

                 {/* Step 3 */}
                 <motion.div 
                   className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.7 }}
                 >
                   <div className="bg-[#a65f46]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                     <FileText size={32} className="text-[#a65f46]" />
                   </div>
                   <h3 className="font-butler text-xl font-semibold mb-2 text-[#2b2722]">Step 3: Get Your Results & Action Plan</h3>
                   <p className="text-[#2b2722]/80 text-sm sm:text-base">
                     Receive your doctor-reviewed results with a clear breakdown of what they mean for you. Use your personalized action plan to make informed decisions about your health.
                   </p>
                 </motion.div>
               </div>
             </div>
           )}
         </div>
       </section>

       {/* Product Teasers Section */}
          <section ref={productsRef} id="product-teasers" className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              {productsInView && (
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
                   animate={{ opacity: 1, y: 0 }}
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
                   animate={{ opacity: 1, y: 0 }}
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

         {/* Social Proof Section */}
          <section ref={socialRef} id="social-proof" className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              {socialInView && (
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
               
               <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[90vw] md:max-w-[1000px]">
                 <motion.div 
                   className="bg-white p-6 rounded-xl shadow-md text-left"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.3 }}
                 >
                   <p className="text-lg md:text-xl font-light italic mb-4">"Finally, a test that listened. Hiya gave me the data I needed to understand my cycle and feel in control of my body again. The doctor's interpretation was incredibly clear and helpful."</p>
                   <p className="text-right font-semibold text-hiya-teal">Aisha M.</p>
                 </motion.div>
                 
                 <motion.div 
                   className="bg-white p-6 rounded-xl shadow-md text-left"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.5 }}
                 >
                   <p className="text-lg md:text-xl font-light italic mb-4">"I was planning for the future and wanted to know where I stood with my fertility. Hiya Prime was straightforward and gave me the peace of mind I was looking for without any pressure."</p>
                   <p className="text-right font-semibold text-hiya-teal">Fatima A.</p>
                 </motion.div>
               </div>
             </div>
           )}
         </div>
       </section>

         {/* Why Hiya Section */}
          <section ref={whyHiyaRef} id="why-hiya" className="relative bg-hiya-beige text-center min-h-screen overflow-hidden py-10">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              {whyHiyaInView && (
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
                   animate={{ opacity: 1, y: 0 }}
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
                   animate={{ opacity: 1, y: 0 }}
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
                   animate={{ opacity: 1, y: 0 }}
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
                   animate={{ opacity: 1, y: 0 }}
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

         {/* Final CTA Section */}
          <section ref={ctaRef} className="relative bg-hiya-beige text-center min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              {ctaInView && (
                <div className="flex flex-col gap-6">
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
                    className="font-butler text-lg sm:text-xl md:text-2xl font-light leading-tight max-w-[90vw] sm:max-w-[800px]"
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
                   animate={{ opacity: 1, y: 0 }}
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
                   animate={{ opacity: 1, y: 0 }}
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
     </main>
   );
 }