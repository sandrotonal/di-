import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Icon } from '../components/ui/Icons';
import { HoverSlider, TextStaggerHover, HoverSliderImageWrap, HoverSliderImage } from '../components/ui/animated-slideshow';
import { ShinyButton } from '../components/ui/shiny-button';
import { IMG } from '../data/images';
import AboutSection2 from '../components/ui/about-section-2';

export default function Home({ t, lang }) {
  const isTr = lang === 'tr';
  const isDe = lang === 'de';


  const introImgTag = isTr ? 'Kişiye Özel Gülüş Tasarımı' : isDe ? 'Individuelles Smile Design' : 'Bespoke Smile Design';
  
  const servicesBtn = isTr ? 'Tüm tedaviler' : isDe ? 'Alle Behandlungen' : 'All treatments';
  const teamTitle1 = isTr ? 'Uzman hekim' : isDe ? 'Kompetentes' : 'Expert';
  const teamTitle2 = isTr ? 'kadrosu.' : isDe ? 'Ärzteteam.' : 'Dentists.';
  const teamBtn = isTr ? 'Tüm ekip' : isDe ? 'Das ganze Team' : 'All team';
  const teamImgTag = isTr ? 'Nişantaşı Diş Polikliniği' : isDe ? 'Nişantaşı Zahnklinik' : 'Nişantaşı Dental Clinic';

  const servicesTitlePart1 = isTr ? 'Bilim ile sanatın' : isDe ? 'Wo Wissenschaft auf' : 'Where science';
  const servicesTitlePart2 = isTr ? 'buluştuğu yer.' : isDe ? 'Kunst trifft.' : 'meets art.';

  const ctaTitle1 = isTr ? 'Yeni gülüşünüze' : isDe ? 'Machen Sie den Schritt' : 'Take the first step';
  const ctaTitle2 = isTr ? 'ilk adımı atın.' : isDe ? 'zu Ihrem neuen Lächeln.' : 'to your new smile.';
  const ctaDesc = isTr 
    ? 'Nişantaşı kliniğimizde ağız analiziniz ve gülüş simülasyonunuz için randevunuzu hemen oluşturun.' 
    : isDe 
      ? 'Buchen Sie jetzt Ihren Termin für eine Mundanalyse und Lächeln-Simulation in unserer Klinik in Nişantaşı.' 
      : 'Book your appointment now for an oral analysis and smile simulation at our Nişantaşı clinic.';

  const serviceSlides = [
    { title: t.services.items[0].t, image: IMG.dental1 },
    { title: t.services.items[1].t, image: IMG.dental2 },
    { title: t.services.items[2].t, image: IMG.dental3 },
    { title: t.services.items[3].t, image: IMG.dental4 },
    { title: t.services.items[4].t, image: IMG.dental5 },
  ];

  return (
    <>
      <Hero t={t} />
      <Marquee items={t.marquee} />

      {/* ── Section 1: Intro (The Philosophy) ──────────────── */}
      <AboutSection2 t={t} lang={lang} />

      {/* ── Section 1.5: Creative Philosophy Grid ─────────── */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-16 reveal">
            <div className="w-8 h-[1px] bg-[#4a78e0]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.philosophy.tag}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
            {t.philosophy.chapters.map((chap, i) => (
              <div key={i} className="group relative border-l border-gray-200 pl-6 py-4 hover:border-[#4a78e0] transition-colors duration-500">
                <div className="text-[11px] text-gray-300 group-hover:text-[#4a78e0] transition-colors duration-300 font-light mb-4 uppercase tracking-widest tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[17px] font-light text-gray-900 group-hover:text-[#4a78e0] transition-colors mb-3">
                  {chap.t}
                </h3>
                <p className="text-[13px] text-[#5a6473] font-light leading-[1.65] group-hover:text-gray-600 transition-colors">
                  {chap.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Premium Treatments (Hover Slider) ──── */}
      <section className="py-24 sm:py-32 bg-[#f4f6fa] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[1px] bg-[#4a78e0]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.services.tag.split(' · ')[1]}</span>
              </div>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extralight tracking-[-0.03em] leading-tight text-gray-900">
                <span className="line-wrap"><span className="line-inner block">{servicesTitlePart1}</span></span>
                <span className="line-wrap"><span className="line-inner block italic font-thin text-[#4a78e0]">{servicesTitlePart2}</span></span>
              </h2>
            </div>
            <Link to="/tedaviler"
              className="group inline-flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase text-gray-500 hover:text-[#4a78e0] transition-colors font-medium shrink-0"
            >
              {servicesBtn}
              <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-[#4a78e0] transition-all duration-300">
                <Icon.Arrow s={10} className="group-hover:translate-x-0.5 transition-transform group-hover:text-[#4a78e0]" />
              </span>
            </Link>
          </div>
        </div>

        <HoverSlider className="min-h-[50vh] md:min-h-[60vh] place-content-center px-5 sm:px-8 lg:px-12 text-[#5a6473]">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-12 w-full">
            <div className="flex flex-col space-y-2 md:space-y-4 w-full md:w-auto">
              {serviceSlides.map((slide, index) => (
                <TextStaggerHover
                  key={slide.title}
                  index={index}
                  className="text-[clamp(1.6rem,4vw,3rem)] font-bold uppercase tracking-tighter text-gray-800 hover:text-[#4a78e0] transition-colors"
                  text={slide.title}
                />
              ))}
            </div>
            <HoverSliderImageWrap className="w-full md:w-[45%] max-w-lg aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              {serviceSlides.map((slide, index) => (
                <HoverSliderImage
                  key={slide.title}
                  index={index}
                  imageUrl={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </section>

      {/* ── Section 3: Clinic Experience & Team ────────────── */}
      <section className="bg-[#f4f6fa] py-24 sm:py-32 border-y border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column - Team */}
            <div className="lg:col-span-5 reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-gray-400" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-550 font-medium">{t.team.tag.split(' · ')[1] || 'EKİP'}</span>
              </div>
              
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extralight tracking-[-0.03em] mb-10 text-gray-900">
                <span className="line-wrap"><span className="line-inner block">{teamTitle1}</span></span>
                <span className="line-wrap"><span className="line-inner block italic font-thin text-[#4a78e0]">{teamTitle2}</span></span>
              </h2>

              <div className="space-y-0 border-t border-gray-200">
                {t.team.members.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between py-6 border-b border-gray-200 group cursor-pointer transition-colors duration-300 hover:bg-white/40 px-2 rounded-sm">
                    <div className="flex items-center gap-5">
                      <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-black/5">
                        <img
                          src={[IMG.doc1, IMG.doc2, IMG.doc3, IMG.doc4][i]}
                          alt={doc.n}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="text-[14px] sm:text-[15px] font-medium text-gray-800 group-hover:text-[#4a78e0] transition-colors">{doc.n}</div>
                        <div className="text-[11px] text-[#4a78e0]/80 mt-0.5 font-light">{doc.r}</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#5a6473]/70 group-hover:text-[#5a6473] transition-colors pl-4 max-w-[200px] text-right font-light line-clamp-1">
                      {doc.bio}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/ekip"
                  className="group inline-flex items-center gap-4 text-[13px] uppercase tracking-[0.05em] text-gray-800 hover:text-[#4a78e0] transition-colors font-medium"
                >
                  <span className="w-9 h-9 rounded-full border border-black/10 bg-white/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon.Arrow s={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  {teamBtn}
                </Link>
              </div>
            </div>

            {/* Right Column - Large Clinic Image - Flat & clean */}
            <div className="lg:col-span-7 reveal-img lg:pt-8">
              <div className="aspect-[16/11] overflow-hidden rounded-sm relative group cursor-pointer">
                <img 
                  src={IMG.clinic4} 
                  alt="Aura Dental Studio Klinik" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter grayscale contrast-[1.03] group-hover:grayscale-0" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] tracking-[0.2em] uppercase opacity-85 font-light">
                  {teamImgTag}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── Section 5: Full-bleed CTA ──────────────────────── */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img 
          src={IMG.hero} 
          alt="Aura Dental Studio" 
          className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3s]" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto reveal flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <h2 className="text-white text-[clamp(2.2rem,5.5vw,4.5rem)] font-extralight tracking-[-0.03em] leading-[1.05] mb-4">
              <span className="line-wrap"><span className="line-inner block">{ctaTitle1}</span></span>
              <span className="line-wrap"><span className="line-inner block italic font-thin text-[#4a78e0]">{ctaTitle2}</span></span>
            </h2>
            <p className="text-gray-400 text-[14px] sm:text-[15px] font-light max-w-sm">
              {ctaDesc}
            </p>
          </div>
          
          <ShinyButton onClick={() => window.location.href = "/iletisim"}>
            {t.hero.cta}
          </ShinyButton>
        </div>
      </section>
    </>
  );
}
