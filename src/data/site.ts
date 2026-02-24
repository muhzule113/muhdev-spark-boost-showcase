// ============================================================
// SITE DATA — Semua konten website ada di sini
// ============================================================

export const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WA asli
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo, saya tertarik dengan jasa Anda. Bisa info lebih lanjut?")}`;

export const siteConfig = {
  name: "DevAssist",
  tagline: "Solusi Digital Terpercaya",
  description: "Jasa pembuatan website, aplikasi, dan bantuan tugas kuliah IT. Dikerjakan profesional, tepat waktu, dan transparan.",
  author: "DevAssist Team",
};

// ---- STATS ----
export const stats = [
  { label: "Project Selesai", value: "150+" },
  { label: "Klien Puas", value: "120+" },
  { label: "Rata-rata Rating", value: "4.8/5" },
  { label: "Response Time", value: "< 1 Jam" },
];

// ---- SERVICES ----
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  limitations: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Pembuatan website modern, responsif, dan SEO-friendly menggunakan teknologi terkini. Dari landing page hingga web app kompleks.",
    icon: "Globe",
    features: [
      "Landing page & company profile",
      "Web app (React, Next.js, Vue)",
      "E-commerce sederhana",
      "Dashboard & admin panel",
      "Integrasi API pihak ketiga",
      "Responsive design (mobile-first)",
    ],
    limitations: [
      "Tidak termasuk hosting & domain (bisa dibantu setup)",
      "Konten (teks & gambar) disediakan klien atau ada biaya tambahan",
      "Fitur real-time kompleks (chat, live streaming) masuk paket Premium",
    ],
    faq: [
      { q: "Teknologi apa yang digunakan?", a: "React, Next.js, TypeScript, Tailwind CSS, dan database sesuai kebutuhan (PostgreSQL, MongoDB, Firebase)." },
      { q: "Berapa lama pengerjaan?", a: "Landing page 3–5 hari, web app 1–3 minggu tergantung kompleksitas." },
      { q: "Apakah bisa revisi?", a: "Ya, setiap paket sudah termasuk revisi. Lihat detail di halaman Pricing." },
    ],
  },
  {
    id: "tugas-kuliah",
    title: "Tugas Kuliah & Akademik",
    description: "Bantuan pengerjaan tugas pemrograman, proyek akhir, dan laporan teknis untuk mahasiswa IT. Dikerjakan rapi dengan penjelasan.",
    icon: "GraduationCap",
    features: [
      "Tugas pemrograman (Java, Python, C++, dll)",
      "Proyek web (HTML/CSS/JS, React, PHP)",
      "Database & SQL",
      "Struktur data & algoritma",
      "Laporan & dokumentasi teknis",
      "Penjelasan kode (opsional)",
    ],
    limitations: [
      "Bukan jasa plagiasi — kode ditulis original",
      "Tidak mengerjakan ujian real-time / proctored",
      "Deadline minimal 24 jam sebelum pengumpulan",
    ],
    faq: [
      { q: "Apakah kode original?", a: "Ya, semua kode ditulis dari nol. Kami juga bisa memberikan penjelasan agar kamu paham." },
      { q: "Bahasa pemrograman apa saja?", a: "Python, Java, C/C++, JavaScript, PHP, SQL, dan lainnya. Tanyakan jika bahasa yang kamu butuhkan tidak terdaftar." },
      { q: "Bisa minta penjelasan kode?", a: "Tentu. Penjelasan kode bisa diminta sebagai add-on atau sudah termasuk di paket Pro/Premium." },
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Pengembangan aplikasi mobile cross-platform menggunakan React Native atau Flutter untuk Android & iOS.",
    icon: "Smartphone",
    features: [
      "Aplikasi cross-platform (Android & iOS)",
      "UI/UX modern & responsif",
      "Integrasi backend & API",
      "Push notification",
      "State management yang proper",
    ],
    limitations: [
      "Tidak termasuk biaya publish ke App Store / Play Store",
      "Fitur native sangat spesifik mungkin butuh diskusi lebih lanjut",
      "Estimasi waktu lebih panjang dari web development",
    ],
    faq: [
      { q: "Framework apa yang digunakan?", a: "React Native atau Flutter, tergantung kebutuhan dan preferensi klien." },
      { q: "Apakah bisa untuk iOS dan Android?", a: "Ya, cross-platform sehingga satu codebase untuk kedua platform." },
    ],
  },
];

// ---- PRICING ----
export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "Mulai 150rb",
    description: "Untuk tugas sederhana atau landing page standar.",
    features: [
      "1 halaman / 1 tugas",
      "Revisi 1x",
      "Pengerjaan 3–5 hari",
      "Source code",
      "Konsultasi via chat",
    ],
    cta: "Pilih Basic",
  },
  {
    name: "Pro",
    price: "Mulai 500rb",
    description: "Untuk project menengah dengan fitur lebih lengkap.",
    features: [
      "Multi-halaman / tugas kompleks",
      "Revisi 3x",
      "Pengerjaan 5–10 hari",
      "Source code + dokumentasi",
      "Penjelasan kode",
      "Prioritas response",
    ],
    highlighted: true,
    cta: "Pilih Pro",
  },
  {
    name: "Premium",
    price: "Mulai 1.5jt",
    description: "Untuk project besar atau deadline ketat.",
    features: [
      "Full project / skripsi",
      "Revisi unlimited (14 hari)",
      "Pengerjaan disesuaikan",
      "Source code + dokumentasi lengkap",
      "Penjelasan & bimbingan",
      "Support 30 hari setelah selesai",
      "Prioritas tertinggi",
    ],
    cta: "Pilih Premium",
  },
];

export const addOns = [
  { name: "Express (deadline < 48 jam)", price: "+50% dari harga paket" },
  { name: "Penjelasan kode detail", price: "+50rb–150rb" },
  { name: "Deploy & setup hosting", price: "+100rb–300rb" },
  { name: "Desain UI custom (Figma)", price: "+200rb–500rb" },
  { name: "Revisi tambahan", price: "+50rb / revisi" },
];

// ---- PORTFOLIO ----
export interface PortfolioItem {
  id: string;
  title: string;
  category: "Web Dev" | "Tugas Kuliah" | "Mobile App";
  description: string;
  tech: string[];
  image: string;
  details: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "E-Commerce Fashion Store",
    category: "Web Dev",
    description: "Toko online fashion dengan fitur cart, checkout, dan admin panel.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/placeholder.svg",
    details: "Website e-commerce lengkap dengan katalog produk, keranjang belanja, sistem pembayaran mock, dan dashboard admin untuk manajemen produk. Responsive di semua device.",
  },
  {
    id: "p2",
    title: "Sistem Informasi Perpustakaan",
    category: "Tugas Kuliah",
    description: "Aplikasi CRUD perpustakaan untuk tugas mata kuliah Basis Data.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "/placeholder.svg",
    details: "Sistem informasi perpustakaan dengan fitur peminjaman, pengembalian, manajemen anggota, dan laporan. Dilengkapi dokumentasi dan ERD.",
  },
  {
    id: "p3",
    title: "Portfolio Website Fotografer",
    category: "Web Dev",
    description: "Website portfolio minimalis untuk fotografer profesional.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/placeholder.svg",
    details: "Website portfolio dengan galeri foto grid, lazy loading, animasi scroll smooth, dan form kontak. Optimized untuk performa dan SEO.",
  },
  {
    id: "p4",
    title: "Algoritma Sorting Visualizer",
    category: "Tugas Kuliah",
    description: "Visualisasi algoritma sorting untuk tugas Struktur Data.",
    tech: ["Python", "Tkinter"],
    image: "/placeholder.svg",
    details: "Aplikasi desktop yang memvisualisasikan bubble sort, quick sort, merge sort, dan insertion sort secara real-time dengan animasi bar chart.",
  },
  {
    id: "p5",
    title: "Aplikasi To-Do List",
    category: "Mobile App",
    description: "Aplikasi task manager sederhana untuk Android & iOS.",
    tech: ["React Native", "AsyncStorage", "Expo"],
    image: "/placeholder.svg",
    details: "Aplikasi mobile cross-platform dengan fitur CRUD task, kategori, deadline reminder, dan tema gelap/terang.",
  },
  {
    id: "p6",
    title: "Dashboard Analytics",
    category: "Web Dev",
    description: "Dashboard interaktif untuk monitoring data penjualan.",
    tech: ["React", "Recharts", "Tailwind CSS", "REST API"],
    image: "/placeholder.svg",
    details: "Dashboard dengan grafik interaktif, filter tanggal, export data, dan real-time updates. Responsive dan accessible.",
  },
];

export const portfolioCategories = ["Semua", "Web Dev", "Tugas Kuliah", "Mobile App"] as const;

// ---- TESTIMONIALS ----
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Andi Pratama",
    role: "Mahasiswa Teknik Informatika",
    content: "Tugas pemrograman Java saya selesai tepat waktu dan rapi. Penjelasan kodenya juga mudah dipahami. Recommended!",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    role: "Pemilik Toko Online",
    content: "Website toko online saya jadi lebih profesional. Responsif di HP dan laptop. Proses pengerjaannya juga cepat dan komunikatif.",
    rating: 5,
  },
  {
    name: "Budi Setiawan",
    role: "Mahasiswa Sistem Informasi",
    content: "Proyek akhir database saya dikerjakan dengan baik. Dokumentasinya lengkap, jadi saya bisa presentasi dengan percaya diri.",
    rating: 4,
  },
  {
    name: "Lisa Anggraini",
    role: "Freelancer",
    content: "Butuh landing page cepat untuk client, dan hasilnya melebihi ekspektasi. Desainnya clean dan modern. Pasti order lagi.",
    rating: 5,
  },
  {
    name: "Reza Firmansyah",
    role: "Mahasiswa Ilmu Komputer",
    content: "Awalnya ragu, tapi setelah lihat hasilnya saya puas. Kodenya clean dan ada komentar penjelasan di setiap fungsi.",
    rating: 4,
  },
];

// ---- FAQ ----
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Bagaimana cara memesan jasa?",
    answer: "Klik tombol 'Chat WhatsApp' atau isi form di halaman Contact. Jelaskan kebutuhan Anda, dan kami akan memberikan estimasi harga dan waktu pengerjaan.",
  },
  {
    question: "Berapa lama waktu pengerjaan?",
    answer: "Tergantung kompleksitas. Tugas sederhana 1–3 hari, landing page 3–5 hari, web app 1–3 minggu. Estimasi pasti diberikan setelah diskusi detail.",
  },
  {
    question: "Apakah ada garansi revisi?",
    answer: "Ya. Paket Basic 1x revisi, Pro 3x revisi, Premium unlimited revisi selama 14 hari setelah selesai. Revisi di luar paket dikenakan biaya tambahan.",
  },
  {
    question: "Metode pembayaran apa yang diterima?",
    answer: "Transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, Dana), dan QRIS. Pembayaran bisa dicicil 50% di awal dan 50% setelah selesai untuk project besar.",
  },
  {
    question: "Apakah kode yang diberikan original?",
    answer: "Ya, semua kode ditulis dari nol dan original. Kami tidak menggunakan kode plagiat atau copy-paste dari sumber lain.",
  },
  {
    question: "Bagaimana jika saya tidak puas dengan hasilnya?",
    answer: "Kami menyediakan revisi sesuai paket. Jika hasil tetap tidak sesuai brief awal, kami bisa diskusikan solusi terbaik termasuk refund parsial sesuai kebijakan.",
  },
  {
    question: "Apakah data dan project saya aman?",
    answer: "Ya, kami menjaga kerahasiaan semua data dan project klien. Tidak akan dibagikan atau dipublikasikan tanpa izin.",
  },
  {
    question: "Bisa konsultasi dulu sebelum order?",
    answer: "Tentu! Konsultasi awal gratis via WhatsApp. Anda bisa tanya-tanya soal estimasi, teknologi, atau apapun sebelum memutuskan.",
  },
  {
    question: "Apakah bisa request teknologi tertentu?",
    answer: "Ya, selama teknologi tersebut sesuai dengan kebutuhan project. Diskusikan preferensi Anda saat konsultasi awal.",
  },
  {
    question: "Bagaimana jika deadline sangat mendesak?",
    answer: "Kami menerima project express (< 48 jam) dengan biaya tambahan 50% dari harga paket. Ketersediaan tergantung workload saat itu.",
  },
];

// ---- ORDER STEPS ----
export const orderSteps = [
  {
    step: 1,
    title: "Hubungi Kami",
    description: "Chat via WhatsApp atau isi form order. Jelaskan kebutuhan Anda secara detail.",
  },
  {
    step: 2,
    title: "Diskusi & Estimasi",
    description: "Kami analisis kebutuhan Anda dan berikan estimasi harga, waktu, dan teknologi yang digunakan.",
  },
  {
    step: 3,
    title: "Pengerjaan",
    description: "Setelah deal, kami mulai kerjakan. Progress bisa dipantau via chat. Revisi sesuai paket.",
  },
  {
    step: 4,
    title: "Selesai & Serah Terima",
    description: "Project selesai, source code dikirim, dan support sesuai paket aktif. Done!",
  },
];

// ---- ESTIMATOR ----
export const estimatorServices = [
  { value: "landing-page", label: "Landing Page" },
  { value: "web-app", label: "Web Application" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "tugas-pemrograman", label: "Tugas Pemrograman" },
  { value: "proyek-akhir", label: "Proyek Akhir / Skripsi" },
  { value: "database", label: "Database & SQL" },
];

export const estimatorDifficulty = [
  { value: "mudah", label: "Mudah" },
  { value: "sedang", label: "Sedang" },
  { value: "sulit", label: "Sulit" },
  { value: "kompleks", label: "Sangat Kompleks" },
];

export const estimatorDeadline = [
  { value: "santai", label: "> 2 minggu" },
  { value: "normal", label: "1–2 minggu" },
  { value: "cepat", label: "3–7 hari" },
  { value: "express", label: "< 3 hari" },
];

export interface EstimatorResult {
  priceRange: string;
  timeRange: string;
  reason: string;
}

export function calculateEstimate(
  service: string,
  difficulty: string,
  deadline: string
): EstimatorResult {
  // Base prices
  const basePrices: Record<string, [number, number]> = {
    "landing-page": [150_000, 500_000],
    "web-app": [500_000, 3_000_000],
    "mobile-app": [1_000_000, 5_000_000],
    "tugas-pemrograman": [50_000, 300_000],
    "proyek-akhir": [500_000, 2_000_000],
    "database": [100_000, 500_000],
  };

  const difficultyMultiplier: Record<string, number> = {
    mudah: 1,
    sedang: 1.5,
    sulit: 2,
    kompleks: 3,
  };

  const deadlineMultiplier: Record<string, number> = {
    santai: 1,
    normal: 1,
    cepat: 1.25,
    express: 1.5,
  };

  const baseTimes: Record<string, [number, number]> = {
    "landing-page": [3, 5],
    "web-app": [7, 21],
    "mobile-app": [14, 30],
    "tugas-pemrograman": [1, 3],
    "proyek-akhir": [7, 21],
    "database": [1, 5],
  };

  const [minPrice, maxPrice] = basePrices[service] || [100_000, 500_000];
  const dm = difficultyMultiplier[difficulty] || 1;
  const dlm = deadlineMultiplier[deadline] || 1;

  const finalMin = Math.round((minPrice * dm * dlm) / 10_000) * 10_000;
  const finalMax = Math.round((maxPrice * dm * dlm) / 10_000) * 10_000;

  const [minDays, maxDays] = baseTimes[service] || [3, 7];

  const reasons: string[] = [];
  if (dm > 1) reasons.push(`tingkat kesulitan ${difficulty} (×${dm})`);
  if (dlm > 1) reasons.push(`deadline ${deadline} (×${dlm})`);
  if (reasons.length === 0) reasons.push("standar tanpa faktor pengali");

  const formatPrice = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);

  return {
    priceRange: `${formatPrice(finalMin)} – ${formatPrice(finalMax)}`,
    timeRange: `${minDays}–${maxDays} hari kerja`,
    reason: `Harga dihitung berdasarkan jenis layanan "${service}" dengan ${reasons.join(", ")}. Estimasi ini bersifat indikatif — harga final ditentukan setelah diskusi detail.`,
  };
}

// ---- POLICIES ----
export const policies = {
  privacy: {
    title: "Kebijakan Privasi",
    content: `Kami menghormati privasi Anda. Data yang Anda berikan (nama, kontak, detail project) hanya digunakan untuk keperluan pengerjaan order dan komunikasi terkait. Kami tidak menjual, membagikan, atau mempublikasikan data pribadi Anda kepada pihak ketiga tanpa izin. Data project dan source code milik Anda sepenuhnya setelah pembayaran lunas.`,
  },
  revision: {
    title: "Kebijakan Revisi",
    content: `Setiap paket memiliki jatah revisi: Basic (1x), Pro (3x), Premium (unlimited selama 14 hari). Revisi mencakup perubahan yang masih dalam scope brief awal. Perubahan di luar scope (fitur baru, redesign total) akan dikenakan biaya tambahan setelah diskusi. Revisi tambahan di luar jatah: Rp50.000/revisi.`,
  },
  refund: {
    title: "Kebijakan Refund",
    content: `Refund 100% jika pengerjaan belum dimulai. Refund 50% jika pengerjaan sudah berjalan kurang dari 50%. Tidak ada refund jika project sudah selesai lebih dari 50% atau sudah diserahkan. Refund diproses dalam 3–5 hari kerja. Keputusan refund bersifat case-by-case dan akan didiskusikan secara baik-baik.`,
  },
  disclaimer: {
    title: "Disclaimer",
    content: `Layanan ini ditujukan untuk membantu pengerjaan project dan tugas. Untuk tugas akademik, kami menyediakan kode sebagai referensi belajar — tanggung jawab penggunaan ada di tangan klien. Kami tidak bertanggung jawab atas penggunaan yang melanggar aturan institusi pendidikan. Estimasi harga dan waktu bersifat indikatif dan dapat berubah setelah diskusi detail.`,
  },
};

// ---- NAV LINKS ----
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Layanan", href: "/services" },
  { label: "Harga", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kontak", href: "/contact" },
];
