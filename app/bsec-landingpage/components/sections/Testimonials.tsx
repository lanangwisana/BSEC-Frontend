import React from 'react'
import { TestimonialRosterItem } from '@/app/bsec-admin-panel/cms/types'
import { resolveMediaUrl } from '@/app/bsec-landingpage/lib/media'

interface TestimonialsProps {
  title?: string
  data?: TestimonialRosterItem[]
}

const defaultTestimonials = [
  {
    name: 'Annisa Rahma',
    role: 'UI - KEDOKTERAN (CLASS OF 2024)',
    content: '"Berkat BSEC, materi UTBK yang tadinya terasa mustahil jadi lebih mudah dipahami. Strategi belajarnya sangat aplikatif dan tentornya asyik diajak diskusi."',
    avatarUrl: '/images/image 2.png',
    avatarInitials: 'AR',
  },
  {
    name: 'Budi Santoso',
    role: 'ITB - STEI (CLASS OF 2025)',
    content: '"Metode belajar interaktif di BSEC benar-benar mengubah cara pandang saya terhadap Matematika. Sekarang nilai saya stabil di atas 90."',
    avatarUrl: '/images/image 3.png',
    avatarInitials: 'BS',
  },
  {
    name: 'Citra Lestari',
    role: 'UGM - TEKNIK SIPIL (CLASS OF 2024)',
    content: '"Tentor di BSEC bukan sekadar pengajar, tapi mentor. Mereka sangat peduli dengan progres setiap siswa. Sangat merekomendasikan bimbel ini!"',
    avatarUrl: '/images/image 1.png',
    avatarInitials: 'CL',
  }
]

const getInitials = (name: string) => {
  if (!name || !name.trim()) return 'AR';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Testimonials: React.FC<TestimonialsProps> = ({ title, data }) => {
  const activeDynamicItems = data
    ? data.filter((item) => item.isActive)
    : []

  const currentDisplayList = activeDynamicItems.length > 0
    ? activeDynamicItems.map((item) => {
        let roleString: string | null = null;
        if (item.targetPtnPassed && item.studentClass) {
          roleString = `${item.targetPtnPassed} (${item.studentClass})`.toUpperCase();
        } else if (item.targetPtnPassed) {
          roleString = item.targetPtnPassed.toUpperCase();
        } else if (item.studentClass) {
          roleString = item.studentClass.toUpperCase();
        }

        return {
          name: item.studentName,
          role: roleString,
          content: `"${item.contentSnippet}"`,
          avatarUrl: item.avatarUrl ? resolveMediaUrl(item.avatarUrl) : null,
          avatarInitials: item.avatarInitials || getInitials(item.studentName),
        }
      })
    : defaultTestimonials

  return (
    <section className="py-24 relative bg-[#1D4ED8] overflow-hidden" id="testimonials">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl text-white text-center mb-16 font-extrabold tracking-tight">
          {title || 'Kisah Sukses Siswa'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentDisplayList.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-md p-8 rounded-[32px] border border-white/20 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                index === 1 ? 'md:scale-105 relative z-10 border-white/40 shadow-2xl' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative shrink-0">
                  {item.avatarUrl ? (
                    <img 
                      alt={item.name} 
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/30" 
                      src={item.avatarUrl}
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-white/20 text-white font-extrabold text-xl flex items-center justify-center ring-2 ring-white/30 shadow-inner">
                      {item.avatarInitials}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-extrabold text-xl text-white">{item.name}</h4>
                  {item.role && (
                    <p className="text-xs text-[#dbeafe] font-semibold uppercase tracking-wider mt-0.5">
                      {item.role}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-base italic text-white/90 leading-relaxed flex-grow font-normal">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
