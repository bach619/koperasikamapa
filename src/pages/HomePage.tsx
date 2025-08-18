import Hero from '../components/Hero';
import WhyChooseKamapa from '../components/WhyChooseKamapa';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';

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

      {/* Stats Section */}
      <div className="md:snap-start min-h-[80vh] py-12 md:py-0">
        <StatsSection />
      </div>

      {/* CTA Section */}
      <div className="md:snap-start min-h-[80vh] py-12 md:py-0">
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;
