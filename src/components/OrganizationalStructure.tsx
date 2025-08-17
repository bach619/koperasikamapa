

const OrganizationalStructure = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">PENGURUS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-semibold text-blue-700">Pasihan, T. A</p>
            <p className="text-gray-600">Ketua</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-semibold text-blue-700">Sagau G. Ranying</p>
            <p className="text-gray-600">Wakil Ketua</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-semibold text-blue-700">Bebendi</p>
            <p className="text-gray-600">Sekretaris</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-semibold text-blue-700">Sumadi</p>
            <p className="text-gray-600">Wakil Sekretaris</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-semibold text-blue-700">Wartewi Guntar</p>
            <p className="text-gray-600">Bendahara</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">PENGAWAS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <p className="font-semibold text-green-700">Jhon Millu, S. Hut</p>
            <p className="text-gray-600">Ketua</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <p className="font-semibold text-green-700">Yanfrit Friyadi, S. Hut</p>
            <p className="text-gray-600">Sekretaris</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <p className="font-semibold text-green-700">Jaja Unan</p>
            <p className="text-gray-600">Anggota</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructure;
