import React from 'react';
import { Link } from 'react-router-dom';
import { EXHIBITIONS } from '../data/exhibitions';
import { EVENTS } from '../data/events';
import { STORIES } from '../data/stories';

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-[#f0f0f0] text-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-[1000px] w-full z-10">
        <h1 className="font-sans font-bold text-[4rem] md:text-[6rem] leading-none mb-12 tracking-tighter">
          GemLife.world
        </h1>
        
        {/* Conceptual Grid - Abstract representation of the line art grid in screenshots */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-80">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square border border-black/20 flex items-center justify-center p-4">
              <div className={`w-full h-full rounded-full border-2 border-black/10 ${i % 2 === 0 ? 'rounded-tl-none' : 'rounded-br-none'}`} />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t-2 border-black pt-8">
          <div className="mb-8 md:mb-0">
            <span className="block font-bold text-xl uppercase tracking-widest">Gem Life as Art</span>
            <span className="block font-serif italic text-lg text-black/60">MoGA</span>
          </div>
          <p className="max-w-[400px] text-sm md:text-base leading-relaxed font-medium text-black/70">
            "Life as art" means intentionally living with creativity, purpose, and self-expression. 
            The star is Life, not Gems.
          </p>
        </div>
      </div>
      
      {/* Background texture or subtle element */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
    </section>
  );
};

const ExhibitionSection = () => (
  <section className="py-24 bg-bg text-white">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="font-heading text-3xl mb-12 border-l-4 border-accent pl-4">Special Exhibition</h2>
      
      {/* Major Exhibitions - 2 Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {EXHIBITIONS.major.map(ex => (
          <Link to={ex.link} key={ex.id} className="group block bg-[#1a2b3c] overflow-hidden relative aspect-[4/3] transition-transform hover:-translate-y-1 duration-300">
             <img src={ex.image} alt={ex.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
             <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <span className="text-accent text-xs tracking-wider uppercase mb-2 border border-accent w-max px-2 py-0.5">{ex.subtitle}</span>
                <h3 className="text-2xl font-bold mb-2 leading-tight">{ex.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{ex.date}</p>
             </div>
          </Link>
        ))}
      </div>

      {/* Minor/Archive Exhibitions - 3 Column */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {EXHIBITIONS.minor.map(ex => (
          <div key={ex.id} className="bg-[#1a2b3c] aspect-square relative group overflow-hidden">
             {ex.image && <img src={ex.image} alt={ex.title} className="w-full h-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-110" />}
             <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <span className="block text-xs uppercase tracking-wider text-accent mb-1">{ex.subtitle}</span>
                <h4 className="font-bold text-lg leading-tight">{ex.title}</h4>
                {ex.date && <p className="text-xs text-gray-400 mt-1">{ex.date}</p>}
                {!ex.date && <p className="text-xs text-gray-500 mt-1">{ex.status}</p>}
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EventsSection = () => (
  <section className="py-24 bg-white text-black">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="font-heading text-3xl mb-12 border-l-4 border-accent pl-4">Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {EVENTS.map(event => (
          <div key={event.id} className="flex flex-col gap-4">
            <div className="aspect-video bg-gray-100 overflow-hidden relative group">
               <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               {event.type === 'makuake' && (
                 <div className="absolute top-4 left-4 bg-white px-3 py-1 font-bold text-xs tracking-wider shadow-md flex items-center gap-2">
                   <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                   Makuake
                 </div>
               )}
            </div>
            <div>
              <span className="text-accent font-bold text-sm mb-1 block">{event.subtitle}</span>
              <h3 className="text-xl font-bold mb-1">{event.title}</h3>
              {event.englishTitle && <p className="text-sm text-gray-500 mb-2 font-medium">{event.englishTitle}</p>}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {event.description}
              </p>
              {event.type === 'makuake' ? (
                 <span className="text-xs font-bold text-white bg-black px-4 py-2 inline-block">Makuake LP coming soon</span>
              ) : (
                 <span className="text-xs font-bold border-b border-black pb-0.5">Details coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

import { JOURNAL_ENTRIES } from '../data/journal';

// ... existing code ...

const JournalSection = () => (
  <section className="py-24 bg-surface text-black">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="mb-12 border-l-4 border-accent pl-4">
        <h2 className="font-heading text-3xl mb-2">Journal</h2>
        <p className="text-secondary text-sm">
          RURI members create and post content on Note, selectively publishing it on Gemlife.world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {JOURNAL_ENTRIES.map(post => (
          <a href={post.link} key={post.id} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
             <div className="aspect-video overflow-hidden relative">
               <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               {post.date && <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">{post.date}</span>}
             </div>
             <div className="p-4">
               <h3 className="font-bold text-sm mb-2 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                 {post.title}
               </h3>
               <div className="flex items-center gap-2 mt-3">
                 {post.avatar ? (
                   <img src={post.avatar} alt={post.author} className="w-5 h-5 rounded-full" />
                 ) : (
                   <div className="w-5 h-5 rounded-full bg-gray-200" />
                 )}
                 <span className="text-xs text-gray-500 truncate">{post.author}</span>
                 <div className="ml-auto flex items-center gap-1 text-gray-400 text-xs">
                   <span>♥</span> {post.likes}
                 </div>
               </div>
             </div>
          </a>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white border border-gray-100 rounded-lg">
         <h4 className="font-bold text-sm mb-4 text-gray-700">Planned Journals (Coming Soon)</h4>
         <ul className="space-y-2 text-sm text-gray-600">
           <li>1. Cut to order gem from rough stone (Fujimori)</li>
           <li>2. The Ruby Family's Gem Life: A Four-Generation History (Pandula/Fujimori)</li>
           <li>3. Gemstone Traceability and Digital Gem (Fujimori)</li>
         </ul>
      </div>
    </div>
  </section>
);

const StoriesSection = () => (
  <section className="py-24 bg-white text-black">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="font-heading text-3xl mb-12 border-l-4 border-accent pl-4">Highlighted Stories</h2>
      
      {/* Specific 2-column layout for the 2 featured stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {STORIES.map((story, index) => (
          <div key={story.id} className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
               {/* Icon placeholder or thumbnail */}
               <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <img src={story.image} className="w-full h-full object-cover" alt="Author" />
               </div>
               <div>
                 <h3 className="font-bold text-lg leading-none">{story.title}</h3>
                 <span className="text-gray-500 text-sm">{story.author}</span>
               </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
               <div className="md:w-1/2 aspect-square bg-gray-100 overflow-hidden relative">
                 <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                 {story.meta && (
                   <div className="absolute bottom-0 left-0 bg-white/90 p-2 text-[10px] w-full border-t border-gray-100">
                     {story.meta}
                   </div>
                 )}
               </div>
               <div className="md:w-1/2">
                 <p className="text-sm leading-relaxed text-gray-700 text-justify">
                   {story.description}
                 </p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TopPage = () => {
  return (
    <div className="bg-bg">
      <Hero />
      <ExhibitionSection />
      <EventsSection />
      <JournalSection />
      <StoriesSection />
    </div>
  );
};

export default TopPage;
