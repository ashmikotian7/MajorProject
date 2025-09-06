import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black/90 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-teal-500/50 bg-black/70 backdrop-blur-sm py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-teal-200 mt-2">We’d love to hear from you</p>
      </header>

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
            <p className="text-gray-300">
              Reach out with any questions, feedback, or partnership opportunities.  
              Our team will get back to you as soon as possible.
            </p>
            <ul className="space-y-4 text-teal-200">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span>support@skinguardai.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>123 Health St, San Francisco, CA</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-black/70 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-teal-500/40">
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-200">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-black/60 border border-teal-500/40 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-200">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-black/60 border border-teal-500/40 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-200">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 rounded-lg bg-black/60 border border-teal-500/40 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full medical-button-primary py-3 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
