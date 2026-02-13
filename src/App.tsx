import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.observe-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="observe-scroll">
          <About />
        </div>
        <div className="observe-scroll">
          <Services />
        </div>
        <div className="observe-scroll">
          <References />
        </div>
        <div className="observe-scroll">
          <Career />
        </div>
        <div className="observe-scroll">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
