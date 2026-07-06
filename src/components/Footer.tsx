import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, ArrowUp } from "lucide-react";

interface FooterProps {
  setActivePage: (page: string) => void;
  isDarkMode: boolean;
  addToast: (message: string, type: "success" | "error") => void;
}

export default function Footer({ setActivePage, isDarkMode, addToast }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      addToast("Please enter a valid email address.", "error");
      return;
    }
    addToast("Successfully subscribed to the Aura Briefing!", "success");
    setNewsletterEmail("");
  };

  const footerLinks = [
    {
      title: "Solutions",
      items: [
        { id: "services", label: "Our Services" },
        { id: "portfolio", label: "Featured Work" },
        { id: "pricing", label: "Investment Plans" },
      ]
    },
    {
      title: "Company",
      items: [
        { id: "about", label: "About Aura" },
        { id: "blog", label: "Inside Aura (Blog)" },
        { id: "contact", label: "Reach Us" },
      ]
    },
    {
      title: "Legal",
      items: [
        { id: "privacy", label: "Privacy Policy" },
        { id: "terms", label: "Terms & Conditions" },
      ]
    }
  ];

  const handleLinkClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t relative z-10 overflow-hidden pt-20 pb-12 transition-colors duration-300 ${
        isDarkMode
          ? "bg-zinc-950 border-white/5 text-zinc-400"
          : "bg-zinc-50 border-zinc-200 text-zinc-600"
      }`}
    >
      {/* Decorative Blob Background */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/5">
        {/* Bio column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-2 text-left cursor-pointer self-start"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-violet-500 to-blue-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg">
              A
            </div>
            <span
              className={`font-display text-2xl font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              AURA
            </span>
          </button>
          <p className="text-sm leading-relaxed max-w-sm">
            We architect award-winning bespoke digital experiences, high-performance web systems, and brand strategy portals that scale enterprise equity.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Github, label: "GitHub" }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                  isDarkMode
                    ? "border-white/5 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                    : "border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950"
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Link columns */}
        {footerLinks.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-5">
            <h4
              className={`font-display text-sm font-semibold uppercase tracking-wider ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              {col.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className={`hover:underline cursor-pointer transition-colors text-left ${
                      isDarkMode ? "hover:text-white" : "hover:text-zinc-950"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter and Contact Quick Block */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-6 lg:col-span-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-violet-500" />
            <span>partnership@auradigital.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-violet-500" />
            <span>+1 (800) 555-AURA</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-violet-500" />
            <span>500 Century Ave, San Francisco, CA</span>
          </div>
        </div>

        {/* Right Newsletter */}
        <form onSubmit={handleSubscribe} className="flex items-center w-full max-w-sm ml-auto relative">
          <input
            type="email"
            placeholder="Subscribe to Aura Insights"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            className={`w-full text-sm pl-4 pr-12 py-3 rounded-xl border focus:outline-none transition-all ${
              isDarkMode
                ? "bg-white/5 border-white/5 text-white focus:border-violet-500 focus:bg-white/10"
                : "bg-white border-zinc-200 text-zinc-900 focus:border-violet-500"
            }`}
          />
          <button
            type="submit"
            className="absolute right-1 p-2 rounded-lg bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-md hover:scale-105 transition-all cursor-pointer"
            aria-label="Subscribe"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} AURA Digital. Built with premium custom standards.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`flex items-center gap-1 hover:underline cursor-pointer transition-colors ${
            isDarkMode ? "hover:text-white" : "hover:text-zinc-950"
          }`}
        >
          Back to Top <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
}
