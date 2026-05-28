import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';
import { ShinyButton } from '../components/ui/shiny-button';

import { IMG } from '../data/images';

export default function TestimonialsPage({ t }) {
  const testimonials = (t.testimonials.items || []).map((item, i) => ({
    text: item.q,
    name: item.name,
    role: item.role,
    image: [
      IMG.patient1,
      IMG.patient2,
      IMG.patient3,
      IMG.smile1,
      IMG.smile2,
      IMG.dental1,
      IMG.dental4,
      IMG.dental6,
      IMG.dental7
    ][i % 9]
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);
  return (
    <>
      <PageHero
        tag={t.testimonials.tag}
        title={t.testimonials.title}
        subtitle="Her biri gerçek, her biri ilham veren dönüşüm hikayeleri."
        breadcrumb="Hastalar"
      />

      {/* ── Animated Columns Section ─────────────────── */}
      <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-14"
          >
            <div className="flex justify-center">
              <div className="border border-gray-300 py-1.5 px-5 rounded-lg text-[11px] tracking-wider uppercase text-gray-700 bg-white/50">
                {t.testimonials.tag.split(' · ')[1] || 'Hastalar'}
              </div>
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,3rem)] font-extralight tracking-[-0.02em] mt-6 text-center">
              {t.testimonials.title}
            </h2>
            <p className="text-center mt-4 text-gray-600 text-[14px] leading-[1.7] max-w-md">
              Gerçek hastalarımızın gerçek hikayeleri.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden px-5 sm:px-8 lg:px-12">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </section>

      {/* ── Patient photos ────────────────────────────── */}
      <section className="py-0">
        <div className="grid grid-cols-3 h-[40vh] sm:h-[50vh]">
          {testimonials.slice(0, 3).map((item, i) => (
            <div key={i} className="overflow-hidden img-zoom rounded-sm border border-black/5">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.2s]" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
            <div>
              <div className="w-8 h-[1px] bg-teal-800 mb-7" />
              <h2 className="text-[clamp(1.4rem,3vw,2.5rem)] font-extralight tracking-[-0.02em] leading-[1.15] text-gray-900">
                {t.common.stillHaveQuestions || 'Siz de katılın'}
              </h2>
            </div>
            <div className="flex flex-col sm:items-end gap-4">
              <p className="text-[13px] text-gray-400 max-w-xs sm:text-right leading-[1.7] font-light">
                {t.common.freeConsultation || 'İlk görüşme ücretsiz'}
              </p>
              <ShinyButton onClick={() => window.location.href = "/iletisim"}>
                {t.common.appointment || 'Randevu Al'}
              </ShinyButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
