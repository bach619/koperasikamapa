import { Target, Eye, Heart, Award, Users, ArrowRight, Sparkles, TrendingUp, Globe2, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Animated counter component
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let startTime: number | undefined;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
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

  return <span ref={ref}>{count}{suffix}</span>;
};

// Floating elements background
const FloatingElements = () => {
  const elements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute rounded-full bg-gradient-to-br from-amber-200 to-orange-200"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            animation: `float-gentle ${el.duration}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

import OrganizationalStructure from '../components/OrganizationalStructure';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Kebersamaan',
      description: 'Membangun solidaritas dan gotong royong dalam setiap langkah',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: Award,
      title: 'Profesionalisme', 
      description: 'Menjalankan usaha dengan standar pelayanan yang tinggi',
      color: 'from-amber-400 to-orange-400'
    },
    {
      icon: Users,
      title: 'Transparansi',
      description: 'Keterbukaan dalam pengelolaan dan pertanggungjawaban',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Target,
      title: 'Inovasi',
      description: 'Mengembangkan produk dan layanan sesuai kebutuhan anggota',
      color: 'from-green-400 to-emerald-400'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Pendirian Koperasi Kamapa dengan 50 anggota pendiri', icon: Star },
    { year: '2012', event: 'Pembukaan layanan simpan pinjam pertama', icon: TrendingUp },
    { year: '2015', event: 'Ekspansi ke 3 kecamatan di Kabupaten Gunung Mas', icon: Globe2 },
    { year: '2018', event: 'Peluncuran layanan digital dan mobile banking', icon: Sparkles },
    { year: '2021', event: 'Pencapaian 5,000 anggota aktif', icon: Users },
    { year: '2024', event: 'Pengembangan program ekonomi digital', icon: Target }
  ];

  const stats = [
    { number: 5000, suffix: "+", label: "Anggota Aktif" },
    { number: 33, suffix: "", label: "Kelompok Mitra" },
    { number: 15, suffix: "+", label: "Tahun Pengalaman" },
    { number: 98, suffix: "%", label: "Kepuasan Anggota" }
  ];

  return (
    <div className="pt-16 bg-cream-50">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 text-white overflow-hidden">
        <FloatingElements />
        
        {/* Parallax background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Animated badge */}
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full backdrop-blur-lg border border-amber-400/30 mb-8">
              <Sparkles className="w-5 h-5 text-amber-300 mr-2 animate-pulse" />
              <span className="text-amber-200 font-semibold tracking-wide">TENTANG KAMAPA</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 bg-clip-text text-transparent">
                KAPAKAT
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-amber-100/90 font-light">
                MANGGATANG UTUS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-amber-100/80 mb-12">
              Mengenal lebih dekat koperasi yang telah berkembang sebagai mitra strategis 
              <span className="text-amber-200 font-semibold"> Perhutanan Sosial </span>
              di Kabupaten Gunung Mas
            </p>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-200 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-amber-300/70 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tab Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-cream-100 rounded-2xl p-2 inline-flex space-x-2">
              {[
                { key: 'history', label: 'Sejarah Kami', icon: Globe2 },
                { key: 'vision', label: 'Visi & Misi', icon: Eye },
                { key: 'values', label: 'Nilai-Nilai', icon: Heart }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'text-amber-700 hover:bg-cream-200'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-500">
            {activeTab === 'history' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* History Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full">
                    <Globe2 className="w-5 h-5 text-amber-600 mr-2" />
                    <span className="text-amber-800 font-semibold">Sejarah Koperasi</span>
                  </div>
                  
                  <h2 className="text-4xl font-black text-gray-900">
                    Perjalanan <span className="text-amber-600">15 Tahun</span>
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      <strong className="text-amber-700">Kamapa (KAPAKAT MANGGATANG UTUS)</strong> didirikan pada tahun 2009 dengan visi 
                      membangun ekonomi kerakyatan yang berkelanjutan di Kabupaten Gunung Mas.
                    </p>
                    <p>
                      Sebagai mitra strategis Perhutanan Sosial, kami berkomitmen untuk mengembangkan 
                      usaha non-kayu di wilayah Perhutanan Sosial Kabupaten Gunung Mas dengan bekerja sama 
                      bersama <strong className="text-amber-700">33 Kelompok Perhutanan Sosial</strong>.
                    </p>
                    <p>
                      Saat ini, Kamapa tidak hanya melayani simpan pinjam, tetapi juga mengembangkan 
                      unit usaha produktif berbasis sumber daya hutan non-kayu, program pelatihan 
                      pengelolaan hasil hutan, dan layanan konsultasi bisnis.
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Milestone Perjalanan</h3>
                  <div className="space-y-6">
                    {milestones.map((milestone, index) => (
                      <div 
                        key={index} 
                        className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-2xl transition-all duration-300"
                      >
                        <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold min-w-fit">
                          {milestone.year}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start space-x-3">
                            <milestone.icon className="w-5 h-5 text-amber-600 mt-1" />
                            <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                              {milestone.event}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Visi Kami</h2>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                    <p className="text-gray-700 text-lg leading-relaxed pl-6">
                      "Menjadi koperasi terdepan di Kabupaten Gunung Mas yang mampu meningkatkan 
                      kesejahteraan ekonomi anggota melalui pelayanan yang profesional, 
                      inovatif, dan berkelanjutan."
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Misi Kami</h2>
                  </div>
                  <ul className="text-gray-700 space-y-4">
                    {[
                      'Memberikan layanan simpan pinjam yang mudah, aman, dan menguntungkan',
                      'Mengembangkan unit usaha produktif untuk meningkatkan pendapatan anggota',
                      'Menyelenggarakan program pendidikan dan pelatihan koperasi',
                      'Membangun kemitraan strategis untuk kemajuan ekonomi Kabupaten Gunung Mas'
                    ].map((mission, index) => (
                      <li key={index} className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-black text-gray-900 mb-4">
                    Nilai-Nilai <span className="text-amber-600">Kamapa</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Nilai-nilai yang menjadi fondasi dalam setiap kegiatan dan pelayanan kami
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <div 
                      key={index} 
                      className="group text-center hover:shadow-2xl p-8 rounded-3xl transition-all duration-500 transform hover:-translate-y-4 bg-white border border-gray-100"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-5 h-5 text-amber-500 mx-auto" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-cream-100 to-amber-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
              <Users className="w-5 h-5 text-amber-600 mr-2" />
              <span className="text-amber-800 font-semibold">Tim Kepemimpinan</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Struktur <span className="text-amber-600">Organisasi</span>
            </h2>
            {/* <p className="text-xl text-gray-600">
              Tim berpengalaman yang memimpin Kamapa menuju masa depan yang lebih baik
            </p> */}
          </div>
          <OrganizationalStructure />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white relative overflow-hidden">
        <FloatingElements />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bergabunglah dengan <span className="text-amber-200">Kamapa</span>
          </h2>
          <p className="text-xl text-amber-100/80 mb-8 leading-relaxed">
            Jadilah bagian dari komunitas yang berkembang dan rasakan manfaat 
            menjadi anggota koperasi terpercaya di Kabupaten Gunung Mas
          </p>
          <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-amber-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <span className="flex items-center justify-center">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
