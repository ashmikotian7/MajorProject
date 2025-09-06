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
  ArrowLeft,
  Camera,
  FileImage,
  Menu
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ChatBot from "@/components/ChatBot";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [results, setResults] = useState<{
    prediction: string;
    confidence: number;
    risk: 'low' | 'medium' | 'high';
    recommendation: string;
  } | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JPG or PNG image file.",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "File too large", 
        description: "Please upload an image smaller than 10MB.",
        variant: "destructive"
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

    // Simulate analysis progress
    const progressSteps = [
      { value: 20, message: "Preprocessing image..." },
      { value: 40, message: "Running AI analysis..." },
      { value: 60, message: "Analyzing skin patterns..." },
      { value: 80, message: "Calculating confidence scores..." },
      { value: 100, message: "Analysis complete!" }
    ];

    for (const step of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(step.value);
    }

    // Simulate random results
    const predictions = [
      { 
        prediction: "Benign (Non-cancerous)", 
        confidence: 85, 
        risk: 'low' as const,
        recommendation: "This appears to be a benign lesion. Continue regular self-examinations and monitor for any changes."
      },
      { 
        prediction: "Requires Medical Attention", 
        confidence: 72, 
        risk: 'medium' as const,
        recommendation: "Some concerning features detected. Schedule an appointment with a dermatologist for professional evaluation."
      },
      { 
        prediction: "High Risk - Seek Immediate Care", 
        confidence: 91, 
        risk: 'high' as const,
        recommendation: "Multiple risk factors detected. Contact a dermatologist immediately for urgent evaluation and possible biopsy."
      }
    ];

    const randomResult = predictions[Math.floor(Math.random() * predictions.length)];
    
    setTimeout(() => {
      setResults(randomResult);
      setAnalysisComplete(true);
      setIsAnalyzing(false);
      
      // Save to local storage history
      const history = JSON.parse(localStorage.getItem('skinGuardHistory') || '[]');
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString(),
        filename: selectedFile?.name,
        result: randomResult
      };
      history.unshift(newEntry);
      localStorage.setItem('skinGuardHistory', JSON.stringify(history.slice(0, 10))); // Keep last 10
    }, 1000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-accent';
      case 'medium': return 'text-warning';
      case 'high': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return CheckCircle;
      case 'medium': return AlertTriangle;
      case 'high': return AlertTriangle;
      default: return Shield;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-r from-blue-950 to-blue-900 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <span className="text-lg md:text-2xl font-bold">SkinGuard AI</span>
          </Link>
          
          {/* Desktop Header Info */}
          <div className="hidden md:block text-sm text-muted-foreground">
            Skin Cancer Detection Tool
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
          <div className="md:hidden border-t border-border/50 bg-gradient-to-r from-blue-950 to-blue-900">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-2 text-sm text-muted-foreground border-t border-border/50">
                Skin Cancer Detection Tool
              </div>
            </nav>
          </div>
        )}
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">AI Skin Analysis</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload a clear image of your skin concern for instant AI-powered analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Upload Section */}
            <Card className="medical-card p-4 md:p-8">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2">
                  <UploadIcon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Upload Image
                </h2>
                
                {!previewUrl ? (
                  <div 
                    className="border-2 border-dashed border-border/50 rounded-lg p-8 md:p-12 text-center cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex justify-center">
                        <ImageIcon className="h-12 w-12 md:h-16 md:w-16 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base md:text-lg font-medium text-foreground">Click to upload image</p>
                        <p className="text-sm text-muted-foreground">
                          JPG, PNG files up to 10MB
                        </p>
                      </div>
                      <div className="flex justify-center gap-3 md:gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Camera className="h-4 w-4" />
                          <span className="hidden sm:inline">Take Photo</span>
                          <span className="sm:hidden">Photo</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileImage className="h-4 w-4" />
                          <span className="hidden sm:inline">Choose File</span>
                          <span className="sm:hidden">File</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative">
                      <img 
                        src={previewUrl} 
                        alt="Uploaded skin image" 
                        className="w-full h-48 md:h-64 object-cover rounded-lg border border-border/50"
                      />
                      {isAnalyzing && (
                        <div className="absolute inset-0 bg-background/80 rounded-lg flex items-center justify-center">
                          <div className="medical-loading w-full h-full rounded-lg"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        size="sm"
                        className="medical-button-secondary"
                      >
                        Change Image
                      </Button>
                      <Button
                        onClick={simulateAIAnalysis}
                        disabled={isAnalyzing || analysisComplete}
                        className="medical-button-primary flex-1"
                      >
                        {isAnalyzing ? (
                          <Scan className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Scan className="mr-2 h-4 w-4" />
                        )}
                        {isAnalyzing ? "Analyzing..." : analysisComplete ? "Analysis Complete" : "Start Analysis"}
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

            {/* Results Section */}
            <Card className="medical-card p-4 md:p-8">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Analysis Results
                </h2>

                {!selectedFile && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Scan className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Upload an image to start analysis</p>
                  </div>
                )}

                {selectedFile && !isAnalyzing && !analysisComplete && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Scan className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Click "Start Analysis" to begin</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <Scan className="h-12 w-12 mx-auto mb-4 text-primary animate-medical-pulse" />
                      <p className="text-lg font-medium text-foreground">AI Analysis in Progress</p>
                      <p className="text-sm text-muted-foreground">This may take a few moments...</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground font-medium">{progress}%</span>
                      </div>
                      <Progress value={progress} className="medical-progress-bar" />
                    </div>
                  </div>
                )}

                {analysisComplete && results && (
                  <div className="space-y-6 animate-medical-fade-in">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        {(() => {
                          const RiskIcon = getRiskIcon(results.risk);
                          return <RiskIcon className={`h-8 w-8 ${getRiskColor(results.risk)}`} />;
                        })()}
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{results.prediction}</h3>
                          <p className="text-sm text-muted-foreground">AI Confidence: {results.confidence}%</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Confidence Level</span>
                          <span className="text-foreground font-medium">{results.confidence}%</span>
                        </div>
                        <div className="medical-progress-bar h-2">
                          <div 
                            className="medical-progress-fill h-full"
                            style={{ width: `${results.confidence}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-secondary/50 to-background border border-border/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Recommendation</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {results.recommendation}
                        </p>
                      </div>

                      <div className="text-xs text-muted-foreground bg-warning/10 border border-warning/20 rounded-lg p-3">
                        <strong>Medical Disclaimer:</strong> This AI analysis is for educational purposes only and should not replace professional medical diagnosis. Always consult with a qualified healthcare provider for medical concerns.
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          onClick={() => {
                            setSelectedFile(null);
                            setPreviewUrl("");
                            setAnalysisComplete(false);
                            setResults(null);
                            setProgress(0);
                          }}
                          className="medical-button-secondary flex-1"
                        >
                          New Analysis
                        </Button>
                        <Button className="medical-button-primary">
                          Save Results
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Important Notes */}
          <Card className="medical-card p-4 md:p-6 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                Important Guidelines
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Image Quality</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Clear, well-lit photos</li>
                    <li>• Focus on the area of concern</li>
                    <li>• Avoid shadows and glare</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Privacy & Security</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Images processed locally</li>
                    <li>• No data stored on servers</li>
                    <li>• HIPAA compliant processing</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Next Steps</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Consult healthcare provider</li>
                    <li>• Keep monitoring changes</li>
                    <li>• Regular skin examinations</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Upload;
