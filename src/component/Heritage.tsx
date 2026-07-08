import React from "react";
import { motion } from "motion/react";
import { HistoryIcon } from "../component/Icons";
import { MILESTONES } from "../data/data";

export default function Heritage() {
  return (
    <section id="di-san" className="relative min-h-screen w-full py-28 border-t border-emerald-100 bg-[#FAFCF8] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#107542] text-sm tracking-wider font-semibold block mb-2 uppercase">
            HÀNH TRÌNH PHÁT TRIỂN
          </span>
          <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-[#0B1E12]">
            Hơn 2 thập kỷ gìn giữ tinh hoa y học nước nhà
          </h2>
          <p className="text-sm md:text-base text-[#3A4F41] max-w-2xl font-body font-light leading-relaxed mt-4">
            Chúng tôi tự hào tiếp quản di sản thảo dược Việt Nam, gìn giữ triết lý "Thuốc Nam trị bệnh người Nam", mở đường cho những bước chuyển đổi công nghệ y dược đầy ngoạn mục.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12 pb-16">
          {/* Underlying horizontal connect line for large screens */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-emerald-200 z-0" />

          {MILESTONES.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col relative z-10"
            >
              <div className="flex items-center justify-between md:flex-col md:items-start md:justify-start">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center font-heading italic text-2xl font-bold text-[#107542] shadow-sm mb-4">
                  {milestone.year}
                </div>
                <div className="block md:hidden h-[1px] flex-1 bg-emerald-200 mx-4" />
              </div>
              <h3 className="font-heading italic text-2xl text-[#0B1E12] mb-2 leading-tight">
                {milestone.title}
              </h3>
              <p className="text-xs text-[#3A4F41]/90 font-light leading-relaxed max-w-[280px]">
                {milestone.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Deep philosophy callout */}
        <div className="mt-12 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#E8F5E9]/40 to-teal-50/20 border border-emerald-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-emerald-100/50 flex items-center justify-center text-[#107542] shrink-0">
            <HistoryIcon className="w-10 h-10 text-[#107542]" />
          </div>
          <div className="text-left">
            <h4 className="font-heading italic text-3xl text-[#0B1E12] leading-tight mb-2">
              "Nam dược trị Nam nhân" — Triết lý bất biến dẫn lối hành động
            </h4>
            <p className="text-xs text-[#3A4F41] font-light leading-relaxed">
              Được đúc kết bởi Thiền sư Tuệ Tĩnh - vị tổ ngành y cổ truyền dân tộc. Nam Dược vững vàng bước tiếp trên con đường hiện đại hóa bài thuốc Nam quý giá bằng các kỹ thuật chiết xuất nano tiên tiến, khẳng định bản lĩnh chữa trị vượt trội của thảo dược mọc trên chính thung lũng quê hương.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
