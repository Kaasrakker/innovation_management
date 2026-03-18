import Navbar from '@/components/Navbar';

const chapters = [
  {
    year: '1823',
    title: 'How It Started',
    body: 'Antonio Murcatto, a Spanish immigrant, brewed his first Shiraz red wine in Bonfields, New South Wales to celebrate his marriage to Shiobhan Wijnegem. The wine\'s success prompted the couple to found a vineyard — naming it San Murcatto.',
  },
  {
    year: '1880',
    title: 'Learning the Trade',
    body: 'Passed down through generations, winemaking became a family art and duty. By 1880, a second wine — the Sauvignon Blanc — was officially licensed under the San Murcatto brand.',
  },
  {
    year: '1965–1992',
    title: 'Moving Market to Europe',
    body: 'Elvira Murcatto made a bold move: entering the Dutch wine market, then largely unknown to Australian wines. The first-mover advantage drove explosive growth. By 1992, HQ moved to Utrecht and the family sold equity to PE fund Burgundy Partners.',
  },
  {
    year: '2010–2015',
    title: 'Conquering the Alpes',
    body: 'Junior marketing director Ellen Roy proposed targeting wine consumers in the Alpine valleys — skiers and mountaineers in Austria, Bayern, and Northern Italy. The bet paid off massively. Ellen became CEO.',
  },
  {
    year: '2015–Today',
    title: 'Trouble with Profit',
    body: 'Increased competition from copycat Australian exporters and shifting European consumer trends eroded Murcatto\'s edge. Profitability fell to 1.9% ROCE. Internal creativity stagnated despite a talented workforce. A crisis meeting was called.',
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-burgundy mb-2">Our Story</h1>
        <p className="text-gray-600 font-sans mb-12">
          Founded in 1823 in Bonfields, Australia. Headquartered in Utrecht since 1992. Bold, audacious, market-savvy — and facing its greatest test.
        </p>
        <div className="relative border-l-2 border-burgundy pl-8 space-y-10">
          {chapters.map((chapter) => (
            <div key={chapter.year} className="relative">
              <span className="absolute -left-[2.65rem] top-1 w-5 h-5 rounded-full bg-gold border-2 border-burgundy" />
              <span className="text-xs font-sans text-gold font-bold uppercase tracking-widest">{chapter.year}</span>
              <h2 className="text-xl font-serif text-burgundy mt-1 mb-2">{chapter.title}</h2>
              <p className="text-gray-700 font-sans leading-relaxed">{chapter.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}