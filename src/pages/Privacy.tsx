interface LegalProps {
  isDarkMode: boolean;
}

export default function Privacy({ isDarkMode }: LegalProps) {
  return (
    <div className={`pt-32 pb-24 px-6 max-w-4xl mx-auto text-left transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
        LEGAL COMPLIANCE
      </span>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-10 text-zinc-900 dark:text-white">
        Privacy Policy
      </h1>

      <div className="flex flex-col gap-6 text-sm leading-relaxed">
        <p className="font-semibold text-zinc-950 dark:text-zinc-300">Last updated: July 6, 2026</p>
        
        <p>
          At Aura Digital, we value your privacy and are committed to protecting any personal metrics or data you share with us. This Privacy Policy outlines our procedures concerning data collection, transmission, and security protocols across our digital domains.
        </p>

        <h2 className={`font-display text-lg font-bold mt-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          1. Information We Collect
        </h2>
        <p>
          We collect personal attributes only when you actively fill in our configuration forms or subscribe to our newsletter briefing. This includes:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li><strong>Identity Data:</strong> Full name, company affiliation, and corporate titles.</li>
          <li><strong>Contact Data:</strong> Verified business email address and direct phone lines.</li>
          <li><strong>Project Attributes:</strong> Expected project budgets, timeline constraints, and creative briefs.</li>
        </ul>

        <h2 className={`font-display text-lg font-bold mt-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          2. How We Utilize Your Data
        </h2>
        <p>
          Your attributes are processed strictly for secure business optimization, including:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>Drafting tailored capability briefs and custom project proposals.</li>
          <li>Sending the weekly Aura Briefing newsletter (you can cancel this at any time).</li>
          <li>Performing anonymous traffic analytics to optimize Lighthouse response metrics.</li>
        </ul>

        <h2 className={`font-display text-lg font-bold mt-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          3. Security Protocols
        </h2>
        <p>
          We employ robust, industry-standard edge encryption, HTTPS transmission, and secure API routers to protect your information. We never sell, lease, or distribute your email addresses to third-party tracking companies.
        </p>
      </div>
    </div>
  );
}
