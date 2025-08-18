import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-accent text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
          Siap Bergabung dengan Kamapa?
        </h2>
        <p className="text-sm md:text-base lg:text-lg mb-5 md:mb-6 max-w-2xl mx-auto">
          Wujudkan impian ekonomi yang lebih baik bersama koperasi terpercaya di Kabupaten Gunung Mas. 
          Mari bergabung dan rasakan manfaatnya!
        </p>
        <Link
          to="/kontak"
          className="bg-white text-accent px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center text-sm md:text-base"
        >
          Hubungi Kami Sekarang
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
