import React from 'react';
import { HeroSectionContent } from '../../types';

interface HeroTabProps {
  heroForm: HeroSectionContent;
  handleHeroChange: (field: keyof HeroSectionContent, value: any) => void;
}

export const HeroTab: React.FC<HeroTabProps> = ({ heroForm, handleHeroChange }) => {
  return (
    <>
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900 tracking-tight">
          Hero Section Content
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-gray-400 font-semibold">Visible on site</span>
          <input
            type="checkbox"
            checked={heroForm.isVisible}
            onChange={(e) => handleHeroChange('isVisible', e.target.checked)}
            className="w-4 h-4 text-[#1D4ED8] rounded border-gray-300 cursor-pointer"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Tagline Badge Pill
        </label>
        <input
          type="text"
          value={heroForm.taglineBadge}
          onChange={(e) => handleHeroChange('taglineBadge', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Main Headline
        </label>
        <textarea
          rows={2}
          value={heroForm.headline}
          onChange={(e) => handleHeroChange('headline', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Sub-Headline / Description
        </label>
        <textarea
          rows={3}
          value={heroForm.subHeadline}
          onChange={(e) => handleHeroChange('subHeadline', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primary CTA */}
        <div className="space-y-3 p-3.5 bg-gray-50/60 rounded-xl border border-gray-100">
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
              Primary CTA Label
            </label>
            <input
              type="text"
              value={heroForm.ctaLabel}
              onChange={(e) => handleHeroChange('ctaLabel', e.target.value)}
              className="w-full bg-white text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
              placeholder="Contoh: Daftar Kelas Trial"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
              Primary CTA URL
            </label>
            <input
              type="text"
              value={heroForm.ctaRedirectUrl || '#daftar'}
              onChange={(e) => handleHeroChange('ctaRedirectUrl', e.target.value)}
              className="w-full bg-white text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
              placeholder="Contoh: #daftar atau https://..."
            />
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="space-y-3 p-3.5 bg-gray-50/60 rounded-xl border border-gray-100">
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
              Secondary CTA Label
            </label>
            <input
              type="text"
              value={heroForm.ctaSecondaryLabel}
              onChange={(e) => handleHeroChange('ctaSecondaryLabel', e.target.value)}
              className="w-full bg-white text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
              placeholder="Contoh: Tanya via WhatsApp"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
              Secondary CTA URL
            </label>
            <input
              type="text"
              value={heroForm.ctaSecondaryUrl || 'https://wa.me/6285606201036'}
              onChange={(e) => handleHeroChange('ctaSecondaryUrl', e.target.value)}
              className="w-full bg-white text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
              placeholder="Contoh: https://wa.me/..."
            />
          </div>
        </div>
      </div>

      {/* Floating Badge Controls */}
      <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Floating Card Text
          </label>
          <input
            type="text"
            value={heroForm.floatingBadgeText || '500+ Siswa Lolos'}
            onChange={(e) => handleHeroChange('floatingBadgeText', e.target.value)}
            className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Floating Card Subtext
          </label>
          <input
            type="text"
            value={heroForm.floatingBadgeSubtext || 'Pengajar PTN favorit berpengalaman.'}
            onChange={(e) => handleHeroChange('floatingBadgeSubtext', e.target.value)}
            className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
          />
        </div>
      </div>

      {/* Upload langsung file JPG/PNG – otomatis replace assetMediaUrl */}
      <div className="pt-2">
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Upload Hero Image (JPG / PNG, maks 5 MB)
        </label>
        <label className="flex items-center gap-2 cursor-pointer w-full bg-blue-50 hover:bg-blue-100 border-2 border-dashed border-blue-300 rounded-xl p-3 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-blue-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0L8 8m4-4l4 4"
            />
          </svg>
          <span className="text-xs text-blue-600 font-semibold">Pilih file untuk di-upload…</span>
          <input
            type="file"
            accept="image/jpeg,image/png"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api';
              const formData = new FormData();
              formData.append('assetMedia', file);
              try {
                const res = await fetch(`${apiBase}/admin/cms/upload-hero-image`, {
                  method: 'POST',
                  body: formData,
                });
                const data = await res.json();
                if (res.ok && data.url) {
                  handleHeroChange('assetMediaUrl', data.url);
                } else {
                  alert('Upload gagal: ' + (data.message || 'Terjadi kesalahan'));
                }
              } catch (err) {
                console.error(err);
                alert('Tidak dapat terhubung ke server. Pastikan backend aktif.');
              }
              e.target.value = '';
            }}
          />
        </label>
        {heroForm.assetMediaUrl && (
          <div className="mt-2 relative w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
            <img
              src={heroForm.assetMediaUrl}
              alt="Hero image preview"
              className="w-full max-h-36 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="absolute bottom-1 right-2 text-[9px] text-gray-400 bg-white/80 rounded px-1">
              preview
            </span>
          </div>
        )}
      </div>
    </>
  );
};
