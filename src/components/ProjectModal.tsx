import { X, Calendar, User, Briefcase, Tag } from "lucide-react";
import { motion } from "motion/react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function ProjectModal({ project, onClose, isDarkMode }: ProjectModalProps) {
  if (!project) return null;

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

      {/* Modal content sheet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className={`w-full max-w-4xl rounded-3xl border shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] z-10 text-left ${
          isDarkMode ? "bg-zinc-950 border-white/5 text-zinc-300" : "bg-white border-zinc-200 text-zinc-600"
        }`}
      >
        {/* Close Button Header */}
        <div className="sticky top-0 p-6 flex justify-between items-center z-20 backdrop-blur-md border-b border-white/5 bg-transparent">
          <div>
            <span className="font-mono text-[9px] tracking-widest text-violet-400 uppercase font-bold">{project.category} Case Study</span>
            <h2 className={`font-display text-lg sm:text-xl font-bold mt-0.5 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isDarkMode ? "border-white/5 bg-white/5 hover:bg-white/10 text-white" : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900"
            }`}
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Contents */}
        <div className="overflow-y-auto p-6 md:p-10 flex flex-col gap-10 no-scrollbar">
          
          {/* Hero Banner image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Core Info & Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Metas column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className={`p-6 rounded-2xl border ${isDarkMode ? "bg-white/2 border-white/5" : "bg-zinc-50 border-zinc-200"}`}>
                <h4 className={`font-display text-xs font-bold uppercase tracking-wider mb-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                  Project Metas
                </h4>
                <div className="flex flex-col gap-3.5 text-xs">
                  <div>
                    <span className="text-zinc-400 block font-mono uppercase text-[9px]">Client Sponsor</span>
                    <span className={`font-semibold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{project.client}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block font-mono uppercase text-[9px]">Launch Year</span>
                    <span className={`font-semibold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{project.year}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block font-mono uppercase text-[9px]">Engineering Services</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.services.map((service, idx) => (
                        <span key={idx} className="bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded text-[10px] font-semibold">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative descriptions */}
            <div className="md:col-span-8 flex flex-col gap-6">
              <div>
                <h3 className={`font-display text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>The Challenge</h3>
                <p className="text-sm leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h3 className={`font-display text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Our Solution Architecture</h3>
                <p className="text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Stats Breakdown Bar */}
          <div className={`p-8 rounded-2xl border text-center ${isDarkMode ? "bg-white/2 border-white/5" : "bg-zinc-50 border-zinc-200"}`}>
            <h4 className={`font-display text-xs font-bold uppercase tracking-wider mb-6 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
              Verified Commercial Performance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-display text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
