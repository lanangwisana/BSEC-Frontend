import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { AdvantageCmsItem } from '../../types';

interface AdvantagesTabProps {
  advantagesTitle: string;
  setAdvantagesTitle: (val: string) => void;
  advantagesSubtitle: string;
  setAdvantagesSubtitle: (val: string) => void;
  advantages: AdvantageCmsItem[];
  deleteAdvantage: (id: string) => void;
  onOpenAddAdvantageModal: () => void;
}

export const AdvantagesTab: React.FC<AdvantagesTabProps> = ({
  advantagesTitle,
  setAdvantagesTitle,
  advantagesSubtitle,
  setAdvantagesSubtitle,
  advantages,
  deleteAdvantage,
  onOpenAddAdvantageModal,
}) => {
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

      <div className="space-y-2">
        {advantages.map((adv) => (
          <div
            key={adv.id}
            className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-bold text-gray-900">{adv.title}</span>
              <p className="text-[11px] text-gray-500 mt-0.5">{adv.description}</p>
            </div>
            <button
              type="button"
              onClick={() => deleteAdvantage(adv.id)}
              className="p-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
