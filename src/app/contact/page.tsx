// src/app/contact/page.tsx
"use client";

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-hiya-light-beige min-h-screen">
      <motion.div
        className="container mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h1 className="font-butler text-4xl md:text-6xl font-light text-hiya-dark">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-hiya-dark/80">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-sm">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-butler text-3xl">Contact Information</h2>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-hiya-terracotta" />
              <a href="mailto:Info@hiyahealthcare.com" className="text-hiya-dark hover:underline">
                Info@hiyahealthcare.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle className="h-6 w-6 text-hiya-terracotta" />
              <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="text-hiya-dark hover:underline">
                Chat with us on WhatsApp
              </a>
            </div>
            <p className="text-sm text-hiya-dark/70 pt-4">We aim to respond to all inquiries within 24 business hours.</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <h2 className="font-butler text-3xl">Send Us a Message</h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-hiya-dark">Name</label>
              <input type="text" id="name" className="mt-1 block w-full border border-hiya-beige rounded-md shadow-sm p-3 focus:ring-hiya-brown focus:border-hiya-brown" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-hiya-dark">Email</label>
              <input type="email" id="email" className="mt-1 block w-full border border-hiya-beige rounded-md shadow-sm p-3 focus:ring-hiya-brown focus:border-hiya-brown" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-hiya-dark">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full border border-hiya-beige rounded-md shadow-sm p-3 focus:ring-hiya-brown focus:border-hiya-brown"></textarea>
            </div>
            <button type="submit" className="w-full bg-hiya-terracotta text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}