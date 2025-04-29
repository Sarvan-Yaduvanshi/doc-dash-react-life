
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import CalendarView from '@/components/CalendarView';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const scheduleData = [
  { day: 'Monday', appointments: 8, consultations: 4 },
  { day: 'Tuesday', appointments: 12, consultations: 6 },
  { day: 'Wednesday', appointments: 10, consultations: 5 },
  { day: 'Thursday', appointments: 15, consultations: 7 },
  { day: 'Friday', appointments: 11, consultations: 3 },
];

const Schedule = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1">
          <DashboardHeader doctorName="Sarah Miller" />
          
          <div className="p-6 bg-slate-50 min-h-[calc(100vh-76px)]">
            <h2 className="text-2xl font-bold mb-6 text-medical-dark">Schedule</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="lg:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-medical-primary">Appointment Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ appointments: { color: "#0EA5E9" }, consultations: { color: "#8B5CF6" } }} className="h-60">
                    <BarChart data={scheduleData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="appointments" stackId="a" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="consultations" stackId="a" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-medical-primary">Weekly Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium">Total Appointments</p>
                        <span className="text-sm text-medical-primary font-semibold">56</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-medical-primary rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium">Available Slots</p>
                        <span className="text-sm text-green-500 font-semibold">24</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium">Consultations</p>
                        <span className="text-sm text-purple-500 font-semibold">25</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium">Follow-ups</p>
                        <span className="text-sm text-amber-500 font-semibold">18</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '32%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <CalendarView />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Schedule;
