import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section con degradado rosa pastel */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-pastel overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider text-foreground mb-6 animate-fade-in">
            Lorem Ipsum
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <Link to="/catalog">
            <Button 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-medium rounded-full px-8 py-6 text-base tracking-wide uppercase transition-all duration-300 hover:shadow-soft"
            >
              Explorar Colección
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-pastel flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-light tracking-wide">Calidad Premium</h3>
              <p className="text-muted-foreground font-light">
                Materiales cuidadosamente seleccionados para tu comodidad
              </p>
            </div>
            
            <div className="text-center space-y-4 p-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-pastel flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-light tracking-wide">Envío Gratis</h3>
              <p className="text-muted-foreground font-light">
                En compras superiores a $5000
              </p>
            </div>
            
            <div className="text-center space-y-4 p-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-pastel flex items-center justify-center">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-light tracking-wide">Diseño Único</h3>
              <p className="text-muted-foreground font-light">
                Piezas exclusivas para expresar tu estilo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
