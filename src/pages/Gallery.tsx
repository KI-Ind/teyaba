import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80',
      title: 'Couscous Royal',
      category: 'Plats Principaux'
    },
    {
      url: 'https://images.unsplash.com/photo-1585537884213-2feb0e1824e2?auto=format&fit=crop&q=80',
      title: 'Tajine de Poulet',
      category: 'Plats Principaux'
    },
    {
      url: 'https://images.unsplash.com/photo-1577104603560-b534999873a9?auto=format&fit=crop&q=80',
      title: 'Pastilla',
      category: 'Entrées'
    },
    {
      url: 'https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?auto=format&fit=crop&q=80',
      title: 'Préparation',
      category: 'Cuisine'
    },
    {
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
      title: 'Événement',
      category: 'Événements'
    },
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
      title: 'Buffet',
      category: 'Services'
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Galerie</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez en images l'excellence de notre cuisine et de nos services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm text-amber-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;