import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'fr', name: 'Français', dir: 'ltr' },
    { code: 'en', name: 'English', dir: 'ltr' },
    { code: 'es', name: 'Español', dir: 'ltr' },
    { code: 'pt', name: 'Português', dir: 'ltr' },
    { code: 'ar', name: 'العربية', dir: 'rtl' }
  ];

  const changeLanguage = (lng: string) => {
    const selectedLang = languages.find(lang => lang.code === lng);
    i18n.changeLanguage(lng).then(() => {
      document.documentElement.dir = selectedLang?.dir || 'ltr';
      document.documentElement.lang = lng;
    });
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-amber-600">
        <Globe size={20} />
        <span className="hidden md:inline" dir={currentLanguage?.dir}>
          {currentLanguage?.name || 'Français'}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm ${
              i18n.language === lang.code ? 'bg-amber-50 text-amber-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
            dir={lang.dir}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;