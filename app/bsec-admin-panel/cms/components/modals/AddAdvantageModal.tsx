import React from 'react';
import { X } from 'lucide-react';

interface AddAdvantageModalProps {
  isOpen: boolean;
  onClose: () => void;
  advantageForm: {
    title: string;
    description: string;
    iconName: string;
  };
  setAdvantageForm: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      iconName: string;
    }>
  >;
  handleCreateAdvantage: (e: React.FormEvent) => void;
}

export const AddAdvantageModal: React.FC<AddAdvantageModalProps> = ({
  isOpen,
  onClose,
  advantageForm,
  setAdvantageForm,
  handleCreateAdvantage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">Tambah Poin Keunggulan BSEC</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={handleCreateAdvantage} className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Judul Keunggulan</label>
            <input
              type="text"
              placeholder="Contoh: Mentor Berpengalaman"
              value={advantageForm.title}
              onChange={(e) => setAdvantageForm({ ...advantageForm, title: e.target.value })}
              className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Deskripsi</label>
            <textarea
              rows={2}
              placeholder="Deskripsi singkat keunggulan..."
              value={advantageForm.description}
              onChange={(e) => setAdvantageForm({ ...advantageForm, description: e.target.value })}
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
              Simpan Keunggulan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
