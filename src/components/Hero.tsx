import { Link } from 'react-router-dom';

import { ArrowRight, Zap, Stars, Sparkles, Rocket, Trees } from 'lucide-react';
import { useState, useEffect } from 'react';

// Dynamic geometric shapes
const FloatingShapes = () => {
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    type: ['circle', 'square', 'triangle'][i % 3],
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute animate-float ${
            shape.type === 'circle' ? 'rounded-full' : 
            shape.type === 'square' ? 'rounded-lg' : ''
          } bg-gradient-to-br from-amber-400/20 to-orange-400/20 backdrop-blur-sm border border-amber-300/30`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            transform: `rotate(${shape.rotation}deg)`,
            animation: `float ${shape.duration}s ease-in-out infinite alternate, rotate ${shape.duration * 2}s linear infinite`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(360deg); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Animated wave background
const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1200 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.4)" />
          <stop offset="50%" stopColor="rgba(251, 146, 60, 0.4)" />
          <stop offset="100%" stopColor="rgba(252, 211, 77, 0.4)" />
        </linearGradient>
      </defs>
      <path fill="url(#waveGradient)" fillOpacity="1" 
        d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;50,0;0,0"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="rgba(245, 158, 11, 0.2)" fillOpacity="1" 
        d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,250.7C672,267,768,245,864,218.7C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="50,0;0,0;50,0"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

// Pulsing energy rings
const EnergyRings = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border-2 border-amber-400/20"
        style={{
          width: `${(i + 1) * 200}px`,
          height: `${(i + 1) * 200}px`,
          animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}
  </div>
);

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const dynamicTexts = [
    "Selamat Datang Di Kamapa",
    "Komitmen Terhadap Perlindungan Alam", 
    "Mitra Terbaik Perhutanan Sosial"
  ];

  return (
    <section 
      className="relative h-screen overflow-hidden bg-gradient-to-br from-amber-950 via-orange-900 to-amber-950 cursor-crosshair"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic spotlight following mouse */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-amber-400/30 via-orange-400/10 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-orange-500/20 animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Floating geometric shapes */}
      <FloatingShapes />
      
      {/* Energy rings */}
      <EnergyRings />
      
      {/* Wave background */}
      <WaveBackground />

      {/* Holographic grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, amber 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, orange 1px, transparent 1px),
            linear-gradient(45deg, transparent 48%, rgba(245, 158, 11, 0.1) 50%, transparent 52%)
          `,
          backgroundSize: '50px 50px, 50px 50px, 25px 25px',
          animation: 'slide 20s linear infinite'
        }} />
      </div>

      {/* Main content with parallax effect */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-6xl mx-auto transform transition-all duration-1500 ${
          isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}>
          
          {/* Animated badge */}
          <div className="relative mb-8 inline-flex items-center justify-center">
            <div className="relative px-6 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full backdrop-blur-lg border border-amber-400/30">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-amber-200 font-semibold tracking-wide">SUSTAINABLE FOR FUTURE</span>
                <Rocket className="w-5 h-5 text-orange-400 animate-bounce" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur animate-pulse" />
            </div>
          </div>
          
          {/* Dynamic title with typewriter effect */}
          <div className="relative mb-6 h-32 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-gradient-x" 
                    style={{ backgroundSize: '200% 200%' }}>
                {title}
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 text-amber-100/80 font-light animate-fade-in-out">
                {dynamicTexts[textIndex]}
              </span>
            </h1>
            
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 blur-3xl -z-10 animate-pulse" />
          </div>
          
          {/* Subtitle with reveal animation */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-amber-100/90 leading-relaxed font-light max-w-4xl mx-auto">
            <span className="relative">
              {subtitle}
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 animate-scale-x origin-left" 
                   style={{ animationDelay: '1s', animationDuration: '1.5s', animationFillMode: 'forwards' }} />
            </span>
          </p>
          
          {/* Interactive buttons with magnetic effect */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-2xl mx-auto mb-12">
              <Link
                to={primaryButtonLink}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 md:px-12 md:py-5 rounded-3xl font-bold text-white text-xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50"
              >
              {/* Animated background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10 flex items-center justify-center">
                <Zap className="w-6 h-6 mr-3 animate-pulse" />
                {primaryButtonText}
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              
              {/* Particle explosion on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 0.5}s`,
                      animationDuration: '1s',
                    }}
                  />
                ))}
              </div>
            </Link>
            
            <Link
              to={secondaryButtonLink}
              className="group relative overflow-hidden border-2 border-amber-400/60 bg-gradient-to-r from-black/20 to-amber-900/20 backdrop-blur-xl text-amber-100 px-8 py-4 md:px-12 md:py-5 rounded-3xl font-bold text-xl hover:border-amber-300 hover:bg-amber-500/10 transition-all duration-300 shadow-lg hover:shadow-amber-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              
              <span className="relative z-10 flex items-center justify-center">
                <Trees className="w-5 h-5 mr-3 animate-spin" style={{ animationDuration: '8s' }} />
                {secondaryButtonText}
              </span>
            </Link>
          </div>
          
          {/* Interactive stats or features */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { icon: Stars, label: "AI Powered", value: "100%" },
              { icon: Zap, label: "Lightning Fast", value: "0.1s" },
              { icon: Trees, label: "Kelompok Perhutanan Sosial", value: "33+" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-amber-400 animate-pulse" />
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full animate-ping" />
                </div>
                <div className="text-2xl font-bold text-amber-200 mb-1">{stat.value}</div>
                <div className="text-sm text-amber-300/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes slide {
          from { background-position-x: 0; }
          to { background-position-x: 100px; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out infinite;
        }
        .animate-scale-x {
          animation: scale-x 1.5s ease-out forwards;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
