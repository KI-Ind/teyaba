import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Teyaba | Service Traiteur Marocain de Luxe à Paris';
      case '/menu':
        return 'Menu - Cuisine Marocaine Authentique | Teyaba';
      case '/services':
        return 'Services Traiteur pour Événements | Teyaba';
      case '/evenements':
        return 'Organisation d\'Événements et Mariages | Teyaba';
      case '/galerie':
        return 'Galerie Photos de nos Créations Culinaires | Teyaba';
      case '/contact':
        return 'Contactez votre Traiteur Marocain à Paris | Teyaba';
      case '/panier':
        return 'Votre Panier | Teyaba';
      default:
        return 'Teyaba | Service Traiteur Marocain de Luxe';
    }
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;