import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-medium transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 space-y-2">
        {category && (
          <p className="text-xs tracking-wider uppercase text-muted-foreground">{category}</p>
        )}
        
        <h3 className="font-light text-foreground tracking-wide">{name}</h3>
        
        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-normal text-foreground">${price}</p>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-xs tracking-wide uppercase hover:bg-primary/10 hover:text-primary"
          >
            Agregar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
