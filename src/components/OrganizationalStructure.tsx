import { Mail } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  position: string;
  email: string;
  phone: string;
  avatarBg?: string;
  photoUrl?: string;
}

const ProfileCard = ({ name, position, email, phone, avatarBg = 'bg-gradient-to-br from-blue-500 to-blue-700', photoUrl }: ProfileCardProps) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
        backgroundSize: '25px 25px'
      }} />
    </div>
    
  <div className="relative z-10 flex flex-col h-full">
      <div>
        {/* Avatar with photo */}
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-500">
          {photoUrl ? (
            <img 
              src={photoUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full ${avatarBg} flex items-center justify-center`}>
              <div className="text-white text-3xl font-bold">
                {name.charAt(0)}
              </div>
            </div>
          )}
        </div>
        
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-1 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
      </div>
      
      {/* Position and contact info at the bottom */}
      <div className="mt-auto flex flex-col items-center">
        {/* Position */}
        <p className="text-blue-600 font-semibold text-center mb-3">{position}</p>
        
        {/* Contact info - centered */}
        <div className="flex flex-col items-center gap-2 mt-3">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-1.5 text-blue-500 flex-shrink-0" />
            <span>{email}</span>
          </div>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <i className="fa fa-whatsapp mr-1.5 text-blue-500 flex-shrink-0" aria-hidden="true"></i>
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Hover effect overlay */}
    <div className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-gradient-to-br from-blue-50/20 to-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
  </div>
);

const OrganizationalStructure = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl">
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-2">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Pengurus Kamapa
          </span>
        </h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Tim profesional yang mengelola dan mengembangkan koperasi dengan integritas dan dedikasi tinggi
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <ProfileCard 
            name="Pasihan, T. A" 
            position="Ketua" 
            email="pasihan@kamapa.online" 
            phone="+62 812-3456-7890"
            avatarBg="bg-gradient-to-br from-amber-500 to-orange-500"
            photoUrl="https://via.placeholder.com/80?text=Pasihan"
          />
          <ProfileCard 
            name="Sagau G. Ranying" 
            position="Wakil Ketua" 
            email="sagau@kamapa.online" 
            phone="+62 812-3456-7891"
            avatarBg="bg-gradient-to-br from-blue-500 to-cyan-500"
            photoUrl="https://via.placeholder.com/80?text=Sagau"
          />
          <ProfileCard 
            name="Bebendi" 
            position="Sekretaris" 
            email="bebendi@kamapa.online" 
            phone="+62 812-3456-7892"
            avatarBg="bg-gradient-to-br from-green-500 to-teal-500"
            photoUrl="https://via.placeholder.com/80?text=Bebendi"
          />
          <ProfileCard 
            name="Sumadi" 
            position="Wakil Sekretaris" 
            email="sumadi@kamapa.online" 
            phone="+62 812-3456-7893"
            avatarBg="bg-gradient-to-br from-purple-500 to-pink-500"
            photoUrl="https://via.placeholder.com/80?text=Sumadi"
          />
          <ProfileCard 
            name="Wartewi Guntar" 
            position="Bendahara" 
            email="wartewi@kamapa.online" 
            phone="+62 812-3456-7894"
            avatarBg="bg-gradient-to-br from-red-500 to-orange-500"
            photoUrl="https://via.placeholder.com/80?text=Wartewi"
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-2">
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Pengawas Kamapa
          </span>
        </h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Tim pengawas yang memastikan transparansi dan akuntabilitas pengelolaan koperasi
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProfileCard 
            name="Jhon Millu, S. Hut" 
            position="Ketua" 
            email="jhon@kamapa.online" 
            phone="+62 812-3456-7895"
            avatarBg="bg-gradient-to-br from-indigo-500 to-purple-500"
            photoUrl="https://via.placeholder.com/80?text=Jhon"
          />
          <ProfileCard 
            name="Yanfrit Friyadi, S. Hut" 
            position="Sekretaris" 
            email="yanfrit@kamapa.online" 
            phone="+62 812-3456-7896"
            avatarBg="bg-gradient-to-br from-teal-500 to-cyan-500"
            photoUrl="https://via.placeholder.com/80?text=Yanfrit"
          />
          <ProfileCard 
            name="Jaja Unan" 
            position="Anggota" 
            email="jaja@kamapa.online" 
            phone="+62 812-3456-7897"
            avatarBg="bg-gradient-to-br from-amber-500 to-yellow-500"
            photoUrl="https://via.placeholder.com/80?text=Jaja"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructure;
