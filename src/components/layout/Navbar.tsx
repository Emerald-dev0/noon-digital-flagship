import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../primitives/Logo';
import { NAV_LINKS } from '@/constants/content';
import { NavLink, Link } from 'react-router-dom';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/50 backdrop-blur-lg"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-8 h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) => `
                  px-4 py-2 text-body-sm font-medium transition-colors duration-300 rounded-lg
                  ${isActive ? 'text-white bg-white/[0.08]' : 'text-white/50 hover:text-white hover:bg-white/[0.04]'}
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/pricing"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f0531c] text-white text-body-sm font-semibold hover:bg-[#ff6c3a] transition-colors duration-300 shadow-subtle"
            >
              Start Here
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.04] transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }} transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                {mobileOpen ? (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-50 md:hidden border-b border-white/[0.06]"
          >
            <div className="bg-black/95 backdrop-blur-xl">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `
                    block px-5 py-3 text-body-md font-medium transition-colors
                    ${isActive ? 'text-white bg-white/[0.08]' : 'text-white/50 hover:text-white hover:bg-white/[0.04]'}
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block mx-5 my-3 px-5 py-3 text-center rounded-xl bg-[#f0531c] text-white font-semibold hover:bg-[#ff6c3a] transition-colors"
              >
                Start Here
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
