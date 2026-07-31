import React from 'react'

const testimonialsData = [
  {
    name: 'Annisa Rahma',
    role: 'Lolos Kedokteran UI',
    content: '"Berkat BSEC, materi UTBK yang tadinya terasa mustahil jadi lebih mudah dipahami. Strategi belajarnya sangat aplikatif dan tentornya asyik diajak diskusi."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSsQeRbpozxTto5SMsu1B0JGDl3CbMkrKaH_eJlbNLmg2glQYGHU_X1e4zm9h_FWwKIE_FErsVAV8eBDc_RZ4X1Tu5jbKZ2MXEDh8shGUGQ5VePhJE54ht0pxE3EXhhhle5gejR7W6Nmx5qyvr3Y3LS2Re7h0I3STGO-baDFWqJOFWtKrfF_HIqKd0Av8NKnWdxpC29WaaN4y6xk2BxuZQSEwFTRO8I-YPowIZ3k9xv9N3_jSSlIH8'
  },
  {
    name: 'Budi Santoso',
    role: 'Siswa SMA 8 Jakarta',
    content: '"Metode belajar interaktif di BSEC benar-benar mengubah cara pandang saya terhadap Matematika. Sekarang nilai saya stabil di atas 90."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEZDkY6Vp2nfBJEgsFr85y7hUYoFvaY0WLHfjbmtd6iiDCzyROX6hjWrvCPEArkDfByuGYoUgVOv5N8-rBeezXDgLbQ5Z60_QFACNYJ0gwTNoKpPy8yHLbyR5ewvABRoFhf1Raxst_ERIlj8Sp35DNa1wN--RW4zcVXK5ZGiDLz2Hsqt6RuCtdV47zRPyTMjN44JFXPj_rdS_OtqZBY-aWydDA3EvHKaSXVVMPueb94AC3iJh8ZjoN'
  },
  {
    name: 'Citra Lestari',
    role: 'Juara OSN Fisika',
    content: '"Tentor di BSEC bukan sekadar pengajar, tapi mentor. Mereka sangat peduli dengan progres setiap siswa. Sangat merekomendasikan bimbel ini!"',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5AZ2zse8ELDpke3UhZlRgYbtNriUKgGxTXrE7JNAereVBJ0bdwZDMD_kfC3icgWva2ja4xhwiqyxVe6oT-JDG-qlZ8sTUu99QoTEB2YHUZCQeY-1JWm3iLZXwMrSpFuDRTHTBg89y5SXunohc37wTW5lQJNGoe1hOmuIT1B6sjbjDL2KTgFVsncrUw78ua9K_J6-Iu9PGetFfXfcvOi53IHpaEgCnj7XfvhjCT8ZQOnMylgpbrI57'
  }
]

const Testimonials = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="testimoni">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="font-headline-lg text-3xl md:text-4xl text-primary text-center mb-16 font-bold">Kisah Sukses Siswa</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, index) => (
            <div key={index} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-fixed" 
                  src={item.avatar}
                />
                <div>
                  <h4 className="font-bold text-primary text-lg">{item.name}</h4>
                  <p className="text-sm font-semibold text-secondary">{item.role}</p>
                </div>
              </div>
              <p className="text-base italic text-on-surface-variant flex-grow leading-relaxed">
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
