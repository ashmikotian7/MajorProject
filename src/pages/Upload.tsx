"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import {
  Upload as UploadIcon,
  Image as ImageIcon,
  Scan,
  Shield,
  AlertTriangle,
  CheckCircle,
  Menu,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ChatBot from "@/components/ChatBot";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Slides", to: "/skinguardslides" },
  { label: "More Info", to: "/moreinfo" },
  { label: "Contact", to: "/contact" },
];

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [results, setResults] = useState<{
    prediction: string;
    confidence: number;
    risk: "low" | "medium" | "high";
    recommendation: string;
  } | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JPG or PNG image file.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    setAnalysisComplete(false);
    setResults(null);
  };

  const simulateAIAnalysis = async () => {
    setIsAnalyzing(true);
    setProgress(0);

    const progressSteps = [20, 40, 60, 80, 100];

    for (const step of progressSteps) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProgress(step);
    }

    const predictions = [
      {
        prediction: "Benign (Non-cancerous)",
        confidence: 85,
        risk: "low" as const,
        recommendation:
          "This appears to be a benign lesion. Continue regular self-examinations and monitor for any changes.",
      },
      {
        prediction: "Requires Medical Attention",
        confidence: 72,
        risk: "medium" as const,
        recommendation:
          "Some concerning features detected. Schedule an appointment with a dermatologist for professional evaluation.",
      },
      {
        prediction: "High Risk - Seek Immediate Care",
        confidence: 91,
        risk: "high" as const,
        recommendation:
          "Multiple risk factors detected. Contact a dermatologist immediately for urgent evaluation and possible biopsy.",
      },
    ];

    const randomResult =
      predictions[Math.floor(Math.random() * predictions.length)];

    setTimeout(() => {
      setResults(randomResult);
      setAnalysisComplete(true);
      setIsAnalyzing(false);

      const history = JSON.parse(
        localStorage.getItem("skinGuardHistory") || "[]"
      );
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString(),
        filename: selectedFile?.name,
        result: randomResult,
      };
      history.unshift(newEntry);
      localStorage.setItem(
        "skinGuardHistory",
        JSON.stringify(history.slice(0, 10))
      );
    }, 1000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-green-400";
      case "medium":
        return "text-yellow-400";
      case "high":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "low":
        return CheckCircle;
      case "medium":
        return AlertTriangle;
      case "high":
        return AlertTriangle;
      default:
        return Shield;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/doctor.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-teal-500/50 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors"
          >
            <Shield className="h-6 w-6 text-teal-400" />
            <span className="text-lg md:text-2xl font-bold">SkinGuard AI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 border-b-2 border-transparent hover:border-teal-400 pb-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-teal-500/30 bg-black/80 backdrop-blur-sm">
            <nav className="flex flex-col px-6 py-4 gap-3 text-white font-semibold">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="hover:text-teal-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              AI Skin Analysis
            </h1>
            <p className="text-lg text-teal-200 max-w-2xl mx-auto">
              Upload a clear image of your skin concern for instant AI-powered
              analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Card */}
            <Card className="bg-black/60 backdrop-blur-md border border-teal-500/40 p-6 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
                  <UploadIcon className="h-5 w-5 text-teal-400" />
                  Upload Image
                </h2>

                {!previewUrl ? (
                  <div
                    className="border-2 border-dashed border-teal-500/40 rounded-lg p-12 text-center cursor-pointer hover:border-teal-400 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <ImageIcon className="h-16 w-16 mx-auto text-teal-300" />
                    <p className="mt-4 text-white font-medium">
                      Click to upload image
                    </p>
                    <p className="text-sm text-gray-400">JPG, PNG up to 10MB</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={previewUrl}
                        alt="Uploaded skin"
                        className="w-full h-64 object-cover rounded-lg border border-teal-500/30"
                      />
                      {isAnalyzing && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-lg">
                          <Scan className="h-10 w-10 text-teal-400 animate-spin" />
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        size="sm"
                        className="text-white border-teal-400 hover:bg-teal-500/20"
                      >
                        Change
                      </Button>
                      <Button
                        onClick={simulateAIAnalysis}
                        disabled={isAnalyzing || analysisComplete}
                        className="bg-teal-500 hover:bg-teal-400 text-white flex-1"
                      >
                        <Scan className="mr-2 h-4 w-4" />
                        {isAnalyzing
                          ? "Analyzing..."
                          : analysisComplete
                          ? "Complete"
                          : "Start Analysis"}
                      </Button>
                    </div>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </Card>

            {/* Results Card */}
            <Card className="bg-black/60 backdrop-blur-md border border-teal-500/40 p-6 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
                  <Shield className="h-5 w-5 text-teal-400" />
                  Analysis Results
                </h2>

                {!selectedFile && (
                  <div className="text-center py-12 text-gray-400">
                    <Scan className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Upload an image to start analysis</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="space-y-4">
                    <p className="text-center text-white">
                      AI Analysis in Progress...
                    </p>
                    <Progress
                      value={progress}
                      className="h-2 bg-gray-700 [&>div]:bg-teal-400"
                    />
                  </div>
                )}

                {analysisComplete && results && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const RiskIcon = getRiskIcon(results.risk);
                        return (
                          <RiskIcon
                            className={`h-8 w-8 ${getRiskColor(results.risk)}`}
                          />
                        );
                      })()}
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {results.prediction}
                        </h3>
                        <p className="text-sm text-gray-400">
                          AI Confidence: {results.confidence}%
                        </p>
                      </div>
                    </div>

                    <div className="bg-black/40 border border-teal-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-teal-300 mb-2">
                        Recommendation
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {results.recommendation}
                      </p>
                    </div>

                    <div className="text-xs text-gray-400 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <strong>Disclaimer:</strong> This AI analysis is for
                      educational purposes only. Always consult a qualified
                      healthcare provider.
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-teal-500/50 bg-black/70 py-8 md:py-12">
        <div className="container mx-auto px-4 text-center text-teal-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} SkinDetect AI. All rights reserved.
            Not a substitute for professional medical advice.
          </p>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Upload;
