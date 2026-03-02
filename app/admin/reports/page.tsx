import React from 'react';
import { getReportsAnalyticsData } from '@/app/actions/reportsActions';
import { AdminReportsClient } from './AdminReportsClient';

export default async function ReportsAnalyticsPage() {
  const initialDatasets = await getReportsAnalyticsData();

  return <AdminReportsClient initialDatasets={initialDatasets} />;
}
