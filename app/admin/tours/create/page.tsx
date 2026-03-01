"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createTour } from '@/app/actions/tourActions';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { Field } from '@/components/ui/Field';

type Destination = { id: string; name: string; country: string };

const CATEGORIES = [
  { value: 'SAFARI', label: 'Safari' },
  { value: 'BEACH', label: 'Beach' },
  { value: 'CULTURAL', label: 'Cultural' },
  { value: 'ADVENTURE', label: 'Adventure' },
  { value: 'HONEYMOON', label: 'Honeymoon' },
  { value: 'FAMILY', label: 'Family' },
];

export default function CreateTourPage() {
  const router = useRouter();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    slug: '',
    destinationId: '',
    category: 'SAFARI',
    overview: '',
    durationDays: 5,
    durationNights: 4,
    basePrice: 1000,
    groupSizeMin: 2,
    groupSizeMax: 12,
    status: 'DRAFT',
    images: [''],
    included: [''],
    excluded: [''],
  });

  useEffect(() => {
    fetch('/api/admin/destinations').then(r => r.json()).then(setDestinations).catch(() => {});
  }, []);

  const handleTitleChange = (title: string) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
    setForm(f => ({ ...f, title, slug }));
  };

  const updateList = (key: 'images' | 'included' | 'excluded', index: number, value: string) => {
    setForm(f => {
      const arr = [...f[key]];
      arr[index] = value;
      return { ...f, [key]: arr };
    });
  };

  const addItem = (key: 'images' | 'included' | 'excluded') => {
    setForm(f => ({ ...f, [key]: [...f[key], ''] }));
  };

  const removeItem = (key: 'images' | 'included' | 'excluded', index: number) => {
    setForm(f => ({ ...f, [key]: f[key].filter((_, i) => i !== index) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSaving(true);

    const cleanedForm = {
      ...form,
      images: form.images.filter(Boolean),
      included: form.included.filter(Boolean),
      excluded: form.excluded.filter(Boolean),
      durationDays: Number(form.durationDays),
      durationNights: Number(form.durationNights),
      basePrice: Number(form.basePrice),
      groupSizeMin: Number(form.groupSizeMin),
      groupSizeMax: Number(form.groupSizeMax),
    };

    const result = await createTour(cleanedForm);
    setIsSaving(false);

    if (result.success) {
      router.push('/admin/tours');
    } else {
      setError(result.error || 'Failed to create tour. Please try again.');
    }
  };



  const inputCls = "w-full px-4 py-2.5 rounded-lg border border-border-dark bg-background-dark text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary text-sm";

  return (
    <div className="flex h-screen w-full bg-[#120d0d]">
      <AdminSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <AdminHeader title="Create New Tour" description="Fill in the details to add a new tour package.">
          <div className="flex gap-3">
            <button type="button" onClick={() => router.push('/admin/tours')} className="px-4 py-2 rounded-lg border border-border-dark bg-transparent text-text-secondary hover:text-white text-sm font-medium transition-colors">
              Cancel
            </button>
            <button form="create-tour-form" type="submit" disabled={isSaving} className="px-6 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all disabled:opacity-50 shadow-lg shadow-primary/30">
              {isSaving ? 'Saving...' : 'Save Tour'}
            </button>
          </div>
        </AdminHeader>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <form id="create-tour-form" onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {error && (
              <div className="p-4 rounded-xl bg-red-900/20 border border-red-800 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Basic Info */}
            <div className="bg-surface-dark rounded-2xl border border-border-dark p-6 space-y-5">
              <h2 className="text-base font-bold text-white">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Tour Title *">
                  <input required value={form.title} onChange={e => handleTitleChange(e.target.value)} className={inputCls} placeholder="e.g. Maldives Overwater Escape" />
                </Field>
                <Field label="Slug *">
                  <input required value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} className={inputCls} placeholder="auto-generated from title" />
                </Field>
                <Field label="Destination *">
                  <select required value={form.destinationId} onChange={e => setForm(f => ({ ...f, destinationId: e.target.value }))} className={inputCls}>
                    <option value="">Select a destination...</option>
                    {destinations.map(d => (
                      <option key={d.id} value={d.id}>{d.name}, {d.country}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Category *">
                  <select required value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className={inputCls}>
                    {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </Field>
                <Field label="Status">
                  <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} className={inputCls}>
                    <option value="DRAFT">Draft</option>
                    <option value="ACTIVE">Published</option>
                  </select>
                </Field>
              </div>
              <Field label="Overview / Description *">
                <textarea required value={form.overview} onChange={e => setForm(f => ({ ...f, overview: e.target.value }))} className={inputCls + " min-h-[120px] resize-y"} placeholder="Describe this tour package..." rows={5} />
              </Field>
            </div>

            {/* Duration & Pricing */}
            <div className="bg-surface-dark rounded-2xl border border-border-dark p-6 space-y-5">
              <h2 className="text-base font-bold text-white">Duration & Pricing</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <Field label="Duration Days *">
                  <input required type="number" min={1} value={form.durationDays} onChange={e => setForm(f => ({ ...f, durationDays: +e.target.value }))} className={inputCls} />
                </Field>
                <Field label="Duration Nights *">
                  <input required type="number" min={0} value={form.durationNights} onChange={e => setForm(f => ({ ...f, durationNights: +e.target.value }))} className={inputCls} />
                </Field>
                <Field label="Base Price (USD) *">
                  <input required type="number" min={0} step={0.01} value={form.basePrice} onChange={e => setForm(f => ({ ...f, basePrice: +e.target.value }))} className={inputCls} />
                </Field>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <Field label="Min Group Size *">
                  <input required type="number" min={1} value={form.groupSizeMin} onChange={e => setForm(f => ({ ...f, groupSizeMin: +e.target.value }))} className={inputCls} />
                </Field>
                <Field label="Max Group Size *">
                  <input required type="number" min={1} value={form.groupSizeMax} onChange={e => setForm(f => ({ ...f, groupSizeMax: +e.target.value }))} className={inputCls} />
                </Field>
              </div>
            </div>

            {/* Images */}
            <div className="bg-surface-dark rounded-2xl border border-border-dark p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-white">Images</h2>
                <button type="button" onClick={() => addItem('images')} className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
                  <span className="material-symbols-outlined text-[18px]">add</span> Add Image
                </button>
              </div>
              {form.images.map((url, i) => (
                <div key={i} className="flex gap-2">
                  <input value={url} onChange={e => updateList('images', i, e.target.value)} className={inputCls} placeholder="https://..." />
                  {form.images.length > 1 && (
                    <button type="button" onClick={() => removeItem('images', i)} className="p-2.5 rounded-lg border border-border-dark text-text-secondary hover:text-red-400 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Included / Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(['included', 'excluded'] as const).map(key => (
                <div key={key} className="bg-surface-dark rounded-2xl border border-border-dark p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-bold text-white capitalize">{key}</h2>
                    <button type="button" onClick={() => addItem(key)} className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
                      <span className="material-symbols-outlined text-[18px]">add</span> Add
                    </button>
                  </div>
                  {form[key].map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <input value={item} onChange={e => updateList(key, i, e.target.value)} className={inputCls} placeholder={key === 'included' ? 'e.g. Return flights' : 'e.g. Travel insurance'} />
                      {form[key].length > 1 && (
                        <button type="button" onClick={() => removeItem(key, i)} className="p-2.5 rounded-lg border border-border-dark text-text-secondary hover:text-red-400 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="flex justify-end gap-3 pb-8">
              <button type="button" onClick={() => router.push('/admin/tours')} className="px-6 py-2.5 rounded-lg border border-border-dark text-text-secondary hover:text-white text-sm font-medium transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={isSaving} className="px-8 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all disabled:opacity-50 shadow-lg shadow-primary/30">
                {isSaving ? 'Saving...' : 'Save Tour'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
