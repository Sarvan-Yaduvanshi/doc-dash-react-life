
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { User } from 'lucide-react';

const staffData = [
  { name: 'Dr. Johnson', patients: 36, satisfaction: 85, efficiency: 92, punctuality: 78, teamwork: 88, specialty: 'Cardiology' },
  { name: 'Dr. Lee', patients: 29, satisfaction: 90, efficiency: 85, punctuality: 95, teamwork: 80, specialty: 'Pediatrics' },
  { name: 'Dr. Williams', patients: 42, satisfaction: 82, efficiency: 78, punctuality: 88, teamwork: 85, specialty: 'Orthopedics' },
  { name: 'Dr. Brown', patients: 33, satisfaction: 88, efficiency: 90, punctuality: 82, teamwork: 92, specialty: 'Dermatology' },
];

const performanceData = [
  { subject: 'Patients Seen', A: 36, B: 29, C: 42, D: 33, fullMark: 50 },
  { subject: 'Patient Satisfaction', A: 85, B: 90, C: 82, D: 88, fullMark: 100 },
  { subject: 'Efficiency', A: 92, B: 85, C: 78, D: 90, fullMark: 100 },
  { subject: 'Punctuality', A: 78, B: 95, C: 88, D: 82, fullMark: 100 },
  { subject: 'Team Collaboration', A: 88, B: 80, C: 85, D: 92, fullMark: 100 },
];

const Staff = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1">
          <DashboardHeader doctorName="Sarah Miller" />
          
          <div className="p-6 bg-slate-50 min-h-[calc(100vh-76px)]">
            <h2 className="text-2xl font-bold mb-6 text-medical-dark">Staff Management</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="lg:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-medical-primary">Staff Performance Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ 
                    A: { color: "#0EA5E9", label: "Dr. Johnson" }, 
                    B: { color: "#10B981", label: "Dr. Lee" }, 
                    C: { color: "#8B5CF6", label: "Dr. Williams" }, 
                    D: { color: "#F43F5E", label: "Dr. Brown" } 
                  }} className="h-80">
                    <RadarChart outerRadius={100} data={performanceData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Radar name="Dr. Johnson" dataKey="A" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.3} />
                      <Radar name="Dr. Lee" dataKey="B" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                      <Radar name="Dr. Williams" dataKey="C" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                      <Radar name="Dr. Brown" dataKey="D" stroke="#F43F5E" fill="#F43F5E" fillOpacity={0.3} />
                      <Legend />
                    </RadarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-medical-primary">Staff Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Total Staff</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-semibold">24</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Active</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-1">Doctors</p>
                      <p className="text-xl font-medium">12</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-1">Nurses</p>
                      <p className="text-xl font-medium">8</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-1">Administrative</p>
                      <p className="text-xl font-medium">4</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {staffData.map((staff, index) => (
                <Card key={index} className="shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-medical-light flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-medical-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{staff.name}</p>
                        <p className="text-xs text-gray-500">{staff.specialty}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs text-gray-500">Patients</p>
                          <span className="text-xs">{staff.patients}</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full">
                          <div className="h-full bg-medical-primary rounded-full" style={{ width: `${(staff.patients/50)*100}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs text-gray-500">Satisfaction</p>
                          <span className="text-xs">{staff.satisfaction}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: `${staff.satisfaction}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs text-gray-500">Efficiency</p>
                          <span className="text-xs">{staff.efficiency}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${staff.efficiency}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Staff;
