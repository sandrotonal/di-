import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Icon } from '../components/ui/Icons';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';
import { IMG } from '../data/images';

export default function Home({ t, lang }) {
  const isTr = lang === 'tr';
  const isDe = lang === 'de';

  const introTitle = isTr ? 'Gülüşünüzün mimarı:' : isDe ? 'Ihr Lächeln-Architekt:' : 'The architect of your smile:';
  const introDesc = isTr 
    ? 'Modern diş hekimliğini sanatla buluşturuyoruz. En son dijital teknolojiler ve uzman hekim kadromuzla size özel gülüş tasarımını hayata geçiriyoruz.' 
    : isDe 
      ? 'Wir verbinden moderne Zahnheilkunde mit Kunst. Mit modernsten digitalen Technologien und unserem kompetenten Zahnärzteteam realisieren wir Ihr individuelles Smile Design.' 
      : 'We connect modern dentistry with art. We realize your personalized smile design with state-of-the-art digital technologies and our expert dentist team.';

  const introBtn = isTr ? 'Yaklaşımimizi keşfedin' : isDe ? 'Ansatz entdecken' : 'Discover our approach';
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

  const testimonialsData = [
    { text: 'Harika bir ekip ve profesyonel yaklaşım. Gülüşüm hayal ettiğimden çok daha güzel oldu.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face', name: 'Elif K.', role: 'Dijital Gülüş Tasarımı' },
    { text: '10 yıl protez kullandım. Artık gerçek dişlerimle yiyebiliyor, konuşabiliyorum. Mükemmel.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face', name: 'Can Ö.', role: 'All-on-4 İmplant' },
    { text: 'Kimse fark etmedi, ben her gün sonucu gördüm. Invisalign süreci sandığımdan çok kolaydı.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face', name: 'Aylin Ş.', role: 'Ortodonti' },
    { text: 'Dişlerimin rengi ve şekli beni çok rahatsız ediyordu. 3 seansta hayalimdeki gülüşe kavuştum.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face', name: 'Murat Y.', role: 'Zirkonyum Kaplama' },
    { text: 'Çok profesyonel ve sıcak bir ekip. Sonuçlar beklentilerimin çok üzerinde oldu.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face', name: 'Selin A.', role: 'Diş Beyazlatma' },
    { text: 'Tedaviye başlamadan sonucu görmek inanılmaz bir histi. Güven tam oldu.', image: 'https://images.unsplash.com/photo-1554744511-d6c603f27c54?w=120&h=120&fit=crop&crop=face', name: 'Emre Ç.', role: 'Dijital Gülüş Tasarımı' },
  ];

  const c1 = testimonialsData.slice(0, 2);
  const c2 = testimonialsData.slice(2, 4);
  const c3 = testimonialsData.slice(4, 6);

  return (
    <>
      <Hero t={t} />
      <Marquee items={t.marquee} />

      {/* ── Section 1: Intro (The Philosophy) ──────────────── */}
      <section className="py-24 sm:py-32 bg-[#f4f6fa] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-[#4a78e0]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.hero.tag}</span>
              </div>
              
              <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-extralight leading-[1.05] tracking-[-0.03em] mb-8 text-gray-900">
                <span className="line-wrap"><span className="line-inner block">{introTitle}</span></span>
                <span className="line-wrap"><span className="line-inner block italic font-thin text-[#4a78e0]">Aura Dental Studio.</span></span>
              </h2>
              
              <p className="text-[15px] sm:text-[16px] text-[#5a6473] leading-[1.85] mb-10 max-w-md font-light">
                {introDesc}
              </p>
              
              <Link to="/yaklasim"
                className="group inline-flex items-center gap-4 text-[13px] tracking-[0.05em] uppercase text-gray-800 hover:text-[#4a78e0] transition-colors duration-300 font-medium"
              >
                <span className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#4a78e0] group-hover:scale-105 transition-all duration-500 bg-white/50">
                  <Icon.Arrow s={12} className="group-hover:translate-x-0.5 transition-transform group-hover:text-[#4a78e0]" />
                </span>
                {introBtn}
              </Link>
            </div>

            {/* Right Interactive Image (Borderless flat block) */}
            <div className="lg:col-span-7 reveal-img">
              <div className="aspect-[16/10] overflow-hidden rounded-sm relative group cursor-pointer">
                <img 
                  src={IMG.clinic2} 
                  alt="Aura Dental Studio" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0 contrast-[1.02]" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] tracking-[0.2em] uppercase opacity-80 font-light">
                  {introImgTag}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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

      {/* ── Section 2: Premium Treatments ──────────────────── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal gap-6">
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
              className="group inline-flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase text-gray-500 hover:text-[#4a78e0] transition-colors font-medium"
            >
              {servicesBtn} 
              <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-[#4a78e0] transition-all duration-300">
                <Icon.Arrow s={10} className="group-hover:translate-x-0.5 transition-transform group-hover:text-[#4a78e0]" />
              </span>
            </Link>
          </div>

          <div className="border-t border-gray-100">
            {t.services.items.slice(0, 5).map((s, i) => (
              <Link to="/tedaviler" key={i}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-7 sm:py-8 border-b border-gray-100 hover:border-[#4a78e0]/20 transition-colors duration-500 relative"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-[#f4f6fa]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                <div className="flex items-baseline gap-6 sm:gap-12 pl-2 group-hover:translate-x-2 transition-transform duration-500">
                  <span className="text-[11px] text-gray-300 tabular-nums shrink-0 font-light tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="text-[clamp(1.1rem,2vw,1.4rem)] font-light text-gray-800 group-hover:text-[#4a78e0] transition-colors duration-300 tracking-[-0.01em]">
                      {s.t}
                    </span>
                    <span className="text-[11px] text-[#5a6473] opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-[280px] sm:max-w-none line-clamp-1 font-light">
                      {s.d}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 pr-2 mt-4 sm:mt-0 pl-16 sm:pl-0">
                  <span className="text-[11px] text-gray-300 group-hover:text-[#4a78e0] transition-colors duration-300 tracking-wide font-light uppercase">{s.meta}</span>
                  <span className="w-8 h-8 rounded-full border border-transparent bg-gray-50 text-gray-400 group-hover:bg-[#4a78e0] group-hover:text-white flex items-center justify-center transition-all duration-500 group-hover:scale-105 shadow-sm">
                    <Icon.Arrow s={10} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 sm:hidden">
            <Link to="/tedaviler" className="group inline-flex items-center gap-2 text-[13px] text-[#4a78e0] font-medium">
              {servicesBtn} 
              <Icon.Arrow s={10} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
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

      {/* ── Section 4: Testimonials Columns ───────────────── */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-14"
          >
            <div className="border border-gray-300 py-1.5 px-5 rounded-lg text-[11px] tracking-wider uppercase text-gray-700 bg-white/50">
              {t.testimonials.tag.split(' · ')[1] || 'Hastalar'}
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,3rem)] font-extralight tracking-[-0.02em] mt-6">
              {t.testimonials.title}
            </h2>
            <p className="mt-4 text-gray-600 text-[14px] leading-[1.7] max-w-md">
              {t.testimonials.items[0].role ? 'Gerçek hastalarımızın gerçek hikayeleri.' : ''}
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden px-5 sm:px-8 lg:px-12">
          <TestimonialsColumn testimonials={c1} duration={12} />
          <TestimonialsColumn testimonials={c2} className="hidden md:block" duration={16} />
          <TestimonialsColumn testimonials={c3} className="hidden lg:block" duration={14} />
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/hastalar"
            className="group inline-flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase text-gray-500 hover:text-teal-800 transition-colors font-medium"
          >
            Tüm yorumlar
            <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-teal-800 transition-all duration-300">
              <Icon.Arrow s={10} className="group-hover:translate-x-0.5 transition-transform group-hover:text-teal-800" />
            </span>
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
          
          <Link to="/iletisim"
            className="magnetic inline-flex items-center gap-4 text-[13px] tracking-[0.05em] uppercase bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-[#f4f6fa] hover:scale-105 transition-all duration-500 shadow-xl font-medium shrink-0 w-fit"
          >
            {t.hero.cta} 
            <Icon.Arrow s={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 group-hover:text-[#4a78e0]" />
          </Link>
        </div>
      </section>
    </>
  );
}
