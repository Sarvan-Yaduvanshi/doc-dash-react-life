
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import StatsOverview from '@/components/StatsOverview';
import PatientsList from '@/components/PatientsList';
import UpcomingAppointments from '@/components/UpcomingAppointments';
import RecentActivity from '@/components/RecentActivity';
import DashboardAnalytics from '@/components/DashboardAnalytics';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1">
          <DashboardHeader doctorName="Sarah Miller" />
          
          <div className="p-6 bg-slate-50 min-h-[calc(100vh-76px)]">
            <h2 className="text-2xl font-bold mb-6 text-medical-dark">Dashboard Overview</h2>
            
            <StatsOverview />
            
            <DashboardAnalytics />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <PatientsList />
              </div>
              <div>
                <UpcomingAppointments />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
