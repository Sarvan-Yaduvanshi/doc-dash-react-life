
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="bg-medical-light p-5 rounded-full">
            <Heart className="h-12 w-12 text-medical-primary" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-medical-primary mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! This page couldn't be found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button 
          className="bg-medical-primary hover:bg-medical-secondary text-white"
          onClick={() => window.location.href = '/'}
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
