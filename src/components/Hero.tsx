import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pt-16">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-amber-900/90 to-amber-800/90">
          <img
            src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&q=80"
            alt="Moroccan Food"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition flex items-center space-x-2 group">
              <span>{t('hero.orderNow')}</span>
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition">
              {t('hero.viewMenu')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;