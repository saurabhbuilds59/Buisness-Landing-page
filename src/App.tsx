import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import ProjectModal from "./components/ProjectModal";
import ServiceModal from "./components/ServiceModal";
import BlogModal from "./components/BlogModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

import { Project, Service, BlogPost } from "./types";

interface ToastItem {
  id: string;
  message: string;
  type: "success" | "error";
}

export default function App() {
  // Page routing state
  const [activePage, setActivePage] = useState<string>("home");

  // Visual Theme State (Luxury default is dark-mode, supports fully calibrated light-mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("aura_theme_preference");
    return stored ? stored === "dark" : true;
  });

  // Modal detail states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Micro-interaction Feedback Toasts
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    // Sync theme configuration with body tags or html classes
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.backgroundColor = "#050505";
      root.style.backgroundImage = "radial-gradient(circle at top right, #1e1b4b 0%, #050505 60%)";
      localStorage.setItem("aura_theme_preference", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.style.backgroundColor = "#faf9f6";
      root.style.backgroundImage = "none";
      localStorage.setItem("aura_theme_preference", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const addToast = (message: string, type: "success" | "error") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Safe Page Switcher Map
  const renderActivePage = () => {
    switch (activePage) {
      case "home":
        return (
          <Home
            setActivePage={setActivePage}
            isDarkMode={isDarkMode}
            addToast={addToast}
            setSelectedProject={setSelectedProject}
            setSelectedService={setSelectedService}
          />
        );
      case "about":
        return <About isDarkMode={isDarkMode} setActivePage={setActivePage} />;
      case "services":
        return (
          <Services
            isDarkMode={isDarkMode}
            setActivePage={setActivePage}
            setSelectedService={setSelectedService}
          />
        );
      case "portfolio":
        return (
          <Portfolio
            isDarkMode={isDarkMode}
            setActivePage={setActivePage}
            setSelectedProject={setSelectedProject}
          />
        );
      case "pricing":
        return (
          <Pricing
            isDarkMode={isDarkMode}
            addToast={addToast}
            setActivePage={setActivePage}
          />
        );
      case "blog":
        return <Blog isDarkMode={isDarkMode} setSelectedPost={setSelectedPost} />;
      case "contact":
        return <Contact isDarkMode={isDarkMode} addToast={addToast} />;
      case "privacy":
        return <Privacy isDarkMode={isDarkMode} />;
      case "terms":
        return <Terms isDarkMode={isDarkMode} />;
      default:
        return <NotFound isDarkMode={isDarkMode} setActivePage={setActivePage} />;
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDarkMode ? "bg-transparent text-zinc-100" : "bg-[#faf9f6] text-zinc-800"
      }`}
    >
      {/* Sticky Top Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* Main Contents with Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Interactive Footer */}
      <Footer
        setActivePage={setActivePage}
        isDarkMode={isDarkMode}
        addToast={addToast}
      />

      {/* MODALS RENDERINGS (AnimatePresence protects entry/exit slides) */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            isDarkMode={isDarkMode}
            setActivePage={setActivePage}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPost && (
          <BlogModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>

      {/* TOAST SYSTEM (Render overlapping alerts) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
