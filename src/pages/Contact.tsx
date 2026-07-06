import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageSquare, Compass, ShieldCheck } from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
  addToast: (message: string, type: "success" | "error") => void;
}

export default function Contact({ isDarkMode, addToast }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", projectType: "web-dev", budget: "3-5k", brief: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.brief) {
      addToast("Please fill in all required fields (Name, Email, and Project Brief).", "error");
      return;
    }
    addToast("Brief successfully logged! Aura Directors will respond within 24 hours.", "success");
    setForm({ name: "", email: "", projectType: "web-dev", budget: "3-5k", brief: "" });
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "09:00 AM - 06:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 02:00 PM PST" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className={`pt-32 pb-24 px-6 overflow-hidden transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center flex flex-col gap-6 mb-20">
        <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
          INITIATE CONVERSATION
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Let's engineer your <br />
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            next visual pinnacle.
          </span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Complete our short configuration brief below to schedule your complimentary structural system review with our creative director.
        </p>
      </section>

      {/* CORE CONTACT LAYOUT */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
        
        {/* Contact Info and Business Hours Column */}
        <div className="lg:col-span-5 text-left flex flex-col gap-10">
          
          <div className="flex flex-col gap-6">
            <h3 className={`font-display text-xl font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
              Direct Contact Lines
            </h3>
            
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">PROJECT BRIEFINGS</p>
                  <p className={`font-semibold ${isDarkMode ? "text-white" : "text-zinc-950"}`}>partnership@auradigital.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">CALL DIRECT</p>
                  <p className={`font-semibold ${isDarkMode ? "text-white" : "text-zinc-950"}`}>+1 (800) 555-AURA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">GLOBAL FLAGSHIP HEADQUARTERS</p>
                  <p className={`font-semibold ${isDarkMode ? "text-white" : "text-zinc-950"}`}>500 Century Ave, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col gap-6">
            <h3 className={`font-display text-xl font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
              Operating Clock (PST)
            </h3>
            <div className="flex flex-col gap-4 text-sm border-t border-white/5 pt-4">
              {businessHours.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-white/2">
                  <span className="font-semibold">{item.day}</span>
                  <span className="text-zinc-400 font-mono text-xs">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust points */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm font-semibold text-zinc-900 dark:text-white">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Full NDA coverage guaranteed from first contact</span>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className={`p-8 md:p-10 rounded-3xl border text-left flex flex-col gap-6 shadow-2xl relative overflow-hidden ${
              isDarkMode ? "bg-white/2 border-white/5" : "bg-white border-zinc-200"
            }`}
          >
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="contactName" className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">Full Name *</label>
                <input
                  type="text"
                  id="contactName"
                  placeholder="Enter name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-violet-500 transition-all ${
                    isDarkMode ? "bg-white/5 border-white/5 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-950"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contactEmail" className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">Email Address *</label>
                <input
                  type="email"
                  id="contactEmail"
                  placeholder="name@company.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-violet-500 transition-all ${
                    isDarkMode ? "bg-white/5 border-white/5 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-950"
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">Project Type</label>
                <select
                  id="projectType"
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className={`px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-violet-500 transition-all cursor-pointer ${
                    isDarkMode ? "bg-zinc-900 border-white/5 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-950"
                  }`}
                >
                  <option value="web-dev">Bespoke Web Design & Dev</option>
                  <option value="ai-tools">AI & LLM Integration</option>
                  <option value="branding">Brand Strategy & Identity</option>
                  <option value="seo-growth">Technical SEO & Scale</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projectBudget" className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">Estimated Budget</label>
                <select
                  id="projectBudget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className={`px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-violet-500 transition-all cursor-pointer ${
                    isDarkMode ? "bg-zinc-900 border-white/5 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-950"
                  }`}
                >
                  <option value="3-5k">$3,000 - $5,000 / mo</option>
                  <option value="5-10k">$5,000 - $10,000 / mo</option>
                  <option value="10k+">$10,000+ / mo</option>
                  <option value="custom">Custom enterprise SLA</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <label htmlFor="projectBrief" className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">Brief Overview *</label>
              <textarea
                id="projectBrief"
                rows={5}
                placeholder="Briefly describe your objectives, targets, or core performance blockages..."
                required
                value={form.brief}
                onChange={(e) => setForm({ ...form, brief: e.target.value })}
                className={`px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-violet-500 transition-all ${
                  isDarkMode ? "bg-white/5 border-white/5 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-950"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 rounded-xl font-semibold tracking-wider uppercase bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-xl flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              Submit Project Configuration Brief <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* COMPREHENSIVE GOOGLE MAPS PLACEHOLDER */}
      <section className="max-w-7xl mx-auto text-left relative z-10 mb-12">
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase block">
            LOCATION FINDER
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Find our Flagship Office
          </h2>
        </div>

        {/* Premium Dark Interactive-Style Map Placeholder */}
        <div className={`w-full aspect-[21/9] rounded-3xl border overflow-hidden relative flex items-center justify-center ${
          isDarkMode ? "bg-zinc-950 border-white/5" : "bg-zinc-100 border-zinc-200"
        }`}>
          {/* Decorative Vector Lines mimicking street layout */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="currentColor" strokeWidth="2" />
            <line x1="30%" y1="0%" x2="30%" y2="100%" stroke="currentColor" strokeWidth="2" />
            <line x1="70%" y1="0%" x2="70%" y2="100%" stroke="currentColor" strokeWidth="2" />
            <line x1="90%" y1="0%" x2="90%" y2="100%" stroke="currentColor" strokeWidth="2" />
            <line x1="0%" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="2" />
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="2" />
            <line x1="0%" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Glowing Beacon Indicator */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center animate-ping absolute" />
            <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white font-display font-extrabold text-sm relative z-10 shadow-lg shadow-violet-500/50">
              A
            </div>
            
            {/* Popover */}
            <div className={`mt-3 p-4 rounded-xl border shadow-xl flex flex-col gap-1 relative z-10 max-w-xs text-center ${
              isDarkMode ? "bg-zinc-900/90 border-white/10 backdrop-blur-md" : "bg-white/90 border-zinc-200 backdrop-blur-md"
            }`}>
              <h4 className={`font-display text-xs font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                Aura Digital Inc.
              </h4>
              <p className="text-[10px] leading-relaxed text-zinc-400">
                500 Century Ave, San Francisco, CA 94107
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
