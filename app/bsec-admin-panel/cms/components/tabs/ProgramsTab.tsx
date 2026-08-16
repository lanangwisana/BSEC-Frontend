import React from 'react';
import { Layers, Plus, Trash2 } from 'lucide-react';
import { ProgramCategory, ProgramCmsItem } from '../../types';

interface ProgramsTabProps {
  programsTitle: string;
  setProgramsTitle: (val: string) => void;
  programsSubtitle: string;
  setProgramsSubtitle: (val: string) => void;
  programCategories: ProgramCategory[];
  selectedCategoryId: string;
  setSelectedCategoryId: (id: string) => void;
  deleteProgramCategory: (id: string) => void;
  programs: ProgramCmsItem[];
  toggleProgramItem: (id: string) => void;
  deleteProgramItem: (id: string) => void;
  onOpenAddCategoryModal: () => void;
  onOpenAddProductModal: () => void;
}

export const ProgramsTab: React.FC<ProgramsTabProps> = ({
  programsTitle,
  setProgramsTitle,
  programsSubtitle,
  setProgramsSubtitle,
  programCategories,
  selectedCategoryId,
  setSelectedCategoryId,
  deleteProgramCategory,
  programs,
  toggleProgramItem,
  deleteProgramItem,
  onOpenAddCategoryModal,
  onOpenAddProductModal,
}) => {
  const currentCategoryName =
    programCategories.find((c) => c.id === selectedCategoryId)?.name || selectedCategoryId;
  const filteredPrograms = programs.filter((p) => p.categoryId === selectedCategoryId);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 pb-3 border-b border-gray-100">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
            Section Title
          </label>
          <input
            type="text"
            value={programsTitle}
            onChange={(e) => setProgramsTitle(e.target.value)}
            className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-2.5 rounded-xl border border-gray-200"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
            Section Subtitle
          </label>
          <input
            type="text"
            value={programsSubtitle}
            onChange={(e) => setProgramsSubtitle(e.target.value)}
            className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-2.5 rounded-xl border border-gray-200"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#1D4ED8]" />
          Parent Categories & Child Products
        </h2>
        <button
          onClick={onOpenAddCategoryModal}
          className="flex items-center gap-1.5 bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#dbeafe] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Tambah Parent Category</span>
        </button>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {programCategories.map((cat) => (
          <div
            key={cat.id}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              selectedCategoryId === cat.id
                ? 'bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-xs'
                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <span onClick={() => setSelectedCategoryId(cat.id)} className="flex-1">
              {cat.name}
            </span>
            {programCategories.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm(`Hapus Parent Program "${cat.name}" dan semua produk turunannya?`)) {
                    deleteProgramCategory(cat.id);
                    setSelectedCategoryId(programCategories[0].id);
                  }
                }}
                className={`p-0.5 rounded hover:bg-red-500 hover:text-white transition-colors ${
                  selectedCategoryId === cat.id ? 'text-blue-200' : 'text-gray-400'
                }`}
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-gray-700">
            Produk Turunan di Kategori &quot;{currentCategoryName}&quot;
          </span>
          <button
            onClick={onOpenAddProductModal}
            className="flex items-center gap-1.5 bg-[#1D4ED8] text-white hover:bg-[#1e40af] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Produk Kelas</span>
          </button>
        </div>

        {filteredPrograms.length === 0 ? (
          <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-xs font-semibold text-gray-500">
              Belum ada produk turunan di kategori ini. Klik &quot;Tambah Produk Kelas&quot; di atas.
            </p>
          </div>
        ) : (
          filteredPrograms.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-gray-50/80 rounded-xl border border-gray-200 flex items-center justify-between gap-4 hover:border-gray-300 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900">{product.title}</span>
                  <span className="text-[10px] font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2 py-0.5 rounded">
                    {product.priceFormatted}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">{product.description}</p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={product.isActive}
                  onChange={() => toggleProgramItem(product.id)}
                  className="w-4 h-4 text-[#1D4ED8] rounded border-gray-300 cursor-pointer"
                />
                <button
                  onClick={() => deleteProgramItem(product.id)}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
