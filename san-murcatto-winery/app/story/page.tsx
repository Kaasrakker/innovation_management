'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

const chapters = [
  {
    year: '1823',
    title: 'How It Started',
    location: 'Bonfields, New South Wales, Australia',
    body: 'Antonio Murcatto — a Spanish immigrant — brewed his first Shiraz red wine to celebrate his marriage to Shiobhan Wijnegem. The wedding drew local neighbours and the festivities were fuelled by the excellent wine. The newlyweds decided to grow a large vineyard, naming their wine San Murcatto.',
    stat: null,
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
    imgAlt: 'Historic vineyard rows at sunset',
    side: 'right',
  },
  {
    year: '1880',
    title: 'Learning the Trade',
    location: 'Bonfields, New South Wales, Australia',
    body: 'In the spirit of a true family firm, Antonio and Shiobhan passed their craft to the next generations. Winemaking was not only a trade but a dutiful art and family responsibility. By 1880, a second wine — the Sauvignon Blanc — was officially produced and licensed under the San Murcatto brand.',
    stat: null,
    img: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80',
    imgAlt: 'Oak wine barrels in a cellar',
    side: 'left',
  },
  {
    year: '1965 – 1992',
    title: 'Moving Market to Europe',
    location: 'Utrecht, the Netherlands',
    body: 'After WWII, competition in New South Wales intensified and domestic demand fell. Elvira Murcatto made a bold move: targeting the Dutch market, then entirely unfamiliar with Australian wines. The first-mover advantage drove explosive growth in production, sales, and headcount. By 1992, HQ moved from Bonfields to Utrecht — drawn by the growing European market and a favourable Dutch tax system. That year, the family also sold equity to PE fund Burgundy Partners.',
    stat: { value: '1992', label: 'HQ relocated to Utrecht' },
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    imgAlt: 'Wine bottles lined up in a warehouse',
    side: 'right',
  },
  {
    year: '2010 – 2015',
    title: 'Conquering the Alpes',
    location: 'Garmisch-Partenkirchen, Germany',
    body: 'Junior marketing director Ellen Roy proposed a second bold expansion: targeting wine consumers in the Alpine mountain valleys — skiers and mountaineers in Austria, Bayern, and Northern Italy. Initially mocked by competitors and met with internal backlash, the strategy proved remarkably successful. A new depot opened in Garmisch-Partenkirchen. Shareholder value rose sharply. Ellen Roy became CEO.',
    stat: { value: '2010 – 2015', label: 'Alpine expansion period' },
    img: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&q=80',
    imgAlt: 'Snow-covered Alpine mountain resort',
    side: 'left',
  },
  {
    year: '2015 – 2022',
    title: 'Trouble with Profit',
    location: 'Utrecht HQ',
    body: 'From 2015 onwards, profits declined sharply. Competitors began mimicking the Murcatto model — exporting their own Shiraz and Sauvignon Blanc to Europe — eroding the brand\'s exclusivity. New consumer trends disrupted established purchasing patterns. An employee happiness survey revealed collapse in autonomy (35→25%), camaraderie (58→38%), and proactiveness (49→31%). Profitability fell to 1.9% ROCE. The Amsterdam Herald named Murcatto one of "10 food & beverage firms that lost its innovative touch". A crisis board meeting was called.',
    stat: { value: '1.9%', label: 'ROCE at crisis point, 2022' },
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    imgAlt: 'Empty wine glasses on a table',
    side: 'right',
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f8f5f0' }}>
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-sans mb-3" style={{ color: '#d4af37' }}>
            Founded 1823 · Bonfields, Australia · HQ Utrecht, Netherlands
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-5 leading-tight"
            style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
          >
            Our Story
          </h1>
          <p className="text-sm sm:text-base font-sans max-w-xl leading-relaxed" style={{ color: '#888' }}>
            Two centuries of family craft, audacious market moves, and the challenge of keeping innovation alive.
          </p>
        </motion.div>

        {/* Chapters */}
        <div className="flex flex-col gap-14 sm:gap-20 md:gap-24">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.year}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              {/*
               * Mobile: always image-on-top, text below.
               * md+: alternating left/right via direction:rtl trick — identical to original.
               */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12 items-center"
                style={{ direction: chapter.side === 'left' ? 'ltr' : 'rtl' }}
              >
                {/* Image */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    direction: 'ltr',
                    height: '220px',
                    boxShadow: '0 12px 48px rgba(75,30,47,0.14)',
                  }}
                >
                  {/* Taller on md+ */}
                  <style>{`
                    @media (min-width: 768px) {
                      .story-img-${i} { height: 320px !important; }
                    }
                  `}</style>
                  <div className={`story-img-${i} relative w-full`} style={{ height: '100%' }}>
                    <Image
                      src={chapter.img}
                      alt={chapter.imgAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Year overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3 sm:px-5 sm:py-4"
                    style={{ background: 'linear-gradient(to top, rgba(75,30,47,0.85), transparent)' }}
                  >
                    <span
                      className="text-white font-serif text-xl sm:text-2xl font-bold"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {chapter.year}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div style={{ direction: 'ltr' }}>
                  <p
                    className="text-xs font-sans uppercase tracking-widest mb-2"
                    style={{ color: '#d4af37' }}
                  >
                    {chapter.location}
                  </p>
                  <h2
                    className="text-2xl sm:text-3xl font-serif font-bold mb-3 sm:mb-4 leading-snug"
                    style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
                  >
                    {chapter.title}
                  </h2>
                  <p className="text-sm font-sans leading-relaxed mb-5 sm:mb-6" style={{ color: '#666' }}>
                    {chapter.body}
                  </p>

                  {/* Stat callout */}
                  {chapter.stat && (
                    <div
                      className="inline-flex flex-col px-4 sm:px-5 py-3 rounded-xl"
                      style={{ background: '#4b1e2f0d', borderLeft: '3px solid #4b1e2f' }}
                    >
                      <span
                        className="text-xl sm:text-2xl font-serif font-bold"
                        style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
                      >
                        {chapter.stat.value}
                      </span>
                      <span className="text-[11px] font-sans uppercase tracking-wider" style={{ color: '#999' }}>
                        {chapter.stat.label}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key figures bar — 1 col on mobile, 3 on sm+ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-28 pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
          style={{ borderTop: '1px solid #e8e0d8' }}
        >
          {[
            { value: '€14M', label: 'Net operating profit' },
            { value: '19M L', label: 'Volume sold annually' },
            { value: '3', label: 'Depot locations (AUS, NL, DE)' },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl sm:text-4xl font-serif font-bold"
                style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
              >
                {s.value}
              </div>
              <div className="text-xs font-sans uppercase tracking-wider mt-1" style={{ color: '#aaa' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </main>
    </div>
  );
}
