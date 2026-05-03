import React from "react";
import { Link } from "react-router-dom";
import { useCsvData } from "../hooks/useCsvData";
import NoteEmbed from "../components/NoteEmbed";

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
    <section className="min-h-screen w-full bg-[#f0f0f0] text-black flex flex-col items-center justify-center pb-16 relative overflow-hidden">
      <div className="max-w-[1000px] w-full z-10">
        <h1 className="font-sans font-bold text-[4rem] md:text-[6rem] leading-none mb-10 tracking-tighter">
          GemLife.world
        </h1>

        {/* Conceptual Grid - Abstract representation of the line art grid in screenshots */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 opacity-80">
          {gridImages.map((src, i) => (
            <div
              key={i}
              className="aspect-square border border-black/20 overflow-hidden"
            >
              <img
                src={src}
                alt={`Grid image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t-2 border-black pt-8">
          <div className="mb-8 md:mb-0">
            <span className="block font-bold text-xl uppercase tracking-widest">
              Gem Life as Art
            </span>
            <span className="block font-serif italic text-lg text-black/60">
              MoGA
            </span>
          </div>
          <p className="max-w-[400px] text-sm md:text-base leading-relaxed font-medium text-black/70">
            "Life as art" means intentionally living with creativity, purpose,
            and self-expression. The star is Life, not Gems.
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
  const minor = exhibitions.filter((e) => e.category === "minor");

  return (
    <section className="py-24 bg-[#ffffff] text-black border-y border-white/10">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="font-heading text-3xl mb-12 border-l-4 border-accent pl-4 text-black">
          Special Exhibition
        </h2>

        {/* Major Exhibitions - 2 Column Split Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {major.map((ex) => (
            <Link
              to={ex.link || `/exhibitions/${ex.id}`}
              key={ex.id}
              className="group block bg-white overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Image Top Half */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {ex.image ? (
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 font-heading text-xl">
                    Image Unavailable
                  </div>
                )}
              </div>

              {/* Text Bottom Half */}
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                <span className="text-accent text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 border-b border-accent pb-1 w-max">
                  {ex.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading mb-4 leading-tight text-gray-900 group-hover:text-accent transition-colors">
                  {ex.title}
                </h3>
                <p className="text-sm font-body text-gray-500 tracking-wide">
                  {ex.date || ex.status}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Minor/Archive Exhibitions - 3 Column Split Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {minor.map((ex) => (
            <div
              key={ex.id}
              className="bg-white group overflow-hidden shadow-md"
            >
              {/* Image Top Half */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 border-b border-gray-100">
                {ex.image ? (
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1a2b3c] to-[#2c3e50] flex flex-col items-center justify-center p-6 text-center">
                    <span className="font-heading text-white/50 text-xl tracking-widest">
                      {ex.title.substring(0, 2)}
                    </span>
                  </div>
                )}
              </div>

              {/* Text Bottom Half */}
              <div className="p-6 bg-white min-h-[140px] flex flex-col justify-start">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                  {ex.subtitle}
                </span>
                <h4 className="font-heading font-medium text-lg leading-snug text-gray-900 mb-2">
                  {ex.title}
                </h4>
                <p className="text-xs font-body text-gray-500 uppercase tracking-widest">
                  {ex.date || ex.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventsSection = ({ events }) => (
  <section className="py-24 bg-white text-black">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="font-heading text-3xl mb-12 border-l-4 border-accent pl-4">
        Event
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col gap-4">
            <div className="aspect-video bg-gray-100 overflow-hidden relative group">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {event.type === "makuake" && (
                <div className="absolute top-4 left-4 bg-white px-3 py-1 font-bold text-xs tracking-wider shadow-md flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  Makuake
                </div>
              )}
            </div>
            <div>
              <span className="text-accent font-bold text-sm mb-1 block">
                {event.subtitle}
              </span>
              <h3 className="text-xl font-bold mb-1">{event.title}</h3>
              {event.englishTitle && (
                <p className="text-sm text-gray-500 mb-2 font-medium">
                  {event.englishTitle}
                </p>
              )}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {event.description}
              </p>
              {event.type === "makuake" ? (
                <span className="text-xs font-bold text-white bg-black px-4 py-2 inline-block">
                  Makuake LP coming soon
                </span>
              ) : (
                <span className="text-xs font-bold border-b border-black pb-0.5">
                  Details coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JournalSection = ({ journal }) => (
  <section className="py-24 bg-surface text-black">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="mb-12 border-l-4 border-accent pl-4">
        <h2 className="font-heading text-3xl mb-2">Journal</h2>
        <p className="text-secondary text-sm">
          RURI members create and post content on Note, selectively publishing
          it on Gemlife.world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {journal.map((post) => (
          <div key={post.id} className="w-full flex justify-center">
            <NoteEmbed embedUrl={post.embedUrl} />
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white border border-gray-100 rounded-lg">
        <h4 className="font-bold text-sm mb-4 text-gray-700">
          Planned Journals (Coming Soon)
        </h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>1. Cut to order gem from rough stone (Fujimori)</li>
          <li>
            2. The Ruby Family's Gem Life: A Four-Generation History
            (Pandula/Fujimori)
          </li>
          <li>3. Gemstone Traceability and Digital Gem (Fujimori)</li>
        </ul>
      </div>
    </div>
  </section>
);

const StoriesSection = ({ stories }) => (
  <section className="py-24 bg-white text-black">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="font-heading text-3xl mb-12 border-l-4 border-accent pl-4">
        Highlighted Stories
      </h2>

      {/* Specific 2-column layout for the 2 featured stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              {/* Icon placeholder or thumbnail */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={story.titelImage}
                  className="w-full h-full object-cover"
                  alt="Author"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">
                  {story.title}
                </h3>
                <span className="text-gray-500 text-sm">{story.author}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 aspect-square bg-gray-100 overflow-hidden relative">
                <img
                  src={story.mainImage}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
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
        </>
      )}
    </div>
  );
};

export default TopPage;
