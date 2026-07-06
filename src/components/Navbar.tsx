import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ activePage, setActivePage, isDarkMode, toggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress bar percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check if page is scrolled down to add solid glass background
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Pricing" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "border-b bg-zinc-950/80 border-white/5 backdrop-blur-md py-4 dark:bg-zinc-950/80 dark:border-white/5 light:bg-white/80 light:border-zinc-200/50"
          : "bg-transparent py-6"
      }`}
      style={{
        backgroundColor: isScrolled
          ? isDarkMode
            ? "rgba(5, 5, 5, 0.8)"
            : "rgba(250, 249, 246, 0.8)"
          : "transparent",
        borderColor: isScrolled
          ? isDarkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(5, 5, 5, 0.05)"
          : "transparent",
      }}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-violet-500 to-blue-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-violet-500/25 group-hover:scale-105 transition-transform duration-300">
            A
          </div>
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors ${
              isDarkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            AURA
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? isDarkMode
                      ? "text-white"
                      : "text-zinc-900"
                    : isDarkMode
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute inset-0 rounded-full z-[-1] ${
                      isDarkMode ? "bg-white/5" : "bg-zinc-100"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
              isDarkMode
                ? "border-white/5 bg-white/5 hover:bg-white/10 text-amber-400 hover:text-amber-300"
                : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
            }`}
            aria-label="Toggle visual theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Contact Button */}
          <button
            onClick={() => handleNavClick("contact")}
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isDarkMode
                ? "border-white/5 bg-white/5 text-amber-400"
                : "border-zinc-200 bg-zinc-50 text-zinc-600"
            }`}
            aria-label="Toggle visual theme"
          >
            {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* Toggle Mobile Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isDarkMode
                ? "border-white/5 bg-white/5 text-white"
                : "border-zinc-200 bg-zinc-50 text-zinc-900"
            }`}
            aria-label="Open mobile navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden border-t mt-4 overflow-hidden shadow-2xl ${
              isDarkMode
                ? "bg-zinc-950/95 border-white/5"
                : "bg-white/95 border-zinc-200"
            }`}
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-semibold py-1 transition-colors ${
                    activePage === item.id
                      ? "text-violet-500"
                      : isDarkMode
                      ? "text-zinc-300 hover:text-white"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("contact")}
                className="w-full mt-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white text-center shadow-lg shadow-violet-500/25"
              >
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
