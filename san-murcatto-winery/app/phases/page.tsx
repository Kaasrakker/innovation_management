'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

const phases = [
  {
    number: '01',
    title: 'Diagnose',
    period: 'Day 0 – 30',
    color: '#4b1e2f',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imgAlt: 'Person reviewing documents and data at a desk',
    summary: 'Understand why innovation stalled despite a creative, entrepreneurial workforce.',
    context: 'The employee happiness survey reveals a steep drop across every dimension. Autonomy fell from 35% to 25%. Camaraderie collapsed from 58% to 38%. Proactiveness dropped from 49% to 31%. Bureaucratic approval chains are killing ideas before they surface — as the Bootleg XIV case makes clear.',
    actions: [
      { label: 'Survey deep-dive', detail: 'Analyse happiness survey results per department to locate structural pain points.' },
      { label: 'Bootleg XIV debrief', detail: 'Treat the 14 secret wine batches as a signal, not a scandal — map the informal innovation network.' },
      { label: 'Approval audit', detail: 'Document every decision that currently requires top-level sign-off. Identify what can be delegated.' },
      { label: 'Communication gaps', detail: 'Map cross-departmental interaction. Production, R&D, and Creative rarely meet outside lunch or corporate events.' },
    ],
  },
  {
    number: '02',
    title: 'Restructure',
    period: 'Day 30 – 60',
    color: '#6bb187',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    imgAlt: 'Team collaborating around a whiteboard',
    summary: 'Redesign the organisation to enable corporate entrepreneurship at every level.',
    context: 'The design agency has been creatively stifled — every external assignment requires signatures from all top-level directors. Mark and Ashley\'s six-year contracts are about to expire. The R&D department has no dedicated budget and must beg for funds project by project. These are fixable structural problems.',
    actions: [
      { label: 'Agency autonomy', detail: 'Grant the product design & advertising unit semi-independent status. Renew Mark Hall and Ashley Wilson\'s contracts.' },
      { label: 'R&D ring-fence', detail: 'Allocate per-project R&D budgets directly to Susan Rose — no ad-hoc top-level approval required.' },
      { label: 'Intrapreneurship pipeline', detail: 'Formalise Stefan Jansens-style workshops. Create a structured idea-to-venture track across all departments.' },
      { label: 'Cross-dept teams', detail: 'Set up interdisciplinary teams pairing engineers with marketeers and creatives to develop top ideas into pitches.' },
    ],
  },
  {
    number: '03',
    title: 'Innovate',
    period: 'Day 60 – 80',
    color: '#d4af37',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    imgAlt: 'Wine bottles and glasses with warm light',
    summary: 'Activate the product pipeline with low-risk, market-validated innovations.',
    context: 'Market research is already in hand. Modern minimalistic labels increase purchase intent by 35% for new world wines. There is an unmet gap for mulled wine on Alpine slopes. Dutch female wine drinkers are an underserved retail segment. The creative agency has the concepts ready — they just need a greenlight.',
    actions: [
      { label: 'Mulled wine + ski stores', detail: 'Launch heated mulled wine in mini brand stores on Alpine slopes. Brand exposure drives 30% higher horeca purchase later that day.' },
      { label: 'Rosé for NL retail', detail: 'Introduce Cabernet-Sauvignon rosé with feminine packaging targeting Dutch women in saturated retail chains.' },
      { label: 'Modern label refresh', detail: 'Commission new minimalistic designs across the portfolio. Greenlight the Red Slopes rosé and Black Slopes Shiraz line.' },
      { label: 'Orange wine brand', detail: 'Launch a new brand identity for orange wine — a growing fourth colour category commanding premium prices.' },
    ],
  },
  {
    number: '04',
    title: 'Expand',
    period: 'Day 80 – 100',
    color: '#8b5e3c',
    img: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=800&q=80',
    imgAlt: 'Aerial view of expanding vineyard landscape',
    summary: 'Acquire spin-in ventures and open new channels for sustained growth.',
    context: 'Four former-employee ventures are available for acquisition — the board authorises a maximum of two. Venture B (Club Chateau Neuf du Roi) provides premium European market access from the top. Venture D (Winecellar Maison) opens a direct-to-consumer subscription channel that stabilises revenue and bypasses the retail margin squeeze.',
    actions: [
      { label: 'Acquire Venture B', detail: 'Club Chateau Neuf du Roi — Roman Murcatto\'s exclusive collector club. Builds elite network of chefs, vignerons, and connoisseurs across Europe.' },
      { label: 'Acquire Venture D', detail: 'Winecellar Maison — razor-blade subscription model delivers wine monthly to home consumers, stabilising sales volume and forecasting.' },
      { label: 'Ecommerce launch', detail: 'Direct-to-consumer online channel targeting the home consumption trend accelerated by COVID-19.' },
      { label: 'Wine cans pilot', detail: 'Pilot sustainable canned wine for Gen Z and Millennial segments seeking modern, eco-friendly packaging.' },
    ],
  },
];

export default function PhasesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f8f5f0' }}>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-sans mb-3" style={{ color: '#d4af37' }}>
            ECB3IM · 100-Day Plan · €80,000 budget
          </p>
          <h1
            className="text-5xl font-serif font-bold mb-4 leading-tight"
            style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
          >
            Strategic Phases
          </h1>
          <p className="text-sm font-sans max-w-xl leading-relaxed" style={{ color: '#888' }}>
            A phased approach to restoring San Murcatto&apos;s innovative edge — diagnosing the problem, restructuring the organisation, activating the product pipeline, and expanding into new channels.
          </p>
        </motion.div>

        {/* Phase cards — alternating layout */}
        <div className="flex flex-col gap-16">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-5 gap-10 items-start ${i % 2 === 1 ? 'direction-rtl' : ''}`}
              style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}
            >
              {/* Image — 2 cols */}
              <div
                className="col-span-2 relative rounded-2xl overflow-hidden"
                style={{
                  direction: 'ltr',
                  height: '340px',
                  boxShadow: '0 12px 48px rgba(75,30,47,0.13)',
                }}
              >
                <Image
                  src={phase.img}
                  alt={phase.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Phase number overlay */}
                <div
                  className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: phase.color }}
                >
                  <span className="text-white font-serif font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    {phase.number}
                  </span>
                </div>
              </div>

              {/* Content — 3 cols */}
              <div className="col-span-3" style={{ direction: 'ltr' }}>
                <p
                  className="text-xs uppercase tracking-[0.25em] font-sans mb-1"
                  style={{ color: phase.color }}
                >
                  {phase.period}
                </p>
                <h2
                  className="text-3xl font-serif font-bold mb-3"
                  style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
                >
                  Phase {phase.number} — {phase.title}
                </h2>
                <p
                  className="text-sm font-sans font-semibold mb-3 leading-relaxed"
                  style={{ color: '#555' }}
                >
                  {phase.summary}
                </p>
                <p className="text-sm font-sans leading-relaxed mb-7" style={{ color: '#888' }}>
                  {phase.context}
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  {phase.actions.map((action) => (
                    <div
                      key={action.label}
                      className="flex gap-3 items-start"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: phase.color }}
                      />
                      <div>
                        <span
                          className="text-sm font-sans font-semibold"
                          style={{ color: '#2a1018' }}
                        >
                          {action.label}
                        </span>
                        <span className="text-sm font-sans" style={{ color: '#999' }}>
                          {' '}— {action.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Budget footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-10 grid grid-cols-4 gap-6"
          style={{ borderTop: '1px solid #e8e0d8' }}
        >
          {[
            { value: '€80,000', label: 'Short-term budget' },
            { value: '4', label: 'Strategic phases' },
            { value: '2', label: 'Max venture acquisitions' },
            { value: '100', label: 'Days to shareholder presentation' },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl font-serif font-bold"
                style={{ color: '#4b1e2f', fontFamily: 'Georgia, serif' }}
              >
                {s.value}
              </div>
              <div className="text-[11px] font-sans uppercase tracking-wider mt-1" style={{ color: '#aaa' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </main>
    </div>
  );
}
