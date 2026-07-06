import { useState } from "react";
import { ArrowRight, Sparkles, CodeXml, Compass, Layers, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";
import { Project } from "../types";

interface PortfolioProps {
  isDarkMode: boolean;
  setActivePage: (page: string) => void;
  setSelectedProject: (project: Project | null) => void;
}

export default function Portfolio({ isDarkMode, setActivePage, setSelectedProject }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Web Engineering", "Intelligent AI", "Brand Strategy"];

  const filteredProjects = selectedCategory === "All"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((project) => project.category === selectedCategory);

  return (
    <div className={`pt-32 pb-24 px-6 overflow-hidden transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center flex flex-col gap-6 mb-16">
        <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
          SELECTED CASE ESSAYS
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Visual flagships that <br />
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            deliver compounding capital.
          </span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Explore our portfolio of high-fidelity platforms, custom-engineered LLM portals, and minimalist branding systems designed for high-growth enterprises.
        </p>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 mb-16">
        {categories.map((category) => {
          const isActive = category === selectedCategory;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20"
                  : isDarkMode
                  ? "bg-white/2 hover:bg-white/5 border border-white/5 text-zinc-300"
                  : "bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col justify-between ${
              isDarkMode
                ? "bg-white/2 border-white/5 hover:border-violet-500/30 hover:bg-white/4"
                : "bg-white border-zinc-200 hover:border-violet-500/30 hover:shadow-2xl"
            }`}
          >
            {/* Image panel with hover scale */}
            <div className="relative overflow-hidden aspect-[16/10]">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Floating micro indicators */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="font-mono text-[9px] font-bold tracking-widest text-white bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-full uppercase">
                  {project.category}
                </span>
                <span className="font-mono text-[9px] font-bold tracking-widest text-white bg-violet-500/85 px-3 py-1 rounded-full uppercase">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Narrative text block */}
            <div className="p-8 text-left flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">{project.client}</span>
                <h3 className={`font-display text-xl sm:text-2xl font-bold group-hover:text-violet-400 transition-colors ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>

              {/* Stats highlights banner */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/5 text-center">
                {project.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-display text-lg font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-semibold text-violet-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Analyze Full Case Study <ArrowRight className="w-4 h-4" />
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER CTA BANNER */}
      <section className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10 border border-violet-500/20 flex flex-col gap-6 relative overflow-hidden">
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
          Looking to create a similar benchmark?
        </h3>
        <p className="text-sm leading-relaxed max-w-lg mx-auto">
          Contact our structural consultants. We'll outline an interactive wireframe blueprint customized specifically to target your competitor gaps.
        </p>
        <button
          onClick={() => {
            setActivePage("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-6 py-3 rounded-full text-xs font-bold uppercase bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg self-center flex items-center gap-2 cursor-pointer"
        >
          Book Blueprint Session <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
