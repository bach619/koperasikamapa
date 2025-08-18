import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="h-full bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Bergabung dengan Kamapa?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Wujudkan impian ekonomi yang lebih baik bersama koperasi terpercaya di Kabupaten Gunung Mas. 
          Mari bergabung dan rasakan manfaatnya!
        </p>
        <Link
          to="/contact"
          className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
        >
          Hubungi Kami Sekarang
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
