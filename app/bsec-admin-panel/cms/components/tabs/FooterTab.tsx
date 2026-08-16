import React from 'react';
import { FooterCmsContent } from '../../types';

interface FooterTabProps {
  footerForm: FooterCmsContent;
  handleFooterChange: (field: keyof FooterCmsContent, value: any) => void;
}

export const FooterTab: React.FC<FooterTabProps> = ({ footerForm, handleFooterChange }) => {
  return (
    <div className="space-y-4">
      <div className="pb-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900 tracking-tight">
          Footer Branding & Contact Settings
        </h2>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Company About Text
        </label>
        <textarea
          rows={3}
          value={footerForm.aboutText}
          onChange={(e) => handleFooterChange('aboutText', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Company Address
        </label>
        <input
          type="text"
          value={footerForm.companyAddress}
          onChange={(e) => handleFooterChange('companyAddress', e.target.value)}
          className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Company Phone
          </label>
          <input
            type="text"
            value={footerForm.companyPhone}
            onChange={(e) => handleFooterChange('companyPhone', e.target.value)}
            className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Company Email
          </label>
          <input
            type="text"
            value={footerForm.companyEmail}
            onChange={(e) => handleFooterChange('companyEmail', e.target.value)}
            className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};
