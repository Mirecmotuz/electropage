import { useState } from 'react';
import { MapPin, Phone, Mail, Send, ExternalLink } from 'lucide-react';

interface Branch {
  city: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

const branches: Branch[] = [
  {
    city: 'Nové Mesto nad Váhom',
    address: 'Priemyselná 1234/5, 915 01',
    phone: '+421 32 123 4567',
    email: 'nm@esco.sk',
    mapUrl: 'https://maps.google.com/?q=Nové+Mesto+nad+Váhom'
  },
  {
    city: 'Bratislava',
    address: 'Ružinovská 10, 821 01',
    phone: '+421 2 123 4567',
    email: 'ba@esco.sk',
    mapUrl: 'https://maps.google.com/?q=Bratislava'
  },
  {
    city: 'Košice',
    address: 'Južná trieda 45, 040 01',
    phone: '+421 55 123 4567',
    email: 'ke@esco.sk',
    mapUrl: 'https://maps.google.com/?q=Košice'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Meno je povinné';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email je povinný';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Neplatný email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Predmet je povinný';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Správa je povinná';
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Kontaktujte nás
          </h2>
          <div className="w-24 h-1 bg-sk-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Radi vám pomôžeme s vašimi projektmi. Neváhajte nás kontaktovať
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-graphite mb-4">{branch.city}</h3>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-sk-red flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{branch.address}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-sk-red flex-shrink-0" />
                  <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-sk-red transition-colors">
                    {branch.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-sk-red flex-shrink-0" />
                  <a href={`mailto:${branch.email}`} className="text-gray-600 hover:text-sk-red transition-colors">
                    {branch.email}
                  </a>
                </div>
              </div>

              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center space-x-2 text-sk-red font-semibold hover:text-sk-red/80 transition-colors"
              >
                <span>Otvoriť mapu</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-graphite mb-8 text-center">
            Napíšte nám
          </h3>

          {submitted && (
            <div className="mb-6 bg-lime/20 border border-lime text-graphite px-4 py-3 rounded-lg">
              Ďakujeme za vašu správu! Čoskoro vás budeme kontaktovať.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-graphite font-semibold mb-2">
                  Meno *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-sk-red' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-sk-red`}
                  placeholder="Vaše meno"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-sk-red">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-graphite font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-sk-red' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-sk-red`}
                  placeholder="vas@email.sk"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-sk-red">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-graphite font-semibold mb-2">
                Predmet *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.subject ? 'border-sk-red' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-sk-red`}
                placeholder="Predmet správy"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-sk-red">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-graphite font-semibold mb-2">
                Správa *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-sk-red' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-sk-red`}
                placeholder="Vaša správa..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-sk-red">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-sk-red text-white px-8 py-4 rounded-lg hover:bg-sk-red/90 transition-all font-semibold shadow-md hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Odoslať správu</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
