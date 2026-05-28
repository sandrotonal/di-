import { IMG } from '../data/images';

export function Philosophy({ t }) {
  return (
    <section className="bg-white pinned-wrap" data-chapter="2">
      <div className="pinned-sticky flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-6 reveal">
                <div className="w-8 h-[1px] bg-gray-900"></div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.philosophy.tag}</span>
              </div>
              <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] font-extralight leading-[1.05] tracking-[-0.03em] mb-8 reveal">
                {t.philosophy.title}
              </h2>
              <p className="text-[15px] sm:text-[17px] text-gray-600 leading-[1.7] mb-10 reveal">{t.philosophy.desc}</p>
              <div className="overflow-hidden aspect-[4/5] reveal-clip img-zoom rounded-lg">
                <img src={IMG.clinic} alt="Felsefe" className="w-full h-full object-cover reveal-img" loading="lazy" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-12 lg:space-y-16 lg:pt-12">
              {t.philosophy.chapters.map((c, i) => (
                <div key={i} className="reveal border-t border-black/10 pt-8 lg:pt-10">
                  <div className="flex items-baseline gap-6 mb-4">
                    <span className="text-[13px] font-light italic text-teal-400 tabular-nums">{c.n}</span>
                    <h3 className="text-[26px] sm:text-[32px] font-extralight tracking-[-0.02em]">{c.t}</h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.75] pl-0 lg:pl-[4.5rem]">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
