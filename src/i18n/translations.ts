export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      solutions: 'Solutions',
      team: 'Team',
      contact: 'Contact',
      tryMiHealth: 'Try Mi-Health'
    },
    // Common
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      readMore: 'Read More',
      viewAll: 'View All',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    },
    // Home page
    home: {
      hero: {
        title: 'Digitally Transforming Healthcare in Africa',
        subtitle: 'Empowering patients and providers with secure, innovative digital health solutions. Take control of your health journey with Mi-Health, your personal health passport.',
        cta1: 'Try Mi-Health',
        cta2: 'Learn More'
      },
      features: {
        title: 'Why Choose NHA-HEALTHTECH?',
        subtitle: 'We\'re building the future of healthcare in Africa with cutting-edge technology and a deep understanding of local needs.'
      }
    },
    // Footer
    footer: {
      tagline: 'Digitally transforming healthcare',
      description: 'Empowering Africans with innovative, secure, and user-friendly digital health solutions that bridge the gap between patients and providers.',
      company: 'Company',
      solutions: 'Solutions',
      resources: 'Resources',
      copyright: 'All rights reserved.'
    }
  },
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      solutions: 'Solutions',
      team: 'Équipe',
      contact: 'Contact',
      tryMiHealth: 'Essayer Mi-Health'
    },
    // Common
    common: {
      learnMore: 'En Savoir Plus',
      getStarted: 'Commencer',
      contactUs: 'Nous Contacter',
      readMore: 'Lire Plus',
      viewAll: 'Voir Tout',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès'
    },
    // Home page
    home: {
      hero: {
        title: 'Transformation Numérique des Soins de Santé en Afrique',
        subtitle: 'Autonomiser les patients et les prestataires avec des solutions de santé numériques sécurisées et innovantes. Prenez le contrôle de votre parcours de santé avec Mi-Health, votre passeport santé personnel.',
        cta1: 'Essayer Mi-Health',
        cta2: 'En Savoir Plus'
      },
      features: {
        title: 'Pourquoi Choisir NHA-HEALTHTECH?',
        subtitle: 'Nous construisons l\'avenir des soins de santé en Afrique avec une technologie de pointe et une compréhension approfondie des besoins locaux.'
      }
    },
    // Footer
    footer: {
      tagline: 'Transformation numérique des soins de santé',
      description: 'Autonomiser les Africains avec des solutions de santé numériques innovantes, sécurisées et conviviales qui comblent le fossé entre les patients et les prestataires.',
      company: 'Entreprise',
      solutions: 'Solutions',
      resources: 'Ressources',
      copyright: 'Tous droits réservés.'
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;