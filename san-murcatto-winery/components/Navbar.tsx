'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Timeline' },
  { href: '/story', label: 'Our Story' },
  { href: '/phases', label: 'Phases' },
  { href: '/future', label: 'Future' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-10 py-4"
      style={{
        background: 'rgba(75,30,47,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212,175,55,0.2)',
      }}
    >
      {/* Logo / home link */}
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

      {/* Links */}
      <ul className="flex items-center gap-1">
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
    </nav>
  );
}
