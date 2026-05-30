import { Link, useNavigate } from 'react-router-dom';
import { motion } from "motion/react";
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Icon } from '../components/ui/Icons';
import { HoverSlider, TextStaggerHover, HoverSliderImageWrap, HoverSliderImage } from '../components/ui/animated-slideshow';
import { ShinyButton } from '../components/ui/shiny-button';
import { IMG } from '../data/images';
import AboutSection2 from '../components/ui/about-section-2';
import { ApproachTimeline } from '../components/ApproachTimeline';
import TeamShowcase from '../components/ui/team-showcase';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';


export default function Home({ t, lang }) {
  const navigate = useNavigate();
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
    { title: t.services.items[0].t, image: IMG.treatmentDsd },
    { title: t.services.items[1].t, image: IMG.treatmentImplant },
    { title: t.services.items[2].t, image: IMG.treatmentVeneer },
    { title: t.services.items[3].t, image: IMG.treatmentOrtho },
    { title: t.services.items[4].t, image: IMG.treatmentWhitening },
  ];

  const mappedMembers = t.team.members.map((doc, i) => ({
    id: String(i + 1),
    name: doc.n,
    role: doc.r,
    bio: doc.bio,
    image: [IMG.doc1, IMG.doc2, IMG.doc3, IMG.doc4][i],
    social: [
      { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' },
      { linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' },
      { linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' }
    ][i]
  }));

  const testimonials = (t.testimonials.items || []).map((item, i) => ({
    text: item.q,
    name: item.name,
    role: item.role,
    image: [
      IMG.patient1,
      IMG.patient2,
      IMG.patient3,
      IMG.patient4,
      IMG.patient5,
      IMG.patient6,
      IMG.patient7,
      IMG.patient8,
      IMG.patient9
    ][i % 9]
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (

    <>
      <Hero t={t} />
      <Marquee items={t.marquee} />

      {/* ── Section 1: Intro (The Philosophy) ──────────────── */}
      <AboutSection2 t={t} lang={lang} />

      <ApproachTimeline t={t} lang={lang} />

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
          
          {/* Header */}
          <div className="reveal mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gray-400" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-550 font-medium">{t.team.tag.split(' · ')[1] || (lang === 'tr' ? 'EKİP' : 'TEAM')}</span>
            </div>
            
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-extralight tracking-[-0.03em] text-gray-900 leading-[1.1]">
              {teamTitle1} <br />
              <span className="italic font-thin text-[#4a78e0]">{teamTitle2}</span>
            </h2>
          </div>

          <TeamShowcase members={mappedMembers} />

          <div className="mt-12 text-center reveal">
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
      </section>

      {/* ── Testimonials Sliding Columns Section ─────────────────── */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden relative border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
            <div className="flex justify-center">
              <div className="border border-gray-300 py-1.5 px-5 rounded-lg text-[10px] tracking-[0.2em] uppercase text-gray-500 bg-white/50">
                {t.testimonials.tag.split(' · ')[1] || (lang === 'tr' ? 'YORUMLAR' : 'REVIEWS')}
              </div>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-extralight tracking-[-0.03em] text-gray-900 leading-[1.1] mt-6 text-center">
              {lang === 'tr' ? 'Hasta' : lang === 'de' ? 'Patienten' : 'Patient'} <br />
              <span className="italic font-thin text-[#4a78e0]">{lang === 'tr' ? 'deneyimleri.' : lang === 'de' ? 'bewertungen.' : 'experiences.'}</span>
            </h2>
            <p className="text-center mt-6 text-gray-500 text-[14px] leading-[1.8] max-w-sm font-light">
              {t.testimonials.sub}
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[640px] overflow-hidden px-5 sm:px-8 lg:px-12">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
        
        <div className="mt-16 text-center reveal">
          <Link to="/hastalar"
            className="group inline-flex items-center gap-4 text-[13px] uppercase tracking-[0.05em] text-gray-800 hover:text-[#4a78e0] transition-colors font-medium"
          >
            <span className="w-9 h-9 rounded-full border border-black/10 bg-white/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Icon.Arrow s={11} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
            {lang === 'tr' ? 'Tüm yorumlar' : lang === 'de' ? 'Alle Bewertungen' : 'All reviews'}
          </Link>
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
          
          <ShinyButton onClick={() => navigate("/iletisim")}>
            {t.hero.cta}
          </ShinyButton>
        </div>
      </section>
    </>
  );
}
