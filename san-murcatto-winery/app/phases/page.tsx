import Navbar from '@/components/Navbar';
import PhaseCard from '@/components/PhaseCard';

const phases = [
  {
    title: 'Phase 1 — Diagnose',
    description: 'Understand why innovation stalled. The employee happiness survey reveals a steep drop in autonomy (35→25%), camaraderie (58→38%), and proactiveness (49→31%). Bureaucratic approval chains are killing ideas before they surface.',
    actions: [
      'Analyse employee survey in detail by department',
      'Identify structural barriers to idea-sharing',
      'Review the Bootleg XIV case as a positive signal',
      'Audit cross-departmental communication gaps',
    ],
    color: 'bg-white',
  },
  {
    title: 'Phase 2 — Restructure',
    description: 'Redesign the organizational structure to enable corporate entrepreneurship. Reduce approval layers, grant the Design Agency operational independence, and allocate a dedicated R&D budget per project.',
    actions: [
      'Grant design agency semi-autonomous spin-out status',
      'Create a formal intrapreneurship pipeline',
      'Set up cross-departmental innovation teams',
      'Define per-project R&D budgets (no ad-hoc top approval)',
    ],
    color: 'bg-cream',
  },
  {
    title: 'Phase 3 — Innovate',
    description: 'Activate the product pipeline with low-risk, market-validated ideas. Prioritise mulled wine in the Alpes, rosé for Dutch women, and a modern label refresh — all grounded in existing market research.',
    actions: [
      'Launch mulled wine + mini ski-slope brand stores',
      'Introduce Cabernet-Sauvignon rosé for NL retail',
      'Commission modern label redesign (35% purchase-intent uplift)',
      'Greenlight Red Slopes rosé and Black Slopes Shiraz line',
    ],
    color: 'bg-white',
  },
  {
    title: 'Phase 4 — Expand',
    description: 'Evaluate spin-in ventures and new market opportunities. Acquire up to two ventures from the four available. Explore ecommerce, wine cans, and the Croatian wine trend as medium-term growth levers.',
    actions: [
      'Acquire Venture B (Club Chateau Neuf) for high-end market access',
      'Evaluate Venture D (Winecellar Maison) for subscription model potential',
      'Launch ecommerce channel targeting home consumption trend',
      'Pilot wine cans for Gen Z segment',
    ],
    color: 'bg-cream',
  },
];

export default function PhasesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-burgundy mb-2">Strategic Phases</h1>
        <p className="text-gray-600 font-sans mb-10 max-w-2xl">
          A phased approach to restoring San Murcatto's innovative edge — within an €80,000 budget constraint.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <PhaseCard
              key={phase.title}
              title={phase.title}
              description={phase.description}
              actions={phase.actions}
              color={phase.color}
            />
          ))}
        </div>
      </main>
    </div>
  );
}