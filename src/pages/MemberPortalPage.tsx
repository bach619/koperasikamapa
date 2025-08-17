import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, CreditCard, TrendingUp, PieChart, Clock, Download, Settings, LogOut } from 'lucide-react';

const MemberPortalPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    memberNumber: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically authenticate with your backend
    console.log('Login attempt:', loginData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ memberNumber: '', password: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Mock member data - in real app, this would come from API
  const memberData = {
    name: 'Bapak John Doe',
    memberNumber: 'KMP240001',
    memberSince: 'Januari 2020',
    status: 'Aktif',
    photo: null
  };

  const accountSummary = {
    totalSavings: 15750000,
    totalLoans: 8500000,
    availableCredit: 25000000,
    shuThisYear: 750000
  };

  const recentTransactions = [
    { id: 1, date: '2024-03-15', type: 'Simpanan Wajib', amount: 200000, status: 'Berhasil' },
    { id: 2, date: '2024-03-10', type: 'Pencairan Pinjaman', amount: -5000000, status: 'Berhasil' },
    { id: 3, date: '2024-03-01', type: 'Simpanan Sukarela', amount: 1000000, status: 'Berhasil' },
    { id: 4, date: '2024-02-28', type: 'Angsuran Pinjaman', amount: -850000, status: 'Berhasil' },
    { id: 5, date: '2024-02-15', type: 'Simpanan Wajib', amount: 200000, status: 'Berhasil' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Portal Anggota Kamapa</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Akses informasi akun dan layanan khusus anggota dengan mudah dan aman
              </p>
            </div>
          </div>
        </section>

        {/* Login Form */}
        <section className="py-20">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Masuk ke Portal Anggota</h2>
                <p className="text-gray-600 mt-2">Gunakan nomor anggota dan password Anda</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="memberNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Anggota
                  </label>
                  <input
                    type="text"
                    id="memberNumber"
                    name="memberNumber"
                    required
                    value={loginData.memberNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Contoh: KMP240001"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      required
                      value={loginData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                      placeholder="Masukkan password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Ingat saya
                    </label>
                  </div>

                  <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                    Lupa password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Masuk
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Belum menjadi anggota?{' '}
                  <a href="/keanggotaan" className="text-blue-600 hover:text-blue-500 font-medium">
                    Daftar sekarang
                  </a>
                </p>
              </div>

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Keamanan:</strong> Jangan pernah memberikan nomor anggota dan password Anda kepada siapapun. 
                  Kamapa tidak akan pernah meminta informasi login melalui email atau telepon.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Member Dashboard
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Selamat Datang, {memberData.name}</h1>
                <p className="text-blue-100">
                  No. Anggota: {memberData.memberNumber} • Anggota sejak {memberData.memberSince}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                {memberData.status}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Keluar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Account Summary */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Simpanan</p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(accountSummary.totalSavings)}
                  </p>
                </div>
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Pinjaman</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {formatCurrency(accountSummary.totalLoans)}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Limit Kredit</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatCurrency(accountSummary.availableCredit)}
                  </p>
                </div>
                <PieChart className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">SHU 2024</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {formatCurrency(accountSummary.shuThisYear)}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Transaksi Terbaru</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Lihat Semua
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-gray-900">{transaction.type}</p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                        </p>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Aksi Cepat</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Ajukan Pinjaman</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Transfer Simpanan</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Unduh Laporan</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <Settings className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Pengaturan</span>
                  </button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Informasi Penting</h3>
                  <p className="text-sm text-blue-800">
                    Rapat Anggota Tahunan akan diselenggarakan pada tanggal 25 Maret 2024. 
                    Pastikan Anda hadir untuk mendapatkan informasi terbaru dan laporan keuangan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberPortalPage;