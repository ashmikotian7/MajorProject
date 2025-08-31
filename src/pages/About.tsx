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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-r from-background to-secondary/20 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <span className="text-lg md:text-2xl font-bold">SkinGuard AI</span>
          </Link>
          
          {/* Desktop Header Info */}
          <div className="hidden md:block text-sm text-muted-foreground">
            About Our Technology
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-gradient-to-r from-background to-secondary/20">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/upload" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Detection Tool
              </Link>
              <div className="pt-2 text-sm text-muted-foreground border-t border-border/50">
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
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">About SkinGuard AI</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge artificial intelligence to democratize access to skin cancer screening and early detection worldwide.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="medical-card p-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Early detection of skin cancer saves lives. Our mission is to make advanced skin cancer screening accessible to everyone, everywhere, using state-of-the-art AI technology that matches the accuracy of dermatological professionals.
              </p>
            </div>
          </Card>

          {/* Technology Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="medical-card p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary" />
                  AI Technology
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our deep learning model is trained on over 100,000 dermatologist-verified skin images, achieving 94.5% accuracy in melanoma detection.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Convolutional Neural Networks (CNNs) for image analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Transfer learning from medical imaging datasets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ensemble methods for improved reliability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="medical-card p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary" />
                  Privacy & Security
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Your privacy is our priority. All image processing happens locally in your browser - no images are ever uploaded to our servers.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Client-side AI processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>HIPAA compliant design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
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
              { icon: Users, number: "50K+", label: "Users Served", color: "text-primary" },
              { icon: Award, number: "94.5%", label: "Accuracy Rate", color: "text-accent" },
              { icon: Clock, number: "<30s", label: "Analysis Time", color: "text-warning" },
              { icon: Shield, number: "100%", label: "Privacy Protected", color: "text-destructive" }
            ].map((stat, index) => (
              <Card key={index} className="medical-card p-4 md:p-6 text-center">
                <div className={`${stat.color} mb-2 md:mb-3 flex justify-center`}>
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div className="text-xl md:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Medical Disclaimer */}
          <Card className="medical-card p-8 bg-gradient-to-r from-warning/10 to-destructive/10 border-warning/20">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-warning" />
                Medical Disclaimer
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Important:</strong> SkinGuard AI is an educational tool designed to assist in early detection awareness. It is NOT a substitute for professional medical diagnosis, treatment, or advice.
                </p>
                <div className="bg-background/50 border border-border/50 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-foreground">Always consult a healthcare professional if:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
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
          <Card className="medical-card p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Educational Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Skin Cancer Facts</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Skin cancer is the most common cancer worldwide</li>
                    <li>• Early detection increases survival rates to 99%</li>
                    <li>• 1 in 5 Americans will develop skin cancer</li>
                    <li>• UV exposure is the leading preventable cause</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Prevention Tips</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
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
          <Card className="medical-card p-8 text-center bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Ready to Start?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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