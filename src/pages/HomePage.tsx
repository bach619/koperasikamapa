import Hero from '../components/Hero';
import WhyChooseKamapa from '../components/WhyChooseKamapa';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto hide-scrollbar">
      {/* Hero Section */}
      <div className="snap-start h-screen">
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
      <div className="snap-start h-screen">
        <WhyChooseKamapa />
      </div>

      {/* Stats Section */}
      <div className="snap-start h-screen">
        <StatsSection />
      </div>

      {/* CTA Section */}
      <div className="snap-start h-screen">
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;
