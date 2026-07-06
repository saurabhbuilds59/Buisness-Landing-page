import { ArrowLeft, Home } from "lucide-react";

interface NotFoundProps {
  isDarkMode: boolean;
  setActivePage: (page: string) => void;
}

export default function NotFound({ isDarkMode, setActivePage }: NotFoundProps) {
  return (
    <div className={`pt-36 pb-24 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center transition-colors duration-300 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
      
      {/* Premium custom illustration: Abstract glassmorphic 404 geometry */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute w-48 h-48 bg-pink-500/10 rounded-full blur-2xl" />
        
        {/* Geometric elements */}
        <div className="relative font-display text-[120px] sm:text-[160px] font-black tracking-tight leading-none bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent opacity-90 select-none">
          404
        </div>
      </div>

      <div className="max-w-md flex flex-col gap-4">
        <h1 className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          System Coordinates Lost
        </h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          The coordinate grid or page path you requested has been altered, archived, or is currently undergoing high-velocity performance tuning.
        </p>

        <button
          onClick={() => {
            setActivePage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mt-6 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2 cursor-pointer self-center"
        >
          <Home className="w-4 h-4" /> Go Back to Headquarters
        </button>
      </div>

    </div>
  );
}
