import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Upload,
  FileText,
  Shield,
  Clock,
  Users,
  Menu,
  CheckCircle,
  Camera,
  Send,
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import ChatBot from "@/components/ChatBot";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Tips", to: "/skinguardslides" },
  { label: "More Info", to: "/moreinfo" },
  { label: "Contact", to: "/contact" },
];

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/doctor.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
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
              {/* CTA */}
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
                {/* CTA */}
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

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="space-y-4 animate-medical-fade-in">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    AI-Powered
                    <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text">
                      {" "}
                      Skin Cancer
                    </span>{" "}
                    Detection
                  </h2>
                  <p className="text-lg md:text-xl text-teal-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Early detection saves lives. Upload a photo of your skin
                    concern and get instant AI analysis with professional-grade
                    accuracy.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/upload"
                    className="medical-button-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                  >
                    <Upload className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Start Detection
                  </Link>
                  <Link
                    to="/about"
                    className="medical-button-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 text-xs md:text-sm text-teal-200">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Results in seconds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>HIPAA compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      Trusted by 10K+ users
                    </span>
                    <span className="sm:hidden">10K+ users</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-first lg:order-last">
                <div className="medical-card p-4 md:p-8 animate-medical-glow bg-black/60 backdrop-blur-md rounded-xl shadow-lg">
                  <img
                    src={heroImage}
                    alt="Medical equipment for skin analysis"
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Use Section */}
        <section className="py-16 px-6 bg-black/50">
          <div className="container mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Why Use SkinDetect AI?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Detects uploaded skin is cancerous or non cancerous",
                "85+% accuracy rate",
                "Instant results in under 1 minute",
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-black/60 border border-teal-500/50"
                >
                  <CheckCircle className="h-6 w-6 text-teal-400 mx-auto mb-3" />
                  <p className="text-gray-200">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You Learn in 1 Minute */}
        <section className="py-16 px-6 bg-black/60">
          <div className="container mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              What Can You Learn in 1 Minute?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left text-gray-200">
              <ul className="space-y-2">
                <li>✔ Skin cancer (melanoma, benign, etc.)</li>
                <li>✔ Precancerous lesions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 px-6 bg-black/60">
          <div className="container mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              How to Use SkinDetect AI
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Camera,
                  title: "Take a Photo or Upload from Gallery",
                  desc: "Zoom <10cm, in focus, mark centered.",
                },
                {
                  icon: Send,
                  title: "Upload & Analyze",
                  desc: "AI analyzes and gives risk assessment.",
                },
                {
                  icon: FileText,
                  title: "Get Result",
                  desc: "Detailed result in 60 seconds.",
                },
              ].map((step, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-black/60 border border-teal-500/50"
                >
                  <step.icon className="h-10 w-10 text-teal-400 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-300">{step.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="border-t border-teal-500/50 bg-black/70 py-8 md:py-12">
          <div className="container mx-auto px-4 text-center text-teal-300 text-sm">
            <p>
              &copy; 2025 SkinDetect AI. All rights reserved. Not a substitute
              for professional medical advice.
            </p>
          </div>
        </footer>
        {/* Chatbot */}
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
