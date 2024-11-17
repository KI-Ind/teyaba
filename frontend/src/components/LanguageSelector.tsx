import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'ar', name: 'العربية' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-amber-600">
        <Globe size={20} />
        <span className="hidden md:inline">
          {languages.find(lang => lang.code === i18n.language)?.name || 'Français'}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm ${
              i18n.language === lang.code ? 'bg-amber-50 text-amber-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;