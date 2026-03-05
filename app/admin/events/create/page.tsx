"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { createEvent } from '@/app/actions/eventActions';

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
      // Validate required fields
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create New Event</h1>

        {error && (
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-4 mb-6 text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold">Basic Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  URL Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  placeholder="e.g., tech-conference-2024"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category: e.target.value as any,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>CONFERENCE</option>
                  <option>CONCERT</option>
                  <option>EXPERIENCE</option>
                  <option>WORKSHOP</option>
                  <option>OTHER</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Destination *
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      destination: e.target.value,
                    }))
                  }
                  placeholder="e.g., Bangkok, Thailand"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Organizer
                </label>
                <input
                  type="text"
                  value={formData.organizer}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      organizer: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Start Date *
                </label>
                <input
                  type="datetime-local"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      startDate: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  End Date *
                </label>
                <input
                  type="datetime-local"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      endDate: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Total Capacity *
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.totalCapacity}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      totalCapacity: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold">Images</h2>

            <div className="flex gap-2">
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
                className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                onClick={handleAddImage}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Add
              </button>
            </div>

            {formData.images.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {formData.images.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={img}
                      alt="Event"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(i)}
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Highlights */}
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold">What's Included</h2>

            <div className="flex gap-2">
              <input
                type="text"
                value={highlightText}
                onChange={(e) => setHighlightText(e.target.value)}
                placeholder="e.g., Free breakfast"
                className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                onClick={handleAddHighlight}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Add
              </button>
            </div>

            {formData.highlights.length > 0 && (
              <ul className="space-y-2">
                {formData.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg"
                  >
                    <span>{highlight}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveHighlight(i)}
                      className="text-red-400 hover:text-red-300"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Ticket Types */}
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Ticket Types *</h2>
              <button
                type="button"
                onClick={handleAddTicketType}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
              >
                + Add Type
              </button>
            </div>

            {ticketTypes.map((tt, i) => (
              <div
                key={i}
                className="bg-gray-700 rounded-lg p-4 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">Ticket Type {i + 1}</h3>
                  {ticketTypes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTicketType(i)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name (e.g., VIP)"
                    value={tt.name}
                    onChange={(e) => {
                      const new Tickets = [...ticketTypes];
                      newTickets[i].name = e.target.value;
                      setTicketTypes(newTickets);
                    }}
                    className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="number"
                    placeholder="Base Price"
                    value={tt.basePrice}
                    onChange={(e) => {
                      const newTickets = [...ticketTypes];
                      newTickets[i].basePrice = e.target.value;
                      setTicketTypes(newTickets);
                    }}
                    className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="number"
                    placeholder="Max Quantity"
                    value={tt.maxQuantity}
                    onChange={(e) => {
                      const newTickets = [...ticketTypes];
                      newTickets[i].maxQuantity = e.target.value;
                      setTicketTypes(newTickets);
                    }}
                    className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Early Bird (Optional) */}
                <div className="border-t border-gray-600 pt-3">
                  <p className="text-sm text-gray-300 mb-2">Early Bird (Optional)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      placeholder="Early Bird End Date"
                      value={tt.earlyBirdEndDate || ''}
                      onChange={(e) => {
                        const newTickets = [...ticketTypes];
                        newTickets[i].earlyBirdEndDate = e.target.value;
                        setTicketTypes(newTickets);
                      }}
                      className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="number"
                      placeholder="Early Bird Price"
                      step="0.01"
                      value={tt.earlyBirdPrice || ''}
                      onChange={(e) => {
                        const newTickets = [...ticketTypes];
                        newTickets[i].earlyBirdPrice = e.target.value;
                        setTicketTypes(newTickets);
                      }}
                      className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Surge Pricing (Optional) */}
                <div className="border-t border-gray-600 pt-3">
                  <p className="text-sm text-gray-300 mb-2">Surge Pricing (Optional)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Threshold %"
                      value={tt.surgeThreshold || ''}
                      onChange={(e) => {
                        const newTickets = [...ticketTypes];
                        newTickets[i].surgeThreshold = e.target.value;
                        setTicketTypes(newTickets);
                      }}
                      className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="number"
                      placeholder="Multiplier (e.g., 1.25)"
                      step="0.01"
                      value={tt.surgeMultiplier || ''}
                      onChange={(e) => {
                        const newTickets = [...ticketTypes];
                        newTickets[i].surgeMultiplier = e.target.value;
                        setTicketTypes(newTickets);
                      }}
                      className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Seating Zones (Optional) */}
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Seating Zones (Optional)</h2>
              <button
                type="button"
                onClick={handleAddSeatingZone}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 text-sm"
              >
                + Add Zone
              </button>
            </div>

            {seatingZones.map((zone, i) => (
              <div
                key={i}
                className="bg-gray-700 rounded-lg p-4 grid grid-cols-3 gap-3"
              >
                <input
                  type="text"
                  placeholder="Section Name"
                  value={zone.sectionName}
                  onChange={(e) => {
                    const newZones = [...seatingZones];
                    newZones[i].sectionName = e.target.value;
                    setSeatingZones(newZones);
                  }}
                  className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="number"
                  placeholder="Capacity"
                  value={zone.capacity}
                  onChange={(e) => {
                    const newZones = [...seatingZones];
                    newZones[i].capacity = e.target.value;
                    setSeatingZones(newZones);
                  }}
                  className="px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Price Modifier"
                    value={zone.priceModifier || '1.0'}
                    onChange={(e) => {
                      const newZones = [...seatingZones];
                      newZones[i].priceModifier = e.target.value;
                      setSeatingZones(newZones);
                    }}
                    className="flex-1 px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSeatingZone(i)}
                    className="px-3 py-2 text-red-400 hover:text-red-300"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Refund Policy */}
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold">Refund Policy</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Cancellation Deadline (Days)
                </label>
                <input
                  type="number"
                  value={refundPolicy.cancellationDeadlineDays}
                  onChange={(e) =>
                    setRefundPolicy((prev) => ({
                      ...prev,
                      cancellationDeadlineDays: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Refund % Before Deadline
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={refundPolicy.refundPercentageBeforeDeadline}
                  onChange={(e) =>
                    setRefundPolicy((prev) => ({
                      ...prev,
                      refundPercentageBeforeDeadline: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Refund % After Deadline
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={refundPolicy.refundPercentageAfterDeadline}
                  onChange={(e) =>
                    setRefundPolicy((prev) => ({
                      ...prev,
                      refundPercentageAfterDeadline: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 font-semibold"
            >
              {loading ? 'Creating...' : 'Create Event'}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
