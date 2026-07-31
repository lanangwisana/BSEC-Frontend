import { NavItem, Program, Advantage, Testimonial } from '@/app/bsec-landingpage/types'

export const navItems: NavItem[] = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Program', href: '#program' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

export const programs: Program[] = [
  {
    id: 'sd',
    title: 'Program SD',
    description: 'Membangun fondasi akademik yang kuat dengan metode belajar menyenangkan untuk kelas 1-6 SD',
    icon: '🎒',
    age: 'Kelas 1-6 SD',
    href: '#',
  },
  {
    id: 'smp',
    title: 'Program SMP',
    description: 'Persiapan menghadapi ujian sekolah dan penguatan konsep untuk kelas 7-9 SMP',
    icon: '📚',
    age: 'Kelas 7-9 SMP',
    href: '#',
  },
  {
    id: 'sma-reguler',
    title: 'Program SMA Reguler',
    description: 'Pendampingan belajar intensif untuk kelas 10-12 SMA dengan kurikulum terbaru',
    icon: '📖',
    age: 'Kelas 10-12 SMA',
    href: '#',
  },
  {
    id: 'snbt',
    title: 'Persiapan SNBT',
    description: 'Program khusus persiapan SNBT dengan tryout berkala dan pembahasan soal terupdate',
    icon: '🎯',
    age: 'Siswa kelas 12 & Alumni',
    href: '#',
  },
]

export const advantages: Advantage[] = [
  {
    id: 'mentor',
    title: 'Mentor Berpengalaman',
    description: 'Diajar oleh tutor lulusan PTN ternama yang ahli di bidangnya',
    icon: '👨‍🏫',
  },
  {
    id: 'modul',
    title: 'Modul Terstruktur',
    description: 'Materi pembelajaran tersusun sistematis dan mudah dipahami',
    icon: '📑',
  },
  {
    id: 'tryout',
    title: 'Tryout Berkala',
    description: 'Evaluasi rutin dengan sistem penilaian dan analisis detail',
    icon: '📝',
  },
  {
    id: 'monitoring',
    title: 'Monitoring Perkembangan',
    description: 'Laporan perkembangan belajar siswa setiap bulan untuk orang tua',
    icon: '📊',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmad Fauzi',
    role: 'Orang Tua Siswa',
    content: 'Anak saya sangat terbantu dengan bimbingan di BSEC. Nilainya meningkat drastis dan lebih percaya diri menghadapi ujian.',
    avatar: '/images/avatar1.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    role: 'Siswi SMA',
    content: 'Metode belajarnya asyik dan gak membosankan. Mentornya sabar dan selalu siap membantu. Recommended banget!',
    avatar: '/images/avatar2.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Budi Santoso',
    role: 'Orang Tua Siswa',
    content: 'BSEC membantu anak saya lolos SNBT di PTN favorit. Terima kasih BSEC!',
    avatar: '/images/avatar3.jpg',
    rating: 5,
  },
]
