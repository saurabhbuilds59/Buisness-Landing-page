import { X, Check, Compass, CodeXml, Sparkles, Trophy, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { Service } from "../types";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  isDarkMode: boolean;
  setActivePage: (page: string) => void;
}

export default function ServiceModal({ service, onClose, isDarkMode, setActivePage }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal sheet content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className={`w-full max-w-3xl rounded-3xl border shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh] z-10 text-left ${
          isDarkMode ? "bg-zinc-950 border-white/5 text-zinc-300" : "bg-white border-zinc-200 text-zinc-600"
        }`}
      >
        {/* Header close block */}
        <div className="sticky top-0 p-6 flex justify-between items-center z-20 backdrop-blur-md border-b border-white/5 bg-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
              {service.id === "brand-strategy" && <Compass className="w-5 h-5" />}
              {service.id === "bespoke-web" && <CodeXml className="w-5 h-5" />}
              {service.id === "experience-design" && <Sparkles className="w-5 h-5" />}
              {service.id === "performance-growth" && <Trophy className="w-5 h-5" />}
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-widest text-violet-400 uppercase font-bold">DISCIPLINE DETAILED BRIEF</span>
              <h2 className={`font-display text-lg sm:text-xl font-bold mt-0.5 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{service.title}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isDarkMode ? "border-white/5 bg-white/5 hover:bg-white/10 text-white" : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900"
            }`}
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll content */}
        <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-8 no-scrollbar">
          
          <div>
            <p className="text-sm sm:text-base leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Inclusions & Benefits Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/5 pt-6">
            <div className="flex flex-col gap-3">
              <h4 className={`font-display text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                Deliverables & Features
              </h4>
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className={`font-display text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                Commercial Benefits
              </h4>
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs">
                  <Check className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology timeline */}
          <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
            <h4 className={`font-display text-xs font-bold uppercase tracking-wider ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
              Methodology Blueprint Phases
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs leading-relaxed">
              {service.process.map((step, idx) => (
                <div key={idx} className={`p-4 rounded-xl border flex flex-col gap-2 relative ${
                  isDarkMode ? "bg-white/2 border-white/5" : "bg-zinc-50 border-zinc-200"
                }`}>
                  <span className="font-mono text-[9px] font-bold text-violet-500">PHASE 0{idx + 1}</span>
                  <p className="font-semibold text-zinc-950 dark:text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
            <p className="text-[11px] text-zinc-400 max-w-sm leading-relaxed">
              Have specific system integrations, security criteria, or access constraints? We can tailors our sprints completely.
            </p>
            <button
              onClick={() => {
                onClose();
                setActivePage("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-3 rounded-xl text-xs font-bold uppercase bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg cursor-pointer shrink-0 text-center"
            >
              Configure Service Brief
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
