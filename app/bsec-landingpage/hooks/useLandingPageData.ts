'use client';

import { useState, useEffect } from 'react';
import { FullLandingPageData } from '../../bsec-admin-panel/cms/types';

export function useLandingPageData() {
  const [data, setData] = useState<FullLandingPageData>({
    hero: {
      taglineBadge: 'Bimbel No. 1 di Indonesia',
      headline: 'Wujudkan Prestasi Akademik Terbaik Bersama BSEC',
      subHeadline:
        'Metode belajar cerdas untuk hasil maksimal. Kami membantu ribuan siswa meraih mimpi masuk sekolah dan perguruan tinggi favorit.',
      ctaLabel: 'Daftar Kelas Trial',
      ctaRedirectUrl: '#daftar',
      ctaSecondaryLabel: 'Tanya via WhatsApp',
      ctaSecondaryUrl: 'https://wa.me/6281234567890',
      assetFileName: 'hero-banner-2026.png',
      assetHint: 'PNG, JPG up to 10MB',
      assetMediaUrl: '/images/image 1.png',
      isVisible: true,
    },
    programCategories: [
      { id: 'sd', name: 'Program SD', sortOrder: 1 },
      { id: 'smp', name: 'Program SMP', sortOrder: 2 },
      { id: 'sma', name: 'Program SMA', sortOrder: 3 },
      { id: 'utbk', name: 'Intensif UTBK/SNBT', sortOrder: 4 },
    ],
    programs: [
      { id: 'p-1', categoryId: 'sd', title: 'Matematika SD', description: 'Fokus pada konsep dasar dan pemecahan masalah kreatif.', priceFormatted: 'Rp 450k/bln', iconName: 'calculate', targetAge: 'Kelas 1-6 SD', isActive: true, sortOrder: 1 },
      { id: 'p-2', categoryId: 'sd', title: 'IPA Dasar', description: 'Eksperimen seru untuk mengenali fenomena alam sekitar.', priceFormatted: 'Rp 450k/bln', iconName: 'biotech', targetAge: 'Kelas 1-6 SD', isActive: true, sortOrder: 2 },
      { id: 'p-3', categoryId: 'sd', title: 'Bahasa Inggris SD', description: 'Membangun kepercayaan diri berbicara sejak dini.', priceFormatted: 'Rp 500k/bln', iconName: 'language', targetAge: 'Kelas 1-6 SD', isActive: true, sortOrder: 3 },
      { id: 'p-4', categoryId: 'smp', title: 'Persiapan UN SMP', description: 'Latihan soal intensif dan pembahasan materi tuntas.', priceFormatted: 'Rp 650k/bln', iconName: 'assignment', targetAge: 'Kelas 7-9 SMP', isActive: true, sortOrder: 4 },
      { id: 'p-5', categoryId: 'smp', title: 'Matematika Lanjut', description: 'Aljabar dan geometri dengan cara yang menyenangkan.', priceFormatted: 'Rp 600k/bln', iconName: 'functions', targetAge: 'Kelas 7-9 SMP', isActive: true, sortOrder: 5 },
      { id: 'p-6', categoryId: 'sma', title: 'Matematika Wajib', description: 'Kupas tuntas materi sekolah dan tugas harian.', priceFormatted: 'Rp 750k/bln', iconName: 'draw', targetAge: 'Kelas 10-12 SMA', isActive: true, sortOrder: 6 },
      { id: 'p-7', categoryId: 'utbk', title: 'TPS Intensif', description: 'Trik cepat mengerjakan soal Penalaran Umum.', priceFormatted: 'Rp 1.2jt/pkt', iconName: 'speed', targetAge: 'Siswa kelas 12 & Alumni', isActive: true, sortOrder: 7 },
    ],
    testimonials: [
      {
        id: 't-1',
        order: 1,
        studentName: 'Annisa Rahma',
        studentClass: 'Class of 2024',
        avatarInitials: 'AR',
        targetPtnPassed: 'UI - Kedokteran',
        contentSnippet: '"Berkat BSEC, materi UTBK yang tadinya terasa mustahil jadi lebih mudah dipahami. Strategi belajarnya sangat aplikatif dan tentornya asyik diajak diskusi."',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSsQeRbpozxTto5SMsu1B0JGDl3CbMkrKaH_eJlbNLmg2glQYGHU_X1e4zm9h_FWwKIE_FErsVAV8eBDc_RZ4X1Tu5jbKZ2MXEDh8shGUGQ5VePhJE54ht0pxE3EXhhhle5gejR7W6Nmx5qyvr3Y3LS2Re7h0I3STGO-baDFWqJOFWtKrfF_HIqKd0Av8NKnWdxpC29WaaN4y6xk2BxuZQSEwFTRO8I-YPowIZ3k9xv9N3_jSSlIH8',
        isActive: true,
      },
      {
        id: 't-2',
        order: 2,
        studentName: 'Budi Santoso',
        studentClass: 'Class of 2025',
        avatarInitials: 'BS',
        targetPtnPassed: 'ITB - STEI',
        contentSnippet: '"Metode belajar interaktif di BSEC benar-benar mengubah cara pandang saya terhadap Matematika. Sekarang nilai saya stabil di atas 90."',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEZDkY6Vp2nfBJEgsFr85y7hUYoFvaY0WLHfjbmtd6iiDCzyROX6hjWrvCPEArkDfByuGYoUgVOv5N8-rBeezXDgLbQ5Z60_QFACNYJ0gwTNoKpPy8yHLbyR5ewvABRoFhf1Raxst_ERIlj8Sp35DNa1wN--RW4zcVXK5ZGiDLz2Hsqt6RuCtdV47zRPyTMjN44JFXPj_rdS_OtqZBY-aWydDA3EvHKaSXVVMPueb94AC3iJh8ZjoN',
        isActive: true,
      },
      {
        id: 't-3',
        order: 3,
        studentName: 'Citra Lestari',
        studentClass: 'Class of 2024',
        avatarInitials: 'CL',
        targetPtnPassed: 'UGM - Teknik Sipil',
        contentSnippet: '"Tentor di BSEC bukan sekadar pengajar, tapi mentor. Mereka sangat peduli dengan progres setiap siswa. Sangat merekomendasikan bimbel ini!"',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5AZ2zse8ELDpke3UhZlRgYbtNriUKgGxTXrE7JNAereVBJ0bdwZDMD_kfC3icgWva2ja4xhwiqyxVe6oT-JDG-qlZ8sTUu99QoTEB2YHUZCQeY-1JWm3iLZXwMrSpFuDRTHTBg89y5SXunohc37wTW5lQJNGoe1hOmuIT1B6sjbjDL2KTgFVsncrUw78ua9K_J6-Iu9PGetFfXfcvOi53IHpaEgCnj7XfvhjCT8ZQOnMylgpbrI57',
        isActive: true,
      },
    ],
    about: {
      title: 'Tentang BSEC',
      subtitle: 'Bimbingan belajar profesional yang berkomitmen mencetak generasi unggul',
      descriptionParagraph1:
        'BSEC (Brown Smart Education Center) hadir sebagai solusi pendidikan terpercaya bagi siswa SD, SMP, dan SMA di Indonesia. Dengan metode pembelajaran yang terstruktur dan mentor berpengalaman, kami membantu siswa meraih prestasi akademik terbaik.',
      descriptionParagraph2:
        'Didirikan pada tahun 2014, BSEC telah membantu lebih dari 500 siswa mencapai target akademik mereka, termasuk lolos ke PTN favorit melalui jalur SNBT.',
      visionText:
        'Menjadi pusat bimbingan belajar terdepan yang mencetak generasi unggul dan berprestasi di Indonesia.',
      missions: [
        'Menyediakan pendidikan berkualitas dengan metode pembelajaran inovatif',
        'Mengembangkan potensi akademik dan karakter siswa secara optimal',
        'Menciptakan lingkungan belajar yang nyaman dan menyenangkan',
        'Membantu siswa meraih prestasi tertinggi dalam setiap jenjang pendidikan',
      ],
      highlights: [
        { icon: 'school', number: '10+', label: 'Tahun Pengalaman' },
        { icon: 'groups', number: '500+', label: 'Siswa Berprestasi' },
        { icon: 'star', number: '95%', label: 'Kepuasan Siswa' },
      ],
    },
    advantages: [
      { id: 'a-1', iconName: 'school', title: 'Mentor Berpengalaman', description: 'Diajar oleh tutor lulusan PTN ternama yang ahli di bidangnya', sortOrder: 1 },
      { id: 'a-2', iconName: 'map', title: 'Modul Terstruktur', description: 'Materi pembelajaran tersusun sistematis dan mudah dipahami', sortOrder: 2 },
      { id: 'a-3', iconName: 'rocket_launch', title: 'Tryout Berkala', description: 'Evaluasi rutin dengan sistem penilaian dan analisis detail', sortOrder: 3 },
      { id: 'a-4', iconName: 'groups', title: 'Monitoring Perkembangan', description: 'Laporan perkembangan belajar siswa setiap bulan untuk orang tua', sortOrder: 4 },
    ],
    footer: {
      aboutText: 'Menciptakan generasi cerdas, berkarakter, dan siap menghadapi tantangan masa depan melalui sistem pendidikan modern.',
      companyAddress: 'Jl. Pendidikan Modern No. 42, Jakarta Selatan',
      companyPhone: '(021) 1234-5678',
      companyEmail: 'info@bsec.com',
      socialLinks: {
        facebook: '#',
        instagram: '#',
        youtube: '#',
        twitter: '#',
      },
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLandingPageData() {
      setLoading(true);
      try {
        const res = await fetch('/api/landing-page');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (err) {
        // Fallback gracefully
      } finally {
        setLoading(false);
      }
    }

    fetchLandingPageData();
  }, []);

  return { data, loading };
}
