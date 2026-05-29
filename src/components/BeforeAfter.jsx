import { IMG } from '../data/images';
import { BeforeAfterSlider } from './ui/BeforeAfterSlider';

export function BeforeAfter({ t }) {
  const homeImages = [
    { before: IMG.veneerBefore, after: IMG.veneerAfter },
    { before: IMG.smileBefore, after: IMG.smileAfter },
    { before: IMG.orthoBefore, after: IMG.orthoAfter }
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40" data-chapter="5">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.beforeAfter.tag}</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extralight leading-[1.05] tracking-[-0.03em] mb-4">
              {t.beforeAfter.title}
            </h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">{t.beforeAfter.sub}</p>
          </div>
        </div>
      </div>

      <div className="h-scroll overflow-x-auto pl-5 sm:pl-8 lg:pl-12">
        <div className="flex gap-6 sm:gap-8 pr-5 sm:pr-8 lg:pr-12">
          {[0,1,2].map(i => {
            const imgPair = homeImages[i] || { before: IMG.before, after: IMG.after };
            return (
              <div key={i} className="flex-shrink-0 w-[85vw] sm:w-[55vw] lg:w-[400px]">
                <BeforeAfterSlider before={imgPair.before} after={imgPair.after} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
