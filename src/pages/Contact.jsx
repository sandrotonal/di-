import { useState } from 'react';
import { Icon } from '../components/ui/Icons';
import { LocationTag } from '../components/ui/location-tag';

const formT = {
  tr: {
    title: "İletişim",
    successTitle: "Mesajınız alındı.",
    successDesc: "En kısa sürede size dönüş yapacağız.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız Soyadınız",
    phoneLabel: "Telefon",
    phonePlaceholder: "+90 5__ ___ __ __",
    emailLabel: "E-posta",
    emailPlaceholder: "ornek@email.com",
    treatmentLabel: "İlgilendiğiniz Tedavi",
    treatmentSelect: "Seçiniz",
    messageLabel: "Mesaj",
    messagePlaceholder: "Bize bir şeyler anlatın...",
    submitBtn: "Gönder",
    socialTitle: "Sosyal Medya",
    quickContact: "İletişim",
    addressTitle: "Klinik Adresi"
  },
  en: {
    title: "Contact",
    successTitle: "Your message has been received.",
    successDesc: "We will get back to you as soon as possible.",
    nameLabel: "Full Name",
    namePlaceholder: "Your Full Name",
    phoneLabel: "Phone",
    phonePlaceholder: "+90 5__ ___ __ __",
    emailLabel: "E-mail",
    emailPlaceholder: "example@email.com",
    treatmentLabel: "Treatment of Interest",
    treatmentSelect: "Select",
    messageLabel: "Message",
    messagePlaceholder: "Tell us something...",
    submitBtn: "Submit",
    socialTitle: "Social Media",
    quickContact: "Contact",
    addressTitle: "Clinic Address"
  },
  de: {
    title: "Kontakt",
    successTitle: "Ihre Nachricht wurde empfangen.",
    successDesc: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
    nameLabel: "Vollständiger Name",
    namePlaceholder: "Ihr Name",
    phoneLabel: "Telefon",
    phonePlaceholder: "+90 5__ ___ __ __",
    emailLabel: "E-Mail",
    emailPlaceholder: "beispiel@email.com",
    treatmentLabel: "Gewünschte Behandlung",
    treatmentSelect: "Auswählen",
    messageLabel: "Nachricht",
    messagePlaceholder: "Erzählen Sie uns etwas...",
    submitBtn: "Absenden",
    socialTitle: "Soziale Medien",
    quickContact: "Kontakt",
    addressTitle: "Klinikadresse"
  }
};

export default function ContactPage({ t, lang }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', treatment: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => { e.preventDefault(); setSent(true); };
  const ft = formT[lang] || formT.tr;

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/auradental',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      color: 'hover:text-[#E1306C] hover:scale-110'
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/905123456789',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      color: 'hover:text-[#25D366] hover:scale-110'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/auradental',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      color: 'hover:text-[#0077B5] hover:scale-110'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/auradental',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      color: 'hover:text-[#1877F2] hover:scale-110'
    }
  ];

  return (
    <div className="pt-24 sm:pt-36 pb-12 sm:pb-24 bg-gray-50/50">
      {/* CSS style block for the premium animated send button - Brand matching white version */}
      <style>{`
        .send-btn-wrapper:hover .svg-wrapper {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }
        .send-btn-wrapper:hover svg {
          transform: translateX(3.2em) rotate(45deg) scale(1.1);
        }
        .send-btn-wrapper:hover span {
          transform: translateX(10em);
        }
        @keyframes fly-1 {
          from { transform: translateY(0.1em); }
          to { transform: translateY(-0.1em); }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ── Main Split Container (Image-like layout structure) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
          
          {/* Left Column: Form with brand-colored background */}
          <div className="lg:col-span-5 bg-[#4a78e0] p-8 sm:p-12 text-white flex flex-col justify-between relative">
            <div>
              <h1 className="text-[36px] sm:text-[48px] font-extrabold tracking-tight mb-4">{ft.title}</h1>
              <p className="text-white/80 text-[14px] leading-relaxed mb-8 font-light max-w-sm">
                {t.location.desc}
              </p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-6">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[1.6rem] font-light mb-2 text-white">{ft.successTitle}</h3>
                  <p className="text-[14px] text-white/75 font-light max-w-xs">{ft.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handle} className="space-y-6">
                  {/* Name field */}
                  <div className="relative group border-b border-white/25 focus-within:border-white pb-2 transition-colors duration-300">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1.5 font-semibold group-focus-within:text-white transition-colors">{ft.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder={ft.namePlaceholder}
                      className="w-full bg-transparent text-[15px] font-light text-white placeholder:text-white/30 focus:outline-none"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="relative group border-b border-white/25 focus-within:border-white pb-2 transition-colors duration-300">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1.5 font-semibold group-focus-within:text-white transition-colors">{ft.phoneLabel}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder={ft.phonePlaceholder}
                      className="w-full bg-transparent text-[15px] font-light text-white placeholder:text-white/30 focus:outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative group border-b border-white/25 focus-within:border-white pb-2 transition-colors duration-300">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1.5 font-semibold group-focus-within:text-white transition-colors">{ft.emailLabel}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder={ft.emailPlaceholder}
                      className="w-full bg-transparent text-[15px] font-light text-white placeholder:text-white/30 focus:outline-none"
                    />
                  </div>

                  {/* Treatment Select */}
                  <div className="relative group border-b border-white/25 focus-within:border-white pb-2 transition-colors duration-300">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1.5 font-semibold group-focus-within:text-white transition-colors">{ft.treatmentLabel}</label>
                    <select
                      value={form.treatment}
                      onChange={e => setForm({ ...form, treatment: e.target.value })}
                      className="w-full bg-transparent text-[15px] font-light text-white/80 focus:outline-none cursor-pointer [&>option]:text-gray-900"
                    >
                      <option value="" className="text-gray-900">{ft.treatmentSelect}</option>
                      {t.services.items.map((s) => (
                        <option key={s.t} value={s.t} className="text-gray-900">{s.t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="relative group border-b border-white/25 focus-within:border-white pb-2 transition-colors duration-300">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1.5 font-semibold group-focus-within:text-white transition-colors">{ft.messageLabel}</label>
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder={ft.messagePlaceholder}
                      className="w-full bg-transparent text-[15px] font-light text-white placeholder:text-white/30 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Premium animated submit pill button - Brand matching white version */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="flex items-center rounded-full bg-white text-[#4a78e0] hover:bg-[#0a0a0a] hover:text-white text-[14px] font-semibold px-8 py-3.5 pl-[1.8em] overflow-hidden transition-all duration-300 cursor-pointer active:scale-95 send-btn-wrapper shadow-lg shadow-black/10 select-none border border-transparent"
                    >
                      <div className="svg-wrapper flex items-center transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={16}
                          height={16}
                          className="transition-transform duration-300 origin-center text-current"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 transition-transform duration-300 whitespace-nowrap">{ft.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Large custom vector illustration */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 flex items-center justify-center">
            <img 
              src="/images/contact_illustration.jpg" 
              alt="Contact Illustration" 
              className="max-w-full h-auto object-contain max-h-[500px]" 
            />
          </div>

        </div>

        {/* ── Bottom Section: Details & Interactive Map ── */}
        <div className="w-full h-[1px] bg-gray-200/80 my-8 lg:my-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
          
          {/* Details Column - Tight grid spacing responsive for mobile */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-[#5a6473]">
            
            {/* Address */}
            <div className="space-y-2 lg:space-y-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold block">{ft.addressTitle}</span>
              <div className="text-[16px] font-light text-gray-900 leading-[1.6]">
                {t.location.address1} <br />
                <span className="text-gray-500 font-light">{t.location.address2}</span>
              </div>
              <div className="pt-1">
                <LocationTag city="İstanbul" country="Türkiye" timezone="GMT+3" />
              </div>
            </div>

            {/* Channels & Socials */}
            <div className="space-y-3 lg:space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold block">{ft.quickContact}</span>
              <div className="space-y-1 lg:space-y-2">
                <div>
                  <a href="tel:+902121234567" className="text-[18px] sm:text-[20px] font-light text-[#4a78e0] hover:underline transition-all">
                    +90 212 123 45 67
                  </a>
                </div>
                <div>
                  <a href="mailto:info@auradental.studio" className="text-[14px] font-light text-gray-600 hover:text-[#4a78e0] transition-colors">
                    info@auradental.studio
                  </a>
                </div>
              </div>

              {/* Social Media Logos (Clickable icons with links, no text) */}
              <div className="pt-2 space-y-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold block">{ft.socialTitle}</span>
                <div className="flex items-center gap-4 text-gray-400">
                  {socialLinks.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${soc.color}`}
                      title={soc.name}
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="space-y-2 border-t border-gray-150/60 pt-4 lg:pt-6 sm:col-span-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold block">{t.location.hours}</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-3 text-[13px] font-light text-[#5a6473]">
                <div>{t.location.h1}</div>
                <div>{t.location.h2}</div>
                <div className="text-red-500/70 font-normal">{t.location.h3}</div>
              </div>
            </div>

          </div>

          {/* Real Google Maps Embed Column - Centered and padded on mobile */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none h-[280px] sm:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-150">
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

      </div>
    </div>
  );
}
