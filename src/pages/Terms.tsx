interface LegalProps {
  isDarkMode: boolean;
}

export default function Terms({ isDarkMode }: LegalProps) {
  return (
    <div className={`pt-32 pb-24 px-6 max-w-4xl mx-auto text-left transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
        TERMS OF AGREEMENT
      </span>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-10 text-zinc-900 dark:text-white">
        Terms & Conditions
      </h1>

      <div className="flex flex-col gap-6 text-sm leading-relaxed">
        <p className="font-semibold text-zinc-950 dark:text-zinc-300">Last updated: July 6, 2026</p>

        <p>
          Welcome to the AURA Digital agency platform. By browsing or submitting data to our systems, you agree to comply with and be bound by the following Terms and Conditions of service.
        </p>

        <h2 className={`font-display text-lg font-bold mt-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          1. Intellectual Property
        </h2>
        <p>
          Unless otherwise stated, all intellectual material, custom layouts, design frameworks, and interactive vector designs displayed on this website remain the sole property of Aura Digital. You may not copy, scrape, or republish these assets for commercial purposes without explicit written approval.
        </p>

        <h2 className={`font-display text-lg font-bold mt-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          2. Partnership Sprints
        </h2>
        <p>
          Our Growth Partner and Aura Premium Sync models operate on a flat monthly sprint system. Clients are entitled to consistent delivery benchmarks but must submit iteration requests inside designated dashboard queues. Either party can terminate active sprint models with a simple 14-day notice.
        </p>

        <h2 className={`font-display text-lg font-bold mt-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          3. Limitation of Liability
        </h2>
        <p>
          Aura Digital is not liable for indirect or consequential traffic losses or server downtime occurring from third-party edge hosting systems (such as Vercel, Netlify, or AWS). We guarantee 99.9% uptime compliance on our custom deployments under active SLAs.
        </p>
      </div>
    </div>
  );
}
