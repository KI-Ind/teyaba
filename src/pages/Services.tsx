import React from 'react';
import { Utensils, Users, Truck, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Utensils className="w-12 h-12 text-amber-600" />,
      title: 'Service Traiteur',
      description: 'Service traiteur complet pour vos événements avec un large choix de menus personnalisables.',
      features: [
        'Menus personnalisés',
        'Service professionnel',
        'Équipement inclus',
        'Installation et nettoyage'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-amber-600" />,
      title: 'Événements',
      description: 'Organisation complète de vos événements professionnels et privés.',
      features: [
        'Mariages',
        'Séminaires',
        'Anniversaires',
        'Réceptions professionnelles'
      ]
    },
    {
      icon: <Truck className="w-12 h-12 text-amber-600" />,
      title: 'Livraison',
      description: 'Service de livraison rapide et fiable pour vos commandes.',
      features: [
        'Livraison à domicile',
        'Livraison en entreprise',
        'Suivi en temps réel',
        'Packaging adapté'
      ]
    },
    {
      icon: <Clock className="w-12 h-12 text-amber-600" />,
      title: 'Sur Mesure',
      description: 'Des solutions adaptées à vos besoins spécifiques.',
      features: [
        'Consultation personnalisée',
        'Menus spéciaux',
        'Régimes particuliers',
        'Flexibilité horaire'
      ]
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de restauration pour tous vos événements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vous avez un projet spécifique ?
            </h2>
            <p className="text-gray-600">
              Contactez-nous pour discuter de vos besoins particuliers
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-amber-100 text-amber-800 px-8 py-3 rounded-full hover:bg-amber-200 transition">
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;