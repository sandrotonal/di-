import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { Icon } from '../components/ui/Icons';

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
    submitBtn: "Gönder"
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
    submitBtn: "Send"
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
    submitBtn: "Absenden"
  }
};

export default function ContactPage({ t, lang }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', treatment: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => { e.preventDefault(); setSent(true); };
  const ft = formT[lang] || formT.tr;

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
      <section className="py-20 sm:py-28 bg-[#f4f6fa]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Column: Stylized Contact Info - Borderless and clean */}
            <div className="lg:col-span-5 reveal space-y-10">
              <div className="border-b border-gray-200 pb-8 relative group">
                <div className="flex items-center gap-2.5 text-[10px] tracking-[0.25em] uppercase text-[#4a78e0] mb-4 font-semibold">
                  <Icon.MapPin s={12} />
                  <span>{t.location.address}</span>
                </div>
                <div className="text-[16px] font-light leading-[1.8] text-[#5a6473]">
                  {t.location.address1}<br />
                  {t.location.address2}
                </div>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-center gap-2.5 text-[10px] tracking-[0.25em] uppercase text-[#4a78e0] mb-4 font-semibold">
                  <Icon.Clock s={12} />
                  <span>{t.location.hours}</span>
                </div>
                <div className="text-[15px] font-light leading-[1.8] text-[#5a6473] space-y-1">
                  <div>{t.location.h1}</div>
                  <div>{t.location.h2}</div>
                  <div className="text-red-600/70 font-medium">{t.location.h3}</div>
                </div>
              </div>

              <div className="pb-4">
                <div className="flex items-center gap-2.5 text-[10px] tracking-[0.25em] uppercase text-[#4a78e0] mb-4 font-semibold">
                  <Icon.Phone s={12} />
                  <span>{lang === 'tr' ? 'İLETİŞİM KANALLARI' : lang === 'de' ? 'KONTAKTKANÄLE' : 'CONTACT CHANNELS'}</span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-light mb-1">{t.location.phone}</span>
                    <a href="tel:+902121234567" className="text-[18px] font-light text-[#4a78e0] hover:underline transition-all duration-300 w-fit">
                      +90 212 123 45 67
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-light mb-1">{t.location.email}</span>
                    <a href="mailto:info@auradental.studio" className="text-[16px] font-light text-[#5a6473] hover:text-[#4a78e0] transition-colors duration-300 w-fit">
                      info@auradental.studio
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form - Borderless and clean */}
            <div className="lg:col-span-7 reveal relative">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-20 text-center bg-white/40 p-8 rounded-sm">
                  <div className="w-14 h-14 rounded-full border-2 border-[#4a78e0] flex items-center justify-center mb-6 bg-[#4a78e0]/5">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 5" stroke="#4a78e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[1.6rem] font-light mb-2 text-gray-900">{ft.successTitle}</h3>
                  <p className="text-[14px] text-[#5a6473] font-light">{ft.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handle} className="space-y-8 bg-white/40 p-8 sm:p-12 rounded-sm border border-black/5">
                  {[
                    { label: ft.nameLabel, type: 'text', key: 'name', placeholder: ft.namePlaceholder, required: true },
                    { label: ft.phoneLabel, type: 'tel', key: 'phone', placeholder: ft.phonePlaceholder },
                    { label: ft.emailLabel, type: 'email', key: 'email', placeholder: ft.emailPlaceholder, required: true },
                  ].map((f) => (
                    <div key={f.key} className="relative group focus-within:border-[#4a78e0] transition-colors duration-300 border-b border-gray-200 pb-3">
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-2 font-medium">{f.label}</label>
                      <input
                        type={f.type}
                        required={f.required}
                        value={form[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full bg-transparent text-[15px] font-light text-gray-800 placeholder:text-gray-300 focus:outline-none"
                      />
                    </div>
                  ))}

                  <div className="border-b border-gray-200 pb-3 relative group focus-within:border-[#4a78e0] transition-colors duration-300">
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-2 font-medium">{ft.treatmentLabel}</label>
                    <select
                      value={form.treatment}
                      onChange={e => setForm({ ...form, treatment: e.target.value })}
                      className="w-full bg-transparent text-[15px] font-light text-[#5a6473] focus:outline-none cursor-pointer"
                    >
                      <option value="">{ft.treatmentSelect}</option>
                      {t.services.items.map((s) => (
                        <option key={s.t}>{s.t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="border-b border-gray-200 pb-3 relative group focus-within:border-[#4a78e0] transition-colors duration-300">
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-2 font-medium">{ft.messageLabel}</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder={ft.messagePlaceholder}
                      className="w-full bg-transparent text-[15px] font-light text-gray-800 placeholder:text-gray-300 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button type="submit"
                      className="magnetic w-full group inline-flex items-center justify-center gap-3 text-[13px] bg-[#4a78e0] text-white px-7 py-4 rounded-sm hover:bg-[#4a78e0]/90 transition-all duration-300 font-medium uppercase tracking-[0.1em] shadow-sm hover:shadow-md"
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
      </section>

      {/* ── Google Maps Integration Section ───────────────── */}
      <section className="bg-[#f4f6fa] py-16 sm:py-24 border-t border-gray-200/50">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex items-center gap-3 mb-10 reveal">
            <div className="w-8 h-[1px] bg-[#4a78e0]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">Google Maps İşletme Entegrasyonu</span>
          </div>

          <div className="perspective-container">
            <div className="w-full aspect-[21/9] sm:h-[50vh] rounded-sm overflow-hidden border border-black/5 bg-white/5 relative group cursor-ew-resize">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.689084012345!2d28.9895!3d41.0485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzU0LjYiTiAyOMKwNTknMjIuMiJF!5e0!3m2!1str!2str!4v1700000000000"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', filter: 'grayscale(0.3) contrast(1.05)' }}
                allowFullScreen="" loading="lazy" title="Aura Dental Studio Harita Konumu"
              />
              <div className="absolute inset-0 bg-[#4a78e0]/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
