import { useState } from 'react';
import { Building2, ShoppingBag, Factory, Landmark, ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'Administratíva' | 'Obchod' | 'Priemysel' | 'Kultúra';

interface Reference {
  title: string;
  category: Category;
  description: string;
  images: string[];
  partner?: string;
}

const references: Reference[] = [
  {
    title: 'Zuckermandel',
    category: 'Administratíva',
    description: 'Komplexné inštalácie v modernej mestskej štvrti pod Bratislavským hradom.',
    images: ['/projects/zuckermandel.webp'],
    partner: 'Strabag'
  },
  {
    title: 'Rosum',
    category: 'Administratíva',
    description: 'Technologicky vyspelé biznis centrum v Ružinove.',
    images: ['/projects/rosum.webp'],
    partner: 'Metrostav'
  },
  {
    title: 'BBC 1 & BBC 5',
    category: 'Administratíva',
    description: 'Silnoprúdové a slaboprúdové rozvody pre kľúčové biznis komplexy Bratislava Business Center.',
    images: ['/projects/bbc.jpg'],
    partner: 'CBRE'
  },
  {
    title: 'CBC 1 & CBC 2',
    category: 'Administratíva',
    description: 'Realizácia infraštruktúry a rozvodov pre City Business Center.',
    images: ['/projects/cbc.jpg'],
    partner: 'Wood Company'
  },
  {
    title: 'Nivy',
    category: 'Obchod',
    description: 'Spolupráca na projektoch v modernom pulzujúcom srdci Bratislavy – autobusová stanica a nákupné centrum.',
    images: ['/projects/nivy.jpg'],
    partner: 'Strabag'
  },
  {
    title: 'Aupark Bratislava',
    category: 'Obchod',
    description: 'Elektroinštalačné a montážne práce v jednom z najnavštevovanejších nákupných centier.',
    images: ['/projects/aupark.jpg'],
    partner: 'CBRE'
  },
  {
    title: 'Vivo! Bratislava',
    category: 'Obchod',
    description: 'Modernizácia a rekonštrukcia sietí (bývalý Polus City Center).',
    images: ['/projects/vivo.jpg'],
    partner: 'Invizo'
  },
  {
    title: 'Volkswagen Bratislava',
    category: 'Priemysel',
    description: 'Náročné priemyselné elektroinštalácie a optické siete pre lídra automobilového priemyslu.',
    images: ['/projects/wolswagen.jpg'],
    partner: 'Elimer'
  },
  {
    title: 'Slovenská národná galéria',
    category: 'Kultúra',
    description: 'Hrdá spoluúčasť na technologicky mimoriadne komplexnej rekonštrukcii národnej kultúrnej inštitúcie.',
    images: ['/projects/slovenska_narodna_galeria.jpg']
  }
];

const categoryIcon = (category: Category) => {
  switch (category) {
    case 'Priemysel':    return <Factory className="w-4 h-4" />;
    case 'Administratíva': return <Building2 className="w-4 h-4" />;
    case 'Obchod':       return <ShoppingBag className="w-4 h-4" />;
    case 'Kultúra':      return <Landmark className="w-4 h-4" />;
  }
};

const ReferenceCard = ({ reference }: { reference: Reference }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = reference.images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + reference.images.length) % reference.images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % reference.images.length);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-accent/30">
      <div className="relative h-52 overflow-hidden group">
        <img
          src={reference.images[imgIndex]}
          alt={reference.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {reference.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${i === imgIndex ? 'bg-accent' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-accent">
          {categoryIcon(reference.category)}
          <span className="text-sm font-semibold">{reference.category}</span>
        </div>
        <h3 className="text-xl font-bold text-graphite mb-2">{reference.title}</h3>
        <p className="text-gray-600 text-sm">{reference.description}</p>
      </div>
    </div>
  );
};

const References = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Všetko');

  const categories = ['Všetko', 'Administratíva', 'Obchod', 'Priemysel', 'Kultúra'];

  const filtered = activeFilter === 'Všetko'
    ? references
    : references.filter(r => r.category === activeFilter);

  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Naše Referencie
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Máme za sebou úspešné realizácie elektroinštalačných prác na najvýznamnejších projektoch a ikonických stavbách, ktoré formujú modernú tvár Slovenska. Naša práca na týchto komplexných objektoch dokazuje, že zvládame aj tie najnáročnejšie technologické výzvy.
          </p>
        </div>

        <div className="mb-6 text-center">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6">
            Výber z projektov – v spolupráci s: Strabag · Metrostav · CBRE · Wood Company · Invizo · Elimer
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 text-sm ${
                  activeFilter === cat
                    ? 'bg-graphite text-white shadow-lg ring-2 ring-accent ring-offset-1'
                    : 'bg-light-bg text-graphite hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filtered.map((ref, i) => (
            <ReferenceCard key={i} reference={ref} />
          ))}
        </div>

        {/* CTA záver */}
        <div className="mt-20 bg-graphite rounded-2xl p-10 text-white text-center border-t-4 border-accent">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Plánujete nový projekt alebo hľadáte spoľahlivého partnera?
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
            Naše referencie hovoria za nás. Či už ide o administratívnu budovu, priemyselnú halu alebo infraštruktúrny projekt na Slovensku aj v EÚ, radi pre vás vypracujeme nezáväznú ponuku.
          </p>
          <ul className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 space-y-1 text-left list-disc list-inside">
            <li>Realizácia silnoprúdu a priemyselných rozvodov (od trafostaníc po koncové prvky).</li>
            <li>Montáž EPS a HSP systémov – certifikovaná inštalácia požiarnych signalizácií a evakuačných rozhlasov.</li>
            <li><span className="text-accent font-semibold">NOVINKA:</span> Správa a legislatívny servis EPS/HSP – prebratie kompletnej starostlivosti, revízie a dokumentácia.</li>
            <li>Optické a metalické siete – kompletná dátová infraštruktúra a zváranie optiky.</li>
            <li>Zabezpečovacie systémy (CCTV, alarmy, čipové prístupy) a smart automatizácia (Loxone, ABB).</li>
            <li>Výškové elektroinštalačné práce s využitím vlastnej techniky.</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent/80 text-graphite font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 text-lg"
          >
            Kontaktujte nás
          </a>
        </div>

      </div>
    </section>
  );
};

export default References;
