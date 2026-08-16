import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { AboutCmsContent, AdvantageCmsItem } from '../../types';

interface AboutAdvantagesTabProps {
  aboutForm: AboutCmsContent;
  handleAboutChange: (field: keyof AboutCmsContent, value: any) => void;
  advantagesTitle: string;
  setAdvantagesTitle: (val: string) => void;
  advantagesSubtitle: string;
  setAdvantagesSubtitle: (val: string) => void;
  advantages: AdvantageCmsItem[];
  deleteAdvantage: (id: string) => void;
  onOpenAddAdvantageModal: () => void;
}

export const AboutAdvantagesTab: React.FC<AboutAdvantagesTabProps> = ({
  aboutForm,
  handleAboutChange,
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
          About Us, 4 Stat Cards & Advantages Content
        </h2>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Section Subtitle
        </label>
        <input
          type="text"
          value={aboutForm.subtitle}
          onChange={(e) => handleAboutChange('subtitle', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      {/* 4 Stat Cards Settings Grid */}
      <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200/80 space-y-3">
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Pengaturan 4 Stat Card Overlapping
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 mb-1">
              Card 1 Number & Label
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={aboutForm.statCard1Number || '10+'}
                onChange={(e) => handleAboutChange('statCard1Number', e.target.value)}
                className="w-1/3 bg-white text-xs font-bold p-2 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                value={aboutForm.statCard1Label || 'TAHUN PENGALAMAN'}
                onChange={(e) => handleAboutChange('statCard1Label', e.target.value)}
                className="w-2/3 bg-white text-xs p-2 rounded-lg border border-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 mb-1">
              Card 2 Number & Label
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={aboutForm.statCard2Number || '500+'}
                onChange={(e) => handleAboutChange('statCard2Number', e.target.value)}
                className="w-1/3 bg-white text-xs font-bold p-2 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                value={aboutForm.statCard2Label || 'SISWA BERPRESTASI'}
                onChange={(e) => handleAboutChange('statCard2Label', e.target.value)}
                className="w-2/3 bg-white text-xs p-2 rounded-lg border border-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 mb-1">
              Card 3 Number & Label
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={aboutForm.statCard3Number || '95%'}
                onChange={(e) => handleAboutChange('statCard3Number', e.target.value)}
                className="w-1/3 bg-white text-xs font-bold p-2 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                value={aboutForm.statCard3Label || 'KEPUASAN SISWA'}
                onChange={(e) => handleAboutChange('statCard3Label', e.target.value)}
                className="w-2/3 bg-white text-xs p-2 rounded-lg border border-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 mb-1">
              Card 4 Number & Label
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={aboutForm.statCard4Number || '2014'}
                onChange={(e) => handleAboutChange('statCard4Number', e.target.value)}
                className="w-1/3 bg-white text-xs font-bold p-2 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                value={aboutForm.statCard4Label || 'TAHUN BERDIRI'}
                onChange={(e) => handleAboutChange('statCard4Label', e.target.value)}
                className="w-2/3 bg-white text-xs p-2 rounded-lg border border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Vision Statement
        </label>
        <input
          type="text"
          value={aboutForm.visionText}
          onChange={(e) => handleAboutChange('visionText', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      {/* Keunggulan Items Section */}
      <div className="pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase">
              Advantages Title
            </label>
            <input
              type="text"
              value={advantagesTitle}
              onChange={(e) => setAdvantagesTitle(e.target.value)}
              className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-200"
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
              className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-200"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            Poin Keunggulan BSEC (Advantages)
          </h3>
          <button
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
                onClick={() => deleteAdvantage(adv.id)}
                className="p-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
