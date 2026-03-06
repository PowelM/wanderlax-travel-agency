import { getEventBySlug } from '@/app/actions/eventActions';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { success, event } = await getEventBySlug(params.slug);
  
  if (!success || !event) {
    return { title: 'Event Not Found | Wanderlux' };
  }

  return {
    title: `${event.title} | Wanderlux Events`,
    description: event.description,
  };
}

export default async function EventDetailsPage({ params }: { params: { slug: string } }) {
  const { success, event } = await getEventBySlug(params.slug);

  if (!success || !event) {
    notFound();
  }

  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const isOneDay = startDate.toDateString() === endDate.toDateString();

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full mt-24">
        {event.images && event.images.length > 0 ? (
          <Image 
            src={event.images[0]} 
            alt={event.title} 
            fill 
            className="object-cover" 
            priority 
          />
        ) : (
          <div className="w-full h-full bg-slate-900"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6">
              {event.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight max-w-4xl">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
               <div className="flex items-center gap-3">
                 <div className="size-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                 </div>
                 <div>
                   <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Date</p>
                   <p className="font-medium text-white">
                     {isOneDay 
                        ? startDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
                        : `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                     }
                   </p>
                 </div>
               </div>
               
               <div className="h-10 w-px bg-white/20 hidden md:block"></div>
               
               <div className="flex items-center gap-3">
                 <div className="size-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                 </div>
                 <div>
                   <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Location</p>
                   <p className="font-medium text-white">{event.location}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-black text-white mb-8 border-b border-white/10 pb-4">About this Event</h2>
              <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                <p className="whitespace-pre-line leading-relaxed">{event.description}</p>
              </div>
            </section>
            
            {event.images && event.images.length > 1 && (
              <section>
                <h2 className="text-3xl font-black text-white mb-8 border-b border-white/10 pb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.images.slice(1).map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border border-white/10">
                      <Image src={img} alt={`${event.title} gallery image ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="mb-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Price per ticket</p>
                <p className="text-5xl font-black text-white tracking-tight">${Number(event.price).toFixed(2)}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-slate-400 font-medium">Availability</span>
                  <span className={`font-bold ${event.capacity - event.soldTickets > 0 ? 'text-green-400' : 'text-primary'}`}>
                    {event.capacity - event.soldTickets > 0 
                      ? `${event.capacity - event.soldTickets} remaining` 
                      : 'Sold Out'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-slate-400 font-medium">Time</span>
                  <span className="text-white font-medium">
                    {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>

              {event.capacity - event.soldTickets > 0 ? (
                <Link 
                  href={`/events/${event.slug}/book`}
                  className="w-full flex items-center justify-center h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg transition-all shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)] hover:-translate-y-1 group"
                >
                  Reserve Tickets
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              ) : (
                <button 
                  disabled
                  className="w-full flex items-center justify-center h-16 rounded-2xl bg-white/10 text-white/50 font-black text-lg cursor-not-allowed border border-white/5"
                >
                  Sold Out
                </button>
              )}
              
              <p className="text-center text-sm text-slate-500 mt-6 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                Secure checkout and instant delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
