"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createEvent, getEventById, updateEvent } from '@/app/actions/eventActions';

export default function EventForm({ eventId }: { eventId?: string }) {
  const router = useRouter();
  const isEditing = !!eventId;
  
  const [loading, setLoading] = useState(isEditing);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    category: 'GENERAL',
    status: 'UPCOMING',
    startDate: '',
    endDate: '',
    location: '',
    price: '',
    capacity: '',
    images: [''],
    featured: false,
  });

  useEffect(() => {
    if (isEditing) {
      const fetchEvent = async () => {
        const { success, event } = await getEventById(eventId);
        if (success && event) {
          setFormData({
            title: event.title,
            slug: event.slug,
            description: event.description,
            category: event.category,
            status: event.status,
            startDate: new Date(event.startDate).toISOString().slice(0, 16),
            endDate: new Date(event.endDate).toISOString().slice(0, 16),
            location: event.location,
            price: event.price.toString(),
            capacity: event.capacity.toString(),
            images: event.images?.length ? event.images : [''],
            featured: event.featured,
          });
        } else {
          setError('Failed to load event details.');
        }
        setLoading(false);
      };
      fetchEvent();
    }
  }, [eventId, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'title' && !isEditing && !formData.slug) {
       // auto-generate slug
       const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
       setFormData(prev => ({ ...prev, title: value, slug }));
       return;
    }
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const addImageField = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImageField = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, images: newImages.length ? newImages : [''] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      capacity: parseInt(formData.capacity, 10),
      images: formData.images.filter(img => img.trim() !== ''),
    };

    const action = isEditing ? updateEvent.bind(null, eventId) : createEvent;
    const result = await action(payload);

    if (result.success) {
      router.push('/admin/events');
    } else {
      setError(result.error || 'Operation failed');
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-8 text-white">Loading event data...</div>;

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="text-slate-400 hover:text-white flex items-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">{isEditing ? 'Edit Event' : 'Create New Event'}</h1>
          <p className="text-slate-400">Fill in the details for the ticketing system.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-surface-dark border border-white/10 rounded-xl p-8">
        {error && (
          <div className="bg-red-500/20 text-red-400 border border-red-500/50 p-4 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">Event Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Slug (URL snippet)</label>
            <input
              type="text"
              name="slug"
              required
              value={formData.slug}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            >
              <option value="CONCERT">Concert</option>
              <option value="WORKSHOP">Workshop</option>
              <option value="FESTIVAL">Festival</option>
              <option value="CONFERENCE">Conference</option>
              <option value="EXHIBITION">Exhibition</option>
              <option value="GENERAL">General</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
            <textarea
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Start Date & Time</label>
            <input
              type="datetime-local"
              name="startDate"
              required
              value={formData.startDate}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-primary [color-scheme:dark]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">End Date & Time</label>
            <input
              type="datetime-local"
              name="endDate"
              required
              value={formData.endDate}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-primary [color-scheme:dark]"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">Location / Venue</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Price per Ticket ($)</label>
            <input
              type="number"
              step="0.01"
              name="price"
              required
              min="0"
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Total Capacity (Tickets Available)</label>
            <input
              type="number"
              name="capacity"
              required
              min="1"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            >
              <option value="UPCOMING">Upcoming</option>
              <option value="ONGOING">Ongoing</option>
              <option value="COMPLETED">Completed</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>

          <div className="flex items-center h-full pt-6">
             <label className="flex items-center gap-3 cursor-pointer">
               <input 
                  type="checkbox" 
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-white/10 bg-black/50 text-primary focus:ring-primary focus:ring-offset-black"
               />
               <span className="text-white font-medium">Feature on Homepage</span>
             </label>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-white">Event Images (URLs)</h3>
            <button 
              type="button" 
              onClick={addImageField}
              className="text-primary text-sm font-medium hover:text-white transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[18px]">add</span> Add Image
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.images.map((img, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="url"
                  value={img}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                />
                <button 
                  type="button" 
                  onClick={() => removeImageField(index)}
                  className="p-3 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors border border-red-500/20"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-white/10">
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50"
          >
            {submitting ? 'Saving...' : (isEditing ? 'Save Changes' : 'Create Event')}
            {!submitting && <span className="material-symbols-outlined text-[20px]">save</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
