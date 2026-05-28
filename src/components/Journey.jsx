export function Journey({ t }) {
  return (
    <section className="bg-white pinned-wrap" data-chapter="4">
      <div className="pinned-sticky flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-2 mb-6 reveal">
                <div className="w-8 h-[1px] bg-gray-900"></div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.journey.tag}</span>
              </div>
              <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] font-extralight leading-[1.05] tracking-[-0.03em] mb-6 reveal">
                {t.journey.title}
              </h2>
              <p className="text-[14px] text-gray-600 leading-[1.7] mb-8 reveal">{t.journey.intro}</p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="space-y-0">
                {t.journey.items.map((step, i) => (
                  <div key={i} className="reveal group border-t border-black/10 py-8 lg:py-10 cursor-pointer hover:pl-4 transition-all duration-700">
                    <div className="flex items-baseline gap-6 mb-3">
                      <span className="text-[12px] font-light text-teal-400 tabular-nums w-6">0{i+1}</span>
                      <h3 className="text-[24px] sm:text-[30px] font-extralight tracking-[-0.02em] flex-1 group-hover:text-teal-600 group-hover:italic transition-all duration-500">
                        {step.t}
                      </h3>
                      <span className="text-[11px] tracking-wider uppercase text-gray-500 hidden sm:block">{step.time}</span>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-[1.7] pl-0 lg:pl-[3.5rem] mb-2">{step.d}</p>
                    <p className="text-[11px] tracking-[0.1em] uppercase text-gray-400 pl-0 lg:pl-[3.5rem]">{step.detail}</p>
                  </div>
                ))}
                <div className="border-t border-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
