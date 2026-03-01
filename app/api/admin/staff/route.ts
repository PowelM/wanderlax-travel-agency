import { NextResponse } from 'next/server';
import { getStaffData } from '@/lib/staff';

export async function GET() {
  try {
    const data = await getStaffData();
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error in staff API route:', error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: 'Failed to fetch staff data', details: message },
      { status: 500 }
    );
  }
}
