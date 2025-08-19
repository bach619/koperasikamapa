import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/layanan', label: 'Layanan' },
    { path: '/keanggotaan', label: 'Keanggotaan' },
    { path: '/berita', label: 'Berita' },
    { path: '/kontak', label: 'Kontak' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
<header className="bg-white shadow-md sticky top-0 z-50">
  {/* Ribbon */}
  <div className="bg-primary-600 text-white text-center py-1 text-sm font-medium">
    Koperasi Kapakat Manggatang Panatau - Gunung Mas
  </div>
  
  {/* Header content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 md:h-20">
      {/* Logo */}
<Link to="/" className="flex items-center">
        <img 
          src="/logo.png" 
          alt="Logo Koperasi Kamapa" 
          className="h-12 md:h-16 lg:h-20 mr-2 md:mr-3"
        />
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900">KAMAPA</h1>
          <p className="text-[10px] md:text-xs text-gray-600">Koperasi Kapakat Manggatang Panatau</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-1.5 md:px-2.5 py-2.5 text-xs md:text-sm font-medium transition-colors duration-200 ${
              isActive(item.path)
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-700 hover:text-primary-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/portal-anggota"
          className="bg-primary-600 text-white px-2.5 md:px-3.5 py-2 rounded-md md:rounded-lg text-xs md:text-sm font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center"
        >
          Portal Anggota
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-700"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {/* Mobile Navigation */}
    <div className={`md:hidden border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
      isMenuOpen ? 'max-h-96' : 'max-h-0'
    }`}>
      <div className="px-2 pt-2 pb-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
              isActive(item.path)
                ? 'text-primary-600 bg-blue-50'
                : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/portal-anggota"
          onClick={() => setIsMenuOpen(false)}
          className="block bg-primary-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-700 transition-colors duration-200 mt-2"
        >
          Portal Anggota
        </Link>
      </div>
    </div>
  </div>
</header>
  );
};

export default Header;
