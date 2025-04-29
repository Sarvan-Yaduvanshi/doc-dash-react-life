
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import PatientsList from '@/components/PatientsList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const patientData = [
  { name: 'New', value: 65, color: '#0EA5E9' },
  { name: 'Regular', value: 120, color: '#10B981' },
  { name: 'Returning', value: 45, color: '#8B5CF6' },
  { name: 'Critical Care', value: 18, color: '#F43F5E' },
];

const Patients = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1">
          <DashboardHeader doctorName="Sarah Miller" />
          
          <div className="p-6 bg-slate-50 min-h-[calc(100vh-76px)]">
            <h2 className="text-2xl font-bold mb-6 text-medical-dark">Patients</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-medical-primary">Patient Distribution</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="h-64 w-full max-w-xs">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={patientData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {patientData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-medical-primary">Patient Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-500 font-medium">Total</p>
                      <p className="text-2xl font-semibold text-medical-primary">248</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-500 font-medium">Active</p>
                      <p className="text-2xl font-semibold text-green-600">186</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-gray-500 font-medium">New (30d)</p>
                      <p className="text-2xl font-semibold text-purple-600">42</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-gray-500 font-medium">Critical</p>
                      <p className="text-2xl font-semibold text-red-600">18</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <PatientsList />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Patients;
