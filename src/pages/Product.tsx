import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  
  // Productos de ejemplo - en una app real vendrían de una base de datos
  const products = [
    {
      id: 1,
      name: "Vestido Minimal",
      price: 8900,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop",
      category: "Vestidos",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        { name: "Negro", value: "#000000" },
        { name: "Beige", value: "#F5E6D3" },
        { name: "Blanco", value: "#FFFFFF" }
      ],
      description: "Vestido de línea minimalista con corte elegante. Perfecto para cualquier ocasión. Confeccionado en tela de alta calidad con caída fluida."
    },
    {
      id: 2,
      name: "Blusa Elegante",
      price: 5500,
      image: "https://images.unsplash.com/photo-1564257577810-cd1f3d52c721?w=800&h=1200&fit=crop",
      category: "Blusas",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Rosa", value: "#FFD1DC" },
        { name: "Celeste", value: "#AED9E0" }
      ],
      description: "Blusa versátil con diseño sofisticado. Ideal para combinar con cualquier look. Tejido suave y respirable."
    },
    {
      id: 3,
      name: "Pantalón Clásico",
      price: 7200,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1200&fit=crop",
      category: "Pantalones",
      sizes: ["36", "38", "40", "42", "44"],
      colors: [
        { name: "Negro", value: "#000000" },
        { name: "Gris", value: "#808080" },
        { name: "Camel", value: "#C19A6B" }
      ],
      description: "Pantalón de corte clásico con ajuste perfecto. Estilo atemporal que nunca pasa de moda. Material de primera calidad."
    },
    {
      id: 4,
      name: "Falda Midi",
      price: 6800,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=1200&fit=crop",
      category: "Faldas",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Negro", value: "#000000" },
        { name: "Verde", value: "#4A7C59" },
        { name: "Terracota", value: "#E07856" }
      ],
      description: "Falda midi de largo ideal. Diseño versátil que estiliza la figura. Tela con excelente caída."
    },
    {
      id: 5,
      name: "Camisa Oversized",
      price: 6200,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=1200&fit=crop",
      category: "Camisas",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Azul", value: "#5B9BD5" },
        { name: "Rosa", value: "#FFD1DC" }
      ],
      description: "Camisa oversized de estilo moderno. Comodidad y estilo en una sola prenda. Material premium de algodón."
    },
    {
      id: 6,
      name: "Vestido Largo",
      price: 9500,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1200&fit=crop",
      category: "Vestidos",
      sizes: ["XS", "S", "M", "L"],
      colors: [
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Coral", value: "#FF7F50" },
        { name: "Lila", value: "#C8A2C8" }
      ],
      description: "Vestido largo de diseño elegante. Perfecto para eventos especiales. Confección delicada con detalles únicos."
    },
    {
      id: 7,
      name: "Top Cruzado",
      price: 4500,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1200&fit=crop",
      category: "Tops",
      sizes: ["XS", "S", "M", "L"],
      colors: [
        { name: "Negro", value: "#000000" },
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Rojo", value: "#DC143C" }
      ],
      description: "Top con detalle cruzado y diseño favorecedor. Ideal para looks casuales o elegantes. Tela elástica y cómoda."
    },
    {
      id: 8,
      name: "Conjunto Lino",
      price: 11200,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop",
      category: "Conjuntos",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Beige", value: "#F5E6D3" },
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Camel", value: "#C19A6B" }
      ],
      description: "Conjunto de lino natural de dos piezas. Frescura y elegancia para días de verano. Material 100% lino."
    }
  ];

  const product = products.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.value || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 pt-32 pb-16 text-center">
          <h1 className="text-3xl font-light text-foreground mb-4">Producto no encontrado</h1>
          <Link to="/catalog">
            <Button variant="ghost">Volver al Catálogo</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-16">
        <Link to="/catalog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wide">Volver al Catálogo</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Imagen del producto */}
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            {product.category && (
              <p className="text-sm tracking-wider uppercase text-muted-foreground">{product.category}</p>
            )}
            
            <h1 className="text-4xl font-light tracking-wide text-foreground">{product.name}</h1>
            
            <p className="text-3xl font-normal text-foreground">${product.price}</p>
            
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Selector de talle */}
            <div className="space-y-3">
              <Label className="text-sm tracking-wider uppercase text-foreground">Talle</Label>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex gap-3">
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem value={size} id={`size-${size}`} className="sr-only peer" />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex items-center justify-center min-w-[3rem] h-12 px-4 text-sm border border-border rounded cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary hover:border-primary/50 transition-all"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Selector de color */}
            <div className="space-y-3">
              <Label className="text-sm tracking-wider uppercase text-foreground">Color</Label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-110 ${
                      selectedColor === color.value ? "border-primary scale-110 ring-2 ring-primary/30" : "border-border"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {product.colors.find(c => c.value === selectedColor)?.name}
              </p>
            </div>

            {/* Botón agregar al carrito */}
            <Button 
              size="lg"
              className="w-full text-sm tracking-wide uppercase mt-8"
            >
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
