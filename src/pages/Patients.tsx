
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import PatientsList from '@/components/PatientsList';

const Patients = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1">
          <DashboardHeader doctorName="Sarah Miller" />
          
          <div className="p-6 bg-slate-50 min-h-[calc(100vh-76px)]">
            <h2 className="text-2xl font-bold mb-6">Patients</h2>
            
            <PatientsList />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Patients;
