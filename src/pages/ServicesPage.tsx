import React from 'react';
import { Banknote, TrendingUp, BookOpen, Briefcase, Smartphone, Users } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Banknote,
      title: 'Simpan Pinjam',
      description: 'Layanan simpanan dan pinjaman dengan bunga kompetitif untuk kebutuhan anggota',
      features: [
        'Simpanan Pokok dan Wajib',
        'Simpanan Sukarela',
        'Pinjaman Usaha Produktif',
        'Pinjaman Konsumtif',
        'Pinjaman Pendidikan'
      ],
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Unit Usaha',
      description: 'Pengembangan unit usaha produktif untuk meningkatkan pendapatan anggota',
      features: [
        'Toko Serba Ada',
        'Unit Pengolahan Hasil Pertanian',
        'Warung Sembako',
        'Jasa Transportasi',
        'Unit Perdagangan'
      ],
      color: 'green'
    },
    {
      icon: BookOpen,
      title: 'Pendidikan & Pelatihan',
      description: 'Program pelatihan dan pendidikan untuk meningkatkan kapasitas anggota',
      features: [
        'Pelatihan Kewirausahaan',
        'Workshop Koperasi',
        'Seminar Ekonomi',
        'Pelatihan Teknis',
        'Pendampingan Usaha'
      ],
      color: 'purple'
    },
    {
      icon: Briefcase,
      title: 'Konsultasi Bisnis',
      description: 'Layanan konsultasi untuk pengembangan usaha dan bisnis anggota',
      features: [
        'Analisis Kelayakan Usaha',
        'Penyusunan Proposal Bisnis',
        'Konsultasi Keuangan',
        'Strategi Pemasaran',
        'Manajemen Usaha'
      ],
      color: 'orange'
    },
    {
      icon: Smartphone,
      title: 'Layanan Digital',
      description: 'Platform digital untuk kemudahan akses layanan koperasi',
      features: [
        'Mobile Banking',
        'Internet Banking',
        'Aplikasi KAMAPA',
        'E-Wallet',
        'Pembayaran Digital'
      ],
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Layanan Anggota',
      description: 'Berbagai layanan khusus untuk kenyamanan dan kemudahan anggota',
      features: [
        'Customer Service 24/7',
        'Layanan Antar Jemput',
        'Program Loyalty',
        'Asuransi Anggota',
        'Event & Gathering'
      ],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: {bg: string, text: string, hover: string}} = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'group-hover:bg-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'group-hover:bg-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'group-hover:bg-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'group-hover:bg-orange-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'group-hover:bg-indigo-600' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', hover: 'group-hover:bg-teal-600' }
    };
    return colorMap[color];
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan KAMAPA</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Berbagai layanan komprehensif untuk mendukung kemajuan ekonomi dan 
              kesejahteraan anggota koperasi
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 group hover:shadow-xl transition-all duration-300">
                  <div className={`${colorClasses.bg} ${colorClasses.hover} w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300`}>
                    <service.icon className={`h-8 w-8 ${colorClasses.text} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Fasilitas:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className={`w-2 h-2 ${colorClasses.text.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Mengakses Layanan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proses mudah dan cepat untuk mendapatkan layanan terbaik dari KAMAPA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pendaftaran</h3>
              <p className="text-gray-600 text-sm">Daftar sebagai anggota KAMAPA dengan membawa dokumen yang diperlukan</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Konsultasi</h3>
              <p className="text-gray-600 text-sm">Konsultasi dengan petugas untuk menentukan layanan yang sesuai kebutuhan</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pengajuan</h3>
              <p className="text-gray-600 text-sm">Ajukan permohonan layanan dengan melengkapi formulir dan persyaratan</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aktivasi</h3>
              <p className="text-gray-600 text-sm">Layanan diaktivasi setelah verifikasi dan persetujuan dari tim KAMAPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Informasi Lebih Lanjut?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tim customer service kami siap membantu Anda memilih layanan yang tepat 
            sesuai kebutuhan dan kondisi finansial Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Hubungi Kami
            </a>
            <a
              href="/keanggotaan"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Daftar Anggota
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;