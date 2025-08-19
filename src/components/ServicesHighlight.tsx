import { Briefcase, HandCoins, LineChart, Handshake, Users, ShieldCheck } from 'lucide-react';

const ServicesHighlight = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Simpanan',
      description: 'Program simpanan dengan bunga kompetitif untuk membantu anggota menabung dengan aman'
    },
    {
      icon: HandCoins,
      title: 'Pinjaman',
      description: 'Pinjaman dengan suku bunga rendah untuk mendukung usaha anggota'
    },
    {
      icon: LineChart,
      title: 'Investasi',
      description: 'Peluang investasi yang menguntungkan dengan risiko minimal'
    },
    {
      icon: Handshake,
      title: 'Pembiayaan',
      description: 'Pembiayaan usaha untuk pengembangan bisnis anggota'
    },
    {
      icon: Users,
      title: 'Pelatihan',
      description: 'Program pelatihan untuk meningkatkan kapasitas usaha anggota'
    },
    {
      icon: ShieldCheck,
      title: 'Asuransi',
      description: 'Perlindungan asuransi untuk anggota dan keluarga'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Unggulan Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan keuangan yang dirancang untuk mendukung kesejahteraan anggota
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-amber-600 mb-4">
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
