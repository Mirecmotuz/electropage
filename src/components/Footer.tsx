import { Zap, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-graphite text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-sk-red p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">ESCO</span>
                <span className="text-sk-orange text-xs font-semibold">Slovensko</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Komplexné elektroinštalačné riešenia pre váš úspech. Člen skupiny ESCO Slovensko.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-sk-red p-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@esco.sk"
                className="bg-white/10 hover:bg-sk-red p-2 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+421321234567"
                className="bg-white/10 hover:bg-sk-red p-2 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigácia</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-sk-red transition-colors text-sm"
                >
                  O nás
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-sk-red transition-colors text-sm"
                >
                  Služby
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('references')}
                  className="text-gray-300 hover:text-sk-red transition-colors text-sm"
                >
                  Referencie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('career')}
                  className="text-gray-300 hover:text-sk-red transition-colors text-sm"
                >
                  Kariéra
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-sk-red transition-colors text-sm"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Služby</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Silnoprúdové inštalácie</li>
              <li>Slaboprúdové systémy</li>
              <li>Fotovoltické elektrárne</li>
              <li>Trafostanice</li>
              <li>Revízie a merania</li>
              <li>Servis 24/7</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-sk-red flex-shrink-0 mt-0.5" />
                <span>Priemyselná 1234/5<br />915 01 Nové Mesto nad Váhom</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-sk-red flex-shrink-0" />
                <a href="tel:+421321234567" className="hover:text-sk-red transition-colors">
                  +421 32 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-sk-red flex-shrink-0" />
                <a href="mailto:info@esco.sk" className="hover:text-sk-red transition-colors">
                  info@esco.sk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              <p className="mb-2">
                © {currentYear} ESCO Slovensko s.r.o. Všetky práva vyhradené.
              </p>
              <p className="text-xs">
                IČO: 12345678 | DIČ: SK2012345678 | IČ DPH: SK2012345678
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-semibold">
                ISO 9001:2015
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-semibold">
                ISO 14001:2015
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-semibold">
                ISO 45001:2018
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-gray-400">
            <a href="#" className="hover:text-sk-red transition-colors mx-2">
              Ochrana osobných údajov
            </a>
            |
            <a href="#" className="hover:text-sk-red transition-colors mx-2">
              Obchodné podmienky
            </a>
            |
            <a href="#" className="hover:text-sk-red transition-colors mx-2">
              Reklamačný poriadok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
