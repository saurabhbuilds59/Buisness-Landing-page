import { useState } from "react";
import { ArrowRight, Compass, CodeXml, Sparkles, Trophy, Check, Layers, PlayCircle, HelpCircle } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

interface ServicesProps {
  isDarkMode: boolean;
  setActivePage: (page: string) => void;
  setSelectedService: (service: Service | null) => void;
}

export default function Services({ isDarkMode, setActivePage, setSelectedService }: ServicesProps) {
  const [activeServiceTab, setActiveServiceTab] = useState<string>(SERVICES_DATA[0].id);

  const currentService = SERVICES_DATA.find((s) => s.id === activeServiceTab) || SERVICES_DATA[0];

  return (
    <div className={`pt-32 pb-24 px-6 overflow-hidden transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center flex flex-col gap-6 mb-20">
        <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
          CORE SQUAD CAPABILITIES
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Bespoke services for <br />
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            commercial prestige.
          </span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We combine cutting-edge front-end engineering, secure cloud architecture, and meticulous strategic positioning.
        </p>
      </section>

      {/* TABS CONTROLLER CONTAINER */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
        
        {/* Sidebar tabs selection */}
        <div className="lg:col-span-4 flex flex-col gap-3 text-left">
          <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-2 pl-4">SELECT A DISCIPLINE</span>
          {SERVICES_DATA.map((service) => {
            const isActive = service.id === activeServiceTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceTab(service.id)}
                className={`w-full p-5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10 border-violet-500/30 text-violet-500 shadow-md"
                    : isDarkMode
                    ? "border-white/5 bg-white/2 hover:bg-white/4 text-zinc-300"
                    : "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-violet-500/25 text-violet-400" : "bg-white/5 text-zinc-400"
                  }`}>
                    {service.id === "brand-strategy" && <Compass className="w-5 h-5" />}
                    {service.id === "bespoke-web" && <CodeXml className="w-5 h-5" />}
                    {service.id === "experience-design" && <Sparkles className="w-5 h-5" />}
                    {service.id === "performance-growth" && <Trophy className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className={`font-display text-sm font-bold ${isActive ? "text-white dark:text-white" : ""}`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-1" : "opacity-0"}`} />
              </button>
            );
          })}
        </div>

        {/* Tab content panel */}
        <div className={`lg:col-span-8 p-8 md:p-12 rounded-3xl border text-left flex flex-col gap-8 relative overflow-hidden ${
          isDarkMode ? "bg-white/2 border-white/5" : "bg-white border-zinc-200"
        }`}>
          {/* Decorative ambient background shape */}
          <div className="absolute right-0 top-0 w-60 h-60 bg-gradient-to-bl from-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Service Title Brief */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4" /> Comprehensive Analysis
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
              {currentService.title}
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {currentService.fullDescription}
            </p>
          </div>

          {/* Features Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-8">
            <div className="flex flex-col gap-3.5">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-1">
                Deliverables Included
              </h4>
              {currentService.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3.5">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-1">
                Commercial Benefits
              </h4>
              {currentService.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline Block */}
          <div className="border-t border-white/5 pt-8 flex flex-col gap-5">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-1">
              Methodology Blueprint
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-xs leading-relaxed">
              {currentService.process.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-2 relative">
                  <span className="font-mono text-[10px] font-bold text-violet-500 bg-violet-500/10 px-2 py-0.5 rounded self-start">
                    PHASE 0{idx + 1}
                  </span>
                  <p className="font-semibold text-zinc-950 dark:text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trigger Detail Spec Modal */}
          <div className="border-t border-white/5 pt-8 flex items-center justify-between">
            <button
              onClick={() => setSelectedService(currentService)}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 text-violet-400 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" /> View Capability Spec Sheet
            </button>
            <button
              onClick={() => {
                setActivePage("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs font-semibold hover:underline text-zinc-950 dark:text-white cursor-pointer"
            >
              Discuss pricing models
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US BENTO SECTION */}
      <section className={`py-24 px-6 border-y mb-20 ${
        isDarkMode ? "bg-zinc-950/40 border-white/5" : "bg-zinc-50 border-zinc-200"
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-left">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
              STUDIO ADVANTAGES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Why leading enterprises partner with Aura.
            </h2>
            <p className="text-base leading-relaxed">
              We eliminate standard developer overhead. Rather than passing files back and forth between isolated agencies, our cross-disciplinary team integrates brand positioning, interface motion, and cloud engineering under one unified roof.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {[
                "Award-winning interaction architecture",
                "Strict type-safe compilation standards",
                "Transparent monthly sprint partnership agreements",
                "Unmatched mobile page rendering velocity"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-semibold text-zinc-900 dark:text-white">
                  <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Layers, title: "Zero Fragmented Agencies", desc: "No communication loss between external branding firms and back-end dev squads. We unify design and logic." },
              { icon: HelpCircle, title: "Deep Explanatory Audits", desc: "We provide comprehensive Figma asset files, WCAG accessibility reviews, and full Lighthouse performance summaries." }
            ].map((box, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border flex flex-col gap-4 justify-between ${
                  isDarkMode ? "bg-white/2 border-white/5" : "bg-white border-zinc-200"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                  <box.icon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className={`font-display text-lg font-bold mb-1.5 ${isDarkMode ? "text-white" : "text-zinc-950"}`}>
                    {box.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-4xl mx-auto text-center flex flex-col gap-6 py-12">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
          Require a tailored capability briefing?
        </h2>
        <p className="text-sm leading-relaxed max-w-md mx-auto">
          We offer a complimentary 30-minute system discovery review where we analyze your current speed gaps, UX problems, and growth channels.
        </p>
        <button
          onClick={() => {
            setActivePage("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg self-center flex items-center gap-2 cursor-pointer"
        >
          Book Discovery Review <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
