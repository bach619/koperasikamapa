import { Users, Calendar, Coins, Smile } from 'lucide-react';
import { useState, useEffect } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const stats = [
    { 
      icon: Users, 
      number: '5,000+', 
      actualNumber: 5000,
      label: 'Anggota Aktif',
      gradient: 'from-amber-400 to-orange-500',
      glow: 'amber-400',
      description: 'Keluarga besar yang terus berkembang'
    },
    { 
      icon: Calendar, 
      number: '15 Tahun', 
      actualNumber: 15,
      label: 'Pengalaman',
      gradient: 'from-orange-400 to-red-500',
      glow: 'orange-400',
      description: 'Dedikasi melayani masyarakat'
    },
    { 
      icon: Coins, 
      number: '50M+', 
      actualNumber: 50,
      label: 'Aset Koperasi',
      gradient: 'from-yellow-400 to-amber-500',
      glow: 'yellow-400',
      description: 'Kekuatan finansial yang solid'
    },
    { 
      icon: Smile, 
      number: '98%', 
      actualNumber: 98,
      label: 'Kepuasan Anggota',
      gradient: 'from-amber-500 to-orange-600',
      glow: 'amber-500',
      description: 'Komitmen terhadap layanan terbaik'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counter effect
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.actualNumber;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(Math.floor(start), end);
          return newCounters;
        });
        
        if (start >= end) {
          clearInterval(timer);
        }
      }, 16);
    });
  }, []);

  return (
<section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-16">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-10 right-1/3 w-48 h-48 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Dynamic geometric patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-bounce opacity-20 ${
              i % 3 === 0 ? 'w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full' :
              i % 3 === 1 ? 'w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-400 rotate-45' :
              'w-3 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-amber-400 rounded-full -translate-x-1/2 opacity-30"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full -translate-x-1/2 opacity-40"></div>
          </div>
          <div className="absolute inset-4 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
            <div className="absolute right-0 top-1/2 w-2 h-2 bg-yellow-400 rounded-full -translate-y-1/2 opacity-35"></div>
            <div className="absolute left-0 top-1/2 w-3 h-3 bg-amber-500 rounded-full -translate-y-1/2 opacity-25"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header section */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Animated badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 border border-amber-300 mb-6 shadow-lg relative overflow-hidden group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-3 animate-pulse relative z-10"></div>
            <span className="text-xs font-bold text-amber-900 tracking-wider relative z-10">PRESTASI KAMAPA</span>
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full ml-3 animate-pulse relative z-10"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-800 via-orange-600 to-yellow-700 bg-clip-text text-transparent mb-4 leading-tight tracking-tight">
            Pencapaian
            <span className="block bg-gradient-to-r from-orange-700 via-amber-700 to-yellow-800 bg-clip-text text-transparent">
              Luar Biasa
            </span>
          </h2>
          
          <div className="relative">
            <p className="text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed font-medium">
              Angka-angka yang membuktikan dedikasi kami untuk kemajuan bersama
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Enhanced stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`relative group transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                {/* Enhanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.glow}/30 via-${stat.glow}/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 animate-pulse`}></div>
                
                {/* Main enhanced card */}
                <div className="relative backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden group-hover:border-amber-300/50">
                  {/* Animated background waves */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${stat.gradient} rounded-3xl transform rotate-12 scale-150`}></div>
                    <div className={`absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr ${stat.gradient} rounded-full blur-xl animate-pulse`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Enhanced icon section */}
                    <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-${stat.glow}/50 transition-all duration-700 group-hover:rotate-6 transform relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/20 rounded-3xl"></div>
                        <Icon className="h-12 w-12 text-white drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        
                        {/* Icon pulse rings */}
                        <div className={`absolute inset-0 rounded-3xl border-4 border-white/50 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500`}></div>
                      </div>
                      
                      {/* Floating accent dots */}
                      <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${stat.gradient} rounded-full animate-bounce opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                      <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-0 group-hover:opacity-60 transition-opacity duration-700`} style={{animationDelay: '0.2s'}}></div>
                    </div>

                    {/* Animated number display */}
                    <div className="mb-4">
                      <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-amber-900 via-orange-800 to-yellow-900 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-500 min-h-[4rem] flex items-center">
                        {index === 0 ? `${counters[0].toLocaleString()}+` :
                         index === 1 ? `${counters[1]} Tahun` :
                         index === 2 ? `${counters[2]}M+` :
                         `${counters[3]}%`}
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="w-16 h-1 mx-auto bg-amber-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-2000 ease-out`}
                          style={{width: `${(counters[index] / stat.actualNumber) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Enhanced label and description */}
                    <div className="space-y-3">
                      <div className="text-xl font-bold text-amber-900 group-hover:text-orange-800 transition-colors duration-300">
                        {stat.label}
                      </div>
                      <div className="text-sm text-amber-700 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 font-medium">
                        {stat.description}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced progress bar */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-200 to-transparent overflow-hidden">
                    <div className={`h-full w-0 bg-gradient-to-r ${stat.gradient} group-hover:w-full transition-all duration-1500 ease-out shadow-lg`}></div>
                  </div>

                  {/* Corner decorative elements */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-l-4 border-t-4 border-amber-300 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-tl-lg"></div>
                  <div className="absolute bottom-6 right-6 w-6 h-6 border-r-3 border-b-3 border-orange-400 opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-br-lg" style={{transitionDelay: '0.2s'}}></div>
                  
                  {/* Particle effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${stat.gradient} rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-ping`}
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${30 + Math.sin(i) * 20}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced bottom section */}
        <div className={`mt-24 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-amber-400 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-lg text-amber-800 font-medium">
            Bersama membangun masa depan yang lebih cerah
          </p>
        </div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-60 animate-float`}
            style={{
              left: `${5 + (i * 6)}%`,
              top: `${10 + Math.sin(i * 0.5) * 40}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.6;
          }
          20% { 
            transform: translateY(-20px) translateX(8px) scale(1.2); 
            opacity: 0.8;
          }
          40% { 
            transform: translateY(-35px) translateX(-5px) scale(0.8); 
            opacity: 1;
          }
          60% { 
            transform: translateY(-25px) translateX(12px) scale(1.1); 
            opacity: 0.7;
          }
          80% { 
            transform: translateY(-10px) translateX(-8px) scale(0.9); 
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
