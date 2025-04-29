
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import CalendarView from '@/components/CalendarView';

const Schedule = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1">
          <DashboardHeader doctorName="Sarah Miller" />
          
          <div className="p-6 bg-slate-50 min-h-[calc(100vh-76px)]">
            <h2 className="text-2xl font-bold mb-6">Schedule</h2>
            
            <div className="bg-white rounded-lg shadow p-6">
              <CalendarView />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Schedule;
