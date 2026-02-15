import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXHIBITIONS } from '../data/exhibitions';

const ExhibitionPage = () => {
  const { id } = useParams();
  
  // Flatten exhibitions to find by ID, or default to first major one
  const allExhibitions = [...EXHIBITIONS.major, ...EXHIBITIONS.minor];
  const exhibition = allExhibitions.find(e => e.id === Number(id)) || EXHIBITIONS.major[0];

  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-stone-50 text-black pt-20">
      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Background Image - Full Color, Less Obstructed */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out hover:scale-105"
          style={{ backgroundImage: `url(${exhibition.image || exhibition.heroImage})` }}
        />
        
        {/* Gradient: Subtle Text protection at bottom only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/90" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent" />

        <div className="relative z-10 max-w-[900px] text-center px-4 mb-4">
          <span className="inline-block bg-[#b8860b] text-white px-4 py-1 text-xs tracking-[0.2em] mb-6 uppercase shadow-sm">
             Special Exhibition
          </span>
          <h1 className="font-heading text-5xl md:text-8xl mb-4 leading-tight text-black drop-shadow-sm">
            {exhibition.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#b8860b] font-body tracking-wide font-medium">
            {exhibition.date}
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-[#b8860b]/20 mb-16">
        <div className="max-w-[600px] mx-auto flex justify-center gap-12">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`py-4 text-xs uppercase tracking-[0.2em] transition-colors relative ${
              activeTab === 'overview' ? 'text-black font-medium' : 'text-gray-400 hover:text-[#b8860b]'
            }`}
          >
            Overview
            {activeTab === 'overview' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b8860b]" />}
          </button>
          <button 
            onClick={() => setActiveTab('exhibit')}
            className={`py-4 text-xs uppercase tracking-[0.2em] transition-colors relative ${
              activeTab === 'exhibit' ? 'text-black font-medium' : 'text-gray-400 hover:text-[#b8860b]'
            }`}
          >
            Exhibit
            {activeTab === 'exhibit' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b8860b]" />}
          </button>
        </div>
      </nav>

      <div className="max-w-[1000px] mx-auto px-4 pb-24">
        {/* Overview Content */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in space-y-24">
            <section className="text-center max-w-[700px] mx-auto">
              <p className="text-lg leading-loose text-gray-600 font-light">
                {exhibition.description}
              </p>
            </section>

            {/* Placeholder for Narrative Content */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1600080972464-8e5f35f63d88?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" alt="Narrative" />
               </div>
               <div className="space-y-6">
                 <h3 className="text-2xl font-heading text-black">A Legacy Preserved</h3>
                 <p className="leading-relaxed text-gray-500 font-light">
                   Spanning over a century, this collection represents not just wealth, but a deep spiritual connection to the earth's treasures. 
                   Each stone tells a story of the hands that mined it and the eyes that first beheld its beauty.
                 </p>
               </div>
            </section>

            {/* Three images grid as seen in screenshot (bottom part) */}
            <section className="grid grid-cols-3 gap-4">
               <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover" alt="Detail 1" />
               </div>
               <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Detail 2" />
               </div>
               <div className="aspect-square bg-gray-100 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover" alt="Detail 3" />
               </div>
            </section>
          </div>
        )}

        {/* Exhibit Content */}
        {activeTab === 'exhibit' && (
          <div className="animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[1, 2, 3, 4, 5, 6].map((item) => (
                 <div key={item} className="group cursor-pointer text-center">
                   <div className="aspect-square bg-gray-50 overflow-hidden mb-6 relative">
                     <img 
                       src={`https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?q=80&w=400&fit=crop`} 
                       alt="Artifact" 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                     />
                   </div>
                   <h4 className="font-heading text-lg mb-2">Artifact #{item}</h4>
                   <p className="text-xs text-gray-400 uppercase tracking-widest">Origin Unknown</p>
                 </div>
               ))}
             </div>
          </div>
        )}
      
      {/* Footer is handled by MainLayout, but we kept the related events section */}
        <section className="mt-32 pt-16 border-t border-gray-100 text-center">
           <h3 className="font-heading text-2xl mb-8">Related Events</h3>
           <div className="inline-block bg-white border border-gray-200 p-8 max-w-[600px] w-full hover:border-[#b8860b] transition-colors group cursor-pointer shadow-sm">
              <span className="block text-[#b8860b] text-xs uppercase tracking-widest mb-2">Special Exhibition Shop</span>
              <h4 className="text-xl font-bold mb-4">Purchase from the Collection on Makuake</h4>
              <p className="text-gray-500 text-sm mb-6">
                Limited edition cuts and jewelry pieces featured in this exhibition are available for purchase.
              </p>
              <a href="#" className="inline-block bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#b8860b] transition-colors">
                View on Makuake
              </a>
           </div>
        </section>
      </div>
    </div>
  );
};

export default ExhibitionPage;
