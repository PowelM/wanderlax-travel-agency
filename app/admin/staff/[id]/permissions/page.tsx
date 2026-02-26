import React from 'react';
import AdminStaffPermissionsClient from '@/components/admin/AdminStaffPermissionsClient';

export default function StaffPermissionsPage({ params }: { params: { id: string } }) {
  return <AdminStaffPermissionsClient staffId={params.id} />;
}
