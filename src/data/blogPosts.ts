import { BlogPost } from '../types/Blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Guide Complet pour le Hajj: Préparation et Conseils Essentiels',
    slug: 'guide-complet-hajj-preparation-conseils',
    description: 'Tout ce que vous devez savoir pour préparer votre pèlerinage du Hajj, des démarches administratives aux rituels spirituels.',
    content: `
      Le Hajj est l'un des cinq piliers de l'Islam et représente un moment spirituel unique dans la vie d'un musulman. 
      Cette guide détaillé vous accompagnera dans chaque étape de votre préparation...
      
      ## Préparation Administrative
      - Obtention du visa
      - Vaccinations requises
      - Documents nécessaires
      
      ## Préparation Spirituelle
      - Les rituels à connaître
      - Les prières importantes
      - L'état d'esprit recommandé
      
      ## Aspects Pratiques
      - Que mettre dans sa valise
      - Hébergement sur place
      - Transport local
    `,
    author: 'Moussab Fatmi',
    date: '2024-03-20',
    readTime: '8 min',
    image: '/blog/hajj-guide.jpg',
    tags: ['hajj', 'islam', 'pèlerinage', 'arabie-saoudite', 'guide'],
    category: 'hajj-umrah'
  },
  {
    id: '2',
    title: '10 Destinations Incontournables au Maroc',
    slug: '10-destinations-incontournables-maroc',
    description: 'Découvrez les plus beaux endroits à visiter au Maroc, des médinas historiques aux déserts majestueux.',
    content: `
      Le Maroc, pays aux mille facettes, offre une diversité de paysages et d'expériences uniques...
      
      ## 1. Marrakech
      La ville rouge, avec ses souks animés et ses palais historiques...
      
      ## 2. Chefchaouen
      La ville bleue nichée dans les montagnes du Rif...
      
      ## 3. Désert de Merzouga
      Une expérience inoubliable dans les dunes de sable...
    `,
    author: 'Moussab Fatmi',
    date: '2024-03-18',
    readTime: '6 min',
    image: '/blog/morocco-destinations.jpg',
    tags: ['maroc', 'voyage', 'culture', 'destinations'],
    category: 'destinations'
  },
  {
    id: '3',
    title: 'Comment Planifier un Voyage Sur Mesure',
    slug: 'planifier-voyage-sur-mesure',
    description: 'Les étapes clés pour organiser un voyage personnalisé qui correspond parfaitement à vos envies.',
    content: `
      Un voyage sur mesure permet de vivre une expérience unique, totalement adaptée à vos préférences...
      
      ## Définir ses Objectifs
      - Type d'expérience recherchée
      - Budget disponible
      - Période idéale
      
      ## Recherche et Planification
      - Choix des destinations
      - Itinéraire optimal
      - Activités à prévoir
      
      ## Réservations
      - Vols et transports
      - Hébergements
      - Activités spéciales
    `,
    author: 'Moussab Fatmi',
    date: '2024-03-15',
    readTime: '5 min',
    image: '/blog/custom-travel.jpg',
    tags: ['conseils', 'planification', 'voyage-personnalisé'],
    category: 'tips'
  }
]; 