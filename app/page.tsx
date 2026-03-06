import React from 'react';
import HomeClient from '@/components/HomeClient';
import { getPublicEvents } from '@/app/actions/eventActions';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const featuredEvents = await getPublicEvents();
  
  return <HomeClient featuredEvents={featuredEvents} />;
}
