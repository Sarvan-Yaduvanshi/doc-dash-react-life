
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DashboardHeader = ({ doctorName }) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">Welcome, Dr. {doctorName}</h1>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search..." 
            className="pl-8 w-64 focus-visible:ring-medical-primary"
          />
        </div>
        
        <Button variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <Avatar>
          <div className="h-10 w-10 rounded-full bg-medical-primary flex items-center justify-center text-white">
            {doctorName.slice(0, 1).toUpperCase()}
          </div>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardHeader;
