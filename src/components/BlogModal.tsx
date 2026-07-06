import { X, Calendar, Clock, Tag } from "lucide-react";
import { motion } from "motion/react";
import { BlogPost } from "../types";

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function BlogModal({ post, onClose, isDarkMode }: BlogModalProps) {
  if (!post) return null;

  // Render markdown lines as premium styled JSX elements
  const renderMarkdown = (markdownText: string) => {
    const lines = markdownText.split("\n");
    return lines.map((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith("# ")) {
        return (
          <h1 key={index} className={`font-display text-2xl sm:text-3xl font-extrabold mt-8 mb-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            {trimmed.replace("# ", "")}
          </h1>
        );
      }
      
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={index} className={`font-display text-xl sm:text-2xl font-bold mt-6 mb-3 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      
      if (trimmed.startsWith("* ")) {
        return (
          <li key={index} className="ml-6 list-disc text-sm sm:text-base leading-relaxed mb-2">
            {trimmed.replace("* ", "")}
          </li>
        );
      }
      
      if (trimmed.startsWith("> ")) {
        return (
          <blockquote key={index} className="border-l-4 border-violet-500 pl-4 py-1 italic my-4 text-zinc-400 text-sm sm:text-base">
            {trimmed.replace("> ", "")}
          </blockquote>
        );
      }

      if (trimmed === "") {
        return <div key={index} className="h-2" />;
      }

      // Default text processing for bold markers (e.g. **bold**)
      const processBoldText = (text: string) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, partIdx) => {
          if (partIdx % 2 === 1) {
            return <strong key={partIdx} className={`font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{part}</strong>;
          }
          return part;
        });
      };

      return (
        <p key={index} className="text-sm sm:text-base leading-relaxed mb-4 text-zinc-600 dark:text-zinc-300">
          {processBoldText(trimmed)}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal sheet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className={`w-full max-w-3xl rounded-3xl border shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] z-10 text-left ${
          isDarkMode ? "bg-zinc-950 border-white/5 text-zinc-300" : "bg-white border-zinc-200 text-zinc-600"
        }`}
      >
        {/* Sticky close block */}
        <div className="sticky top-0 p-6 flex justify-between items-center z-20 backdrop-blur-md border-b border-white/5 bg-transparent">
          <div>
            <span className="font-mono text-[9px] tracking-widest text-violet-400 uppercase font-bold">{post.category} Essay</span>
            <h2 className={`font-display text-lg sm:text-xl font-bold mt-0.5 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{post.title}</h2>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isDarkMode ? "border-white/5 bg-white/5 hover:bg-white/10 text-white" : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900"
            }`}
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll details */}
        <div className="overflow-y-auto p-6 md:p-10 flex flex-col gap-8 no-scrollbar">
          
          {/* Header metadata stats */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-white/10"
              />
              <div>
                <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                  {post.author.name}
                </p>
                <p className="text-xs text-zinc-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Banner image layout */}
          <div className="rounded-2xl overflow-hidden aspect-video relative max-h-[300px]">
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Render Markdown article content */}
          <article className="prose prose-sm sm:prose max-w-none text-zinc-600 dark:text-zinc-300">
            {renderMarkdown(post.content)}
          </article>

          {/* Tags list footer */}
          <div className="flex flex-wrap items-center gap-2 border-t border-white/5 pt-6">
            <Tag className="w-4 h-4 text-zinc-400 shrink-0" />
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                #{tag}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
}
