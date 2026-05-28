import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { Icon } from '../components/ui/Icons';
import { LocationTag } from '../components/ui/location-tag';
import { LocationMap } from '../components/ui/ExpandMap';

const formT = {
  tr: {
    successTitle: "Mesajınız alındı.",
    successDesc: "En kısa sürede size dönüş yapacağız.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız",
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
    addressTitle: "Klinik"
  },
  en: {
    successTitle: "Your message has been received.",
    successDesc: "We will get back to you as soon as possible.",
    nameLabel: "Full Name",
    namePlaceholder: "Your Name",
    phoneLabel: "Phone",
    phonePlaceholder: "+90 5__ ___ __ __",
    emailLabel: "E-mail",
    emailPlaceholder: "example@email.com",
    treatmentLabel: "Treatment of Interest",
    treatmentSelect: "Select",
    messageLabel: "Message",
    messagePlaceholder: "Tell us something...",
    submitBtn: "Send",
    socialTitle: "Social Media",
    quickContact: "Contact",
    addressTitle: "Clinic"
  },
  de: {
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
    addressTitle: "Klinik"
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      color: 'hover:text-[#E1306C]'
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/905123456789',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      color: 'hover:text-[#25D366]'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/auradental',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      color: 'hover:text-[#0077B5]'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/auradental',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      color: 'hover:text-[#1877F2]'
    }
  ];

  return (
    <>
      <PageHero
        tag={t.location.tag}
        title={t.location.title}
        subtitle={t.location.desc}
        breadcrumb={t.nav.contact}
        lang={lang}
      />

      {/* ── Contact Layout ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left Column: Extremely clean, modern, and compact */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Group 1: Address Details */}
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium block">{ft.addressTitle}</span>
                <div className="text-[18px] font-light text-gray-900 leading-[1.6]">
                  {t.location.address1} <br />
                  <span className="text-gray-500 font-light">{t.location.address2}</span>
                </div>
                <div className="pt-1">
                  <LocationTag city="İstanbul" country="Türkiye" timezone="GMT+3" />
                </div>
              </div>

              {/* Group 2: Contact Channels */}
              <div className="space-y-4 border-t border-gray-100 pt-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium block">{ft.quickContact}</span>
                <div className="space-y-3">
                  <div>
                    <a href="tel:+902121234567" className="text-[22px] sm:text-[24px] font-light text-[#4a78e0] hover:underline transition-all duration-300">
                      +90 212 123 45 67
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@auradental.studio" className="text-[15px] font-light text-gray-600 hover:text-[#4a78e0] transition-colors duration-300">
                      info@auradental.studio
                    </a>
                  </div>
                </div>
              </div>

              {/* Group 3: Working Hours */}
              <div className="space-y-2 border-t border-gray-100 pt-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium block">{t.location.hours}</span>
                <div className="text-[13px] font-light leading-[1.6] text-gray-600 space-y-1">
                  <div>{t.location.h1}</div>
                  <div>{t.location.h2}</div>
                  <div className="text-red-500/70 font-normal">{t.location.h3}</div>
                </div>
              </div>

              {/* Group 4: Social Media Icons (No backgrounds, just clean logos) */}
              <div className="space-y-3 border-t border-gray-100 pt-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium block">{ft.socialTitle}</span>
                <div className="flex items-center gap-5 text-gray-400">
                  {socialLinks.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 ${soc.color}`}
                      title={soc.name}
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Group 5: The prompt map (LocationMap) - Clean, standalone interactive map */}
              <div className="pt-4 flex justify-start">
                <LocationMap 
                  location="Nişantaşı, İstanbul" 
                  coordinates="41.0485° N, 28.9895° E"
                />
              </div>

            </div>

            {/* Right Column: Premium Booking Form */}
            <div className="lg:col-span-7 pt-4 lg:pt-0">
              <div className="bg-transparent">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.5 12L13 5" stroke="#4a78e0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-[1.6rem] font-light mb-2 text-gray-900">{ft.successTitle}</h3>
                    <p className="text-[14px] text-gray-500 font-light max-w-sm">{ft.successDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handle} className="space-y-8">
                    {[
                      { label: ft.nameLabel, type: 'text', key: 'name', placeholder: ft.namePlaceholder, required: true },
                      { label: ft.phoneLabel, type: 'tel', key: 'phone', placeholder: ft.phonePlaceholder },
                      { label: ft.emailLabel, type: 'email', key: 'email', placeholder: ft.emailPlaceholder, required: true },
                    ].map((f) => (
                      <div key={f.key} className="relative group transition-colors duration-300 border-b border-gray-200 focus-within:border-[#4a78e0] pb-2">
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1.5 font-medium group-focus-within:text-[#4a78e0] transition-colors">{f.label}</label>
                        <input
                          type={f.type}
                          required={f.required}
                          value={form[f.key]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          placeholder={f.placeholder}
                          className="w-full bg-transparent text-[16px] font-light text-gray-800 placeholder:text-gray-300 focus:outline-none"
                        />
                      </div>
                    ))}

                    <div className="border-b border-gray-200 pb-2 relative group focus-within:border-[#4a78e0] transition-colors duration-300">
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1.5 font-medium group-focus-within:text-[#4a78e0] transition-colors">{ft.treatmentLabel}</label>
                      <select
                        value={form.treatment}
                        onChange={e => setForm({ ...form, treatment: e.target.value })}
                        className="w-full bg-transparent text-[16px] font-light text-gray-600 focus:outline-none cursor-pointer"
                      >
                        <option value="">{ft.treatmentSelect}</option>
                        {t.services.items.map((s) => (
                          <option key={s.t} value={s.t}>{s.t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="border-b border-gray-200 pb-2 relative group focus-within:border-[#4a78e0] transition-colors duration-300">
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1.5 font-medium group-focus-within:text-[#4a78e0] transition-colors">{ft.messageLabel}</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder={ft.messagePlaceholder}
                        className="w-full bg-transparent text-[16px] font-light text-gray-800 placeholder:text-gray-300 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full group inline-flex items-center justify-center gap-3 text-[13px] bg-[#4a78e0] text-white px-7 py-3.5 rounded-sm hover:bg-[#496fd0] transition-all duration-300 font-medium uppercase tracking-[0.12em]"
                      >
                        {ft.submitBtn}
                        <Icon.Arrow s={11} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
