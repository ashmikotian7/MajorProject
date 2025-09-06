import { Shield, FileText, CheckCircle } from "lucide-react";

const MoreInfo = () => {
  return (
    <div className="min-h-screen bg-black/90 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-teal-500/50 bg-black/70 backdrop-blur-sm py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">More Information</h1>
        <p className="text-teal-200 mt-2">
          Learn more about SkinGuard AI’s technology and reliability
        </p>
      </header>

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 py-12 space-y-12">
        {/* Section 1 */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Why Choose SkinGuard AI?
          </h2>
          <p className="text-gray-300">
            Our AI-powered detection system is designed to help with early
            detection of skin cancer. Trained on thousands of medical images,
            it provides reliable insights while maintaining your privacy.
          </p>
        </section>

        {/* Section 2 - Features */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Data Security",
              text: "Your uploaded images are encrypted and processed securely. We comply with HIPAA standards."
            },
            {
              icon: FileText,
              title: "Research-Backed",
              text: "Our models are trained on peer-reviewed datasets validated by dermatology experts."
            },
            {
              icon: CheckCircle,
              title: "Trusted Accuracy",
              text: "AI analysis is continuously improved for accuracy, minimizing false positives and negatives."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-teal-500/40 text-center"
            >
              <item.icon className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </section>

        {/* Section 3 - Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Experience the Future of Skin Health?
          </h2>
          <p className="text-teal-200 max-w-xl mx-auto">
            Start your free analysis today. Upload a photo of your skin concern
            and let our AI provide insights instantly.
          </p>
          <a
            href="/upload"
            className="medical-button-primary inline-block px-8 py-3 text-lg"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
};

export default MoreInfo;
