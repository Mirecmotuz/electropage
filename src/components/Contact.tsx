import { MapPin, Phone, Mail, ExternalLink, User, Building2 } from 'lucide-react';

const company = {
  name: 'Master Electrician s.r.o.',
  address: 'Piaristická 276/46, 911 01 Trenčín',
  country: 'Slovenská republika',
  ico: '56841370',
  dic: '2122469052',
  icDph: '2122469052',
  director: 'Pelech Samuel',
  email: 'Masterelectrician.sro@gmail.com',
  phone: '+421 949 260 957',
  phoneHref: '+421949260957',
  mapUrl: 'https://maps.google.com/?q=Piaristická+276/46,+91101+Trenčín'
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Kontaktujte nás
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Radi vám pomôžeme s vašimi projektmi. Neváhajte nás kontaktovať telefonicky alebo e-mailom.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-transparent hover:border-accent/30">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
            <div className="bg-graphite text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-graphite">{company.name}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600">{company.address}</p>
                  <p className="text-gray-500 text-sm">{company.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${company.phoneHref}`} className="text-gray-600 hover:text-accent transition-colors">
                  {company.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-gray-600 hover:text-accent transition-colors break-all">
                  {company.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-gray-600">Konateľ: <span className="font-semibold text-graphite">{company.director}</span></p>
              </div>

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors pt-2"
              >
                <span>Otvoriť mapu</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-light-bg rounded-xl p-6 space-y-2 text-sm">
              <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs mb-3">Firemné údaje</p>
              <p className="text-gray-600"><span className="font-semibold text-graphite">IČO:</span> {company.ico}</p>
              <p className="text-gray-600"><span className="font-semibold text-graphite">DIČ:</span> {company.dic}</p>
              <p className="text-gray-600"><span className="font-semibold text-graphite">IČ DPH:</span> {company.icDph}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
