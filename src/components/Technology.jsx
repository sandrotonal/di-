import { IMG } from '../data/images';

const techImages = [IMG.tech1, IMG.tech2, IMG.tech3, IMG.tech4];

export function Technology({ t }) {
  return (
    <section className="py-20 sm:py-28 lg:py-36" data-chapter="3">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.tech.tag}</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <h2 className="text-[30px] sm:text-[44px] lg:text-[60px] font-extralight leading-[1.05] tracking-[-0.03em] mb-4 lg:mb-6">
              {t.tech.title}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.7] max-w-xl">{t.tech.sub}</p>
          </div>
        </div>
      </div>

      <div className="h-scroll overflow-x-auto pl-5 sm:pl-8 lg:pl-12">
        <div className="flex gap-4 sm:gap-6 pr-5 sm:pr-8 lg:pr-12">
          {t.tech.items.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[75vw] sm:w-[45vw] lg:w-[30vw] max-w-[420px] group cursor-pointer tilt-card">
              <div className="overflow-hidden aspect-[3/4] mb-5 img-zoom rounded-lg">
                <img src={techImages[i]} alt={item.n} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-[17px] sm:text-[20px] lg:text-[22px] font-light group-hover:text-teal-600 transition-colors">{item.n}</h3>
                <span className="text-[11px] text-gray-400">0{i+1}</span>
              </div>
              <p className="text-[13px] text-gray-600">{item.d}</p>
              <div className="text-[10px] tracking-[0.15em] uppercase text-teal-500 mt-2">{item.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
