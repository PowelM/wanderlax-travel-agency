"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { createEvent } from '@/app/actions/eventActions';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { Field } from '@/components/ui/Field';

interface TicketTypeForm {
  name: string;
  basePrice: string;
  maxQuantity: string;
  earlyBirdEndDate?: string;
  earlyBirdPrice?: string;
  surgeThreshold?: string;
  surgeMultiplier?: string;
}

interface SeatingZoneForm {
  sectionName: string;
  capacity: string;
  priceModifier?: string;
}

export default function CreateEventPage() {
  const router = useRouter();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    destination: '',
    startDate: '',
    endDate: '',
    totalCapacity: '',
    category: 'CONFERENCE' as const,
    organizer: '',
    images: [] as string[],
    highlights: [] as string[],
  });

  const [ticketTypes, setTicketTypes] = useState<TicketTypeForm[]>([
    { name: 'General Admission', basePrice: '99', maxQuantity: '100' },
  ]);

  const [seatingZones, setSeatingZones] = useState<SeatingZoneForm[]>([]);
  const [refundPolicy, setRefundPolicy] = useState({
    cancellationDeadlineDays: '7',
    refundPercentageBeforeDeadline: '100',
    refundPercentageAfterDeadline: '50',
  });

  const [imageUrl, setImageUrl] = useState('');
  const [highlightText, setHighlightText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTitleChange = (title: string) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
    setFormData((prev) => ({ ...prev, title, slug }));
  };

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, imageUrl],
      }));
      setImageUrl('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleAddHighlight = () => {
    if (highlightText.trim()) {
      setFormData((prev) => ({
        ...prev,
        highlights: [...prev.highlights, highlightText],
      }));
      setHighlightText('');
    }
  };

  const handleRemoveHighlight = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index),
    }));
  };

  const handleAddTicketType = () => {
    setTicketTypes([
      ...ticketTypes,
      { name: '', basePrice: '', maxQuantity: '' },
    ]);
  };

  const handleRemoveTicketType = (index: number) => {
    setTicketTypes(ticketTypes.filter((_, i) => i !== index));
  };

  const handleAddSeatingZone = () => {
    setSeatingZones([...seatingZones, { sectionName: '', capacity: '' }]);
  };

  const handleRemoveSeatingZone = (index: number) => {
    setSeatingZones(seatingZones.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setError('');

    try {
      if (
        !formData.title ||
        !formData.slug ||
        !formData.description ||
        !formData.destination||
        !formData.startDate ||
        !formData.endDate ||
        !formData.totalCapacity
      ) {
        throw new Error('Please fill in all required fields');
      }

      if (ticketTypes.length === 0) {
        throw new Error('At least one ticket type is required');
      }

      const result = await createEvent({
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        destination: formData.destination,
        startDate: new Date(formData.startDate),
        endDate: new Date(formData.endDate),
        totalCapacity: parseInt(formData.totalCapacity),
        category: formData.category,
        organizer: formData.organizer || undefined,
        images: formData.images,
        highlights: formData.highlights,
        ticketTypes: ticketTypes.map((tt) => ({
          name: tt.name,
          basePrice: parseFloat(tt.basePrice),
          maxQuantity: parseInt(tt.maxQuantity),
          earlyBirdEndDate: tt.earlyBirdEndDate ? new Date(tt.earlyBirdEndDate) : undefined,
          earlyBirdPrice: tt.earlyBirdPrice ? parseFloat(tt.earlyBirdPrice) : undefined,
          surgeThreshold: tt.surgeThreshold ? parseInt(tt.surgeThreshold) : undefined,
          surgeMultiplier: tt.surgeMultiplier ? parseFloat(tt.surgeMultiplier) : undefined,
        })),
        ...(seatingZones.length > 0 && {
          seatingZones: seatingZones.map((sz) => ({
            sectionName: sz.sectionName,
            capacity: parseInt(sz.capacity),
            priceModifier: sz.priceModifier ? parseFloat(sz.priceModifier) : 1.0,
          })),
        }),
        refundPolicy: {
          cancellationDeadlineDays: parseInt(refundPolicy.cancellationDeadlineDays),
          refundPercentageBeforeDeadline: parseInt(
            refundPolicy.refundPercentageBeforeDeadline
          ),
          refundPercentageAfterDeadline: parseInt(
            refundPolicy.refundPercentageAfterDeadline
          ),
        },
      });

      if (result.success) {
        router.push('/admin/events');
      } else {
        setError(result.error || 'Failed to create event');
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full px-4 py-2.5 rounded-lg border border-border-dark bg-background-dark text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary text-sm";
  const sectionCls = "bg-surface-dark rounded-2xl border border-border-dark p-6 space-y-5";

  return (
    <div className="flex h-screen w-full bg-[#120d0d]">
      <AdminSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <AdminHeader title="Create New Event" description="Fill in the details to add a new event.">
          <div className="flex gap-3">
            <button type="button" onClick={() => router.push('/admin/events')} className="px-4 py-2 rounded-lg border border-border-dark bg-transparent text-text-secondary hover:text-white text-sm font-medium transition-colors">
              Cancel
            </button>
            <button form="create-event-form" type="submit" disabled={loading} className="px-6 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all disabled:opacity-50 shadow-lg shadow-primary/30">
              {loading ? 'Creating...' : 'Create Event'}
            </button>
          </div>
        </AdminHeader>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <form id="create-event-form" onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {error && (
              <div className="p-4 rounded-xl bg-red-900/20 border border-red-800 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className={sectionCls}>
              <h2 className="text-base font-bold text-white">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Event Title *">
                  <input
                    required
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className={inputCls}
                    placeholder="e.g. Tech Conference 2024"
                  />
                </Field>
                <Field label="URL Slug *">
                  <input
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                    className={inputCls}
                    placeholder="tech-conference-2024"
                  />
                </Field>
                <Field label="Category *">
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value as any }))}
                    className={inputCls}
                  >
                    <option value="CONFERENCE">Conference</option>
                    <option value="CONCERT">Concert</option>
                    <option value="EXPERIENCE">Experience</option>
                    <option value="WORKSHOP">Workshop</option>
                    <option value="OTHER">Other</option>
                  </select>
                </Field>
                <Field label="Destination *">
                  <input
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData((prev) => ({ ...prev, destination: e.target.value }))}
                    className={inputCls}
                    placeholder="e.g., Bangkok, Thailand"
                  />
                </Field>
                <Field label="Start Date *">
                  <input
                    required
                    type="datetime-local"
                    value={formData.startDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                    className={inputCls}
                  />
                </Field>
                <Field label="End Date *">
                  <input
                    required
                    type="datetime-local"
                    value={formData.endDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                    className={inputCls}
                  />
                </Field>
                <Field label="Total Capacity *">
                  <input
                    required
                    type="number"
                    min="1"
                    value={formData.totalCapacity}
                    onChange={(e) => setFormData((prev) => ({ ...prev, totalCapacity: e.target.value }))}
                    className={inputCls}
                    placeholder="e.g., 500"
                  />
                </Field>
                <Field label="Organizer">
                  <input
                    value={formData.organizer}
                    onChange={(e) => setFormData((prev) => ({ ...prev, organizer: e.target.value }))}
                    className={inputCls}
                    placeholder="e.g., John Doe"
                  />
                </Field>
              </div>
              <Field label="Description *">
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  className={inputCls + " min-h-[120px] resize-y"}
                  placeholder="Describe this event..."
                  rows={5}
                />
              </Field>
            </div>

            <div className={sectionCls}>
              <h2 className="text-base font-bold text-white">Images</h2>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Enter image URL"
                  className={inputCls}
                />
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-primary/30 shrink-0"
                >
                  Add
                </button>
              </div>

              {formData.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.images.map((img, i) => (
                    <div key={i} className="relative group rounded-lg overflow-hidden border border-border-dark">
                      <img src={img} alt="Event" className="w-full h-32 object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(i)}
                        className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={sectionCls}>
              <h2 className="text-base font-bold text-white">What's Included</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={highlightText}
                  onChange={(e) => setHighlightText(e.target.value)}
                  placeholder="e.g., Free breakfast"
                  className={inputCls}
                />
                <button
                  type="button"
                  onClick={handleAddHighlight}
                  className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-primary/30 shrink-0"
                >
                  Add
                </button>
              </div>

              {formData.highlights.length > 0 && (
                <ul className="space-y-2">
                  {formData.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center justify-between bg-background-dark border border-border-dark px-4 py-3 rounded-lg text-sm text-slate-300">
                      <span>{highlight}</span>
                      <button type="button" onClick={() => handleRemoveHighlight(i)} className="text-text-secondary hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={sectionCls}>
              <div className="flex justify-between items-center">
                <h2 className="text-base font-bold text-white">Ticket Types *</h2>
                <button
                  type="button"
                  onClick={handleAddTicketType}
                  className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span> Add Type
                </button>
              </div>

              {ticketTypes.map((tt, i) => (
                <div key={i} className="bg-background-dark border border-border-dark rounded-xl p-5 space-y-4">
                  <div className="flex justify-between items-center bg-surface-dark -mx-5 -mt-5 px-5 py-3 border-b border-border-dark rounded-t-xl mb-4">
                    <h3 className="text-sm font-bold text-white">Ticket Class {i + 1}</h3>
                    {ticketTypes.length > 1 && (
                      <button type="button" onClick={() => handleRemoveTicketType(i)} className="text-text-secondary hover:text-red-400 text-sm font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border-dark pb-6">
                    <Field label="Name">
                      <input
                        required
                        type="text"
                        placeholder="e.g., VIP"
                        value={tt.name}
                        onChange={(e) => {
                          const newTickets = [...ticketTypes];
                          newTickets[i].name = e.target.value;
                          setTicketTypes(newTickets);
                        }}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Base Price">
                      <input
                        required
                        type="number"
                        placeholder="Price"
                        value={tt.basePrice}
                        onChange={(e) => {
                          const newTickets = [...ticketTypes];
                          newTickets[i].basePrice = e.target.value;
                          setTicketTypes(newTickets);
                        }}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Max Quantity">
                      <input
                        required
                        type="number"
                        placeholder="Quantity"
                        value={tt.maxQuantity}
                        onChange={(e) => {
                          const newTickets = [...ticketTypes];
                          newTickets[i].maxQuantity = e.target.value;
                          setTicketTypes(newTickets);
                        }}
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-border-dark rounded-lg p-4 space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Early Bird (Optional)</h4>
                      <div className="space-y-4">
                        <Field label="End Date">
                          <input
                            type="date"
                            value={tt.earlyBirdEndDate || ''}
                            onChange={(e) => {
                              const newTickets = [...ticketTypes];
                              newTickets[i].earlyBirdEndDate = e.target.value;
                              setTicketTypes(newTickets);
                            }}
                            className={inputCls}
                          />
                        </Field>
                        <Field label="EB Price">
                          <input
                            type="number"
                            step="0.01"
                            value={tt.earlyBirdPrice || ''}
                            onChange={(e) => {
                              const newTickets = [...ticketTypes];
                              newTickets[i].earlyBirdPrice = e.target.value;
                              setTicketTypes(newTickets);
                            }}
                            className={inputCls}
                          />
                        </Field>
                      </div>
                    </div>

                    <div className="border border-border-dark rounded-lg p-4 space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Surge Pricing (Optional)</h4>
                      <div className="space-y-4">
                        <Field label="Threshold %">
                          <input
                            type="number"
                            value={tt.surgeThreshold || ''}
                            onChange={(e) => {
                              const newTickets = [...ticketTypes];
                              newTickets[i].surgeThreshold = e.target.value;
                              setTicketTypes(newTickets);
                            }}
                            className={inputCls}
                          />
                        </Field>
                        <Field label="Multiplier">
                          <input
                            type="number"
                            step="0.01"
                            placeholder="e.g., 1.25"
                            value={tt.surgeMultiplier || ''}
                            onChange={(e) => {
                              const newTickets = [...ticketTypes];
                              newTickets[i].surgeMultiplier = e.target.value;
                              setTicketTypes(newTickets);
                            }}
                            className={inputCls}
                          />
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={sectionCls}>
              <div className="flex justify-between items-center">
                <h2 className="text-base font-bold text-white">Seating Zones (Optional)</h2>
                <button
                  type="button"
                  onClick={handleAddSeatingZone}
                  className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span> Add Zone
                </button>
              </div>

              {seatingZones.map((zone, i) => (
                <div key={i} className="flex gap-3 items-end bg-background-dark p-4 rounded-xl border border-border-dark">
                  <div className="flex-1">
                    <Field label="Section Name">
                      <input
                        type="text"
                        value={zone.sectionName}
                        onChange={(e) => {
                          const newZones = [...seatingZones];
                          newZones[i].sectionName = e.target.value;
                          setSeatingZones(newZones);
                        }}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <div className="flex-1">
                    <Field label="Capacity">
                      <input
                        type="number"
                        value={zone.capacity}
                        onChange={(e) => {
                          const newZones = [...seatingZones];
                          newZones[i].capacity = e.target.value;
                          setSeatingZones(newZones);
                        }}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <div className="flex-1">
                    <Field label="Price Modifier">
                      <input
                        type="number"
                        step="0.1"
                        value={zone.priceModifier || '1.0'}
                        onChange={(e) => {
                          const newZones = [...seatingZones];
                          newZones[i].priceModifier = e.target.value;
                          setSeatingZones(newZones);
                        }}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <button type="button" onClick={() => handleRemoveSeatingZone(i)} className="p-2.5 rounded-lg border border-border-dark mb-0.5 text-text-secondary hover:text-red-400 transition-colors bg-surface-dark">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              ))}
              {seatingZones.length === 0 && (
                <p className="text-sm text-slate-500">No seating zones defined. General admission applies to everyone.</p>
              )}
            </div>

            <div className={sectionCls}>
              <h2 className="text-base font-bold text-white">Refund Policy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Field label="Deadline (Days)">
                  <input
                    type="number"
                    value={refundPolicy.cancellationDeadlineDays}
                    onChange={(e) => setRefundPolicy((prev) => ({ ...prev, cancellationDeadlineDays: e.target.value }))}
                    className={inputCls}
                  />
                </Field>
                <Field label="Refund % Before">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={refundPolicy.refundPercentageBeforeDeadline}
                    onChange={(e) => setRefundPolicy((prev) => ({ ...prev, refundPercentageBeforeDeadline: e.target.value }))}
                    className={inputCls}
                  />
                </Field>
                <Field label="Refund % After">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={refundPolicy.refundPercentageAfterDeadline}
                    onChange={(e) => setRefundPolicy((prev) => ({ ...prev, refundPercentageAfterDeadline: e.target.value }))}
                    className={inputCls}
                  />
                </Field>
              </div>
            </div>

            <div className="flex justify-end gap-3 pb-8">
              <button type="button" onClick={() => router.push('/admin/events')} className="px-6 py-2.5 rounded-lg border border-border-dark text-text-secondary hover:text-white text-sm font-medium transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={loading} className="px-8 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all disabled:opacity-50 shadow-lg shadow-primary/30">
                {loading ? 'Creating...' : 'Create Event'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
