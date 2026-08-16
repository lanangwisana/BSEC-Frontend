import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { TestimonialRosterItem } from '../../types';

interface TestimonialsTabProps {
  testimonialsTitle: string;
  setTestimonialsTitle: (val: string) => void;
  testimonials: TestimonialRosterItem[];
  toggleTestimonial: (id: string) => void;
  deleteTestimonial: (id: string) => void;
  onOpenAddTestimonialModal: () => void;
}

export const TestimonialsTab: React.FC<TestimonialsTabProps> = ({
  testimonialsTitle,
  setTestimonialsTitle,
  testimonials,
  toggleTestimonial,
  deleteTestimonial,
  onOpenAddTestimonialModal,
}) => {
  return (
    <div className="space-y-4">
      <div className="pb-3 border-b border-gray-100">
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
          Section Title
        </label>
        <input
          type="text"
          value={testimonialsTitle}
          onChange={(e) => setTestimonialsTitle(e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-2.5 rounded-xl border border-gray-200"
        />
      </div>

      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900 tracking-tight">
          Active Testimonial Roster
        </h2>
        <button
          onClick={onOpenAddTestimonialModal}
          className="flex items-center gap-1.5 bg-[#1D4ED8] text-white hover:bg-[#1e40af] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Tambah Testimoni</span>
        </button>
      </div>

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="p-4 bg-gray-50/80 rounded-xl border border-gray-200/80 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EFF6FF] text-[#1D4ED8] font-bold text-xs flex items-center justify-center shrink-0">
                {t.avatarInitials}
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900">{t.studentName}</span>
                <span className="ml-2 text-[10px] font-extrabold bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                  {t.targetPtnPassed}
                </span>
                <p className="text-[11px] text-gray-500 italic mt-0.5">{t.contentSnippet}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={t.isActive}
                onChange={() => toggleTestimonial(t.id)}
                className="w-4 h-4 text-[#1D4ED8] rounded border-gray-300 cursor-pointer"
              />
              <button
                onClick={() => deleteTestimonial(t.id)}
                className="p-1.5 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
