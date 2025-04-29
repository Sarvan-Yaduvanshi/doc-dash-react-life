
import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CalendarView: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Sample busy days (days with appointments)
  const busyDays = [
    new Date(2025, 3, 5),
    new Date(2025, 3, 10),
    new Date(2025, 3, 15),
    new Date(2025, 3, 20),
    new Date(2025, 3, 25),
    new Date(2025, 4, 2),
    new Date(2025, 4, 7),
    new Date(2025, 4, 12),
    new Date(2025, 4, 18),
    new Date(2025, 4, 23),
    new Date(2025, 4, 29)
  ];
  
  return (
    <Card className="h-full">
      <CardHeader className="bg-slate-50 rounded-t-lg">
        <CardTitle className="text-xl font-bold">Calendar</CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex justify-center">
        <Calendar 
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border pointer-events-auto"
          modifiers={{
            busy: busyDays
          }}
          modifiersStyles={{
            busy: { 
              fontWeight: "bold",
              backgroundColor: "rgba(14, 165, 233, 0.1)",
              color: "#0EA5E9",
              border: "1px solid #0EA5E9"
            }
          }}
        />
      </CardContent>
    </Card>
  );
};

export default CalendarView;
