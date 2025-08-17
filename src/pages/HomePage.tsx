import { Users, TrendingUp, Shield, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage = () => {
  const features = [
    {
      icon: Users,
      title: 'Keanggotaan Terpercaya',
      description: 'Bergabung dengan lebih dari 5,000 anggota yang telah merasakan manfaat koperasi'
    },
    {
      icon: TrendingUp,
      title: 'Pertumbuhan Berkelanjutan',
      description: 'Tingkatkan kesejahteraan ekonomi melalui program simpan pinjam yang menguntungkan'
    },
    {
      icon: Shield,
      title: 'Terdaftar & Berizin',
      description: 'Koperasi resmi yang terdaftar di Kementerian Koperasi dan UKM'
    },
    {
      icon: Award,
      title: 'Pelayanan Terbaik',
      description: 'Komitmen memberikan layanan prima untuk kemajuan ekonomi masyarakat Kabupaten Gunung Mas'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Anggota Aktif' },
    { number: '15 Tahun', label: 'Pengalaman' },
    { number: '50M+', label: 'Aset Koperasi' },
    { number: '98%', label: 'Kepuasan Anggota' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Selamat Datang di Kamapa"
        subtitle="Kami berkomitmen membangun ekonomi kerakyatan untuk kesejahteraan bersama"
        primaryButtonText="Bergabung Sekarang"
        primaryButtonLink="/keanggotaan"
        secondaryButtonText="Pelajari Lebih Lanjut"
        secondaryButtonLink="/tentang-kami"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kamapa?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan solusi keuangan dan ekonomi yang tepercaya untuk memajukan 
              kesejahteraan masyarakat Kabupaten Gunung Mas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:shadow-lg p-6 rounded-lg transition-all duration-300">
<div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
  <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-xl text-gray-600">
              Angka-angka yang menunjukkan komitmen kami untuk kemajuan bersama
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
<div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Bergabung dengan Kamapa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Wujudkan impian ekonomi yang lebih baik bersama koperasi terpercaya di Kabupaten Gunung Mas. 
            Mari bergabung dan rasakan manfaatnya!
          </p>
          <Link
            to="/kontak"
            className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
