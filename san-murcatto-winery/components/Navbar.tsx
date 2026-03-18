'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Timeline' },
  { href: '/story', label: 'Our Story' },
  { href: '/phases', label: 'Phases' },
  { href: '/future', label: 'Future' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(75,30,47,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212,175,55,0.2)',
      }}
    >
      {/* Main bar */}
      <div className="flex items-center justify-between px-5 sm:px-10 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold transition-transform group-hover:scale-110"
            style={{ background: '#d4af37', color: '#4b1e2f' }}
          >
            SM
          </div>
          <span
            className="font-serif text-lg font-bold tracking-wide transition-opacity group-hover:opacity-80"
            style={{ color: '#f8f5f0', fontFamily: 'Georgia, serif' }}
          >
            San Murcatto
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative px-4 py-2 text-sm font-sans rounded-full transition-colors"
                  style={{ color: active ? '#4b1e2f' : 'rgba(248,245,240,0.75)' }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: '#d4af37' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 hover:text-white transition-colors">
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-colors"
          style={{ color: '#f8f5f0' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-0.5 w-5 rounded-full"
            style={{ background: '#d4af37' }}
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-5 rounded-full"
            style={{ background: '#d4af37' }}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block h-0.5 w-5 rounded-full"
            style={{ background: '#d4af37' }}
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden flex flex-col px-5 pb-4 gap-1"
            style={{ borderTop: '1px solid rgba(212,175,55,0.15)' }}
          >
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-sans transition-colors"
                    style={{
                      color: active ? '#4b1e2f' : 'rgba(248,245,240,0.8)',
                      background: active ? '#d4af37' : 'transparent',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
