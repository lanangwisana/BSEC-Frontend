import React from 'react';
import { Monitor, Tablet, Smartphone, Globe } from 'lucide-react';
import { DevicePreviewMode, HeroSectionContent, AboutCmsContent } from '../types';

interface LivePreviewPanelProps {
  deviceMode: DevicePreviewMode;
  setDeviceMode: (mode: DevicePreviewMode) => void;
  heroForm: HeroSectionContent;
  aboutForm: AboutCmsContent;
  testimonialsTitle: string;
}

export const LivePreviewPanel: React.FC<LivePreviewPanelProps> = ({
  deviceMode,
  setDeviceMode,
  heroForm,
  aboutForm,
  testimonialsTitle,
}) => {
  return (
    <div className="lg:col-span-5 flex flex-col">
      <div className="bg-gray-100/80 rounded-2xl p-4 border border-gray-200/60 shadow-xs flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-gray-700 tracking-tight flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Preview Mood Canvas
            </h3>
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl shadow-2xs border border-gray-200/50">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceMode === 'desktop' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceMode === 'tablet' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceMode === 'mobile' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Harmonized Preview Container */}
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 space-y-4 overflow-hidden my-2 text-gray-800">
            {/* Hero Preview Card */}
            <div className="bg-[#EFF6FF]/60 rounded-xl p-4 border border-blue-100 relative overflow-hidden">
              <span className="px-2 py-0.5 bg-[#EFF6FF] text-[#1D4ED8] text-[9px] font-bold rounded-full inline-block mb-1.5">
                {heroForm.taglineBadge}
              </span>
              <h4 className="text-xs font-black text-[#1E293B] leading-tight mb-1">
                {heroForm.headline}
              </h4>
              <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-xs mb-3">
                {heroForm.subHeadline}
              </p>
              <div className="flex gap-2">
                <button className="bg-[#1D4ED8] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-xs">
                  {heroForm.ctaLabel}
                </button>
                <button className="bg-white border border-gray-200 text-[#1E293B] px-3 py-1.5 rounded-lg text-[10px] font-bold">
                  {heroForm.ctaSecondaryLabel}
                </button>
              </div>
            </div>

            {/* Stat Cards Overlapping Preview */}
            <div className="bg-white p-3 rounded-xl border border-gray-100 space-y-1.5">
              <span className="text-[10px] font-bold text-[#1D4ED8] uppercase tracking-wider block">
                About 4 Stat Cards Preview
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="bg-[#1D4ED8] text-white p-2.5 rounded-xl shadow-xs">
                  <span className="font-extrabold block text-sm">
                    {aboutForm.statCard1Number || '10+'}
                  </span>
                  <span className="text-[8px] uppercase opacity-80">
                    {aboutForm.statCard1Label || 'TAHUN PENGALAMAN'}
                  </span>
                </div>
                <div className="bg-white border border-gray-200 text-[#1E293B] p-2.5 rounded-xl">
                  <span className="font-extrabold block text-sm">
                    {aboutForm.statCard2Number || '500+'}
                  </span>
                  <span className="text-[8px] uppercase text-gray-400">
                    {aboutForm.statCard2Label || 'SISWA BERPRESTASI'}
                  </span>
                </div>
                <div className="bg-[#EFF6FF] text-[#1E293B] p-2.5 rounded-xl -mt-1.5">
                  <span className="font-extrabold block text-sm">
                    {aboutForm.statCard3Number || '95%'}
                  </span>
                  <span className="text-[8px] uppercase text-gray-500">
                    {aboutForm.statCard3Label || 'KEPUASAN SISWA'}
                  </span>
                </div>
                <div className="bg-white border border-gray-200 text-[#1E293B] p-2.5 rounded-xl">
                  <span className="font-extrabold block text-sm">
                    {aboutForm.statCard4Number || '2014'}
                  </span>
                  <span className="text-[8px] uppercase text-gray-400">
                    {aboutForm.statCard4Label || 'TAHUN BERDIRI'}
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonials Dark Navy Preview */}
            <div className="bg-[#1D4ED8] text-white p-3 rounded-xl space-y-2">
              <span className="text-[10px] font-extrabold tracking-tight block">
                {testimonialsTitle}
              </span>
              <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/20 text-[9px]">
                <span className="font-bold block">Annisa Rahma (UI)</span>
                <p className="italic opacity-90 mt-0.5">
                  &quot;Berkat BSEC, materi UTBK jadi lebih mudah...&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1E293B] text-white p-3 rounded-xl flex items-center justify-center gap-2 text-[11px] font-bold tracking-wide">
          <Globe className="w-3.5 h-3.5 text-[#1D4ED8] animate-spin" />
          <span>Live changes syncing enabled</span>
        </div>
      </div>
    </div>
  );
};
