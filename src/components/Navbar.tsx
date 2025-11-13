import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light tracking-wider text-foreground hover:text-primary transition-colors">
            VESTITE LINDA
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/catalog" 
              className={`text-sm font-light tracking-wide uppercase transition-colors ${
                isActive('/catalog') ? 'text-primary font-normal' : 'text-foreground hover:text-primary'
              }`}
            >
              Catálogo
            </Link>
            
            <Link 
              to="/stores" 
              className={`text-sm font-light tracking-wide uppercase transition-colors ${
                isActive('/stores') ? 'text-primary font-normal' : 'text-foreground hover:text-primary'
              }`}
            >
              Sucursales
            </Link>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
