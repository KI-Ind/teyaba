import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('notFound.title')}</h2>
        <p className="text-gray-600 mb-8">{t('notFound.message')}</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition"
        >
          {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;