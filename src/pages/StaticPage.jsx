import React from 'react';
import { useParams } from 'react-router-dom';

const PAGEDATA = {
  'gem-life': {
    title: 'Gem Life',
    content: 'Explanation of the concept of Gem Life. Life as Art.'
  },
  'who-we-are': {
    title: 'Who We Are',
    content: 'Introduction of RURI SI.'
  },
  'social-engagement': {
    title: 'Social Engagement',
    content: 'Brief introduction about MAP and Fairtrade Platform.'
  },
  'terms': {
    title: 'Terms of Service',
    content: 'Terms of Service for the Gem Life App.'
  },
  'privacy': {
    title: 'Privacy Policy',
    content: 'Privacy Policy for the Gem Life App.'
  },
  'contact': {
    title: 'Contact',
    content: 'Contact information.'
  },
  'faq': {
    title: 'FAQ',
    content: 'Frequently Asked Questions.'
  }
};

const StaticPage = () => {
  const { slug } = useParams();
  const page = PAGEDATA[slug];

  if (!page) return <div className="p-24 text-center">Page not found</div>;

  return (
    <div className="min-h-screen bg-bg py-24 px-4">
      <div className="max-w-[800px] mx-auto">
         <h1 className="font-heading text-4xl mb-8 border-b border-gray-200 pb-4">{page.title}</h1>
         <div className="prose lg:prose-xl text-secondary">
           <p>{page.content}</p>
         </div>
      </div>
    </div>
  );
};

export default StaticPage;
