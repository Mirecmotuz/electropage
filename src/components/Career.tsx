import { Briefcase, GraduationCap, Heart, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Kariérny rast',
    description: 'Možnosť profesionálneho rastu a vzdelávania'
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Vzdelávanie',
    description: 'Pravidelné školenia a certifikácie'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Benefity',
    description: 'Nadštandardné ohodnotenie a benefity'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Stabilita',
    description: 'Istota práce v silnej skupine ESCO'
  }
];

const positions = [
  {
    title: 'Elektroinštalatér',
    location: 'Bratislava, Košice',
    type: 'Plný úväzok'
  },
  {
    title: 'Projektový manažér',
    location: 'Bratislava',
    type: 'Plný úväzok'
  },
  {
    title: 'Technik slaboprúdu',
    location: 'Nové Mesto nad Váhom',
    type: 'Plný úväzok'
  }
];

const Career = () => {
  return (
    <section id="career" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Kariéra
          </h2>
          <div className="w-24 h-1 bg-sk-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hľadáme talentovaných ľudí, ktorí chcú rásť spolu s nami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-light-bg rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-sk-red to-sk-orange text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-graphite mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-graphite mb-8 text-center">
            Voľné pozície
          </h3>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-light-bg rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-graphite mb-2">
                    {position.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-sk-red rounded-full mr-2"></span>
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-lime rounded-full mr-2"></span>
                      {position.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-sk-red text-white px-6 py-3 rounded-lg hover:bg-sk-red/90 transition-all font-semibold shadow-md hover:shadow-xl whitespace-nowrap"
                >
                  Poslať životopis
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-sk-red to-sk-orange text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Nenašli ste vhodnú pozíciu?
            </h3>
            <p className="mb-6">
              Pošlite nám svoj životopis a my vás budeme kontaktovať pri najbližšej vhodnej príležitosti.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-sk-red px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Kontaktovať nás
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
