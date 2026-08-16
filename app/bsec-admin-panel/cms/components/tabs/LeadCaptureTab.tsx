import React from 'react';
import { LeadCaptureCmsContent } from '../../types';

interface LeadCaptureTabProps {
  leadCaptureForm: LeadCaptureCmsContent;
  handleLeadCaptureChange: (field: keyof LeadCaptureCmsContent, value: any) => void;
}

export const LeadCaptureTab: React.FC<LeadCaptureTabProps> = ({
  leadCaptureForm,
  handleLeadCaptureChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="pb-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900 tracking-tight">
          Formulir Pendaftaran & Lead Capture Settings
        </h2>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          CTA Banner Title
        </label>
        <input
          type="text"
          value={leadCaptureForm.title}
          onChange={(e) => handleLeadCaptureChange('title', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          CTA Banner Subtitle
        </label>
        <textarea
          rows={2}
          value={leadCaptureForm.subtitle}
          onChange={(e) => handleLeadCaptureChange('subtitle', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      <div className="space-y-2 pt-2">
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
          Checklist Benefits List
        </label>
        {leadCaptureForm.checklistItems.map((item, idx) => (
          <input
            key={idx}
            type="text"
            value={item}
            onChange={(e) => {
              const newItems = [...leadCaptureForm.checklistItems];
              newItems[idx] = e.target.value;
              handleLeadCaptureChange('checklistItems', newItems);
            }}
            className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-2.5 rounded-xl border border-gray-200"
          />
        ))}
      </div>
    </div>
  );
};
