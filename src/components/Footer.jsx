import { Link } from 'react-router-dom';

const pagesLinks = [
  { key: 'approach', path: '/yaklasim' },
  { key: 'clinic', path: '/klinik' },
  { key: 'doctors', path: '/ekip' },
  { key: 'technology', path: '/teknoloji' },
  { key: 'process', path: '/surec' },
  { key: 'faq', path: '/sss' },
];

const mediaLinks = [
  { key: 'transformations', path: '/donusumler' },
  { key: 'cases', path: '/vakalar' },
];

export function Footer({ t, time, lang }) {
  const servicesTag = t.services.tag.split(' · ').slice(-1)[0] || t.services.tag;

  return (
    <footer className="bg-[#0A0A0A] text-white overflow-hidden">
      <div className="py-10 sm:py-14 border-b border-white/10 overflow-hidden">
        <div className="marquee-track marquee-track-fast">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 footer-huge whitespace-nowrap">
              <span className="italic">Aura</span>
              <span className="text-white/20">/</span>
              <span>Dental</span>
              <span className="text-[#4a78e0]/40">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Pages</div>
              <ul className="space-y-3 text-[13px]">
                {pagesLinks.map(item => (
                  <li key={item.key}>
                    <Link to={item.path} className="link-underline text-white/80 hover:text-[#4a78e0]">{t.nav[item.key]}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/iletisim" className="link-underline text-white/80 hover:text-[#4a78e0]">{t.nav.contact}</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">{servicesTag}</div>
              <ul className="space-y-3 text-[13px]">
                {t.services.items.slice(0, 4).map(s => (
                  <li key={s.t}><Link to="/tedaviler" className="link-underline text-white/80 hover:text-[#4a78e0]">{s.t}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Media</div>
              <ul className="space-y-3 text-[13px]">
                {mediaLinks.map(item => (
                  <li key={item.key}>
                    <Link to={item.path} className="link-underline text-white/80 hover:text-[#4a78e0]">{t.nav[item.key]}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/hastalar" className="link-underline text-white/80 hover:text-[#4a78e0]">{t.testimonials?.tag?.split(' · ')[1] || 'Testimonials'}</Link>
                </li>
                <li>
                  <Link to="/journal" className="link-underline text-white/80 hover:text-[#4a78e0]">{t.nav.journal}</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Contact</div>
              <ul className="space-y-3 text-[13px] text-white/80">
                <li>{t.location.address1}</li>
                <li>{t.location.address2}</li>
                <li><a href="tel:+902121234567" className="link-underline hover:text-[#4a78e0]">+90 212 123 45 67</a></li>
                <li><a href="mailto:info@auradental.studio" className="link-underline hover:text-[#4a78e0]">info@auradental.studio</a></li>
              </ul>
              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-3">Social</div>
                <ul className="space-y-2 text-[13px]">
                  {t.footer.social.map(x => (
                    <li key={x}><a href="#" className="link-underline text-white/80 hover:text-[#4a78e0]">{x}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-white/40 tracking-wider">
            <div>{t.footer.rights}</div>
            <div className="flex items-center gap-6">
              <Link to="/gizlilik" className="link-underline hover:text-[#4a78e0]">{t.footer.privacy}</Link>
              <Link to="/kvkk" className="link-underline hover:text-[#4a78e0]">{t.footer.kvkk}</Link>
              <div>İstanbul · {time}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
