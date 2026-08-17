import React from 'react';
import { X } from 'lucide-react';
import { ProgramCategory } from '../../types';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategoryName: string;
  productForm: {
    title: string;
    description: string;
    priceFormatted: string;
    iconName: string;
    targetAge: string;
    learningObjectives: string;
    learningFocus: string;
  };
  setProductForm: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      priceFormatted: string;
      iconName: string;
      targetAge: string;
      learningObjectives: string;
      learningFocus: string;
    }>
  >;
  handleCreateProduct: (e: React.FormEvent) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  selectedCategoryName,
  productForm,
  setProductForm,
  handleCreateProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-gray-100 space-y-4 my-8">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">
            Tambah Produk Turunan di &quot;{selectedCategoryName}&quot;
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={handleCreateProduct} className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Judul Kelas / Program</label>
            <input
              type="text"
              placeholder="Contoh: Matematika SD / TPS Intensif"
              value={productForm.title}
              onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
              className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Deskripsi Singkat</label>
            <textarea
              rows={2}
              placeholder="Deskripsi materi dan keunggulan kelas..."
              value={productForm.description}
              onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
              className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Harga (Formatted)</label>
              <input
                type="text"
                placeholder="Rp 450k/bln"
                value={productForm.priceFormatted}
                onChange={(e) => setProductForm({ ...productForm, priceFormatted: e.target.value })}
                className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Target Usia / Kelas</label>
              <input
                type="text"
                placeholder="Kelas 1-6 SD"
                value={productForm.targetAge}
                onChange={(e) => setProductForm({ ...productForm, targetAge: e.target.value })}
                className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Tujuan Pembelajaran (Learning Objectives)</label>
            <textarea
              rows={2}
              placeholder="Contoh: Menguasai konsep dasar matematika, siap menghadapi Ujian Sekolah dengan percaya diri..."
              value={productForm.learningObjectives || ''}
              onChange={(e) => setProductForm({ ...productForm, learningObjectives: e.target.value })}
              className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Fokus Pembelajaran (Learning Focus)</label>
            <textarea
              rows={2}
              placeholder="Contoh: Penalaran Logis, Latihan Soal Intensif, Pemecahan Masalah Kreatif..."
              value={productForm.learningFocus || ''}
              onChange={(e) => setProductForm({ ...productForm, learningFocus: e.target.value })}
              className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
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
              Simpan Produk Kelas
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
