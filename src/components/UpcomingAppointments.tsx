
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Sample appointment data
const appointments = [
  {
    id: 1,
    patientName: 'Sarah Johnson',
    time: '10:00 AM',
    type: 'Follow-up',
    image: null
  },
  {
    id: 2,
    patientName: 'Michael Brown',
    time: '11:30 AM',
    type: 'New Patient',
    image: null
  },
  {
    id: 3,
    patientName: 'Emma Thompson',
    time: '1:15 PM',
    type: 'Consultation',
    image: null
  },
  {
    id: 4,
    patientName: 'Daniel Wilson',
    time: '2:45 PM',
    type: 'Follow-up',
    image: null
  }
];

const UpcomingAppointments: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="bg-slate-50 rounded-t-lg">
        <CardTitle className="text-xl font-bold">Today's Appointments</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div 
              key={appointment.id} 
              className="flex items-center justify-between p-3 bg-white border rounded-lg hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <div className="h-10 w-10 rounded-full bg-medical-light flex items-center justify-center text-medical-primary font-medium">
                    {appointment.patientName.slice(0, 1)}
                  </div>
                </Avatar>
                <div>
                  <p className="font-medium">{appointment.patientName}</p>
                  <p className="text-sm text-gray-500">{appointment.time}</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-medical-light text-medical-primary">
                {appointment.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingAppointments;
