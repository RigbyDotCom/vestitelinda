import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  
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
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 relative">
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-light w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
              
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
