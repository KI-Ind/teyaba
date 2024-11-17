import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMenuStore } from '../store/menuStore';
import MenuItem from '../components/Menu/MenuItem';

const Menu = () => {
  const { t, i18n } = useTranslation();
  const { items, loading, error, fetchItems } = useMenuStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-amber-600">{t('common.loading')}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  const getLocalizedCategoryName = (category: any) => {
    return category.translations?.[i18n.language]?.name || category.name;
  };

  const categorizedItems = items.reduce((acc, item) => {
    const categoryName = getLocalizedCategoryName(item.category);
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <div className="bg-amber-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('menu.title')}</h1>
          <p className="text-lg text-gray-600">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(categorizedItems).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900">{category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {items.map((item) => (
                  <MenuItem key={item._id} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;