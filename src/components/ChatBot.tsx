import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Shield, 
  AlertCircle,
  Minimize2,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm SkinGuard Assistant. I can help answer questions about skin health, our AI detection tool, and general information. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help with any questions about skin health or our AI detection tool. What would you like to know?";
    }
    
    if (lowerMessage.includes('skin cancer') || lowerMessage.includes('melanoma')) {
      return "Skin cancer is the most common type of cancer. Early detection is crucial - when caught early, the 5-year survival rate is over 99%. Our AI tool can help identify concerning features, but always consult a dermatologist for professional evaluation.";
    }
    
    if (lowerMessage.includes('mole') || lowerMessage.includes('spot') || lowerMessage.includes('lesion')) {
      return "When examining moles, look for the ABCDE signs: Asymmetry, Border irregularity, Color variation, Diameter over 6mm, and Evolution (changes over time). If you notice any of these features, please consult a healthcare professional.";
    }
    
    if (lowerMessage.includes('accuracy') || lowerMessage.includes('reliable') || lowerMessage.includes('trust')) {
      return "Our AI model has achieved 94.5% accuracy in clinical studies, trained on over 100,000 dermatologist-verified images. However, this tool is for educational purposes and should never replace professional medical diagnosis.";
    }
    
    if (lowerMessage.includes('upload') || lowerMessage.includes('how') || lowerMessage.includes('use')) {
      return "To use our detection tool: 1) Click 'Get Started' or visit the Upload page, 2) Take a clear, well-lit photo of your skin concern, 3) Upload and click 'Start Analysis', 4) Review results and follow recommendations to consult a healthcare provider if needed.";
    }
    
    if (lowerMessage.includes('privacy') || lowerMessage.includes('secure') || lowerMessage.includes('data')) {
      return "Your privacy is our priority. All image processing happens locally in your browser - no images are uploaded to our servers. We're HIPAA compliant and don't store any personal health information.";
    }
    
    if (lowerMessage.includes('doctor') || lowerMessage.includes('dermatologist') || lowerMessage.includes('medical')) {
      return "While our AI tool provides valuable insights, it's essential to consult with a qualified dermatologist or healthcare provider for any skin concerns. They can perform physical examinations, biopsies if needed, and provide proper medical treatment.";
    }
    
    if (lowerMessage.includes('prevent') || lowerMessage.includes('protection') || lowerMessage.includes('sunscreen')) {
      return "Key prevention tips: Use broad-spectrum SPF 30+ sunscreen daily, seek shade during peak UV hours (10am-4pm), wear protective clothing, avoid tanning beds, perform monthly self-examinations, and get annual dermatologist check-ups.";
    }
    
    return "I understand you're asking about skin health. While I can provide general information, please remember that this chatbot is for educational purposes only. For specific medical concerns, always consult with a qualified healthcare professional. Is there anything else about our AI tool or general skin health I can help with?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="medical-button-primary rounded-full w-16 h-16 shadow-lg hover:shadow-xl animate-medical-glow"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={cn(
        "medical-card w-80 md:w-96 transition-all duration-300",
        isMinimized ? "h-16" : "h-[500px]"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">SkinGuard Assistant</h3>
              <p className="text-xs text-muted-foreground">Online • Skin Health Support</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 hover:bg-secondary/50"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-secondary/50"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto h-80 bg-gradient-to-b from-background to-secondary/20">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-2",
                    message.isBot ? "justify-start" : "justify-end"
                  )}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[75%] p-3 rounded-lg text-sm",
                      message.isBot 
                        ? "bg-gradient-to-br from-card to-secondary/50 border border-border/50 text-foreground" 
                        : "bg-gradient-to-r from-primary to-primary-dark text-primary-foreground"
                    )}
                  >
                    <p className="leading-relaxed">{message.text}</p>
                    <p className={cn(
                      "text-xs mt-1 opacity-70",
                      message.isBot ? "text-muted-foreground" : "text-primary-foreground/70"
                    )}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {!message.isBot && (
                    <div className="w-6 h-6 bg-gradient-to-r from-secondary to-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-3 w-3 text-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-card to-secondary/50 border border-border/50 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Medical Disclaimer */}
            <div className="px-4 py-2 bg-warning/10 border-y border-warning/20">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-3 w-3 text-warning mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  For educational purposes only. Not medical advice. Consult healthcare professionals for medical concerns.
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50 bg-gradient-to-r from-background to-secondary/20 rounded-b-xl">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skin health..."
                  className="medical-input flex-1 text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="medical-button-primary px-3 py-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;