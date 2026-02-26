import { NextResponse } from 'next/server';
import { getStaffData } from '@/lib/staff';

export async function GET() {
  try {
    const data = await getStaffData();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error in staff API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch staff data', details: error.message || String(error) },
      { status: 500 }
    );
  }
}
