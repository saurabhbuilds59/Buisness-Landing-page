import { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ToastProps {
  key?: string;
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border backdrop-blur-md ${
        type === "success"
          ? "bg-emerald-950/80 border-emerald-500/30 text-emerald-100"
          : "bg-rose-950/80 border-rose-500/30 text-rose-100"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
      )}
      <span className="text-sm font-medium pr-2">{message}</span>
      <button
        onClick={onClose}
        className="p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-white/60 hover:text-white"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
