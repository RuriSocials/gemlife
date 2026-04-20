import React from 'react';
import { useCsvData } from '../hooks/useCsvData';
import NoteEmbed from '../components/NoteEmbed';

const JournalPage = () => {
  const { data: journal, loading, error } = useCsvData('/data/journal.csv');

  return (
    <div className="pt-20 min-h-screen bg-bg">
      <header className="text-center py-16 border-b border-white/5">
        <h1 className="text-5xl mb-2 font-heading tracking-wide">The Journal</h1>
        <p className="text-xl text-secondary">Stories published on Note.com</p>
      </header>

      {loading ? (
        <div className="flex items-center justify-center py-24 text-gray-400 text-sm uppercase tracking-widest">Loading journal entries...</div>
      ) : error ? (
        <div className="flex items-center justify-center py-24 text-red-400 text-sm">Error: {error}</div>
      ) : (
        <div className="max-w-[1200px] mx-auto py-16 px-4 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-16">
          {journal.map(post => (
            <div key={post.id} className="w-full flex justify-center">
              <NoteEmbed embedUrl={post.embedUrl} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JournalPage;
