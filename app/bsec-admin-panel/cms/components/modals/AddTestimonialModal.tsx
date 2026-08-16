import React from 'react';
import { X } from 'lucide-react';

interface AddTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonialForm: {
    studentName: string;
    targetPtnPassed: string;
    contentSnippet: string;
    studentClass: string;
    avatarInitials: string;
  };
  setTestimonialForm: React.Dispatch<
    React.SetStateAction<{
      studentName: string;
      targetPtnPassed: string;
      contentSnippet: string;
      studentClass: string;
      avatarInitials: string;
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
  if (!isOpen) return null;

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
              placeholder="Contoh: Annisa Rahma"
              value={testimonialForm.studentName}
              onChange={(e) => setTestimonialForm({ ...testimonialForm, studentName: e.target.value })}
              className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Lulus PTN / Sekolah Target</label>
              <input
                type="text"
                placeholder="UI - Kedokteran"
                value={testimonialForm.targetPtnPassed}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, targetPtnPassed: e.target.value })}
                className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Angkatan / Class</label>
              <input
                type="text"
                placeholder="Class of 2024"
                value={testimonialForm.studentClass}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, studentClass: e.target.value })}
                className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              />
            </div>
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
              className="px-4 py-2 text-xs font-bold bg-[#1D4ED8] hover:bg-[#1e40af] text-white rounded-xl shadow-xs cursor-pointer"
            >
              Simpan Testimoni
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
