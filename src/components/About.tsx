import { Users, Award, TrendingUp, Shield } from 'lucide-react';

const stats = [
  { icon: <Users className="w-8 h-8" />, value: '200+', label: 'Zamestnancov' },
  { icon: <Award className="w-8 h-8" />, value: '25+', label: 'Rokov skúseností' },
  { icon: <TrendingUp className="w-8 h-8" />, value: '1000+', label: 'Projektov' },
  { icon: <Shield className="w-8 h-8" />, value: '100%', label: 'Spokojnosť' }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-6">
              O našej spoločnosti
            </h2>
            <div className="w-24 h-1 bg-sk-red mb-6"></div>
            <p className="text-lg text-gray-600 mb-4">
              Sme súčasťou silnej skupiny ESCO Slovensko, ktorá pôsobí na trhu už viac ako 25 rokov.
              Našou hlavnou činnosťou je realizácia komplexných elektroinštalačných prác v oblasti
              silnoprúdovej a slaboprúdovej elektrotechniky.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Disponujeme profesionálnym tímom skúsených odborníkov a najmodernejšou technológiou.
              Naše služby zahŕňajú návrh, realizáciu, servis a revízie elektrických inštalácií pre
              priemyselné, administratívne a obchodné objekty.
            </p>
            <p className="text-lg text-gray-600">
              Naším cieľom je poskytovať kvalitné a spoľahlivé riešenia, ktoré splnia všetky
              požiadavky našich klientov a presahujú ich očakávania.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Elektro práce"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-sk-red text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Rokov na trhu</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-sk-red to-sk-orange text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-graphite mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
