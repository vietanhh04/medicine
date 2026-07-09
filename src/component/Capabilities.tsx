import FadingVideo from "../component/FadingVideo";
import { ImageIcon, MovieIcon, LightbulbIcon } from "../component/Icons";
import capabilitiesVideo from "../assets/videos/hf_videocapabilities.mp4";

export default function Capabilities() {
  return (
    <section id="strength" className="relative min-h-screen w-full py-28 border-t border-white/5 bg-[#050D08] z-20">
      {/* Atmosphere Background Video 2 */}
      <FadingVideo
        src={capabilitiesVideo}
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none opacity-20 mix-blend-screen"
      />

      {/* No bottom white gradient mask */}

      <div className="relative z-10 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold text-[#4ADE80] tracking-widest uppercase block mb-4">
            THẾ MẠNH CỐT LÕI
          </span>
          <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white">
            Sứ mệnh gìn giữ,
            <br />
            nâng tầm dược liệu Nam
          </h2>
          <p className="text-sm md:text-base text-[#A3B3A5] max-w-2xl font-body font-light leading-relaxed mt-4">
            Tại Nam Dược, chúng tôi tối ưu chuỗi giá trị khép kín từ vùng trồng thô, nghiên cứu phát triển cho đến khâu sản xuất hiện đại, tạo lập chuẩn mực xuất sắc toàn diện cho Đông dược Việt Nam.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[1.25rem] p-6 min-h-[340px] flex flex-col justify-between group hover:bg-white/10 transition-all duration-300 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-white/10 border border-white/15 h-11 w-11 rounded-[0.75rem] flex items-center justify-center text-[#4ADE80]">
                <ImageIcon />
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end">
                <span className="bg-white/10 text-white/90 border border-white/5 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">GACP-WHO</span>
                <span className="bg-white/10 text-white/90 border border-white/5 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">Sạch sinh học</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white group-hover:text-[#4ADE80] transition-colors">
                Vùng Dược Liệu Sạch
              </h3>
              <p className="text-sm text-[#A3B3A5] font-body font-light leading-relaxed">
                Sở hữu chuỗi vùng trồng trọt hữu cơ và liên kết thu mua trực tiếp từ nông dân vùng cao đạt tiêu chuẩn GACP-WHO, bảo vệ đa dạng sinh học tự nhiên của đất nước.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[1.25rem] p-6 min-h-[340px] flex flex-col justify-between group hover:bg-white/10 transition-all duration-300 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-white/10 border border-white/15 h-11 w-11 rounded-[0.75rem] flex items-center justify-center text-[#4ADE80]">
                <MovieIcon />
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end">
                <span className="bg-white/10 text-white/90 border border-white/5 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">Phòng R&D</span>
                <span className="bg-white/10 text-white/90 border border-white/5 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">Bài thuốc cổ</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white group-hover:text-[#4ADE80] transition-colors">
                Nghiên Cứu & Phát Triển
              </h3>
              <p className="text-sm text-[#A3B3A5] font-body font-light leading-relaxed">
                Đội ngũ dược sĩ lâm sàng dồi dào chuyên môn hợp tác cùng Viện Dược Liệu Quốc Gia, kế thừa trọn vẹn tinh túy sách đỏ Việt Nam và chuyển hóa thành dược chất hiệu dụng cao.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[1.25rem] p-6 min-h-[340px] flex flex-col justify-between group hover:bg-white/10 transition-all duration-300 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-white/10 border border-white/15 h-11 w-11 rounded-[0.75rem] flex items-center justify-center text-[#4ADE80]">
                <LightbulbIcon />
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end">
                <span className="bg-white/10 text-white/90 border border-white/5 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">GMP-WHO</span>
                <span className="bg-white/10 text-white/90 border border-white/5 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">Khép kín</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white group-hover:text-[#4ADE80] transition-colors">
                Nhà Máy Tự Động Hóa
              </h3>
              <p className="text-sm text-[#A3B3A5] font-body font-light leading-relaxed">
                Nhà máy hiện đại bậc nhất vận hành quy trình khép kín tự động, vô trùng tuyệt đối từ khâu sơ chế thô, chiết tách hoạt chất lỏng đến đóng hộp thành phẩm viên nang siro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
