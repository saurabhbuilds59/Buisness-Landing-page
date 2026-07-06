import { ArrowRight, Target, Eye, ShieldCheck, Award, Heart, CheckCircle } from "lucide-react";
import { TEAM_MEMBERS } from "../data";

interface AboutProps {
  isDarkMode: boolean;
  setActivePage: (page: string) => void;
}

export default function About({ isDarkMode, setActivePage }: AboutProps) {
  const values = [
    {
      icon: ShieldCheck,
      title: "Architectural Integrity",
      desc: "We write clean, lightweight, compile-validated TypeScript. No heavy frameworks, zero unused dependencies, and no bloated plugins."
    },
    {
      icon: Target,
      title: "Commercial Prestige",
      desc: "Every design rule, visual element, and hover interaction is balanced carefully to enhance user trust and increase brand equity."
    },
    {
      icon: Eye,
      title: "Future-Proof Art Direction",
      desc: "Aesthetic systems designed to look modern and premium for years. We prioritize Swiss grids, custom tracking, and smooth vector layouts."
    }
  ];

  const milestones = [
    { year: "2023", title: "Founding & Vision Formulation", desc: "Aura was established in San Francisco to challenge low-quality, template-driven digital structures by offering bespoke, handcrafted platforms." },
    { year: "2024", title: "Elite Web Shift & Global Awards", desc: "Transitioned entirely to state-of-the-art React static rendering. Secured three premier international design mentions." },
    { year: "2025", title: "Intelligent AI Solutions", desc: "Launched server-side AI model integration frameworks, enabling secure customer retention pipelines." },
    { year: "2026", title: "Scale & Multi-Squad Operations", desc: "Expanded operations to London and Singapore, providing dedicated development squad partners for high-growth enterprises." }
  ];

  return (
    <div className={`pt-32 pb-24 px-6 overflow-hidden transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto text-center flex flex-col gap-6 mb-20">
        <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
          OUR MISSION & STORY
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Pioneering the standard <br />
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            of digital craftsmanship.
          </span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We operate at the convergence of elite visual styling and technical performance. We build digital assets that stand the test of time.
        </p>
      </section>

      {/* STORY & CULTURE SECTION */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
        <div className="lg:col-span-6 text-left flex flex-col gap-6">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Born from a desire to eliminate compromise.
          </h2>
          <p className="text-base leading-relaxed">
            Aura Digital was founded by a collective of veteran engineers and art directors who grew tired of the slow, bloated templates dominant in corporate enterprise web design. We realized that premium brands were investing significant capital in digital campaigns, only to direct high-intent traffic to rigid, uninspiring websites that compromised their market prestige.
          </p>
          <p className="text-base leading-relaxed">
            Our approach is fundamentally collaborative. We partner with elite enterprises to establish high-fidelity design standards, write clean code foundations, and build robust software assets that increase customer loyalty.
          </p>
        </div>

        {/* Culture Graphic/Bento Panel */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className={`p-8 rounded-2xl border text-left flex flex-col gap-4 justify-between ${
            isDarkMode ? "bg-white/2 border-white/5" : "bg-white border-zinc-200"
          }`}>
            <Heart className="w-8 h-8 text-pink-500" />
            <div>
              <h3 className={`font-display text-lg font-bold mb-1 ${isDarkMode ? "text-white" : "text-zinc-950"}`}>Our Culture</h3>
              <p className="text-xs leading-relaxed">Continuous learning, deep aesthetic discussions, and an obsessive attention to microscopic layout details.</p>
            </div>
          </div>

          <div className={`p-8 rounded-2xl border text-left flex flex-col gap-4 justify-between ${
            isDarkMode ? "bg-white/2 border-white/5" : "bg-white border-zinc-200"
          }`}>
            <Award className="w-8 h-8 text-amber-500" />
            <div>
              <h3 className={`font-display text-lg font-bold mb-1 ${isDarkMode ? "text-white" : "text-zinc-950"}`}>Our Standard</h3>
              <p className="text-xs leading-relaxed">We aim for 100/100 on Google Lighthouse speeds, WCAG accessibility, and pristine mobile-first layouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className={`py-20 px-6 border-y mb-28 ${
        isDarkMode ? "bg-zinc-950/40 border-white/5" : "bg-zinc-50 border-zinc-200"
      }`}>
        <div className="max-w-7xl mx-auto text-left">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase block mb-3">
              FOUNDATIONAL CODES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              The values that govern our studio.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-2">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className={`font-display text-lg font-bold ${isDarkMode ? "text-white" : "text-zinc-950"}`}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto text-left mb-28">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-4 mb-16">
          <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
            CHRONOLOGICAL EVOLUTION
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Our Growth & Milestones
          </h2>
        </div>

        <div className="relative border-l border-violet-500/30 ml-4 md:ml-10 flex flex-col gap-12">
          {milestones.map((milestone, i) => (
            <div key={i} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-zinc-950 border-2 border-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </div>
              
              <div>
                <span className="font-mono text-xs font-bold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">
                  {milestone.year}
                </span>
                <h3 className={`font-display text-lg font-bold mt-2 mb-1 ${isDarkMode ? "text-white" : "text-zinc-950"}`}>
                  {milestone.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-2xl">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase block mb-3">
              CREATIVE DIRECTORS & ARCHITECTS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Meet our founding squad.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl border flex flex-col gap-6 ${
                isDarkMode ? "bg-white/2 border-white/5" : "bg-white border-zinc-200"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className={`font-display text-lg font-bold ${isDarkMode ? "text-white" : "text-zinc-950"}`}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-violet-500 mt-0.5 uppercase tracking-wider">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-28 p-12 rounded-3xl bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10 border border-violet-500/20 text-center flex flex-col gap-6 max-w-4xl mx-auto relative overflow-hidden">
          {/* Inner ambient glow */}
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-pink-500/10 rounded-full blur-[40px] pointer-events-none" />
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none" />

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white relative z-10">
            Let's build your enterprise flagship.
          </h3>
          <p className="text-sm leading-relaxed max-w-lg mx-auto relative z-10">
            Secure a design and development sprint and transform your digital presence into a high-converting capital engine.
          </p>
          <button
            onClick={() => {
              setActivePage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg self-center flex items-center gap-2 cursor-pointer relative z-10"
          >
            Start Project Dialog <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
