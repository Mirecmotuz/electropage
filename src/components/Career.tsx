const Career = () => {
  return (
    <section id="career" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Kariéra
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center border-t-4 border-accent">
          <p className="text-xl text-gray-700 mb-3 font-semibold">
            Rozrastáme sa a hľadáme šikovných ľudí do nášho tímu.
          </p>
          <p className="text-gray-500 text-lg mb-10">
            Ak máte skúsenosti s elektroinštaláciami alebo príbuznými obormi, ozvite sa nám – radi sa porozprávame.
          </p>
          <a
            href="#contact"
            className="inline-block bg-graphite hover:bg-accent text-white hover:text-graphite font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 text-lg"
          >
            Napíšte nám
          </a>
        </div>
      </div>
    </section>
  );
};

export default Career;
