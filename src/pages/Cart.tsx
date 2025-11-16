import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center py-20">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-4xl font-light tracking-wider mb-4 text-foreground">
              Tu carrito está vacío
            </h1>
            <p className="text-muted-foreground font-light mb-8">
              Agregá productos desde nuestro catálogo
            </p>
            <Link to="/catalog">
              <Button size="lg" className="rounded-full">
                Ver Catálogo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-light tracking-wider text-foreground">
              Mi Carrito
            </h1>
            <Button
              variant="outline"
              size="sm"
              onClick={clearCart}
              className="rounded-full"
            >
              Vaciar carrito
            </Button>
          </div>

          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <Card
                key={`${item.id}-${item.size}-${item.color.name}`}
                className="p-4"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-light text-lg text-foreground mb-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Talle: {item.size}</span>
                          <div className="flex items-center gap-2">
                            <span>Color: {item.color.name}</span>
                            <div
                              className="w-4 h-4 rounded-full border border-border"
                              style={{ backgroundColor: item.color.value }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id, item.size, item.color.name)}
                        className="flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color.name,
                              item.quantity - 1
                            )
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="text-foreground font-light w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color.name,
                              item.quantity + 1
                            )
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <p className="text-lg font-light text-foreground">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-gradient-pastel">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-light text-foreground">Total</span>
                <span className="text-2xl font-light text-foreground">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              
              <Button size="lg" className="w-full rounded-full">
                Finalizar Compra
              </Button>
              
              <Link to="/catalog">
                <Button variant="outline" size="lg" className="w-full rounded-full">
                  Seguir Comprando
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
