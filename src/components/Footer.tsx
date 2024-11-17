import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'ar', name: 'العربية' }
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Teyaba</h3>
            <p className="text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.menu')}</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-400 hover:text-amber-500">{t('footer.specialties')}</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-amber-500">{t('footer.eventMenus')}</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-amber-500">{t('footer.buffets')}</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-amber-500">{t('footer.promotions')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500">{t('footer.catering')}</Link></li>
              <li><Link to="/evenements" className="text-gray-400 hover:text-amber-500">{t('footer.events')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500">{t('footer.delivery')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500">{t('footer.custom')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-amber-500" />
                <span className="text-gray-400">{t('contact.address')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-500" />
                <span className="text-gray-400">{t('contact.phone')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-500" />
                <span className="text-gray-400">{t('contact.email')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={16} className="text-amber-500" />
                <span className="text-gray-400">{t('contact.hours')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <div className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-sm ${
                    i18n.language === lang.code ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-amber-500">{t('footer.legal')}</Link>
              <Link to="/confidentialite" className="text-gray-400 hover:text-amber-500">{t('footer.privacy')}</Link>
              <Link to="/cgv" className="text-gray-400 hover:text-amber-500">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;