import { IMG } from '../data/images';

export function VirtualTour({ t }) {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white" data-chapter="8">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.tour.tag}</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extralight leading-[1.05] tracking-[-0.03em] mb-4">{t.tour.title}</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7] max-w-xl">{t.tour.desc}</p>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 lg:px-12 reveal-clip">
        <div className="max-w-[1440px] mx-auto overflow-hidden aspect-[21/9] relative img-zoom rounded-lg">
          <img src={IMG.clinic2} alt="Sanal Tur" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
          <div className="absolute top-6 left-6 text-[10px] tracking-[0.2em] uppercase bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            <span>{t.common.virtualTour}</span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="text-white">
              <div className="text-[20px] sm:text-[24px] font-extralight">Aura Dental Studio</div>
              <div className="text-[11px] tracking-wider opacity-70 mt-1">{t.tour.info}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
