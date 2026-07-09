import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowUpRight } from "../component/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    partnerType: "Khách mua lẻ",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        partnerType: "Khách mua lẻ",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative min-h-screen w-full py-28 border-t border-emerald-100 bg-[#F4F9F2] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#107542] text-sm tracking-wider font-semibold block mb-2 uppercase">
            KẾT NỐI VÀ HỢP TÁC
          </span>
          <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-[#0B1E12]">
            Đồng hành cùng sức khỏe cộng đồng
          </h2>
          <p className="text-sm md:text-base text-[#3A4F41] max-w-2xl font-body font-light leading-relaxed mt-4">
            Chúng tôi luôn chào đón các cơ hội hợp tác phát triển vùng trồng dược liệu, đại lý phân phối, bệnh viện, nhà thuốc và các đơn vị nghiên cứu học thuật trên cả nước.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-md border border-emerald-100 flex flex-col gap-6">
              <h3 className="font-heading italic text-3xl text-[#0B1E12]">
                Trụ sở chính Nam Dược
              </h3>
              
              <div className="flex gap-4 items-start text-xs text-[#3A4F41] font-light leading-relaxed">
                <MapPin className="text-[#107542] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-[#0B1E12] block mb-1">Văn phòng giao dịch Hà Nội:</strong>
                  Khu đô thị mới Dịch Vọng, Phố Thọ Tháp, Quận Cầu Giấy, Hà Nội
                </div>
              </div>

              <div className="flex gap-4 items-start text-xs text-[#3A4F41] font-light leading-relaxed">
                <MapPin className="text-[#107542] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-[#0B1E12] block mb-1">Nhà máy sản xuất chính:</strong>
                  Lô M13, Khu công nghiệp Hòa Xá, Thành phố Nam Định
                </div>
              </div>

              <div className="flex gap-4 items-start text-xs text-[#3A4F41] font-light leading-relaxed">
                <Phone className="text-[#107542] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-[#0B1E12] block mb-1">Hotline tư vấn hỗ trợ:</strong>
                  1800 6316 (Miễn phí cước gọi toàn quốc)
                </div>
              </div>

              <div className="flex gap-4 items-start text-xs text-[#3A4F41] font-light leading-relaxed">
                <Mail className="text-[#107542] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-[#0B1E12] block mb-1">Email phòng kinh doanh:</strong>
                  info@namduoc.vn
                </div>
              </div>
            </div>

            {/* Award highlights */}
            <div className="liquid-glass p-6 rounded-[1.5rem] bg-white/60 border border-emerald-100">
              <p className="text-xs text-[#107542] font-semibold mb-1 uppercase">Chứng nhận uy tín:</p>
              <p className="text-[11px] text-[#3A4F41]/90 leading-relaxed font-light">
                Đạt Giải vàng Chất lượng Quốc gia, Thương hiệu quốc gia 6 năm liên tiếp và nhiều huân chương lao động do Đảng & Nhà nước vinh danh cho hệ sinh thái dược liệu sạch GACP-WHO.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Partnership Proposal Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-emerald-100">
              <h3 className="font-heading italic text-3xl text-[#0B1E12] mb-2 leading-none">
                Gửi yêu cầu liên hệ
              </h3>
              <p className="text-xs text-[#3A4F41] font-light mb-6">
                Vui lòng điền thông tin chi tiết vào biểu mẫu bên dưới. Đội ngũ chuyên trách của Nam Dược sẽ phản hồi sớm nhất trong vòng 24 giờ làm việc.
              </p>

              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold text-[#3A4F41] tracking-wider">Họ và tên *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#FAFCF8] border border-emerald-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#107542] focus:border-transparent transition-all font-body text-[#0B1E12]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold text-[#3A4F41] tracking-wider">Số điện thoại *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0987 654 321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#FAFCF8] border border-emerald-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#107542] focus:border-transparent transition-all font-body text-[#0B1E12]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold text-[#3A4F41] tracking-wider">Địa chỉ Email</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#FAFCF8] border border-emerald-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#107542] focus:border-transparent transition-all font-body text-[#0B1E12]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold text-[#3A4F41] tracking-wider">Mục đích liên hệ</label>
                    <select
                      value={formData.partnerType}
                      onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                      className="bg-[#FAFCF8] border border-emerald-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#107542] focus:border-transparent transition-all font-body text-[#0B1E12]"
                    >
                      <option value="Khách mua lẻ">Khách hàng mua lẻ cá nhân</option>
                      <option value="Hợp tác Vùng trồng">Cung cấp dược liệu thô / Hợp tác vùng trồng</option>
                      <option value="Đại lý Phân phối">Đăng ký Đại lý / Nhà thuốc ủy quyền</option>
                      <option value="Hợp tác Nghiên cứu">Hợp tác R&D sinh học / Nghiên cứu học thuật</option>
                      <option value="Tuyển dụng">Gửi hồ sơ ứng tuyển nhân tài</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold text-[#3A4F41] tracking-wider">Nội dung tin nhắn / Đề xuất hợp tác *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Xin chào Nam Dược, chúng tôi muốn trao đổi về..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#FAFCF8] border border-emerald-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#107542] focus:border-transparent transition-all font-body text-[#0B1E12] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-[#107542] hover:bg-[#0B1E12] text-white font-semibold py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all duration-300"
                >
                  Gửi yêu cầu hợp tác
                  <ArrowUpRight className="text-white" />
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-3 p-4 bg-emerald-50 text-[#1B5E20] text-xs font-medium rounded-lg text-center border border-emerald-200"
                    >
                      Gửi thành công! Cảm ơn {formData.name || "bạn"}. Phòng ban phụ trách của Nam Dược sẽ liên hệ sớm qua SĐT {formData.phone || ""}.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
