
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Heart, 
  Home, 
  Users, 
  Clock, 
  Activity,
  Settings, 
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

const DashboardSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

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
            <SidebarMenuButton className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              <Home className="h-5 w-5" />
              <Link to="/" className="flex-1">Dashboard</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className={`nav-link ${isActive('/appointments') ? 'active' : ''}`}>
              <Calendar className="h-5 w-5" />
              <Link to="/appointments" className="flex-1">Appointments</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className={`nav-link ${isActive('/patients') ? 'active' : ''}`}>
              <Users className="h-5 w-5" />
              <Link to="/patients" className="flex-1">Patients</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className={`nav-link ${isActive('/medical-records') ? 'active' : ''}`}>
              <Activity className="h-5 w-5" />
              <Link to="/medical-records" className="flex-1">Medical Records</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className={`nav-link ${isActive('/schedule') ? 'active' : ''}`}>
              <Clock className="h-5 w-5" />
              <Link to="/schedule" className="flex-1">Schedule</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className={`nav-link ${isActive('/staff') ? 'active' : ''}`}>
              <User className="h-5 w-5" />
              <Link to="/staff" className="flex-1">Staff</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <SidebarMenuButton className={`nav-link w-full ${isActive('/settings') ? 'active' : ''}`}>
          <Settings className="h-5 w-5" />
          <Link to="/settings" className="flex-1">Settings</Link>
        </SidebarMenuButton>
      </SidebarFooter>
      
      <SidebarTrigger className="absolute top-4 right-0 transform translate-x-full bg-medical-primary text-white p-1 rounded-r-md" />
    </Sidebar>
  );
};

export default DashboardSidebar;
