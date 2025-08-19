import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Kantor Pusat',
      details: [
        'Jl. Trans Kalimantan, Kuala Kurun',
        'Gunung Mas Kalimantan Tengah'
      ]
    },
    {
      icon: Phone,
      title: 'Nomor Telepon',
      details: [
        '(0967) 123-4567',
        '(0967) 123-4568',
        '+62 812-3456-7890 (WhatsApp)'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@kamapa.online',
        'layanan@kamapa.online',
        'keanggotaan@kamapa.online'
      ]
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: [
        'Senin - Jumat: 08:00 - 16:00 WITA',
        'Sabtu: 08:00 - 12:00 WITA',
        'Minggu: Tutup'
      ]
    }
  ];

  const offices = [
    {
      name: 'Kantor Pusat',
      address: 'Jl. Trans Kalimantan, Kuala Kurun, Gunung Mas Kalimantan Tengah',
      phone: '(0967) 123-4567',
      manager: 'Bpk. Johannes Wamafma'
    }
  ];

  const subjects = [
    'Informasi Keanggotaan',
    'Layanan Simpan Pinjam',
    'Konsultasi Bisnis',
    'Keluhan dan Saran',
    'Kemitraan',
    'Lainnya'
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Kami siap membantu Anda dengan segala pertanyaan dan kebutuhan 
              terkait layanan koperasi Kamapa
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-600">
                    Terima kasih telah menghubungi kami. Tim Kamapa akan segera merespons pesan Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Contoh: +62 812-3456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Pilih subjek pesan</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Kirim Pesan
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-teal-100 p-3 rounded-lg mr-4">
                        <info.icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-semibold text-teal-800 mb-3">Butuh Bantuan Segera?</h3>
                <p className="text-teal-700 mb-4">
                  Hubungi hotline 24/7 kami untuk bantuan darurat atau pertanyaan mendesak
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+6281234567890"
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-teal-700 transition-colors"
                  >
                    Hubungi Sekarang
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    className="border border-teal-600 text-teal-600 px-4 py-2 rounded-lg text-center font-medium hover:bg-teal-600 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lokasi Kantor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kamapa melayani Anda melalui jaringan kantor yang tersebar di seluruh Kabupaten Gunung Mas, Kalimantan Tengah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-600 mr-2" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-600 mr-2" />
                    <p className="text-gray-600 text-sm">Manager: {office.manager}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Temukan Kami</h2>
            <p className="text-gray-600">Lokasi kantor pusat Kamapa di Kuala Kurun, Gunung Mas</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Peta Interaktif akan ditampilkan di sini</p>
                <p className="text-sm text-gray-500">
                  Jl. Trans Kalimantan, Kuala Kurun, Gunung Mas Kalimantan Tengah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan-pertanyaan umum seputar Kamapa
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Bagaimana cara menjadi anggota Kamapa?
              </h3>
              <p className="text-gray-600">
                Anda dapat mendaftar sebagai anggota dengan datang langsung ke kantor Kamapa terdekat 
                dengan membawa dokumen yang diperlukan seperti KTP, KK, dan pas foto.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Apa saja layanan yang tersedia di Kamapa?
              </h3>
              <p className="text-gray-600">
                Kamapa menyediakan layanan simpan pinjam, unit usaha, konsultasi bisnis, 
                pelatihan kewirausahaan, dan layanan digital untuk kemudahan anggota.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Berapa minimal simpanan untuk menjadi anggota?
              </h3>
              <p className="text-gray-600">
                Simpanan pokok minimal Rp 100.000 dan simpanan wajib Rp 50.000 per bulan 
                untuk anggota biasa. Tersedia juga paket keanggotaan premium dan korporat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
