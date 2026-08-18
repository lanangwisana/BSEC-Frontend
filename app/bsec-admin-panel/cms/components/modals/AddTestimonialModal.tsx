import React, { useState } from 'react';
import { X, Upload, Loader2, Trash2 } from 'lucide-react';
import { resolveMediaUrl } from '@/app/bsec-landingpage/lib/media';

interface AddTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonialForm: {
    studentName: string;
    targetPtnPassed: string;
    contentSnippet: string;
    studentClass: string;
    avatarInitials: string;
    avatarUrl?: string;
  };
  setTestimonialForm: React.Dispatch<
    React.SetStateAction<{
      studentName: string;
      targetPtnPassed: string;
      contentSnippet: string;
      studentClass: string;
      avatarInitials: string;
      avatarUrl?: string;
    }>
  >;
  handleCreateTestimonial: (e: React.FormEvent) => void;
}

export const AddTestimonialModal: React.FC<AddTestimonialModalProps> = ({
  isOpen,
  onClose,
  testimonialForm,
  setTestimonialForm,
  handleCreateTestimonial,
}) => {
  const [isUploading, setIsUploading] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api';
    const formData = new FormData();
    formData.append('avatarMedia', file);

    try {
      const res = await fetch(`${apiBase}/admin/cms/upload-avatar-image`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setTestimonialForm((prev) => ({ ...prev, avatarUrl: data.url }));
      } else {
        alert('Upload avatar gagal: ' + (data.message || 'Terjadi kesalahan'));
      }
    } catch (err) {
      console.error(err);
      alert('Tidak dapat terhubung ke server. Pastikan backend aktif.');
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">Tambah Testimoni Siswa Baru</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={handleCreateTestimonial} className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Nama Siswa</label>
            <input
              type="text"
              placeholder="Contoh: Brown Smart"
              value={testimonialForm.studentName}
              onChange={(e) => setTestimonialForm({ ...testimonialForm, studentName: e.target.value })}
              className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Lulus PTN / Sekolah (Opsional)</label>
              <input
                type="text"
                placeholder="e.g. UI - Kedokteran"
                value={testimonialForm.targetPtnPassed}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, targetPtnPassed: e.target.value })}
                className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Angkatan / Class (Opsional)</label>
              <input
                type="text"
                placeholder="e.g. Class of 2024"
                value={testimonialForm.studentClass}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, studentClass: e.target.value })}
                className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Foto Avatar (JPG / PNG - Opsional)</label>
            
            {testimonialForm.avatarUrl ? (
              <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                <img
                  src={resolveMediaUrl(testimonialForm.avatarUrl)}
                  alt="Avatar Preview"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-xs"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-700 truncate">{testimonialForm.avatarUrl}</p>
                  <p className="text-[10px] text-emerald-600 font-bold">Foto terunggah</p>
                </div>
                <button
                  type="button"
                  onClick={() => setTestimonialForm((prev) => ({ ...prev, avatarUrl: '' }))}
                  className="p-1.5 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                  title="Hapus Foto"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-gray-100 text-gray-600 p-2.5 rounded-xl border border-dashed border-gray-300 cursor-pointer transition-all">
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#1D4ED8]" />
                    <span className="text-xs font-semibold">Mengunggah Foto...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-bold">Pilih Berkas Gambar (JPG / PNG)</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/jpg,image/webp"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                  className="hidden"
                />
              </label>
            )}

            <p className="text-[10px] text-gray-400 mt-1">
              Jika foto tidak diunggah, inisial nama siswa akan digunakan otomatis sebagai avatar.
            </p>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Kutipan Testimoni</label>
            <textarea
              rows={3}
              placeholder='&quot;Berkat BSEC materi UTBK jadi lebih mudah...&quot;'
              value={testimonialForm.contentSnippet}
              onChange={(e) => setTestimonialForm({ ...testimonialForm, contentSnippet: e.target.value })}
              className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="px-4 py-2 text-xs font-bold bg-[#1D4ED8] hover:bg-[#1e40af] text-white rounded-xl shadow-xs cursor-pointer disabled:opacity-50"
            >
              Simpan Testimoni
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
