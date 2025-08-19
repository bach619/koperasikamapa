import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
<footer className="bg-dark text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
      {/* About Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Koperasi Kamapa</h3>
        <p className="text-gray-300 mb-4">
          Berkomitmen untuk meningkatkan 
          kesejahteraan ekonomi anggota melalui layanan koperasi yang profesional.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
        <ul className="space-y-2">
          <li><a href="/" className="text-gray-300 hover:text-primary-400 transition-colors">Beranda</a></li>
          <li><a href="/tentang-kami" className="text-gray-300 hover:text-primary-400 transition-colors">Tentang Kami</a></li>
          <li><a href="/layanan" className="text-gray-300 hover:text-primary-400 transition-colors">Layanan</a></li>
          <li><a href="/keanggotaan" className="text-gray-300 hover:text-primary-400 transition-colors">Keanggotaan</a></li>
          <li><a href="/berita" className="text-gray-300 hover:text-primary-400 transition-colors">Berita</a></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
        <ul className="space-y-2">
          <li><span className="text-gray-300">Simpan Pinjam</span></li>
          <li><span className="text-gray-300">Unit Usaha</span></li>
          <li><span className="text-gray-300">Konsultasi Bisnis</span></li>
          <li><span className="text-gray-300">Pelatihan Koperasi</span></li>
          <li><span className="text-gray-300">Layanan Digital</span></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Kontak</h3>
        <div className="space-y-3">
<div className="flex items-start space-x-3">
  <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
  <span className="text-gray-300 text-xs md:text-sm">
    Jl. Trans Kalimantan<br />
    Kuala Kurun, Gunung Mas Kalimantan Tengah
  </span>
</div>
<div className="flex items-center space-x-3">
  <Phone className="h-5 w-5 text-primary-400" />
  <span className="text-gray-300 text-xs md:text-sm">(62812) 123-4567</span>
</div>
<div className="flex items-center space-x-3">
  <Mail className="h-5 w-5 text-primary-400" />
  <span className="text-gray-300 text-xs md:text-sm">info@kamapa.online</span>
</div>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p className="text-gray-400 text-sm">
        &copy; 2024 Kamapa (Kapakat Mmanggatang Utus). Powered by Boby Mihing
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
