
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock, User, Heart, Activity } from 'lucide-react';

// Sample activity data
const activities = [
  {
    id: 1,
    description: 'Updated medical records for Sarah Johnson',
    time: '25 minutes ago',
    icon: <Activity className="h-4 w-4 text-blue-500" />
  },
  {
    id: 2,
    description: 'New appointment scheduled with David Wilson',
    time: '1 hour ago',
    icon: <CalendarClock className="h-4 w-4 text-green-500" />
  },
  {
    id: 3,
    description: 'Checked vitals for Emma Thompson',
    time: '2 hours ago',
    icon: <Heart className="h-4 w-4 text-red-500" />
  },
  {
    id: 4,
    description: 'New patient registered: Robert Chen',
    time: '3 hours ago',
    icon: <User className="h-4 w-4 text-purple-500" />
  }
];

const RecentActivity: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="bg-slate-50 rounded-t-lg">
        <CardTitle className="text-xl font-bold">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="flex items-start space-x-3 p-3 border-b last:border-b-0"
            >
              <div className="mt-1 bg-slate-100 p-2 rounded-full">
                {activity.icon}
              </div>
              <div>
                <p className="text-sm">{activity.description}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
