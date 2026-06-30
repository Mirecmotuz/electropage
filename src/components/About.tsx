import { Zap, FlameKindling, Network, Home, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Silnoprúd a slaboprúd',
    desc: 'priemyselné, komerčné a rezidenčné elektroinštalácie.'
  },
  {
    icon: <FlameKindling className="w-6 h-6" />,
    title: 'EPS + HSP',
    desc: 'kompletná realizácia a legislatívna správa systémov požiarnej signalizácie a evakuačného rozhlasu v budovách.'
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Optické siete a zabezpečovacie systémy',
    desc: 'dátová infraštruktúra a ochrana majetku.'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Smart home (Loxone, ABB)',
    desc: 'inteligentná domová automatizácia na kľúč.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Verejné osvetlenie a výškové práce',
    desc: 'montáž a servis s využitím vlastnej techniky.'
  }
];

const partners = [
  { name: 'Strabag', slug: 'strabag', bgColor: '#ffffff' },
  { name: 'Metrostav', slug: 'metrostav', bgColor: '#FC0204' },
  { name: 'CBRE', slug: 'cbre', bgColor: '#ffffff' },
  { name: 'Wood Company', slug: 'wood_and_company', bgColor: '#0F3736' },
  { name: 'Invizo', slug: 'invizo', bgColor: '#ffffff' },
  { name: 'Elimer', slug: 'elimer', bgColor: '#ffffff' }
];

const PartnerLogo = ({ name, slug, bgColor }: { name: string; slug: string; bgColor: string }) => {
  const extensions = ['png', 'jpeg', 'jpg', 'svg', 'webp'];
  const [extIndex, setExtIndex] = useState(0);
  const failed = extIndex >= extensions.length;
  const logoSrc = `/partner_logos/${slug}_logo.${extensions[extIndex]}`;
  const isWhiteBg = bgColor === '#ffffff';

  return (
    <div
      className={`relative w-full aspect-[5/3] min-h-[88px] rounded-xl hover:shadow-md hover:ring-2 hover:ring-accent/40 transition-all duration-300 overflow-hidden ${
        isWhiteBg ? 'border border-gray-200' : ''
      }`}
      style={{ backgroundColor: bgColor }}
    >
      {!failed ? (
        <img
          src={logoSrc}
          alt={name}
          className="absolute inset-0 w-full h-full object-contain object-center"
          onError={() => setExtIndex((i) => i + 1)}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-graphite text-center leading-tight px-2 bg-light-bg">
          {name}
        </span>
      )}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-6">
              O nás
            </h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Sme stabilná elektroinštalačná spoločnosť s pôsobnosťou na Slovensku a v celej Európskej únii.
              Špecializujeme sa na komplexné realizácie v silnoprúde, slaboprúde a optických sieťach.
              Našou prioritou sú špičkové technológie, bezpečnosť a dodržiavanie prísnych legislatívnych štandardov.
            </p>

            <h3 className="text-xl font-bold text-graphite mb-4">Čo realizujeme a spravujeme:</h3>
            <ul className="space-y-4">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-graphite text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-md mt-0.5">
                    {s.icon}
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-graphite">{s.title}</span>
                    {' – '}
                    {s.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src="/web_pictures/about-electro.jpg"
              alt="Elektro práce"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-graphite text-white p-6 rounded-xl shadow-xl border-l-4 border-accent">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-gray-300">Spokojnosť</p>
            </div>
          </div>
        </div>

        {/* Logobar – partneri */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-graphite mb-2">Významní partneri a spolupráce</h3>
          <div className="w-16 h-1 bg-accent mb-4"></div>
          <p className="text-lg text-gray-600 mb-10">
            Sme spoľahlivým partnerom pre najväčších lídrov na trhu v oblasti stavebníctva a správy nehnuteľností.
            Spolupracujeme na projektoch pre spoločnosti:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner) => (
              <PartnerLogo key={partner.slug} name={partner.name} slug={partner.slug} bgColor={partner.bgColor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
