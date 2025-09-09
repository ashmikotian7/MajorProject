import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "@/components/ChatBot";

// ✅ Navigation links
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Slides", to: "/skinguardslides" },
  { label: "More Info", to: "/moreinfo" },
  { label: "Contact", to: "/contact" },
];

// ✅ Full Categories & Slides Data
const categories = [
  {
    key: "precautions",
    title: "Skin Safety – Precautions",
    slides: [
      {
        title: "Use Sunscreen",
        steps: [
          {
            title: "Apply generously",
            description: "Use SPF 30+ and reapply every 2 hours.",
            duration: "Daily habit",
          },
          {
            title: "Cover exposed areas",
            description: "Don’t forget ears, neck, and hands.",
          },
        ],
      },
      {
        title: "Avoid Peak Sun Hours",
        steps: [
          {
            title: "Stay indoors",
            description: "Avoid sun between 10 AM – 4 PM.",
          },
        ],
      },
      {
        title: "Protective Clothing",
        steps: [
          {
            title: "Wear hats & sunglasses",
            description: "Wide-brim hats and UV-protective glasses.",
          },
          {
            title: "Long sleeves",
            description: "Lightweight but protective fabrics help.",
          },
        ],
      },
      {
        title: "Avoid Tanning Beds",
        steps: [
          {
            title: "Skip artificial tanning",
            description: "UV exposure from tanning beds damages DNA.",
          },
        ],
      },
    ],
  },
  {
    key: "detection",
    title: "Early Detection – Know the Signs",
    slides: [
      {
        title: "Self Check",
        steps: [
          {
            title: "Look for changes",
            description:
              "Monitor moles, spots, and skin patches regularly.",
          },
        ],
      },
      {
        title: "ABCDE Rule",
        steps: [
          {
            title: "Asymmetry",
            description: "One half looks different from the other.",
          },
          {
            title: "Border",
            description: "Irregular, blurred, or jagged edges.",
          },
          {
            title: "Color",
            description: "Varied shades (brown, black, red, white).",
          },
          {
            title: "Diameter",
            description: "Larger than 6mm (pencil eraser).",
          },
          {
            title: "Evolving",
            description: "Changes in size, shape, or color.",
          },
        ],
      },
      {
        title: "Seek Help",
        steps: [
          {
            title: "See a dermatologist",
            description:
              "If you notice suspicious or changing spots, book a check-up.",
          },
        ],
      },
    ],
  },
  {
    key: "treatment",
    title: "Treatment & Medical Guidance",
    slides: [
      {
        title: "Early Stage Care",
        steps: [
          {
            title: "Surgical removal",
            description: "Minor surgery can remove early skin cancers.",
          },
        ],
      },
      {
        title: "Advanced Care",
        steps: [
          {
            title: "Immunotherapy",
            description: "Boosts the immune system to fight cancer.",
          },
          {
            title: "Targeted therapy",
            description: "Blocks cancer growth pathways.",
          },
        ],
      },
      {
        title: "Always Consult Doctors",
        steps: [
          {
            title: "No self-treatment",
            description:
              "Skin cancer management must be guided by professionals.",
          },
        ],
      },
    ],
  },
  {
    key: "awareness",
    title: "Awareness & Healthy Skin Habits",
    slides: [
      {
        title: "Regular Skin Checks",
        steps: [
          {
            title: "Monthly checks",
            description:
              "Use a mirror or ask someone to check hard-to-see areas.",
          },
        ],
      },
      {
        title: "Hydration & Nutrition",
        steps: [
          {
            title: "Drink water",
            description: "Keeps skin healthy and resilient.",
          },
          {
            title: "Balanced diet",
            description:
              "Antioxidants from fruits & veggies help protect skin.",
          },
        ],
      },
      {
        title: "Spread Awareness",
        steps: [
          {
            title: "Educate others",
            description: "Share prevention tips with family & community.",
          },
        ],
      },
    ],
  },
];

// ✅ Step animation
const stepVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.35 },
  }),
};

const SkinGuardSlides = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [expandedSlides, setExpandedSlides] = useState<number[]>([]);
  const currentCategory = categories[categoryIndex];

  const toggleSlide = (index: number) => {
    setExpandedSlides((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen flex flex-col relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/doctor.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ✅ Header */}
        <header className="border-b border-teal-500/50 bg-black/40 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-teal-400" />
              <h1 className="text-lg md:text-2xl font-bold text-white">
                SkinDetect AI
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 
                             border-b-2 border-transparent hover:border-teal-400 pb-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-teal-500/50 bg-black/80 backdrop-blur-sm">
              <nav className="container mx-auto px-4 py-4 space-y-4">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.to}
                    className="block text-gray-300 hover:text-teal-400 transition-colors duration-200 
                               border-b border-gray-700 pb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/upload"
                  className="block px-4 py-3 rounded-md bg-teal-500 text-black font-semibold text-center 
                             hover:bg-teal-600 transition-colors duration-200 shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* ✅ Main Content */}
        <main className="flex-grow container mx-auto px-4 py-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((cat, idx) => (
              <button
                key={cat.key}
                onClick={() => {
                  setCategoryIndex(idx);
                  setExpandedSlides([]);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  idx === categoryIndex
                    ? "bg-teal-500 text-black shadow-md"
                    : "bg-black/60 border border-teal-500/50 text-gray-300 hover:bg-black/80"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Category Title */}
          <motion.h2
            key={currentCategory.key}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-teal-300"
          >
            {currentCategory.title}
          </motion.h2>

          {/* Slides */}
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
            {currentCategory.slides.map((slide, idx) => {
              const isExpanded = expandedSlides.includes(idx);
              return (
                <motion.div
                  key={`${currentCategory.key}-${idx}`}
                  initial={{ opacity: 0, x: 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -150 }}
                  transition={{ duration: 0.5 }}
                  className="w-full rounded-lg bg-black/60 border border-teal-500/50 shadow-md"
                >
                  {/* Slide Header */}
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-black/40 transition-colors rounded-t-lg"
                    onClick={() => toggleSlide(idx)}
                  >
                    <div className="flex items-center">
                      <span className="text-xl md:text-2xl font-bold text-teal-400 mr-3">{`${idx + 1}.`}</span>
                      <h3 className="text-lg md:text-xl font-semibold text-teal-200">
                        {slide.title}
                      </h3>
                    </div>
                    <span className="text-xl text-teal-400">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>

                  {/* Slide Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        key="steps"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-4 pb-4 flex flex-col gap-2"
                      >
                        {slide.steps.map((step, i) => (
                          <motion.div
                            key={i}
                            className="p-3 rounded-lg bg-black/50 shadow-inner border-l-4 border-teal-400"
                            variants={stepVariants}
                            initial="hidden"
                            animate="visible"
                            custom={i}
                          >
                            <div className="flex items-center mb-1">
                              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-500 text-black font-bold mr-2 text-sm">
                                {i + 1}
                              </div>
                              <h4 className="text-sm md:text-base font-semibold text-teal-200">
                                {step.title}
                              </h4>
                            </div>
                            <p className="text-gray-300 text-xs md:text-sm mb-0.5">
                              {step.description}
                            </p>
                            {step.duration && (
                              <p className="text-gray-400 text-xs md:text-xs">
                                ⏱ {step.duration}
                              </p>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </main>

        {/* ✅ Fixed Footer */}
        <footer className="border-t border-teal-500/50 bg-black/70 py-6 md:py-8 mt-auto">
          <div className="container mx-auto px-4 text-center text-teal-300 text-sm">
            <p>
              &copy; 2025 SkinDetect AI. All rights reserved. Not a substitute
              for professional medical advice.
            </p>
          </div>
        </footer>

        {/* ✅ Chatbot */}
        <ChatBot />
      </div>
    </div>
  );
};

export default SkinGuardSlides;
