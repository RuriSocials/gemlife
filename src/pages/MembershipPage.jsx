import React from 'react';

const MembershipPage = () => {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="max-w-[1000px] w-full">
        <h1 className="font-heading text-4xl mb-16 text-center">Gem Lifer Membership</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Log In */}
          <div className="bg-surface p-12 rounded-lg border border-gray-200 text-center flex flex-col items-center">
             <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
               </svg>
             </div>
             <h2 className="text-2xl font-bold mb-4">Gem Life App Log In</h2>
             <p className="text-secondary mb-8 leading-relaxed">
               Access your digital gem collection and view your 3D gemstones.
             </p>
             <button className="bg-black text-white px-8 py-3 rounded hover:bg-accent transition-colors w-full md:w-auto">
               Log In to App
             </button>
             <p className="mt-4 text-xs text-secondary">
               *Available for existing Gem Lifers
             </p>
          </div>

          {/* Right Column: Join */}
          <div className="bg-surface p-12 rounded-lg border border-gray-200 text-center flex flex-col items-center">
             <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
               </svg>
             </div>
             <h2 className="text-2xl font-bold mb-4">Become A Gem Lifer</h2>
             <p className="text-secondary mb-8 leading-relaxed">
               Join our private Facebook Group to connect with other Gem Lifers.
             </p>
             <button className="bg-white border border-black text-black px-8 py-3 rounded hover:bg-gray-50 transition-colors w-full md:w-auto">
               Join via Facebook
             </button>
             <div className="mt-8 text-left text-sm text-secondary bg-white p-4 rounded border border-gray-100 w-full">
               <strong className="block text-black mb-2">How to Register:</strong>
               <ul className="list-disc pl-4 space-y-1">
                 <li>Purchase a gemstone at <span className="text-accent">RURI.shop</span></li>
                 <li>Receive invitation email with QR code</li>
                 <li>Log in to create your digital gem account</li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
