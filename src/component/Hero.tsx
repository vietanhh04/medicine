import { motion } from "motion/react";
import FadingVideo from "./FadingVideo";
import BlurText from "./BlurText";
import { ClockIcon, GlobeIcon, Play, Leaf } from "../component/Icons";
import { motionVariants } from "../data/data";
import heroVideo from "../assets/videos/hf_videohero.mp4";

interface HeroProps {
  onShowShowreel: () => void;
}

export default function Hero({ onShowShowreel }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between bg-[#050D08]">
      {/* Background Atmosphere Video - Blended beautifully over botanical dark bg */}
      <FadingVideo
        src={heroVideo}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 select-none pointer-events-none mix-blend-screen opacity-40"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Ambient fade-out masks - Fades top in dark, no white bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D08]/80 via-transparent to-transparent z-1 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-28 px-4 text-center max-w-5xl mx-auto">
        {/* Announcement Badge */}
        <motion.div
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="bg-white/10 border border-white/15 backdrop-blur-md rounded-full px-4 py-1.5 text-[11px] md:text-xs flex items-center gap-2 mb-6 shadow-sm"
        >
          <span className="bg-[#107542] text-white px-2 py-0.5 rounded-full font-bold uppercase text-[9px] tracking-wide">
            Mới
          </span>
          <span className="text-white/90 font-medium">
            Đạt chuẩn GMP-WHO cho nhà máy công nghệ sinh học tại Nam Định
          </span>
        </motion.div>

        {/* Epic Main Heading */}
        <div className="max-w-6xl px-2 flex flex-col gap-2 md:gap-2.5 items-center">
          <BlurText
            text="Tinh Hoa Thảo Dược"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.9] tracking-[-3px]"
          />

          <BlurText
            text="Tận Tâm Vì Sức Khỏe Việt"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.9] tracking-[-3px]"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="text-sm md:text-base text-[#A3B3A5] max-w-2xl font-body font-light leading-relaxed mt-6 px-4"
        >
          Nam Dược kế thừa kho tàng y dược học cổ truyền nước nhà, không ngừng đầu tư khoa học kỹ thuật và xây dựng hệ sinh thái nông nghiệp organic đạt chuẩn quốc tế để phụng sự, hồi sinh những giá trị thảo dược đích thực của đất mẹ Việt Nam.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#san-pham"
            className="bg-white hover:bg-[#E8F5E9] transition-all duration-300 px-8 py-3 rounded-full flex items-center gap-3 font-semibold text-[#107542] cursor-pointer shadow-md"
          >
            Khám phá sản phẩm
            <Leaf className="text-[#107542]" />
          </a>
          
          <button
            onClick={onShowShowreel}
            className="text-[#A3B3A5] flex items-center gap-2.5 text-sm hover:text-white transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/10 flex items-center justify-center transition-all shadow-sm">
              <Play className="text-white" />
            </div>
            Xem Showreel Doanh nghiệp
          </button>
        </motion.div>

        {/* Two Interactive Trust Stats */}
        <motion.div
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 flex-1 rounded-[1.25rem] text-left hover:scale-[1.02] transition-transform duration-300 shadow-sm">
            <div className="flex items-center gap-3 text-[#A3B3A5]">
              <ClockIcon className="text-[#4ADE80]" />
              <span className="text-xs uppercase tracking-wider font-semibold">Hành trình bảo vệ</span>
            </div>
            <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-3 text-[#4ADE80]">
              22 Năm Qua
            </div>
            <div className="text-xs text-[#A3B3A5]/90 mt-1 font-light leading-snug">
              Nỗ lực gìn giữ tinh hoa thuốc Nam cổ phương, hỗ trợ nâng đỡ thể trạng người Việt khỏe mạnh từ gốc rễ.
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 flex-1 rounded-[1.25rem] text-left hover:scale-[1.02] transition-transform duration-300 shadow-sm">
            <div className="flex items-center gap-3 text-[#A3B3A5]">
              <GlobeIcon className="text-[#4ADE80]" />
              <span className="text-xs uppercase tracking-wider font-semibold font-body">Chuẩn quốc tế</span>
            </div>
            <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-3 text-[#4ADE80]">
              GACP-WHO
            </div>
            <div className="text-xs text-[#A3B3A5]/90 mt-1 font-light leading-snug">
              Tiêu chuẩn vùng trồng trọt và thu hái dược liệu vàng khắt khe do Tổ chức Y tế Thế giới công bố.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Trust Brands Footing */}
      <motion.div
        initial={motionVariants.initial}
        animate={motionVariants.animate}
        transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-4 pb-12 mt-auto px-4"
      >
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-6 py-1.5 text-xs text-[#A3B3A5] text-center select-none shadow-sm font-medium">
          Sản phẩm được hàng triệu người Việt truyền tai nhau sử dụng hằng ngày
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mt-2 opacity-90">
          {["Siro ho Bảo Thanh", "Xoang mũi Thông Xoang", "Trà Dây Thìa Canh", "Cao Ích Mẫu Nam Dược", "Bách Nhiên Vương"].map(
            (brand) => (
              <span
                key={brand}
                className="font-heading italic text-xl md:text-2xl lg:text-3xl tracking-tight text-[#A3B3A5]/80 hover:text-[#4ADE80] transition-colors cursor-default"
              >
                {brand}
              </span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
