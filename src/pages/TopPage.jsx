import React from "react";
import { Link } from "react-router-dom";
import { useCsvData } from "../hooks/useCsvData";
import NoteEmbed from "../components/NoteEmbed";
import { storyVideos } from "../data/storyVideos";

const gridImages = [
  "/src/assets/images/topPage/MC1.png",
  "/src/assets/images/topPage/MC2.png",
  "/src/assets/images/topPage/MC3.png",
  "/src/assets/images/topPage/MC4.png",
  "/src/assets/images/topPage/MC5.png",
  "/src/assets/images/topPage/MC6.png",
  "/src/assets/images/topPage/MC7.png",
  "/src/assets/images/topPage/MC8.png",
  "/src/assets/images/topPage/MC9.png",
  "/src/assets/images/topPage/MC10.png",
  "/src/assets/images/topPage/MC11.png",
  "/src/assets/images/topPage/MC12.png",
];

const Hero = () => {
  return (
    <section className="w-full bg-[#f0f0f0] text-black flex flex-col items-center justify-center py-6 relative overflow-hidden">
      <style>{`
        @keyframes bookOpen {
          0%   { opacity: 0; transform: perspective(700px) rotateY(-90deg); box-shadow: -8px 0 20px rgba(0,0,0,0.15); }
          55%  { transform: perspective(700px) rotateY(6deg);  box-shadow: 4px 0 10px rgba(0,0,0,0.08); }
          75%  { transform: perspective(700px) rotateY(-2deg); }
          100% { opacity: 1; transform: perspective(700px) rotateY(0deg); box-shadow: none; }
        }
      `}</style>

      <div className="max-w-[1000px] w-full z-10 px-4">
        <h1 className="font-sans font-bold text-[2.2rem] md:text-[3rem] leading-none mb-3 tracking-tighter">
          GemLife.world
        </h1>

        {/* perspective on parent enables shared 3D space */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3 opacity-80"
          style={{ perspective: '1200px' }}
        >
          {gridImages.map((src, i) => (
            <div
              key={i}
              className="h-[90px] md:h-[105px] border border-black/20 bg-white flex items-center justify-center overflow-hidden"
              style={{
                animation: 'bookOpen 0.75s cubic-bezier(0.23, 1, 0.32, 1) both',
                animationDelay: `${i * 0.07}s`,
                transformOrigin: 'left center',
              }}
            >
              <img
                src={src}
                alt={`Grid image ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t-2 border-black pt-4">
          <div className="mb-4 md:mb-0">
            <span className="block font-bold text-base uppercase tracking-widest">
              Gem Life as Art
            </span>
            <span className="block font-serif italic text-sm text-black/60">
              MoGA
            </span>
          </div>
          <p className="max-w-[400px] text-xs md:text-sm leading-relaxed font-medium text-black/50">
            「Life as art」とは、創造性や目的、自分らしさを大切にしながら生きること。主役は宝石ではなく、"Life"そのものです。
          </p>
        </div>
      </div>

      {/* Background texture — pure CSS dot pattern, no external dependency */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </section>
  );
};

const ExhibitionSection = ({ exhibitions }) => {
  const major = exhibitions.filter((e) => e.category === "major");

  return (
    <section className="bg-white text-black md:overflow-hidden" style={{ padding: '2rem 0' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:h-[82vh] flex flex-col">

        <h2 className="font-heading text-2xl mb-4 border-l-4 border-accent pl-4 text-black shrink-0">
          Special Exhibition
        </h2>

        {/* Grid fills all remaining height */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:flex-1 md:min-h-0"
        >
          {major.map((ex) => (
            <Link
              to={ex.link || `/exhibitions/${ex.id}`}
              key={ex.id}
              className="group flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image area — fixed height on mobile, stretches on desktop */}
              <div className="relative overflow-hidden bg-gray-100 h-[200px] md:flex-1 md:min-h-0">
                {ex.image ? (
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 text-sm">
                    Image Unavailable
                  </div>
                )}
              </div>

              {/* Text area — fixed height below image */}
              <div className="bg-white border-t border-gray-100 p-4 shrink-0">
                <span className="text-accent text-[10px] font-bold tracking-widest uppercase mb-1 block">
                  {ex.subtitle}
                </span>
                <h3 className="text-base font-heading mb-0.5 leading-snug text-gray-900 group-hover:text-accent transition-colors">
                  {ex.title}
                </h3>
                <p className="text-xs font-body text-gray-500">
                  {ex.date || ex.status}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

const EventsSection = ({ events }) => (
  <section className="h-auto md:min-h-screen flex flex-col py-10 bg-white text-black">
    <div className="max-w-[1200px] mx-auto px-4 w-full flex flex-col flex-1">
      <h2 className="font-heading text-2xl mb-6 border-l-4 border-accent pl-4 shrink-0">
        Event
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col bg-white shadow-md overflow-hidden h-full">
            {/* Image — fills remaining height */}
            <div className="relative flex-1 overflow-hidden bg-gray-100 min-h-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              {event.type === "makuake" && (
                <div className="absolute top-3 left-3 bg-white px-2 py-0.5 font-bold text-[10px] tracking-wider shadow flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  Makuake
                </div>
              )}
            </div>

            {/* Text — fixed bottom strip */}
            <div className="p-4 shrink-0 border-t border-gray-100">
              <span className="text-accent font-bold text-[10px] uppercase tracking-wider block mb-1">
                {event.subtitle}
              </span>
              <h3 className="text-base font-bold leading-snug mb-1">{event.title}</h3>
              {event.englishTitle && (
                <p className="text-xs text-gray-400 font-medium mb-1">{event.englishTitle}</p>
              )}
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">
                {event.description}
              </p>
              {event.type === "makuake" && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white bg-black px-4 py-1.5 inline-block hover:bg-gray-800 transition-colors"
                >
                  Makuakeで見る →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JournalSection = ({ journal }) => (
  <section className="py-8 md:py-14 bg-surface text-black">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="mb-10 border-l-4 border-accent pl-4">
        <h2 className="font-heading text-3xl mb-2">Journal</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {journal.map((post) => (
          <div key={post.id} className="w-full flex justify-center">
            <NoteEmbed embedUrl={post.embedUrl} />
          </div>
        ))}
      </div>

    </div>
  </section>
);

const StoryCard = ({ story }) => {
  const videoData = storyVideos[story.id];

  return (
    <div className="flex flex-col gap-6">
      {/* Author header */}
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0">
          <img src={story.titelImage} className="w-full h-full object-cover" alt="Author" />
        </div>
        <div>
          <h3 className="font-bold text-lg leading-none">{story.title}</h3>
          <span className="text-gray-500 text-sm">{story.author}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Silent looping video thumbnail */}
        <div className="md:w-1/2 overflow-hidden bg-white h-[200px] md:h-[300px]">
          {videoData && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full ${videoData.fit}`}
            >
              <source src={videoData.src} />
            </video>
          )}
        </div>

        {/* Description */}
        <div className="md:w-1/2">
          <p className="text-sm leading-relaxed text-gray-700 text-justify">
            {story.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const StoriesSection = ({ stories }) => (
  <section className="py-8 md:py-14 bg-white text-black">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="font-heading text-3xl mb-10 border-l-4 border-accent pl-4">
        Highlighted Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  </section>
);

const GemLiferMembershipSection = () => (
  <section className="py-8 md:py-14 bg-surface text-black">
    <div className="max-w-[1200px] mx-auto px-4 text-center">
      <h2 className="font-heading text-3xl mb-8">Gem Lifer Membership</h2>
      <p className="text-base leading-relaxed text-secondary max-w-[700px] mx-auto mb-4">
        Gemlife.worldは宝石を「創造し、体験し、つながるもの」へと広げていく無料で参加できるコミュニティです。
      </p>
      <p className="text-base leading-relaxed text-secondary max-w-[700px] mx-auto mb-10">
        メンバーに登録していただくと、宝石セミナーや特別販売会、オンラインコミュニティへのご招待、Gem Lifeの体験や表現をデジタル空間に広げるGem Lifeアプリの利用が可能になります。
      </p>
      <Link
        to="/membership"
        className="inline-block bg-black text-white text-sm font-bold px-10 py-4 hover:bg-accent transition-colors tracking-wider uppercase"
      >
        Login / Join
      </Link>
    </div>
  </section>
);

const TopPage = () => {
  const { data: exhibitions, loading: exLoading } = useCsvData(
    "/data/exhibitions.csv",
  );
  const { data: events, loading: evLoading } = useCsvData("/data/events.csv");
  const { data: journal, loading: joLoading } = useCsvData("/data/journal.csv");
  const { data: stories, loading: stLoading } = useCsvData("/data/stories.csv");

  const isLoading = exLoading || evLoading || joLoading || stLoading;

  return (
    <div className="bg-bg">
      <Hero />
      {isLoading ? (
        <div className="flex items-center justify-center py-24 text-gray-400 text-sm uppercase tracking-widest">
          Loading content...
        </div>
      ) : (
        <>
          <ExhibitionSection exhibitions={exhibitions} />
          <EventsSection events={events} />
          <JournalSection journal={journal} />
          <StoriesSection stories={stories} />
          <GemLiferMembershipSection />
        </>
      )}
    </div>
  );
};

export default TopPage;
