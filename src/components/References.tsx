import { useState } from 'react';
import { Building2, ShoppingBag, Factory } from 'lucide-react';

interface Reference {
  title: string;
  category: 'Priemysel' | 'Administratíva' | 'Obchod';
  description: string;
  image: string;
  year: string;
}

const references: Reference[] = [
  {
    title: 'Letisko M. R. Štefánika Bratislava',
    category: 'Administratíva',
    description: 'Kompletné elektroinštalácie a slaboprúdové systémy',
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023'
  },
  {
    title: 'Kaufland Galanta',
    category: 'Obchod',
    description: 'Silnoprúdové rozvody, osvetlenie a chladiaca technika',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023'
  },
  {
    title: 'Volkswagen Slovakia',
    category: 'Priemysel',
    description: 'Priemyselné elektroinštalácie a automatizácia',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2022'
  },
  {
    title: 'Business Park Bratislava',
    category: 'Administratíva',
    description: 'Smart building systémy a energetický manažment',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023'
  },
  {
    title: 'TESCO Trenčín',
    category: 'Obchod',
    description: 'Elektroinštalácie, EPS a bezpečnostné systémy',
    image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2022'
  },
  {
    title: 'U.S. Steel Košice',
    category: 'Priemysel',
    description: 'Vysokonapäťové rozvody a trafostanice',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2021'
  },
  {
    title: 'Univerzita Komenského',
    category: 'Administratíva',
    description: 'Rekonštrukcia elektroinštalácií a IT infraštruktúry',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2022'
  },
  {
    title: 'BILLA Nitra',
    category: 'Obchod',
    description: 'Komplexné elektroinštalačné práce',
    image: 'https://images.pexels.com/photos/811109/pexels-photo-811109.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023'
  },
  {
    title: 'Samsung Galanta',
    category: 'Priemysel',
    description: 'Priemyselné elektroinštalácie a fotovoltika',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023'
  }
];

const References = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Všetko');

  const categories = ['Všetko', 'Priemysel', 'Administratíva', 'Obchod'];

  const filteredReferences = activeFilter === 'Všetko'
    ? references
    : references.filter(ref => ref.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Priemysel':
        return <Factory className="w-5 h-5" />;
      case 'Administratíva':
        return <Building2 className="w-5 h-5" />;
      case 'Obchod':
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Naše referencie
          </h2>
          <div className="w-24 h-1 bg-sk-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Realizovali sme stovky projektov pre popredné slovenské aj zahraničné spoločnosti
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-sk-red text-white shadow-lg'
                  : 'bg-gray-100 text-graphite hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReferences.map((reference, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={reference.image}
                  alt={reference.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-sk-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {reference.year}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="text-sk-orange">
                    {getCategoryIcon(reference.category)}
                  </div>
                  <span className="text-sm font-semibold text-sk-orange">
                    {reference.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-graphite mb-2">
                  {reference.title}
                </h3>
                <p className="text-gray-600">
                  {reference.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
