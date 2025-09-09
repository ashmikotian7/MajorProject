"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ChatBot from "@/components/ChatBot";
import { Shield } from "lucide-react";

/* ---- navigation links ---- */
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "How It Works", to: "/work" },
  { label: "Slides", to: "/skinguardslides" },
  { label: "More Info", to: "/moreinfo" },
  { label: "Contact", to: "/contact" },
];

/* ---- sections ---- */
const sections = [
  {
    title: "About Skin Cancer",
    items: ["Basics & Types", "Symptoms", "Risks"],
    gradient: "from-blue-600 to-cyan-400",
    link: "/about",
  },
  {
    title: "Prevention",
    items: ["Sun Safety", "Self-Exams", "Screenings"],
    gradient: "from-teal-500 to-emerald-400",
    link: "/moreinfo",
  },
  {
    title: "Treatment",
    items: ["Surgery", "Radiation", "Immunotherapy"],
    gradient: "from-indigo-600 to-purple-500",
    link: "/skinguardslides",
  },
  {
    title: "Evaluation",
    items: ["Feedback", "Testimonials"],
    gradient: "from-pink-500 to-rose-400",
    link: "/work",
  },
];

/* ---- small box ---- */
const FlowBox = ({ sec }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`relative rounded-xl p-[2px] bg-gradient-to-br ${sec.gradient} shadow-lg w-56 h-44`}
  >
    <div className="absolute inset-0 backdrop-blur-xl bg-black/50 rounded-xl" />
    <div className="relative z-10 flex flex-col justify-between items-center h-full px-3 py-4 text-center">
      <h3 className="text-lg font-bold text-white">{sec.title}</h3>
      <ul className="space-y-1 text-xs text-gray-200/90">
        {sec.items.map((item, i) => (
          <li key={i} className="hover:text-teal-300 transition-colors">
            {item}
          </li>
        ))}
      </ul>
      <Link
        to={sec.link}
        className="mt-3 inline-block bg-teal-500 hover:bg-teal-600 text-black text-xs font-semibold px-4 py-2 rounded-md shadow-sm"
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);

/* ---- main page ---- */
const Work = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (to: string) => {
    setActiveLink(to);
  };

  return (
    <div className="min-h-screen relative text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/doctor.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="border-b border-teal-500/50 bg-black/40 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-gray-200 hover:text-teal-400">
              <Shield className="h-6 w-6 text-teal-400" />
              <span className="text-lg md:text-2xl font-bold">SkinGuard AI</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link, idx) => {
                const isActive = activeLink === link.to;
                return (
                  <Link
                    key={idx}
                    to={link.to}
                    onClick={() => handleClick(link.to)}
                    className={`pb-1 transition-colors ${
                      isActive
                        ? "text-teal-400 border-b-2 border-teal-400"
                        : "text-gray-200 hover:text-teal-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              to="/upload"
              className="px-4 py-2 rounded-md bg-teal-500 text-black font-semibold hover:bg-teal-600 shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </header>

        {/* Flowchart Section */}
        <main className="flex-grow py-12 px-4 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-black/50 border border-teal-500/40 rounded-2xl shadow-xl p-8 max-w-6xl w-full"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-300 mb-10">
              SkinGuard AI – Knowledge Flow
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {sections.map((sec, idx) => (
                <FlowBox key={idx} sec={sec} />
              ))}
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-teal-500/50 bg-black/70 py-6 md:py-8">
          <div className="container mx-auto px-4 text-center text-teal-300 text-sm">
            <p>
              &copy; 2025 SkinGuard AI. All rights reserved. Not a substitute for professional medical advice.
            </p>
          </div>
        </footer>

        {/* ChatBot */}
        <ChatBot />
      </div>
    </div>
  );
};

export default Work;
