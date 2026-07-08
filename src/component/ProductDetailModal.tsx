import { motion, AnimatePresence } from "motion/react";
import { GlobeIcon, ArrowUpRight } from "./Icons";
import type { Product } from "../types";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/45 backdrop-blur-md z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-8 shadow-2xl border border-emerald-100 overflow-y-auto max-h-[90vh] text-[#0B1E12]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#FAFCF8] border border-emerald-100 hover:bg-emerald-50 hover:border-emerald-300 flex items-center justify-center text-[#0B1E12] transition-colors cursor-pointer font-bold text-sm"
            >
              ✕
            </button>

            <span className="text-[10px] font-bold text-[#107542] uppercase tracking-wider bg-[#E8F5E9] px-3 py-1 rounded-full">
              {product.category}
            </span>

            <h3 className="font-heading italic text-4xl md:text-5xl text-[#0B1E12] mt-4 mb-2 leading-none">
              {product.name}
            </h3>

            <p className="text-xs text-emerald-700 font-semibold mb-6 flex items-center gap-1.5">
              <GlobeIcon className="w-3.5 h-3.5" /> {product.certification}
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Thành phần tinh sạch:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="text-xs font-medium bg-[#FAFCF8] text-[#3A4F41] border border-emerald-50 px-3 py-1.5 rounded-lg">
                      🌱 {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Công dụng trị liệu:</h4>
                <ul className="flex flex-col gap-2">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="text-xs text-[#3A4F41] font-light leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50/20 p-5 rounded-2xl border border-emerald-100">
                <h4 className="text-xs uppercase font-bold text-[#107542] tracking-wider mb-2">Liều dùng & Hướng dẫn:</h4>
                <p className="text-xs text-[#3A4F41] font-light leading-relaxed">
                  {product.usage}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-50 flex items-center justify-between gap-4">
              <a
                href="https://namduoc.vn/san-pham/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#107542] hover:bg-[#0B1E12] text-white font-medium text-xs px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-colors"
              >
                Tìm hiểu điểm bán gần nhất
                <ArrowUpRight className="text-white w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="text-xs font-semibold text-[#3A4F41] hover:text-[#107542]"
              >
                Đóng cửa sổ
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
