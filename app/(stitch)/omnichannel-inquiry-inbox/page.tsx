"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function OmnichannelInquiryInboxPage() {
  return (
    <div className="stitch-screen">
      {/* Top Navigation (Adapted from Component) */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#39282c] bg-surface-light dark:bg-[#181112] px-6 py-3 h-16 shrink-0 z-20">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-slate-900 dark:text-white">
<div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span className="material-symbols-outlined text-[20px]">travel_explore</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-tight">Wanderlux Admin</h2>
</div>
<label className="hidden md:flex flex-col min-w-40 h-10 w-96">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-[#2a1e21] ring-1 ring-slate-200 dark:ring-[#39282c]">
<div className="text-slate-400 dark:text-[#b99da2] flex items-center justify-center pl-3">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="w-full bg-transparent border-none text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#b99da2] focus:ring-0 h-full pl-2" placeholder="Search inquiries, bookings, or clients..."/>
</div>
</label>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<button className="relative flex size-10 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-[#2a1e21] text-slate-600 dark:text-[#b99da2] transition-colors">
<span className="material-symbols-outlined text-[24px]">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
</button>
<button className="flex size-10 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-[#2a1e21] text-slate-600 dark:text-[#b99da2] transition-colors">
<span className="material-symbols-outlined text-[24px]">settings</span>
</button>
</div>
<div className="h-8 w-[1px] bg-slate-200 dark:bg-[#39282c] mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Admin User</p>
<p className="text-xs text-slate-500 dark:text-[#b99da2] mt-1">Super Admin</p>
</div>
<img alt="Admin Avatar" className="size-10 rounded-full object-cover border-2 border-slate-200 dark:border-[#39282c]" data-alt="Portrait of a male admin user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkM0yI2HxOl4EEMBuMFV881NfxXRmOIHVwrwO5dIJBMZ0txDYIfV1zm9VNtJ2GiRRoSkJf3RQ_SmtfAPoG-nM1EODdvSRYrHFhHK9GKAAm1ukdt5EW9G59yglloJ7Zu710M8s3ELYO8w9tZU2iR__MC2MS2cUHw3Imt-dS0bWGe7UmfVXnZdKNHX_Kz7PFAhZZtD3vSjKLj9HY0pj-ezExHNZ82zTbOYdukmi-SCBeE2Ea7EeOajEK8RhKHqzU7YYVIY2iog76hw"/>
</div>
</div>
</header>
{/* Main Content Grid */}
<div className="flex flex-1 overflow-hidden">
{/* Left Sidebar: Conversations List */}
<aside className="w-80 flex flex-col border-r border-slate-200 dark:border-[#39282c] bg-surface-light dark:bg-[#181112] shrink-0">
{/* Filter Tabs */}
<div className="p-4 border-b border-slate-200 dark:border-[#39282c]">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-slate-900 dark:text-white">Inbox</h3>
<button className="text-xs font-medium text-primary hover:text-red-500">Mark all read</button>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-medium whitespace-nowrap">All</button>
<button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#2a1e21] text-slate-600 dark:text-[#b99da2] hover:bg-slate-200 dark:hover:bg-[#39282c] text-xs font-medium whitespace-nowrap transition-colors">WhatsApp</button>
<button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#2a1e21] text-slate-600 dark:text-[#b99da2] hover:bg-slate-200 dark:hover:bg-[#39282c] text-xs font-medium whitespace-nowrap transition-colors">Email</button>
<button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#2a1e21] text-slate-600 dark:text-[#b99da2] hover:bg-slate-200 dark:hover:bg-[#39282c] text-xs font-medium whitespace-nowrap transition-colors">Live Chat</button>
</div>
</div>
{/* List Items */}
<div className="flex-1 overflow-y-auto">
{/* Item 1 (Active) */}
<div className="group flex gap-3 p-4 border-l-[3px] border-primary bg-primary/5 dark:bg-[#2a1e21] cursor-pointer hover:bg-slate-50 dark:hover:bg-[#322428] transition-colors relative">
<div className="relative shrink-0">
<img alt="Alice Morgan" className="size-12 rounded-full object-cover" data-alt="Portrait of Alice Morgan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6iOs1jq6WwLnMWGXmg8bYiwww0vojZ0vAkzWjWsSgopg6n4jMbxSmZ7a-DIcl0u4bCNOen91wEnf5OWBqQVh8XTz5AzJfEocDuYp_YTq-WKJ4ScRMzE3z3k6DrRVvH9QO87t8pHqX08NMNN73tzJuOBBOCd7OYkqnr-h4ExwvoTx4eZC_lB5TvaXLrrViLSVvvtpGEts64PmIsE6w4mbjbouL7eQmTfqzFXHcKgeFlSCICUsJXb_S_YD0V73qqFyAWQ7-t3y1Vw"/>
<div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white dark:border-[#2a1e21]">
<span className="material-symbols-outlined text-[10px] text-white font-bold block">chat</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="font-semibold text-sm text-slate-900 dark:text-white truncate">Alice Morgan</p>
<span className="text-xs text-slate-500 dark:text-[#b99da2] whitespace-nowrap">2m</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">Can you confirm the suite upgrade for our honeymoon in Bali?</p>
</div>
</div>
{/* Item 2 */}
<div className="group flex gap-3 p-4 border-l-[3px] border-transparent hover:border-slate-300 dark:hover:border-[#39282c] cursor-pointer hover:bg-slate-50 dark:hover:bg-[#22181a] transition-colors">
<div className="relative shrink-0">
<img alt="Robert Chen" className="size-12 rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" data-alt="Portrait of Robert Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqpD1Li8Flw93rERFp7bT-j8wC1OdU-IQym73gPY7WsFbW-DRONvAAUKHzr15D5HFTMQypC2gD3dUEbby6Y0PSxZKmk_dzwOlU77jCVNnRmKz5AcORF850w9vdRoS8pcutnx5TbWjuhgpA65qM8SA5bo2EnRhkb_-Buss2NyN0o8g7JANI1_NDd0tpzniDrnj5sP9vkr2muD5sRjE5_p2vC5_bizUQcxNPum84VT0zmT5_s8VLNBPM-p6SGXpyON50Sg9x_3TViQ"/>
<div className="absolute -bottom-1 -right-1 bg-[#25D366] rounded-full p-0.5 border-2 border-white dark:border-[#181112]">
<svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="font-semibold text-sm text-slate-900 dark:text-white truncate">Robert Chen</p>
<span className="text-xs text-slate-500 dark:text-[#b99da2] whitespace-nowrap">15m</span>
</div>
<p className="text-sm text-slate-500 dark:text-[#b99da2] truncate">Flight itinerary attached for review. Please check the dates.</p>
</div>
</div>
{/* Item 3 */}
<div className="group flex gap-3 p-4 border-l-[3px] border-transparent hover:border-slate-300 dark:hover:border-[#39282c] cursor-pointer hover:bg-slate-50 dark:hover:bg-[#22181a] transition-colors">
<div className="relative shrink-0">
<img alt="Sarah Jones" className="size-12 rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" data-alt="Portrait of Sarah Jones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMXPMU9t8Kxda4nhLG_BABWVrtA5X-QUfRR5FoO1in7AbLV0hG3jOe3g6ZtML9DJqiQ2mVy7Xo9IsLAhBi8IYO8qPMiRRk1zxn3lq75geuoKZKmmdp7cli8N1sAyM-pNdyYWDQy25Dlw3r4aKzj00K_5cvhjFzmnXxi3Xqp_hiJ-MV2Yy15WnhI0odybbyI64A1AsBJGP1EWUxgm49zYQd_Dsbhdd6O-wiNixFt-CooRQM0Q5fEbcwZ-qGxvQjnMN1YFTrJRNiUg"/>
<div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border-2 border-white dark:border-[#181112]">
<span className="material-symbols-outlined text-[10px] text-white font-bold block">mail</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="font-semibold text-sm text-slate-900 dark:text-white truncate">Sarah Jones</p>
<span className="text-xs text-slate-500 dark:text-[#b99da2] whitespace-nowrap">1h</span>
</div>
<p className="text-sm text-slate-500 dark:text-[#b99da2] truncate">Looking for honeymoon packages in the Maldives for December.</p>
</div>
</div>
{/* Item 4 */}
<div className="group flex gap-3 p-4 border-l-[3px] border-transparent hover:border-slate-300 dark:hover:border-[#39282c] cursor-pointer hover:bg-slate-50 dark:hover:bg-[#22181a] transition-colors">
<div className="relative shrink-0">
<div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold border border-orange-200 dark:border-orange-800">DK</div>
<div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border-2 border-white dark:border-[#181112]">
<span className="material-symbols-outlined text-[10px] text-white font-bold block">mail</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="font-semibold text-sm text-slate-900 dark:text-white truncate">David Kim</p>
<span className="text-xs text-slate-500 dark:text-[#b99da2] whitespace-nowrap">3h</span>
</div>
<p className="text-sm text-slate-500 dark:text-[#b99da2] truncate">RE: Booking Confirmation #WX-9291. Is it possible to add a child bed?</p>
</div>
</div>
</div>
</aside>
{/* Center Column: Active Chat Thread */}
<main className="flex-1 flex flex-col min-w-0 bg-[#f8f6f6] dark:bg-[#120c0d] relative">
{/* Chat Header */}
<div className="h-16 border-b border-slate-200 dark:border-[#39282c] flex items-center justify-between px-6 bg-surface-light dark:bg-[#181112]">
<div className="flex items-center gap-3">
<h2 className="font-bold text-slate-900 dark:text-white text-lg">Alice Morgan</h2>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">Online</span>
<span className="text-xs text-slate-400 dark:text-[#b99da2]">via Website Chat</span>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-[#2a1e21] text-slate-600 dark:text-[#b99da2] transition-colors text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
                        Resolve
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-[#2a1e21] text-slate-600 dark:text-[#b99da2] transition-colors text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">forward</span>
                        Transfer
                    </button>
<button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-[#2a1e21] text-slate-600 dark:text-[#b99da2] transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
{/* Messages Area */}
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6" style={{ backgroundImage: "radial-gradient(#39282c 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
{/* Date Divider */}
<div className="flex justify-center">
<span className="text-xs font-medium text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-[#181112] px-3 py-1 rounded-full border border-slate-200 dark:border-[#2a1e21]">Today, Oct 24</span>
</div>
{/* Message 1: Customer */}
<div className="flex gap-4 max-w-[80%]">
<img alt="Customer" className="size-10 rounded-full object-cover self-end mb-1" data-alt="Alice Morgan Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANMMnu7MA0DdMq2XaxpHcnCDgyoDB2b3jXtQ_p2nHoWzp3S6m44w6nK9-RAA_4Ihpc35OAjI8SlpjpV0tXa5IkTZxogpv-As6ZS1e2CsDQ-Dq9KqxRCf3hPQ4B2CbqdaPXYrplaupAloPW3IPbZ3e9f3mZ3EB_nRyFOOXagZPDHilqBMexvl2zz-3m-7BPmI3S3QlHfm3Db2t5K7X14mnM3fZYfmaSTBlC9AtnpPt0xbIIYISBXofNo8vfAM0_Q_aZLy03lc4Sjw"/>
<div className="flex flex-col gap-1">
<div className="bg-white dark:bg-[#2a1e21] p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-200 dark:border-[#39282c] text-slate-800 dark:text-slate-200">
<p className="text-sm leading-relaxed">Hi there! I was looking at my reservation for the Bali trip in November.</p>
</div>
<span className="text-xs text-slate-400 dark:text-slate-500 ml-1">10:23 AM</span>
</div>
</div>
{/* Message 2: Admin */}
<div className="flex gap-4 max-w-[80%] self-end flex-row-reverse">
<img alt="Admin" className="size-10 rounded-full object-cover self-end mb-1" data-alt="Admin Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgkRwahQCd-cG-UET3RNm6NvIl62mYGijRbNH3FoQ7S8TLlQXZ1Jz5PYQdM3pCGaWu2J9Mi6Z3_agKsXceRlTp2aLtvsI-eRzKB2BYeeuxLQ_L50LlZUD5gKaiGJCPf79O_5NcKsaETEbJEp24riS_fOLQzVWT-2zzqUFNLlgWvlokzi2vDKrxDVm_GkX-BbMvZMB3yesZ-i1DXqwLOixIoE6ZsioyV0M9QPkMQHkmlX_VTCCZyTILh0b83MW_l0NjEuY1U7ZBiQ"/>
<div className="flex flex-col gap-1 items-end">
<div className="bg-primary p-4 rounded-2xl rounded-br-none shadow-md text-white">
<p className="text-sm leading-relaxed">Hello Alice! I'd be happy to help you with your reservation. What specifically did you need to check?</p>
</div>
<span className="text-xs text-slate-400 dark:text-slate-500 mr-1">10:25 AM</span>
</div>
</div>
{/* Message 3: Customer */}
<div className="flex gap-4 max-w-[80%]">
<img alt="Customer" className="size-10 rounded-full object-cover self-end mb-1" data-alt="Alice Morgan Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlooDAmP7hGCbz_lq-FHJtH5sBoDI5DIXrFdzw4aMehRCv3j0xeI42xxUFoqXWug_CxMbFbEPnwqYmo72VDk-D_HENxzm_P3yw20yT933XKSGYmRErEHHgGNZEf_ko-94Ck2U36WFMVObDeNZeueZE2pPUybk0oRIRomT3W9_IUoGlNpw7QaNW84nJ7NsSggPh2k5sICdY0tFZO9H3VVUu0TBjRYBVFgvV12inqpPz95N4WltlFdGlQ3lgg1BMY0U7VSAJoYCsBg"/>
<div className="flex flex-col gap-1">
<div className="bg-white dark:bg-[#2a1e21] p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-200 dark:border-[#39282c] text-slate-800 dark:text-slate-200">
<p className="text-sm leading-relaxed">I wanted to know if the Ocean View Suite is still available for an upgrade? Also, can you confirm the suite upgrade price?</p>
</div>
<span className="text-xs text-slate-400 dark:text-slate-500 ml-1">10:28 AM</span>
</div>
</div>
</div>
{/* Input Area */}
<div className="p-4 bg-surface-light dark:bg-[#181112] border-t border-slate-200 dark:border-[#39282c]">
<div className="relative flex flex-col gap-2 p-2 rounded-xl bg-slate-50 dark:bg-[#21181a] border border-slate-200 dark:border-[#39282c] focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all">
<textarea className="w-full bg-transparent border-none resize-none h-20 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#b99da2] focus:ring-0 p-2" placeholder="Type your reply..."></textarea>
<div className="flex items-center justify-between px-2 pb-1">
<div className="flex gap-1 text-slate-400 dark:text-[#b99da2]">
<button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#39282c] transition-colors"><span className="material-symbols-outlined text-[20px]">attach_file</span></button>
<button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#39282c] transition-colors"><span className="material-symbols-outlined text-[20px]">image</span></button>
<button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#39282c] transition-colors"><span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span></button>
<button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#39282c] transition-colors"><span className="material-symbols-outlined text-[20px]">flash_on</span></button> {/* Quick Replies */}
</div>
<button className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-red-900/20 flex items-center gap-2 transition-all">
<span>Send</span>
<span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</div>
</div>
</main>
{/* Right Sidebar: Context Panel */}
<aside className="w-80 flex flex-col border-l border-slate-200 dark:border-[#39282c] bg-surface-light dark:bg-[#181112] shrink-0 overflow-y-auto hidden xl:flex">
{/* User Profile Section */}
<div className="p-6 text-center border-b border-slate-200 dark:border-[#39282c]">
<div className="relative inline-block mb-3">
<img alt="Alice Morgan" className="size-24 rounded-full object-cover border-4 border-slate-100 dark:border-[#2a1e21]" data-alt="Large portrait of Alice Morgan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnnAyXgWiohtbVRjHb1hiuuyqgFwiJoLMQvbD17a9pXnXACAYPuEFlL6TqQd6BYfWvZOMKRfrcfvYRSEZEN4WbGWvn26uO8W3rYz1XpUf17NITnK8ksW9Kg15ydSnGIYgXw2-ln1zmLBKKtC4Ex0nUo-_3EYpoTUKZiHPZzPnlMMXJEXrUHYH2KUh-EGagXYqCONdrGGk_4nkLCOXwdFO8bpyYEWSYygd8l0WVWRYViLQNxaKs8GtbVkM53xbsG2FVjNzgI6vsEg"/>
<div className="absolute bottom-1 right-1 bg-[#181112] p-1 rounded-full">
<img alt="USA Flag" className="h-4 w-6 rounded-sm object-cover" data-location="USA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTIf-4AHOOVUhvGQyOq95HOMWWf8LJT03SXICEGUoonpdv7w7BkQm_EMcYsOIybIpclwf1gg-PVevv-MbWCEGkxyin8v5s_3zmq8H_ETHzscd6nUgyVc6ODRhj6gk682jnKl030XQ4-jlZfHhmB0AjoJoNu8xrUicAXNK_ZpLy5Tw_sLFBkLoJ4Hs1NmYqUpQbB-EB48yslm0GrCXUgAXM7kWWgHQphrWaPTE3pc--0lZafDfUf8QnOXhI39BT3tMep8AxMJBX5Q"/>
</div>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-white">Alice Morgan</h3>
<p className="text-sm text-slate-500 dark:text-[#b99da2] mb-4">alice.m@example.com</p>
<div className="grid grid-cols-3 gap-2 mb-4">
<div className="flex flex-col p-2 bg-slate-50 dark:bg-[#2a1e21] rounded-lg">
<span className="text-xs text-slate-400 dark:text-[#b99da2] uppercase tracking-wider">Trips</span>
<span className="font-bold text-slate-900 dark:text-white">12</span>
</div>
<div className="flex flex-col p-2 bg-slate-50 dark:bg-[#2a1e21] rounded-lg">
<span className="text-xs text-slate-400 dark:text-[#b99da2] uppercase tracking-wider">Loyalty</span>
<span className="font-bold text-yellow-500">Gold</span>
</div>
<div className="flex flex-col p-2 bg-slate-50 dark:bg-[#2a1e21] rounded-lg">
<span className="text-xs text-slate-400 dark:text-[#b99da2] uppercase tracking-wider">LTV</span>
<span className="font-bold text-green-500">$8.4k</span>
</div>
</div>
<div className="flex justify-center gap-3">
<button className="p-2 rounded-full border border-slate-200 dark:border-[#39282c] hover:bg-slate-50 dark:hover:bg-[#2a1e21] text-slate-600 dark:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">call</span>
</button>
<button className="p-2 rounded-full border border-slate-200 dark:border-[#39282c] hover:bg-slate-50 dark:hover:bg-[#2a1e21] text-slate-600 dark:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">videocam</span>
</button>
<button className="p-2 rounded-full border border-slate-200 dark:border-[#39282c] hover:bg-slate-50 dark:hover:bg-[#2a1e21] text-slate-600 dark:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</div>
</div>
{/* Current Context / Booking */}
<div className="p-4 border-b border-slate-200 dark:border-[#39282c]">
<div className="flex justify-between items-center mb-3">
<h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Active Trip</h4>
<span className="text-xs font-medium text-primary cursor-pointer hover:underline">View Details</span>
</div>
<div className="bg-slate-50 dark:bg-[#21181a] rounded-xl overflow-hidden border border-slate-200 dark:border-[#39282c]">
<div className="h-24 bg-cover bg-center relative" data-alt="Bali landscape with temple" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOKYLKtWcGaJbmHuuS7zunl5ZYzPtMEg70V4tlGAkvOBZrFa1wnsiG4L75KgkXdvIxUz73oGbE3YsMdxlU4zrB9DZsdzAkEbJKsXBXs7UQUwm8aiE3OwpdBBDakIROJwBJdRdOWkqL9Yq_gHC7zo1UsNR7Vk_C4ixyX3OMvpIBeVHm5MB1ZMUrhsnjQUzdqe3ucwbyZmeVWos51Cw3MM_ZEBgJG6O-os828L3a6ZIANkJx-6OIb3v_IJNYfBprS6QGDXmxnVm23A')" }}>
<div className="absolute inset-0 bg-black/40 flex items-end p-3">
<p className="text-white font-bold text-sm">Bali Luxury Escape</p>
</div>
</div>
<div className="p-3">
<div className="flex items-center gap-2 mb-2 text-xs text-slate-500 dark:text-[#b99da2]">
<span className="material-symbols-outlined text-[16px]">calendar_month</span>
<span>Nov 12 - Nov 19, 2023</span>
</div>
<div className="flex items-center gap-2 mb-2 text-xs text-slate-500 dark:text-[#b99da2]">
<span className="material-symbols-outlined text-[16px]">hotel</span>
<span>The Mulia Resort, Nusa Dua</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#b99da2]">
<span className="material-symbols-outlined text-[16px]">flight</span>
<span>GA881 (Business)</span>
</div>
<div className="mt-3 pt-3 border-t border-slate-200 dark:border-[#39282c] flex justify-between items-center">
<span className="text-xs font-semibold text-orange-500">Pending Upgrade</span>
<span className="text-xs font-bold text-slate-900 dark:text-white">$4,250</span>
</div>
</div>
</div>
</div>
{/* Notes Section */}
<div className="p-4 flex-1 flex flex-col min-h-0">
<div className="flex justify-between items-center mb-3">
<h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Staff Notes</h4>
</div>
<div className="bg-[#fff9c4] dark:bg-[#2a1e21] border border-yellow-200 dark:border-[#39282c] p-3 rounded-lg mb-2 relative group">
<p className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed">
                        Customer prefers high floor rooms away from the elevator. Allergic to peanuts.
                    </p>
<p className="text-[10px] text-slate-500 dark:text-[#b99da2] mt-2 text-right">- Added by Sarah, Oct 10</p>
</div>
<div className="relative">
<input className="w-full bg-slate-50 dark:bg-[#21181a] border border-slate-200 dark:border-[#39282c] rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#b99da2] py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Add a private note..."/>
</div>
</div>
</aside>
</div>
    </div>
  );
}
