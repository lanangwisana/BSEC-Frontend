import React from 'react'

const CTA = () => {
  return (
    <section className="py-24" id="daftar">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-primary overflow-hidden rounded-[32px] shadow-2xl flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 p-12 flex flex-col justify-center text-white">
            <h2 className="font-display-lg text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Mulai Perjalanan Prestasimu Sekarang</h2>
            <p className="font-body-lg text-lg opacity-90 mb-8">Dapatkan jadwal konsultasi gratis dan rancang strategi belajar terbaik bersama tim ahli kami.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                <span className="font-semibold">Tes Diagnostik Kemampuan Gratis</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                <span className="font-semibold">Laporan Progres Belajar Real-time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                <span className="font-semibold">Akses Bank Soal Terlengkap</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-12 bg-white/5 backdrop-blur-sm flex items-center">
            <div className="bg-white p-8 rounded-2xl w-full shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Nama Lengkap</label>
                  <input className="w-full border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none text-primary" placeholder="Masukkan nama Anda" type="text"/>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Jenjang Pendidikan</label>
                  <select className="w-full border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none bg-white text-primary">
                    <option>SD</option>
                    <option>SMP</option>
                    <option>SMA</option>
                    <option>Lulus SMA (Gap Year)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">No. WhatsApp</label>
                  <input className="w-full border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none text-primary" placeholder="081234567XXX" type="tel"/>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 shadow-md transition-all active:scale-95 mt-4" type="button">
                  Daftar Sekarang
                </button>
                <p className="text-center text-xs text-on-surface-variant mt-4 font-semibold">Kami menjamin privasi data Anda.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
