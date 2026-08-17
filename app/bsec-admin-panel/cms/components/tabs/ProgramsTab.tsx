import React, { useState } from 'react';
import { Layers, Plus, Trash2, Pencil, Check, X } from 'lucide-react';
import { ProgramCategory, ProgramCmsItem } from '../../types';

interface ProgramsTabProps {
  programsTitle: string;
  setProgramsTitle: (val: string) => void;
  programsSubtitle: string;
  setProgramsSubtitle: (val: string) => void;
  programCategories: ProgramCategory[];
  selectedCategoryId: string;
  setSelectedCategoryId: (id: string) => void;
  updateProgramCategory?: (id: string, name: string) => void;
  deleteProgramCategory: (id: string) => void;
  programs: ProgramCmsItem[];
  updateProgramItem?: (id: string, updated: Partial<ProgramCmsItem>) => void;
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
  updateProgramCategory,
  deleteProgramCategory,
  programs,
  updateProgramItem,
  toggleProgramItem,
  deleteProgramItem,
  onOpenAddCategoryModal,
  onOpenAddProductModal,
}) => {
  const [editingCatId, setEditingCatId] = useState<string | null>(null);
  const [editingCatName, setEditingCatName] = useState<string>('');

  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editProductForm, setEditProductForm] = useState<{
    title: string;
    description: string;
    priceFormatted: string;
    targetAge: string;
    learningObjectives: string;
    learningFocus: string;
  }>({
    title: '',
    description: '',
    priceFormatted: '',
    targetAge: '',
    learningObjectives: '',
    learningFocus: '',
  });

  const currentCategoryName =
    programCategories.find((c) => c.id === selectedCategoryId)?.name || selectedCategoryId;
  const filteredPrograms = programs.filter((p) => p.categoryId === selectedCategoryId);

  const handleStartEdit = (cat: ProgramCategory) => {
    setEditingCatId(cat.id);
    setEditingCatName(cat.name);
  };

  const handleSaveEdit = (id: string) => {
    if (editingCatName.trim() && updateProgramCategory) {
      updateProgramCategory(id, editingCatName.trim());
    }
    setEditingCatId(null);
  };

  const handleStartEditProduct = (product: ProgramCmsItem) => {
    setEditingProductId(product.id);
    setEditProductForm({
      title: product.title,
      description: product.description,
      priceFormatted: product.priceFormatted,
      targetAge: product.targetAge || '',
      learningObjectives: product.learningObjectives || '',
      learningFocus: product.learningFocus || '',
    });
  };

  const handleSaveEditProduct = (id: string) => {
    if (updateProgramItem && editProductForm.title.trim()) {
      updateProgramItem(id, {
        title: editProductForm.title,
        description: editProductForm.description,
        priceFormatted: editProductForm.priceFormatted,
        targetAge: editProductForm.targetAge,
        learningObjectives: editProductForm.learningObjectives,
        learningFocus: editProductForm.learningFocus,
      });
    }
    setEditingProductId(null);
  };

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
        {programCategories.map((cat) => {
          const isEditing = editingCatId === cat.id;
          const isSelected = selectedCategoryId === cat.id;

          return (
            <div
              key={cat.id}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                isSelected
                  ? 'bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-xs'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {isEditing ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={editingCatName}
                    onChange={(e) => setEditingCatName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveEdit(cat.id);
                      if (e.key === 'Escape') setEditingCatId(null);
                    }}
                    autoFocus
                    className="bg-white text-gray-900 px-2 py-0.5 rounded text-xs border border-blue-400 font-bold focus:outline-none w-28"
                  />
                  <button
                    type="button"
                    onClick={() => handleSaveEdit(cat.id)}
                    className="p-1 text-emerald-400 hover:text-emerald-300 cursor-pointer"
                    title="Simpan Nama"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingCatId(null)}
                    className="p-1 text-red-400 hover:text-red-300 cursor-pointer"
                    title="Batal"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  <span
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className="cursor-pointer flex-1"
                  >
                    {cat.name}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartEdit(cat);
                    }}
                    className={`p-0.5 rounded transition-colors cursor-pointer ${
                      isSelected ? 'text-blue-200 hover:text-white' : 'text-gray-400 hover:text-gray-700'
                    }`}
                    title="Edit Nama Kategori"
                  >
                    <Pencil className="w-3 h-3" />
                  </button>
                  {programCategories.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Hapus Parent Program "${cat.name}" dan semua produk turunannya?`)) {
                          deleteProgramCategory(cat.id);
                          setSelectedCategoryId(
                            programCategories.find((c) => c.id !== cat.id)?.id || ''
                          );
                        }
                      }}
                      className={`p-0.5 rounded hover:bg-red-500 hover:text-white transition-colors cursor-pointer ${
                        isSelected ? 'text-blue-200' : 'text-gray-400'
                      }`}
                      title="Hapus Kategori"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </>
              )}
            </div>
          );
        })}
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
          filteredPrograms.map((product) =>
            editingProductId === product.id ? (
              <div
                key={product.id}
                className="p-4 bg-white rounded-xl border-2 border-[#1D4ED8] shadow-md space-y-3"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-xs font-bold text-[#1D4ED8]">
                    Edit Produk Kelas
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleSaveEditProduct(product.id)}
                      className="bg-[#1D4ED8] text-white px-3 py-1 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Simpan</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingProductId(null)}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Batal</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1">
                      Nama Produk Kelas
                    </label>
                    <input
                      type="text"
                      value={editProductForm.title}
                      onChange={(e) =>
                        setEditProductForm((prev) => ({ ...prev, title: e.target.value }))
                      }
                      className="w-full bg-gray-50 text-xs font-bold p-2 rounded-lg border border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1">
                      Harga (Formatted)
                    </label>
                    <input
                      type="text"
                      value={editProductForm.priceFormatted}
                      onChange={(e) =>
                        setEditProductForm((prev) => ({ ...prev, priceFormatted: e.target.value }))
                      }
                      className="w-full bg-gray-50 text-xs font-bold p-2 rounded-lg border border-gray-300"
                      placeholder="e.g. Rp 450k/bln"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1">
                      Target Jenjang / Usia
                    </label>
                    <input
                      type="text"
                      value={editProductForm.targetAge}
                      onChange={(e) =>
                        setEditProductForm((prev) => ({ ...prev, targetAge: e.target.value }))
                      }
                      className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-300"
                      placeholder="e.g. Kelas 1-6 SD"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1">
                      Deskripsi Singkat
                    </label>
                    <input
                      type="text"
                      value={editProductForm.description}
                      onChange={(e) =>
                        setEditProductForm((prev) => ({ ...prev, description: e.target.value }))
                      }
                      className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1">
                      Tujuan Pembelajaran (Learning Objectives)
                    </label>
                    <textarea
                      rows={2}
                      value={editProductForm.learningObjectives}
                      onChange={(e) =>
                        setEditProductForm((prev) => ({ ...prev, learningObjectives: e.target.value }))
                      }
                      className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-300"
                      placeholder="Contoh: Menguasai konsep dasar matematika..."
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1">
                      Fokus Pembelajaran (Learning Focus)
                    </label>
                    <textarea
                      rows={2}
                      value={editProductForm.learningFocus}
                      onChange={(e) =>
                        setEditProductForm((prev) => ({ ...prev, learningFocus: e.target.value }))
                      }
                      className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-300"
                      placeholder="Contoh: Penalaran Logis, Pemecahan Masalah..."
                    />
                  </div>
                </div>
              </div>
            ) : (
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
                    {product.targetAge && (
                      <span className="text-[10px] text-gray-500 bg-gray-200/60 px-2 py-0.5 rounded font-medium">
                        {product.targetAge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">{product.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleStartEditProduct(product)}
                    className="p-1.5 text-gray-400 hover:text-[#1D4ED8] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit Produk"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="checkbox"
                    checked={product.isActive}
                    onChange={() => toggleProgramItem(product.id)}
                    className="w-4 h-4 text-[#1D4ED8] rounded border-gray-300 cursor-pointer"
                  />
                  <button
                    onClick={() => deleteProgramItem(product.id)}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                    title="Hapus Produk"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};
