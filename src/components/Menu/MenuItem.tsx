import React from 'react';
import { useCartStore } from '../../store/cartStore';

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, name, description, price, image }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, quantity: 1, image });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-amber-200 font-medium">{price}€</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default MenuItem;