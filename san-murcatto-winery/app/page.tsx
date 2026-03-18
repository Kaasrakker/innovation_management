import Navbar from '@/components/Navbar';
import TimelineItem from '@/components/TimelineItem';

const timeline = [
  {
    period: 'Day 0–30',
    milestones: [
      { title: 'Announce Structural Change', details: 'CEO Ellen Roy announces a new innovation-enabling structure to the Executive Committee.' },
      { title: 'Idea Solicitation Launch', details: 'Middle management begins collecting employee ideas across all departments.' },
      { title: 'Employee Happiness Response', details: 'Address the low-scoring survey items: autonomy, camaraderie, and supervisor approachability.' },
    ],
  },
  {
    period: 'Day 30–60',
    milestones: [
      { title: 'Cross-Dept. Collaboration', details: 'Set up interdisciplinary teams to develop top employee ideas into venture pitches.' },
      { title: 'Venture Spin-in Decision', details: 'Evaluate and acquire up to two external ventures (A–D) using available board funds.' },
      { title: 'R&D Budget Allocation', details: 'Assign dedicated per-project R&D budgets to end ad-hoc top-level approvals.' },
    ],
  },
  {
    period: 'Day 60–100',
    milestones: [
      { title: 'Product Pipeline Review', details: 'Greenlight new products: mulled wine for the Alpes, rosé for NL women\'s market, orange wine.'},
      { title: 'Label & Branding Refresh', details: 'Commission the design agency to create modern, minimalistic labels for new world wines.' },
      { title: 'Management Action Plan', details: 'Present 100-day report to Executive Shareholder Committee with short- and long-term roadmap.' },
    ],
  },
  {
    period: 'Beyond Day 100',
    milestones: [
      { title: 'Sustained Innovation Culture', details: 'Formalize internal idea pipeline and intrapreneurship processes across all levels.' },
      { title: 'Market Expansion Review', details: 'Evaluate new market opportunities in Scandinavia, Croatia wine trend, and ecommerce.' },
      { title: 'Brand Repositioning', details: 'Reposition San Murcatto as a modern, audacious new world winery — market savvy and sustainable.' },
    ],
  },
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-burgundy mb-2">100-Day Management Plan</h1>
        <p className="text-gray-600 font-sans mb-10 max-w-2xl">
          Ellen Roy's action plan to restore San Murcatto's innovative power — presented to the Executive Shareholder Committee.
        </p>
        <div className="overflow-x-auto pb-8">
          <div className="flex gap-10 min-w-max">
            {timeline.map((segment) => (
              <div key={segment.period} className="flex flex-col gap-4">
                <span className="text-gold font-bold font-sans text-sm uppercase tracking-widest">
                  {segment.period}
                </span>
                {segment.milestones.map((m) => (
                  <TimelineItem key={m.title} title={m.title} details={m.details} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}