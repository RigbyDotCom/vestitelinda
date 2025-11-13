import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
  sizes?: string[];
  colors?: { name: string; value: string }[];
}

const ProductCard = ({ name, price, image, category, sizes = [], colors = [] }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value || "");

  return (
    <Card className="group overflow-hidden border-border hover:shadow-medium transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 space-y-3">
        {category && (
          <p className="text-xs tracking-wider uppercase text-muted-foreground">{category}</p>
        )}
        
        <h3 className="font-light text-foreground tracking-wide">{name}</h3>
        
        {sizes.length > 0 && (
          <div className="space-y-2">
            <Label className="text-xs tracking-wider uppercase text-muted-foreground">Talle</Label>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex gap-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center">
                  <RadioGroupItem value={size} id={`${name}-${size}`} className="sr-only peer" />
                  <Label
                    htmlFor={`${name}-${size}`}
                    className="flex items-center justify-center w-8 h-8 text-xs border border-border rounded cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary hover:border-primary/50 transition-colors"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        {colors.length > 0 && (
          <div className="space-y-2">
            <Label className="text-xs tracking-wider uppercase text-muted-foreground">Color</Label>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-7 h-7 rounded-full border-2 transition-all ${
                    selectedColor === color.value ? "border-primary scale-110" : "border-border"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        )}
        
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
