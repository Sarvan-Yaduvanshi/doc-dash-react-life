
import React from 'react';
import { Calendar, Clock, Users, CalendarCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StatsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="stat-card border-l-4 border-medical-primary hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
        <CardContent className="p-4 flex items-start">
          <div className="bg-medical-light p-3 rounded-lg mr-4">
            <Users className="h-6 w-6 text-medical-primary" />
          </div>
          <div>
            <p className="stat-label">Total Patients</p>
            <p className="stat-value">248</p>
            <p className="text-xs text-green-500 mt-1">↑ 12% from last month</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="stat-card border-l-4 border-blue-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
        <CardContent className="p-4 flex items-start">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <CalendarCheck className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <p className="stat-label">Today's Appointments</p>
            <p className="stat-value">12</p>
            <p className="text-xs text-green-500 mt-1">On schedule</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="stat-card border-l-4 border-purple-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
        <CardContent className="p-4 flex items-start">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <Calendar className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <p className="stat-label">This Week</p>
            <p className="stat-value">42</p>
            <p className="text-xs text-orange-500 mt-1">↑ 8% more than usual</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="stat-card border-l-4 border-green-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
        <CardContent className="p-4 flex items-start">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <Clock className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <p className="stat-label">Avg. Wait Time</p>
            <p className="stat-value">15m</p>
            <p className="text-xs text-green-500 mt-1">↓ 2m improvement</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsOverview;
