import React from 'react';
import { MapPin, Camera, Star } from 'lucide-react';

const Destinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Grèce',
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      price: 'À partir de 1,200€',
      description: 'Couchers de soleil magiques et architecture cycladique',
      tags: ['Romantique', 'Plage', 'Culture']
    },
    {
      id: 2,
      name: 'Kyoto, Japon',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      price: 'À partir de 2,500€',
      description: 'Temples anciens et jardins zen traditionnels',
      tags: ['Culture', 'Histoire', 'Spiritualité']
    },
    {
      id: 3,
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      price: 'À partir de 3,000€',
      description: 'Villas sur pilotis et eaux cristallines',
      tags: ['Luxe', 'Plage', 'Romantique']
    },
    {
      id: 4,
      name: 'Marrakech, Maroc',
      image: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      price: 'À partir de 800€',
      description: 'Souks colorés et architecture mauresque',
      tags: ['Culture', 'Aventure', 'Gastronomie']
    },
    {
      id: 5,
      name: 'Islande',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      price: 'À partir de 1,800€',
      description: 'Aurores boréales et paysages volcaniques',
      tags: ['Nature', 'Aventure', 'Unique']
    },
    {
      id: 6,
      name: 'Bali, Indonésie',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      price: 'À partir de 1,500€',
      description: 'Rizières en terrasses et temples hindous',
      tags: ['Culture', 'Plage', 'Spiritualité']
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Destinations d'Exception
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes destinations coup de cœur, soigneusement sélectionnées pour vous offrir 
            des expériences authentiques et mémorables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                  <span className="text-xs sm:text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {destination.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-sky-500/90 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                  <h3 className="text-base sm:text-xl font-semibold text-gray-900">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-2 sm:mb-4 text-xs sm:text-base">{destination.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <span className="text-base sm:text-lg font-bold text-sky-500">{destination.price}</span>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm transition-colors duration-200 flex items-center gap-2">
                    <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200">
            Voir Toutes les Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;