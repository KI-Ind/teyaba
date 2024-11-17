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

  const getPageDescription = () => {
    switch (location.pathname) {
      case '/':
        return 'Teyaba, votre traiteur marocain de luxe à Paris. Services de traiteur haut de gamme pour mariages, événements professionnels et célébrations privées.';
      case '/menu':
        return 'Découvrez notre menu de spécialités marocaines : couscous, tajines, pastillas et pâtisseries traditionnelles préparés avec des ingrédients frais et authentiques.';
      case '/services':
        return 'Services traiteur professionnels pour tous vos événements : mariages, séminaires, anniversaires. Organisation complète et service personnalisé.';
      case '/evenements':
        return 'Organisation d\'événements sur mesure à Paris. De la conception à la réalisation, nous prenons en charge tous les aspects de votre célébration.';
      case '/galerie':
        return 'Parcourez notre galerie photos et découvrez nos créations culinaires, la présentation de nos plats et l\'ambiance de nos événements.';
      case '/contact':
        return 'Contactez Teyaba pour vos demandes de devis et réservations. Notre équipe est à votre écoute pour organiser votre événement sur mesure.';
      default:
        return 'Service traiteur marocain haut de gamme à Paris. Cuisine authentique et raffinée pour vos événements.';
    }
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://teyaba.com${location.pathname}`} />
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