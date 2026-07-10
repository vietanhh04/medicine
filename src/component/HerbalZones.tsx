import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlobeIcon, Leaf } from "../component/Icons";
import { HERBAL_ZONES } from "../data/data";
import type { HerbalZone } from "../types";

export default function HerbalZones() {
  const [selectedZone, setSelectedZone] = useState<HerbalZone>(HERBAL_ZONES[0]);

  return (
    <section id="growing-region" className="relative min-h-screen w-full py-28 border-t border-emerald-100 bg-[#F4F9F2] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#107542] text-sm tracking-wider font-semibold block mb-2 uppercase">
            BẢN ĐỒ VÙNG TRỒNG
          </span>
          <h2 className="font-heading italic text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-[#0B1E12]">
            Tự chủ dược liệu chuẩn hóa GACP-WHO
          </h2>
          <p className="text-sm md:text-base text-[#3A4F41] max-w-2xl font-body font-light leading-relaxed mt-4">
            Nhấp chọn các vùng trồng nguyên liệu sạch của Nam Dược bên dưới để theo dõi chi tiết điều kiện thổ nhưỡng, độ cao, nhiệt độ môi trường và chỉ số chất lượng hoạt chất.
          </p>
        </div>

        {/* Interactive Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          {/* Left Column: Interactive Selection Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {HERBAL_ZONES.map((zone) => {
              const isActive = selectedZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`text-left p-6 rounded-[1.5rem] transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                    isActive
                      ? "bg-white border-[#107542] shadow-lg scale-[1.02]"
                      : "bg-white/40 border-transparent hover:bg-white/80"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold text-[#107542] uppercase tracking-wider">
                        {zone.location}
                      </span>
                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </div>
                    <h3 className="font-heading italic text-2xl md:text-3xl text-[#0B1E12] leading-none mb-2">
                      {zone.name}
                    </h3>
                    <p className="text-xs text-[#3A4F41]/90 font-light line-clamp-2 leading-relaxed">
                      {zone.description}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="mt-4 p-5 liquid-glass rounded-[1.25rem] bg-emerald-50/50 border border-emerald-100">
              <p className="text-xs text-[#107542] font-semibold flex items-center gap-2 mb-1.5">
                <GlobeIcon className="w-4 h-4 text-[#107542]" /> Tiêu chuẩn nông nghiệp GACP-WHO:
              </p>
              <p className="text-[11px] text-[#3A4F41] font-light leading-relaxed">
                Bao gồm bộ quy tắc cực kỳ chặt chẽ về hạt giống sạch, không sử dụng thuốc trừ sâu, tưới tiêu bằng nước tinh lọc cơ học và thu hái đúng niên độ có hàm lượng hoạt chất dồi dào nhất.
              </p>
            </div>
          </div>

          {/* Right Column: High Fidelity Environmental Board */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedZone.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] p-8 shadow-xl border border-emerald-100 flex flex-col justify-between h-full relative overflow-hidden"
              >
                {/* Subtle Background pattern overlay representing landscape contour lines */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#107542_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

                <div className="relative z-10">
                  {/* Header Details */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-6 border-b border-emerald-50">
                    <div>
                      <span className="text-xs font-bold text-[#107542] tracking-wider uppercase bg-[#E8F5E9] px-3 py-1 rounded-full">
                        Chuẩn GACP-WHO quốc tế
                      </span>
                      <h4 className="font-heading italic text-4xl text-[#0B1E12] leading-tight mt-2">
                        {selectedZone.name}
                      </h4>
                    </div>
                    <div className="text-right sm:text-right">
                      <p className="text-xs text-[#3A4F41] font-semibold">{selectedZone.location}</p>
                      <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Kiểm định sinh học tốt</p>
                    </div>
                  </div>

                  {/* Virtual Sensor telemetry metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
                    <div className="bg-[#FAFCF8] p-4 rounded-xl border border-emerald-50">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Độ cao địa lý</p>
                      <p className="text-sm font-semibold text-[#0B1E12] mt-1">{selectedZone.elevation}</p>
                    </div>
                    <div className="bg-[#FAFCF8] p-4 rounded-xl border border-emerald-50">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Khí hậu & thời tiết</p>
                      <p className="text-sm font-semibold text-[#0B1E12] mt-1">{selectedZone.weather}</p>
                    </div>
                    <div className="bg-[#FAFCF8] p-4 rounded-xl border border-emerald-50">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Nhiệt độ hiện tại</p>
                      <p className="text-sm font-semibold text-[#107542] mt-1 animate-pulse">{selectedZone.temperature}</p>
                    </div>
                    <div className="bg-[#FAFCF8] p-4 rounded-xl border border-emerald-50">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Mẫu kiểm định mẫu</p>
                      <p className="text-sm font-semibold text-emerald-600 mt-1">Đạt 100%</p>
                    </div>
                  </div>

                  {/* Dược tính & lợi ích đặc quyền */}
                  <div className="bg-emerald-50/30 p-6 rounded-2xl border border-emerald-100">
                    <h5 className="text-xs font-bold uppercase text-[#107542] mb-2 flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-[#107542]" /> Lợi ích dược lý vượt trội:
                    </h5>
                    <p className="text-xs text-[#3A4F41] font-light leading-relaxed">
                      {selectedZone.benefits}
                    </p>
                  </div>
                </div>

                {/* Elegant quote / motto */}
                <div className="mt-8 pt-6 border-t border-emerald-50 text-right">
                  <p className="font-heading italic text-xl text-[#107542]">
                    "Thổ nhưỡng hoàn hảo sinh dồi dào dược tính."
                  </p>
                  <p className="text-[10px] text-[#3A4F41] uppercase tracking-wider font-semibold mt-1">
                    - Ban Khoa Học & Nghiên Cứu Nam Dược -
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
