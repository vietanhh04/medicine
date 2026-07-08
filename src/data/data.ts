import type { Product, HerbalZone, Milestone } from "../types";

export const PRODUCTS_DATA: Product[] = [
  {
    id: "bao-thanh",
    name: "Siro Ho Cảm Bảo Thanh",
    category: "Bổ phế & Trị ho",
    description: "Sự kết hợp tinh túy của bài thuốc cổ phương Xuyên bối tỳ bà cao cùng Ô mai, Mật ong và vỏ Quýt chuẩn hóa GACP-WHO.",
    ingredients: ["Mật ong hữu cơ", "Tỳ bà diệp", "Ô mai Nam Định", "Cát cánh", "Trần bì"],
    benefits: [
      "Bổ phế, trừ ho, hóa đờm hiệu quả nhanh chóng",
      "Dịu cổ họng ngay lập tức, hỗ trợ trị khản tiếng",
      "An toàn tuyệt đối cho trẻ nhỏ và cả gia đình"
    ],
    usage: "Trẻ em trên 1 tuổi: 5ml x 3 lần/ngày. Người lớn: 15ml x 3 lần/ngày.",
    certification: "Thương hiệu Quốc gia & Chuẩn GMP-WHO",
    color: "from-amber-100 to-emerald-50/50"
  },
  {
    id: "thong-xoang",
    name: "Thông Xoang Tán Nam Dược",
    category: "Hô hấp & Xoang mũi",
    description: "Thuốc thảo dược điều trị viêm mũi dị ứng và viêm xoang cấp & mãn tính từ các vị thuốc Nam quý báu như Tân di, Thương nhĩ tử.",
    ingredients: ["Tân di hoa", "Thương nhĩ tử", "Cát cánh Bắc Hà", "Phòng phong", "Bạch chỉ"],
    benefits: [
      "Thông mũi, đào thải dịch nhầy và mủ xoang tắc nghẽn",
      "Hỗ trợ tái tạo và phục hồi niêm mạc mũi bị tổn thương",
      "Ngăn ngừa viêm mũi dị ứng tái phát khi giao mùa"
    ],
    usage: "Uống 6-8 viên/ngày chia làm 2 lần sau bữa ăn với nước ấm.",
    certification: "Dự án cấp Nhà nước - Chuẩn GACP-WHO",
    color: "from-blue-100 to-emerald-50/50"
  },
  {
    id: "thia-canh",
    name: "Trà Dây Thìa Canh Nam Dược",
    category: "Tiểu đường & Đường huyết",
    description: "Sản phẩm hỗ trợ hạ và ổn định đường huyết tự nhiên từ 100% Dây thìa canh sạch Hải Hậu đạt tiêu chuẩn quốc tế khắt khe.",
    ingredients: ["100% Dây thìa canh chuẩn GACP-WHO"],
    benefits: [
      "Hạ và ổn định chỉ số đường huyết tự nhiên bền vững",
      "Hỗ trợ ngăn ngừa các biến chứng nguy hiểm của bệnh tiểu đường",
      "Giảm cảm giác thèm ngọt, thanh lọc cơ thể"
    ],
    usage: "Hãm 1-2 túi lọc với 150ml nước sôi, uống sau bữa ăn 30 phút.",
    certification: "OCOP 5 Sao & Đạt chuẩn Quốc tế",
    color: "from-emerald-100 to-green-50/50"
  },
  {
    id: "diep-ha-chau",
    name: "Diệp Hạ Châu Nam Dược",
    category: "Gan mật & Thải độc",
    description: "Trà thảo dược chiết xuất từ cây Chó đẻ răng cưa giúp mát gan, giải độc, tăng cường chức năng tế bào gan toàn diện.",
    ingredients: ["Diệp hạ châu đắng chuẩn hóa", "Cỏ ngọt", "Actisô"],
    benefits: [
      "Mát gan, thanh nhiệt cơ thể, trị mụn nhọt mẩn ngứa",
      "Hỗ trợ hạ men gan, bảo vệ gan khỏi các độc tố có hại",
      "Tăng cường chuyển hóa dịch mật, giúp tiêu hóa tốt hơn"
    ],
    usage: "Hãm uống hằng ngày thay nước, ngon hơn khi uống lạnh.",
    certification: "Chuẩn hóa GACP-WHO",
    color: "from-teal-100 to-emerald-50/50"
  }
];

export const HERBAL_ZONES: HerbalZone[] = [
  {
    id: "quat",
    name: "Vùng Trồng Quất Sạch",
    location: "Vụ Bản, Nam Định",
    description: "Vùng nguyên liệu quất sạch chuẩn hóa dùng riêng cho Siro ho Bảo Thanh, canh tác theo chuẩn hữu cơ không hóa chất.",
    elevation: "Đồng bằng sông Hồng (15m)",
    weather: "Cận nhiệt đới ẩm, nắng ấm, lượng mưa dồi dào",
    temperature: "24°C - Độ ẩm đất: 82%",
    benefits: "Trái quất dồi dào tinh dầu ở vỏ, giàu Vitamin C, vị chua thanh tự nhiên đạt tỷ lệ lý tưởng.",
    imageAlt: "Vườn quất hữu cơ trĩu quả chín mọng"
  },
  {
    id: "cat-canh",
    name: "Vùng Trồng Cát Cánh",
    location: "Bắc Hà, Lào Cai",
    description: "Nằm trên rẻo cao mát mẻ quanh năm, thổ nhưỡng núi đá vôi giúp rễ cát cánh tích tụ hàm lượng saponin cao vượt trội.",
    elevation: "Cao nguyên Bắc Hà (1,500m)",
    weather: "Ôn đới mát mẻ, sương mù bao phủ sáng sớm",
    temperature: "17°C - Độ ẩm đất: 78%",
    benefits: "Rễ cát cánh mập mạp, nhiều dưỡng chất, là vị thuốc đầu bảng về bổ phế, trừ ho.",
    imageAlt: "Đồi hoa cát cánh tím biếc lãng mạn"
  },
  {
    id: "thia-canh-zone",
    name: "Vùng Trồng Dây Thìa Canh",
    location: "Hải Hậu, Nam Định",
    description: "Vùng trồng Dây thìa canh đầu tiên tại Việt Nam được chuẩn hóa GACP-WHO, được tưới bằng nước ngầm sạch tinh khiết.",
    elevation: "Vùng ven biển Nam Định (8m)",
    weather: "Khí hậu biển ôn hòa, gió mát, đất phù sa cổ dồi dào dinh dưỡng",
    temperature: "26°C - Độ ẩm đất: 80%",
    benefits: "Tỷ lệ hoạt chất Gymnemin cao gấp 2.4 lần so với các giống thìa canh thông thường.",
    imageAlt: "Giàn dây thìa canh xanh mướt trải rộng"
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2004",
    title: "Khởi Nguồn Ý Chí",
    desc: "Nam Dược chính thức được thành lập với tôn chỉ kiên định: 'Nam dược trị Nam nhân' - dùng thuốc Nam chữa bệnh cho người Việt."
  },
  {
    year: "2010",
    title: "Tiên Phong GMP-WHO",
    desc: "Trở thành nhà máy sản xuất Đông dược đầu tiên tại miền Bắc đạt chứng nhận chuẩn GMP-WHO khắt khe của Tổ chức Y tế Thế giới."
  },
  {
    year: "2018",
    title: "Thương Hiệu Quốc Gia",
    desc: "Được vinh danh là Thương hiệu Quốc gia Việt Nam nhờ chuẩn hóa thành công 100% vùng nguyên liệu organic."
  },
  {
    year: "2026",
    title: "Khát Vọng Toàn Cầu",
    desc: "Khánh thành nhà máy thứ 2 công nghệ cao tự động khép kín, đưa tinh hoa Nam dược vươn tầm các thị trường quốc tế khó tính."
  }
];

export const motionVariants = {
  initial: { filter: "blur(10px)", opacity: 0, y: 30 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};
