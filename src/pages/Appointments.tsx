
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import UpcomingAppointments from '@/components/UpcomingAppointments';
import CalendarView from '@/components/CalendarView';

const Appointments = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1">
          <DashboardHeader doctorName="Sarah Miller" />
          
          <div className="p-6 bg-slate-50 min-h-[calc(100vh-76px)]">
            <h2 className="text-2xl font-bold mb-6">Appointments</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <UpcomingAppointments />
              <CalendarView />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Appointments;
