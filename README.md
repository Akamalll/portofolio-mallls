# 🚀 Portofolio Mochammad Akmal Humami

Portofolio pribadi yang modern dan responsif untuk menampilkan keahlian, proyek, dan pengalaman sebagai Full Stack Developer.

## ✨ Fitur Utama

### 🎨 **Design & UI/UX**

- **Responsive Design** - Optimal di semua perangkat (desktop, tablet, mobile)
- **Dark Mode** - Toggle antara mode terang dan gelap dengan preferensi yang tersimpan
- **Modern Animations** - Animasi smooth menggunakan Framer Motion
- **Glass Morphism** - Efek visual modern dengan backdrop blur
- **Gradient Design** - Warna-warna gradient yang menarik

### 🛠️ **Teknologi & Fitur**

- **React 19** - Framework JavaScript modern
- **TypeScript** - Type safety dan developer experience yang lebih baik
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Library animasi yang powerful
- **Lucide React** - Icon library yang modern
- **Smooth Scrolling** - Navigasi yang halus antar section

### 📱 **Komponen Utama**

1. **Header** - Navigasi responsif dengan dark mode toggle
2. **Hero Section** - Landing page yang menarik dengan CTA buttons
3. **About Section** - Informasi pribadi dan keahlian
4. **Projects Section** - Showcase proyek dengan filter kategori
5. **Contact Section** - Form kontak dan informasi kontak
6. **Footer** - Informasi tambahan dan social links

### 🎯 **Fitur Interaktif**

- **Project Filtering** - Filter proyek berdasarkan kategori
- **Contact Form** - Form kontak dengan validasi dan feedback
- **Social Links** - Link ke platform sosial media
- **Smooth Navigation** - Scroll smooth ke section yang dituju
- **Loading States** - Indikator loading untuk form submission

## 🚀 Cara Menjalankan

### Prerequisites

- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd portofolio-mallls

# Install dependencies
npm install

# Jalankan development server
npm start
```

### Build untuk Production

```bash
npm run build
```

## 📁 Struktur Proyek

```
src/
├── components/
│   ├── Header.tsx          # Navigasi dan dark mode toggle
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # Informasi pribadi dan skills
│   ├── Projects.tsx       # Showcase proyek
│   ├── Contact.tsx        # Form kontak
│   └── Footer.tsx         # Footer dengan social links
├── App.tsx                # Main component
├── index.tsx              # Entry point
└── index.css              # Global styles
```

## 🎨 Customization

### Mengubah Informasi Pribadi

1. Edit file `Hero.tsx` untuk mengubah nama dan deskripsi
2. Update `About.tsx` untuk mengubah skills dan pengalaman
3. Modifikasi `Projects.tsx` untuk menambah/mengubah proyek
4. Update `Contact.tsx` untuk mengubah informasi kontak

### Mengubah Warna

1. Edit `tailwind.config.js` untuk mengubah color palette
2. Update gradient colors di komponen yang relevan

### Menambah Section Baru

1. Buat komponen baru di folder `components/`
2. Import dan tambahkan ke `App.tsx`
3. Update navigasi di `Header.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Fitur Advanced

### Dark Mode

- Otomatis mendeteksi preferensi sistem
- Tersimpan di localStorage
- Smooth transition antar mode

### Animations

- Scroll-triggered animations
- Hover effects
- Loading animations
- Page transitions

### Performance

- Lazy loading untuk images
- Optimized animations
- Efficient re-renders

## 🔧 Dependencies

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "typescript": "^4.9.5",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.400.0",
  "tailwindcss": "^3.4.0"
}
```

## 📄 License

MIT License - bebas untuk digunakan dan dimodifikasi.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk saran dan perbaikan.

## 📞 Kontak

- **Email**: ahumami22@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/mochakmalhumami/
- **GitHub**: https://github.com/akamalll

---

⭐ **Star repository ini jika Anda menyukainya!**
