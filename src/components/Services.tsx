import { useState } from 'react';
import { Zap, Radio, Battery, ChevronDown, ChevronUp } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Silnoprúd',
    description: 'Kompletné riešenia pre silnoprúdové inštalácie',
    details: [
      'Elektrické prípojky NN a VN',
      'Rozvody elektrických inštalácií',
      'Osvetlenie a spotrebiče',
      'Trafostanice a rozvádzače',
      'Revízie a merania',
      'Hromozvody a uzemnenia'
    ]
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: 'Slaboprúd',
    description: 'Moderné slaboprúdové a komunikačné systémy',
    details: [
      'Elektrická požiarna signalizácia (EPS)',
      'Kamerové systémy (CCTV)',
      'Zabezpečovacie systémy (EZS)',
      'Kontrola vstupu (ACS)',
      'Strukturované káblové rozvody',
      'Audio-video systémy'
    ]
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: 'Energetika',
    description: 'Moderné energetické riešenia pre budúcnosť',
    details: [
      'Fotovoltické elektrárne',
      'Dobíjacie stanice pre elektromobily',
      'Energetický manažment',
      'Smart home riešenia',
      'Akumulačné systémy',
      'Energetické audity'
    ]
  }
];

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Naše služby
          </h2>
          <div className="w-24 h-1 bg-sk-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Poskytujeme komplexné riešenia v oblasti elektrotechniky s dôrazom na kvalitu a bezpečnosť
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                expandedCard === index ? 'scale-105 shadow-xl' : ''
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className="p-8">
                <div className="bg-gradient-to-br from-sk-red to-sk-orange text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-graphite mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-sk-red rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-6 text-sk-red font-semibold">
                  {expandedCard === index ? (
                    <>
                      <span>Menej</span>
                      <ChevronUp className="w-5 h-5 ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Viac informácií</span>
                      <ChevronDown className="w-5 h-5 ml-1" />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
