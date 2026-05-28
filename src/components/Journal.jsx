import { IMG } from '../data/images';
import { Icon } from './ui/Icons';

const journalImages = [IMG.journal1, IMG.journal2, IMG.journal3];

export function Journal({ t }) {
  return (
    <section className="py-24 sm:py-32 lg:py-40" data-chapter="9">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-16 sm:mb-20">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.journal.tag}</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extralight leading-[1.05] tracking-[-0.03em] mb-4">{t.journal.title}</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">{t.journal.sub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 stagger">
          {t.journal.items.map((item, i) => (
            <article key={i} className="journal-card group cursor-pointer">
              <div className="overflow-hidden aspect-[4/5] mb-5 rounded-lg">
                <img src={journalImages[i]} alt={item.t} className="journal-img w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex items-center gap-3 mb-3 text-[11px] tracking-wider uppercase text-gray-500">
                <span className="journal-tag">{item.cat}</span>
                <span className="opacity-40">·</span>
                <span>{item.date}</span>
                <span className="opacity-40">·</span>
                <span>{item.read}</span>
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-light leading-[1.3] tracking-[-0.01em] mb-3 flex items-start justify-between gap-3 group-hover:text-teal-600 transition-colors">
                <span>{item.t}</span>
                <Icon.Arrow s={16} c="journal-arrow flex-shrink-0 mt-1" />
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
