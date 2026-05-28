/* ─────────────────────────────────────────────────────────
   PageHero — compact, editorial page header
   ───────────────────────────────────────────────────────── */
import { Link } from 'react-router-dom';

export function PageHero({ tag, title, subtitle, breadcrumb, lang }) {
  const homeLabel = lang === 'tr' ? 'Ana Sayfa' : lang === 'de' ? 'Startseite' : 'Home';
  return (
    <section className="pt-32 pb-14 sm:pt-40 sm:pb-16 bg-[#f4f6fa] border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* breadcrumb */}
        {breadcrumb && (
          <div className="flex items-center gap-2 mb-10 reveal">
            <Link to="/" className="text-[11px] tracking-[0.15em] text-gray-400 hover:text-[#4a78e0] transition-colors uppercase">
              {homeLabel}
            </Link>
            <span className="text-gray-300 text-[10px]">/</span>
            <span className="text-[11px] tracking-[0.15em] text-[#5a6473] uppercase font-medium">{breadcrumb}</span>
          </div>
        )}

        <div className="max-w-3xl">
          {tag && (
            <div className="flex items-center gap-3 mb-7 reveal">
              <div className="w-8 h-[1px] bg-[#4a78e0]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{tag}</span>
            </div>
          )}

          <h1
            className="font-extralight leading-[1.02] tracking-[-0.03em] text-gray-900 line-wrap reveal"
            style={{ fontSize: 'clamp(2.2rem,5.5vw,5rem)' }}
          >
            <span className="line-inner block">{title}</span>
          </h1>

          {subtitle && (
            <p className="mt-6 text-[15px] sm:text-[16px] text-[#5a6473] leading-[1.8] max-w-xl reveal font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
