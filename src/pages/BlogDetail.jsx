import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { IMG } from '../data/images';
import { PageHero } from '../components/PageHero';
import { T } from '../data/translations';

function slugify(text) {
  const map = {
    'ü': 'u', 'ş': 's', 'ı': 'i', 'ö': 'o', 'ç': 'c', 'ğ': 'g',
    'Ü': 'u', 'Ş': 's', 'İ': 'i', 'Ö': 'o', 'Ç': 'c', 'Ğ': 'g',
  };
  return text
    .toLowerCase()
    .replace(/[üşıöçğ]/g, c => map[c] || c)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const journalImages = [
  IMG.treatmentDsd,
  IMG.treatmentImplant,
  IMG.treatmentVeneer,
  IMG.treatmentOrtho,
  IMG.journal5,
  IMG.treatmentWhitening,
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
  IMG.treatmentCrown,
  IMG.treatmentEndo
];

export default function BlogDetail({ t, lang }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find index by checking all languages in translations T
  let foundIndex = -1;
  const langKeys = Object.keys(T);
  for (const l of langKeys) {
    const items = T[l]?.journal?.items || [];
    const idx = items.findIndex(a => slugify(a.t) === slug);
    if (idx !== -1) {
      foundIndex = idx;
      break;
    }
  }

  const articles = t.journal.items;
  const article = foundIndex !== -1 ? articles[foundIndex] : null;

  // Automatically update the URL slug when the language changes
  useEffect(() => {
    if (foundIndex !== -1) {
      const activeArticle = t.journal.items[foundIndex];
      const correctSlug = slugify(activeArticle.t);
      if (correctSlug !== slug) {
        navigate(`/journal/${correctSlug}`, { replace: true });
      }
    }
  }, [lang, foundIndex, slug, t.journal.items, navigate]);

  if (!article) {
    return (
      <div className="pt-36 pb-24 text-center">
        <PageHero tag="" title="404" subtitle="Makale bulunamadı." breadcrumb="Journal" lang={lang} />
        <Link to="/journal" className="text-[#4a78e0] underline mt-4 inline-block">
          {lang === 'tr' ? 'Journal\'a dön' : lang === 'de' ? 'Zurück zum Journal' : 'Back to Journal'}
        </Link>
      </div>
    );
  }

  const imgSrc = journalImages[foundIndex] || IMG.journal1;
  const paragraphs = article.body ? article.body.split('\n') : [article.d];

  return (
    <>
      <PageHero
        tag={article.cat}
        title={article.t}
        subtitle={article.date + ' · ' + article.read}
        breadcrumb={t.nav.journal || 'Journal'}
        lang={lang}
      />

      <article className="py-16 sm:py-24 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <img
              src={imgSrc}
              alt={article.t}
              className="w-full aspect-[16/9] object-cover rounded-sm grayscale-[0.2]"
              loading="lazy"
            />
          </div>

          <div className="flex items-center gap-3 mb-8 text-[11px] tracking-wider">
            <span className="text-[#4a78e0] font-medium uppercase">{article.cat}</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-400 font-light">{article.date}</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-400 font-light">{article.read}</span>
          </div>

          <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-extralight tracking-[-0.02em] leading-[1.15] mb-8 text-gray-900">
            {article.t}
          </h1>

          <div className="prose prose-gray max-w-none">
            {paragraphs.map((p, i) => (
              p.trim() && (
                <p key={i} className="text-[15px] sm:text-[16px] text-[#5a6473] leading-[1.9] mb-6 font-light">
                  {p.trim()}
                </p>
              )
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 flex items-center justify-between">
            <Link
              to="/journal"
              className="group inline-flex items-center gap-3 text-[13px] text-gray-600 hover:text-[#4a78e0] transition-colors font-medium"
            >
              <span className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#4a78e0] group-hover:scale-105 transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </span>
              {lang === 'tr' ? 'Tüm yazılar' : lang === 'de' ? 'Alle Artikel' : 'All articles'}
            </Link>

            <div className="flex items-center gap-4">
              {foundIndex > 0 && (
                <Link
                  to={`/journal/${slugify(articles[foundIndex - 1].t)}`}
                  className="text-[12px] text-gray-400 hover:text-[#4a78e0] transition-colors"
                >
                  {lang === 'tr' ? '← Önceki' : lang === 'de' ? '← Vorheriger' : '← Previous'}
                </Link>
              )}
              {foundIndex < articles.length - 1 && (
                <Link
                  to={`/journal/${slugify(articles[foundIndex + 1].t)}`}
                  className="text-[12px] text-gray-400 hover:text-[#4a78e0] transition-colors"
                >
                  {lang === 'tr' ? 'Sonraki →' : lang === 'de' ? 'Nächster →' : 'Next →'}
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
