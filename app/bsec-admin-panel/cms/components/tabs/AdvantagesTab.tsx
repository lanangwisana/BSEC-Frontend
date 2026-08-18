import React, { useState } from 'react';
import { Plus, Trash2, Pencil, Check, X } from 'lucide-react';
import { AdvantageCmsItem } from '../../types';

interface AdvantagesTabProps {
  advantagesTitle: string;
  setAdvantagesTitle: (val: string) => void;
  advantagesSubtitle: string;
  setAdvantagesSubtitle: (val: string) => void;
  advantages: AdvantageCmsItem[];
  updateAdvantage?: (id: string, updated: Partial<AdvantageCmsItem>) => void;
  deleteAdvantage: (id: string) => void;
  onOpenAddAdvantageModal: () => void;
}

export const AdvantagesTab: React.FC<AdvantagesTabProps> = ({
  advantagesTitle,
  setAdvantagesTitle,
  advantagesSubtitle,
  setAdvantagesSubtitle,
  advantages,
  updateAdvantage,
  deleteAdvantage,
  onOpenAddAdvantageModal,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{
    title: string;
    description: string;
    iconName: string;
  }>({
    title: '',
    description: '',
    iconName: 'star',
  });

const ADVANTAGE_PRESET_ICONS = [
  'school',
  'map',
  'rocket_launch',
  'groups',
  'star',
  'workspace_premium',
  'psychology',
  'verified',
  'auto_awesome',
  'menu_book',
];

  const handleStartEdit = (adv: AdvantageCmsItem) => {
    const randomIcon = ADVANTAGE_PRESET_ICONS[Math.floor(Math.random() * ADVANTAGE_PRESET_ICONS.length)];
    setEditingId(adv.id);
    setEditForm({
      title: adv.title,
      description: adv.description,
      iconName: adv.iconName || randomIcon,
    });
  };

  const handleSaveEdit = (id: string) => {
    if (updateAdvantage && editForm.title.trim()) {
      updateAdvantage(id, {
        title: editForm.title.trim(),
        description: editForm.description.trim(),
        iconName: editForm.iconName.trim() || 'star',
      });
    }
    setEditingId(null);
  };

  return (
    <div className="space-y-5">
      <div className="pb-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900 tracking-tight">
          BSEC Key Advantages Content
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase">
            Advantages Title
          </label>
          <input
            type="text"
            value={advantagesTitle}
            onChange={(e) => setAdvantagesTitle(e.target.value)}
            className="w-full bg-gray-50 text-xs p-3 rounded-xl border border-gray-200 font-semibold"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase">
            Advantages Subtitle
          </label>
          <input
            type="text"
            value={advantagesSubtitle}
            onChange={(e) => setAdvantagesSubtitle(e.target.value)}
            className="w-full bg-gray-50 text-xs p-3 rounded-xl border border-gray-200 font-semibold"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Poin Keunggulan BSEC (Advantages)
        </h3>
        <button
          type="button"
          onClick={onOpenAddAdvantageModal}
          className="flex items-center gap-1.5 bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#dbeafe] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Tambah Keunggulan</span>
        </button>
      </div>

      <div className="space-y-3">
        {advantages.map((adv) =>
          editingId === adv.id ? (
            <div
              key={adv.id}
              className="p-4 bg-white rounded-xl border-2 border-[#1D4ED8] shadow-md space-y-3"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-xs font-bold text-[#1D4ED8]">
                  Edit Poin Keunggulan
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSaveEdit(adv.id)}
                    className="bg-[#1D4ED8] text-white px-3 py-1 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Simpan</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Batal</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">
                    Judul Keunggulan
                  </label>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                    className="w-full bg-gray-50 text-xs font-bold p-2 rounded-lg border border-gray-300"
                    placeholder="Contoh: Mentor Berpengalaman"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">
                    Icon Name (Auto System)
                  </label>
                  <input
                    type="text"
                    value={editForm.iconName || 'star'}
                    readOnly
                    disabled
                    className="w-full bg-gray-100 text-gray-500 text-xs font-bold p-2 rounded-lg border border-gray-200 cursor-not-allowed select-none"
                    title="Icon ini diisi otomatis oleh sistem dan bersifat immutable."
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1">
                  Deskripsi Keunggulan
                </label>
                <textarea
                  rows={2}
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, description: e.target.value }))
                  }
                  className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-300"
                  placeholder="Deskripsi singkat keunggulan..."
                />
              </div>
            </div>
          ) : (
            <div
              key={adv.id}
              className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between gap-3 hover:border-gray-300 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900">{adv.title}</span>
                  {adv.iconName && (
                    <span className="text-[10px] font-mono text-gray-500 bg-gray-200/60 px-1.5 py-0.5 rounded">
                      {adv.iconName}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{adv.description}</p>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleStartEdit(adv)}
                  className="p-1.5 text-gray-400 hover:text-[#1D4ED8] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                  title="Edit Keunggulan"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => deleteAdvantage(adv.id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Hapus Keunggulan"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
