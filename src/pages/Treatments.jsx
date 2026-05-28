import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { IMG } from '../data/images';
import { Icon } from '../components/ui/Icons';
import { HoverSlider, TextStaggerHover, HoverSliderImageWrap, HoverSliderImage } from '../components/ui/animated-slideshow';

const svcImages = [IMG.dental1, IMG.dental2, IMG.dental3, IMG.dental4, IMG.dental5, IMG.dental6, IMG.dental7, IMG.dental8];

export default function Treatments({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.services.tag}
        title={t.services.title}
        subtitle={t.services.desc}
        breadcrumb={t.nav.treatments}
        lang={lang}
      />

      {/* ── Hover Slider: All Treatments ──────────────── */}
      <section className="py-16 sm:py-24 bg-[#f4f6fa] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#4a78e0]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.services.tag}</span>
          </div>
        </div>

        <HoverSlider className="min-h-[40vh] md:min-h-[55vh] place-content-center px-5 sm:px-8 lg:px-12 text-[#5a6473]">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-12 w-full">
            <div className="flex flex-col space-y-2 md:space-y-3 w-full md:w-auto">
              {t.services.items.map((s, i) => (
                <TextStaggerHover
                  key={s.t}
                  index={i}
                  className="text-[clamp(1.2rem,2.5vw,2.2rem)] font-bold uppercase tracking-tighter text-gray-800 hover:text-[#4a78e0] transition-colors"
                  text={s.t}
                />
              ))}
            </div>
            <HoverSliderImageWrap className="w-full md:w-[45%] max-w-lg aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              {t.services.items.map((s, i) => (
                <HoverSliderImage
                  key={s.t}
                  index={i}
                  imageUrl={svcImages[i]}
                  src={svcImages[i]}
                  alt={s.t}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </section>

      {/* ── Image gallery strip ──────────────────────── */}
      <section className="py-0 bg-[#f4f6fa]">
        <div className="h-scroll overflow-x-auto">
          <div className="flex gap-3 p-3" style={{ width: 'max-content' }}>
            {svcImages.slice(0, 5).map((img, i) => (
              <div key={i} className="shrink-0 w-[52vw] sm:w-[36vw] lg:w-[28vw] aspect-[3/4] overflow-hidden img-zoom rounded-sm">
                <img src={img} alt={t.services.items[i]?.t} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f6fa]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 reveal">
          <p className="text-[clamp(1.4rem,3vw,2.5rem)] font-extralight tracking-[-0.02em] max-w-lg leading-[1.2] text-gray-900">
            {t.common.freeConsultation}
          </p>
          <Link to="/iletisim"
            className="magnetic shrink-0 inline-flex items-center gap-3 text-[13px] border border-gray-300 bg-white/50 text-gray-700 px-7 py-3.5 rounded-full hover:border-[#4a78e0] hover:text-[#4a78e0] transition-all duration-300 font-medium"
          >
            {t.common.contactUs} <Icon.Arrow s={11} className="-rotate-45 group-hover:text-[#4a78e0]" />
          </Link>
        </div>
      </section>
    </>
  );
}
