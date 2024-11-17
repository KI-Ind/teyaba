import React from 'react';

const MenuSection = () => {
  const menuItems = [
    {
      title: 'Couscous Royal',
      description: 'Couscous traditionnel aux sept légumes, agneau et poulet',
      price: '25€',
      image: 'https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?auto=format&fit=crop&q=80'
    },
    {
      title: 'Tajine de Poulet',
      description: 'Tajine de poulet aux olives et citrons confits',
      price: '22€',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80'
    },
    {
      title: 'Pastilla au Poulet',
      description: 'Pastilla traditionnelle au poulet et aux amandes',
      price: '20€',
      image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Spécialités
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos plats signatures, préparés avec passion et authenticité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-amber-200 font-medium">{item.price}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 w-full bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition">
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-100 text-amber-800 px-8 py-3 rounded-full hover:bg-amber-200 transition">
            Voir tout le menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;