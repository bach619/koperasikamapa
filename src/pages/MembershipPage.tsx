import React from 'react';
import { CheckCircle, Users, Gift, Shield, TrendingUp, FileText, CreditCard, Clock } from 'lucide-react';

const MembershipPage = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: 'Layanan Simpan Pinjam',
      description: 'Akses mudah ke layanan simpanan dan pinjaman dengan bunga kompetitif'
    },
    {
      icon: Gift,
      title: 'Bonus dan Dividen',
      description: 'Mendapatkan bagian dari Sisa Hasil Usaha (SHU) setiap tahunnya'
    },
    {
      icon: Shield,
      title: 'Perlindungan Asuransi',
      description: 'Proteksi jiwa dan kesehatan untuk anggota dan keluarga'
    },
    {
      icon: TrendingUp,
      title: 'Program Investasi',
      description: 'Kesempatan berinvestasi dalam unit usaha koperasi yang menguntungkan'
    },
    {
      icon: Users,
      title: 'Jaringan Bisnis',
      description: 'Akses ke komunitas pengusaha dan peluang kemitraan bisnis'
    },
    {
      icon: Clock,
      title: 'Layanan Prioritas',
      description: 'Mendapat prioritas dalam pelayanan dan akses layanan khusus anggota'
    }
  ];

  const membershipTypes = [
    {
      type: 'Anggota Biasa',
      price: 'Rp 500.000',
      features: [
        'Simpanan pokok Rp 100.000',
        'Simpanan wajib Rp 50.000/bulan',
        'Akses semua layanan dasar',
        'Hak suara dalam rapat anggota',
        'Bagian SHU tahunan',
        'Asuransi dasar'
      ],
      popular: false
    },
    {
      type: 'Anggota Premium',
      price: 'Rp 2.000.000',
      features: [
        'Simpanan pokok Rp 500.000',
        'Simpanan wajib Rp 200.000/bulan',
        'Akses semua layanan premium',
        'Prioritas dalam pelayanan',
        'Bagian SHU lebih besar',
        'Asuransi komprehensif',
        'Konsultasi bisnis gratis',
        'Akses program investasi khusus'
      ],
      popular: true
    },
    {
      type: 'Anggota Korporat',
      price: 'Rp 10.000.000',
      features: [
        'Simpanan pokok Rp 2.000.000',
        'Simpanan wajib Rp 500.000/bulan',
        'Layanan korporat lengkap',
        'Account manager khusus',
        'Bagian SHU maksimal',
        'Asuransi grup karyawan',
        'Program kemitraan bisnis',
        'Akses semua unit usaha'
      ],
      popular: false
    }
  ];

  const requirements = [
    'Warga Negara Indonesia (WNI)',
    'Berusia minimal 17 tahun',
    'Berdomisili di Kabupaten Gunung Mas atau sekitarnya',
    'Fotokopi KTP yang masih berlaku',
    'Fotokopi Kartu Keluarga (KK)',
    'Pas foto 3x4 sebanyak 2 lembar',
    'Mengisi formulir pendaftaran',
    'Membayar simpanan pokok dan wajib'
  ];

  const registrationSteps = [
    {
      step: 1,
      title: 'Kunjungi Kantor Kamapa',
      description: 'Datang ke kantor cabang terdekat dengan membawa dokumen yang diperlukan'
    },
    {
      step: 2,
      title: 'Isi Formulir Pendaftaran',
      description: 'Lengkapi formulir pendaftaran dengan data yang akurat dan benar'
    },
    {
      step: 3,
      title: 'Verifikasi Dokumen',
      description: 'Petugas akan memverifikasi kelengkapan dan keabsahan dokumen Anda'
    },
    {
      step: 4,
      title: 'Pembayaran Awal',
      description: 'Bayar simpanan pokok dan simpanan wajib sesuai jenis keanggotaan'
    },
    {
      step: 5,
      title: 'Aktivasi Akun',
      description: 'Terima buku anggota dan akses ke layanan digital Kamapa'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Keanggotaan Kamapa</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Bergabunglah dengan komunitas koperasi terpercaya dan nikmati berbagai 
              keuntungan eksklusif untuk anggota
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keuntungan Menjadi Anggota
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai benefit eksklusif yang bisa Anda dapatkan sebagai anggota Kamapa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group hover:shadow-xl p-6 rounded-lg transition-all duration-300 border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jenis Keanggotaan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih jenis keanggotaan yang sesuai dengan kebutuhan dan kemampuan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((membership, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${membership.popular ? 'border-4 border-purple-600 transform scale-105' : ''}`}>
                {membership.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      PALING POPULER
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{membership.type}</h3>
                  <div className="text-3xl font-bold text-purple-600">{membership.price}</div>
                  <p className="text-gray-600 text-sm mt-1">Kontribusi awal</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {membership.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  membership.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Pilih {membership.type}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Syarat Keanggotaan</h2>
              <p className="text-gray-600 mb-8">
                Persyaratan yang harus dipenuhi untuk menjadi anggota Kamapa:
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <FileText className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Steps */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proses Pendaftaran</h2>
              <p className="text-gray-600 mb-8">
                Langkah-langkah mudah untuk menjadi anggota Kamapa:
              </p>
              <div className="space-y-6">
                {registrationSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Bergabung dengan Kamapa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mulai perjalanan finansial Anda bersama koperasi terpercaya di Kabupaten Gunung Mas. 
            Dapatkan akses ke berbagai layanan dan benefit eksklusif anggota.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Daftar Sekarang
            </a>
            <a
              href="/kontak"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
