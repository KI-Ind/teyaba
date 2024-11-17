import React from 'react';
import { Calendar, Heart, Briefcase, Music } from 'lucide-react';

const Events = () => {
  const eventTypes = [
    {
      icon: <Heart className="w-12 h-12 text-amber-600" />,
      title: 'Mariages',
      description: 'Rendez votre jour spécial inoubliable avec nos services de traiteur haut de gamme.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80'
    },
    {
      icon: <Briefcase className="w-12 h-12 text-amber-600" />,
      title: 'Événements Professionnels',
      description: 'Des solutions sur mesure pour vos réunions et séminaires d\'entreprise.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80'
    },
    {
      icon: <Music className="w-12 h-12 text-amber-600" />,
      title: 'Célébrations',
      description: 'Anniversaires, fêtes et célébrations privées avec un service personnalisé.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & Ahmed',
      event: 'Mariage',
      quote: 'Un service exceptionnel qui a rendu notre mariage encore plus magique.',
      image: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?auto=format&fit=crop&q=80'
    },
    {
      name: 'Tech Solutions Inc.',
      event: 'Séminaire d\'entreprise',
      quote: 'Professionnalisme et qualité au rendez-vous pour notre événement corporate.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Événements</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des moments inoubliables méritent une cuisine exceptionnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2">
                    {type.icon}
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{type.description}</p>
                <button className="w-full bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Planifiez votre événement
            </h2>
            <p className="text-gray-600">
              Consultez nos disponibilités et réservez votre date
            </p>
          </div>
          <div className="flex justify-center">
            <button className="flex items-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition">
              <Calendar className="w-5 h-5" />
              <span>Vérifier les disponibilités</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-amber-600">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;