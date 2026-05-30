import { IMG } from '../data/images';
import AnimatedTextCycle from './ui/animated-text-cycle';
import { ShinyButton } from './ui/shiny-button';

export function Hero({ t }) {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pt-28 pb-12 sm:pb-20 bg-[#0A0A0A]" data-chapter="0">
      
      {/* Background Graphic & Media — Using clinic (lobby) photo with warm grading & overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMG.clinic}
          alt="Aura Dental Studio Nişantaşı"
          className="w-full h-full object-cover scale-110 animate-[slowZoom_25s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          loading="eager"
          style={{ filter: 'contrast(1.05) brightness(0.48) grayscale(0.2)' }}
        />
        {/* Editorial color gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent"></div>
      </div>

      {/* Floating coordinates / Editorial details */}
      <div className="absolute top-32 right-8 sm:right-12 z-10 hidden md:block text-right select-none pointer-events-none reveal">
        <div className="text-[10px] tracking-[0.25em] text-[#4a78e0] font-mono uppercase">AURA DENTAL STUDIO</div>
        <div className="text-[10px] tracking-[0.2em] text-white/40 font-mono mt-1">41.0485° N, 28.9895° E</div>
      </div>

      {/* Main Content Area */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12">

        <h1 className="font-extralight leading-[0.92] tracking-[-0.04em] text-white w-full max-w-[95%] md:max-w-[80vw] break-words">
          <span className="line-wrap"><span className="line-inner block" style={{ fontSize: 'clamp(2.8rem, 8.5vw, 8.5rem)' }}>{t.hero.l1}</span></span>
          <span className="line-wrap"><span className="line-inner block text-[#4a78e0]" style={{ fontSize: 'clamp(2.8rem, 8.5vw, 8.5rem)' }}>
            <AnimatedTextCycle
              words={t.hero.heroWords || [t.hero.l2]}
              interval={3500}
              className="italic font-thin text-[#4a78e0]"
            />
          </span></span>
          <span className="line-wrap"><span className="line-inner block text-white" style={{ fontSize: 'clamp(2.8rem, 8.5vw, 8.5rem)' }}>{t.hero.l3}</span></span>
        </h1>

        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 reveal">
          <ShinyButton onClick={() => window.location.href = "tel:+902121234567"}>
            {t.hero.cta}
          </ShinyButton>
          
          <div className="text-[11px] text-white/70 font-mono tracking-widest uppercase border-l-2 border-[#4a78e0] pl-5 py-1.5 leading-none">
            {t.hero.meta}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowZoom {
          from { transform: scale(1.12); }
          to { transform: scale(1.02); }
        }
      `}} />
    </section>
  );
}
