import React, { useState } from 'react';
import { useCsvData } from '../hooks/useCsvData';
import NoteEmbed from '../components/NoteEmbed';

import img1 from '../assets/images/hsPage/HST1.png';
import img2 from '../assets/images/specialExhibition/The Land — Rathnapura.jpg';
import img3 from '../assets/images/specialExhibition/Trust — Walawwa Culture.jpg';
import img4 from '../assets/images/specialExhibition/Craft — Ruby Jewellers.JPG';
import img5 from '../assets/images/hsPage/HST2.png';
import img6 from '../assets/images/specialExhibition/Future — Ethical Sri Lanka.jpg';
import img7 from '../assets/images/specialExhibition/Lives Intertwined — Balangoda.jpg';

// Node positions are in SVG viewBox 0–100 coordinates (maps 1:1 to CSS percentages)
const NODES = [
  {
    id: 1, cx: 14, cy: 44,
    image: img1,
    title: 'Gem Life débuts / 蒼春',
    subtitle: 'User Story',
    status: 'live',
    href: 'https://note.com/embed/notes/n9fdfa870859b',
  },
  {
    id: 2, cx: 36, cy: 18,
    image: img2,
    title: '原石から宝石をオーダーカット体験',
    subtitle: 'Fujimori',
    status: 'coming',
  },
  {
    id: 3, cx: 62, cy: 30,
    image: img3,
    title: 'Ruby家の四世代にわたる歴史',
    subtitle: 'Pandula / Fujimori',
    status: 'coming',
  },
  {
    id: 4, cx: 84, cy: 14,
    image: img4,
    title: 'Gemstone Traceability & Digital Gem',
    subtitle: 'Fujimori',
    status: 'coming',
  },
  {
    id: 5, cx: 86, cy: 62,
    image: img5,
    title: 'Morning Poem',
    subtitle: 'GEM LIFE',
    status: 'coming',
  },
  {
    id: 6, cx: 60, cy: 80,
    image: img6,
    title: 'スリランカ宝石文化 — 自然と信仰',
    subtitle: 'RURI',
    status: 'coming',
  },
  {
    id: 7, cx: 30, cy: 70,
    image: img7,
    title: 'デジタル宝石の世界',
    subtitle: 'Fujimori',
    status: 'coming',
  },
];

// Sequential connections forming a winding path
const CONNECTIONS = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]];

function getCurvePath(a, b) {
  const mx = (a.cx + b.cx) / 2;
  const my = (a.cy + b.cy) / 2;
  const dx = b.cx - a.cx;
  const dy = b.cy - a.cy;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const offset = 10;
  const px = (-dy / len) * offset;
  const py = (dx / len) * offset;
  return `M ${a.cx} ${a.cy} Q ${mx + px} ${my + py} ${b.cx} ${b.cy}`;
}

const JournalPage = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { data: journal } = useCsvData('/data/journal.csv');

  return (
    <div className="bg-bg">
      <style>{`
        @keyframes dashFlow {
          from { stroke-dashoffset: 12; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .node-ring {
          animation: pulse-ring 1.8s ease-out infinite;
        }
      `}</style>

      {/* Header */}
      <header className="text-center pt-6 pb-4">
        <h1 className="font-heading text-4xl tracking-wide mb-1">The Journal</h1>
        <p className="text-secondary text-xs uppercase tracking-[0.2em]">Gem Life Stories</p>
      </header>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mb-4 text-xs text-secondary">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span>Published</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <span>Coming Soon</span>
        </div>
      </div>

      {/* Roadmap canvas — desktop only */}
      <div className="hidden md:block max-w-[960px] mx-auto px-6 pb-8">
        <div className="relative w-full" style={{ height: '500px' }}>

          {/* SVG layer — curved connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8860b" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#b8860b" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {CONNECTIONS.map(([ai, bi]) => {
              const a = NODES[ai];
              const b = NODES[bi];
              const isActive = hoveredId === a.id || hoveredId === b.id;
              return (
                <path
                  key={`${ai}-${bi}`}
                  d={getCurvePath(a, b)}
                  fill="none"
                  stroke={isActive ? '#b8860b' : '#d4b483'}
                  strokeWidth={isActive ? '0.5' : '0.3'}
                  strokeDasharray="2 1"
                  opacity={isActive ? 0.9 : 0.45}
                  style={{
                    animation: 'dashFlow 1.2s linear infinite',
                    transition: 'stroke 0.3s, opacity 0.3s',
                  }}
                />
              );
            })}
          </svg>

          {/* HTML node layer */}
          {NODES.map((node) => {
            const isHovered = hoveredId === node.id;
            const isLive = node.status === 'live';
            const tooltipAbove = node.cy > 60;

            return (
              <div
                key={node.id}
                style={{ left: `${node.cx}%`, top: `${node.cy}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Pulse ring for live node */}
                {isLive && (
                  <div
                    className="node-ring absolute inset-0 rounded-full border-2 border-accent"
                    style={{ margin: '-6px' }}
                  />
                )}

                {/* Node circle */}
                <div
                  onClick={() => isLive && node.href && window.open(node.href, '_blank')}
                  className={`rounded-full overflow-hidden border-2 transition-all duration-300 bg-gray-100
                    ${isLive ? 'border-accent shadow-lg cursor-pointer' : 'border-gray-300 cursor-default'}
                    ${isHovered ? 'scale-125 shadow-2xl' : 'scale-100'}
                    ${!isLive ? 'opacity-50 grayscale' : ''}
                  `}
                  style={{ width: '60px', height: '60px' }}
                >
                  <img
                    src={node.image}
                    alt={node.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Step number badge */}
                <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-[8px] font-bold flex items-center justify-center
                  ${isLive ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}
                `}>
                  {node.id}
                </div>

                {/* Tooltip */}
                {isHovered && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 z-20 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 text-center pointer-events-none
                      ${tooltipAbove ? 'bottom-full mb-3' : 'top-full mt-3'}
                    `}
                  >
                    {/* Arrow */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-gray-100 rotate-45
                      ${tooltipAbove ? 'bottom-[-5px] border-b border-r' : 'top-[-5px] border-t border-l'}
                    `} />

                    <p className="text-xs font-bold text-gray-900 leading-snug mb-1">{node.title}</p>
                    <p className="text-[10px] text-secondary">{node.subtitle}</p>
                    {isLive ? (
                      <span className="inline-block mt-1.5 text-[9px] text-accent font-bold uppercase tracking-wider">
                        Read →
                      </span>
                    ) : (
                      <span className="inline-block mt-1.5 text-[9px] text-gray-400 uppercase tracking-wider">
                        Coming Soon
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom label */}
        <p className="text-center text-xs text-secondary/50 mt-2 tracking-widest uppercase">
          Hover a node to explore · Follow the path
        </p>
      </div>

      {/* Roadmap — mobile vertical list */}
      <div className="md:hidden max-w-240 mx-auto px-6 pb-8">
        <div className="relative flex flex-col items-center">
          {/* Vertical connecting dotted line */}
          <div className="absolute left-7.25 top-8 bottom-8 w-px border-l-2 border-dashed border-amber-300/60 pointer-events-none" />

          {NODES.map((node) => {
            const isLive = node.status === 'live';
            return (
              <div key={node.id} className="relative flex items-start gap-4 w-full mb-6 last:mb-0">
                {/* Node circle */}
                <div className="shrink-0 relative z-10">
                  <div
                    onClick={() => isLive && node.href && window.open(node.href, '_blank')}
                    className={`rounded-full overflow-hidden border-2 bg-gray-100 transition-all duration-300
                      ${isLive ? 'border-accent shadow-lg cursor-pointer' : 'border-gray-300 cursor-default opacity-50 grayscale'}
                    `}
                    style={{ width: '60px', height: '60px' }}
                  >
                    <img
                      src={node.image}
                      alt={node.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  {/* Step badge */}
                  <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-[8px] font-bold flex items-center justify-center
                    ${isLive ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}
                  `}>
                    {node.id}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 pt-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 leading-snug mb-0.5 wrap-break-word">{node.title}</p>
                  <p className="text-xs text-secondary mb-1">{node.subtitle}</p>
                  {isLive ? (
                    <span className="inline-block text-[9px] text-accent font-bold uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded-full">
                      Published
                    </span>
                  ) : (
                    <span className="inline-block text-[9px] text-gray-400 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-secondary/50 mt-4 tracking-widest uppercase">
          Follow the path
        </p>
      </div>

      {/* Published embeds */}
      {journal && journal.length > 0 && (
        <div className="max-w-[960px] mx-auto px-6 pb-10">
          <div className="border-t border-gray-200 pt-10 mb-8 flex items-center gap-4">
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">Published</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journal.map(post => (
              <div key={post.id} className="w-full">
                <NoteEmbed embedUrl={post.embedUrl} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalPage;
