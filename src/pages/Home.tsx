import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Plus, Minus, Check, Users, Sparkles, CodeXml, Trophy, Zap, Globe, Flame, Shield, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA, PORTFOLIO_DATA, PRICING_PLANS, TESTIMONIALS_DATA, FAQ_ITEMS, BLOG_POSTS, TEAM_MEMBERS } from "../data";
import { Project, Service } from "../types";

interface HomeProps {
  setActivePage: (page: string) => void;
  isDarkMode: boolean;
  addToast: (message: string, type: "success" | "error") => void;
  setSelectedProject: (project: Project | null) => void;
  setSelectedService: (service: Service | null) => void;
}

export default function Home({
  setActivePage,
  isDarkMode,
  addToast,
  setSelectedProject,
  setSelectedService,
}: HomeProps) {
  // Testimonial slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Stats Counter animation emulation
  const [stats, setStats] = useState({ performance: 0, clientCapital: 0, awards: 0, enterprises: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        performance: 99,
        clientCapital: 150,
        awards: 12,
        enterprises: 50,
      });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Quick form submittals for Home Newsletter/Contact
  const [homeEmail, setHomeEmail] = useState("");
  const [homeContact, setHomeContact] = useState({ name: "", email: "", msg: "" });

  const submitNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!homeEmail || !homeEmail.includes("@")) {
      addToast("Please enter a valid email.", "error");
      return;
    }
    addToast("Newsletter subscribed successfully!", "success");
    setHomeEmail("");
  };

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!homeContact.name || !homeContact.email || !homeContact.msg) {
      addToast("Please complete all fields.", "error");
      return;
    }
    addToast("Message received! Our team will contact you within 24 hours.", "success");
    setHomeContact({ name: "", email: "", msg: "" });
  };

  return (
    <div className={`overflow-hidden transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6">
        {/* Floating Background Blobs */}
        <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] animate-blob pointer-events-none" />
        <div className="absolute top-1/3 right-1/10 w-[350px] h-[350px] bg-violet-500/10 rounded-full blur-[120px] animate-blob-reverse pointer-events-none" />
        <div className="absolute bottom-1/10 left-1/3 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[80px] animate-blob-delayed pointer-events-none" />

        {/* Floating particles */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 font-mono text-xs font-semibold self-start tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Luxury Digital Studio
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Crafting Digital <br />
              <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                Prestige & Capital
              </span>
            </h1>

            <p className="text-lg md:text-xl font-normal leading-relaxed max-w-xl">
              We design and engineer bespoke web flagships, tailored brand positioning systems, and intelligent AI tools for high-growth enterprises worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
              <button
                onClick={() => {
                  setActivePage("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-xl text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-xl shadow-violet-500/25 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Inquire Collaboration <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => {
                  setActivePage("portfolio");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`px-8 py-4 rounded-xl text-sm font-semibold tracking-wide uppercase border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  isDarkMode
                    ? "border-white/10 hover:border-white hover:bg-white/5 text-white"
                    : "border-zinc-200 hover:border-zinc-900 hover:bg-zinc-50 text-zinc-950"
                }`}
              >
                View Selected Work
              </button>
            </div>

            {/* Quick trust counter */}
            <div className="flex items-center gap-3.5 mt-8 border-t border-white/5 pt-6 max-w-sm">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Active Client Partner"
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover shrink-0"
                  />
                ))}
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <p className="mt-0.5 font-medium">98% Strategic Partnership Score</p>
              </div>
            </div>
          </div>

          {/* Hero interactive visual - Glass Card Matrix */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[10/11] rounded-3xl p-6 glass border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group">
              {/* Internal glow */}
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-full blur-[40px]" />
              
              <div className="flex items-center justify-between relative z-10">
                <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">AURA CORE ENGINE</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Glass visual metric */}
              <div className="my-8 flex flex-col gap-5 relative z-10">
                <div className="p-4 rounded-2xl bg-white/2 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">Dynamic Asset Hydration</span>
                    <span className="text-[10px] font-mono text-violet-400">99.4%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 w-[99.4%] rounded-full" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-zinc-400 block mb-1">Weekly Speed Iterations</span>
                    <span className="text-xl font-display font-bold text-white">0.34s Avg Response</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Interaction Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10 border border-violet-500/20 relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-300 font-semibold mb-0.5">Secure AI Endpoint Client</p>
                  <p className="text-[10px] text-zinc-400">Gemini model integration active</p>
                </div>
                <button
                  onClick={() => {
                    setActivePage("services");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-8 h-8 rounded-full bg-white text-zinc-950 hover:bg-violet-500 hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
                  aria-label="Explore model specs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BRAND LOGOS */}
      <section className={`py-12 border-y ${isDarkMode ? "bg-zinc-950/40 border-white/5" : "bg-zinc-50 border-zinc-200"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-mono text-[10px] tracking-widest uppercase mb-8 text-zinc-400">
            STRATEGIC VISIBILITY AND TRUST WITH
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {["AETHER", "VORTEX", "SOLAS", "ZENITH", "OMNI", "SPARK"].map((partner, i) => (
              <span key={i} className="font-display font-black text-2xl tracking-widest text-zinc-500 select-none">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT & BRIEF STATISTICS */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
              ABOUT OUR COOPERATIVE SQUAD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              An engineering culture <br />
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                dedicated to extreme polish.
              </span>
            </h2>
            <p className="text-base leading-relaxed">
              We operate at the convergence of commercial prestige and advanced interface design. Our squad consists of select product architects, designers, and visual strategists who build customized digital platforms that convert audience curiosity into measurable business equity.
            </p>
            <p className="text-base leading-relaxed">
              We do not execute boring templates, and we do not compromise on speed. By combining strict type-safe code foundations with luxury art direction, we deliver platforms that stand out in crowded global markets.
            </p>
            <div className="mt-4">
              <button
                onClick={() => {
                  setActivePage("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3 cursor-pointer ${
                  isDarkMode ? "text-white" : "text-zinc-950"
                }`}
              >
                Discover our values & crew <ArrowRight className="w-4 h-4 text-violet-500" />
              </button>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            {[
              { label: "Core Performance Index", value: `${stats.performance}%`, desc: "Google Lighthouse benchmarks" },
              { label: "Client Capital Scaling", value: `$${stats.clientCapital}M+`, desc: "Private funding & commerce scale" },
              { label: "Global Creative Awards", value: `${stats.awards}+`, desc: "Interactive industry selections" },
              { label: "Growth Partner Slots", value: `${stats.enterprises}+`, desc: "Brands scaling organically" }
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border text-left flex flex-col justify-between ${
                  isDarkMode ? "bg-white/2 border-white/5 hover:border-white/10" : "bg-white border-zinc-200 hover:border-zinc-300"
                } transition-all duration-300`}
              >
                <div>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent block mb-1">
                    {stat.value}
                  </span>
                  <span className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-zinc-950"}`}>
                    {stat.label}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE WORK PROCESS */}
      <section className={`py-24 px-6 border-y ${isDarkMode ? "bg-zinc-950/20 border-white/5" : "bg-zinc-50 border-zinc-200"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-4 mb-16">
            <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
              STRATEGIC METHODOLOGY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              A synchronized path to market domination.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Intelligent Extraction", desc: "We parse competitors, map user personas, and design exact technical specifications." },
              { step: "02", title: "Luxury Architecture", desc: "Our CDO drafts pixel-perfect art boards, setting premium visual and interaction rules." },
              { step: "03", title: "Elite Engineering", desc: "We write strict, type-safe code designed for lightning performance and semantic SEO." },
              { step: "04", title: "Velocity Deployment", desc: "We launch on premium edge infrastructure, optimizing caching rules and global CDNs." }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border text-left flex flex-col justify-between aspect-square group ${
                  isDarkMode ? "bg-white/2 border-white/5" : "bg-white border-zinc-200"
                } hover:border-violet-500/30 transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-violet-500 bg-violet-500/10 px-2.5 py-1 rounded-lg">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className={`font-display text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-zinc-950"}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDENSED SERVICES PROMO */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="text-left max-w-xl">
              <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase block mb-3">
                CAPABILITIES OVERVIEW
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Elite capabilities tailored <br />
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  for ambitious teams.
                </span>
              </h2>
            </div>
            <button
              onClick={() => {
                setActivePage("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-full text-xs font-semibold uppercase bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 self-start md:self-auto cursor-pointer"
            >
              Explore All Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.slice(0, 4).map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-8 rounded-3xl border text-left cursor-pointer transition-all duration-300 group flex flex-col justify-between min-h-[220px] ${
                  isDarkMode
                    ? "bg-white/2 border-white/5 hover:bg-white/5 hover:border-violet-500/20"
                    : "bg-white border-zinc-200 hover:border-violet-500/20 hover:shadow-xl"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.id === "brand-strategy" && <Users className="w-6 h-6" />}
                    {service.id === "bespoke-web" && <CodeXml className="w-6 h-6" />}
                    {service.id === "experience-design" && <Sparkles className="w-6 h-6" />}
                    {service.id === "performance-growth" && <Trophy className="w-6 h-6" />}
                  </div>
                  <h3 className={`font-display text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-zinc-950"}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-violet-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Analyze capabilities <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className={`py-24 px-6 relative border-t overflow-hidden ${isDarkMode ? "bg-zinc-950/60 border-white/5" : "bg-white border-zinc-200"}`}>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-10">
          
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
              CLIENT TESTIMONIALS
            </span>
            <div className="flex items-center justify-center gap-1 text-amber-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>

          {/* Slider box */}
          <div className="min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <blockquote className={`font-display text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed italic ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}>
                  "{TESTIMONIALS_DATA[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4 mt-4">
                  <img
                    src={TESTIMONIALS_DATA[currentTestimonial].image}
                    alt={TESTIMONIALS_DATA[currentTestimonial].author}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/20"
                  />
                  <div className="text-left">
                    <p className={`font-semibold text-sm ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                      {TESTIMONIALS_DATA[currentTestimonial].author}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {TESTIMONIALS_DATA[currentTestimonial].role}, {TESTIMONIALS_DATA[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={handlePrevTestimonial}
              className={`w-12 h-12 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
                isDarkMode
                  ? "border-white/5 bg-white/5 hover:bg-white/10 text-white"
                  : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900"
              }`}
              aria-label="Previous testimonial"
            >
              <ArrowRight className="w-4.5 h-4.5 rotate-180" />
            </button>
            <span className="font-mono text-xs text-zinc-400">
              {currentTestimonial + 1} / {TESTIMONIALS_DATA.length}
            </span>
            <button
              onClick={handleNextTestimonial}
              className={`w-12 h-12 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
                isDarkMode
                  ? "border-white/5 bg-white/5 hover:bg-white/10 text-white"
                  : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900"
              }`}
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ACCORDION FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-left">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-4 mb-16">
          <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
            COMMON CONCERNS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isDarkMode
                    ? "bg-white/2 border-white/5 hover:bg-white/4"
                    : "bg-white border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-base sm:text-lg cursor-pointer text-zinc-900 dark:text-white"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-4 h-4 shrink-0 text-violet-500" />
                  ) : (
                    <Plus className="w-4 h-4 shrink-0 text-zinc-400" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK CONTACT HOME COMPONENT */}
      <section className={`py-24 px-6 border-t ${isDarkMode ? "bg-zinc-950/40 border-white/5" : "bg-zinc-50 border-zinc-200"}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Intro */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
              REACH OUR CREW
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Ready to construct <br />
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                something elite?
              </span>
            </h2>
            <p className="text-base leading-relaxed">
              Have questions about pricing, project timelines, or a custom integration spec? Send us a direct brief and we'll reply inside one business day with a structured analysis.
            </p>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/2 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <p className={`font-semibold ${isDarkMode ? "text-white" : "text-zinc-950"}`}>
                  Global Operations
                </p>
                <p className="text-zinc-400">San Francisco • London • Singapore</p>
              </div>
            </div>
          </div>

          {/* Quick Form */}
          <div className="lg:col-span-7">
            <form onSubmit={submitContact} className={`p-8 rounded-3xl border text-left ${
              isDarkMode ? "bg-white/2 border-white/5" : "bg-white border-zinc-200"
            } shadow-xl flex flex-col gap-6`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="homeName" className="text-xs font-semibold tracking-wider uppercase text-zinc-400">Your Name</label>
                  <input
                    type="text"
                    id="homeName"
                    placeholder="Enter name"
                    value={homeContact.name}
                    onChange={(e) => setHomeContact({ ...homeContact, name: e.target.value })}
                    className={`px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-violet-500 transition-all ${
                      isDarkMode ? "bg-white/5 border-white/5 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-950"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="homeEmail" className="text-xs font-semibold tracking-wider uppercase text-zinc-400">Your Email</label>
                  <input
                    type="email"
                    id="homeEmail"
                    placeholder="Enter email address"
                    value={homeContact.email}
                    onChange={(e) => setHomeContact({ ...homeContact, email: e.target.value })}
                    className={`px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-violet-500 transition-all ${
                      isDarkMode ? "bg-white/5 border-white/5 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-950"
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="homeMsg" className="text-xs font-semibold tracking-wider uppercase text-zinc-400">Project Brief</label>
                <textarea
                  id="homeMsg"
                  rows={4}
                  placeholder="Outline your targets, ideal deadline, or core problem..."
                  value={homeContact.msg}
                  onChange={(e) => setHomeContact({ ...homeContact, msg: e.target.value })}
                  className={`px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-violet-500 transition-all ${
                    isDarkMode ? "bg-white/5 border-white/5 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-950"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold tracking-wide uppercase bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg cursor-pointer text-sm"
              >
                Inquire Partnership Brief
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
