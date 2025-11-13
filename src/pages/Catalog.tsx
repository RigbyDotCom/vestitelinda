import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const Catalog = () => {
  // Productos de ejemplo - estos se reemplazarán con datos reales
  const products = [
    {
      id: 1,
      name: "Vestido Minimal",
      price: 8900,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
      category: "Vestidos",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        { name: "Negro", value: "#000000" },
        { name: "Beige", value: "#F5E6D3" },
        { name: "Blanco", value: "#FFFFFF" }
      ]
    },
    {
      id: 2,
      name: "Blusa Elegante",
      price: 5500,
      image: "https://images.unsplash.com/photo-1564257577810-cd1f3d52c721?w=400&h=600&fit=crop",
      category: "Blusas",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Rosa", value: "#FFD1DC" },
        { name: "Celeste", value: "#AED9E0" }
      ]
    },
    {
      id: 3,
      name: "Pantalón Clásico",
      price: 7200,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=600&fit=crop",
      category: "Pantalones",
      sizes: ["36", "38", "40", "42", "44"],
      colors: [
        { name: "Negro", value: "#000000" },
        { name: "Gris", value: "#808080" },
        { name: "Camel", value: "#C19A6B" }
      ]
    },
    {
      id: 4,
      name: "Falda Midi",
      price: 6800,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=600&fit=crop",
      category: "Faldas",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Negro", value: "#000000" },
        { name: "Verde", value: "#4A7C59" },
        { name: "Terracota", value: "#E07856" }
      ]
    },
    {
      id: 5,
      name: "Camisa Oversized",
      price: 6200,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=600&fit=crop",
      category: "Camisas",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Azul", value: "#5B9BD5" },
        { name: "Rosa", value: "#FFD1DC" }
      ]
    },
    {
      id: 6,
      name: "Vestido Largo",
      price: 9500,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      category: "Vestidos",
      sizes: ["XS", "S", "M", "L"],
      colors: [
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Coral", value: "#FF7F50" },
        { name: "Lila", value: "#C8A2C8" }
      ]
    },
    {
      id: 7,
      name: "Top Cruzado",
      price: 4500,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      category: "Tops",
      sizes: ["XS", "S", "M", "L"],
      colors: [
        { name: "Negro", value: "#000000" },
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Rojo", value: "#DC143C" }
      ]
    },
    {
      id: 8,
      name: "Conjunto Lino",
      price: 11200,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
      category: "Conjuntos",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Beige", value: "#F5E6D3" },
        { name: "Blanco", value: "#FFFFFF" },
        { name: "Camel", value: "#C19A6B" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-light tracking-wider mb-4 text-foreground">
            Catálogo
          </h1>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Descubrí nuestra colección de piezas cuidadosamente seleccionadas para vos
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              sizes={product.sizes}
              colors={product.colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
