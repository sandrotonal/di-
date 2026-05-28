import { FAQ } from './ui/FAQ';

export function FAQSection({ t, openFaq, setOpenFaq }) {
  return (
    <section className="py-24 sm:py-32 lg:py-40" data-chapter="11">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 sm:mb-16">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.faq.tag}</span>
            </div>
            <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] font-extralight leading-[1.05] tracking-[-0.03em] lg:sticky lg:top-32">
              {t.faq.title}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            {t.faq.items.map((q, i) => (
              <FAQ
                key={i}
                q={q.q}
                a={q.a}
                open={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
