export type TourCategory = 'All Packages' | 'Beach Escapes' | 'Safari Adventures' | 'City Breaks' | 'Mountain Treks' | 'Cultural Tours';

export interface Tour {
  id?: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  group: string;
  rating: string;
  category: TourCategory[];
  tags: { label: string; style?: string }[];
  image: string;
}

export type WishlistItemLocal = {
  id: string;
  location: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  category: 'Private Jets' | 'Villas' | 'Other' | 'Tours';
};

export const allTours: Tour[] = [
  {
    title: 'Maldives Escape',
    description: '7 nights in an overwater villa with all-inclusive dining and private sunset cruises.',
    price: '$5,400',
    duration: '7 Days',
    group: '2 ppl',
    rating: '4.9',
    category: ['All Packages', 'Beach Escapes'],
    tags: [{ label: 'Relaxation' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUV2tyz6So6VwYE94GJFnhBGH8Dco3cLebnCAULJDZHqwUaLKIqIveE5DwU8t3QvmDynrG_oH8wB05jvBSSYmKWDU4ZVpmqanjb_8tZy8F9eF5tAr1F2TKEcj44BhRPocSSrw9Rc9e1rbRP4lLUSbOTf5FmQ0mrjFn3mzuperyO0o04qCNpg6x45XYXnCM-Hl2jeisCIPLdS1kudpqrnBlZAcLn8IQdcc2mjxxjTEfbGQoPF4q-JHwrfR63xUONYmT0Zvpkc1Xfw',
  },
  {
    title: 'Ancient Kyoto',
    description: 'Explore the historic temples, tea ceremonies, and bamboo forests of ancient Japan.',
    price: '$3,200',
    duration: '5 Days',
    group: 'Group',
    rating: '4.8',
    category: ['All Packages', 'Cultural Tours'],
    tags: [{ label: 'Culture' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_hhE52OZGgrrDPr3sPjMHs5sxUWPsEuBUaMhEHMiiZrHL3nq36rEfumHZzVvZzBqAciFltS802kVcL7QdQDNS8t7vNhnEnSTdzabGKtWFWUToeZg24ztzWiOQKUK6hfEWB6d2sbdQZ0PXHxt7zMSRZQlnsy2dQctFb66cKArvDoD2RLLDJRCjkrzL1UVmpk8XjR6uqkcyJKi1UV3Fd7hhTy_TUaBc9G-bs18Zm1v2UMDkJF4GfvugGQ_CC3Rlf62I6LhYaIIiBw',
  },
  {
    title: 'Swiss Alpine Trek',
    description: 'Guided hiking tour through the breathtaking landscapes of Zermatt and Interlaken.',
    price: '$4,150',
    duration: '8 Days',
    group: 'Small Group',
    rating: '5.0',
    category: ['All Packages', 'Mountain Treks'],
    tags: [{ label: 'Adventure' }, { label: 'Popular', style: 'bg-primary/90' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBptty087RFv8nBqSoHJWVVHJKHF0NQhttWLEr5LTl8VdnU-vEwKdo6zRlM1oo-fbV-pDHbI_U3KFls8oG29PTMJS3H3nK_aDTAnd7RP7G_lkQQSL__vy8fNPrfveL3dKGjAcW-WJsS7yetY07aE2VPi3vKv8zFaWdVa2POQJ-guOxwu_l6Uir5DPujTA8Jm2T2aMUJP1Vhs1hiDTugzYgn-ndBaqGVJ6xQSsIdaWJnM1dHHKvkvSWeHWc8C_GBQxPFxlfNk2eHNA',
  },
  {
    title: 'Santorini Sunset',
    description: 'Experience the magic of the Aegean Sea with wine tasting and private yacht tours.',
    price: '$3,800',
    duration: '6 Days',
    group: '2 ppl',
    rating: '4.7',
    category: ['All Packages', 'Beach Escapes'],
    tags: [{ label: 'Romantic' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvoQ7Zvip5jn5ZaFMHXoEM4xSKpCN2Ih2qoH0roUXhbzZs-7ZSqG8ZzL4Cz9kS-1-Y94c1ZUregXQuU632IIgKboaohmGPX5sLqEMrmlsRbPTWfhkyEXX03RQX4ubesRC1WGOHYMWXtk02bodDUkEgW3RZBf1fS2YIeKYmJNbDrmFbaFpCmOAXTzN0x70thPnuXAKVWvKaUbJOCQcLZ5P4BlzU-UJuyNV_kxRfFIVfdzBuseetH5kf6snTVp9pJjzvqwRukC7lmg',
  },
  {
    title: 'NYC Penthouse Week',
    description: 'Luxury stay in Manhattan with Broadway tickets and helicopter tour included.',
    price: '$6,200',
    duration: '5 Days',
    group: '2 ppl',
    rating: '4.6',
    category: ['All Packages', 'City Breaks'],
    tags: [{ label: 'Urban' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIRXc2032U2hY-HLjoK1Ag0J7DSNRzbKAc2V_dKqy80CC3MwKwHe49ZZvhLMwn1IjGvh8jdeJSfm5cW1ryHRpDr3WfqvchFpTRPz_gUnOiBRUgYwRqOygImLBgjdM7a-03U9khRpKmfCgQLotc7v52Gnj2vi5gBlgMBlMk9rN0xb58wM8D6gCa_vjpRjJx0pkBz-5zCw4J8-9U26zjU267MLvmaCAR0zjTsrruI-UVxI8zHCaJxxdBBDUaxqlgfGYq51IYN4TGaA',
  },
  {
    title: 'Mystic Machu Picchu',
    description: 'A guided journey through the Sacred Valley to the lost city of the Incas.',
    price: '$2,900',
    duration: '6 Days',
    group: 'Group',
    rating: '4.9',
    category: ['All Packages', 'Mountain Treks', 'Cultural Tours'],
    tags: [{ label: 'History' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCAVUB0h5vQRfF5hJZn-4xznNzIOGFq0GqG3kc9GG30esdrWAKSL9UrJEn4F-UxeK1BfGOuteIHrBjyue5n18qFSsZDlwlcUcpCLuV1qgsvNPB12Uyl4c4T3ZsaBUZ2nZj3qwH2e9mpVKxHUcZQ9F3_RYwvyg_fP-tyhmqZ2la28ecc6g92erllKxG36UrBISc5HRp1-8ZeE9qBQ49IxXSv82Vwttnuz4Sb-1LzPePg3mwOIT4HghZ3FNWQXpsPcUtMqeSQk2isg',
  },
  // Adding the missing tours that are hardcoded on other pages but not in allTours
  {
    title: 'The Royal Serengeti Safari',
    description: '10-day luxury safari with private game drives and hot air balloon experience.',
    price: '$12,000',
    duration: '10 Days',
    group: 'Group',
    rating: '5.0',
    category: ['All Packages', 'Safari Adventures'],
    tags: [{ label: 'Featured', style: 'bg-primary/90' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAae9-jgMtfLY4pZTb4At9kVVP0UyuN4ztEK3DfJyYBEKE971nIMS6zfggnNE4222TwuLC9qq0YmB-tqps4gRz_4oHkWZu9FTcu9RMCYyonHusYO-t0KIyenuZ8ZhATYeUgTkbssukdVW9eAHzo_46bLV52y6MCPq0dWHG8YQ99Mu3q8btP2iMLF8PpevjJAP4ut8hFo5YouwpHeIpWZ_7NQ0NAOtm2TMlTWUGl25gZSucltOaB_RiK03g-jT6fU2EwpDsbOLiFhg'
  }
];

export const initialWishlistItems: WishlistItemLocal[] = [
  {
    id: '1',
    location: 'Oceania • Private Island',
    title: 'The Brando Reserve',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHDZw2P1Bt42QqK3S_ze8EGY_eGv8ylghIyD24u4tctGSvrm3TkZi7DTdX8k96quBef24tZEXLSw2m20GtGFi5Ag8QdytJo0u1UHOT5luYFRwTasxvpdOnjnaw45l_DSdmb5buDAY19_syqliRIKNq1QVMzjDw5hXX9Xcwo0DCf9YRg3Yo9QTnIf02G1y16jN5feXinGeao4CjtRdK1ZMNSVasRdK-RLDUXDSKqA55KiebzwSE1zFM8ZyMClE3iGDMTdjHCEk_YA',
    price: 24900,
    rating: 4.9,
    reviews: 120,
    category: 'Villas',
  },
  {
    id: '2',
    location: 'Kyoto • Zen Experience',
    title: 'Aman Kyoto Sanctuary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJfQGGrlZ1FJuDxdSJqjTokju1EWXWtHli-FGMs1L38ktE0sA8i3rqQEPVhmSe-y211S0WrLDDiuwMB7F3MY9gdlInRaVBnGNmEAZgjLndTuplAYLpIeqKeA8TYY9lIgqjAmR1gLbhcciBrBv9ZWwScwywuqYsqPTV2LpSWmUXGtEcTQ4QXtxhEkaFrqvmUVFA8Ix688GLdZ2WS1_aptrJDgnH9jLcqg_ffI1a97RHgKy-4Rk_F32GnS6tofOtGQIWJbqcg4XNXw',
    price: 18500,
    rating: 5.0,
    reviews: 85,
    category: 'Villas',
  },
  {
    id: '3',
    location: 'Tanzania • Ultra-Luxury Safari',
    title: 'Singita Grumeti',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-xCu15TkqE2gKjOy-5legZG_kg0k-seYoAyjTOJxAXXXWYZMHHxygiznrneGLQ9P_K3wpW-YOr8l_5HZ6etP9mDO8uJorzVhASmkxFlAz6BiwBiBwnfMlpp7mpgX1ego9SEcLS1AgD93gTapFSJO0WEXaFYyea1GikFOzLl2Obk4_kNbl15zalhbZuv6BwuOXoaTJZ092rPMCDBFvPOWta5RDPZ-cObH0RDMViIg9jPVa77kts7MyGQyI8FAZG8P-t8qxlHsePw',
    price: 32000,
    rating: 4.8,
    reviews: 42,
    category: 'Villas',
  }
];

export function getWishlistItemDetails(itemType: string, itemId: string): WishlistItemLocal | null {
  if (itemType === 'TOUR_PACKAGE') {
    const tour = allTours.find(t => t.title === itemId);
    if (!tour) return null;
    return {
      id: "tour-" + itemId, // This will be overridden by the db id
      location: 'Tour Package',
      title: tour.title,
      image: tour.image,
      price: parseInt(tour.price.replace(/[^0-9]/g, ''), 10),
      rating: parseFloat(tour.rating),
      reviews: Math.floor(Math.random() * 50) + 10, // Mock reviews
      category: 'Tours',
    };
  } else if (itemType === 'VILLA') {
    return initialWishlistItems.find(i => i.title === itemId || i.id === itemId) || null;
  }
  
  return null;
}
