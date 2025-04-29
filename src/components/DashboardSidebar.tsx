
import React from 'react';
import { 
  Calendar, 
  Heart, 
  Home, 
  Users, 
  Clock, 
  Activity,
  Settings, 
  CalendarDays,
  User
} from 'lucide-react';
import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const DashboardSidebar: React.FC = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-white" />
          <h1 className="text-xl font-bold text-white">MediDash</h1>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="nav-link active">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="nav-link">
              <Calendar className="h-5 w-5" />
              <span>Appointments</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="nav-link">
              <Users className="h-5 w-5" />
              <span>Patients</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="nav-link">
              <Activity className="h-5 w-5" />
              <span>Medical Records</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="nav-link">
              <Clock className="h-5 w-5" />
              <span>Schedule</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="nav-link">
              <User className="h-5 w-5" />
              <span>Staff</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <SidebarMenuButton className="nav-link w-full">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </SidebarMenuButton>
      </SidebarFooter>
      
      <SidebarTrigger className="absolute top-4 right-0 transform translate-x-full bg-medical-primary text-white p-1 rounded-r-md" />
    </Sidebar>
  );
};

export default DashboardSidebar;
