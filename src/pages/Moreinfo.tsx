import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, FileText, CheckCircle, Menu, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatBot from "@/components/ChatBot";

// ✅ Same navLinks structure as index.tsx
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Tips", to: "/skinguardslides" },
  { label: "More Info", to: "/moreinfo" },
  { label: "Contact", to: "/contact" },
];

const MoreInfo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        {/* ✅ Header (same as index.tsx) */}
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

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-teal-500/50 bg-black/70">
              <nav className="container mx-auto px-4 py-4 space-y-3">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.to}
                    className={`block py-2 ${
                      link.to === "/moreinfo"
                        ? "text-teal-400 font-semibold"
                        : "text-gray-200 hover:text-teal-400"
                    }`}
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
        <main className="flex-grow container mx-auto px-4 py-16 space-y-16">
          {/* Intro */}
          <section className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Why Choose SkinDetect AI?
            </h2>
            <p className="text-teal-200">
              Our AI-powered detection system helps with early detection of skin cancer. 
              Trained on thousands of medical images, it provides reliable insights 
              while protecting your privacy.
            </p>
          </section>

          {/* Features */}
          <section className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Data Security",
                text: "Your uploaded images are encrypted and processed securely. HIPAA-compliant."
              },
              {
                icon: FileText,
                title: "Research-Backed",
                text: "Models trained on peer-reviewed datasets validated by dermatology experts."
              },
              {
                icon: CheckCircle,
                title: "Trusted Accuracy",
                text: "AI analysis is continuously refined, minimizing false positives and negatives."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-teal-500/40 text-center"
              >
                <item.icon className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </section>

          {/* ✅ Research Section with multiple papers */}
          <section className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Skin Cancer Research
            </h2>
            <p className="text-teal-200">
              Advances in AI and dermatology are improving early detection and
              treatment outcomes. Here are some key studies:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Dermatologist-level classification of skin cancer with deep neural networks",
                  link: "https://www.nature.com/articles/nature21056"
                },
                {
                  title: "Artificial intelligence in dermatology: past, present, and future",
                  link: "https://www.thelancet.com/journals/landig/article/PIIS2589-7500(19)30135-8/fulltext"
                },
                {
                  title: "Evaluation of artificial intelligence–based detection of melanoma",
                  link: "https://jamanetwork.com/journals/jamadermatology/fullarticle/2764608"
                },
                {
                  title: "Deep learning systems for melanoma detection",
                  link: "https://pubmed.ncbi.nlm.nih.gov/33222116/"
                },
                {
                  title: "AI-powered skin cancer detection in clinical practice",
                  link: "https://www.nature.com/articles/s41591-020-1012-1"
                }
              ].map((paper, idx) => (
                <a
                  key={idx}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-black/60 border border-teal-500/40 rounded-lg shadow hover:bg-black/80 transition text-teal-300 text-sm"
                >
                  {paper.title}
                </a>
              ))}
            </div>
          </section>

          {/* ✅ More Information Section */}
          <section className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              More About Skin Cancer
            </h2>
            <div className="bg-black/60 p-6 rounded-xl shadow-lg border border-teal-500/40 space-y-4">
              <p className="text-gray-300">
                Skin cancer is the most common form of cancer worldwide. It
                occurs when skin cells grow uncontrollably due to DNA damage,
                often from UV exposure.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-teal-200 text-sm">
                <li>
                  <strong>Types:</strong> Basal cell carcinoma, squamous cell
                  carcinoma, and melanoma.
                </li>
                <li>
                  <strong>Risk Factors:</strong> Excessive sun exposure, tanning
                  beds, family history, fair skin.
                </li>
                <li>
                  <strong>Prevention:</strong> Sunscreen, protective clothing,
                  avoiding peak UV hours, regular self-checks.
                </li>
              </ul>
              <p className="text-gray-300">
                Early detection greatly increases the chances of successful
                treatment. Regular skin checks and dermatology visits are
                strongly recommended.
              </p>
            </div>

            {/* ✅ Did You Know Card */}
            <div className="mt-6 bg-teal-500/20 border border-teal-400 rounded-lg p-5 flex items-start gap-3">
              <Info className="h-6 w-6 text-teal-300 mt-1" />
              <p className="text-teal-200 text-sm">
                Did you know? Skin cancer is highly preventable—experts estimate
                that **over 90% of cases are linked to UV exposure** and can be
                reduced with consistent sun protection.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Experience the Future of Skin Health?
            </h2>
            <p className="text-teal-200 max-w-xl mx-auto">
              Start your free analysis today. Upload a photo of your skin concern 
              and let our AI provide insights instantly.
            </p>
          </section>
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

        {/* ChatBot */}
        <ChatBot />
      </div>
    </div>
  );
};

export default MoreInfo;
