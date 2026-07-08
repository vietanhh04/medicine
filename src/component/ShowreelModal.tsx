import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-12"
        >
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden liquid-glass bg-[#0B1E12]/90 border border-emerald-500/20 shadow-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white transition-colors cursor-pointer text-sm font-semibold"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/S2p0P1pYshI?autoplay=1"
              title="Hành Trình Thương Hiệu Nam Dược chuẩn GACP-WHO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
