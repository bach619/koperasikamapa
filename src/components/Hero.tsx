import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

type HeroProps = {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
};

const Hero = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: HeroProps) => {
  return (
    <section className="bg-primary-600 text-gray-100 relative h-screen">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10 flex flex-col justify-start md:justify-center items-center pt-20">
        <div className="text-center px-4 overflow-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-50">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto">
            <Link
              to={primaryButtonLink}
              className="bg-secondary text-primary-800 px-5 py-3 md:px-9 md:py-4 rounded-lg font-bold hover:bg-secondary-500 transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
            <Link
              to={secondaryButtonLink}
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-5 py-3 md:px-9 md:py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
