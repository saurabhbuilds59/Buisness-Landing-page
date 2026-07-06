import { useState } from "react";
import { Search, Calendar, Clock, ArrowRight, User, Heart, ChevronRight } from "lucide-react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";

interface BlogProps {
  isDarkMode: boolean;
  setSelectedPost: (post: BlogPost | null) => void;
}

export default function Blog({ isDarkMode, setSelectedPost }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Design Strategy", "Interaction Engineering", "Web Engineering"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`pt-32 pb-24 px-6 overflow-hidden transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center flex flex-col gap-6 mb-16">
        <span className="font-mono text-xs font-semibold text-violet-500 tracking-wider uppercase">
          INSIDE AURA (STUDIO OBSERVATIONS)
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          System essays and <br />
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            interaction theories.
          </span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We write about Swiss visual philosophy, micro-interaction conversions, predictive artificial intelligence, and edge server scaling.
        </p>
      </section>

      {/* SEARCH AND CATEGORIES BAR */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        
        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = cat === selectedCategory;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                    : isDarkMode
                    ? "bg-white/2 hover:bg-white/5 border border-white/5 text-zinc-300"
                    : "bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search bar input */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search essays..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full text-sm pl-4 pr-10 py-2.5 rounded-xl border focus:outline-none focus:border-violet-500 transition-all ${
              isDarkMode
                ? "bg-white/5 border-white/5 text-white"
                : "bg-white border-zinc-200 text-zinc-950"
            }`}
          />
          <Search className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </section>

      {/* ESSAYS GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className={`group cursor-pointer rounded-3xl overflow-hidden border text-left flex flex-col justify-between transition-all duration-300 ${
              isDarkMode
                ? "bg-white/2 border-white/5 hover:border-white/10 hover:bg-white/4"
                : "bg-white border-zinc-200 hover:border-violet-500/20 hover:shadow-xl"
            }`}
          >
            <div>
              <div className="overflow-hidden aspect-video relative">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 font-mono text-[9px] font-bold tracking-widest text-white bg-zinc-900/80 px-2.5 py-1 rounded">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-4 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className={`font-display text-lg sm:text-xl font-bold group-hover:text-violet-400 transition-colors ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}>
                  {post.title}
                </h3>

                <p className="text-xs leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Author Profile Footer */}
            <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-white/3">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full object-cover border border-white/10"
                />
                <div>
                  <p className={`text-xs font-semibold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                    {post.author.name}
                  </p>
                  <p className="text-[10px] text-zinc-400">{post.author.role}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-violet-400 flex items-center gap-0.5 group-hover:gap-1 transition-all">
                Read <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}

        {filteredPosts.length === 0 && (
          <div className="col-span-full py-20 text-center flex flex-col items-center gap-4">
            <p className="text-sm font-semibold">No essays match your search filters.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="text-xs font-bold uppercase text-violet-400 hover:underline cursor-pointer"
            >
              Reset search criteria
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
