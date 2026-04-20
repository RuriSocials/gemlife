import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  ChevronDown,
  Sparkles,
  Gem,
  ShieldCheck,
  Clock3,
  Users,
  ArrowRight,
  Circle,
} from "lucide-react";
import { useCsvData } from "../hooks/useCsvData";
import { exhibitionDetails as allExhibitionDetails } from "../data/exhibitionDetails";

const ICON_MAP = {
  Gem,
  Users,
  Clock3,
  ShieldCheck,
};

function SectionHeading({ eyebrow, title, body, theme="light" }) {
  const isDark = theme === "dark";
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow && (
        <div className={`text-xs uppercase tracking-[0.24em] ${isDark ? 'text-amber-600' : 'text-amber-700/90'}`}>
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-5xl ${isDark ? 'text-white' : 'text-slate-900'}`}
        style={{ fontFamily: "serif" }}
      >
        {title}
      </h2>
      {body ? (
        <p className={`text-base leading-7 md:text-lg ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{body}</p>
      ) : null}
    </div>
  );
}

function SceneCard({ scene, reverse = false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="grid items-center gap-10 py-14 md:grid-cols-2 md:gap-14"
    >
      <div className={reverse ? "md:order-2" : ""}>
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl shadow-slate-200/50">
          <img
            src={scene.image}
            alt={scene.title}
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <SectionHeading
          eyebrow={scene.eyebrow}
          title={scene.title}
          body={scene.body}
        />
        {scene.details && scene.details.length > 0 && (
          <div className="mt-6 space-y-3">
            {scene.details.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
              >
                <Circle className="mt-1 h-3.5 w-3.5 fill-amber-600 text-amber-600" />
                <p className="text-sm leading-6 text-slate-700 md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default function ExhibitionPage() {
  const { id } = useParams();
  const { data: exhibitions, loading, error } = useCsvData("/data/exhibitions.csv");
  
  const [openCulture, setOpenCulture] = useState(true);
  const [activeLocation, setActiveLocation] = useState(null);

  const exhibition = useMemo(() => {
    if (!exhibitions || exhibitions.length === 0) return null;
    return exhibitions.find((e) => e.id === Number(id)) || exhibitions[0];
  }, [exhibitions, id]);

  const details = exhibition ? allExhibitionDetails[exhibition.id] : null;

  // Initialize active location when details load
  useMemo(() => {
    if (details?.locations && !activeLocation) {
      setActiveLocation(details.locations[0]);
    }
  }, [details, activeLocation]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f5f2] flex items-center justify-center pt-20">
        <span className="text-gray-400 text-sm uppercase tracking-widest">
          Loading exhibition...
        </span>
      </div>
    );
  }

  if (error || !exhibition) {
    return (
      <div className="min-h-screen bg-[#f7f5f2] flex items-center justify-center pt-20">
        <span className="text-gray-400 text-sm">
          {error ? `Error: ${error}` : "No exhibition found."}
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-slate-900 -mt-[72px]">
      {/* ─── Hero ─── */}
      <section className="relative isolate overflow-hidden">
        <img
          src={
            exhibition.image ||
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
          }
          alt={exhibition.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/55 to-[#0f0f10]/85" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur"
            >
              <Sparkles className="h-4 w-4" />{" "}
              {exhibition.subtitle || "Special Exhibition"}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-5xl font-semibold leading-tight text-white md:text-7xl"
              style={{ fontFamily: "serif" }}
            >
              {exhibition.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="mt-5 max-w-2xl text-lg leading-8 text-white/85 md:text-xl"
            >
              {exhibition.description}
            </motion.p>
            {details && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#scenes"
                  className="inline-flex items-center rounded-full bg-[#c6a96a] px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-[#b99a59]"
                >
                  Enter the Story <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* If detailed exhibition content exists in exhibitionDetails.js */}
      {details ? (
        <>
          {/* ─── Stats ─── */}
          {details.stats && details.stats.length > 0 && (
            <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
              <div className="grid gap-4 md:grid-cols-4">
                {details.stats.map((stat) => {
                  const Icon = ICON_MAP[stat.iconName] || Gem;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-[1.75rem] border border-black/5 bg-white/75 shadow-sm backdrop-blur"
                    >
                      <div className="flex items-center gap-4 p-6">
                        <div className="rounded-2xl bg-slate-900 p-3 text-[#c6a96a]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
                            {stat.label}
                          </div>
                          <div className="mt-1 text-lg font-medium text-slate-900">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          <main className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
            {/* Cultural Background Concept */}
            {details.culturalBackground && (
              <section className="rounded-[2rem] border border-black/5 bg-white px-6 py-10 shadow-xl shadow-slate-200/40 md:px-10 md:py-14">
                <SectionHeading
                  eyebrow="Cultural Background"
                  title="Context & History"
                />
                <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.4fr]">
                  <div className="space-y-4">
                    <button
                      onClick={() => setOpenCulture((v) => !v)}
                      className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-slate-900 md:text-base">
                        Cultural context for international readers
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openCulture ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openCulture && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 md:text-base"
                      >
                        {details.culturalBackground}
                      </motion.div>
                    )}
                  </div>
                  {/* Visual accent element to fill the right column instead of text instructions */}
                  <div className="hidden md:flex rounded-[1.75rem] border border-black/5 bg-[#0f0f10] items-center justify-center p-6 shadow-lg">
                    <Gem className="h-16 w-16 text-[#c6a96a]/20" strokeWidth={1} />
                  </div>
                </div>
              </section>
            )}

            {/* ─── Scenes ─── */}
            {details.scenes && details.scenes.length > 0 && (
              <section className="mt-14" id="scenes">
                {details.scenes.map((scene, index) => (
                  <SceneCard
                    key={scene.id}
                    scene={scene}
                    reverse={index % 2 === 1}
                  />
                ))}
              </section>
            )}

            {/* ─── Timeline ─── */}
            {details.timeline && details.timeline.length > 0 && (
              <section
                id="timeline"
                className="mt-10 rounded-[2rem] border border-black/5 bg-white px-6 py-10 shadow-xl shadow-slate-200/40 md:px-10 md:py-14"
              >
                <SectionHeading
                  eyebrow="Timeline"
                  title="A legacy shaped across generations"
                />
                <div className="mt-10 grid gap-6 md:grid-cols-5">
                  {details.timeline.map((item, i) => (
                    <div key={item.year} className="relative">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c6a96a] text-sm font-semibold text-slate-950 text-[10px] tracking-widest uppercase">
                          {item.year}
                        </div>
                      </div>
                      <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ─── Story Geography ─── */}
            {details.locations && details.locations.length > 0 && activeLocation && (
              <section className="mt-14 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[2rem] border border-black/5 bg-[#0f0f10] text-white shadow-xl shadow-slate-200/40">
                  <div className="p-6 md:p-8">
                    <SectionHeading
                      eyebrow="Story Geography"
                      title="Locations of living culture"
                      theme="dark"
                    />
                    <div className="mt-8 space-y-3">
                      {details.locations.map((loc) => (
                        <button
                          key={loc.name}
                          onClick={() => setActiveLocation(loc)}
                          className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                            activeLocation.name === loc.name
                              ? "border-[#c6a96a]/50 bg-[#c6a96a]/15 shadow-[0_0_15px_rgba(198,169,106,0.1)]"
                              : "border-white/10 bg-white/5 hover:bg-white/10"
                          }`}
                        >
                          <div>
                            <div className="text-sm font-medium text-white">
                              {loc.name}
                            </div>
                            <div className={`text-xs uppercase tracking-[0.16em] ${activeLocation.name === loc.name ? "text-[#c6a96a]" : "text-white/55"}`}>
                              {loc.role}
                            </div>
                          </div>
                          <MapPin className={`h-4 w-4 ${activeLocation.name === loc.name ? "text-[#c6a96a] drop-shadow-[0_0_8px_rgba(198,169,106,0.5)]" : "text-white/40"}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-black/5 bg-white shadow-xl shadow-slate-200/40">
                  <div className="p-8 h-full flex flex-col">
                    <div className="shrink-0">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Selected location
                      </div>
                      <h3
                        className="mt-3 text-3xl font-semibold text-slate-900"
                        style={{ fontFamily: "serif" }}
                      >
                        {activeLocation.name}
                      </h3>
                      <div className="mt-2 text-sm uppercase tracking-[0.16em] text-amber-700">
                        {activeLocation.role}
                      </div>
                      <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                        {activeLocation.description}
                      </p>
                    </div>
                    {/* Interactive map iframe */}
                    <div className="mt-8 flex-1 min-h-[300px] flex items-center justify-center rounded-[1.5rem] bg-slate-50 border border-slate-200 relative overflow-hidden shadow-inner group">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        className="absolute inset-0 w-full h-full grayscale opacity-80 contrast-125 sepia-[.2] mix-blend-multiply transition-all duration-500 group-hover:grayscale-[0.5] group-hover:opacity-100"
                        style={{ border: 0 }}
                        loading="lazy" 
                        allowFullScreen 
                        referrerPolicy="no-referrer-when-downgrade" 
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLocation.name + ', Sri Lanka')}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                      ></iframe>
                      
                      {/* Subtle loading state background that shows before iframe loads */}
                      <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ─── Final Message ─── */}
            {details.finalMessage && (
              <section className="mt-14 rounded-[2rem] border border-black/5 bg-gradient-to-br from-slate-950 via-slate-900 to-[#1c2d5a] px-6 py-12 text-white shadow-2xl md:px-10 md:py-16">
                <div className="max-w-3xl">
                  <div className="text-xs uppercase tracking-[0.24em] text-[#c6a96a]">
                    Conclusion
                  </div>
                  <h2
                    className="mt-4 text-4xl font-semibold md:text-5xl"
                    style={{ fontFamily: "serif" }}
                  >
                    {details.finalMessage.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/80">
                    {details.finalMessage.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/"
                      className="inline-flex items-center rounded-full bg-[#c6a96a] px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-[#b99a59]"
                    >
                      Return to Gem Life
                    </Link>
                  </div>
                </div>
              </section>
            )}
          </main>
        </>
      ) : (
        /* Fallback for Exhibitions without detailed structued data */
        <main className="mx-auto max-w-7xl px-6 py-24 md:px-10 text-center">
          <div className="mx-auto max-w-2xl bg-white p-10 rounded-[2rem] shadow-sm border border-black/5">
            <Gem className="w-10 h-10 text-[#c6a96a] mx-auto mb-6" strokeWidth={1} />
            <h2 className="text-2xl font-semibold font-heading mb-4 text-slate-900">
              Full Exhibition Experience Coming Soon
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We are currently digitizing the immersive scene-based layout for this exhibition. Please visit again later to explore its full cultural context and visual archive.
            </p>
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-slate-200 bg-transparent px-8 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              Return Home
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}
