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
    Koperasi Kapakat Manggatang Utus - Gunung Mas
  </div>
  
  {/* Header content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
<Link to="/" className="flex items-center">
        <img 
          src="/logo.png" 
          alt="Logo Koperasi Kamapa" 
          className="h-16 md:h-20 mr-3"
        />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">KAMAPA</h1>
          <p className="text-xs md:text-sm text-gray-600">Koperasi Kapakat Manggatang Utus</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4 lg:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-2 md:px-3 py-3 text-sm font-medium transition-colors duration-200 ${
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
          className="bg-primary-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
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
    {isMenuOpen && (
      <div className="md:hidden border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-2">
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
            className="block bg-primary-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-700 transition-colors duration-200 mt-4"
          >
            Portal Anggota
          </Link>
        </div>
      </div>
    )}
  </div>
</header>
  );
};

export default Header;
