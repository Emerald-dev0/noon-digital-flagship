import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scene0 } from '../scenes/Scene0';

export function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section - Refactored for Side-by-Side High Impact */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center pt-24 lg:pt-0">
        <div className="w-full lg:w-1/2 px-6 md:px-16 lg:px-24 z-10 py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">YouTube Strategy</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85] mb-8">
              Your offer works.<br />
              <span className="text-[#8f56ff]">Nobody’s watching.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
              You already know YouTube works. You have a validated offer and a backend that closes. What you don’t have is a pipeline of ideas worth filming. That’s the part we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#book" className="px-10 py-5 bg-[#8f56ff] text-white font-display font-bold uppercase tracking-widest rounded-2xl hover:bg-[#ff69c5] transition-all transform hover:scale-105 shadow-glow">
                Book a call
              </a>
              <Link to="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-display font-bold uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
                Start with a $597 test video
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden">
          <Scene0 hideText={true} />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden block" />
        </div>
      </section>

      {/* Proof Strip - Search Rankings */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-4 block">Don’t take our word for it</span>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter italic leading-none">
                Search these four on YouTube.<br />
                <span className="text-white/40">Client videos hold top-3 for each one.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', query: 'appointment setting', client: 'Sales with Aqib', img: '/images/thumbnails/image1.png' },
              { num: '02', query: 'tech sales course', client: 'Zakariya', img: '/images/thumbnails/image2.png' },
              { num: '03', query: 'miro boards for instagram', client: 'Noon Digital', img: '/images/thumbnails/image3.png' },
              { num: '04', query: 'arabic grammar for beginners', client: 'Markaz Shafi\'ee', img: '/images/thumbnails/image4.png' }
            ].map((item, i) => (
              <div key={i} className="group relative aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden border border-white/10 p-8 flex flex-col justify-between hover:border-[#8f56ff] transition-all duration-500">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale" alt="" />
                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-mono text-4xl font-bold text-white/10 group-hover:text-[#8f56ff]/40 transition-colors">{item.num}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#8f56ff] group-hover:border-[#8f56ff] transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl uppercase tracking-tight mb-2 italic">“{item.query}”</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#ff69c5]">{item.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bottleneck - Ideas are the Pipeline */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">Why you haven’t started</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] mb-10">
              You don’t have a filming problem.<br />
              <span className="text-[#8f56ff]">You have a blank page problem.</span>
            </h2>
            <div className="space-y-6 font-body text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              <p>Nobody we talk to needs convincing that YouTube works. They can already name three people in their niche it worked for.</p>
              <p>Then it turns out filming was never the hard part. “I can’t go out and just film, because I don’t have the ideas there.”</p>
              <p className="text-white font-accent italic text-2xl border-l-2 border-[#8f56ff] pl-6 py-2">
                "Ideas are the bottleneck. And ideas are the one part of this that is a research job, not a talent."
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-glow-pink group">
              <img
                src="/images/thumbnails/image15.png"
                alt="Blank Page"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="px-6 py-2 bg-[#ff69c5] text-white font-mono text-xs uppercase tracking-widest rounded-full">Deliverable: The Pipeline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rented Land vs Search-Led - Visual Side-by-Side */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">Straight Answer</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9]">
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
                <h3 className="font-display text-xl uppercase tracking-tight text-white/90">{item.title}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rented Land vs Search-Led - Visual Side-by-Side */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">Rented Land</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] mb-10">
              One algorithm change and the pipeline is gone.
            </h2>
            <p className="font-body text-lg md:text-xl text-white/60 leading-relaxed mb-12">
              The most urgent call we ever took opened with a shadowban. Reels stopped reaching anyone, overnight, and a working business became a dangerous one in a week.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Ads convert better', desc: 'YouTube builds trust post-click. The ad gets the click, YouTube closes it.' },
                { title: 'Referrals close faster', desc: 'A referral who watches 30 minutes of you before the call shows up already sold.' },
                { title: 'Prices go up', desc: 'When you are the most visible name in the space, raising prices starts being obvious.' },
                { title: 'It never expires', desc: 'An Instagram post is dead in 48 hours. A video generates leads for years.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <h4 className="font-display text-lg uppercase text-[#8f56ff] tracking-tight">{item.title}</h4>
                  <p className="font-body text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-10 bg-[#8f56ff]/10 blur-[120px] rounded-full" />
             <div className="relative aspect-[4/5] bg-white/5 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-12">
                <div className="text-center">
                   <div className="w-24 h-24 bg-[#8f56ff]/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                      <svg className="w-10 h-10 text-[#8f56ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                   </div>
                   <h3 className="font-display text-4xl uppercase tracking-tighter italic mb-4">Search-Led Video</h3>
                   <p className="font-body text-lg text-white/40 italic">A video that answers a real question keeps getting found, and it belongs to you.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - Side-by-Side Visual Proof */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
             <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">Case Study</span>
             <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] mb-8">
               He gave the course away free. <span className="text-[#8f56ff]">Then did $16k in ten days.</span>
             </h2>
             <p className="font-body text-lg md:text-xl text-white/60 leading-relaxed mb-10">
               This is the objection we hear most, answered by the person it happened to, on his own channel rather than ours.
             </p>
             <div className="p-8 bg-white/5 border border-white/10 rounded-2xl mb-10">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                      <img src="/images/thumbnails/image14.png" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <span className="font-display text-lg uppercase block leading-none">Markaz Shafi'ee</span>
                      <span className="font-mono text-[10px] text-[#ff69c5] uppercase tracking-widest">Arabic Coach</span>
                   </div>
                </div>
                <p className="font-accent italic text-xl text-white/80">"Giving away the what is what proves you can be trusted with the how."</p>
             </div>
             <a href="https://youtu.be/-DjhO3maGVA" target="_blank" className="inline-flex items-center gap-4 text-white hover:text-[#ff69c5] transition-colors group">
                <span className="font-mono text-sm uppercase tracking-widest">Watch the full breakdown</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#ff69c5] group-hover:border-[#ff69c5] transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
             </a>
          </div>
          <div className="w-full lg:w-1/2">
             <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-glow">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/-DjhO3maGVA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* Fit matrix - High Craft Visual */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">Qualification</span>
            <h2 className="font-display font-bold text-4xl md:text-7xl uppercase tracking-tighter">This works for some<br />and not others.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-[#8f56ff] transition-all duration-500">
              <h3 className="font-display text-4xl uppercase tracking-tight mb-10 italic text-[#8f56ff]">A Good Fit</h3>
              <ul className="space-y-6 font-body text-xl text-white/70">
                <li className="flex gap-4 items-start"><span className="text-[#8f56ff] mt-1">→</span> You sell coaching, software, or a service.</li>
                <li className="flex gap-4 items-start"><span className="text-[#8f56ff] mt-1">→</span> The offer is validated. People buy it already.</li>
                <li className="flex gap-4 items-start"><span className="text-[#8f56ff] mt-1">→</span> You have a sales system that closes.</li>
                <li className="flex gap-4 items-start"><span className="text-[#8f56ff] mt-1">→</span> Stuck on visibility, not product or closing.</li>
              </ul>
            </div>
            <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[40px] grayscale opacity-50 hover:opacity-100 transition-all duration-500">
              <h3 className="font-display text-4xl uppercase tracking-tight mb-10 italic text-white/40">Not a Good Fit</h3>
              <ul className="space-y-6 font-body text-xl text-white/30">
                <li className="flex gap-4 items-start"><span>×</span> Still working out what to sell.</li>
                <li className="flex gap-4 items-start"><span>×</span> You need calls booked this month.</li>
                <li className="flex gap-4 items-start"><span>×</span> Nobody on your side can be on camera.</li>
                <li className="flex gap-4 items-start"><span>×</span> You want views. We optimize for calls.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Final Push */}
      <section className="py-40 px-6 md:px-16 lg:px-24 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-6xl lg:text-7xl uppercase tracking-tighter italic mb-12 leading-[0.85]">
              Research first,<br /><span className="text-[#ff69c5]">then cameras.</span>
            </h2>
            <p className="font-body text-xl text-white/40 mb-16 max-w-2xl mx-auto">
              YouTube strategy for businesses that already know how to sell. Everything we claim on this site can be checked in about ten seconds.
            </p>
            <a href="#book" className="inline-flex px-16 py-8 bg-white text-black font-display font-bold text-xl uppercase tracking-widest rounded-3xl hover:bg-[#8f56ff] hover:text-white transition-all transform hover:scale-105 shadow-glow">
              Book a call
            </a>
         </div>
      </section>

    </div>
  );
}
