import React from 'react';
import { JOURNAL_ENTRIES } from '../data/journal';

const JournalPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-bg">
      <header className="text-center py-16 border-b border-white/5">
        <h1 className="text-5xl mb-2 font-heading tracking-wide">The Journal</h1>
        <p className="text-xl text-secondary">Stories published on Note.com</p>
      </header>

      <div className="max-w-[1200px] mx-auto py-16 px-4 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-16">
        {JOURNAL_ENTRIES.map(post => (
          <a 
            key={post.id} 
            href={post.link} 
            className="block bg-surface border border-white/5 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 group" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="h-[250px] overflow-hidden relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="block text-sm text-accent mb-2">{post.date}</span>
              <h3 className="text-2xl mb-3 leading-tight font-heading group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-secondary text-base mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <span className="text-sm text-text uppercase tracking-wider flex items-center gap-2">
                Read on Note.com <span className="text-accent">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
