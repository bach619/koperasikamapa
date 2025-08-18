import React, { useState, useEffect, useRef } from 'react';
import { Banknote, TrendingUp, BookOpen, Briefcase, Smartphone, Users, ArrowRight, CheckCircle, Clock, Calculator, Shield, Star, Zap, Sparkles } from 'lucide-react';

// Enhanced Animated stats component with more effects
interface AnimatedStatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedStat = ({ end, duration = 2000, suffix = "", prefix = "" }: AnimatedStatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutCubic * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <span 
      ref={ref} 
      className="inline-block transform transition-all duration-500 hover:scale-110"
    >
      {prefix}{count}{suffix}
    </span>
  );
};

// Enhanced floating elements with more variety
const FloatingElements = () => {
  const elements = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    type: Math.random() > 0.5 ? 'circle' : 'diamond',
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`absolute ${el.type === 'circle' ? 'rounded-full' : 'transform rotate-45'} 
            bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-300 
            animate-float-complex hover:animate-pulse`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            opacity: el.opacity,
            animation: `float-complex ${el.duration}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 10px rgba(245, 158, 11, 0.3)',
          }}
        />
      ))}
    </div>
  );
};

// Enhanced particles with multiple types
const AnimatedParticles = ({ density = 30, opacity = 0.6 }) => {
  const particles = Array.from({ length: density }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 3,
    type: Math.random() > 0.7 ? 'star' : 'dot',
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.type === 'star' ? 'animate-sparkle' : 'animate-twinkle'} 
            ${particle.type === 'star' ? 'w-2 h-2' : `w-${Math.ceil(particle.size)} h-${Math.ceil(particle.size)}`}
            ${particle.type === 'star' ? 'bg-yellow-300' : 'bg-amber-400'} 
            rounded-full`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: opacity,
            filter: particle.type === 'star' ? 'drop-shadow(0 0 6px rgba(253, 224, 71, 0.8))' : 'none',
          }}
        />
      ))}
    </div>
  );
};

// New component: Animated background waves
const BackgroundWaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg
      className="absolute -top-10 left-0 w-full h-full animate-wave-slow"
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,300 C300,200 600,400 1200,300 L1200,800 L0,800 Z"
        fill="url(#wave-gradient1)"
      />
      <defs>
        <linearGradient id="wave-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.3)" />
          <stop offset="100%" stopColor="rgba(251, 146, 60, 0.1)" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      className="absolute -top-20 left-0 w-full h-full animate-wave-fast"
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,400 C400,300 800,500 1200,400 L1200,800 L0,800 Z"
        fill="url(#wave-gradient2)"
      />
      <defs>
        <linearGradient id="wave-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(251, 191, 36, 0.2)" />
          <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// New component: Service card with enhanced hover effects
interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    color: string;
  };
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard = ({ service, isActive, onClick }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex items-center px-6 py-4 rounded-2xl font-semibold 
        transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 
        ${isActive
          ? `bg-gradient-to-r ${service.color} text-white shadow-2xl scale-105`
          : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
        }`}
      style={{
        background: isActive ? '' : isHovered ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%)' : '',
        backdropFilter: isHovered ? 'blur(10px)' : 'none',
      }}
    >
      {/* Glow effect for active service */}
      {isActive && (
        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-50 -z-10 animate-pulse`} />
      )}
      
      {/* Icon with enhanced animations */}
      <div className={`relative ${isActive ? 'animate-bounce-slow' : isHovered ? 'animate-spin-slow' : ''}`}>
        <service.icon className="w-6 h-6 mr-3" />
        {isActive && (
          <div className="absolute inset-0 animate-ping">
            <service.icon className="w-6 h-6 opacity-40" />
          </div>
        )}
      </div>
      
      <span className="relative z-10">{service.title}</span>
      
      {/* Sparkle effects on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-1 right-1 w-4 h-4 text-amber-400 animate-pulse" />
          <Sparkles className="absolute bottom-1 left-1 w-3 h-3 text-orange-400 animate-pulse delay-300" />
        </div>
      )}
    </button>
  );
};

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced mouse tracking with momentum
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Smooth transition with momentum
    setMousePosition(prev => ({
      x: prev.x + (x - prev.x) * 0.1,
      y: prev.y + (y - prev.y) * 0.1,
    }));
  };

  const services = [
    {
      icon: Banknote,
      title: 'Simpan Pinjam',
      description: 'Layanan keuangan utama dengan sistem yang transparan dan bunga kompetitif',
      specifications: {
        simpanan: {
          title: 'Produk Simpanan',
          items: [
            { name: 'Simpanan Pokok', detail: 'Rp 50.000 per anggota (sekali seumur hidup)', rate: '-' },
            { name: 'Simpanan Wajib', detail: 'Minimum Rp 10.000 per bulan', rate: '-' },
            { name: 'Simpanan Sukarela', detail: 'Minimum Rp 25.000, dapat diambil sewaktu-waktu', rate: '6% p.a' },
            { name: 'Simpanan Berjangka', detail: 'Minimum Rp 500.000, jangka waktu 6-24 bulan', rate: '8-10% p.a' }
          ]
        },
        pinjaman: {
          title: 'Produk Pinjaman', 
          items: [
            { name: 'Pinjaman Produktif', detail: 'Maksimal Rp 25.000.000, jangka waktu 12-36 bulan', rate: '1.5% per bulan' },
            { name: 'Pinjaman Konsumtif', detail: 'Maksimal Rp 15.000.000, jangka waktu 6-24 bulan', rate: '2% per bulan' },
            { name: 'Pinjaman Pendidikan', detail: 'Maksimal Rp 10.000.000, jangka waktu 12-48 bulan', rate: '1% per bulan' },
            { name: 'Pinjaman Darurat', detail: 'Maksimal Rp 5.000.000, proses cepat 24 jam', rate: '2.5% per bulan' }
          ]
        }
      },
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      stats: { users: '3200', volume: '15', satisfaction: '98' }
    },
    {
      icon: TrendingUp,
      title: 'Unit Usaha Produktif',
      description: 'Pengembangan bisnis bersama untuk meningkatkan ekonomi anggota',
      specifications: {
        retail: {
          title: 'Unit Retail & Perdagangan',
          items: [
            { name: 'Toko Serba Ada Kamapa', detail: 'Menyediakan kebutuhan sehari-hari dengan harga anggota', benefit: 'Diskon 5-10%' },
            { name: 'Warung Sembako Keliling', detail: 'Layanan antar barang ke rumah anggota', benefit: 'Gratis ongkir' },
            { name: 'Unit Agribisnis', detail: 'Pengolahan dan pemasaran hasil pertanian', benefit: 'Bagi hasil' },
            { name: 'Kios Material Bangunan', detail: 'Menyediakan material dengan sistem kredit', benefit: 'Cicilan 0%' }
          ]
        },
        services: {
          title: 'Unit Jasa',
          items: [
            { name: 'Jasa Transportasi', detail: 'Layanan antar jemput dan logistik', tarif: 'Rp 2.500/km' },
            { name: 'Jasa Konstruksi', detail: 'Pembangunan dan renovasi rumah', benefit: 'DP 20%' },
            { name: 'Jasa Catering', detail: 'Melayani acara dan kegiatan anggota', benefit: 'Paket hemat' },
            { name: 'Rental Alat', detail: 'Sewa alat pertanian dan konstruksi', tarif: 'Mulai Rp 50K/hari' }
          ]
        }
      },
      color: 'from-green-500 via-emerald-500 to-teal-500',
      stats: { units: '12', revenue: '2800', members: '1500' }
    },
    {
      icon: BookOpen,
      title: 'Pendidikan & Pelatihan',
      description: 'Program pengembangan kapasitas dan keterampilan anggota',
      specifications: {
        training: {
          title: 'Program Pelatihan',
          items: [
            { name: 'Pelatihan Kewirausahaan', detail: '16 jam pembelajaran + sertifikat', fee: 'Gratis anggota' },
            { name: 'Workshop Digital Marketing', detail: 'Strategi pemasaran online modern', fee: 'Rp 150K' },
            { name: 'Pelatihan Akuntansi Dasar', detail: 'Pembukuan usaha kecil menengah', fee: 'Rp 200K' },
            { name: 'Seminar Investasi', detail: 'Edukasi investasi yang menguntungkan', fee: 'Rp 100K' }
          ]
        },
        education: {
          title: 'Program Pendidikan',
          items: [
            { name: 'Sekolah Koperasi', detail: 'Pendidikan formal koperasi 6 bulan', fee: 'Rp 500K' },
            { name: 'Magang Usaha', detail: 'Program magang di unit usaha Kamapa', benefit: 'Dapat uang saku' },
            { name: 'Beasiswa Pendidikan', detail: 'Bantuan biaya sekolah anak anggota', coverage: 'Hingga 50%' },
            { name: 'Kursus Bahasa Inggris', detail: 'Peningkatan skill berbahasa asing', fee: 'Rp 300K/bulan' }
          ]
        }
      },
      color: 'from-purple-500 via-violet-500 to-pink-500',
      stats: { programs: '24', participants: '850', completion: '92' }
    },
    {
      icon: Briefcase,
      title: 'Konsultasi Bisnis',
      description: 'Pendampingan profesional untuk pengembangan usaha anggota',
      specifications: {
        business: {
          title: 'Layanan Konsultasi',
          items: [
            { name: 'Analisis Kelayakan Usaha', detail: 'Studi mendalam potensi bisnis', fee: 'Rp 500K' },
            { name: 'Penyusunan Business Plan', detail: 'Dokumen rencana bisnis profesional', fee: 'Rp 750K' },
            { name: 'Konsultasi Keuangan', detail: 'Analisis cash flow dan proyeksi', fee: 'Rp 300K/sesi' },
            { name: 'Audit Internal', detail: 'Pemeriksaan sistem keuangan usaha', fee: 'Rp 1M' }
          ]
        },
        support: {
          title: 'Pendampingan Usaha',
          items: [
            { name: 'Mentoring Startup', detail: 'Pendampingan usaha rintisan 6 bulan', fee: 'Rp 2M paket' },
            { name: 'Workshop Strategi', detail: 'Pelatihan strategi pemasaran', fee: 'Rp 200K' },
            { name: 'Networking Event', detail: 'Acara jejaring bisnis bulanan', fee: 'Gratis anggota' },
            { name: 'Akses Modal Ventura', detail: 'Koneksi dengan investor', success_fee: '2%' }
          ]
        }
      },
      color: 'from-amber-500 via-orange-500 to-red-500',
      stats: { consultations: '450', success: '87', businesses: '230' }
    },
    {
      icon: Users,
      title: 'Layanan Anggota',
      description: 'Fasilitas eksklusif dan program loyalitas untuk anggota',
      specifications: {
        exclusive: {
          title: 'Fasilitas Eksklusif',
          items: [
            { name: 'Customer Service Priority', detail: 'Layanan khusus anggota prioritas', response: '< 2 jam' },
            { name: 'Layanan Antar Jemput', detail: 'Pickup dokumen dan uang di lokasi', coverage: 'Radius 15km' },
            { name: 'Member Lounge', detail: 'Ruang tunggu nyaman di kantor', amenities: 'WiFi & refreshment' },
            { name: 'Valet Parking', detail: 'Layanan parkir gratis untuk anggota', benefit: 'Aman terjaga' }
          ]
        },
        programs: {
          title: 'Program Loyalitas',
          items: [
            { name: 'Kamapa Rewards', detail: 'Point dari setiap transaksi', rate: '1 point = Rp 100' },
            { name: 'Anniversary Bonus', detail: 'Bonus tahunan untuk anggota setia', percentage: '2% dari saldo' },
            { name: 'Referral Program', detail: 'Bonus ajak teman jadi anggota', reward: 'Rp 100K/referral' },
            { name: 'Family Package', detail: 'Paket keluarga dengan benefit khusus', discount: '15% semua layanan' }
          ]
        }
      },
      color: 'from-teal-500 via-cyan-500 to-blue-500',
      stats: { satisfaction: '96', loyalty: '89', retention: '94' }
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Pendaftaran',
      description: 'Daftar menjadi anggota dengan melengkapi dokumen KTP, KK, dan foto',
      time: '30 menit',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: 2, 
      title: 'Konsultasi',
      description: 'Konsultasi gratis dengan account officer untuk layanan yang tepat',
      time: '45 menit',
      color: 'from-green-500 to-green-600'
    },
    {
      step: 3,
      title: 'Pengajuan',
      description: 'Submit aplikasi dengan kelengkapan dokumen sesuai persyaratan',
      time: '1-2 hari',
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: 4,
      title: 'Verifikasi',
      description: 'Tim verifikasi melakukan pengecekan dan survey jika diperlukan',
      time: '2-3 hari',
      color: 'from-orange-500 to-orange-600'
    },
    {
      step: 5,
      title: 'Aktivasi',
      description: 'Layanan diaktivasi dan siap digunakan setelah persetujuan',
      time: '1 hari',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <div className="pt-16 bg-cream-50 overflow-x-hidden">
      {/* Enhanced Hero Section */}
<section 
  className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden"
  onMouseMove={handleMouseMove}
>
        {/* Multi-layer dynamic spotlight */}
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-radial from-amber-300/40 via-orange-400/20 to-transparent rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none animate-pulse-slow"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] bg-gradient-radial from-yellow-300/30 via-amber-400/15 to-transparent rounded-full blur-2xl transition-all duration-500 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x + 10}%`,
            top: `${mousePosition.y + 5}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        <FloatingElements />
        <AnimatedParticles density={40} opacity={0.6} />
        <BackgroundWaves />
        
        {/* Gradient overlays with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20 animate-gradient-shift" />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          style={{ 
            opacity: 1 - (scrollY / 1000)
          }}
        />
        
<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="text-center">
            {/* Enhanced badge with glowing effect */}
            <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full backdrop-blur-2xl border border-amber-400/50 mb-8 group hover:scale-105 transition-all duration-500">
              <div className="relative">
                <Zap className="w-6 h-6 text-amber-300 mr-3 animate-pulse" />
                <div className="absolute inset-0 animate-ping opacity-50">
                  <Zap className="w-6 h-6 text-amber-300" />
                </div>
              </div>
              <span className="text-amber-200 font-bold tracking-wide text-lg">LAYANAN KAMAPA</span>
              <Sparkles className="w-5 h-5 text-yellow-300 ml-3 animate-spin-slow" />
            </div>
            
            {/* Enhanced title with text animations */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent animate-text-shimmer bg-300% bg-pos-0">
                Solusi Finansial
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-amber-100/90 font-light animate-fade-in-up delay-300">
                Terlengkap & Terpercaya
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto leading-relaxed text-amber-100/90 mb-16 animate-fade-in-up delay-500">
              Berbagai layanan komprehensif untuk mendukung kemajuan ekonomi dan 
              kesejahteraan <span className="text-amber-200 font-bold bg-amber-900/30 px-3 py-1 rounded-full">seluruh anggota koperasi</span>
            </p>

            {/* Enhanced Quick Stats with better animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { value: 5, suffix: '', label: 'Layanan Utama', delay: '0ms' },
                { value: 5000, suffix: '+', label: 'Anggota Aktif', delay: '200ms' },
                { value: 98, suffix: '%', label: 'Kepuasan', delay: '400ms' },
                { value: 24, suffix: '/7', label: 'Support', delay: '600ms' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-500"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="relative">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-amber-200 mb-3 animate-bounce-in">
                      {stat.suffix === '/7' ? (
                        <><AnimatedStat end={stat.value} /><span className="text-3xl md:text-4xl">/7</span></>
                      ) : (
                        <AnimatedStat end={stat.value} suffix={stat.suffix} />
                      )}
                    </div>
                    {/* Glowing underline */}
                    <div className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full group-hover:w-full group-hover:left-0 transition-all duration-500" />
                  </div>
                  <div className="text-sm text-amber-300/80 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA with better effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-amber-400 hover:via-orange-400 hover:to-red-400 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-3xl overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative flex items-center justify-center">
                  Jelajahi Layanan
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300" />
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Tabs Section */}
<section className="pt-20 pb-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl animate-float-gentle" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl animate-float-gentle delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-200 mb-6 animate-fade-in-up">
              <Star className="w-5 h-5 text-amber-600 mr-2" />
              <span className="text-amber-800 font-semibold">SPESIFIKASI DETAIL</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 animate-fade-in-up delay-200">
              Spesifikasi <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Layanan Detail</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up delay-400">
              Informasi lengkap dan transparan mengenai setiap layanan yang tersedia dengan 
              <span className="text-amber-600 font-semibold"> kualitas terjamin</span>
            </p>
          </div>

          {/* Enhanced Services Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  isActive={activeService === index}
                  onClick={() => setActiveService(index)}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Active Service Content */}
          {activeService !== null && (
            <div className="animate-slide-in-up">
              <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-700 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Enhanced Service Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center mb-10 relative z-10">
                  <div className="flex items-center mb-6 lg:mb-0">
                    <div className={`relative bg-gradient-to-br ${services[activeService].color} w-20 h-20 rounded-3xl flex items-center justify-center mr-8 shadow-2xl group hover:scale-110 transition-all duration-500`}>
                      {React.createElement(services[activeService].icon, { 
                        className: "h-10 w-10 text-white animate-bounce-slow" 
                      })}
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} rounded-3xl blur-lg opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300`} />
                    </div>
                    
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3 animate-fade-in-right">
                        {services[activeService].title}
                      </h3>
                      <p className="text-gray-600 text-lg lg:text-xl leading-relaxed animate-fade-in-right delay-200">
                        {services[activeService].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Service Specifications */}
                <div className="space-y-10 relative z-10">
                  {Object.entries(services[activeService].specifications).map(([key, spec], specIndex) => (
                    <div 
                      key={key} 
                      className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 group animate-fade-in-up"
                      style={{ animationDelay: `${specIndex * 200}ms` }}
                    >
                      <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 flex items-center group-hover:text-amber-700 transition-colors duration-300">
                        <div className="relative">
                          <CheckCircle className="w-8 h-8 text-green-500 mr-4 group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute inset-0 animate-ping opacity-30">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                          </div>
                        </div>
                        {spec.title}
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {spec.items.map((item: any, itemIndex: number) => (
                          <div 
                            key={itemIndex}
                            className="group/item bg-gradient-to-br from-gray-50 via-white to-amber-50 p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                          >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            
                            <div className="relative z-10">
                              <div className="flex items-start justify-between mb-3">
                                <h5 className="font-bold text-gray-900 group-hover/item:text-amber-700 transition-colors duration-300 text-lg">
                                  {item.name}
                                </h5>
                                
                                {/* Enhanced badges */}
                                <div className="flex flex-wrap gap-2">
                                  {item.rate && (
                                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse-slow">
                                      {item.rate}
                                    </span>
                                  )}
                                  {item.fee && (
                                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                      {item.fee}
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.detail}</p>
                              
                              {/* Enhanced benefit display */}
                              {(item.benefit || item.tarif || item.coverage || item.feature || item.response || item.amenities || item.percentage || item.reward || item.discount || item.success_fee) && (
                                <div className="flex items-center text-sm bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-xl border border-amber-100">
                                  <div className="relative">
                                    <Star className="w-4 h-4 text-amber-500 mr-2 animate-spin-slow" />
                                    <div className="absolute inset-0 animate-ping opacity-50">
                                      <Star className="w-4 h-4 text-amber-500" />
                                    </div>
                                  </div>
                                  <span className="text-amber-700 font-semibold">
                                    {item.benefit || item.tarif || item.coverage || item.feature || item.response || item.amenities || item.percentage || item.reward || item.discount || item.success_fee}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Service Stats */}
                <div className="mt-12 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-3xl p-8 border-2 border-amber-100 relative overflow-hidden">
                  {/* Background pattern for stats */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(245,158,11,0.1) 25%, rgba(245,158,11,0.1) 50%, transparent 50%, transparent 75%, rgba(245,158,11,0.1) 75%)',
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  <h4 className="text-2xl font-black text-gray-900 mb-6 text-center relative z-10">
                    📊 Statistik Layanan Terkini
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-8 text-center relative z-10">
                    {Object.entries(services[activeService].stats).map(([key, value], index) => (
                      <div key={index} className="group hover:scale-110 transition-all duration-500">
                        <div className="text-3xl lg:text-4xl font-black text-amber-600 mb-2 group-hover:scale-125 transition-transform duration-300">
                          <AnimatedStat 
                            end={parseInt(value.replace(/[^0-9]/g, '')) || parseInt(value)} 
                            suffix={value.replace(/[0-9]/g, '')} 
                          />
                        </div>
                        <div className="text-xs lg:text-sm text-gray-600 uppercase tracking-wide font-bold">
                          {key === 'users' && '👥 Pengguna Aktif'}
                          {key === 'volume' && '💰 Volume (Milyar)'}
                          {key === 'satisfaction' && '😊 Kepuasan (%)'}
                          {key === 'units' && '🏢 Unit Usaha'}
                          {key === 'revenue' && '📈 Pendapatan (Juta)'}
                          {key === 'members' && '👨‍👩‍👧‍👦 Anggota'}
                          {key === 'programs' && '📚 Program Tersedia'}
                          {key === 'participants' && '🎓 Peserta Aktif'}
                          {key === 'completion' && '✅ Kelulusan (%)'}
                          {key === 'consultations' && '💼 Konsultasi'}
                          {key === 'success' && '🎯 Tingkat Berhasil (%)'}
                          {key === 'businesses' && '🚀 Bisnis Didampingi'}
                          {key === 'loyalty' && '❤️ Loyalitas (%)'}
                          {key === 'retention' && '🔄 Retensi (%)'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Service Process Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        <AnimatedParticles density={30} opacity={0.4} />
        <BackgroundWaves />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 transform rotate-45 rounded-2xl animate-float-gentle" />
          <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-float-gentle delay-1000" />
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-green-400 to-teal-400 transform rotate-12 rounded-3xl animate-float-gentle delay-2000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border-2 border-amber-200 mb-6 animate-fade-in-up backdrop-blur-sm">
              <Clock className="w-6 h-6 text-amber-600 mr-3 animate-spin-slow" />
              <span className="text-amber-800 font-bold text-lg">PROSES LAYANAN</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 animate-fade-in-up delay-200">
              Proses <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Mudah & Cepat</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-400">
              Hanya <span className="text-amber-600 font-black text-3xl">5 langkah</span> untuk mendapatkan layanan terbaik dari Kamapa
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Connection Line with animated progress */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-amber-200 via-orange-300 to-red-200 transform -translate-y-1/2 hidden lg:block rounded-full shadow-lg">
              <div className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-400 rounded-full animate-progress-line" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Enhanced step circle */}
                  <div className="relative mb-8">
                    <div className={`bg-gradient-to-br ${step.color} text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-20`}>
                      {step.step}
                      
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse" />
                      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} w-24 h-24 rounded-full mx-auto blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 z-10`} />
                  </div>
                  
                  {/* Enhanced card */}
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-white border border-white/50 hover:border-amber-200 relative overflow-hidden">
                    {/* Card background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
                        backgroundSize: '15px 15px'
                      }} />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Enhanced time display */}
                      <div className="flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-xl border border-amber-100">
                        <div className="relative">
                          <Clock className="w-5 h-5 text-amber-500 mr-2 group-hover:animate-spin transition-transform duration-300" />
                        </div>
                        <span className="text-amber-600 font-black text-sm">{step.time}</span>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  </div>
                  
                  {/* Connection arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4">
                      <ArrowRight className="w-6 h-6 text-amber-500 animate-bounce" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Success message */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border-2 border-green-200 animate-fade-in-up delay-1000">
                <CheckCircle className="w-8 h-8 text-green-600 mr-4 animate-pulse" />
                <span className="text-green-800 font-bold text-lg">
                  🎉 Selamat! Anda sudah menjadi anggota Kamapa dan dapat menikmati semua layanan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Requirements Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border-2 border-blue-200 mb-6 animate-fade-in-up">
              <Shield className="w-6 h-6 text-blue-600 mr-3 animate-pulse" />
              <span className="text-blue-800 font-bold text-lg">PERSYARATAN</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 animate-fade-in-up delay-200">
              Persyaratan <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Keanggotaan</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up delay-400">
              Dokumen yang diperlukan untuk menjadi anggota Kamapa - 
              <span className="text-blue-600 font-semibold"> prosesnya mudah dan cepat!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: '📄 Dokumen Identitas', 
                icon: '🆔',
                items: ['KTP Asli + Fotocopy', 'Kartu Keluarga', 'Pas Foto 3x4 (2 lembar)', 'NPWP (jika ada)'],
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                title: '📋 Dokumen Pendukung', 
                icon: '📑',
                items: ['Surat Keterangan Domisili', 'Surat Keterangan Kerja', 'Slip Gaji (3 bulan terakhir)', 'Rekening Koran (jika ada)'],
                color: 'from-green-500 to-teal-500'
              },
              { 
                title: '✅ Persyaratan Khusus', 
                icon: '⚡',
                items: ['Usia minimal 17 tahun', 'Berdomisili di Kab. Gunung Mas', 'Tidak dalam daftar hitam BI', 'Sanggup membayar simpanan pokok'],
                color: 'from-purple-500 to-pink-500'
              }
            ].map((req, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-amber-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.05) 75%)',
                    backgroundSize: '15px 15px'
                  }} />
                </div>

                {/* Header with icon */}
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${req.color} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {req.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 ml-4 group-hover:text-amber-700 transition-colors duration-300">
                    {req.title}
                  </h3>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {req.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{ animationDelay: `${(index * 200) + (itemIndex * 100)}ms` }}
                    >
                      <div className="relative">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 animate-ping opacity-30">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/10 to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            ))}
          </div>

          {/* Additional info section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border-2 border-amber-200 animate-fade-in-up delay-600">
              <Sparkles className="w-8 h-8 text-amber-600 mr-4 animate-spin-slow" />
              <div className="text-left">
                <div className="text-amber-800 font-bold text-lg">💡 Tips Cepat Disetujui</div>
                <div className="text-amber-700 text-sm">
                  Lengkapi semua dokumen, pastikan data valid, dan datang saat jam operasional
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section 
        className="py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white relative overflow-hidden cursor-crosshair"
        onMouseMove={handleMouseMove}
      >
        {/* Multi-layer dynamic effects */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-radial from-amber-300/40 via-orange-400/20 to-transparent rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none animate-pulse-slow"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-radial from-yellow-300/30 via-amber-400/15 to-transparent rounded-full blur-2xl transition-all duration-500 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x + 10}%`,
            top: `${mousePosition.y + 5}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full backdrop-blur-2xl border-2 border-amber-400/50 mb-8 animate-fade-in-up">
              <Zap className="w-6 h-6 text-amber-300 mr-3 animate-pulse" />
              <span className="text-amber-200 font-bold tracking-wide text-lg">BERGABUNG SEKARANG</span>
              <Sparkles className="w-5 h-5 text-yellow-300 ml-3 animate-spin-slow" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in-up delay-200">
              Siap Bergabung dengan <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent animate-text-shimmer">Kamapa?</span>
            </h2>
            <p className="text-xl md:text-2xl text-amber-100/90 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-400">
              Tim customer service profesional kami siap membantu Anda memilih layanan yang tepat 
              sesuai kebutuhan dan kondisi finansial Anda dengan 
              <span className="text-amber-200 font-bold bg-amber-900/30 px-3 py-1 rounded-full"> layanan 24/7</span>
            </p>
          </div>
          
          {/* Enhanced Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                icon: Users, 
                title: '🏢 Konsultasi Gratis', 
                desc: 'Datang langsung ke kantor pusat', 
                action: 'Kunjungi Kami',
                color: 'from-blue-500 to-cyan-500',
                detail: 'Senin - Jumat: 08.00-16.00'
              },
              { 
                icon: Smartphone, 
                title: '💬 WhatsApp', 
                desc: 'Chat langsung via WhatsApp 24/7', 
                action: 'Chat Sekarang',
                color: 'from-green-500 to-teal-500',
                detail: 'Respon dalam 5 menit'
              },
              { 
                icon: Calculator, 
                title: '📊 Simulasi Online', 
                desc: 'Hitung cicilan & benefit secara real-time', 
                action: 'Mulai Simulasi',
                color: 'from-purple-500 to-pink-500',
                detail: 'Hasil akurat & instant'
              }
            ].map((option, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-2xl rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-amber-300/50 hover:scale-105 hover:-translate-y-2 relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Icon with enhanced effects */}
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${option.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <option.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} w-20 h-20 rounded-2xl mx-auto blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-black text-xl mb-3 group-hover:text-amber-200 transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-amber-100/80 text-sm mb-4 leading-relaxed">
                    {option.desc}
                  </p>
                  <div className="text-amber-300/70 text-xs mb-6 font-semibold">
                    {option.detail}
                  </div>
                  
                  <button className="group/btn bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:from-amber-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    <span className="relative">{option.action}</span>
                  </button>
                </div>

                {/* Sparkle effects */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="absolute top-4 right-4 w-4 h-4 text-amber-300 animate-pulse" />
                  <Sparkles className="absolute bottom-4 left-4 w-3 h-3 text-orange-300 animate-pulse delay-300" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-12 py-6 rounded-3xl font-black text-xl hover:from-amber-400 hover:via-orange-400 hover:to-red-400 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 shadow-2xl hover:shadow-3xl overflow-hidden">
              {/* Animated background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              
              <span className="relative flex items-center justify-center">
                <Zap className="mr-3 h-6 w-6 group-hover:animate-spin transition-transform duration-300" />
                Daftar Sekarang Juga
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </span>
              
              {/* Multiple glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-xl opacity-50 -z-10 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 rounded-3xl blur-2xl opacity-30 -z-20 group-hover:opacity-50 transition-opacity duration-300" />
            </button>
            
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '🏆', text: 'Terpercaya 15+ Tahun', value: '2009' },
              { icon: '🔒', text: 'Aman & Berlisensi', value: 'OJK' },
              { icon: '⚡', text: 'Proses Super Cepat', value: '24 Jam' },
              { icon: '💯', text: 'Kepuasan Terjamin', value: '98%' }
            ].map((trust, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-110 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${800 + (index * 100)}ms` }}
              >
                <div className="text-3xl mb-2 group-hover:animate-bounce">{trust.icon}</div>
                <div className="text-amber-200 font-bold text-lg mb-1">{trust.value}</div>
                <div className="text-amber-100/70 text-sm">{trust.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes float-complex {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) rotate(90deg) scale(1.1); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-15px) rotate(180deg) scale(0.9); 
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-25px) rotate(270deg) scale(1.1); 
            opacity: 0.4;
          }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-right {
          from { 
            opacity: 0; 
            transform: translateX(-40px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-up {
          from { 
            opacity: 0; 
            transform: translateY(60px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg); 
          }
        }
        
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          25% { 
            opacity: 0.5; 
            transform: scale(0.5) rotate(90deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg); 
          }
          75% { 
            opacity: 0.7; 
            transform: scale(0.8) rotate(270deg); 
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0) scale(1); 
          }
          50% { 
            transform: translateY(-10px) scale(1.05); 
          }
        }
        
        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05); 
          }
          70% { 
            transform: scale(0.9); 
          }
          100% { 
            transform: scale(1); 
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes wave-slow {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(-10px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes wave-fast {
          0% { transform: translateX(0) translateY(0); }
          33% { transform: translateX(-15px) translateY(5px); }
          66% { transform: translateX(10px) translateY(-5px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes progress-line {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { 
            background: linear-gradient(45deg, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.2)); 
          }
          50% { 
            background: linear-gradient(45deg, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.3)); 
          }
        }
        
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes border-spin {
          0% { 
            background: linear-gradient(0deg, transparent, rgba(245, 158, 11, 0.4), transparent); 
          }
          25% { 
            background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.4), transparent); 
          }
          50% { 
            background: linear-gradient(180deg, transparent, rgba(245, 158, 11, 0.4), transparent); 
          }
          75% { 
            background: linear-gradient(270deg, transparent, rgba(245, 158, 11, 0.4), transparent); 
          }
          100% { 
            background: linear-gradient(360deg, transparent, rgba(245, 158, 11, 0.4), transparent); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
        
        .animate-float-complex {
          animation: float-complex 15s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 10s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-wave-slow {
          animation: wave-slow 20s ease-in-out infinite;
        }
        
        .animate-wave-fast {
          animation: wave-fast 15s ease-in-out infinite;
        }
        
        .animate-progress-line {
          animation: progress-line 3s ease-out forwards;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
        
        .animate-text-shimmer {
          background-size: 300% 100%;
          animation: text-shimmer 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-border-spin {
          animation: border-spin 2s linear infinite;
        }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-2000 { animation-delay: 2000ms; }
        
        .bg-300% { background-size: 300% 100%; }
        .bg-pos-0 { background-position: 0% 50%; }
        
        /* Utility classes */
        .cursor-crosshair { cursor: crosshair; }
        .cursor-none { cursor: none; }
        
        /* Responsive improvements */
        @media (max-width: 768px) {
          .animate-float-complex {
            animation: float-gentle 8s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
