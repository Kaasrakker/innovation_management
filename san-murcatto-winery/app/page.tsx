'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const phases = [
  {
    period: 'Day 0–30',
    label: 'Phase 1',
    date: 'Feb 16 – Mar 18, 2022',
    color: '#4b1e2f',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    imgAlt: 'Reviewing documents and survey data',
    milestones: [
      { title: 'Implement Storytelling', spec: 'Revive the Murcatto heritage narrative — from Bonfields 1823 to Alpine expansion — across internal comms and brand materials.' },
      { title: 'Announce Structural Change', spec: 'Ellen Roy communicates reorganisation to all 200+ employees. Design agency granted autonomy; R&D receives dedicated project budgets.' },
      { title: 'Start Employee Training', spec: 'Formalise Stefan Jansens-style intrapreneurship workshops. Teach venture pitching, business planning, and cross-dept collaboration.' },
    ],
  },
  {
    period: 'Day 30–60',
    label: 'Phase 2',
    date: 'Mar 18 – Apr 17, 2022',
    color: '#6bb187',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    imgAlt: 'Team collaborating on new structure',
    milestones: [
      { title: 'Structure Change Implemented', spec: 'New org design live. Mark Hall & Ashley Wilson contracts renewed. Susan Rose reports R&D spend directly without top-level sign-off.' },
      { title: 'Contact Waste Partners', spec: 'Engage composting and bioenergy firms to process the 23% of wine production currently disposed as waste.' },
      { title: 'Contact Lighter Bottle Suppliers', spec: 'Negotiate with glass manufacturers for lighter-weight bottles — reduces transport emissions and aligns with Gen Z sustainability expectations.' },
    ],
  },
  {
    period: 'Day 60–80',
    label: 'Phase 3',
    date: 'Apr 17 – May 7, 2022',
    color: '#d4af37',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    imgAlt: 'Wine bottles in production',
    milestones: [
      { title: 'Pomace as Fertilizer', spec: 'Redirect grape pomace from the Bonfields vineyard to local agricultural partners. Closes the production loop sustainably.' },
      { title: 'Lighter Bottles in Production', spec: 'Switch Utrecht bottling line to lighter glass. Lower carbon footprint per shipment via Vintage Sea Haulage ISO tanks.' },
    ],
  },
  {
    period: 'Day 80–100',
    label: 'Phase 4',
    date: 'May 7 – May 27, 2022',
    color: '#8b5e3c',
    img: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=600&q=80',
    imgAlt: 'Expanding vineyard landscape',
    milestones: [
      { title: 'Implement New Label', spec: 'Modern minimalistic label design rolled out across Shiraz, Sauvignon Blanc, and new products. +35% purchase intent for new world wines.' },
      { title: 'Waste Partnership Live', spec: 'Formal contracts signed with waste processing partners. 23% production waste now diverted into circular supply chain.' },
      { title: 'Pomace Programme Formalised', spec: 'Pomace-to-fertilizer pipeline codified as standard operating procedure. R&D tasked with exploring pomace-derived by-products.' },
    ],
  },
];

const futurePlans = [
  {
    horizon: 'Q3 2022',
    title: 'Alpine Ski-Slope Stores',
    img: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=600&q=80',
    imgAlt: 'Snow-covered Alpine ski resort',
    description: 'Open mini brand stores directly on ski slopes in Garmisch-Partenkirchen, Sölden, and Zillertal. Serve mulled wine on-slope. Consumer research confirms ski-tourists who spot Murcatto on the slopes are 30% more likely to purchase in horeca later that day.',
  },
  {
    horizon: 'Q4 2022',
    title: 'Venture Spin-ins',
    img: 'https://images.unsplash.com/photo-1543418219-44e30b057fea?w=600&q=80',
    imgAlt: 'Wine glasses at an exclusive event',
    description: 'Acquire Club Chateau Neuf du Roi (Venture B) for premium European network access — a collector club founded by Roman Murcatto. Acquire Winecellar Maison (Venture D) to launch a razor-blade subscription model delivering wine directly to home consumers monthly.',
  },
  {
    horizon: '2023',
    title: 'New Product Lines',
    img: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80',
    imgAlt: 'New wine varieties in barrels',
    description: 'Launch orange wine under a new brand identity. Introduce Cabernet-Sauvignon rosé targeting Dutch women in retail. Pilot sustainable wine cans for Gen Z. Begin Red Slopes rosé and Black Slopes Shiraz — the second and third entries in the ski-slope colour series.',
  },
  {
    horizon: '2023–2024',
    title: 'Ecommerce & Direct Sales',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    imgAlt: 'Online shopping and digital commerce',
    description: 'Launch a direct-to-consumer ecommerce channel targeting the home consumption trend. Integrate with the Winecellar Maison subscription model. Global internet wine sales grew 600% between 2006 and 2015 — the post-COVID acceleration makes this channel critical.',
  },
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen" style={{ background: '#f8f5f0' }}>
      <Navbar />

      {/* Hero */}
      <div className="relative h-[280px] sm:h-[320px] md:h-[360px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80"
          alt="Golden sunrise over a vineyard"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(75,30,47,0.8))' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 left-0 px-5 pb-7 sm:px-8 sm:pb-9 md:px-10 md:pb-10 max-w-3xl"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans mb-2" style={{ color: '#d4af37' }}>
            ECB3IM · Innovation Management · February 2022
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            100-Day Management Plan
          </h1>
          <p className="text-xs sm:text-sm font-sans mt-2 sm:mt-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Ellen Roy&apos;s action plan to restore San Murcatto&apos;s innovative power — €80,000 budget — presented to the Executive Shareholder Committee.
          </p>
        </motion.div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Timeline */}
        <div className="relative mb-6">

          {/* Spine — only visible on md+ where the 4-col grid is active */}
          <motion.div
            className="hidden md:block absolute h-px top-[5.2rem] left-0 right-0"
            style={{ background: 'linear-gradient(to right, #4b1e2f, #6bb187, #d4af37, #8b5e3c)' }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />

          {/* Mobile: vertical stacked list — Tablet: 2 cols — Desktop: 4 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
            {phases.map((phase, pi) => (
              <motion.div
                key={phase.label}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: pi * 0.12, duration: 0.45 }}
                className="flex flex-col"
              >
                {/* Phase image */}
                <div
                  className="relative rounded-xl overflow-hidden mb-4"
                  style={{ height: '130px', boxShadow: '0 4px 20px rgba(75,30,47,0.12)' }}
                >
                  <Image
                    src={phase.img}
                    alt={phase.imgAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${phase.color}cc, transparent)` }}
                  />
                  <span
                    className="absolute bottom-3 left-3 text-white font-serif font-bold text-lg"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {phase.label}
                  </span>
                </div>

                {/* Dot on spine — only shown on md+ */}
                <motion.div
                  className="hidden md:block w-[10px] h-[10px] rounded-full mb-4 ml-0"
                  style={{ background: phase.color, boxShadow: `0 0 0 3px #f8f5f0, 0 0 0 5px ${phase.color}` }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 + pi * 0.12, type: 'spring', stiffness: 300 }}
                />

                <p className="text-[10px] uppercase tracking-[0.2em] font-sans mb-0.5" style={{ color: phase.color }}>
                  {phase.period}
                </p>
                <p className="text-[11px] font-sans mb-5" style={{ color: '#bbb' }}>
                  {phase.date}
                </p>

                {/* Milestones */}
                <div className="flex flex-col gap-4">
                  {phase.milestones.map((m, mi) => (
                    <motion.div
                      key={m.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + pi * 0.12 + mi * 0.07 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: phase.color }} />
                        <span className="text-sm font-sans font-semibold" style={{ color: '#2a1018' }}>
                          {m.title}
                        </span>
                      </div>
                      <p
                        className="text-xs font-sans leading-relaxed pl-3.5"
                        style={{ color: '#999', borderLeft: `1px solid ${phase.color}44` }}
                      >
                        {m.spec}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer stats — 2 cols on mobile, 4 on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 sm:mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
          style={{ borderTop: '1px solid #e8e0d8' }}
        >
          {[
            { value: '€80,000', label: 'Short-term budget' },
            { value: '1.9%', label: 'ROCE at crisis point' },
            { value: '23%', label: 'Production waste diverted' },
            { value: '+35%', label: 'Purchase intent w/ modern label' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-serif font-bold" style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}>
                {s.value}
              </div>
              <div className="text-[11px] font-sans uppercase tracking-wider mt-1" style={{ color: '#aaa' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA to future — stacks on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-6 sm:px-8 py-6 sm:py-7 mb-16 sm:mb-24"
          style={{ background: '#4b1e2f' }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-sans mb-1" style={{ color: '#d4af37' }}>
              Beyond Day 100
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              What comes next?
            </h3>
            <p className="text-sm font-sans mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Ski-slope stores, venture acquisitions, new product lines, and direct-to-consumer ecommerce.
            </p>
          </div>
          <Link
            href="/future"
            className="shrink-0 px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all hover:scale-105 whitespace-nowrap"
            style={{ background: '#d4af37', color: '#4b1e2f' }}
          >
            View Future Plans →
          </Link>
        </motion.div>

        {/* Future plans preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] font-sans mb-3" style={{ color: '#d4af37' }}>
            Looking ahead
          </p>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold mb-2"
            style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
          >
            Beyond the 100 Days
          </h2>
          <p className="text-sm font-sans mb-8 sm:mb-10 max-w-xl" style={{ color: '#999' }}>
            The 100-day plan is the foundation. What follows is the full story of recovery — new products, new channels, and new markets.
          </p>

          {/* Cards — 1 col on mobile, 2 on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {futurePlans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden"
                style={{ background: '#fff', border: '1px solid #ede8e0', boxShadow: '0 4px 20px rgba(75,30,47,0.07)' }}
              >
                {/* Card image */}
                <div className="relative" style={{ height: '180px' }}>
                  <Image
                    src={plan.img}
                    alt={plan.imgAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(75,30,47,0.7), transparent)' }}
                  />
                  <span
                    className="absolute bottom-3 left-4 text-xs font-sans uppercase tracking-widest"
                    style={{ color: '#d4af37' }}
                  >
                    {plan.horizon}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3
                    className="font-serif font-bold text-base sm:text-lg mb-2"
                    style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-sm font-sans leading-relaxed" style={{ color: '#888' }}>
                    {plan.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/future"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full font-sans font-semibold text-sm transition-all hover:scale-105"
              style={{ background: '#4b1e2f', color: '#f8f5f0' }}
            >
              Explore the Full Future Plan →
            </Link>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
