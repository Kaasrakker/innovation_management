'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Timeline' },
  { href: '/story', label: 'Our Story' },
  { href: '/phases', label: 'Phases' },
  { href: '/future', label: 'Future' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-burgundy text-cream px-8 py-4 flex items-center justify-between shadow-card">
      <span className="font-serif text-xl font-bold tracking-wide">San Murcatto</span>
      <ul className="flex gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-sm font-sans transition-colors hover:text-gold ${
                pathname === href ? 'text-gold underline underline-offset-4' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}