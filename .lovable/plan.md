

# Website Jasa Joki - Personal Branding & Booking

## Ringkasan
Website personal dark premium untuk mempromosikan jasa programming/web dev dan tugas kuliah. Fokus: pengunjung paham layanan → percaya → klik WhatsApp / kirim order.

## Design System: Dark Premium
- **Background**: near-black gradient (#0B0F17 → #05070C) sebagai CSS variables
- **Surface/Card**: charcoal (#0F1623) dengan border tipis transparan
- **Primary accent**: electric cyan/teal (hemat, untuk CTA & highlight)
- **Secondary accent**: purple/magenta halus untuk badge & detail kecil
- **Tipografi**: Inter font, hierarki jelas, spacing lega
- **Komponen**: rounded-2xl, hover micro-interactions, glow pada CTA
- **Dark mode default**, light mode toggle tersedia

## Halaman & Sections

### 1. Home (Landing Page - Single Page)
- **Navbar** sticky dengan highlight section aktif saat scroll + dark mode toggle
- **Hero**: Headline premium + subheadline + CTA WhatsApp (utama) + CTA Lihat Paket (kedua)
- **Trust badges & stats**: jumlah project selesai, rating, response time (realistis, tanpa overclaim)
- **Layanan**: Cards grid menampilkan jasa programming & tugas kuliah
- **Paket & Harga**: Pricing table (Basic / Pro / Premium) + add-ons
- **Portofolio**: Grid dengan filter kategori (Web Dev, Tugas, dll) + modal preview detail
- **Testimoni**: Carousel dengan review realistis
- **Cara Order**: Stepper visual 4 langkah
- **FAQ**: Accordion minimal 8 pertanyaan
- **Footer**: Links, social, kontak

### 2. /services - Detail Layanan
- Penjelasan mendalam tiap layanan + batasan jelas + FAQ per layanan

### 3. /pricing - Paket & Harga
- Tabel paket lengkap + add-ons + kebijakan revisi singkat

### 4. /portfolio - Portofolio
- Grid dengan filter kategori + modal detail project

### 5. /contact - Kontak & Order
- Form order: nama, jenis layanan, deadline, deskripsi, link file
- Validasi Zod + error message rapi
- Submit → toast "request terkirim"
- CTA WhatsApp di samping form

### 6. /legal - Kebijakan
- Privacy policy, revision policy, refund policy, disclaimer (ringkas & profesional)

## Fitur Interaktif
- **Floating WhatsApp button** di semua halaman
- **Dark mode toggle** (default dark)
- **Estimator tool**: input jenis layanan + tingkat kesulitan + deadline → output range harga + estimasi waktu + alasan singkat (transparansi)
- **Scroll animations**: fade-in, slide-up (ringan, bukan rame)
- **Hover effects**: lift, glow pada cards & CTA

## Konten & Data
- Semua copywriting (headline, deskripsi layanan, paket, testimoni, FAQ, kebijakan) dibuat langsung dalam file `data/site.ts`
- Konten realistis & profesional, tanpa klaim berlebihan

## Komponen yang Dibangun
- Navbar, Hero, ServiceCards, PricingTable, PortfolioGrid + Modal, TestimonialsCarousel, OrderStepper, FAQAccordion, Estimator, ContactForm, Footer, FloatingWhatsApp, DarkModeToggle

## Tech Notes
- Tetap menggunakan Vite + React + TypeScript yang sudah ada
- Tailwind CSS untuk styling dengan custom CSS variables (dark premium palette)
- Framer Motion untuk animasi scroll-reveal & micro-interactions
- shadcn/ui components yang sudah terinstall
- react-hook-form + zod untuk validasi form
- next-themes untuk dark mode toggle
- lucide-react untuk ikon
- Responsif dari 360px sampai desktop (mobile-first)
- Aksesibilitas: focus states, aria labels, kontras memadai

