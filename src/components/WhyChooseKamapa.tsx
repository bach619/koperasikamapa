import { Users, TrendingUp, Shield, Award, Star, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhyChooseKamapa = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    setAnimationStart(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Keanggotaan Terpercaya',
      description: 'Bergabung dengan lebih dari 5,000 anggota yang telah merasakan manfaat koperasi',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      glowColor: 'amber-400',
      number: '5K+'
    },
    {
      icon: TrendingUp,
      title: 'Pertumbuhan Berkelanjutan',
      description: 'Tingkatkan kesejahteraan ekonomi melalui program simpan pinjam yang menguntungkan',
      gradient: 'from-orange-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-yellow-50',
      glowColor: 'orange-400',
      number: '15%'
    },
    {
      icon: Shield,
      title: 'Terdaftar & Berizin',
      description: 'Koperasi resmi yang terdaftar di Kementerian Koperasi dan UKM',
      gradient: 'from-yellow-500 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
      glowColor: 'yellow-400',
      number: '100%'
    },
    {
      icon: Award,
      title: 'Pelayanan Terbaik',
      description: 'Komitmen memberikan layanan prima untuk kemajuan ekonomi masyarakat Kabupaten Gunung Mas',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      glowColor: 'amber-400',
      number: '#1'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 lg:py-24">
      {/* Dynamic background with mouse interaction */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)`
        }}
      />
      
      {/* Animated background elements - reduced count */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-400/10 to-orange-400/10 animate-float-random"
            style={{
              width: Math.random() * 120 + 30 + 'px',
              height: Math.random() * 120 + 30 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 10 + 5) + 's',
            }}
          />
        ))}
      </div>

      {/* Floating particles - reduced count */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
            }}
          >
            <Star className="w-1 h-1 text-amber-300" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - more compact */}
        <div className={`text-center mb-16 ${animationStart ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100/80 to-orange-100/80 border border-amber-300/50 backdrop-blur-sm mb-6 animate-glow">
            <Sparkles className="w-4 h-4 text-amber-600 mr-2 animate-spin-slow" />
            <span className="text-xs font-semibold text-amber-800 tracking-wide">✨ PILIHAN TERPERCAYA ✨</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
              Mengapa Memilih
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
              KAMAPA?
            </span>
            
            {/* Glowing text effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent blur-lg opacity-30 animate-pulse">
              Mengapa Memilih KAMAPA?
            </div>
          </h2>
          
          <p className="text-lg md:text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-light">
            Kami menyediakan solusi keuangan dan ekonomi yang{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text font-semibold">
              revolusioner
            </span>{' '}
            untuk memajukan kesejahteraan masyarakat Perhutanan Sosial di Kabupaten Gunung Mas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                animationStart ? 'animate-slide-up' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                animationDelay: `${index * 0.15 + 0.3}s`,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container - reduced height */}
              <div className="relative h-64 sm:h-72 perspective-1000">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-700 ${
                  hoveredCard === index ? 'rotate-y-8 shadow-amber-500/20' : ''
                }`}>
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    {/* Large Number Display - smaller */}
                    <div className="absolute top-3 right-4 text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      {feature.number}
                    </div>

                    {/* Icon Section - smaller */}
                    <div className="relative mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 mx-auto group-hover:rotate-12 group-hover:scale-110`}>
                        <feature.icon className="h-8 w-8 text-white drop-shadow-lg" />
                        
                        {/* Rotating ring animation */}
                        <div className={`absolute inset-0 rounded-xl border-2 border-${feature.glowColor} opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500`} />
                      </div>
                      
                      {/* Pulse effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 animate-ping transition-opacity duration-500`} />
                    </div>

                    {/* Text Content */}
                    <div className="text-center space-y-3 flex-1 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-amber-900 group-hover:text-orange-900 transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-amber-800 group-hover:text-amber-900 leading-relaxed transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Interactive bottom element */}
                    <div className="flex justify-center mt-3">
                      <div className={`w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-700 rounded-full`} />
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              </div>

              {/* Floating glow effect */}
              <div className={`absolute -inset-4 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-15 blur-xl transition-all duration-700 -z-10`} />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes float-random {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-15px) translateX(8px) rotate(90deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-30px) translateX(-8px) rotate(180deg);
            opacity: 0.2;
          }
          75% { 
            transform: translateY(-15px) translateX(4px) rotate(270deg);
            opacity: 0.4;
          }
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(251, 191, 36, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(251, 191, 36, 0.6);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float-random {
          animation: float-random linear infinite;
        }

        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-8 {
          transform: rotateY(8deg);
        }

        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseKamapa;
