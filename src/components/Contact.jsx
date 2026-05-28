import { Icon } from './ui/Icons';

export function Contact({ t }) {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white" data-chapter="12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 sm:mb-16">
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-900"></div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-teal-600">{t.location.tag}</span>
            </div>
            <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] font-extralight leading-[1.05] tracking-[-0.03em] mb-6">
              {t.location.title}
            </h2>
            <p className="text-[14px] text-gray-600 leading-[1.7]">{t.location.desc}</p>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-teal-500 mb-3 flex items-center gap-2">
                  <Icon.MapPin s={11} />
                  <span>{t.location.address}</span>
                </div>
                <div className="text-[15px] leading-[1.7]">{t.location.address1}<br />{t.location.address2}</div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-teal-500 mb-3 flex items-center gap-2">
                  <Icon.Clock s={11} />
                  <span>{t.location.hours}</span>
                </div>
                <div className="text-[15px] leading-[1.7]">{t.location.h1}<br />{t.location.h2}<br />{t.location.h3}</div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-teal-500 mb-3 flex items-center gap-2">
                  <Icon.Phone s={11} />
                  <span>{t.location.phone}</span>
                </div>
                <a href="tel:+902121234567" className="text-[15px] link-underline hover:text-teal-600">+90 212 123 45 67</a>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-teal-500 mb-3 flex items-center gap-2">
                  <Icon.Mail s={11} />
                  <span>{t.location.email}</span>
                </div>
                <a href="mailto:info@auradental.studio" className="text-[15px] link-underline hover:text-teal-600">info@auradental.studio</a>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-clip">
          <div className="overflow-hidden aspect-[16/9] lg:aspect-[21/9] rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.689084012345!2d28.9895!3d41.0485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzU0LjYiTiAyOMKwNTknMjIuMiJF!5e0!3m2!1str!2str!4v1700000000000"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.3) contrast(1.05)' }}
              allowFullScreen="" loading="lazy"
              title="Konum"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
