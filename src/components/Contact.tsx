import emailjs from 'emailjs-com';
import React, { useState, useMemo } from 'react';
import { Phone, Mail, MapPin, Linkedin, Download, Send, CheckCircle } from 'lucide-react';
import cvFile from '../assets/CV.pdf';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_j80dlzu',      // Replace with your actual Service ID from EmailJS
      'template_bkt4hai',     // Replace with your actual Template ID from EmailJS
      e.target as HTMLFormElement,
      'YycjRTrOxh-1OAczE' // Replace with your actual User ID or Public Key from EmailJS
    )
    .then((result) => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            position: '',
            message: ''
          });
        }, 3000);
    }, (error) => {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    });
  };

  const filledFields = useMemo(() => {
    let count = 0;
    if (formData.name) count++;
    if (formData.email) count++;
    if (formData.message) count++;
    return count;
  }, [formData]);

  const isFormComplete = filledFields === 3;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: '+212 (0) 6 98 57 02 82',
      subtext: 'Disponible 9h-18h'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'moussabfatmi@gmail.com',
      subtext: 'Réponse sous 24h'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      details: 'Oujda, Morocco',
      subtext: 'Mobilité nationale'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: 'https://www.linkedin.com/in/moussabfatmi/',
      subtext: 'Profil professionnel'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form + WhatsApp CTA */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-900">
                Envoyez-moi un message
              </h3>
              <div className="flex flex-col items-start">
                <a
                  href="https://wa.me/212698570282?text=Bonjour%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio%20web%20pour%20plus%20d'informations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition-colors duration-200 text-base mb-1"
                  aria-label="Contactez-moi sur WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.09L4 29l7.18-2.31C13.08 27.14 14.51 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.34 0-2.65-.26-3.87-.77l-.28-.12-4.26 1.37 1.39-4.14-.18-.29C6.86 18.13 6 16.61 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.24 1.23.38 1.65.49.69.18 1.32.15 1.82.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                  WhatsApp
                </a>
                <span className="text-green-700 text-sm font-medium mt-1">📞 Contactez-moi sur WhatsApp</span>
              </div>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Envoyé !
                </h4>
                <p className="text-gray-600">
                  Merci pour votre message. Je vous recontacterai rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poste
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Parlez-moi de votre entreprise et du poste qui vous intéresse..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="pt-4">
                <button
                  type="submit"
                    disabled={!isFormComplete}
                    className={`w-full relative flex items-center justify-center h-14 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-500 ease-in-out transform-gpu
                      ${isFormComplete ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}
                    `}
                  >
                    <span 
                      className={`absolute left-0 top-0 h-full w-1/3 bg-blue-600 rounded-l-lg transition-all duration-300 ease-out 
                        ${filledFields >= 1 ? 'opacity-100 transform-none' : 'opacity-50 -translate-x-4 -rotate-12'}`}
                    />
                    <span 
                      className={`absolute left-1/3 top-0 h-full w-1/3 bg-blue-600 transition-all duration-300 ease-out 
                        ${filledFields >= 2 ? 'opacity-100 transform-none' : 'opacity-50 translate-y-4 scale-75'}`}
                    />
                    <span 
                      className={`absolute right-0 top-0 h-full w-1/3 bg-blue-600 rounded-r-lg transition-all duration-300 ease-out 
                        ${filledFields >= 3 ? 'opacity-100 transform-none' : 'opacity-50 translate-x-4 rotate-12'}`}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Envoyer le message
                    </span>
                </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 justify-center">
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
              Mes Coordonnées
            </h3>
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                <info.icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <div>
                  <div className="font-semibold">{info.title}</div>
                  {info.title === 'LinkedIn' ? (
                    <a href={info.details} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{info.details}</a>
                  ) : (
                    <span>{info.details}</span>
                  )}
                  <div className="text-xs text-gray-400">{info.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;