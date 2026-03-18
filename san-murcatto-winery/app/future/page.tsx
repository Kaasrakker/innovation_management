'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

const topIdeas = [
  {
    id: '011',
    title: 'New Brand for Orange Wine',
    owner: 'Peggy Olsonsen',
    dept: 'Creative',
    rationale: 'Orange wine is an emerging fourth colour category, commanding higher average prices. A new brand and modern label — designed by the agency — positions Murcatto as a trend-setter, not a follower.',
  },
  {
    id: '007',
    title: 'Sommelier on the Slope',
    owner: 'Julie Cowen',
    dept: 'Marketing',
    rationale: 'Small artistic wine bars on Alpine ski slopes, steered by a sommelier. Tourists who spot the Murcatto brand on-slope are 30% more likely to purchase in horeca later that day.',
  },
  {
    id: '002',
    title: 'Unlabelled Wines',
    owner: 'Christopher Christensen',
    dept: 'Marketing',
    rationale: '23% of production is currently disposed as waste. Bottling it as unlabelled wine — a tradition common in Australia — opens a low-end market opportunity while reducing unsustainable waste.',
  },
  {
    id: '021',
    title: 'Limited Family Edition',
    owner: 'Ada Kimathi',
    dept: 'Marketing',
    rationale: 'Special editions honouring notorious Murcatto family members. Extreme scarcity creates mystery, competition, and word-of-mouth among wine connoisseurs — the most valuable marketing channel.',
  },
  {
    id: '025',
    title: 'Wine Cans',
    owner: 'Derek Calbas',
    dept: 'Production',
    rationale: 'Canned wine is gaining rapid traction with Millennials and Gen Z who seek sustainable, modern packaging. Murcatto can be first to move in the European wine segment.',
  },
  {
    id: '013',
    title: 'Wine Vinegar',
    owner: 'Romily Gyasi',
    dept: 'Production',
    rationale: 'Convert low-quality wine waste into a line of herb-flavoured wine vinegars — white, rosé and red. Minimal investment, a new product category, and a circular production story.',
  },
];

const ventures = [
  {
    name: 'Venture A — Bee-Hive Grapefruit',
    verdict: 'Low fit',
    color: '#aaa',
    founder: 'Four former production engineers',
    founded: '2016',
    note: 'Mead production and B2B machinery sales. Technically innovative but outside core wine identity. Founders lack commercial skills and bookkeeping is basic.',
  },
  {
    name: 'Venture B — Club Chateau Neuf du Roi',
    verdict: 'High fit',
    color: '#6bb187',
    founder: 'Roman Murcatto',
    founded: '2018',
    note: 'Invitation-only collector club for rare wines and champagne. Loyal network of world-class chefs, vignerons, and collectors. Roman knows the Murcatto DNA. Ellen Roy personally endorses the acquisition.',
  },
  {
    name: 'Venture C — Wine-Tap',
    verdict: 'Medium fit',
    color: '#d4af37',
    founder: 'Former head of production + sales vice-director',
    founded: '2019',
    note: 'Patented wine-on-tap dispenser system targeting the horeca channel. Strong long-term potential but COVID lockdowns delayed growth. Founders are both vintners and business experts.',
  },
  {
    name: 'Venture D — Winecellar Maison',
    verdict: 'High fit',
    color: '#6bb187',
    founder: 'Two former junior sales managers + R&D engineer',
    founded: '2020',
    note: 'Home wine storage cabinets at €999–€1,299. A razor-blade subscription model would deliver wine monthly to end consumers — cutting out the middle-man and stabilising Murcatto\'s sales volume.',
  },
];

export default function FuturePage() {
  return (
    <div className="min-h-screen" style={{ background: '#f8f5f0' }}>
      <Navbar />

      {/* Hero */}
      <div className="relative h-[300px] sm:h-[360px] md:h-[420px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80"
          alt="Golden sunrise over vineyards"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(75,30,47,0.75) 100%)' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 left-0 px-5 pb-8 sm:px-8 sm:pb-10 md:px-10 md:pb-12 max-w-3xl"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans mb-2 sm:mb-3" style={{ color: '#d4af37' }}>
            Looking ahead · San Murcatto · 2022 onwards
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-3 sm:mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            A New Dawn
          </h1>
          <p className="text-sm font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            After years of decline, the crisis meeting of February 2022 became a turning point. The ideas were always there — thirty of them surfaced in days. What follows is the story of how San Murcatto reclaims its identity as a bold, market-savvy, innovative winery.
          </p>
        </motion.div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-20 sm:space-y-28">

        {/* Growth narrative — stacks on mobile, side-by-side on md+ */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-sans mb-3" style={{ color: '#d4af37' }}>
              The opportunity
            </p>
            <h2
              className="text-3xl sm:text-4xl font-serif font-bold mb-6 leading-snug"
              style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
            >
              The ideas were never the problem.
            </h2>
            <p className="text-sm font-sans leading-relaxed mb-4" style={{ color: '#666' }}>
              Ellen Roy said it plainly in the board meeting: <em>&quot;It is not that there are not any good ideas internally — it is just that our employees are not speaking up anymore.&quot;</em>
            </p>
            <p className="text-sm font-sans leading-relaxed mb-4" style={{ color: '#666' }}>
              Within days of opening the floor, 30 ideas emerged. Employees in production, marketing, R&D, and creative departments all had visions for where Murcatto could go. The Bootleg XIV discovery — fourteen batches of unauthorised wine brewed by six employees in secret — was the clearest proof: the entrepreneurial spirit was alive. It had just been locked out.
            </p>
            <p className="text-sm font-sans leading-relaxed" style={{ color: '#666' }}>
              The future of San Murcatto is not about inventing a new company. It is about unlocking the one that already exists.
            </p>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ height: '280px', boxShadow: '0 16px 56px rgba(75,30,47,0.15)' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
              alt="Sunlight breaking through vineyard leaves"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.section>

        {/* Top ideas — 1 col mobile, 2 col sm, 3 col lg */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] font-sans mb-3" style={{ color: '#d4af37' }}>
            From the floor
          </p>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold mb-2"
            style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
          >
            Top Employee Ideas
          </h2>
          <p className="text-sm font-sans mb-8 sm:mb-10 max-w-xl" style={{ color: '#999' }}>
            Six ideas selected for immediate development from the 30 submitted in the first month.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {topIdeas.map((idea, i) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(75,30,47,0.12)' }}
                className="rounded-2xl p-4 sm:p-5"
                style={{
                  background: '#fff',
                  border: '1px solid #ede8e0',
                  borderTop: '3px solid #4b1e2f',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[10px] font-bold font-sans px-2 py-0.5 rounded-full"
                    style={{ background: '#4b1e2f12', color: '#4b1e2f' }}
                  >
                    #{idea.id}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-wider" style={{ color: '#bbb' }}>
                    {idea.dept} · {idea.owner}
                  </span>
                </div>
                <h3
                  className="font-serif font-bold text-base mb-2 leading-snug"
                  style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
                >
                  {idea.title}
                </h3>
                <p className="text-xs font-sans leading-relaxed" style={{ color: '#888' }}>
                  {idea.rationale}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Ventures — stacks on mobile, side-by-side on md+ */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-sans mb-3" style={{ color: '#d4af37' }}>
                Spin-in assessment
              </p>
              <h2
                className="text-3xl sm:text-4xl font-serif font-bold mb-4 leading-snug"
                style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
              >
                Four Ventures.<br />Two Acquisitions.
              </h2>
              <p className="text-sm font-sans leading-relaxed mb-8 sm:mb-10" style={{ color: '#666' }}>
                Former employees started four ventures in the years prior to the crisis. The board authorises acquisition of a maximum of two. Each was evaluated for strategic fit, commercial maturity, and alignment with the Murcatto brand.
              </p>

              <div className="flex flex-col gap-4">
                {ventures.map((v, i) => (
                  <motion.div
                    key={v.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl p-4 sm:p-5"
                    style={{
                      background: '#fff',
                      border: '1px solid #ede8e0',
                      borderLeft: `3px solid ${v.color}`,
                    }}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2 mb-2">
                      <h3
                        className="font-serif font-bold text-sm"
                        style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
                      >
                        {v.name}
                      </h3>
                      <span
                        className="text-[10px] font-bold font-sans px-2 py-0.5 rounded-full shrink-0"
                        style={{ background: v.color + '20', color: v.color }}
                      >
                        {v.verdict}
                      </span>
                    </div>
                    <p className="text-[11px] font-sans mb-1" style={{ color: '#bbb' }}>
                      Est. {v.founded} · {v.founder}
                    </p>
                    <p className="text-xs font-sans leading-relaxed" style={{ color: '#888' }}>
                      {v.note}
                    </p>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs font-sans mt-5" style={{ color: '#bbb' }}>
                Recommendation: acquire Venture B and Venture D.
              </p>
            </div>

            {/* Right col: image + quote — not sticky on mobile */}
            <div className="flex flex-col gap-6 md:sticky md:top-10">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: '240px', boxShadow: '0 16px 56px rgba(75,30,47,0.12)' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1543418219-44e30b057fea?w=800&q=80"
                  alt="Wine glasses clinking at a celebration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className="rounded-2xl p-5 sm:p-7"
                style={{ background: '#4b1e2f', color: '#fff' }}
              >
                <p
                  className="text-lg sm:text-xl font-serif leading-relaxed mb-4"
                  style={{ fontFamily: 'Georgia, serif', color: '#f8f5f0' }}
                >
                  &quot;Let us together create an organization that thrives at supporting and stimulating corporate entrepreneurship and innovation.&quot;
                </p>
                <p className="text-xs font-sans uppercase tracking-widest" style={{ color: '#d4af37' }}>
                  Ellen Roy, CEO — February 16, 2022
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Closing vision */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ minHeight: '280px' }}
        >
          <Image
            src="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=1600&q=80"
            alt="Golden sunlight over rolling vineyard hills"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(75,30,47,0.88) 0%, rgba(75,30,47,0.5) 100%)' }}
          />
          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] font-sans mb-3 sm:mb-4" style={{ color: '#d4af37' }}>
              The vision
            </p>
            <h2
              className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 sm:mb-6 leading-snug"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Market savvy. Innovative. Audacious.
            </h2>
            <p className="text-sm font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              These three words were never just marketing copy — they were the DNA of a family that crossed an ocean to sell wine in a country that had never tasted it. They are the same words that sent cases to ski-tourists in the Alps a decade later. The 100-day plan does not invent a new San Murcatto. It restores the original one.
            </p>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
