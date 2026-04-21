import Link from 'next/link';

export const metadata = {
  title: 'White Papers | UnityESS',
  description: 'Explore in-depth white papers on battery energy storage systems, BESS technology, and energy storage solutions by UnityESS.',
};

const whitepapers = [
  {
    title: 'Why Voltage Levels Matter in Battery Energy Storage Systems (BESS)',
    subtitle: 'A Practical Framework for Choosing the Right Voltage Levels in Battery Energy Storage System Architecture',
    author: 'UnityESS',
    image: '/products/unity-model-a-bess.webp',
    tag: 'Technical',
    href: '/white-paper/voltage-levels-bess',
  },
];

export default function WhitePaperPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[rgb(58,88,129)] pt-32 pb-24 overflow-hidden">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/products/unityess-energy-storage-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-[rgb(58,88,129)] via-[rgb(58,88,129)]/80 to-transparent" />

        {/* Geometric mesh */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid slice" viewBox="0 0 1200 400">
          <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none">
            <line x1="700" y1="40" x2="800" y2="120" />
            <line x1="800" y1="120" x2="920" y2="70" />
            <line x1="920" y1="70" x2="1020" y2="160" />
            <line x1="1020" y1="160" x2="1140" y2="90" />
            <line x1="800" y1="120" x2="860" y2="210" />
            <line x1="860" y1="210" x2="970" y2="260" />
            <line x1="970" y1="260" x2="1020" y2="160" />
            <line x1="1020" y1="160" x2="1120" y2="230" />
            <line x1="1120" y1="230" x2="1140" y2="90" />
            <line x1="970" y1="260" x2="1060" y2="330" />
            <line x1="1060" y1="330" x2="1120" y2="230" />
            <line x1="860" y1="210" x2="920" y2="70" />
          </g>
          <g fill="rgba(255,255,255,0.4)">
            <circle cx="700" cy="40" r="3" />
            <circle cx="800" cy="120" r="4" />
            <circle cx="920" cy="70" r="3" />
            <circle cx="1020" cy="160" r="4" />
            <circle cx="1140" cy="90" r="3" />
            <circle cx="860" cy="210" r="3.5" />
            <circle cx="970" cy="260" r="3" />
            <circle cx="1120" cy="230" r="3.5" />
            <circle cx="1060" cy="330" r="3" />
          </g>
        </svg>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-4">Resources</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Technical Whitepapers
            </h1>
            <p className="text-white/70 mt-5 text-base leading-relaxed max-w-xl">
              Explore whitepapers on Battery Energy Storage Systems with technical research, system analysis, and industry insights to support informed energy decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitepapers.map((paper, i) => (
            <Link key={i} href={paper.href} className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white block">
              {/* Image area */}
              <div className="relative h-64 bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden p-6">
                {/* Tablet mockup frame */}
                <div className="relative w-48 h-56 bg-gray-800 rounded-xl shadow-2xl p-2 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay with title on the tablet */}
                    <div className="absolute inset-2 rounded-lg bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-3">
                      <p className="text-white text-[10px] font-bold leading-tight">{paper.title}</p>
                      <p className="text-white/60 text-[8px] mt-1">By {paper.author}</p>
                    </div>
                  </div>
                </div>
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-[rgb(58,88,129)] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                  {paper.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 group-hover:text-[rgb(58,88,129)] transition-colors">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {paper.subtitle}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-bold text-[rgb(58,88,129)] border border-[rgb(58,88,129)] px-5 py-2.5 rounded-lg hover:bg-[rgb(58,88,129)] hover:text-white transition-all duration-300">
                  Download PDF
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
