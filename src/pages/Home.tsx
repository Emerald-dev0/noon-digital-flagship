import { Scene0 } from '../scenes/Scene0';
import { Link } from 'react-router-dom';

const PROOF_TERMS = [
  { term: 'appointment setting', client: 'Sales with Aqib', color: '#f0531c' },
  { term: 'tech sales course', client: 'Zakariya', color: '#8f56ff' },
  { term: 'miro boards', client: 'Noon Digital', color: '#15803d' },
  { term: 'arabic grammar', client: 'Markaz Shafi\'ee', color: '#ff69c5' },
];

export function Home() {
  return (
    <div className="bg-black">
      <Scene0 />

      {/* Proof Strip */}
      <section className="py-12 border-y border-white/5 bg-[#050505] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xs">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Social Proof</p>
              <h3 className="font-display text-2xl uppercase tracking-tighter italic">Search these on YouTube. Clients hold top-3.</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {PROOF_TERMS.map((item, i) => (
                <div key={i} className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Query</span>
                  <span className="font-display text-lg uppercase tracking-tight">{item.term}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Bottleneck / Blank Page Problem */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
               <img
                 src="/images/thumbnails/image15.png"
                 alt="The Blank Page Problem"
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-all duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-px h-24 bg-white/20" />
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">The Bottleneck</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
              You don’t have a filming problem.
            </h2>
            <p className="font-body text-xl md:text-2xl text-white/70 leading-relaxed mb-8">
              “I can’t go out and just film, because I don’t have the ideas there.” Ideas are the bottleneck. And ideas are the one part of this that is a research job, not a talent.
            </p>
            <Link to="/garden" className="font-mono text-sm uppercase tracking-widest text-white underline decoration-[#f0531c] decoration-2 underline-offset-8 hover:text-[#f0531c] transition-colors">
              See the method
            </Link>
          </div>
        </div>
      </section>

      {/* Straight Answer Grid (What doesn't matter) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">Straight Answer</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
              Most of what agencies sell you<br />doesn’t move anything.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Editing Quality", desc: "Past a competent baseline it stops mattering. Nobody has ever bought because of a transition." },
              { title: "Posting Volume", desc: "Four videos that answer a real search beat twelve that don't. Volume is how you get tired." },
              { title: "Comments & Likes", desc: "They tell you a video was watched. They don't tell you it was watched by a buyer." },
              { title: "Studio & Gear", desc: "Every version of 'once I have a proper setup' is a reason to not start. Your room is fine." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col gap-4">
                <h3 className="font-display text-2xl uppercase tracking-tight text-white/90">{item.title}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="font-accent italic text-2xl text-white/80 max-w-xl">
              "Before someone buys from you, they only need to be sold on two things. The vehicle, and the driver."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                <img src="/images/thumbnails/image20.png" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg uppercase">Mubarak Jimoh</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Founder, Noon Digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rented Land vs Search-Led */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">Rented Land</span>
              <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
                One algorithm change and the pipeline is gone.
              </h2>
              <p className="font-body text-xl text-white/60 leading-relaxed mb-12">
                Reels stopped reaching anyone overnight, and a working business became a dangerous one in a week. Search-led video is the opposite arrangement.
              </p>

              <div className="space-y-6">
                {[
                  "Your ads convert better — YouTube builds trust post-click.",
                  "Your referrals close faster — 30 min of content = pre-sold.",
                  "Your prices go up — visible authority = pricing power.",
                  "It never expires — compound asset vs 48hr Instagram half-life."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#f0531c]" />
                    <p className="font-body text-lg text-white/80">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#f0531c]/10 blur-[100px] rounded-full" />
              <div className="relative aspect-square md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 <img src="/images/thumbnails/image21.png" className="w-full h-full object-cover opacity-60" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl max-w-sm">
                       <h3 className="font-display text-2xl uppercase mb-2">Search-Led</h3>
                       <p className="font-body text-sm text-white/50 italic">A video that answers a real question keeps getting found, and it belongs to you.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">Qualification</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter">This works for some<br />people and not others.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            <div className="p-12 bg-black flex flex-col gap-8">
              <h3 className="font-display text-3xl uppercase tracking-tight text-white">A Good Fit</h3>
              <ul className="space-y-4 font-body text-white/60">
                <li className="flex gap-3"><span className="text-[#15803d]">✓</span> You sell coaching, software, or a service.</li>
                <li className="flex gap-3"><span className="text-[#15803d]">✓</span> The offer is validated. People buy it already.</li>
                <li className="flex gap-3"><span className="text-[#15803d]">✓</span> You have a sales system that closes.</li>
                <li className="flex gap-3"><span className="text-[#15803d]">✓</span> Stuck on visibility, not product or closing.</li>
              </ul>
            </div>
            <div className="p-12 bg-black flex flex-col gap-8">
              <h3 className="font-display text-3xl uppercase tracking-tight text-white">Not a Good Fit</h3>
              <ul className="space-y-4 font-body text-white/60">
                <li className="flex gap-3"><span className="text-red-500">×</span> Still working out what to sell.</li>
                <li className="flex gap-3"><span className="text-red-500">×</span> You need calls booked this month.</li>
                <li className="flex gap-3"><span className="text-red-500">×</span> Nobody on your side can be on camera.</li>
                <li className="flex gap-3"><span className="text-red-500">×</span> You want views. We optimize for calls.</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link to="/pricing" className="inline-flex items-center px-10 py-5 bg-[#f0531c] text-white font-display font-bold text-lg uppercase tracking-widest rounded-2xl hover:bg-[#ff6c3a] transition-all transform hover:scale-105 shadow-xl">
              Start with a $597 test video
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
