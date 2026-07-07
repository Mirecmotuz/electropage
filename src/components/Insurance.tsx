import { useState } from 'react';
import { ShieldAlert, Camera, FileCheck, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

const steps = [
  {
    icon: <ShieldAlert className="w-7 h-7" />,
    phase: 'Fáza 1',
    title: 'Zabezpečenie objektu',
    description: 'Dorazíme na miesto, zaistíme bezpečnosť priestoru a kompletne odpojíme poškodenú elektroinštaláciu, aby nedošlo k ďalším škodám alebo úrazu.'
  },
  {
    icon: <Camera className="w-7 h-7" />,
    phase: 'Fáza 2',
    title: 'Dokumentácia škôd',
    description: 'Všetko dôkladne nafotíme, spíšeme a pripravíme presný súpis poškodených vecí a technológií – podklad pre poisťovňu bez zbytočných strát.'
  },
  {
    icon: <FileCheck className="w-7 h-7" />,
    phase: 'Fáza 3',
    title: 'Vybavenie poistnej udalosti',
    description: 'Celú komunikáciu s likvidátorom a poisťovňou prevezmeme za vás a dotiahneme proces až k schváleniu plnenia. Žiadna byrokracia na vašej strane.'
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    phase: 'Fáza 4',
    title: 'Rekonštrukcia a nová inštalácia',
    description: 'Po schválení škody poisťovňou zabezpečíme novú, bezpečnú a profesionálnu elektroinštaláciu, aby ste mohli priestor opäť plnohodnotne užívať.'
  }
];

const pricingBlocks = [
  {
    phase: 'Fáza 1 – Výjazd a zabezpečenie',
    rows: [
      { label: 'Štandardný výjazd (pracovné dni)', value: '50 € + 1,50 €/km mimo BA' },
      { label: 'Havarijný výjazd (noc / víkend / sviatok)', value: '150 € – 250 €' }
    ],
    note: 'Poplatok splatný na mieste alebo bezprostredne po zásahu.'
  },
  {
    phase: 'Fázy 2–3 – Dokumentácia a likvidácia',
    rows: [
      { label: 'Provízny model', value: '10 – 15 % z vyplatenej sumy' },
      { label: 'Paušálny poplatok', value: '300 € – 600 €' }
    ],
    note: 'Provízny model: platíte až po obdržaní plnenia od poisťovne.'
  },
  {
    phase: 'Fáza 4 – Rekonštrukcia',
    rows: [
      { label: 'Cena', value: 'Podľa individuálneho rozpočtu' }
    ],
    note: 'Rozpočet (materiál + práca) vypracujeme pred realizáciou a predložíme poisťovni na schválenie.'
  }
];

const Insurance = () => {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <section id="insurance" className="py-20 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block border border-accent text-accent text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Požiar · Vytopenie
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Poistná udalosť? Prevezmeme to za vás.
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stala sa vám v byte alebo nebytovom priestore nehoda? Vyhoreli ste alebo vás vytopilo?
            Neostávajte v tom sami – prevezmeme na seba celý proces od zabezpečenia miesta až po kompletnú opravu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/10 border border-accent/50 text-accent w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  {step.icon}
                </div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest">{step.phase}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 text-accent/40 text-2xl font-bold">›</div>
              )}
            </div>
          ))}
        </div>

        {/* Rozbaľovací cenník */}
        <div className="max-w-3xl mx-auto mb-10">
          <button
            onClick={() => setShowPricing(!showPricing)}
            className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-accent text-sm font-semibold transition-colors duration-200 py-2"
          >
            {showPricing ? (
              <>Skryť orientačný cenník <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Zobraziť orientačný cenník <ChevronDown className="w-4 h-4" /></>
            )}
          </button>

          <div className={`overflow-hidden transition-all duration-500 ${showPricing ? 'max-h-[900px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
              {pricingBlocks.map((block, i) => (
                <div key={i}>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{block.phase}</p>
                  <div className="space-y-3">
                    {block.rows.map((row, j) => (
                      <div key={j} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-4">
                        <span className="text-gray-400 text-sm">{row.label}</span>
                        <span className="text-white font-semibold text-sm sm:text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  {block.note && (
                    <p className="text-gray-500 text-xs mt-2 italic">{block.note}</p>
                  )}
                  {i < pricingBlocks.length - 1 && (
                    <div className="border-t border-white/10 mt-4"></div>
                  )}
                </div>
              ))}
              <p className="text-gray-500 text-xs text-center pt-2 border-t border-white/10">
                * Ceny sú orientačné. Presná ponuka po telefonickej konzultácii alebo obhliadke.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent/80 text-graphite font-bold py-4 px-12 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 text-lg"
          >
            Kontaktujte nás – pomôžeme ihneď
          </a>
        </div>

      </div>
    </section>
  );
};

export default Insurance;
