import { Service, Project, PricingPlan, BlogPost, TeamMember, FAQItem, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "brand-strategy",
    title: "Brand Strategy & Identity",
    icon: "Compass",
    description: "We craft visual systems and strategic positions that define market categories.",
    fullDescription: "In an crowded digital landscape, generic brands fade. We collaborate with forward-thinking enterprises to design high-fidelity design systems, brand guidelines, and communication strategies that command respect, command premiums, and build long-term enterprise equity.",
    features: [
      "Brand Positioning & Voice Formulation",
      "Visual Identity & High-Fidelity Logo Systems",
      "Interactive Multi-Platform Design Guides",
      "Market Intelligence & Category Design"
    ],
    benefits: [
      "Establish immediate industry prestige",
      "Unify internal and external communications",
      "Command a premium over generic competitors",
      "Build deep emotional resonance with elite cohorts"
    ],
    process: [
      "Discovery & Competitor Extraction",
      "Cooperative Mood-boarding & Narrative Building",
      "High-Fidelity Concept Selection & Refinement",
      "Production-Ready Asset Delivery & Brand Portals"
    ]
  },
  {
    id: "bespoke-web",
    title: "Elite Web Design & Engineering",
    icon: "CodeXml",
    description: "We engineer high-performance, award-winning digital flagship stores and apps.",
    fullDescription: "Our development team designs tailored, ultra-fast web flagships that integrate fluid motion, structural security, and premium responsive layout principles. We don't use rigid templates; every pixel is custom-engineered to optimize user retention, search positioning, and commercial conversions.",
    features: [
      "Tailor-Made React & Next.js Platforms",
      "High-Fidelity Interaction Design & Fluid Motion",
      "SEO Infrastructure & Lightning Load Times",
      "Accessibility Standards & Responsive Precision"
    ],
    benefits: [
      "99+ Google Lighthouse performance scoring",
      "Flawless mobile-to-desktop device scaling",
      "Zero server downtime using edge architecture",
      "Drastic increases in user session length & conversion"
    ],
    process: [
      "UX Discovery & Interactive Wireframing",
      "Figma Art-Direction & High-Contrast Mockups",
      "Clean TypeScript & Modern CSS Implementation",
      "Rigorous Cross-Device Testing & Cloud Optimization"
    ]
  },
  {
    id: "experience-design",
    title: "Intelligent Interaction & AI Tools",
    icon: "Sparkles",
    description: "We build intuitive tools and next-generation AI integrations for modern workflows.",
    fullDescription: "Unlock the commercial advantages of artificial intelligence safely. We embed conversational model gateways, intelligent semantic search engines, personalized suggestion workflows, and real-time visualization dashboards directly into clean, polished visual environments.",
    features: [
      "Gemini AI & LLM Endpoint Integrations",
      "Intelligent Data Visualization Dashboards",
      "Semantic Search & Smart Recommendation Feeds",
      "Voice & Dynamic Conversational Interfaces"
    ],
    benefits: [
      "Automate key user retention tasks with precision",
      "Provide unique, high-value tools to customers",
      "Gather real-time data on user preferences",
      "Optimize operations with smart predictive inputs"
    ],
    process: [
      "Use-Case Definition & Schema Analysis",
      "Custom Server-Side Secure Route Setup",
      "Polished Prompt-Engineering & Dynamic Workflows",
      "Intuitive Interface Layering & State Hydration"
    ]
  },
  {
    id: "performance-growth",
    title: "Performance & Organic Scaling",
    icon: "TrendingUp",
    description: "We deploy search engine authority networks and high-conversion content funnels.",
    fullDescription: "Prestige brands require thoughtful, high-conversion scaling channels. We architect technical SEO foundations, semantic content networks, and bespoke digital campaigns that scale your visibility, elevate organic traffic, and acquire elite clients without devaluing your brand.",
    features: [
      "Deep Technical SEO Auditing & Restructuring",
      "Semantic Content Silo Formulation",
      "High-Conversion Page & Lead-Funnel Optimization",
      "Prestige-Aligned Brand Campaign Planning"
    ],
    benefits: [
      "Long-term, sustainable, unpaid customer traffic",
      "Dominating high-intent search terms",
      "Highly optimized user acquisition cost (CAC)",
      "Continuous organic compounding of lead volume"
    ],
    process: [
      "Keyword Intent Analysis & Search Mapping",
      "Technical Page Optimization & Meta Tuning",
      "Authority Building & Semantic Asset Creation",
      "Performance Telemetry Analysis & Growth Iteration"
    ]
  }
];

export const PORTFOLIO_DATA: Project[] = [
  {
    id: "aether-luxury",
    title: "Aether - Premium Fashion Flagship",
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "A digital luxury commerce flagship designed for high-performance scale, immersive 3D interactions, and smooth checkout animations.",
    client: "Aether Apparel Global",
    year: "2025",
    services: ["E-commerce Development", "Motion Design", "Technical SEO"],
    challenge: "Aether required a modern, highly fluid storefront that loaded instantly on mobile devices while displaying high-resolution imagery and complex colorway animations without rendering lag.",
    solution: "We engineered a custom React interface with edge-rendered static generation, optimizing asset loaders, custom layout animations, and an ultra-secure, one-click cart checkout flow.",
    stats: [
      { label: "Conversion Rate", value: "+42%" },
      { label: "Page Load Speed", value: "0.4s" },
      { label: "Annual Revenue Increase", value: "+1.2M" }
    ]
  },
  {
    id: "vortex-analytics",
    title: "Vortex - Intelligent Metric System",
    category: "Intelligent AI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "A highly sophisticated web analytics suite powered by real-time LLM query processors and responsive chart systems.",
    client: "Vortex Solutions Inc",
    year: "2026",
    services: ["AI Integration", "UX/UI Design", "Data Visualization"],
    challenge: "Standard analytics tools are dense and demand steep learning curves. Vortex wanted a conversation-first visual interface that converted raw database rows into immediate growth actions.",
    solution: "We integrated secure model APIs into an elegant, custom dashboard featuring glassmorphic components, fluid interactive charts, and natural language query cards.",
    stats: [
      { label: "Query Time", value: "<150ms" },
      { label: "Active User Retention", value: "88%" },
      { label: "User Setup Efficiency", value: "5x Faster" }
    ]
  },
  {
    id: "solas-identity",
    title: "Solas - Ethical Organic Identity",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive strategy, positioning, and modern visual design platform for a global organic producer.",
    client: "Solas Agriculture Co.",
    year: "2025",
    services: ["Brand Strategy", "Visual Identity", "Corporate Narratives"],
    challenge: "Solas was transitioning into high-end retail but lacked a premium aesthetic that reflected their carbon-neutral operations.",
    solution: "We constructed an elegant, earth-inspired visual palette, typographic hierarchies, and premium packaging designs combined with a clean, narrative-driven digital platform.",
    stats: [
      { label: "Brand Recognition Score", value: "+75%" },
      { label: "Wholesale Order Velocity", value: "+120%" },
      { label: "Packaging Carbon Offset", value: "100%" }
    ]
  },
  {
    id: "zenith-motion",
    title: "Zenith - Interactive Design Portal",
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    description: "A dynamic WebGL motion engine and content distribution platform designed for digital creators.",
    client: "Zenith Creative Collective",
    year: "2026",
    services: ["Interaction Engineering", "Framer-Style UI", "Content Platform"],
    challenge: "Creating an engaging portal that highlights high-performance WebGL renderers without sacrificing mobile responsiveness or layout stability.",
    solution: "We combined high-efficiency requestAnimationFrame cycles with a modern, elegant grid design, resulting in a gorgeous, highly optimized portfolio layout.",
    stats: [
      { label: "Monthly Unique Creators", value: "340K" },
      { label: "Session Duration", value: "4m 12s" },
      { label: "User Interaction Rate", value: "92%" }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Growth Partner",
    price: "$2,900",
    period: "month",
    description: "Ideal for fast-scaling startups looking to establish an elite visual footprint.",
    features: [
      "1 Dedicated Designer & Developer Core Duo",
      "Regular Weekly Progress Showcases",
      "Premium Design Systems & UI Assets",
      "Production-Ready React/Vite Deployment",
      "Ongoing Maintenance & Load Tuning",
      "First-Class Technical SEO Setup"
    ],
    buttonText: "Initiate Partnership",
    popular: false
  },
  {
    name: "Aura Premium Sync",
    price: "$5,900",
    period: "month",
    description: "Perfect for active scaling enterprises requiring consistent product delivery.",
    features: [
      "Full Multi-Disciplinary Squad Integration",
      "Priority Same-Day Communication & Slacks",
      "Complex Brand Strategy & Asset Systems",
      "Premium Motion Engineering & Custom Code",
      "Gemini AI Interface Integrations",
      "Continuous Conversion & Speed Optimization",
      "Unlimited Standard Iteration Tasks"
    ],
    buttonText: "Secure Prime Slot",
    popular: true,
    badge: "Most Selected"
  },
  {
    name: "Enterprise Custom",
    price: "Custom",
    period: "project",
    description: "Bespoke digital transformation and full organizational scale models.",
    features: [
      "Bespoke Strategic Research & Audits",
      "Custom Serverless Node/Express Environments",
      "Dedicated Project Director & Lead Engineers",
      "End-To-End Training & Transfer Portals",
      "24/7 Redundant SLA Protection Agreements",
      "Global Enterprise Security Architecture"
    ],
    buttonText: "Schedule Board Consultation",
    popular: false
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Marcus Sterling",
    role: "Managing Director & Co-Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    bio: "Over 15 years structuring world-class creative squads. Marcus directs strategic alignment and partnerships for Aura's global clientele.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Evelyn Vance",
    role: "Chief Design Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
    bio: "An award-winning designer formerly driving design direction in Silicon Valley. Evelyn oversees our interaction standards and branding systems.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Dax Holloway",
    role: "Principal Interaction Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    bio: "A performance engineer and open-source contributor. Dax focuses on ultra-responsive animations and secure cloud frameworks.",
    social: { linkedin: "#", github: "#" }
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Process",
    question: "How do your monthly partnership cycles work?",
    answer: "Our partnerships operate in synchronized sprints. Instead of unpredictable billing, we charge a clear flat monthly fee. This entitles you to dedicated creative capacity, consistent delivery updates, and seamless support."
  },
  {
    category: "Technical",
    question: "Why do you focus on custom React / TypeScript setups over templates?",
    answer: "Pre-made templates are bloated, loaded with outdated plugins, slow, and hard to rank on search engines. Our custom builds load instantly, boast clean code layouts, satisfy accessibility compliance, and scale effortlessly."
  },
  {
    category: "AI Integrations",
    question: "Can you help integrate AI agents or models into our legacy platform?",
    answer: "Absolutely. We specialize in building secure server-side proxy routers to integrate advanced AI capabilities. This lets you automate workflows and offer smart interfaces without exposing API keys."
  },
  {
    category: "Pricing",
    question: "Is there a long-term contract requirement?",
    answer: "No. Our Growth Partner and Aura Premium Sync models operate on a flexible, month-to-month commitment. You can pause, adjust, or cancel your renewal at any time with a simple 14-day notice."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Working with Aura felt like partnering with a luxury consultancy. They eliminated all fluff, delivered an outstanding high-speed flagship web platform, and doubled our conversion rate in 60 days.",
    author: "Alastair Sterling",
    role: "VP of Product",
    company: "Aether Lifestyle Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    quote: "Aura brought exceptional engineering precision and visual clarity to our dashboard. They understood our complex telemetry data and encapsulated it in a gorgeous, glassmorphic layout that our users love.",
    author: "Kira Watanabe",
    role: "Director of Analytics",
    company: "Vortex Metrics",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    quote: "They designed a brand voice and platform that immediately position us as the premier organic supplier in Europe. Their visual craftsmanship and speed are unmatched.",
    author: "Clara Dubois",
    role: "Founder",
    company: "Solas Eco-Farms",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "minimalism-ai",
    title: "The Evolution of Minimalist Design in the AI Era",
    category: "Design Strategy",
    date: "July 2, 2026",
    readTime: "5 min read",
    author: {
      name: "Evelyn Vance",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      role: "Chief Design Officer"
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    excerpt: "Explore how AI-powered smart interfaces are transforming standard layouts into clean, predictive visual canvases that react to user intents.",
    content: `
# The Evolution of Minimalist Design in the AI Era

In the early days of interactive web design, complexity was a metric of sophistication. Sites were crowded with dense navigation bars, persistent chat helpers, secondary analytics sidebars, and chaotic banners. Today, the design landscape is experiencing a massive paradigm shift.

We are entering the era of **predictive, human-computer interfaces**—where the ideal UI is one that is practically invisible until needed.

## The Paradigm of Invisible Layouts

A luxury digital platform should never compete with its content for user attention. Standard minimalist layout rules—such as generous negative space, strict typography systems, and quiet color pairings—are no longer just aesthetic selections; they are functional frameworks.

By leveraging server-side intelligence, we can dynamically simplify user pathways:
*   **Intent Recognition:** Predicting what the visitor wants and loading elements dynamically.
*   **Contextual Controls:** Revealing custom inputs and cards only when relevant.
*   **Aesthetic Preservation:** Removing clutter to emphasize brand prestige.

## Crafting for the Modern Cohort

Modern elite cohorts demand experiences that feel tailored, secure, and immediate. When engineering high-conversion agency projects, every margin, fade transition, and button weight must look highly deliberate.

At **Aura**, we prioritize clean, responsive grids built on vanilla layout philosophies over bloated CSS frameworks. This results in standard, lightweight bundles that load instantly and perform beautifully on all device profiles.
    `,
    tags: ["Minimalism", "Design Systems", "AI UX", "Luxury Aesthetics"]
  },
  {
    id: "conversion-motion",
    title: "Maximizing Conversion via Fluid Micro-Interactions",
    category: "Interaction Engineering",
    date: "June 24, 2026",
    readTime: "4 min read",
    author: {
      name: "Dax Holloway",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      role: "Interaction Lead"
    },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    excerpt: "Learn how subtle hover transformations, spring-loaded buttons, and custom layout transitions can increase digital conversion by double digits.",
    content: `
# Maximizing Conversion via Fluid Micro-Interactions

Design is how it works, not just how it looks. Many product managers focus solely on marketing copy and value assertions, ignoring the crucial role of tactical micro-interactions.

A micro-interaction is any single-purpose engagement on a page—such as checking off a list item, hovering over a pricing card, or expanding an accordion panel.

## The Science of UI Feedback

When a user interacts with a page, they expect instant, reassuring visual feedback. If a button remains completely static after a click, the brain experiences a microscopic block of uncertainty. Did the system register the input? Is the page broken?

By implementing **custom transitions**:
1.  **State Transformation:** Providing spring-loaded scaling on click triggers.
2.  **Visual Continuity:** Staggering card entries using CSS or spring libraries like Motion.
3.  **Haptic Confirmation:** Giving subtle toast or ripple effects upon form completion.

## Balancing Performance with Style

It is easy to over-engineer animations. Chaotic floating shapes, excessive cursor trails, and massive heavy assets drag down performance and damage the user experience.

The key is **proportional motion**. Limit animations to guiding user focus, creating high-contrast depth, and adding a polished premium look without interrupting the core navigation flows.
    `,
    tags: ["Micro-interactions", "UX Engineering", "Conversion Rate", "Motion"]
  },
  {
    id: "elite-web-architecture",
    title: "The Tech Architecture Behind $10,000+ Portals",
    category: "Web Engineering",
    date: "May 15, 2026",
    readTime: "6 min read",
    author: {
      name: "Marcus Sterling",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
      role: "Managing Director"
    },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    excerpt: "Delve into why high-end brands require static site generation, strict type safety, edge caching, and semantic accessibility setups.",
    content: `
# The Tech Architecture Behind $10,000+ Portals

When an agency builds a high-end web platform, the client is paying for more than just a premium homepage. They are buying visual longevity, structural resilience, flawless SEO positioning, and bulletproof security.

A generic template simply cannot deliver this level of technical craft.

## 1. Absolute Speed is Luxury

In the luxury market, every millisecond counts. Research shows that websites loading in under 1.5 seconds experience a 3x higher conversion rate than average.

We achieve this level of performance through:
*   **Static Generation & Hydration:** Serving raw, pre-built HTML files immediately to visitors via fast Edge networks, then activating the React interactive engine seamlessly in the background.
*   **Responsive Vector Systems:** Relying strictly on vector icons (like Lucide) instead of heavy custom raster sets.
*   **Intelligent Lazy Loading:** Deferring heavy image renders until the assets enter the viewport via modern browser API observers.

## 2. Robust TypeScript Foundations

High-value codebases must be maintainable for years. Standard, untyped JavaScript is prone to runtime errors, styling conflicts, and integration breakages during updates.

By establishing strict TypeScript declarations and modular page files, we can isolate core configurations and safely deploy changes with total confidence.
    `,
    tags: ["Engineering", "TypeScript", "Vite", "Web Performance"]
  }
];
