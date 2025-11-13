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
      category: "Vestidos"
    },
    {
      id: 2,
      name: "Blusa Elegante",
      price: 5500,
      image: "https://images.unsplash.com/photo-1564257577810-cd1f3d52c721?w=400&h=600&fit=crop",
      category: "Blusas"
    },
    {
      id: 3,
      name: "Pantalón Clásico",
      price: 7200,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=600&fit=crop",
      category: "Pantalones"
    },
    {
      id: 4,
      name: "Falda Midi",
      price: 6800,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=600&fit=crop",
      category: "Faldas"
    },
    {
      id: 5,
      name: "Camisa Oversized",
      price: 6200,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=600&fit=crop",
      category: "Camisas"
    },
    {
      id: 6,
      name: "Vestido Largo",
      price: 9500,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      category: "Vestidos"
    },
    {
      id: 7,
      name: "Top Cruzado",
      price: 4500,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      category: "Tops"
    },
    {
      id: 8,
      name: "Conjunto Lino",
      price: 11200,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
      category: "Conjuntos"
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
