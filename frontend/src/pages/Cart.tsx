import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCartStore } from '../store/cartStore';

const Cart = () => {
  const { t } = useTranslation();
  const { items, total } = useCartStore();

  return (
    <div className="bg-amber-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('cart.title')}</h1>
        {items.length === 0 ? (
          <p>{t('cart.empty')}</p>
        ) : (
          <div>
            {/* Cart items will be rendered here */}
            <p>Total: {total()}€</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;