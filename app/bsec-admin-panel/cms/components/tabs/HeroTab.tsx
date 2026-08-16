import React, { useState, useRef } from 'react';
import { Eye, X, Move } from 'lucide-react';
import { HeroSectionContent } from '../../types';

interface HeroTabProps {
  heroForm: HeroSectionContent;
  handleHeroChange: (field: keyof HeroSectionContent, value: any) => void;
}

export const HeroTab: React.FC<HeroTabProps> = ({ heroForm, handleHeroChange }) => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [initialCoords, setInitialCoords] = useState({ x: 50, y: 15 });

  const modalCropRef = useRef<HTMLDivElement>(null);
  const thumbnailCropRef = useRef<HTMLDivElement>(null);

  const getCoords = (pos?: string) => {
    if (!pos) return { x: 50, y: 15 };
    if (pos === 'object-top') return { x: 50, y: 0 };
    if (pos === 'object-center') return { x: 50, y: 50 };
    if (pos === 'object-bottom') return { x: 50, y: 100 };
    const parts = pos.split(' ');
    if (parts.length === 2) {
      const xVal = parseInt(parts[0], 10);
      const yVal = parseInt(parts[1], 10);
      return {
        x: isNaN(xVal) ? 50 : xVal,
        y: isNaN(yVal) ? 15 : yVal,
      };
    }
    return { x: 50, y: 15 };
  };

  const startDrag = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setInitialCoords(getCoords(heroForm.assetMediaPosition));
  };

  const moveDrag = (clientX: number, clientY: number, containerEl: HTMLDivElement | null) => {
    if (!isDragging || !containerEl) return;
    const rect = containerEl.getBoundingClientRect();
    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;

    const percentDeltaX = (deltaX / rect.width) * 100;
    const percentDeltaY = (deltaY / rect.height) * 100;

    const newX = Math.max(0, Math.min(100, Math.round(initialCoords.x - percentDeltaX)));
    const newY = Math.max(0, Math.min(100, Math.round(initialCoords.y - percentDeltaY)));

    handleHeroChange('assetMediaPosition', `${newX}% ${newY}%`);
  };

  const endDrag = () => {
    setIsDragging(false);
  };

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

      {/* Upload langsung file JPG/PNG & Focus Control */}
      <div className="pt-2 space-y-3">
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
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
          <div className="pt-2">
            {/* Thumbnail Preview with Full Modal Trigger */}
            <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100 group">
              <img
                src={heroForm.assetMediaUrl}
                alt="Hero image preview"
                className={`w-full max-h-48 object-cover ${
                  (heroForm.assetMediaPosition || '').startsWith('object-')
                    ? heroForm.assetMediaPosition
                    : ''
                }`}
                style={
                  (heroForm.assetMediaPosition || '').includes('%')
                    ? { objectPosition: heroForm.assetMediaPosition }
                    : undefined
                }
              />
              <button
                type="button"
                onClick={() => setShowPreviewModal(true)}
                className="absolute inset-0 bg-slate-900/60 opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold cursor-pointer"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>Preview & Atur Posisi Foto (Full Modal)</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* FULL IMAGE INSPECTION MODAL */}
      {showPreviewModal && heroForm.assetMediaUrl && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 space-y-4 shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 shrink-0">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                {/* <Eye className="w-4 h-4 text-[#1D4ED8]" /> */}
                Image Crop & Focus Moda
              </h3>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {/* Full Uncropped Original Image */}
              <div>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                  Gambar Utuh Asli (Uncropped Original Image)
                </span>
                <div className="rounded-xl border border-gray-200 bg-gray-900 flex items-center justify-center p-2 min-h-[220px]">
                  <img
                    src={heroForm.assetMediaUrl}
                    alt="Original full resolution"
                    className="max-h-[300px] w-auto object-contain rounded-lg shadow-md"
                  />
                </div>
                {/* Live Hero Crop Preview with Direct Mouse/Touch Dragging */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] pt-2 font-bold text-gray-500 uppercase tracking-wider block">
                    Tampilan Live Crop Hero ({heroForm.assetMediaPosition || '50% 15%'})
                  </span>
                </div>
                <div
                  ref={modalCropRef}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    startDrag(e.clientX, e.clientY);
                  }}
                  onMouseMove={(e) => {
                    if (isDragging) {
                      e.preventDefault();
                      moveDrag(e.clientX, e.clientY, modalCropRef.current);
                    }
                  }}
                  onMouseUp={endDrag}
                  onMouseLeave={endDrag}
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    if (touch) startDrag(touch.clientX, touch.clientY);
                  }}
                  onTouchMove={(e) => {
                    const touch = e.touches[0];
                    if (touch && isDragging) {
                      moveDrag(touch.clientX, touch.clientY, modalCropRef.current);
                    }
                  }}
                  onTouchEnd={endDrag}
                  className={`hero-blob overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-[#EFF6FF] to-white h-[280px] relative select-none cursor-grab active:cursor-grabbing ${
                    isDragging ? 'ring-4 ring-blue-400 border-blue-200' : ''
                  }`}
                >
                  <img
                    src={heroForm.assetMediaUrl}
                    alt="Cropped hero preview"
                    className={`w-full h-full object-cover pointer-events-none ${
                      (heroForm.assetMediaPosition || '').startsWith('object-')
                        ? heroForm.assetMediaPosition
                        : ''
                    }`}
                    style={
                      (heroForm.assetMediaPosition || '').includes('%')
                        ? { objectPosition: heroForm.assetMediaPosition }
                        : undefined
                    }
                  />
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 pointer-events-none shadow-lg border border-white/20">
                    <Move className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    <span>Geser / Drag Foto Ini Secara Bebas</span>
                  </div>
                </div>
              </div>              
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end shrink-0">
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="bg-[#1D4ED8] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[#1e40af] transition-colors cursor-pointer"
              >
                Selesai & Simpan Setting
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

