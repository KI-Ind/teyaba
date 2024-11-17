import React from 'react';
import { useTranslation } from 'react-i18next';

const MenuSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('menu.featured')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('menu.featuredDescription')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;