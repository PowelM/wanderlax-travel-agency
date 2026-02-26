/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function AmalfiCoastPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden amalfi-scrollbar pt-20">
      <div className="noise-overlay"></div>
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQxNSc6yTwVQTM1C6mk3mfrTqULXpTh6es9fCaGJbmjqZfhAcnl1eSPGQBWBlWTb6G1FcIBsvNJ-qxwp39kFMiTXDOHMYh3BhuBghZp5L9W9TYVJVeCK7kXaFEGynwXEuajV46qMdnxOEC_U6vezsLb2kphYTRi8bYMh_HTsIPRa2qgYx-BKF8jC_JicBCKBI4OXAt4-LTxuwBWYWKgBi0jRRSh63lm70aALbmM1-OulKR5bX3K5QeygIobgJibYLMviE8ZNSOVg')" }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-sm text-white">Exclusive Journey</span>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tighter text-white">The Eternal <br/><span className="text-primary">Amalfi</span> Coast</h1>
            <div className="flex flex-wrap gap-8 items-center border-t border-white/20 pt-10">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-white/50 mb-1 font-bold">Price from</span>
                <span className="text-2xl font-bold text-white">$14,500 <span className="text-sm font-normal text-white/50">/ pp</span></span>
              </div>
              <div className="h-10 w-px bg-white/20 hidden sm:block"></div>
              <Link href="/portal/dashboard" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg text-lg font-bold tracking-wide transition-all shadow-2xl flex items-center gap-3">
                Book This Journey
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Stats Section */}
      <section className="bg-neutral-dark border-y border-border-dark py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 text-white">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">calendar_today</span>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Duration</p>
                <p className="text-lg font-bold">12 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">group</span>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Group Size</p>
                <p className="text-lg font-bold">Private / Max 6</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">landscape</span>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Difficulty</p>
                <p className="text-lg font-bold">Moderate</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">sunny</span>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Best Season</p>
                <p className="text-lg font-bold">May — Oct</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-20">
          <div>
            <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase border-l-4 border-primary pl-6">The Daily Narrative</h2>
            <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-px before:bg-border-dark">
              
              {/* Day 1 */}
              <div className="relative pl-16">
                <div className="absolute left-4 top-1 size-4 rounded-full bg-primary ring-8 ring-background-dark"></div>
                <div className="mb-4">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase">Day 01 — Arrival</span>
                  <h3 className="text-2xl font-bold mt-2">The Gateway to the South: Naples</h3>
                </div>
                <div className="rounded-xl overflow-hidden mb-6 h-64 border border-border-dark">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9673yrXe8_3Xcv5r7oQODo_fSyYSV7eT2S_gLJDpdjdlUVwP9XqI0qNWPjf-CGPFVRal_tLh-Krfe7SoFIPqb9NjehGmp2WLdCW5asEeZT_tqXekulLeTkHuplJ2dZIGNeAzxLdNMrRz5fPyWX6PfnG88aZbSx8TeTzWhiIrlzapWx-Z0MJwAS1NZcIAf3mQpWXCluCizczmdQkf0VzbE-MtsRXpNFan2lEPqm9XRcONiNgcAi9-D8lAuRxKWrHoAYvDlSBxfkA" alt="Naples cityscape" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <p className="text-slate-400 leading-relaxed text-lg italic">
                  Begin your odyssey in the shadow of Vesuvius. After a private limousine transfer, settle into your suite at the Grand Hotel Vesuvio. The evening unfolds with a private sunset tasting of volcanic wines and Neapolitan delicacies on a terrace overlooking the bay.
                </p>
              </div>

              {/* Day 2 */}
              <div className="relative pl-16">
                <div className="absolute left-4 top-1 size-4 rounded-full bg-border-dark ring-8 ring-background-dark"></div>
                <div className="mb-4">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase">Day 02 — Heritage</span>
                  <h3 className="text-2xl font-bold mt-2">Silent Echoes of Pompeii</h3>
                </div>
                <div className="rounded-xl overflow-hidden mb-6 h-64 border border-border-dark">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFgglqkoqfC8FXYB4QK9zK_bQXCI0qrgfWu5xmRFoZNKiUBaZOxgwrBdu3w0e32hmI73G40mqHD3hrHQAZMs0W9V_7UkCXFSvLKINOsm5rEH1GLHqFY5l8j1x8-cIdmZ-iszk17msehrjCQ4nh5IlyxMQZIHM1DZdrNamEvFDzKhCdRDjnujpZr_zY-DaTaXSuApkBOBuKC2-1AJmZFvFcC84gat2eB3moce2cGohYN4BiW_iQjGVjKK2EcL7KiEtJHG6QZ7A96Q" alt="Pompeii ruins" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Walk through history with our resident archaeologist for a private after-hours tour of Pompeii&apos;s most exclusive villas. Witness preserved frescos and mosaic floors that are typically closed to the public. Lunch is served in a vineyard nestled among the ruins.
                </p>
              </div>

              {/* Day 3 */}
              <div className="relative pl-16">
                <div className="absolute left-4 top-1 size-4 rounded-full bg-border-dark ring-8 ring-background-dark"></div>
                <div className="mb-4">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase">Day 03 — The Coastline</span>
                  <h3 className="text-2xl font-bold mt-2">Positano by Riva</h3>
                </div>
                <div className="rounded-xl overflow-hidden mb-6 h-64 border border-border-dark">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA0l6vnnAXUc8iRHRa8KCPetW_ilcnx3j92RvkQaeV6PLAzBeLjCZnAf0UUkKYC9t5Izi8E5mcxIYrIST12-imhfOj91V3nKeY3lYrT2r3caWzhryIMP_NRTcXirGRvdcP985c_2__R966gsH9gEnF-UjTBetwtTR-RDvl___DXA-rxNeIcG-ynLg2Sci-xfyOIcvJza2UJFaCHs22TX2NKtVYLKnVcPjpJGFzjnu8W-sTPZfZyta_yY2G5OvHimACuedunOsqJQ" alt="Positano coast" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Board a vintage Riva Aquarama for a coastal cruise to Positano. Navigate through the hidden grottos and emerald waters, stopping for a swim at Li Galli islands. Afternoon at leisure for boutique shopping or relaxation at Le Sirenuse.
                </p>
              </div>
            </div>
          </div>

          {/* Inclusions Card */}
          <div className="bg-neutral-dark p-12 rounded-2xl border border-border-dark">
            <h2 className="text-3xl font-black mb-10 tracking-tighter uppercase text-white">Inclusions & Exclusions</h2>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-primary font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  What&apos;s Included
                </h4>
                <ul className="space-y-4 text-white/70">
                  <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span> Luxury boutique hotel accommodations</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span> Private Riva boat transfers & tours</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span> Daily breakfast and curated dining</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span> All entrance fees and private guides</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span> Chauffeur-driven Mercedes S-Class</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-white/40 font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined">cancel</span>
                  Not Included
                </h4>
                <ul className="space-y-4 text-white/40">
                  <li className="flex gap-3"><span className="material-symbols-outlined text-sm">circle</span> International airfare</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-sm">circle</span> Personal travel insurance</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-sm">circle</span> Items of a personal nature</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          <div className="sticky top-28 space-y-12">
            <div className="bg-background-dark border border-border-dark p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 italic text-white">&quot;A journey of this caliber isn&apos;t just about the places you visit, but the moments of profound connection and silence between them.&quot;</h3>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full overflow-hidden bg-zinc-800">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVBtS2Ojkc_gSQTPfod6WaDrEZ2UNQcaE1pMjm2uNwN4seN3cF_v_58Q2J2S8XAiBItPrmB-D4djScBwdAdbJ-ruArkVOqS5piQMr8J0EUo4a5wwHCmbZmbt0Q84G8ARK8gouYeEM_xYW8rGeQeC-n44FJGsUCVRZF8nSuNAWJXS8lgHBKlMSr5_1BcA7rr09Dd19W_hDmB5BeIRoG1Vb-kLp59p6JyEvwAaDrdo1FdQNo4YhfJWaXpF0mZioltdne8xHc4-xMCA" alt="Marco Valenti" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Marco Valenti</p>
                  <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Lead Destination Architect</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/60">What to Expect</h4>
              <p className="text-slate-400 leading-loose">
                Expect an uncompromising level of service. Every detail of your Amalfi odyssey is meticulously curated to ensure seamless transitions between activities. From private villa access to tables at Michelin-starred restaurants that are impossible to book, we handle the logistics so you can immerse yourself in the spirit of <i>la dolce vita</i>.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-dark p-4 border border-border-dark rounded-xl text-white">
                  <span className="material-symbols-outlined text-primary mb-2">hotel_class</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Stay</p>
                  <p className="text-xs font-bold">5-Star Luxury</p>
                </div>
                <div className="bg-neutral-dark p-4 border border-border-dark rounded-xl text-white">
                  <span className="material-symbols-outlined text-primary mb-2">restaurant</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Dining</p>
                  <p className="text-xs font-bold">Gastronomic</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Recommendations Section */}
      <section className="py-24 bg-neutral-dark/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Expand Your Horizons</span>
              <h2 className="text-4xl font-black tracking-tighter uppercase text-white">You Might Also Like</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            {/* Iceland */}
            <Link href="/tours/iceland" className="group cursor-pointer block">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl relative mb-6">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhW-OdqzIMU2BYXfD0K6fr71A-7Bye9GT4DRvsrw-xbkdb3DZT4jCZEK790En_X9ZRQB2gOg0lIz_ez90WUN0ZQsA65aQnfiI3bIrWf1WzTKg0isWgNwWDKS0Pgi6EOXllTFOWARlhyUKNIAStqebEXSf4tWq8wcJBJbQJy0v69CcbLrUDPyHDJEB5-_qMewGehm1tNYw1TG8hU8oCU1vAmlVSV2o1fNUKZGBuVtpnbnU812062e32Ed25cdbhYG-uJmgr-Ek2AQ" alt="Iceland" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-bold bg-white text-black px-2 py-1 uppercase rounded-sm mb-2 inline-block">Northern Lights</span>
                  <h4 className="text-xl font-bold">Icelandic Wilderness</h4>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-white/50 text-sm">8 Days • Private</span>
                <span className="font-bold text-primary">From $9,200</span>
              </div>
            </Link>
            {/* Japan */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl relative mb-6">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADiY8ZQOZZ5s1erLtjFlQD2-4hm9MbhdlgLweyjJt6fYYufypWSidRhxVylLfg6LCVIOVvewErHupLMnJ1jfG21oAwujjvT2-R4WhwNj9z7VBq-2fBgec9kG8LCLp_ozQQ52f3mzFhzXEN3t6K_GSXV5s6E-8lWK69ViP8GU3v48jZSqiwxFB5_DBDiwGT964vy2lIyDcCxIVRhGp_23f2_II4TTehCkW7PNBHJ2AECGIsZGkWE14SkCcYBJptjufn2q9tS5yD1g" alt="Japan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-bold bg-white text-black px-2 py-1 uppercase rounded-sm mb-2 inline-block">Heritage</span>
                  <h4 className="text-xl font-bold">Zen & Shogun Heritage</h4>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-white/50 text-sm">14 Days • Private</span>
                <span className="font-bold text-primary">From $18,400</span>
              </div>
            </div>
            {/* Bora Bora */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl relative mb-6">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOg2GQOYtZfA2sCpK3mZtgopdOph-i5Kh2068BXRM0K268h89_iYbwOFhdD5pkTPcGV-IL4-dGpa5SSbYzYaZqcaiZ2u_fq7xUo09_NGNWtLucKIO-K1ErRso_Un-5ECeDTVgpzsb60OZGznLiHOcJXSHZPzkjQJPSrnMZl73900BKIG8fY1ZrUFOtQK22CnLYG_mg0mTLmK2uASyiQnMR2KZ_CLo186ZHnwRoGe_uoo-EkFiaoEW78cF7bS8TxFGQc8PKs1fAug" alt="Bora Bora" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-bold bg-white text-black px-2 py-1 uppercase rounded-sm mb-2 inline-block">Island Paradise</span>
                  <h4 className="text-xl font-bold">Polynesian Private Islands</h4>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-white/50 text-sm">10 Days • Private</span>
                <span className="font-bold text-primary">From $22,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Book Button for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%]">
        <Link 
          href="/portal/dashboard" 
          className="w-full bg-primary text-white py-4 rounded-xl font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(195,9,9,0.3)] flex items-center justify-center gap-3"
        >
          Book Now — $14,500
          <span className="material-symbols-outlined">bolt</span>
        </Link>
      </div>
    </div>
  );
}
