import React from 'react';
import Link from 'next/link';

export default function SerengetiSafariPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display antialiased pt-20">
      <style dangerouslySetInnerHTML={{__html: `
        .serengeti-bg::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.02;
            pointer-events: none;
            z-index: 9999;
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5znmdqKE6Jq2bqDNPWyii2iMAl_WZ0iUQvezjEFIOMsh6_xDa0f3SABub5WKcUBV1KKK61aKCMjFwglw74t_fcl2WhtY0A4L6voinGmIBXGm3_8xRIsatOLK-wJ3JlM57y-0IHyoXmJb1jreTpMYONpUZ4nBzsFGP79LZtrqUOvOnP8Oirc7uMuqG849IRDtqHLThgdJfYWAg0fu9gkQKrcig3ZIbhLsO_7P96qXG4e6CNHc_cYlNs6gMK603SZNA6RlTYomiJA');
        }
        .serengeti-glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}} />
      <div className="serengeti-bg"></div>
      
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
{/* Breadcrumb */}
<nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
<a className="hover:text-primary" href="#">Home</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary" href="#">Africa</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary" href="#">Tanzania</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-200">Serengeti Private Safari</span>
</nav>
{/* Hero Section */}
<section className="relative h-[600px] rounded-3xl overflow-hidden mb-12">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Cinematic aerial view of the Serengeti savanna at sunset" style={{"backgroundImage":"linear-gradient(to top, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.2) 50%, rgba(15,15,15,0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxLarKtK0cq2HAQj8cC730TZmxIFlSBa6-2h-qoaj1vn0sPKUkOloTBfknfkPvqWK3862UPmvPYtNrbNd7i14lG0zMQdtlwozod9Lc3Q1YYzLzKeRS0zfIRPh55L6VwrvwV4D54LwE2wvi-nmxlO5K7ykkElkgoLoge6Mx0yKMIs-o0-J5zuDVwRlYjX8KZqLCOw4eeklEkyLcX1HN4dYui5jStv6d5rnpYEVemJL2WdcwVfHYzHRvfaIPj5gfCRSmJn4CVIFE0Q')"}}></div>
<div className="absolute bottom-0 left-0 p-8 md:p-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-primary">
<span className="material-symbols-outlined fill-1 text-lg">star</span>
<span className="material-symbols-outlined fill-1 text-lg">star</span>
<span className="material-symbols-outlined fill-1 text-lg">star</span>
<span className="material-symbols-outlined fill-1 text-lg">star</span>
<span className="material-symbols-outlined fill-1 text-lg">star</span>
</div>
<span className="text-slate-300 text-sm">(128 Authentic Reviews)</span>
</div>
<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">Serengeti Private Safari</h1>
<div className="flex flex-wrap gap-4">
<span className="flex items-center gap-1.5 serengeti-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
<span className="material-symbols-outlined text-primary text-sm">schedule</span> 8 Days / 7 Nights
                        </span>
<span className="flex items-center gap-1.5 serengeti-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
<span className="material-symbols-outlined text-primary text-sm">group</span> Private Group (Max 6)
                        </span>
<span className="flex items-center gap-1.5 serengeti-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
<span className="material-symbols-outlined text-primary text-sm">language</span> English, Swahili
                        </span>
</div>
</div>
<div className="flex gap-3">
<button className="size-12 rounded-full serengeti-glass-card flex items-center justify-center text-white hover:bg-primary transition-colors">
<span className="material-symbols-outlined">share</span>
</button>
<button className="size-12 rounded-full serengeti-glass-card flex items-center justify-center text-white hover:bg-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
</section>
{/* Main Content & Sidebar Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
{/* Tabs & Details */}
<div className="lg:col-span-2 space-y-12">
{/* Tab Bar */}
<div className="flex border-b border-white/10 overflow-x-auto whitespace-nowrap">
<button className="px-6 py-4 text-sm font-bold border-b-2 border-primary text-primary">Overview</button>
<button className="px-6 py-4 text-sm font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-colors">Itinerary</button>
<button className="px-6 py-4 text-sm font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-colors">Inclusions</button>
<button className="px-6 py-4 text-sm font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-colors">Reviews</button>
<button className="px-6 py-4 text-sm font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-colors">Policies</button>
</div>
{/* Overview Tab Content */}
<div className="serengeti-glass-card p-8 rounded-3xl leading-relaxed">
<h3 className="text-2xl font-bold mb-6">Experience the Untamed</h3>
<p className="text-slate-400 mb-6">
                        Embark on a journey through the vast plains of the Serengeti, where the rhythm of life is dictated by the ancient cycles of migration. Our private safari offers an intimate encounter with the 'Big Five' and the spectacular Great Migration, all while staying in some of the most luxurious eco-lodges in Tanzania.
                    </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
<div className="text-center p-4 serengeti-glass-card rounded-2xl">
<span className="material-symbols-outlined text-primary mb-2">hotel</span>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Stay</p>
<p className="text-sm font-bold">Luxury Tents</p>
</div>
<div className="text-center p-4 serengeti-glass-card rounded-2xl">
<span className="material-symbols-outlined text-primary mb-2">restaurant</span>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Dining</p>
<p className="text-sm font-bold">All Meals Inc.</p>
</div>
<div className="text-center p-4 serengeti-glass-card rounded-2xl">
<span className="material-symbols-outlined text-primary mb-2">airport_shuttle</span>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Transport</p>
<p className="text-sm font-bold">4x4 Land Cruiser</p>
</div>
<div className="text-center p-4 serengeti-glass-card rounded-2xl">
<span className="material-symbols-outlined text-primary mb-2">camera_enhance</span>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Expert</p>
<p className="text-sm font-bold">Private Guide</p>
</div>
</div>
</div>
{/* Itinerary Tab content */}
<div className="space-y-8">
<h3 className="text-2xl font-bold">Your Journey</h3>
<div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
{/* Day 1 */}
<div className="relative">
<div className="absolute -left-8 top-1.5 size-6 rounded-full bg-primary border-4 border-background-dark"></div>
<div className="serengeti-glass-card p-6 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-primary text-xs font-black uppercase tracking-widest">Day 01</span>
<span className="material-symbols-outlined text-slate-500">flight_land</span>
</div>
<h4 className="text-lg font-bold mb-2">Arrival in Kilimanjaro &amp; Private Transfer</h4>
<p className="text-slate-400 text-sm">Upon arrival, your private guide will meet you at Kilimanjaro International Airport and escort you to your boutique villa in Arusha for a welcome dinner.</p>
</div>
</div>
{/* Day 2 */}
<div className="relative">
<div className="absolute -left-8 top-1.5 size-6 rounded-full bg-primary border-4 border-background-dark"></div>
<div className="serengeti-glass-card p-6 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-primary text-xs font-black uppercase tracking-widest">Day 02</span>
<span className="material-symbols-outlined text-slate-500">nature_people</span>
</div>
<h4 className="text-lg font-bold mb-2">Into the Heart of the Serengeti</h4>
<p className="text-slate-400 text-sm">Catch a bush flight to the central Serengeti. Embark on your first afternoon game drive searching for the elusive leopard and majestic lions.</p>
</div>
</div>
{/* Day 3 */}
<div className="relative opacity-60">
<div className="absolute -left-8 top-1.5 size-6 rounded-full bg-slate-700 border-4 border-background-dark"></div>
<div className="serengeti-glass-card p-6 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-500 text-xs font-black uppercase tracking-widest">Day 03</span>
<span className="material-symbols-outlined text-slate-500">wb_sunny</span>
</div>
<h4 className="text-lg font-bold mb-2">Hot Air Balloon &amp; River Crossings</h4>
<p className="text-slate-400 text-sm">Sunrise balloon safari followed by a champagne breakfast in the bush. Spend the day tracking the Great Migration near the Mara River.</p>
</div>
</div>
</div>
<button className="w-full py-4 serengeti-glass-card rounded-2xl text-sm font-bold text-slate-400 hover:text-white transition-all">View Full 8-Day Itinerary</button>
</div>
{/* Gallery Section */}
<div className="space-y-6">
<h3 className="text-2xl font-bold">Capturing the Moment</h3>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
<div className="row-span-2 rounded-2xl overflow-hidden bg-cover bg-center" data-alt="Close up of a majestic lion in the grass" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCw3b3mAjpSQA5csHIaLewtdSOhnVO4m99i38T558WfWaGqZv8ui1fhzmkT1zZ19XHvw1w86C6sYi7gxmDqDl3ZmCyOkb8Aquua1Ay_n_lA5pkgabSEk4miHVMcFEIwkHSE-GCc5EGN460vxMFrDukskSUm9XzRt3G9CYhrHBrDdw3qKcHRFADPgmRMytLsinHD_bEac-JdZWw2jdYh3J1Nj_8HhG4S0D0Tq9hrMi4cmR4fGuTajXY-j9FMUalEF_pTbz1j3KIRMg')"}}></div>
<div className="rounded-2xl overflow-hidden bg-cover bg-center" data-alt="A herd of elephants crossing the savanna" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_3CwTN4MfADKAPiOCdoFZbBFs74-B1KKo2lFlMfKX4t5_Fib6pHfzy-bnd73qgnq1BJGC1nU2u2inNgG_hsiQ3wENuXa179tjp2xYUL_mI80vM6MUi_j6Mw8BVa-mMZgRO94dVhVLMXmSMKzxry8PKuYKo4i-kzUs6Wz017MxK9dx-W4gjH-gTsYWQMgfGMKXadOeLb23IssMteZHBRs1PNXe93D7WeeGIVoV5EopmK5iM3iLZ0Jd-GAL7fxWn_aCXcfDC2aM_w')"}}></div>
<div className="rounded-2xl overflow-hidden bg-cover bg-center" data-alt="A luxury safari tent interior with sunset view" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzS657-OqrSzb2nWGxbYzvU5MjeJ4_4tutg7Mh9Y3wd5vCtg4xaFmPnClYQUhsiQ4DjVDs54Lb541RXxdXOjuCcEbuJNX84VtbIyxi6F_sieyg4VJTR06A-SQoyfm93ae6Zu4wzRPvDqJUZZPAvvrC-mp6a7ywKQe7NPtMACh43_TPr_uyoGTUXxkW2d3nfz38rhABECOTI98aEYUkEj1AJ_U1ITGGehffnTcsY0FiRSFIWbEn2iAdL0eoWVLvrdiKv3nZOBA41g')"}}></div>
<div className="md:col-span-2 rounded-2xl overflow-hidden bg-cover bg-center" data-alt="Golden hour landscape of the Serengeti plains" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCR4vHlfPyHS3HzZHJsrYZ7hlP1KASgbelowzRnKoKcInt5NQ1rRAvpNW67LEpnHwWVeOgLmxzsVr5jgEeuwzgmDdVJBNQpybomaNum4jKEl_kTeW9BvuSIjDF_zVFBSLiy8VXygIkng-o1foOWevC_AOUzWQSJfEvKZJ_sM54_1dXPnww8iiGVaaZefKz5fu8BRbrKwbaLk6A-ZiTEFtXJY9d6YzKrKTtrkI-i_wPaeO0zSDnjFaqzPAFcWnXSSn4lVZwOjWClGg')"}}></div>
</div>
</div>
</div>
{/* Booking Sidebar */}
<div className="lg:col-span-1">
<div className="sticky top-28 space-y-6">
<div className="serengeti-glass-card p-8 rounded-3xl border-primary/20 shadow-2xl shadow-primary/5">
<div className="flex items-baseline justify-between mb-8">
<h4 className="text-sm font-bold text-slate-400">Total Starting Price</h4>
<div className="text-right">
<span className="text-3xl font-black text-white">$4,500</span>
<span className="text-xs block text-slate-500">per person</span>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="relative">
<label className="text-[10px] uppercase font-black text-slate-500 absolute left-4 top-2">Travel Date</label>
<button className="w-full pt-6 pb-2 px-4 serengeti-glass-card rounded-xl text-left flex items-center justify-between">
<span className="text-sm font-bold">Oct 12 - Oct 19, 2024</span>
<span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
</button>
</div>
<div className="relative">
<label className="text-[10px] uppercase font-black text-slate-500 absolute left-4 top-2">Guests</label>
<button className="w-full pt-6 pb-2 px-4 serengeti-glass-card rounded-xl text-left flex items-center justify-between">
<span className="text-sm font-bold">2 Adults, 0 Children</span>
<span className="material-symbols-outlined text-primary text-xl">person_add</span>
</button>
</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span> Instant confirmation
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span> Flexible cancellation
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span> Expert private host
                            </li>
</ul>
<button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all glare-effect shadow-lg shadow-primary/20">
                            Book This Experience
                        </button>
<p className="text-center text-[10px] text-slate-600 mt-4 uppercase font-bold">No payment required until confirmed</p>
</div>
{/* Host Info */}
<div className="serengeti-glass-card p-6 rounded-3xl flex items-center gap-4">
<div className="size-14 rounded-2xl bg-cover bg-center border border-white/10" data-alt="Portrait of professional safari guide David" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYQlAGZbriuquXpM_iRw_cMDPEFTlzWAGcX_j_oee1EARXgv7undzxOWpv0fzFCpkaZUkX15b8ZZRFB8lGS1idDzkFXVLNM9CKfgebOkkplZPu29rb0_LvFvUmbywEZW6Ad79ohM9i3-b7WSZj8i23GK6aci_67BeNiwEVT1NwRd6yi5tkFM-KOLbyl4j_GLeZw3NX552ABZ1SY5E8HrAuWnvdzuNUkST1Y7AGco1H8ESRtm6pm8oAaC6MW2WF59gzGox4Kd295Q')"}}></div>
<div>
<p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Your Private Guide</p>
<h5 className="font-bold text-slate-200">David M. Kamau</h5>
<div className="flex items-center gap-1 text-[10px] text-primary">
<span className="material-symbols-outlined text-[12px] fill-1">verified</span>
                                Certified Safari Expert
                            </div>
</div>
</div>
</div>
</div>
</div>
{/* Related Experiences */}
<section className="mt-24 pb-12">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl font-extrabold mb-2">Related Experiences</h2>
<p className="text-slate-500">Handpicked adventures that pair well with this safari.</p>
</div>
<div className="flex gap-2">
<button className="size-10 rounded-full serengeti-glass-card flex items-center justify-center text-slate-400 hover:text-white"><span className="material-symbols-outlined">arrow_back</span></button>
<button className="size-10 rounded-full serengeti-glass-card flex items-center justify-center text-slate-400 hover:text-white"><span className="material-symbols-outlined">arrow_forward</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Card 1 */}
<div className="group cursor-pointer">
<div className="relative h-64 rounded-2xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="Luxury resort beach in Zanzibar" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq-AkfpnL_WuJARkyt8pc6db9bP_u_lH2I_17vjF37mjwhk8eT6EaF6EErzA-zVh0PgfcLlfLH5IiIbDXrUk9yrlf5oQaJfYSKlyPbuKuLSR7PRFMXkU07ovttheC--I8aT0DMesN9c-cuMdUk9Q5pIYKz2086y_tTDmbJmQu4VhGlHNQPUdpBX53diHA5B97pvBhqKMbh-tsfEtBuxnv90c9k8dAVzoIIFv4DNMSu-0c0aQm_FH4-PlkhGrvzXCIiCgdICPT56Q')"}}></div>
<div className="absolute top-4 right-4 serengeti-glass-card px-3 py-1 rounded-full text-xs font-bold text-white">4.9 ★</div>
<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
<span className="text-primary text-[10px] font-black uppercase tracking-widest">Extension</span>
<h4 className="text-white font-bold">Zanzibar Island Retreat</h4>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-500 text-sm">4 Days / 3 Nights</span>
<span className="font-bold text-slate-200">From $1,200</span>
</div>
</div>
{/* Card 2 */}
<div className="group cursor-pointer">
<div className="relative h-64 rounded-2xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="Elephant at a waterhole in Botswana" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI5qX2i2Kks3g5Va3h6s2htS1qD4k43EhMVb0_FLISIEVqmZxkfgxa5hnrGVWl04T8pujQ6xmX4STqoCpxrZEHo3p2NQoWKogN0mmhXQ7sk6fKtHnDiZJXCOSpmUoAp5VopNIpJLvWzVv9ponJdKFXlDF5AatNHX1l5ab4KE4sK7gLsZqIFxxhqjxdk3ANBaI-74qN9GRvHlNvN8FGB-FprV_24J6t9T1p_XhV9pXBzaK_O_9EMhHNd2XlfiF3PX1qYZkIuUUaVg')"}}></div>
<div className="absolute top-4 right-4 serengeti-glass-card px-3 py-1 rounded-full text-xs font-bold text-white">4.8 ★</div>
<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
<span className="text-primary text-[10px] font-black uppercase tracking-widest">Adventure</span>
<h4 className="text-white font-bold">Botswana Okavango Delta</h4>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-500 text-sm">6 Days / 5 Nights</span>
<span className="font-bold text-slate-200">From $3,850</span>
</div>
</div>
{/* Card 3 */}
<div className="group cursor-pointer">
<div className="relative h-64 rounded-2xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="Victoria Falls with rainbows" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKU4vuoqL2SWyWAF5x9ZAmup7SJgxjl6HZ_cpvPu9raWslHe2HatHB7JnwhxTJr_B5d17lkRp95UClBhFepZVVryKs9QkPgKn6MfFtj0iYZob2rFtYCfZUcZhD-6Zp14FIc5XuxlDtZj-OIErvMo8tVPQzK3cy5FdI3lzOL4MQYZ5sLWnsdQlcD-FuMD9C-YLQMDjuaOyAvpw-wGw3MiObtzXDNGOM5UXVvANGT2xeVN8Fvtaiznzh_JGvHCc_BKCkJN6RILGi8w')"}}></div>
<div className="absolute top-4 right-4 serengeti-glass-card px-3 py-1 rounded-full text-xs font-bold text-white">5.0 ★</div>
<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
<span className="text-primary text-[10px] font-black uppercase tracking-widest">Heritage</span>
<h4 className="text-white font-bold">Victoria Falls Experience</h4>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-500 text-sm">3 Days / 2 Nights</span>
<span className="font-bold text-slate-200">From $950</span>
</div>
</div>
</div>
</section>
</main>

    </div>
  );
}
