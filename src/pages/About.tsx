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
  Stethoscope,
  BookOpen,
  AlertCircle,
  ExternalLink,
  Menu
} from "lucide-react";
import ChatBot from "@/components/ChatBot";

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a3f] via-[#0d224d] to-[#0a1a3f] text-white">
      {/* Header */}
      <header className="border-b border-blue-800/50 bg-gradient-to-r from-[#0a1a3f]/90 to-[#0d224d]/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-200 hover:text-blue-400 transition-colors">
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
            <span className="text-lg md:text-2xl font-bold">SkinGuard AI</span>
          </Link>
          
          {/* Desktop Header Info */}
          <div className="hidden md:block text-sm text-blue-300">
            About Our Technology
          </div>

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
          <div className="md:hidden border-t border-blue-800/50 bg-gradient-to-r from-[#0a1a3f] to-[#0d224d]">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className="block text-gray-200 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/upload" 
                className="block text-gray-200 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Detection Tool
              </Link>
              <div className="pt-2 text-sm text-blue-300 border-t border-blue-800/50">
                About Our Technology
              </div>
            </nav>
          </div>
        )}
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          
          {/* Hero Section */}
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white">About SkinGuard AI</h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge artificial intelligence to democratize access to skin cancer screening and early detection worldwide.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="p-8 bg-blue-950/40 backdrop-blur-md border border-blue-700/50 shadow-lg">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-400" />
                Our Mission
              </h2>
              <p className="text-lg text-blue-200 leading-relaxed">
                Early detection of skin cancer saves lives. Our mission is to make advanced skin cancer screening accessible to everyone, everywhere, using state-of-the-art AI technology that matches the accuracy of dermatological professionals.
              </p>
            </div>
          </Card>

          {/* Technology Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-blue-950/40 backdrop-blur-md border border-blue-700/50 shadow-lg">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <Brain className="h-6 w-6 text-blue-400" />
                  AI Technology
                </h3>
                <div className="space-y-4">
                  <p className="text-blue-200">
                    Our deep learning model is trained on over 100,000 dermatologist-verified skin images, achieving 94.5% accuracy in melanoma detection.
                  </p>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Convolutional Neural Networks (CNNs) for image analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Transfer learning from medical imaging datasets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ensemble methods for improved reliability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-blue-950/40 backdrop-blur-md border border-blue-700/50 shadow-lg">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <Lock className="h-6 w-6 text-blue-400" />
                  Privacy & Security
                </h3>
                <div className="space-y-4">
                  <p className="text-blue-200">
                    Your privacy is our priority. All image processing happens locally in your browser - no images are ever uploaded to our servers.
                  </p>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Client-side AI processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></div>
                      <span>HIPAA compliant design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No personal data collection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Users, number: "50K+", label: "Users Served", color: "text-blue-400" },
              { icon: Award, number: "94.5%", label: "Accuracy Rate", color: "text-cyan-300" },
              { icon: Clock, number: "<30s", label: "Analysis Time", color: "text-teal-300" },
              { icon: Shield, number: "100%", label: "Privacy Protected", color: "text-red-400" }
            ].map((stat, index) => (
              <Card key={index} className="p-4 md:p-6 text-center bg-blue-950/40 backdrop-blur-md border border-blue-700/50 shadow-lg">
                <div className={`${stat.color} mb-2 md:mb-3 flex justify-center`}>
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div className="text-xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Medical Disclaimer */}
          <Card className="p-8 bg-gradient-to-r from-indigo-900/80 to-blue-800/80 border border-blue-600/60 shadow-xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-yellow-400" />
                Medical Disclaimer
              </h3>
              <div className="space-y-4">
                <p className="text-gray-200 leading-relaxed">
                  <strong>Important:</strong> SkinGuard AI is an educational tool designed to assist in early detection awareness. It is NOT a substitute for professional medical diagnosis, treatment, or advice.
                </p>
                <div className="bg-blue-950/60 border border-blue-700/60 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-white">Always consult a healthcare professional if:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• You notice changes in existing moles or spots</li>
                    <li>• New growths appear on your skin</li>
                    <li>• You have concerns about any skin lesion</li>
                    <li>• Our AI indicates medium or high risk</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Educational Resources */}
          <Card className="p-8 bg-blue-950/40 backdrop-blur-md border border-blue-700/50 shadow-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-400" />
                Educational Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Skin Cancer Facts</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Skin cancer is the most common cancer worldwide</li>
                    <li>• Early detection increases survival rates to 99%</li>
                    <li>• 1 in 5 Americans will develop skin cancer</li>
                    <li>• UV exposure is the leading preventable cause</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Prevention Tips</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Use broad-spectrum SPF 30+ sunscreen daily</li>
                    <li>• Perform monthly self-skin examinations</li>
                    <li>• Seek shade during peak UV hours (10am-4pm)</li>
                    <li>• Annual dermatologist check-ups</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.cancer.org/cancer/melanoma-skin-cancer.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="medical-button-secondary text-sm inline-flex items-center gap-1"
                >
                  <Stethoscope className="h-4 w-4" />
                  American Cancer Society
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="https://www.aad.org/public/diseases/skin-cancer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="medical-button-secondary text-sm inline-flex items-center gap-1"
                >
                  <BookOpen className="h-4 w-4" />
                  Dermatology Association
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-8 text-center bg-gradient-to-r from-blue-800/80 to-cyan-700/80 border border-cyan-500/60 shadow-xl">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Ready to Start?</h3>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Take the first step in proactive skin health monitoring. Upload an image for instant AI-powered analysis.
              </p>
              <Link to="/upload" className="medical-button-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                <Shield className="h-5 w-5" />
                Start Analysis Now
              </Link>
            </div>
          </Card>
        </div>
      </div>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
};

export default About;
