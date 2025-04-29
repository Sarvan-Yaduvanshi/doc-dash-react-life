
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip,
  Legend 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const patientData = [
  { name: 'Jan', new: 65, returning: 28 },
  { name: 'Feb', new: 59, returning: 32 },
  { name: 'Mar', new: 80, returning: 41 },
  { name: 'Apr', new: 71, returning: 36 },
  { name: 'May', new: 56, returning: 45 },
  { name: 'Jun', new: 68, returning: 51 },
];

const appointmentsData = [
  { name: 'Mon', appointments: 12 },
  { name: 'Tue', appointments: 19 },
  { name: 'Wed', appointments: 15 },
  { name: 'Thu', appointments: 22 },
  { name: 'Fri', appointments: 18 },
  { name: 'Sat', appointments: 7 },
  { name: 'Sun', appointments: 0 },
];

const revenueData = [
  { name: 'Week 1', revenue: 4800 },
  { name: 'Week 2', revenue: 5200 },
  { name: 'Week 3', revenue: 4900 },
  { name: 'Week 4', revenue: 6100 },
];

const departmentData = [
  { name: 'Cardiology', value: 30 },
  { name: 'Pediatrics', value: 25 },
  { name: 'Orthopedics', value: 20 },
  { name: 'Neurology', value: 15 },
  { name: 'Dermatology', value: 10 },
];

const COLORS = ['#0EA5E9', '#6366F1', '#8B5CF6', '#EC4899', '#10B981'];

const DashboardAnalytics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-medical-primary">Patient Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ new: { color: "#0EA5E9" }, returning: { color: "#6366F1" } }} className="h-80">
            <AreaChart data={patientData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorReturning" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="new" stroke="#0EA5E9" fillOpacity={1} fill="url(#colorNew)" />
              <Area type="monotone" dataKey="returning" stroke="#6366F1" fillOpacity={1} fill="url(#colorReturning)" />
              <Legend />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-medical-primary">Weekly Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ appointments: { color: "#0284C7" } }} className="h-80">
            <BarChart data={appointmentsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="appointments" fill="#0284C7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-medical-primary">Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ revenue: { color: "#10B981" } }} className="h-80">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-medical-primary">Department Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardAnalytics;
