export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  stats: { label: string; value: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}
