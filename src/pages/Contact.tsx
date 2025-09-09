import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Menu, Mail, User, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatBot from "@/components/ChatBot";

const Contact: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Name: ${fullName}, Email: ${email}, Message: ${message}`);
    setSubmitted(true);
    setFullName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen relative text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/doctor.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="border-b border-teal-500/50 bg-black/40 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-teal-400" />
              <h1 className="text-lg md:text-2xl font-bold text-white">
                SkinDetect AI
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-200 hover:text-teal-400 transition">
                Home
              </Link>
              <Link to="/about" className="text-gray-200 hover:text-teal-400 transition">
                About
              </Link>
              <Link to="/skinguardslides" className="text-gray-200 hover:text-teal-400 transition">
               Tips
              </Link>
              <Link to="/moreinfo" className="text-gray-200 hover:text-teal-400 transition">
                More Info
              </Link>
              <Link to="/contact" className="text-teal-400 font-semibold">
                Contact
              </Link>
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

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-teal-500/50 bg-black/70">
              <nav className="container mx-auto px-4 py-4 space-y-3">
                <Link
                  to="/"
                  className="block text-gray-200 hover:text-teal-400 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-200 hover:text-teal-400 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/skinguardslides"
                  className="block text-gray-200 hover:text-teal-400 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                 Tips
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Main Contact Form Section */}
        <main className="flex-grow flex justify-center items-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl p-8 bg-black/60 backdrop-blur-md border border-teal-500/50 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
              Contact{" "}
              <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text">
                SkinDetect AI
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-teal-300 mb-2 flex items-center gap-2">
                  <User size={18} /> Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-teal-500/50 bg-black/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-teal-300 mb-2 flex items-center gap-2">
                  <Mail size={18} /> Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-teal-500/50 bg-black/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-teal-300 mb-2 flex items-center gap-2">
                  <MessageSquare size={18} /> Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-teal-500/50 bg-black/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <Send size={18} /> Send Message
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center font-medium mt-4"
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-teal-500/50 bg-black/70 py-8 md:py-12">
          <div className="container mx-auto px-4 text-center text-teal-300 text-sm">
            <p>
              &copy; 2025 SkinDetect AI. All rights reserved. Not a substitute for
              professional medical advice.
            </p>
          </div>
        </footer>

        {/* Chatbot */}
        <ChatBot />
      </div>
    </div>
  );
};

export default Contact;
