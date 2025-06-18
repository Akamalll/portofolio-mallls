# 🎨 Panduan Kustomisasi Portofolio

Panduan lengkap untuk mengkustomisasi portofolio Mochammad Akmal Humami sesuai kebutuhan Anda.

## 📝 Mengubah Informasi Pribadi

### 1. Hero Section (`src/components/Hero.tsx`)

```typescript
// Ubah informasi utama
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/YOUR_USERNAME', // Ganti dengan username GitHub Anda
    color: 'hover:text-gray-800 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/YOUR_USERNAME', // Ganti dengan username LinkedIn Anda
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:your.email@example.com', // Ganti dengan email Anda
    color: 'hover:text-red-600',
  },
];

// Ubah nama dan deskripsi
<h1>YOUR_NAME</h1>
<h2>YOUR_TITLE</h2>
<p>YOUR_DESCRIPTION</p>
```

### 2. About Section (`src/components/About.tsx`)

```typescript
// Ubah pengalaman kerja
const experiences = [
  {
    year: '2023 - Sekarang',
    title: 'Your Job Title',
    company: 'Your Company',
    description: 'Your job description',
  },
  // Tambah pengalaman lainnya...
];

// Ubah keahlian
const skills = [
  {
    icon: Code,
    title: 'Your Skill Category',
    description: 'Your skills description',
    color: 'from-blue-500 to-cyan-500',
  },
  // Tambah keahlian lainnya...
];
```

### 3. Skills Section (`src/components/Skills.tsx`)

```typescript
// Ubah level keahlian
const skillCategories = [
  {
    title: 'Your Category',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Skill Name', level: 90 }, // Ubah level (0-100)
      // Tambah skill lainnya...
    ],
  },
];
```

### 4. Projects Section (`src/components/Projects.tsx`)

```typescript
// Tambah proyek baru
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description',
    image: 'YOUR_IMAGE_URL',
    category: 'web', // web, mobile, iot, data, ai
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'YOUR_LIVE_URL',
    githubUrl: 'YOUR_GITHUB_URL',
    featured: true, // true untuk proyek unggulan
  },
  // Tambah proyek lainnya...
];
```

### 5. Contact Section (`src/components/Contact.tsx`)

```typescript
// Ubah informasi kontak
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    title: 'Telepon',
    value: '+62 812-3456-7890',
    href: 'tel:+6281234567890',
  },
  {
    icon: MapPin,
    title: 'Lokasi',
    value: 'Your City, Country',
    href: '#',
  },
];
```

### 6. Testimonials Section (`src/components/Testimonials.tsx`)

```typescript
// Tambah testimonial baru
const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    position: 'Client Position',
    company: 'Client Company',
    image: 'CLIENT_IMAGE_URL',
    content: 'Client testimonial text',
    rating: 5, // 1-5 stars
  },
  // Tambah testimonial lainnya...
];
```

## 🎨 Mengubah Desain & Warna

### 1. Color Palette (`tailwind.config.js`)

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... ubah warna primary
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          // ... ubah warna secondary
        },
      },
    },
  },
};
```

### 2. Gradient Colors

Cari dan ganti gradient colors di komponen:

```typescript
// Contoh gradient yang bisa digunakan
'from-blue-500 to-purple-600'; // Blue to Purple
'from-green-500 to-emerald-500'; // Green to Emerald
'from-orange-500 to-red-500'; // Orange to Red
'from-yellow-500 to-orange-500'; // Yellow to Orange
'from-indigo-500 to-purple-500'; // Indigo to Purple
'from-pink-500 to-rose-500'; // Pink to Rose
```

### 3. Font Family

```javascript
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'], // Ganti dengan font yang diinginkan
},
```

## 📱 Menambah Section Baru

### 1. Buat Komponen Baru

```typescript
// src/components/NewSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const NewSection: React.FC = () => {
  return (
    <section id="new-section" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* Your content here */}</div>
    </section>
  );
};

export default NewSection;
```

### 2. Tambah ke App.tsx

```typescript
import NewSection from './components/NewSection';

// Di dalam main
<main>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <NewSection /> {/* Tambah di sini */}
  <Testimonials />
  <Contact />
</main>;
```

### 3. Tambah ke Navigasi

```typescript
// src/components/Header.tsx
const navItems = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'New Section', href: '#new-section' }, // Tambah di sini
  { name: 'Kontak', href: '#contact' },
];
```

## 🔧 Fitur Advanced

### 1. Menambah Animasi Custom

```typescript
// Di komponen
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }} // Custom hover effect
>
  {/* Content */}
</motion.div>
```

### 2. Menambah Interaksi

```typescript
// Contoh: Modal, Tooltip, dll
const [isModalOpen, setIsModalOpen] = useState(false);

<motion.button onClick={() => setIsModalOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  Open Modal
</motion.button>;
```

### 3. Menambah Form Handling

```typescript
// Contoh: Form submission dengan API
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Success handling
    }
  } catch (error) {
    // Error handling
  }
};
```

## 📊 Analytics & SEO

### 1. Menambah Google Analytics

```typescript
// Di index.html atau komponen
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. SEO Meta Tags

```typescript
// Di public/index.html
<meta name="description" content="Your portfolio description" />
<meta name="keywords" content="your, keywords, here" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your portfolio description" />
<meta property="og:image" content="your-image-url.jpg" />
```

## 🚀 Deployment

### 1. Build untuk Production

```bash
npm run build
```

### 2. Deploy ke Vercel

```bash
npm install -g vercel
vercel
```

### 3. Deploy ke Netlify

- Upload folder `build` ke Netlify
- Atau connect dengan GitHub repository

## 📚 Tips & Best Practices

1. **Gunakan TypeScript** untuk type safety
2. **Optimize images** dengan format WebP
3. **Lazy load** komponen yang berat
4. **Test responsiveness** di berbagai device
5. **Optimize performance** dengan React.memo dan useMemo
6. **Gunakan semantic HTML** untuk accessibility
7. **Add loading states** untuk better UX

## 🐛 Troubleshooting

### Common Issues:

1. **Dark mode tidak bekerja**: Pastikan `darkMode: 'class'` di tailwind.config.js
2. **Animasi tidak smooth**: Cek apakah Framer Motion terinstall dengan benar
3. **Responsive issues**: Gunakan Tailwind breakpoints dengan benar
4. **Build errors**: Cek TypeScript types dan dependencies

### Debug Tips:

- Gunakan React Developer Tools
- Cek console untuk errors
- Test di incognito mode
- Clear cache browser
