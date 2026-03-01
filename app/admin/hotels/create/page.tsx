"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createHotel } from '@/app/actions/hotelActions';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { Field } from '@/components/ui/Field';

type Destination = { id: string; name: string; country: string };

const STAR_RATINGS = [
  { value: 'UNRATED', label: 'Unrated' },
  { value: 'ONE_STAR', label: '1 Star' },
  { value: 'TWO_STAR', label: '2 Stars' },
  { value: 'THREE_STAR', label: '3 Stars' },
  { value: 'FOUR_STAR', label: '4 Stars' },
  { value: 'FIVE_STAR', label: '5 Stars' }
];

export default function CreateHotelPage() {
  const router = useRouter();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    slug: '',
    destinationId: '',
    description: '',
    starRating: 'UNRATED',
    address: '',
    amenities: [''],
    images: [''],
  });

  useEffect(() => {
    fetch('/api/admin/destinations').then(r => r.json()).then(setDestinations).catch(() => {});
  }, []);

  const handleNameChange = (name: string) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
    setForm(f => ({ ...f, name, slug }));
  };

  const updateList = (key: 'images' | 'amenities', index: number, value: string) => {
    setForm(f => {
      const arr = [...f[key]];
      arr[index] = value;
      return { ...f, [key]: arr };
    });
  };

  const addItem = (key: 'images' | 'amenities') => {
    setForm(f => ({ ...f, [key]: [...f[key], ''] }));
  };

  const removeItem = (key: 'images' | 'amenities', index: number) => {
    setForm(f => ({ ...f, [key]: f[key].filter((_, i) => i !== index) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSaving(true);

    const cleanedForm = {
      ...form,
      images: form.images.filter(Boolean),
      amenities: form.amenities.filter(Boolean),
      // Set default latitude, longitude via Prisma or ignore for now as they are optional
    };

    // Ignore starRating TS error to pass down the correct type or cast it if needed
    // The enum fits Prisma.HotelUncheckedCreateInput if we pass as string type which gets inferred correctly usually.
    const result = await createHotel(cleanedForm as any);
    setIsSaving(false);

    if (result) {
      router.push('/admin/hotels');
    } else {
      setError('Failed to create hotel. Please try again.');
    }
  };

  const inputCls = "w-full px-4 py-2.5 rounded-lg border border-border-dark bg-background-dark text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary text-sm";

  return (
    <div className="flex h-screen w-full bg-[#120d0d]">
      <AdminSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <AdminHeader title="Create New Hotel" description="Fill in the details to add a new property.">
          <div className="flex gap-3">
            <button type="button" onClick={() => router.push('/admin/hotels')} className="px-4 py-2 rounded-lg border border-border-dark bg-transparent text-text-secondary hover:text-white text-sm font-medium transition-colors">
              Cancel
            </button>
            <button form="create-hotel-form" type="submit" disabled={isSaving} className="px-6 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all disabled:opacity-50 shadow-lg shadow-primary/30">
              {isSaving ? 'Saving...' : 'Save Hotel'}
            </button>
          </div>
        </AdminHeader>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <form id="create-hotel-form" onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {error && (
              <div className="p-4 rounded-xl bg-red-900/20 border border-red-800 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Basic Info */}
            <div className="bg-surface-dark rounded-2xl border border-border-dark p-6 space-y-5">
              <h2 className="text-base font-bold text-white">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Hotel Name *">
                  <input required value={form.name} onChange={e => handleNameChange(e.target.value)} className={inputCls} placeholder="e.g. The Ritz-Carlton" />
                </Field>
                <Field label="Slug *">
                  <input required value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} className={inputCls} placeholder="auto-generated from name" />
                </Field>
                <Field label="Destination *">
                  <select required value={form.destinationId} onChange={e => setForm(f => ({ ...f, destinationId: e.target.value }))} className={inputCls}>
                    <option value="">Select a destination...</option>
                    {destinations.map(d => (
                      <option key={d.id} value={d.id}>{d.name}, {d.country}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Star Rating">
                  <select required value={form.starRating} onChange={e => setForm(f => ({ ...f, starRating: e.target.value }))} className={inputCls}>
                    {STAR_RATINGS.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Address *">
                  <input required value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} className={inputCls} placeholder="123 Luxury Ave, City" />
              </Field>
              <Field label="Description *">
                <textarea required value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className={inputCls + " min-h-[120px] resize-y"} placeholder="Describe this hotel..." rows={5} />
              </Field>
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

            {/* Amenities */}
            <div className="bg-surface-dark rounded-2xl border border-border-dark p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-white">Amenities</h2>
                <button type="button" onClick={() => addItem('amenities')} className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
                  <span className="material-symbols-outlined text-[18px]">add</span> Add
                </button>
              </div>
              {form.amenities.map((item, i) => (
                <div key={i} className="flex gap-2">
                  <input value={item} onChange={e => updateList('amenities', i, e.target.value)} className={inputCls} placeholder="e.g. Free Wi-Fi, Pool, Spa" />
                  {form.amenities.length > 1 && (
                    <button type="button" onClick={() => removeItem('amenities', i)} className="p-2.5 rounded-lg border border-border-dark text-text-secondary hover:text-red-400 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="flex justify-end gap-3 pb-8">
              <button type="button" onClick={() => router.push('/admin/hotels')} className="px-6 py-2.5 rounded-lg border border-border-dark text-text-secondary hover:text-white text-sm font-medium transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={isSaving} className="px-8 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all disabled:opacity-50 shadow-lg shadow-primary/30">
                {isSaving ? 'Saving...' : 'Save Hotel'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
