import { motion } from "motion/react";
import { ArrowUpRight } from "./Icons";
import { PRODUCTS_DATA } from "../data/data";
import type { Product } from "../types";

interface ProductsProps {
  onSelectProduct: (product: Product) => void;
}

export default function Products({ onSelectProduct }: ProductsProps) {
  return (
    <section id="san-pham" className="relative min-h-screen w-full py-28 border-t border-emerald-100 bg-[#FAFCF8] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#107542] text-sm tracking-wider font-semibold block mb-2 uppercase">
            THƯƠNG HIỆU CAO CẤP
          </span>
          <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-[#0B1E12]">
            Sản phẩm chủ lực & thảo dược vàng
          </h2>
          <p className="text-sm md:text-base text-[#3A4F41] max-w-2xl font-body font-light leading-relaxed mt-4">
            Tuyển tập những giải pháp chăm sóc sức khỏe quốc dân của Nam Dược. Mỗi sản phẩm là sự kết hợp chuẩn xác tuyệt đối giữa tri thức hàn lâm cổ truyền và công nghệ sản xuất tinh sạch tối tân nhất.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_DATA.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="liquid-glass hover:shadow-lg hover:border-[#107542]/30 group rounded-[1.5rem] p-6 flex flex-col justify-between transition-all duration-300 bg-white"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#107542] font-semibold block mb-2">
                  {product.category}
                </span>
                <h3 className="font-heading italic text-3xl text-[#0B1E12] leading-none mb-3 group-hover:text-[#107542] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[#3A4F41] font-light leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-50 flex items-center justify-between">
                <span className="text-[10px] font-medium bg-[#E8F5E9] text-[#1B5E20] px-2.5 py-1 rounded-full">
                  {product.certification}
                </span>
                <button
                  onClick={() => onSelectProduct(product)}
                  className="text-xs font-semibold text-[#107542] hover:text-[#0B1E12] flex items-center gap-1 transition-colors group/btn cursor-pointer"
                >
                  Chi tiết
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner Callout */}
        <div className="mt-16 liquid-glass p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
          <div className="max-w-2xl text-left">
            <span className="tag-pill bg-[#107542]/10 text-[#107542] border-[#107542]/20 font-semibold mb-2 inline-block">
              Cam kết chất lượng
            </span>
            <h4 className="font-heading italic text-3xl text-[#0B1E12] leading-tight mb-2">
              100% Sản phẩm đạt kiểm định lâm sàng & lưu hành hợp pháp toàn quốc
            </h4>
            <p className="text-xs text-[#3A4F41] font-light leading-relaxed">
              Tất cả dòng sản phẩm Đông dược thành phẩm của Nam Dược đều phải trải qua quá trình hậu kiểm gắt gao của Bộ Y Tế, đảm bảo lành tính, dồi dào dược tính và đáp ứng hoàn hảo tiêu chí chăm sóc khỏe chủ động.
            </p>
          </div>
          <a
            href="https://namduoc.vn/san-pham/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#107542] hover:bg-[#0B1E12] text-white font-medium px-8 py-3.5 rounded-full text-sm flex items-center gap-2 whitespace-nowrap shadow-md transition-all duration-300"
          >
            Xem tất cả sản phẩm
            <ArrowUpRight className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
