import React from 'react';
import AdminSidebar from '../../components/sidebar/AdminSidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <AdminSidebar />
      {children}
    </>
  );
}
