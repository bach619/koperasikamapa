import Hero from '../components/Hero';
import WhyChooseKamapa from '../components/WhyChooseKamapa';
import ServicesHighlight from '../components/ServicesHighlight';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import SocialMediaSection from '../components/SocialMediaSection';

const HomePage = () => {
  return (
    <div className="md:snap-y md:snap-mandatory overflow-y-auto hide-scrollbar">
      {/* Hero Section */}
      <div className="md:snap-start min-h-[80vh] py-12 md:py-0">
        <Hero
          title=""
          subtitle="Kami berkomitmen membangun ekonomi kerakyatan masyarakat Perhutanan Sosial untuk kesejahteraan bersama"
          primaryButtonText="Bergabung Sekarang"
          primaryButtonLink="/keanggotaan"
          secondaryButtonText="Pelajari Lebih Lanjut"
          secondaryButtonLink="/tentang-kami"
        />
      </div>

      {/* Why Choose Kamapa Section */}
      <div className="md:snap-start min-h-[80vh] py-12 md:py-0">
        <WhyChooseKamapa />
      </div>

      {/* Services Highlight Section */}
      <div className="md:snap-start min-h-[80vh] py-12 md:py-0 mt-12 md:mt-20">
        <ServicesHighlight />
      </div>

      {/* Stats Section */}
      <div className="md:snap-start min-h-[70vh] py-12 md:py-0">
        <StatsSection />
      </div>

      {/* CTA & Social Media Section */}
      <div className="md:snap-start flex flex-col justify-between min-h-[60vh] py-8 md:py-12">
        <CTASection />
        <SocialMediaSection />
      </div>
    </div>
  );
};

export default HomePage;
