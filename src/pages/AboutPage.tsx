import { Target, Eye, Heart, Award, Users } from 'lucide-react';
import OrganizationalStructure from '../components/OrganizationalStructure';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Kebersamaan',
      description: 'Membangun solidaritas dan gotong royong dalam setiap langkah'
    },
    {
      icon: Award,
      title: 'Profesionalisme',
      description: 'Menjalankan usaha dengan standar pelayanan yang tinggi'
    },
    {
      icon: Users,
      title: 'Transparansi',
      description: 'Keterbukaan dalam pengelolaan dan pertanggungjawaban'
    },
    {
      icon: Target,
      title: 'Inovasi',
      description: 'Mengembangkan produk dan layanan sesuai kebutuhan anggota'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Pendirian Koperasi Kamapa dengan 50 anggota pendiri' },
    { year: '2012', event: 'Pembukaan layanan simpan pinjam pertama' },
    { year: '2015', event: 'Ekspansi ke 3 kecamatan di Kabupaten Gunung Mas' },
    { year: '2018', event: 'Peluncuran layanan digital dan mobile banking' },
    { year: '2021', event: 'Pencapaian 5,000 anggota aktif' },
    { year: '2024', event: 'Pengembangan program ekonomi digital' }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang </h1>
      <p className="text-xl max-w-3xl mx-auto">
        Mengenal lebih dekat KAPAKAT MANGGATANG UTUS yang telah berkembang 
        sebagai mitra strategis Perhutanan Sosial di Kabupaten Gunung Mas
      </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah Koperasi Kamapa</h2>
              <p className="text-gray-600 mb-6">
                Kamapa (KAPAKAT MANGGATANG UTUS) didirikan pada tahun 2009 dengan visi 
                membangun ekonomi kerakyatan yang berkelanjutan di Kabupaten Gunung Mas. 
                Sebagai mitra strategis Perhutanan Sosial, kami berkomitmen untuk mengembangkan 
                usaha non-kayu di wilayah Perhutanan Sosial Kabupaten Gunung Mas.
              </p>
              <p className="text-gray-600 mb-6">
                Kami bekerja sama dengan 33 Kelompok Perhutanan Sosial yang menjadi mitra 
                strategis dan anggota koperasi. Dalam perjalanannya, Kamapa telah berkembang 
                menjadi koperasi terpercaya yang terus berinovasi dalam memberikan pelayanan 
                terbaik dan mengembangkan program-program yang sesuai dengan kebutuhan masyarakat lokal.
              </p>
              <p className="text-gray-600">
                Saat ini, Kamapa tidak hanya melayani simpan pinjam, tetapi juga mengembangkan 
                unit usaha produktif berbasis sumber daya hutan non-kayu, program pelatihan 
                pengelolaan hasil hutan, dan layanan konsultasi bisnis untuk mendorong 
                pertumbuhan ekonomi anggota dan kelestarian lingkungan.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perjalanan Kami</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {milestone.year}
                    </div>
                    <p className="text-gray-600 flex-1">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Visi Kami</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Menjadi koperasi terdepan di Kabupaten Gunung Mas yang mampu meningkatkan 
                kesejahteraan ekonomi anggota melalui pelayanan yang profesional, 
                inovatif, dan berkelanjutan."
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Misi Kami</h2>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memberikan layanan simpan pinjam yang mudah, aman, dan menguntungkan
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mengembangkan unit usaha produktif untuk meningkatkan pendapatan anggota
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Menyelenggarakan program pendidikan dan pelatihan koperasi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Membangun kemitraan strategis untuk kemajuan ekonomi Kabupaten Gunung Mas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kamapa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap kegiatan dan pelayanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:shadow-xl p-6 rounded-lg transition-all duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Struktur Organisasi
            </h2>
            <p className="text-xl text-gray-600">
              Tim berpengalaman yang memimpin Kamapa menuju masa depan yang lebih baik
            </p>
          </div>
          <OrganizationalStructure />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
