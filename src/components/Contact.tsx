import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Download, Send, CheckCircle } from 'lucide-react';

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
      details: '+212 6 98 57 02 82',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envoyez-moi un message
            </h3>
            
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-700">{info.details}</p>
                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
              <Download className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Télécharger mon CV</h3>
              <p className="mb-6 opacity-90">
                Version PDF complète avec toutes mes expériences et références
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 mx-auto">
                <Download className="h-5 w-5" />
                Télécharger CV (PDF)
              </button>
            </div>

            {/* Availability */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-800">Disponibilité</h4>
              </div>
              <p className="text-green-700">
                Actuellement à la recherche de nouvelles opportunités. 
                Disponible pour un entretien sous 48h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;