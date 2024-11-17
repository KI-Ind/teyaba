import React from 'react';
import { Star, Users, Clock, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-amber-600" />,
      title: 'Qualité Premium',
      description: 'Ingrédients frais et authentiques sélectionnés avec soin'
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: 'Service Personnalisé',
      description: 'Une équipe dédiée à votre satisfaction'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: 'Ponctualité',
      description: 'Livraison à l\'heure, pour tous vos événements'
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: 'Excellence',
      description: 'Plus de 10 ans d\'expertise en cuisine marocaine'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src="https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?auto=format&fit=crop&q=80"
                alt="Chef preparing food"
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">années d'expérience</p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              L'Excellence de la Cuisine Marocaine
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Depuis plus d'une décennie, Teyaba s'engage à vous offrir une expérience culinaire authentique et raffinée. Notre passion pour la cuisine marocaine se reflète dans chaque plat que nous préparons.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-amber-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;