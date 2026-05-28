import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Icon } from '../components/ui/Icons';

export default function FAQPage({ t, lang }) {
  const [open, setOpen] = useState(null);

  const faqSub = lang === 'tr' 
    ? 'Her şeyi şeffaf anlatırız. Tedaviler, süreçler ve fiyatlandırma hakkında merak ettikleriniz.' 
    : lang === 'de' 
      ? 'Wir erklären alles transparent. Fragen zu Behandlungen, Prozessen und Preisen.' 
      : 'We explain everything transparently. Questions about treatments, processes, and pricing.';

  return (
    <>
      <PageHero
        tag={t.faq.tag}
        title={t.faq.title}
        subtitle={faqSub}
        breadcrumb={t.nav.faq}
        lang={lang}
      />

      {/* ── FAQ — full width accordion ───────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Sidebar label */}
            <div className="hidden lg:block lg:col-span-3 lg:pr-10">
              <div className="sticky top-28 reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-[1px] bg-[#4a78e0]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.common.questions}</span>
                </div>
                <p className="text-[13px] text-[#5a6473] leading-[1.75] mb-6 font-light">
                  {t.common.moreQuestions}
                </p>
                <a href="tel:+902121234567"
                  className="inline-flex items-center gap-2.5 text-[13px] text-[#4a78e0] hover:text-[#4a78e0]/80 transition-colors group font-medium"
                >
                  <Icon.Phone s={12} className="group-hover:rotate-12 transition-transform duration-300" />
                  +90 212 123 45 67
                </a>
              </div>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-9">
              {t.faq.items.map((item, i) => (
                <div key={i} className="reveal border-t border-gray-100 last:border-b">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 sm:py-7 text-left group"
                  >
                    <span className="text-[clamp(0.95rem,1.8vw,1.15rem)] font-light text-gray-800 group-hover:text-[#4a78e0] transition-colors pr-8">
                      {item.q}
                    </span>
                    <span className={`shrink-0 w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#4a78e0] group-hover:text-white flex items-center justify-center transition-all duration-500 ${open === i ? 'rotate-45' : ''}`}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ maxHeight: open === i ? '300px' : '0' }}
                  >
                    <p className="pb-7 text-[13px] sm:text-[14px] text-[#5a6473] leading-[1.85] max-w-2xl pr-10 font-light">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Still have questions — text only ─────────── */}
      <section className="py-16 sm:py-24 bg-[#f4f6fa] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end reveal">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extralight tracking-[-0.02em] leading-[1.15] text-gray-900">
                {t.common.stillHaveQuestions}<br />
                <span className="italic font-thin text-[#4a78e0]">{t.common.hereToAnswer}</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 sm:justify-end">
              <a href="tel:+902121234567"
                className="magnetic inline-flex items-center gap-3 text-[13px] border border-gray-300 bg-white/50 text-gray-700 px-6 py-3.5 rounded-full hover:border-[#4a78e0] hover:text-[#4a78e0] transition-all duration-300 font-medium"
              >
                <Icon.Phone s={13} /> {t.common.phone}
              </a>
              <a href="mailto:info@auradental.studio"
                className="magnetic inline-flex items-center gap-3 text-[13px] border border-gray-300 bg-white/50 text-gray-700 px-6 py-3.5 rounded-full hover:border-[#4a78e0] hover:text-[#4a78e0] transition-all duration-300 font-medium"
              >
                <Icon.Mail s={13} /> {t.common.email}
              </a>
              <Link to="/iletisim"
                className="magnetic inline-flex items-center gap-3 text-[13px] bg-[#4a78e0] text-white px-7 py-3.5 rounded-full hover:bg-[#4a78e0]/90 transition-colors shadow-md font-medium"
              >
                {t.common.appointment} <Icon.Arrow s={11} className="-rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
