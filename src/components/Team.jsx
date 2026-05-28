import { IMG } from '../data/images';

const docImages = [IMG.doc1, IMG.doc2, IMG.doc3, IMG.doc4];

export function Team({ t }) {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white" data-chapter="10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-16 sm:mb-24">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.team.tag}</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extralight leading-[1.05] tracking-[-0.03em]">{t.team.title}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 stagger">
          {t.team.members.map((doc, i) => (
            <div key={i} className="group cursor-pointer tilt-card">
              <div className="overflow-hidden aspect-[3/4] mb-5 img-zoom rounded-lg">
                <img
                  src={docImages[i]}
                  alt={doc.n}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-[16px] font-light">{doc.n}</h3>
                <span className="text-[11px] text-gray-400">0{i+1}</span>
              </div>
              <p className="text-[12px] text-gray-700 mb-1">{doc.r}</p>
              <p className="text-[11px] text-gray-500 leading-[1.5]">{doc.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
