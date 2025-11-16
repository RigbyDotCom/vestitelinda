import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
const Stores = () => {
  const stores = [{
    id: 1,
    name: "Suipacha",
    address: "25 de mayo 580, Suipacha",
    phone: "+54 12 3456-7890",
    hours: "Lun a Sáb: 10:00 - 20:00",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
  }, {
    id: 2,
    name: "Chivilcoy",
    address: "Maipú 49, Chivilcoy",
    phone: "+54 12 3456-7890",
    hours: "Lun a Sáb: 10:00 - 20:00",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-light tracking-wider mb-4 text-foreground">
            Nuestras Sucursales
          </h1>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Visitanos en cualquiera de nuestras tiendas para vivir la experiencia completa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stores.map(store => <Card key={store.id} className="overflow-hidden hover:shadow-medium transition-all duration-300">
              <div className="aspect-video overflow-hidden bg-muted">
                
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-light tracking-wide text-foreground">
                  {store.name}
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="font-light">{store.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="font-light">{store.phone}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="font-light">{store.hours}</span>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-pastel rounded-2xl text-center">
          <h2 className="text-3xl font-light tracking-wide mb-4">
            ¿Querés asociarte con nosotros?                     
          </h2>
          <p className="text-muted-foreground font-light mb-6 max-w-xl mx-auto">
            Escribinos para conocer más sobre nuestras oportunidades de negocio
          </p>
          <a href="mailto:vestitelinda@gmail.com" className="text-foreground hover:text-primary transition-colors font-light tracking-wide">
            vestitelinda@gmail.com
          </a>
        </div>
      </div>
    </div>;
};
export default Stores;