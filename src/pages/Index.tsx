import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Scan, FileText, Shield, Clock, Users, Menu } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/doctor.jpg')" }} // Image in public folder
      ></div>

      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-teal-500/50 bg-black/40 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-teal-400" />
              <h1 className="text-lg md:text-2xl font-bold text-white">SkinGuard AI</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-200 hover:text-teal-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-200 hover:text-teal-400 transition-colors">About</Link>
              <Link to="/moreinfo" className="text-gray-200 hover:text-teal-400 transition-colors">More Info</Link>
              <Link to="/contact" className="text-gray-200 hover:text-teal-400 transition-colors">Contact</Link>
              <Link to="/upload" className="medical-button-primary">Get Started</Link>
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
            <div className="md:hidden border-t border-teal-500/50 bg-black/70">
              <nav className="container mx-auto px-4 py-4 space-y-3">
                <Link
                  to="/"
                  className="block text-gray-200 hover:text-teal-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-200 hover:text-teal-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/upload"
                  className="block medical-button-primary text-center py-3"
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
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="space-y-4 animate-medical-fade-in">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    AI-Powered
                    <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text">
                      {" "}Skin Cancer
                    </span>{" "}
                    Detection
                  </h2>
                  <p className="text-lg md:text-xl text-teal-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Early detection saves lives. Upload a photo of your skin concern and get instant AI analysis with professional-grade accuracy.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/upload" className="medical-button-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                    <Upload className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Start Detection
                  </Link>
                  <Link to="/about" className="medical-button-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                    Learn More
                  </Link>
                </div>
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
                    <span className="hidden sm:inline">Trusted by 10K+ users</span>
                    <span className="sm:hidden">10K+ users</span>
                  </div>
                </div>
              </div>
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

        {/* How It Works Section */}
        <section className="py-12 md:py-20 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 md:mb-16">
              <h3 className="text-2xl md:text-4xl font-bold text-white">How SkinGuard AI Works</h3>
              <p className="text-lg md:text-xl text-teal-200 max-w-2xl mx-auto">
                Our advanced AI model analyzes skin lesions using dermatology-grade algorithms trained on thousands of medical images.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Upload,
                  title: "1. Upload Image",
                  description: "Take a clear photo of your skin concern or upload from your device. Our system accepts JPG, PNG formats.",
                  color: "text-teal-400"
                },
                {
                  icon: Scan,
                  title: "2. AI Analysis",
                  description: "Our trained AI model analyzes the image using advanced computer vision and machine learning algorithms.",
                  color: "text-cyan-400"
                },
                {
                  icon: FileText,
                  title: "3. Get Results",
                  description: "Receive detailed analysis with confidence scores and recommendations for next steps with healthcare providers.",
                  color: "text-emerald-400"
                }
              ].map((step, index) => (
                <Card
                  key={index}
                  className="medical-card p-6 md:p-8 text-center hover:scale-105 transition-transform duration-300 
                             bg-black/60 backdrop-blur-md shadow-xl border border-teal-500/60"
                >
                  <div className={`${step.color} mb-4 flex justify-center drop-shadow-lg`}>
                    <step.icon className="h-12 w-12 md:h-16 md:w-16" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">{step.title}</h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-black/60">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Take Control of Your Skin Health Today
              </h3>
              <p className="text-lg md:text-xl text-teal-200">
                Don't wait for symptoms to worsen. Early detection is key to successful treatment. Start your AI-powered skin analysis now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/upload" className="medical-button-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  <Scan className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Start Free Analysis
                </Link>
                <Link to="/about" className="medical-button-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  View Sample Results
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-teal-500/50 bg-black/70 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="col-span-2 md:col-span-1 space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-teal-400" />
                  <span className="text-base md:text-lg font-semibold text-white">SkinGuard AI</span>
                </div>
                <p className="text-sm md:text-base text-teal-200">
                  AI-powered skin cancer detection for early diagnosis and peace of mind.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm md:text-base font-semibold text-white">Product</h4>
                <ul className="space-y-2 text-xs md:text-sm text-teal-200">
                  <li><Link to="/upload" className="hover:text-teal-400 transition-colors">Detection Tool</Link></li>
                  <li><Link to="/about" className="hover:text-teal-400 transition-colors">How it Works</Link></li>
                  <li><Link to="#" className="hover:text-teal-400 transition-colors">Accuracy Studies</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm md:text-base font-semibold text-white">Support</h4>
                <ul className="space-y-2 text-xs md:text-sm text-teal-200">
                  <li><Link to="#" className="hover:text-teal-400 transition-colors">Help Center</Link></li>
                  <li><Link to="#" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
                  <li><Link to="#" className="hover:text-teal-400 transition-colors">Medical Disclaimer</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm md:text-base font-semibold text-white">Legal</h4>
                <ul className="space-y-2 text-xs md:text-sm text-teal-200">
                  <li><Link to="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link to="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link></li>
                  <li><Link to="#" className="hover:text-teal-400 transition-colors">HIPAA Compliance</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-teal-500/50 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-teal-300">
              <p>&copy; 2024 SkinGuard AI. All rights reserved. This tool is not a substitute for professional medical advice.</p>
            </div>
          </div>
        </footer>

        {/* Chatbot */}
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
