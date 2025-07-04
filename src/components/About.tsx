import React from 'react';
import { Award, Globe, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  const qualities = [
    {
      icon: Globe,
      title: 'Expertise Internationale',
      description: 'Connaissance approfondie de 45+ destinations à travers le monde'
    },
    {
      icon: Heart,
      title: 'Passion du Service',
      description: 'Dévouement total à la satisfaction client et à l\'excellence'
    },
    {
      icon: Target,
      title: 'Approche Personnalisée',
      description: 'Chaque voyage est unique et adapté aux besoins spécifiques'
    },
    {
      icon: Award,
      title: 'Professionnalisme',
      description: 'Certifications reconnues et formation continue'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            À Propos de Moi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {/* French Column */}
          <div className="p-1 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:animate-gradient-xy transition-all duration-300">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Moussab Fatmi
              </h3>
              <div className="space-y-3 text-gray-600 text-sm sm:text-base">
                <p>Je suis Moussab Fatmi, agent de voyages passionné et entrepreneur dans l'âme. Ce qui me motive le plus, c'est de prendre en charge chaque client de A à Z et de résoudre ses problèmes avec soin et efficacité.</p>
                <p>Curieux et avide d'apprentissage, je m'adapte aux besoins de mon agence et de mes clients en maîtrisant les outils et plateformes spécifiques comme Melisur, Arabia, Ryanair ou Amadeus.</p>
                <p>Mon ambition est de devenir le premier fournisseur au Maroc pour les services Hajj, Omra et voyages organisés.</p>
                <p>Je crois en des valeurs simples et fortes : la qualité de service, l'écoute, la transparence et l'envie constante de progresser.</p>
              </div>
            </div>
          </div>

          {/* Arabic Column */}
          <div dir="rtl" className="p-1 rounded-2xl bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 hover:animate-gradient-xy transition-all duration-300">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-right">
                نبذة عني
              </h3>
              <div className="space-y-3 text-gray-600 text-right text-sm sm:text-base">
                <p>أنا مصعب فاطمي، وكيل أسفار شغوف ومحب للتعلم. أكثر ما يسعدني في عملي هو القدرة على مرافقة المسافر من الألف إلى الياء وحل مشاكله بأفضل طريقة ممكنة.</p>
                <p>أمتلك خبرة عملية في فهم كيفية عمل التطبيقات والمواقع، وأعرف كيف أُديرها بما يتناسب مع احتياجات وكالتي أو الشركة التي أعمل بها.</p>
                <p>طموحي أن أكون المزود رقم واحد في المغرب لخدمات الحج والعمرة، وكذلك لبرامج السفر المنظم داخل المغرب وخارجه.</p>
                <p>أؤمن بقيم الجودة، حسن الإصغاء، الشفافية، والتطور المستمر. أنا شخص متعطش لتعلم كل جديد ومعرفة كل ما يمكن أن يطور عملي.</p>
              </div>
            </div>
          </div>

          {/* English Column */}
          <div className="p-1 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 hover:animate-gradient-xy transition-all duration-300">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                About Me
              </h3>
              <div className="space-y-3 text-gray-600 text-sm sm:text-base">
                <p>I'm Moussab Fatmi, a passionate travel agent with a strong desire to learn and grow. What I enjoy most is taking full care of each traveler, solving their problems efficiently, and always finding new ways to improve.</p>
                <p>I have practical experience understanding how apps and websites work, and I know how to manage them based on my needs. I'm skilled at using industry tools like Melisur, Arabia, Ryanair, and Amadeus.</p>
                <p>My ambition is to become the number one provider in Morocco for Hajj and Omra services, as well as organized trips both inside and outside the country.</p>
                <p>I believe in values like quality service, attentive listening, transparency, and continuous learning to better serve my clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;