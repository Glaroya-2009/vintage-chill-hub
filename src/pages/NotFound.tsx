
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-vintage-cream p-4">
      <div className="vintage-paper max-w-md w-full text-center">
        <div className="mb-6 text-vintage-orange">
          <AlertCircle className="h-16 w-16 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-vintage-brown mb-4">404</h1>
        <p className="text-xl text-vintage-brown/80 mb-6">
          Oops! This page seems to have wandered off
        </p>
        <p className="text-vintage-brown/70 mb-8">
          The page you're looking for doesn't exist or has been moved to another dimension.
        </p>
        <Link to="/">
          <Button className="retro-button flex items-center gap-2 mx-auto">
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
