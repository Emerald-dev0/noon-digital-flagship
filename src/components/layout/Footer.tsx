import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-40 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Column 1: Brand/Logo */}
          <div className="space-y-6">
            <Link to="/" className="font-display text-2xl font-black uppercase tracking-tighter">Noon Digital</Link>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs">
              YouTube strategy for businesses that already know how to sell. Everything we claim on this site can be checked in about ten seconds.
            </p>
            <button className="px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#f0531c] hover:text-white transition-all shadow-xl">
              Book a call
            </button>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#f0531c] mb-8">Pages</h4>
            <ul className="space-y-4 font-display text-lg uppercase tracking-tight">
              <li><Link to="/garden" className="hover:text-[#f0531c] transition-colors">The Garden</Link></li>
              <li><Link to="/pricing" className="hover:text-[#f0531c] transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-[#f0531c] transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-[#f0531c] transition-colors">About</Link></li>
              <li><a href="#book" className="hover:text-[#f0531c] transition-colors">Book a call</a></li>
            </ul>
          </div>

          {/* Column 3: Check the work */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#f0531c] mb-8">Check the work</h4>
            <ul className="space-y-4 font-body text-sm text-white/50">
              <li><a href="https://youtube.com/@MarkazShafiee" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Markaz Shafi'ee ↗</a></li>
              <li><a href="https://youtube.com/@ZakariyaTech" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Zakariya ↗</a></li>
              <li><a href="https://youtube.com/@SalesWithAqib" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Sales with Aqib ↗</a></li>
              <li><a href="https://youtube.com/@YaseenRamsey" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Yaseen Ramsey ↗</a></li>
              <li><Link to="/work" className="text-white hover:text-[#f0531c] transition-colors">All channels</Link></li>
            </ul>
          </div>

          {/* Column 4: Elsewhere */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#f0531c] mb-8">Elsewhere</h4>
            <ul className="space-y-4 font-body text-sm text-white/50">
              <li><a href="https://youtube.com/@mubexpr" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">YouTube ↗</a></li>
              <li><a href="https://instagram.com/mubexpr" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Instagram ↗</a></li>
              <li><a href="https://twitter.com/mubexpr" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Twitter ↗</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">© 2026 Noon Digital. Run by Mubarak Jimoh.</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#f0531c]">Search rankings on this site are re-checked monthly.</span>
           </div>
           <div className="flex items-center gap-4 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {/* Optional: Add Adobe Acrobat or other tech stack icons if needed */}
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">Built with High Craft</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
