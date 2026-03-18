import Navbar from '@/components/Navbar';

const topIdeas = [
  { id: '011', title: 'New Brand for Orange Wine', owner: 'Peggy Olsonsen', dept: 'Creative', rationale: 'Emerging trend, aligns with modern label strategy, new revenue stream.' },
  { id: '007', title: 'Sommelier on the Slope', owner: 'Julie Cowen', dept: 'Marketing', rationale: 'Directly leverages Alpes expansion; boosts premium brand image in horeca.' },
  { id: '002', title: 'Unlabelled Wines', owner: 'Christopher Christensen', dept: 'Marketing', rationale: 'Addresses 23% production waste — low cost, Australian heritage angle.' },
  { id: '021', title: 'Limited Family Edition', owner: 'Ada Kimathi', dept: 'Marketing', rationale: 'Leverages Murcatto heritage; drives scarcity and word-of-mouth.' },
  { id: '025', title: 'Wine Cans', owner: 'Derek Calbas', dept: 'Production', rationale: 'Taps Gen Z sustainability preferences; differentiates from traditional bottles.' },
  { id: '013', title: 'Wine Vinegar', owner: 'Romily Gyasi', dept: 'Production', rationale: 'Circular production using waste byproduct; low investment, new category.' },
];

const ventures = [
  { name: 'A — Bee-Hive Grapefruit', verdict: 'Low fit', note: 'Mead is outside core wine identity; weak commercial capability.' },
  { name: 'B — Club Chateau Neuf du Roi', verdict: 'High fit', note: 'Premium network access; Ellen Roy endorses; Roman Murcatto familiar with company DNA.' },
  { name: 'C — Wine-Tap', verdict: 'Medium fit', note: 'Patented tech; strong horeca relevance; COVID-delayed growth is a risk.' },
  { name: 'D — Winecellar Maison', verdict: 'High fit', note: 'Razor-blade subscription model stabilises revenue; direct-to-consumer channel.' },
];

export default function FuturePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-14">

        <section>
          <h1 className="text-4xl font-serif text-burgundy mb-2">The Future</h1>
          <p className="text-gray-600 font-sans max-w-2xl">
            Prioritised employee ideas and venture acquisition recommendations to revive San Murcatto's innovative power.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-burgundy mb-6">Top Employee Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topIdeas.map((idea) => (
              <div key={idea.id} className="bg-white rounded-card shadow-card p-5 border-l-4 border-gold">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gold font-sans">#{idea.id}</span>
                  <h3 className="font-serif text-burgundy font-bold">{idea.title}</h3>
                </div>
                <p className="text-xs text-gray-500 font-sans mb-2">{idea.owner} · {idea.dept}</p>
                <p className="text-sm text-gray-700 font-sans">{idea.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-burgundy mb-6">Venture Spin-in Assessment</h2>
          <div className="space-y-3">
            {ventures.map((v) => (
              <div key={v.name} className="bg-white rounded-card shadow-card p-5 flex items-start gap-4">
                <span className={`mt-1 px-2 py-0.5 rounded text-xs font-bold font-sans shrink-0 ${
                  v.verdict === 'High fit' ? 'bg-green text-white' :
                  v.verdict === 'Medium fit' ? 'bg-gold text-white' :
                  'bg-gray-200 text-gray-600'
                }`}>
                  {v.verdict}
                </span>
                <div>
                  <h3 className="font-serif text-burgundy font-bold">{v.name}</h3>
                  <p className="text-sm text-gray-700 font-sans mt-1">{v.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 font-sans mt-3">
            The board authorises acquisition of a maximum of two ventures. Recommended: B and D.
          </p>
        </section>

      </main>
    </div>
  );
}