
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample patient data
const patients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 42,
    condition: 'Hypertension',
    status: 'Stable',
    appointmentDate: '15 May, 2:30 PM'
  },
  {
    id: 2,
    name: 'Robert Chen',
    age: 35,
    condition: 'Type 2 Diabetes',
    status: 'Review',
    appointmentDate: '16 May, 10:00 AM'
  },
  {
    id: 3,
    name: 'Emma Lee',
    age: 28,
    condition: 'Pregnancy',
    status: 'New',
    appointmentDate: '15 May, 4:15 PM'
  },
  {
    id: 4,
    name: 'David Wilson',
    age: 56,
    condition: 'Arthritis',
    status: 'Stable',
    appointmentDate: '17 May, 11:30 AM'
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    age: 31,
    condition: 'Anxiety',
    status: 'Review',
    appointmentDate: '15 May, 3:00 PM'
  }
];

// Function to get the appropriate badge color based on patient status
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Stable':
      return <Badge className="bg-green-500">Stable</Badge>;
    case 'Review':
      return <Badge className="bg-yellow-500">Review</Badge>;
    case 'New':
      return <Badge className="bg-blue-500">New</Badge>;
    case 'Critical':
      return <Badge className="bg-red-500">Critical</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const PatientsList: React.FC = () => {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between bg-slate-50 rounded-t-lg">
        <CardTitle className="text-xl font-bold">Recent Patients</CardTitle>
        <Button variant="outline">View All</Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Next Appointment</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>{getStatusBadge(patient.status)}</TableCell>
                <TableCell>{patient.appointmentDate}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">View</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PatientsList;
