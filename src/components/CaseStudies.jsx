const caseImages = [
  "https://images.pexels.com/photos/3779700/pexels-photo-3779700.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/5622250/pexels-photo-5622250.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3779711/pexels-photo-3779711.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

export function CaseStudies({ t }) {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white" data-chapter="6">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 sm:mb-20 lg:mb-24">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.cases.tag}</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <h2 className="text-[30px] sm:text-[44px] lg:text-[60px] font-extralight leading-[1.05] tracking-[-0.03em]">{t.cases.title}</h2>
          </div>
        </div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {t.cases.items.map((c, i) => (
            <div key={i} className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className={`col-span-12 lg:col-span-7 reveal-clip perspective-card ${i % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <div className="overflow-hidden aspect-[16/10] lg:aspect-[4/3] img-zoom cursor-grow rounded-lg">
                  <img src={caseImages[i]} alt={c.t} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className={`col-span-12 lg:col-span-4 reveal ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="text-[11px] tracking-[0.2em] uppercase text-teal-500 mb-3 sm:mb-4">{c.tag}</div>
                <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-extralight leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4">{c.t}</h3>
                <p className="text-[14px] text-gray-600 leading-[1.7] mb-3 sm:mb-4">{c.d}</p>
                <div className="text-[11px] tracking-wider text-gray-400 uppercase">{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
