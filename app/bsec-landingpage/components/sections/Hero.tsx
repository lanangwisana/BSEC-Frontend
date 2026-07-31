import React from 'react'

const Hero = () => {
  return (
    <section className="hero-gradient overflow-hidden pt-20">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">
        <div className="space-y-6 animate-fade-in-up">
          <div className="flex items-center gap-2 bg-secondary-container/30 w-fit px-3 py-1 rounded-full text-on-secondary-container">
            <div className="flex text-yellow-500">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <span className="text-sm font-semibold tracking-wide">Bimbel No. 1 di Indonesia</span>
          </div>
          
          <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-primary font-extrabold leading-tight tracking-tight">
            Wujudkan Prestasi Akademik Terbaik Bersama BSEC
          </h1>
          
          <p className="font-body-lg text-lg text-on-surface-variant max-w-lg">
            Metode belajar cerdas untuk hasil maksimal. Kami membantu ribuan siswa meraih mimpi masuk sekolah dan perguruan tinggi favorit.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all active:scale-95">
              Daftar Kelas Trial
            </button>
            <button className="bg-surface-container-lowest border border-outline-variant text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface-container-low transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">chat</span>
              Tanya via WhatsApp
            </button>
          </div>
        </div>
        
        <div className="relative group lg:ml-10">
          <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl group-hover:bg-primary/10 transition-all duration-700"></div>
          <div className="relative bg-white p-4 rounded-3xl shadow-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
            <img 
              alt="Students collaborating" 
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfUaFmB9Q8RFWS2pLuZZXyEUIBuZg0kF1utgp3b4MKEx2IXz39lb3rhGpZH-0-R1Fg2nOCDijgWkNp7dhzVvjKezhnK42GJ_1J0_uuPBG2ZsJ9uNqjYdlfNN_Y6e893_FjlN51iG3YbGb_Kgo8K3klipA65xdW9WWIoD0qoEsVT3pAZ9v3FnF_9VY5R6MWJ2A9-561CMX3hVdce6n0qn7l84iApkIBFGX2J9M0GN9j5KG3Rg3jndn_"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
