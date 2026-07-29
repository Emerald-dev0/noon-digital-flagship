import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-40 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">

          {/* Column 1: Brand/Logo */}
          <div className="space-y-8">
            <Link to="/" className="text-5xl font-display text-[#8f56ff] block">ن</Link>
            <p className="font-body text-sm text-white/30 leading-relaxed max-w-xs italic">
              "YouTube strategy for businesses that already know how to sell. Everything we claim on this site can be checked in about ten seconds."
            </p>
            <a href="#book" className="inline-flex px-8 py-4 bg-white/5 border border-white/10 text-white font-display font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#8f56ff] transition-all">
              Book a call
            </a>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#ff69c5] mb-10">Navigation</h4>
            <ul className="space-y-4 font-display text-xl uppercase tracking-tight">
              <li><Link to="/garden" className="hover:text-[#8f56ff] transition-colors">The Garden</Link></li>
              <li><Link to="/pricing" className="hover:text-[#8f56ff] transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-[#8f56ff] transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-[#8f56ff] transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 3: Check the work */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#ff69c5] mb-10">Check the work</h4>
            <ul className="space-y-4 font-body text-sm text-white/40">
              <li><a href="https://youtube.com/@MarkazShafiee" target="_blank" className="hover:text-white transition-colors">Markaz Shafi'ee ↗</a></li>
              <li><a href="https://youtube.com/@ZakariyaTech" target="_blank" className="hover:text-white transition-colors">Zakariya ↗</a></li>
              <li><a href="https://youtube.com/@SalesWithAqib" target="_blank" className="hover:text-white transition-colors">Sales with Aqib ↗</a></li>
              <li><a href="https://youtube.com/@YaseenRamsey" target="_blank" className="hover:text-white transition-colors">Yaseen Ramsey ↗</a></li>
              <li><Link to="/work" className="text-white hover:text-[#8f56ff] transition-colors">All channels</Link></li>
            </ul>
          </div>

          {/* Column 4: Elsewhere */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#ff69c5] mb-10">Elsewhere</h4>
            <ul className="space-y-4 font-body text-sm text-white/40">
              <li><a href="https://youtube.com/@mubexpr" target="_blank" className="hover:text-white transition-colors">YouTube ↗</a></li>
              <li><a href="https://instagram.com/mubexpr" target="_blank" className="hover:text-white transition-colors">Instagram ↗</a></li>
              <li><a href="https://twitter.com/mubexpr" target="_blank" className="hover:text-white transition-colors">Twitter ↗</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">© 2026 Noon Digital. Founded by Mubarak Jimoh.</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8f56ff]">Search rankings are re-checked monthly.</span>
           </div>
           <div className="flex items-center gap-12">
              <span className="font-display text-2xl text-white/10 uppercase tracking-tighter italic">Straight Talk. High Craft.</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
