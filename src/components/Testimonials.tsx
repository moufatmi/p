import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      location: 'Lyon, France',
      rating: 5,
      text: 'Sophie a organisé notre voyage de noces en Thaïlande de manière exceptionnelle. Chaque détail était parfait, du vol aux hébergements en passant par les excursions. Une expérience magique que nous n\'oublierons jamais !',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      trip: 'Lune de miel en Thaïlande'
    },
    {
      id: 2,
      name: 'Jean-Pierre Martin',
      location: 'Paris, France',
      rating: 5,
      text: 'Grâce à Sophie, nous avons découvert le Japon d\'une manière authentique. Ses recommandations de guides locaux et d\'expériences culturelles ont rendu notre voyage absolument mémorable. Un professionnalisme remarquable !',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      trip: 'Circuit culturel au Japon'
    },
    {
      id: 3,
      name: 'Isabelle Rousseau',
      location: 'Marseille, France',
      rating: 5,
      text: 'Un voyage aux Maldives organisé à la perfection ! Sophie a su trouver le resort idéal selon nos critères et notre budget. Son attention aux détails et sa disponibilité ont fait toute la différence.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      trip: 'Séjour de luxe aux Maldives'
    },
    {
      id: 4,
      name: 'Thomas Leroy',
      location: 'Toulouse, France',
      rating: 5,
      text: 'Sophie a transformé notre rêve de safari en Afrique du Sud en réalité. Son expertise et ses conseils nous ont permis de vivre une aventure inoubliable en toute sécurité. Merci pour cette expérience exceptionnelle !',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      trip: 'Safari en Afrique du Sud'
    },
    {
      id: 5,
      name: 'Catherine Moreau',
      location: 'Bordeaux, France',
      rating: 5,
      text: 'Un voyage en Islande absolument magique ! Sophie a su nous créer un itinéraire parfait pour voir les aurores boréales et découvrir les merveilles naturelles du pays. Une organisation impeccable !',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
      trip: 'Aventure nature en Islande'
    },
    {
      id: 6,
      name: 'Laurent Petit',
      location: 'Nice, France',
      rating: 5,
      text: 'Sophie a organisé notre voyage de groupe en Grèce avec une efficacité remarquable. Tous les participants ont été enchantés par la qualité des prestations et l\'authenticité des expériences proposées.',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      trip: 'Voyage de groupe en Grèce'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ce Que Disent Mes Clients
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 2400 voyageurs ont fait confiance à mon expertise pour créer leurs souvenirs inoubliables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-sky-500 opacity-50 mb-2 sm:mb-4" />
              
              <div className="flex items-center gap-1 mb-2 sm:mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-4 sm:mb-6 italic text-xs sm:text-base">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-2 sm:gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-xs sm:text-sm text-sky-600 font-medium">{testimonial.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-r from-sky-500 to-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center text-white">
            <div>
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">2,400+</div>
              <div className="text-base sm:text-lg opacity-90">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">4.9/5</div>
              <div className="text-base sm:text-lg opacity-90">Note Moyenne</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">98%</div>
              <div className="text-base sm:text-lg opacity-90">Recommandations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;