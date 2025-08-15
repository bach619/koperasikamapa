import React from 'react';
import { Calendar, User, ArrowRight, Megaphone, Award, TrendingUp } from 'lucide-react';

const NewsPage = () => {
  const featuredNews = {
    id: 1,
    title: 'KAMAPA Raih Penghargaan Koperasi Terbaik Papua 2024',
    excerpt: 'KAPAKAT MANGGATANG UTUS meraih penghargaan bergengsi sebagai Koperasi Terbaik Papua 2024 dari Kementerian Koperasi dan UKM RI.',
    date: '15 Maret 2024',
    author: 'Tim Redaksi KAMAPA',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Penghargaan'
  };

  const news = [
    {
      id: 2,
      title: 'Peluncuran Aplikasi Mobile KAMAPA',
      excerpt: 'Aplikasi mobile KAMAPA kini tersedia di Play Store dan App Store untuk kemudahan akses layanan anggota.',
      date: '10 Maret 2024',
      author: 'Divisi IT KAMAPA',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Teknologi'
    },
    {
      id: 3,
      title: 'Program Pelatihan Kewirausahaan Batch 5',
      excerpt: 'Pendaftaran terbuka untuk program pelatihan kewirausahaan batch 5 dengan fokus pada ekonomi digital.',
      date: '5 Maret 2024',
      author: 'Divisi Pendidikan',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pelatihan'
    },
    {
      id: 4,
      title: 'Rapat Anggota Tahunan (RAT) 2024',
      excerpt: 'Undangan untuk seluruh anggota menghadiri Rapat Anggota Tahunan yang akan diselenggarakan pada tanggal 25 Maret 2024.',
      date: '1 Maret 2024',
      author: 'Sekretariat KAMAPA',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pengumuman'
    },
    {
      id: 5,
      title: 'Kemitraan Strategis dengan Bank Papua',
      excerpt: 'KAMAPA menjalin kemitraan strategis dengan Bank Papua untuk memperluas akses layanan keuangan anggota.',
      date: '28 Februari 2024',
      author: 'Divisi Kemitraan',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Kemitraan'
    },
    {
      id: 6,
      title: 'Pembagian SHU Tahun 2023',
      excerpt: 'Pengumuman pembagian Sisa Hasil Usaha (SHU) tahun 2023 dan jadwal pencairan untuk anggota.',
      date: '20 Februari 2024',
      author: 'Divisi Keuangan',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Keuangan'
    },
    {
      id: 7,
      title: 'Workshop Manajemen Keuangan UMKM',
      excerpt: 'KAMAPA menyelenggarakan workshop gratis tentang manajemen keuangan untuk pelaku UMKM di Papua.',
      date: '15 Februari 2024',
      author: 'Divisi Pemberdayaan',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Workshop'
    }
  ];

  const announcements = [
    {
      icon: Megaphone,
      title: 'Pemeliharaan Sistem',
      message: 'Sistem akan mengalami pemeliharaan pada tanggal 20 Maret 2024 pukul 01:00-05:00 WITA',
      type: 'info'
    },
    {
      icon: Award,
      title: 'Pendaftaran Beasiswa',
      message: 'Pendaftaran beasiswa pendidikan anak anggota dibuka hingga 30 Maret 2024',
      type: 'success'
    },
    {
      icon: TrendingUp,
      title: 'Update Suku Bunga',
      message: 'Suku bunga simpanan naik menjadi 8% efektif mulai 1 April 2024',
      type: 'warning'
    }
  ];

  const getAnnouncementStyles = (type: string) => {
    const styles = {
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      success: 'bg-green-50 border-green-200 text-green-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800'
    };
    return styles[type as keyof typeof styles];
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Berita & Informasi</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Dapatkan informasi terbaru seputar kegiatan, pengumuman, dan 
              perkembangan KAMAPA
            </p>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengumuman Penting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {announcements.map((announcement, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${getAnnouncementStyles(announcement.type)}`}>
                <div className="flex items-start">
                  <announcement.icon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{announcement.title}</h3>
                    <p className="text-sm">{announcement.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="h-64 md:h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredNews.category}
                  </span>
                  <span className="ml-3 text-gray-500 text-sm">Berita Utama</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{featuredNews.date}</span>
                    <User className="h-4 w-4 ml-4 mr-2" />
                    <span>{featuredNews.author}</span>
                  </div>
                  <button className="text-orange-600 font-semibold flex items-center hover:text-orange-700">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Berita Terbaru</h2>
            <div className="flex space-x-4">
              <button className="text-orange-600 font-semibold">Semua</button>
              <button className="text-gray-500 hover:text-orange-600">Pengumuman</button>
              <button className="text-gray-500 hover:text-orange-600">Pelatihan</button>
              <button className="text-gray-500 hover:text-orange-600">Kemitraan</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-orange-600 cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <button className="text-orange-600 font-semibold hover:text-orange-700 flex items-center">
                      Baca
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              Muat Berita Lainnya
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Dapatkan Update Terbaru</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Berlangganan newsletter kami untuk mendapatkan informasi terbaru 
              seputar kegiatan dan pengumuman KAMAPA
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;