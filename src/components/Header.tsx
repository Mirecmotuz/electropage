import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Master Electrician – domov"
          >
            <Logo variant="header" />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-graphite hover:text-accent transition-colors font-medium"
            >
              O nás
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-graphite hover:text-accent transition-colors font-medium"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className="text-graphite hover:text-accent transition-colors font-medium"
            >
              Referencie
            </button>
            <button
              onClick={() => scrollToSection('career')}
              className="text-graphite hover:text-accent transition-colors font-medium"
            >
              Kariéra
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-graphite text-white px-6 py-3 rounded-lg hover:bg-accent hover:text-graphite transition-all font-semibold shadow-md hover:shadow-xl transform hover:scale-105"
          >
            Kontakt
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-graphite p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-graphite hover:bg-light-bg hover:text-accent rounded-lg transition-colors font-medium"
            >
              O nás
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-graphite hover:bg-light-bg hover:text-accent rounded-lg transition-colors font-medium"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className="block w-full text-left px-4 py-3 text-graphite hover:bg-light-bg hover:text-accent rounded-lg transition-colors font-medium"
            >
              Referencie
            </button>
            <button
              onClick={() => scrollToSection('career')}
              className="block w-full text-left px-4 py-3 text-graphite hover:bg-light-bg hover:text-accent rounded-lg transition-colors font-medium"
            >
              Kariéra
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-graphite text-white px-4 py-3 rounded-lg hover:bg-accent hover:text-graphite transition-colors font-semibold mt-2"
            >
              Kontakt
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
