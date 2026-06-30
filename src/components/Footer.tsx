import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

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
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Komplexné elektroinštalačné riešenia pre váš úspech. Master Electrician – váš partner pre silnoprúd, slaboprúd a smart technológie.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/masterelectrician.s.r.o?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Master Electrician"
                className="bg-white/10 hover:bg-accent hover:text-graphite p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:masterelectrician.sro@gmail.com"
                className="bg-white/10 hover:bg-accent hover:text-graphite p-2 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+421949260957"
                className="bg-white/10 hover:bg-accent hover:text-graphite p-2 rounded-lg transition-colors"
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
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  O nás
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  Služby
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('references')}
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  Referencie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('career')}
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  Kariéra
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
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
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Piaristická 276/46<br />911 01 Trenčín</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+421949260957" className="hover:text-accent transition-colors">
                  +421 949 260 957
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:masterelectrician.sro@gmail.com" className="hover:text-accent transition-colors break-all">
                  masterelectrician.sro@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-sm text-gray-300 text-center md:text-left">
            <p className="mb-2">
              © {currentYear} Master Electrician s.r.o. Všetky práva vyhradené.
            </p>
            <p className="text-xs">
              IČO: 56841370 | DIČ: 2122469052 | IČ DPH: 2122469052
            </p>
          </div>

          <p className="text-xs mt-3 text-gray-400 text-center md:text-left">
            Reklamačný poriadok poskytneme na vyžiadanie e-mailom.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
