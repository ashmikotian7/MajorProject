import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Shield, 
  ArrowLeft, 
  Brain, 
  Target, 
  Users, 
  Award, 
  Clock, 
  Lock,
  AlertCircle,
  Menu
} from "lucide-react";
import ChatBot from "@/components/ChatBot";

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-white">
      {/* Background */}
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
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-200 hover:text-teal-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-teal-400" />
              <span className="text-lg md:text-2xl font-bold">SkinDetect AI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 
                           border-b-2 border-transparent hover:border-teal-400 pb-1"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 
                           border-b-2 border-transparent hover:border-teal-400 pb-1"
              >
                About
              </Link>
              <Link
                to="/skinguardslides"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 
                           border-b-2 border-transparent hover:border-teal-400 pb-1"
              >
                Tips
              </Link>
              <Link
                to="/moreinfo"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 
                           border-b-2 border-transparent hover:border-teal-400 pb-1"
              >
                More Info
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 
                           border-b-2 border-transparent hover:border-teal-400 pb-1"
              >
                Contact
              </Link>
            </nav>

            {/* CTA button */}
            {/* Mobile Menu Toggle */}
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
                  to="/skinguardslides"
                  className="block text-gray-200 hover:text-teal-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tips
                </Link>
                <Link
                  to="/moreinfo"
                  className="block text-gray-200 hover:text-teal-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  More Info
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-200 hover:text-teal-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* CTA inside mobile menu */}
              </nav>
            </div>
          )}
        </header>

        {/* Page Content */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            
            {/* Hero */}
            <div className="text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white">About SkinDetect AI</h1>
              <p className="text-lg md:text-xl text-teal-200 max-w-3xl mx-auto leading-relaxed">
                Leveraging cutting-edge artificial intelligence to democratize access to skin cancer screening and early detection worldwide.
              </p>
            </div>

            {/* Mission */}
            <Card className="p-8 bg-black/60 backdrop-blur-md border border-teal-500/50 shadow-lg">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Target className="h-8 w-8 text-teal-400" />
                Our Mission
              </h2>
              <p className="text-lg text-teal-200 leading-relaxed mt-4">
                Early detection of skin cancer saves lives. Our mission is to make advanced skin cancer screening accessible to everyone, everywhere, using state-of-the-art AI technology that matches the accuracy of dermatological professionals.
              </p>
            </Card>

            {/* Technology & Privacy */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-black/60 border border-teal-500/50 shadow-lg">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <Brain className="h-6 w-6 text-teal-400" />
                  AI Technology
                </h3>
                <p className="text-teal-200 mt-4">
                  Our deep learning model is trained on over 100,000 dermatologist-verified skin images, achieving 94.5% accuracy in melanoma detection.
                </p>
              </Card>

              <Card className="p-8 bg-black/60 border border-teal-500/50 shadow-lg">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <Lock className="h-6 w-6 text-cyan-300" />
                  Privacy & Security
                </h3>
                <p className="text-teal-200 mt-4">
                  Your privacy is our priority. All image processing happens locally in your browser - no images are ever uploaded to our servers.
                </p>
              </Card>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, number: "10K+", label: "Users Served", color: "text-teal-400" },
                { icon: Award, number: "80+%", label: "Accuracy Rate", color: "text-cyan-300" },
                { icon: Clock, number: "<60s", label: "Analysis Time", color: "text-teal-300" },
                { icon: Shield, number: "100%", label: "Privacy Protected", color: "text-red-400" }
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-black/60 border border-teal-500/50 shadow-lg">
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs md:text-sm text-teal-200">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Disclaimer */}
            <Card className="p-8 bg-black/60 border border-teal-500/50 shadow-lg">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-yellow-400" />
                Medical Disclaimer
              </h3>
              <p className="text-gray-200 mt-4">
                <strong>Important:</strong> SkinDetect AI is an educational tool designed to assist in early detection awareness. It is NOT a substitute for professional medical diagnosis, treatment, or advice.
              </p>
            </Card>

            {/* CTA */}
            <Card className="p-8 text-center bg-gradient-to-r from-teal-700/80 to-cyan-700/80 border border-cyan-500/60 shadow-xl">
              <h3 className="text-3xl font-bold text-white">Ready to Start?</h3>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mt-4">
                Take the first step in proactive skin health monitoring. Upload an image for instant AI-powered analysis.
              </p>
              <Link to="/upload" className="inline-flex items-center gap-2 text-lg px-8 py-4 mt-6 rounded-md bg-teal-500 text-black font-semibold hover:bg-teal-600 transition-colors shadow-sm">
                <Shield className="h-5 w-5" />
                Start Analysis Now
              </Link>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-teal-500/50 bg-black/70 py-8 text-center text-teal-300 text-sm">
          &copy; 2025 SkinDetect AI. All rights reserved. Not a substitute
          for professional medical advice.
        </footer>

        {/* Chatbot */}
        <ChatBot />
      </div>
    </div>
  );
};

export default About;
