import React from 'react';
import { AboutCmsContent } from '../../types';

interface AboutTabProps {
  aboutForm: AboutCmsContent;
  handleAboutChange: (field: keyof AboutCmsContent, value: any) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({
  aboutForm,
  handleAboutChange,
}) => {
  return (
    <div className="space-y-5">
      <div className="pb-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900 tracking-tight">
          About Section
        </h2>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Section Title
        </label>
        <input
          type="text"
          value={aboutForm.title || 'Tentang Brown Smart Education Center'}
          onChange={(e) => handleAboutChange('title', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
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

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Description Paragraph 1
        </label>
        <textarea
          rows={3}
          value={aboutForm.descriptionParagraph1 || ''}
          onChange={(e) => handleAboutChange('descriptionParagraph1', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
          placeholder="Tuliskan deskripsi paragraf 1..."
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Description Paragraph 2
        </label>
        <textarea
          rows={3}
          value={aboutForm.descriptionParagraph2 || ''}
          onChange={(e) => handleAboutChange('descriptionParagraph2', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
          placeholder="Tuliskan deskripsi paragraf 2..."
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
        <textarea
          rows={2}
          value={aboutForm.visionText}
          onChange={(e) => handleAboutChange('visionText', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
          placeholder="Tuliskan Visi..."
        />
      </div>

      {/* Mission Statements Section */}
      <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200/80 space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
            Mission Statements (Misi)
          </label>
          <button
            type="button"
            onClick={() =>
              handleAboutChange('missions', [...(aboutForm.missions || []), ''])
            }
            className="text-[11px] font-bold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            + Tambah Misi
          </button>
        </div>

        <div className="space-y-2">
          {(aboutForm.missions || []).length > 0 ? (
            (aboutForm.missions || []).map((mission, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-[10px] font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <input
                  type="text"
                  value={mission}
                  onChange={(e) => {
                    const updated = [...(aboutForm.missions || [])];
                    updated[idx] = e.target.value;
                    handleAboutChange('missions', updated);
                  }}
                  className="flex-1 bg-white text-xs font-medium text-gray-800 p-2.5 rounded-xl border border-gray-200"
                  placeholder={`Misi poin ke-${idx + 1}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const updated = (aboutForm.missions || []).filter(
                      (_, i) => i !== idx
                    );
                    handleAboutChange('missions', updated);
                  }}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer text-xs font-bold"
                  title="Hapus Misi"
                >
                  ✕
                </button>
              </div>
            ))
          ) : (
            <p className="text-xs text-gray-400 italic text-center py-2">
              Belum ada poin misi. Klik tombol &quot;+ Tambah Misi&quot; di atas.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
