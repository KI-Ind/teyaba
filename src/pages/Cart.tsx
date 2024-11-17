import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { stripe } from '../lib/stripe';
import toast from 'react-hot-toast';
import axios from 'axios';

const Cart = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      
      const response = await axios.post('/api/create-checkout-session', {
        items,
        customer: {
          email: 'client@example.com' // Idéalement, récupéré du state de l'utilisateur
        }
      });

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Une erreur est survenue lors du paiement");
      console.error('Checkout error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Votre Panier</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Votre panier est vide</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {items.map((item) => (
                  <div key={item.id} className="p-6 flex items-center gap-4 border-b border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-amber-600 font-medium">{item.price}€</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus size={20} className="text-gray-600" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={20} className="text-gray-600" />
                      </button>
                    </div>
                    <button 
                      className="p-2 hover:bg-gray-100 rounded"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 size={20} className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Résumé</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Sous-total</span>
                    <span>{total()}€</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Livraison</span>
                    <span>5€</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex justify-between font-semibold text-gray-900">
                      <span>Total</span>
                      <span>{total() + 5}€</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition disabled:opacity-50"
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Traitement...' : 'Commander'}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Livraison gratuite à partir de 50€
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;