import { Check, HelpCircle, Shield, ArrowRight, TrendingUp } from "lucide-react";
import { PRICING_PLANS } from "../data";

interface PricingProps {
  isDarkMode: boolean;
  addToast: (message: string, type: "success" | "error") => void;
  setActivePage: (page: string) => void;
}

export default function Pricing({ isDarkMode, addToast, setActivePage }: PricingProps) {
  const handleSelectPlan = (planName: string) => {
    addToast(
      `Brief initialized for "${planName}". We have reserved your sprint slot. Check your inbox within 2 hours!`,
      "success"
    );
  };

  const roiMetrics = [
    { metric: "Typical Site Load Speeds", standard: "3.4s - 6.2s", aura: "0.3s - 0.7s", impact: "Eliminates exit bounce" },
    { metric: "SEO Search Authority Setup", standard: "Basic tagging", aura: "Semantic cluster indexing", impact: "Drives unpaid leads" },
    { metric: "Creative UX Retainers", standard: "Fragmented agencies", aura: "Integrated UI + Dev squad", impact: "Zero communication loss" },
    { metric: "Average Conversion Delta", standard: "Flat / unpredictable", aura: "+35% to +85% conversion", impact: "Maximizes capital return" }
  ];

  return (
    <div className={`pt-32 pb-24 px-6 overflow-hidden transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center flex flex-col gap-6 mb-20">
        <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
          CLEAR INVESTMENT MODELS
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Flexible sprint partnerships <br />
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            without rigid contracts.
          </span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Choose a strategic alignment model that fits your product scope. Pause, cancel, or adjust your sprints with 14 days notice.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-28 items-stretch">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`p-8 rounded-3xl border text-left flex flex-col justify-between relative transition-all duration-300 ${
              plan.popular
                ? "bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border-violet-500/40 shadow-2xl scale-102 lg:scale-105 z-10 text-zinc-300"
                : isDarkMode
                ? "bg-white/2 border-white/5 hover:border-white/15 text-zinc-300"
                : "bg-white border-zinc-200 hover:border-zinc-300 text-zinc-600"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && plan.badge && (
              <span className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white font-mono text-[9px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-md shadow-violet-500/20">
                {plan.badge}
              </span>
            )}

            <div className="flex flex-col gap-6">
              <div>
                <h3 className={`font-display text-xl font-bold mb-1 ${
                  plan.popular || isDarkMode ? "text-white" : "text-zinc-900"
                }`}>
                  {plan.name}
                </h3>
                <p className="text-xs leading-relaxed max-w-xs">{plan.description}</p>
              </div>

              {/* Price Tag */}
              <div className="py-2">
                <span className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${
                  plan.popular || isDarkMode ? "text-white" : "text-zinc-900"
                }`}>
                  {plan.price}
                </span>
                {plan.period && <span className="text-xs text-zinc-400 font-medium font-mono"> /{plan.period}</span>}
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 font-bold block mb-1">CAPACITY INCLUSIONS</span>
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                      plan.popular ? "text-violet-400" : "text-emerald-500"
                    }`} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Trigger */}
            <button
              onClick={() => handleSelectPlan(plan.name)}
              className={`w-full py-4 mt-8 rounded-xl font-semibold tracking-wide uppercase transition-all duration-300 text-xs flex items-center justify-center gap-2 cursor-pointer ${
                plan.popular
                  ? "bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20 hover:scale-[1.02]"
                  : isDarkMode
                  ? "border border-white/10 hover:border-white text-white hover:bg-white/5"
                  : "border border-zinc-200 hover:border-zinc-900 text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              {plan.buttonText} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>

      {/* ROI MATRIX */}
      <section className="max-w-5xl mx-auto text-left mb-28">
        <div className="max-w-xl flex flex-col gap-4 mb-12">
          <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase block">
            COMPARATIVE EFFICIENCY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            ROI Metrics: Aura vs Standard Agencies
          </h2>
        </div>

        <div className={`border rounded-2xl overflow-hidden overflow-x-auto ${
          isDarkMode ? "border-white/5 bg-white/2" : "border-zinc-200 bg-white"
        }`}>
          <table className="w-full text-sm text-left border-collapse min-w-[640px]">
            <thead>
              <tr className={`border-b font-mono text-[10px] tracking-wider uppercase ${
                isDarkMode ? "border-white/5 bg-white/5 text-zinc-400" : "border-zinc-200 bg-zinc-50 text-zinc-500"
              }`}>
                <th className="p-5">Performance Metric</th>
                <th className="p-5">Standard Firm</th>
                <th className="p-5 text-violet-400">Aura Squad</th>
                <th className="p-5">Client Impact</th>
              </tr>
            </thead>
            <tbody>
              {roiMetrics.map((row, idx) => (
                <tr key={idx} className={`border-b transition-colors ${
                  isDarkMode ? "border-white/5 hover:bg-white/5" : "border-zinc-200 hover:bg-zinc-50"
                }`}>
                  <td className={`p-5 font-semibold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{row.metric}</td>
                  <td className="p-5">{row.standard}</td>
                  <td className="p-5 font-bold text-violet-400">{row.aura}</td>
                  <td className="p-5 text-xs text-zinc-400 italic">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10 border border-violet-500/20 flex flex-col gap-6 relative overflow-hidden">
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
          Require a customized project quotation?
        </h3>
        <p className="text-sm leading-relaxed max-w-lg mx-auto">
          Need a multi-year SLA or dedicated multi-squad architectural support? Contact our managing director to schedule a structured consultation.
        </p>
        <button
          onClick={() => {
            setActivePage("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-6 py-3 rounded-full text-xs font-bold uppercase bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg self-center flex items-center gap-2 cursor-pointer"
        >
          Schedule Advisory Session <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
