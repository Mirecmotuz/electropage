import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const workImages = Array.from({ length: 13 }, (_, i) => ({
  src: `/work/work_${i + 1}.jpeg`,
  alt: `Realizácia ${i + 1}`
}));

const WorkGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.75;
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const lightboxPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + workImages.length) % workImages.length);
  };

  const lightboxNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % workImages.length);
  };

  return (
    <>
      <section id="work" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
              Z našej práce
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ukážka realizácií a montážnych prác – od rozvádzačov a kabeláže až po kompletné inštalácie.
            </p>
          </div>

          <div className="relative group/carousel">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-graphite/80 hover:bg-graphite text-white p-2 rounded-full shadow-lg transition-all -ml-2 md:ml-0 opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
              aria-label="Posunúť doľava"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2 px-1"
            >
              {workImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative flex-shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[32%] h-56 md:h-64 overflow-hidden rounded-xl bg-light-bg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/25 transition-all duration-300" />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-graphite/80 hover:bg-graphite text-white p-2 rounded-full shadow-lg transition-all -mr-2 md:mr-0 opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
              aria-label="Posunúť doprava"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <p className="text-center text-gray-400 text-sm mt-4">
            Posuňte alebo kliknite na fotku pre detail
          </p>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-graphite/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Zavrieť"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Predchádzajúca fotka"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={workImages[lightboxIndex].src}
            alt={workImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Ďalšia fotka"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <p className="absolute bottom-4 text-white/50 text-sm">
            {lightboxIndex + 1} / {workImages.length}
          </p>
        </div>
      )}
    </>
  );
};

export default WorkGallery;
