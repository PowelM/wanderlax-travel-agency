"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import { getEventBySlug, createTicketBooking, addToWaitlist } from '@/app/actions/eventActions';

interface EventDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  totalCapacity: number;
  capacityRemaining: number;
  category: string;
  status: string;
  organizer?: string | null;
  images: string[];
  highlights: string[];
  isSoldOut: boolean;
  ticketTypes: Array<{
    id: string;
    name: string;
    basePrice: number;
    maxQuantity: number;
    quantitySold: number;
    earlyBirdEndDate?: Date | null;
    earlyBirdPrice?: number | null;
  }>;
  seatingZones?: Array<{
    id: string;
    sectionName: string;
    capacity: number;
    bookedCount: number;
    priceModifier: number;
  }>;
  refundPolicy?: {
    cancellationDeadlineDays: number;
    refundPercentageBeforeDeadline: number;
    refundPercentageAfterDeadline: number;
  };
}

interface AttendeeDetail {
  name: string;
  email: string;
}

function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function isEarlyBird(ticketType: any): boolean {
  if (!ticketType.earlyBirdEndDate || !ticketType.earlyBirdPrice) return false;
  return new Date() < new Date(ticketType.earlyBirdEndDate);
}

function getTicketPrice(ticketType: any): number {
  if (isEarlyBird(ticketType)) {
    return ticketType.earlyBirdPrice;
  }
  return ticketType.basePrice;
}

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useUser();

  const slug = params.slug as string;
  const shouldShowBooking = searchParams.get('bookNow') === 'true';

  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTicketType, setSelectedTicketType] = useState<string>('');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedSeating, setSelectedSeating] = useState<string>('');
  const [attendeeDetails, setAttendeeDetails] = useState<AttendeeDetail[]>([]);
  const [showBookingForm, setShowBookingForm] = useState(shouldShowBooking);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Load event
  useEffect(() => {
    async function fetchEvent() {
      try {
        const data = await getEventBySlug(slug);
        if (data) {
          setEvent(data);
          if (data.ticketTypes.length > 0) {
            setSelectedTicketType(data.ticketTypes[0].id);
          }
          if (data.seatingZones && data.seatingZones.length > 0) {
            setSelectedSeating(data.seatingZones[0].id);
          }
        }
      } catch (err) {
        console.error('Failed to load event:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [slug]);

  // Update attendee details when quantity changes
  useEffect(() => {
    if (ticketQuantity > 0) {
      const newAttendees = Array(ticketQuantity).fill(null).map((_, i) => 
        attendeeDetails[i] || { name: '', email: '' }
      );
      setAttendeeDetails(newAttendees);
    }
  }, [ticketQuantity]);

  const handleBookTickets = async () => {
    if (!user) {
      router.push('/portal/login');
      return;
    }

    // Validate attendee details
    if (attendeeDetails.some((a) => !a.name.trim() || !a.email.trim())) {
      setBookingError('Please fill in all attendee details');
      return;
    }

    setIsSubmitting(true);
    setBookingError('');

    try {
      const result = await createTicketBooking({
        eventSlug: slug,
        ticketTypeId: selectedTicketType,
        quantity: ticketQuantity,
        seatSectionId: selectedSeating || undefined,
        attendeeDetails,
        clerkId: user.id,
        email: user.primaryEmailAddress?.emailAddress || '',
        firstName: user.firstName || undefined,
        lastName: user.lastName || undefined,
      });

      if (result.success) {
        setBookingSuccess(true);
        setTimeout(() => {
          router.push(`/portal/book?bookingRef=${result.booking?.bookingRef}`);
        }, 2000);
      } else if (result.error === 'SOLD_OUT') {
        setShowBookingForm(false);
        setShowWaitlistForm(true);
      } else {
        setBookingError(result.error || 'Failed to book tickets');
      }
    } catch (error) {
      setBookingError(String(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJoinWaitlist = async () => {
    if (!user) {
      router.push('/portal/login');
      return;
    }

    setIsSubmitting(true);
    setBookingError('');

    try {
      const result = await addToWaitlist({
        eventSlug: slug,
        ticketTypeId: selectedTicketType,
        quantity: ticketQuantity,
        clerkId: user.id,
        email: user.primaryEmailAddress?.emailAddress || '',
      });

      if (result.success) {
        setBookingSuccess(true);
        setShowWaitlistForm(false);
      } else {
        setBookingError(result.error || 'Failed to join waitlist');
      }
    } catch (error) {
      setBookingError(String(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <p className="mt-4 text-white">Loading event...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-4">Event not found</p>
          <button
            onClick={() => router.push('/events')}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const selectedTicket = event.ticketTypes.find((t) => t.id === selectedTicketType);
  const ticketPrice = selectedTicket ? getTicketPrice(selectedTicket) : 0;
  const totalPrice = ticketPrice * ticketQuantity;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-800 overflow-hidden">
        {event.images[0] ? (
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Meta */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-semibold">
                  {event.category}
                </span>
                {event.isSoldOut && (
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm font-semibold text-gray-300">
                    SOLD OUT
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

              <div className="grid grid-cols-2 gap-6 text-gray-300 mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">📅 Date</div>
                  <div className="text-lg font-semibold">{formatDate(event.startDate)}</div>
                  {new Date(event.startDate).toDateString() !== new Date(event.endDate).toDateString() && (
                    <div className="text-sm text-gray-400">to {formatDate(event.endDate)}</div>
                  )}
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">📍 Location</div>
                  <div className="text-lg font-semibold">{event.destination}</div>
                </div>
              </div>

              {event.organizer && (
                <div className="text-gray-400">
                  <span className="font-semibold text-white">Organized by:</span> {event.organizer}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-300 leading-relaxed">{event.description}</p>
            </div>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {event.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-red-400 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Refund Policy */}
            {event.refundPolicy && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Refund Policy</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>
                    <span className="font-semibold text-white">
                      {event.refundPolicy.cancellationDeadlineDays} days before event:
                    </span>{' '}
                    {event.refundPolicy.refundPercentageBeforeDeadline}% refund
                  </p>
                  <p>
                    <span className="font-semibold text-white">Within {event.refundPolicy.cancellationDeadlineDays} days:</span> {event.refundPolicy.refundPercentageAfterDeadline}% refund
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-6 space-y-6">
              {bookingSuccess ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-2">✓</div>
                  <p className="text-lg font-semibold mb-2">Booking Successful!</p>
                  <p className="text-gray-400 text-sm">Redirecting to checkout...</p>
                </div>
              ) : showWaitlistForm ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Join Waitlist</h3>
                  <p className="text-gray-400 text-sm">
                    This ticket type is currently sold out. Join the waitlist and we'll notify you when tickets become available.
                  </p>

                  {bookingError && (
                    <div className="bg-red-900/20 border border-red-600 rounded-lg p-3 text-sm text-red-200">
                      {bookingError}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold mb-2">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={ticketQuantity}
                      onChange={(e) => setTicketQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <button
                    onClick={handleJoinWaitlist}
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>

                  <button
                    onClick={() => setShowWaitlistForm(false)}
                    className="w-full px-6 py-2 text-gray-300 hover:text-white"
                  >
                    Back
                  </button>
                </div>
              ) : showBookingForm ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Book Tickets</h3>

                  {bookingError && (
                    <div className="bg-red-900/20 border border-red-600 rounded-lg p-3 text-sm text-red-200">
                      {bookingError}
                    </div>
                  )}

                  {/* Ticket Type Selection */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ticket Type</label>
                    <select
                      value={selectedTicketType}
                      onChange={(e) => setSelectedTicketType(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      {event.ticketTypes.map((type) => {
                        const available = type.maxQuantity - type.quantitySold;
                        const price = getTicketPrice(type);
                        const isEB = isEarlyBird(type);

                        return (
                          <option key={type.id} value={type.id} disabled={available === 0}>
                            {type.name} - ${price}
                            {isEB && ' (Early Bird)'}
                            {available === 0 && ' (Sold Out)'}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      max={selectedTicket?.maxQuantity || 10}
                      value={ticketQuantity}
                      onChange={(e) => setTicketQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  {/* Seating (if available) */}
                  {event.seatingZones && event.seatingZones.length > 0 && (
                    <div>
                      <label className="block text-sm font-semibold mb-2">Seating Section</label>
                      <select
                        value={selectedSeating}
                        onChange={(e) => setSelectedSeating(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        {event.seatingZones.map((zone) => {
                          const available = zone.capacity - zone.bookedCount;
                          return (
                            <option key={zone.id} value={zone.id} disabled={available === 0}>
                              {zone.sectionName} ({available} available)
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}

                  {/* Attendee Details */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Attendee Details</label>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {attendeeDetails.map((attendee, i) => (
                        <div key={i} className="space-y-2 p-3 bg-gray-700 rounded-lg">
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={attendee.name}
                            onChange={(e) => {
                              const newDetails = [...attendeeDetails];
                              newDetails[i].name = e.target.value;
                              setAttendeeDetails(newDetails);
                            }}
                            className="w-full px-3 py-1 bg-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            value={attendee.email}
                            onChange={(e) => {
                              const newDetails = [...attendeeDetails];
                              newDetails[i].email = e.target.value;
                              setAttendeeDetails(newDetails);
                            }}
                            className="w-full px-3 py-1 bg-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-700 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Price per ticket:</span>
                      <span>${ticketPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Quantity:</span>
                      <span>{ticketQuantity}</span>
                    </div>
                    <div className="border-t border-gray-600 pt-2 flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-red-400">${totalPrice}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <button
                    onClick={handleBookTickets}
                    disabled={isSubmitting || !user}
                    className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : 'Continue to Checkout'}
                  </button>

                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="w-full px-6 py-2 text-gray-300 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-400 mb-1">From ${Math.min(...event.ticketTypes.map((t) => getTicketPrice(t)))}</p>
                    <p className="text-sm text-gray-400">per person</p>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Capacity remaining:</span>
                      <span className="font-semibold">{event.capacityRemaining} / {event.totalCapacity}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600"
                        style={{
                          width: `${((event.totalCapacity - event.capacityRemaining) / event.totalCapacity) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (!user) {
                        router.push('/portal/login');
                      } else {
                        setShowBookingForm(true);
                      }
                    }}
                    disabled={event.isSoldOut}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
                      event.isSoldOut
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {event.isSoldOut ? 'Sold Out' : 'Book Now'}
                  </button>

                  {event.isSoldOut && (
                    <button
                      onClick={() => setShowWaitlistForm(true)}
                      className="w-full px-6 py-2 border border-red-600 text-red-400 hover:bg-red-600/10 rounded-lg font-semibold"
                    >
                      Join Waitlist
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
