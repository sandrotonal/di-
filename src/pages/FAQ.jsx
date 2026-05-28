import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Icon } from '../components/ui/Icons';
import { Accordion, AccordionContent, AccordionItem } from '../components/ui/accordion';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus, Stethoscope, CalendarClock, CreditCard, Globe, ShieldCheck, Ambulance } from 'lucide-react';

const faqIcons = [Stethoscope, CalendarClock, CreditCard, Globe, ShieldCheck, Ambulance];

export default function FAQPage({ t, lang }) {
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

      {/* ── FAQ — shadcn accordion ───────────────── */}
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
            <div className="lg:col-span-9 max-w-[800px]">
              <Accordion type="single" collapsible className="w-full">
                {t.faq.items.map((item, i) => {
                  const IconComponent = faqIcons[i] || Plus;
                  return (
                    <AccordionItem value={String(i)} key={i} className="py-2 border-t border-gray-100 last:border-b">
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                          <span className="flex items-center gap-3">
                            <span
                              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50"
                              aria-hidden="true"
                            >
                              <IconComponent size={16} strokeWidth={2} className="opacity-60" />
                            </span>
                            <span className="flex flex-col space-y-1">
                              <span className="text-gray-800">{item.q}</span>
                            </span>
                          </span>
                          <Plus
                            size={16}
                            strokeWidth={2}
                            className="shrink-0 opacity-60 transition-transform duration-200"
                            aria-hidden="true"
                          />
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionContent className="ms-3 pb-2 ps-10 text-gray-500">
                        <p className="text-[13px] sm:text-[14px] leading-[1.85] max-w-2xl font-light">
                          {item.a}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
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
                className="magnetic inline-flex items-center gap-3 text-[13px] border border-gray-300 bg-white/50 text-[#5a6473] px-6 py-3.5 rounded-full hover:border-[#4a78e0] hover:text-[#4a78e0] transition-all duration-300 font-medium"
              >
                <Icon.Phone s={13} /> {t.common.phone}
              </a>
              <a href="mailto:info@auradental.studio"
                className="magnetic inline-flex items-center gap-3 text-[13px] border border-gray-300 bg-white/50 text-[#5a6473] px-6 py-3.5 rounded-full hover:border-[#4a78e0] hover:text-[#4a78e0] transition-all duration-300 font-medium"
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
