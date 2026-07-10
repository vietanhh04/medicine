import { Leaf, ArrowUpRight } from "../component/Icons";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1E12] text-[#6fda7d] pt-20 pb-12 z-20 overflow-hidden">
      {/* Subtle decorative grass contour graphic in footer */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-5 pointer-events-none select-none">
        <Leaf className="w-full h-full text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand presentation */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center">
                <img src="/logonavc-02.svg" alt="Logo" className="h-12 w-12 select-none" />
              </div>
              <span className="font-heading italic text-2xl text-white tracking-tight">CÔNG TY CỔ PHẦN NAM DƯỢC</span>
            </div>
            <p className="text-xs text-[#A3B3A5]/85 leading-relaxed font-light max-w-sm">
              Tự hào là doanh nghiệp dược phẩm tiên phong kế thừa trọn vẹn di sản y học cổ truyền dân tộc kết hợp sản xuất công nghiệp sạch chuẩn GACP-WHO và đạt Thương hiệu Quốc gia Việt Nam nhiều năm liên tục.
            </p>
            <div className="text-[11px] text-[#A3B3A5]/60">
              GPKD số 0600318292 do Sở Kế hoạch Đầu tư Tỉnh Nam Định cấp phép lần đầu ngày 04/03/2004.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4 text-xs">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">Hệ Sinh Thế</h4>
            <a href="product" className="hover:text-emerald-400 transition-colors">Sản phẩm chủ lực</a>
            <a href="growing region
              " className="hover:text-emerald-400 transition-colors">Bản đồ vùng trồng trọt</a>
                          <a href="Strengths
              " className="hover:text-emerald-400 transition-colors">Thế mạnh công nghệ</a>
                          <a href="heritage
              " className="hover:text-emerald-400 transition-colors">Di sản Nam Dược cổ phương</a>
                          <a href="contact
              " className="hover:text-emerald-400 transition-colors">Đăng ký đại lý phân phối</a>
          </div>

          {/* Column 3: Corporate and Official Sites */}
          <div className="md:col-span-4 flex flex-col gap-4 text-xs">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">Cổng Thông Tin Chính Thức</h4>
            <p className="text-xs font-light text-[#A3B3A5]/80">
              Để tham khảo thêm chi tiết lịch sử tập đoàn, các báo cáo tài chính thường niên, đại hội cổ đông và bài viết chuyên khoa, vui lòng ghé thăm các kênh chính thống của tập đoàn:
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://namduoc.vn/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg flex items-center justify-between transition-colors border border-white/10"
              >
                <span>Cổng thông tin tập đoàn (Trang chủ)</span>
                <ArrowUpRight className="text-emerald-400 w-3.5 h-3.5" />
              </a>
              <a
                href="https://namduoc.vn/gioi-thieu/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg flex items-center justify-between transition-colors border border-white/10"
              >
                <span>Di sản & Lịch sử hình thành</span>
                <ArrowUpRight className="text-emerald-400 w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom legal disclaimer and copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-light text-[#A3B3A5]/60 gap-4">
          <div className="text-center sm:text-left">
            <p>© 2026 CÔNG TY CỔ PHẦN NAM DƯỢC. Bảo lưu mọi quyền lợi.</p>
            <p className="text-[10px] text-[#A3B3A5]/40 mt-1">
              Lưu ý: Các bài viết y khoa và thông tin sản phẩm trên website chỉ mang tính chất tham khảo, không thay thế chẩn đoán y tế chuyên khoa.
            </p>
          </div>
          <div className="flex gap-6 whitespace-nowrap">
            <a href="https://namduoc.vn/chinh-sach-bao-mat/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Chính sách bảo mật</a>
            <a href="https://namduoc.vn/dieu-khoan-su-dung/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
