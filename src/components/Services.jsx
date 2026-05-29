import { IMG } from '../data/images';

const serviceImages = [
  IMG.treatmentDsd,
  IMG.treatmentImplant,
  IMG.treatmentVeneer,
  IMG.treatmentOrtho,
  IMG.treatmentWhitening,
  IMG.treatmentFilling,
  IMG.treatmentCrown,
  IMG.treatmentEndo
];

export function Services({ t }) {
  return (
    <section className="py-20 sm:py-28 lg:py-36" data-chapter="1">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 sm:mb-20 lg:mb-24">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-gray-700">{t.services.tag}</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <h2 className="text-[30px] sm:text-[44px] lg:text-[60px] font-extralight leading-[1.05] tracking-[-0.03em]">
              {t.services.title}
            </h2>
            <p className="mt-6 sm:mt-8 text-[14px] sm:text-[16px] lg:text-[17px] text-gray-600 leading-[1.7] max-w-2xl">{t.services.desc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 gap-y-12 sm:gap-y-16 lg:gap-y-20 stagger">
          {t.services.items.map((s, i) => (
            <div key={i} className="group cursor-pointer service-card tilt-card">
              <div className="overflow-hidden aspect-[4/5] img-zoom rounded-lg">
                <img src={serviceImages[i]} alt={s.t} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="service-overlay rounded-lg"></div>
              <div className="service-meta">
                <div className="text-[10px] tracking-[0.15em] uppercase opacity-80 mb-1">{s.meta}</div>
                <div className="text-[12px] leading-snug">{s.d}</div>
              </div>
              <div className="flex items-baseline justify-between mb-2 mt-4">
                <h3 className="text-[16px] sm:text-[18px] lg:text-[19px] font-light tracking-[-0.01em] group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-500">
                  {s.t}
                </h3>
                <span className="text-[11px] text-gray-400 tabular-nums">0{i+1}</span>
              </div>
              <div className="w-full h-[1px] bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
