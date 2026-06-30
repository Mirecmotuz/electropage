import { useState } from 'react';
import { Zap, FlameKindling, Network, Home, ShieldCheck, Lightbulb, ChevronDown } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Silnoprúdové a slaboprúdové inštalácie',
    description: 'Kompletné elektroinštalačné práce pre priemyselné haly, administratívne budovy, obchodné centrá aj rezidenčné objekty.',
    details: [
      'Vnútorné a vonkajšie silnoprúdové rozvody, trafostanice a hlavné rozvádzače.',
      'Štruktúrovaná kabeláž a slaboprúdové rozvody pre dátové siete.',
      'Kompletná realizácia na kľúč vrátane revíznych správ.'
    ]
  },
  {
    icon: <FlameKindling className="w-6 h-6" />,
    title: 'EPS a HSP (Požiarna bezpečnosť & Správa)',
    description: 'Špecializujeme sa na systémy ochrany zdravia a majetku pred požiarom v zmysle platnej legislatívy.',
    details: [
      'Elektrická požiarna signalizácia (EPS): Návrh, montáž a prepojenie na pult centrálnej ochrany (PCO).',
      'Hlasová signalizácia požiaru (HSP): Evakuačný rozhlas pre bezpečnú koordináciu osôb.',
      'Správa a servis: Výkon pravidelných legislatívnych kontrol (kvartálne/ročné revízie) a vedenie prevádzkovej dokumentácie pre správcov budov.'
    ]
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Optické siete a telekomunikácie',
    description: 'Budovanie modernej a rýchlej dátovej infraštruktúry.',
    details: [
      'Výstavba a trasovanie optických sietí.',
      'Zváranie optických vlákien a certifikované merania odrazov a útlmov (OTDR).',
      'Pripojenie koncových zariadení a uzlov.'
    ]
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Smart Home & Inteligentná domová automatizácia',
    description: 'Prinášame komfort, bezpečnosť a energetickú efektivitu do moderných budov a domácností.',
    details: [
      'Sme certifikovaným partnerom pre špičkové systémy Loxone a ABB.',
      'Inteligentné riadenie osvetlenia, kúrenia, tienenia, klimatizácie a rekuperácie.',
      'Automatizácia komerčných priestorov aj rodinných domov.'
    ]
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Zabezpečovacie systémy',
    description: 'Návrh a implementácia bezpečnostných riešení na ochranu objektov pred neoprávneným vniknutím.',
    details: [
      'Kamerové systémy (CCTV) s inteligentnou analýzou obrazu a vzdialeným prístupom.',
      'Poplachové systémy narušenia (PSN / alarmy).',
      'Prístupové a dochádzkové systémy (čipové karty, biometria).'
    ]
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Verejné osvetlenie a výškové práce',
    description: 'Kompletná starostlivosť o exteriérové osvetlenie a inštalácie v ťažko dostupných miestach.',
    details: [
      'Výstavba, rekonštrukcia a modernizácia (LED technológie) verejného osvetlenia pre mestá, obce a areály firiem.',
      'Elektroinštalačné a montážne výškové práce s využitím vlastnej techniky.',
      'Rýchly servis a odstraňovanie porúch vo výškach.'
    ]
  }
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Naše Služby
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Poskytujeme komplexné inžinierske a realizačné služby v oblasti elektroinštalácií – od projektovania cez montáž až po revízie a dlhodobú správu. Pôsobíme na Slovensku a v celej EÚ.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {services.map((service, index) => {
            const isOpen = expandedIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 border ${
                  isOpen ? 'border-accent/50 shadow-md' : 'border-gray-200 hover:border-accent/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex-shrink-0 bg-graphite text-white w-11 h-11 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-graphite leading-snug">
                      {service.title}
                    </h3>
                    {!isOpen && (
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{service.description}</p>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm mb-4 pt-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Máte záujem o niektorú z našich služieb? Kontaktujte nás – dopyt je nezáväzný.
          </p>
          <a
            href="#contact"
            className="inline-block bg-graphite hover:bg-accent text-white hover:text-graphite font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 text-lg"
          >
            Nezáväzný dopyt
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
