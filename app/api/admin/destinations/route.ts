import { NextResponse } from 'next/server';
import { getDestinations } from '@/app/actions/tourActions';

export async function GET() {
  const destinations = await getDestinations();
  return NextResponse.json(destinations);
}
