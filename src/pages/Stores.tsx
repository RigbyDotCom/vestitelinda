import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
const Stores = () => {
  const stores = [{
    id: 1,
    name: "Palermo Soho",
    address: "Av. Santa Fe 2850, CABA",
    phone: "+54 11 4832-5678",
    hours: "Lun a Sáb: 10:00 - 20:00 | Dom: 12:00 - 18:00",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
  }, {
    id: 2,
    name: "Recoleta",
    address: "Av. Callao 1823, CABA",
    phone: "+54 11 4804-3421",
    hours: "Lun a Sáb: 10:00 - 20:00 | Dom: 12:00 - 18:00",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop"
  }, {
    id: 3,
    name: "Belgrano",
    address: "Av. Cabildo 2550, CABA",
    phone: "+54 11 4783-9012",
    hours: "Lun a Sáb: 10:00 - 20:00 | Dom: 12:00 - 18:00",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            ¿Querés abrir una franquicia?
          </h2>
          <p className="text-muted-foreground font-light mb-6 max-w-xl mx-auto">
            Escribinos para conocer más sobre nuestras oportunidades de negocio
          </p>
          <a href="mailto:franquicias@vestitelinda.com" className="text-foreground hover:text-primary transition-colors font-light tracking-wide">
            franquicias@vestitelinda.com
          </a>
        </div>
      </div>
    </div>;
};
export default Stores;