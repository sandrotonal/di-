import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { IMG } from '../data/images';
import { motion, AnimatePresence } from 'framer-motion';

export default function Transformations({ t, lang }) {
  const [activeTab, setActiveTab] = useState('lamine');

  const tabs = [
    { id: 'lamine', tr: 'Lamine Veneer', en: 'Laminate Veneer', de: 'Veneers' },
    { id: 'gulus', tr: 'Gülüş Tasarımı', en: 'Smile Makeover', de: 'Smile Makeover' },
    { id: 'implant', tr: 'İmplant (All-on-4)', en: 'Implants (All-on-4)', de: 'Implantate (All-on-4)' },
    { id: 'ortodonti', tr: 'Ortodonti (Invisalign)', en: 'Orthodontics (Invisalign)', de: 'Kieferorthopädie' },
  ];

  const cases = {
    lamine: {
      tr: {
        title: "Estetik Ön Bölge Lamine Veneer Uygulaması",
        doctor: "Dr. Mehmet Demir",
        duration: "2 seans · 5 gün",
        material: "IPS e.max Press Porselen",
        complaint: "Ön dişlerde renk eşitsizliği, hafif çapraşıklık ve diastema (diş arası boşluklar).",
        procedure: "Minimal aşındırma (0.3mm) tekniği ile diş dokusu maksimum düzeyde korunarak, yüz hatlarına ve dudak profiline uygun 10 adet yaprak porselen restorasyon uygulandı."
      },
      en: {
        title: "Aesthetic Anterior Laminate Veneer Restoration",
        doctor: "Dr. Mehmet Demir",
        duration: "2 sessions · 5 days",
        material: "IPS e.max Press Porcelain",
        complaint: "Anterior teeth discoloration, minor crowding, and diastema (gaps).",
        procedure: "Using a minimal preparation (0.3mm) technique to preserve maximum tooth structure, 10 bespoke porcelain veneers were bonded in harmony with facial contours and lip profile."
      },
      de: {
        title: "Ästhetische Frontzahn-Veneer-Restauration",
        doctor: "Dr. Mehmet Demir",
        duration: "2 Sitzungen · 5 Tage",
        material: "IPS e.max Press Porzellan",
        complaint: "Farbunterschiede in den Frontzähnen, leichter Engstand und Diastema (Lücken).",
        procedure: "Mit einer minimal-invasiven Präparation (0.3 mm) zur maximalen Schonung der Zahnsubstanz wurden 10 maßgeschneiderte Veneers passend zu den Gesichtszügen und dem Lippenprofil eingesetzt."
      },
      before: IMG.veneerBefore,
      after: IMG.veneerAfter
    },
    gulus: {
      tr: {
        title: "3D Dijital Planlamalı Gülüş Tasarımı",
        doctor: "Dr. Ayşe Kaya",
        duration: "3 seans · 7 gün",
        material: "CAD/CAM Zirkonyum ve Feldspatik Lamine",
        complaint: "Gülüş asimetrisi, aşınmış diş uçları ve diş eti çizgisindeki düzensizlikler.",
        procedure: "Dijital Smile Design yazılımıyla yüz oranları analiz edildi. Lazer ile diş eti seviyeleme (gingivoplasti) sonrası CAD/CAM teknolojisiyle üretilen hibrit restorasyonlarla simetrik bir gülüş sağlandı."
      },
      en: {
        title: "3D Digital Planned Full Smile Makeover",
        doctor: "Dr. Ayşe Kaya",
        duration: "3 sessions · 7 days",
        material: "CAD/CAM Zirconia & Feldspathic Veneers",
        complaint: "Smile asymmetry, worn tooth edges, and uneven gumline.",
        procedure: "Facial ratios were analyzed using Digital Smile Design software. After laser gum contouring (gingivoplasty), a symmetrical smile was achieved with CAD/CAM hybrid restorations."
      },
      de: {
        title: "3D Digital geplantes Smile Makeover",
        doctor: "Dr. Ayşe Kaya",
        duration: "3 Sitzungen · 7 Tage",
        material: "CAD/CAM Zirkon & Feldspat Veneers",
        complaint: "Lächeln-Asymmetrie, abgenutzte Zahnkanten und unregelmäßiger Zahnfleischverlauf.",
        procedure: "Die Gesichtsverhältnisse wurden mithilfe der Digital Smile Design Software analysiert. Nach der Laser-Zahnfleischkorrektur wurde mit CAD/CAM-Hybridversorgungen ein symmetrisches Lächeln erzielt."
      },
      before: IMG.smileBefore,
      after: IMG.smileAfter
    },
    implant: {
      tr: {
        title: "All-on-4 Tek Günde Sabit Protez İmplant Tedavisi",
        doctor: "Dr. Ayşe Kaya",
        duration: "1 gün (Cerrahi) + 3 ay (Kimi kontroller)",
        material: "Straumann Roxolid® İmplant ve Hibrit Metal-Akrilik Protez",
        complaint: "İleri derece kemik kaybı, hareketli protez kullanımı ve tam dişsizlik.",
        procedure: "Tek cerrahi seansta 4 adet Straumann implant yerleştirildi ve aynı gün geçici sabit vidalı protez uygulandı. 3 aylık kemik entegrasyonu sonrasında kalıcı hibrit protez teslim edildi."
      },
      en: {
        title: "All-on-4 Single Day Fixed Implant Restoration",
        doctor: "Dr. Ayşe Kaya",
        duration: "1 day (Surgery) + 3 months (Healing check-ups)",
        material: "Straumann Roxolid® Implants & Hybrid Metal-Acrylic Prosthesis",
        complaint: "Severe bone loss, loose dentures, and complete toothlessness.",
        procedure: "In a single surgical session, 4 Straumann implants were placed, and a temporary fixed screw-retained prosthesis was fitted on the same day. Permanent hybrid prosthesis was delivered after 3 months of osseointegration."
      },
      de: {
        title: "All-on-4 Feste Implantatversorgung an einem Tag",
        doctor: "Dr. Ayşe Kaya",
        duration: "1 Tag (Chirurgie) + 3 Monate (Einheilung)",
        material: "Straumann Roxolid® Implantate & Hybrid-Metall-Acryl-Prothese",
        complaint: "Schwerer Knochenabbau, lose Prothesen und vollständige Zahnlosigkeit.",
        procedure: "In einer einzigen chirurgischen Sitzung wurden 4 Straumann-Implantate inseriert und am selben Tag eine provisorische, festsitzende, verschraubte Prothese eingesetzt. Nach 3 Monaten Osseointegration wurde die endgültige Hybridprothese eingesetzt."
      },
      before: IMG.implantBefore,
      after: IMG.implantAfter
    },
    ortodonti: {
      tr: {
        title: "Invisalign® Şeffaf Plak ile Çapraşıklık Tedavisi",
        doctor: "Dr. Zeynep Arslan",
        duration: "14 ay · 28 plak seti",
        material: "Invisalign SmartTrack® Şeffaf Plaklar",
        complaint: "Alt ve üst çenede çapraşıklık, ön dişlerde sıkışma ve ısırma kusurları.",
        procedure: "iTero 3D ağız içi tarama ile dijital modelleme yapıldı. Telsiz ve tamamen şeffaf Invisalign plakları kullanılarak dişler kademeli olarak ideal pozisyonlarına taşındı, çene ilişkileri düzeltildi."
      },
      en: {
        title: "Invisalign® Clear Aligner Malocclusion Treatment",
        doctor: "Dr. Zeynep Arslan",
        duration: "14 months · 28 aligner sets",
        material: "Invisalign SmartTrack® Clear Aligners",
        complaint: "Upper and lower crowding, overlapping anterior teeth, and bite issues.",
        procedure: "Digital modeling was performed with iTero 3D intraoral scanner. Using bracket-free and fully clear Invisalign aligners, teeth were incrementally moved to their ideal positions and bite relations were corrected."
      },
      de: {
        title: "Invisalign® Behandlung von Zahnfehlstellungen",
        doctor: "Dr. Zeynep Arslan",
        duration: "14 Monate · 28 Aligner-Sets",
        material: "Invisalign SmartTrack® klare Aligner",
        complaint: "Engstand im Ober- und Unterkiefer, überlappende Frontzähne und Bissprobleme.",
        procedure: "Mit dem iTero 3D-Intraoralscanner wurde ein digitales Modell erstellt. Mit metallfreien und vollkommen klaren Invisalign-Alignern wurden die Zähne schrittweise in ihre ideale Position bewegt."
      },
      before: IMG.orthoBefore,
      after: IMG.orthoAfter
    }
  };

  const currentCase = cases[activeTab];
  const currentLang = currentCase[lang] || currentCase.tr;

  // Header Titles
  const infoHeader = lang === 'tr' ? 'VAKA DETAYLARI' : lang === 'de' ? 'FALLDETAILS' : 'CASE DETAILS';
  const labelDoctor = lang === 'tr' ? 'Hekim' : lang === 'de' ? 'Arzt' : 'Dentist';
  const labelDuration = lang === 'tr' ? 'Süre' : lang === 'de' ? 'Dauer' : 'Duration';
  const labelMaterial = lang === 'tr' ? 'Malzeme' : lang === 'de' ? 'Material' : 'Material';
  const labelComplaint = lang === 'tr' ? 'Hasta Şikayeti' : lang === 'de' ? 'Beschwerde' : 'Patient Complaint';
  const labelProcedure = lang === 'tr' ? 'Yapılan İşlem' : lang === 'de' ? 'Behandlung' : 'Procedure';

  return (
    <>
      <PageHero
        tag={t.beforeAfter.tag}
        title={t.beforeAfter.title}
        subtitle={t.beforeAfter.sub}
        breadcrumb={t.nav.transformations}
        lang={lang}
      />

      {/* ── Interactive Case Catalog ─────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none border-b border-gray-100">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              const tabTitle = tab[lang] || tab.tr;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-[12px] uppercase tracking-[0.1em] font-medium transition-all duration-300 shrink-0 select-none ${
                    active 
                      ? 'bg-[#4a78e0] text-white shadow-md shadow-[#4a78e0]/10 scale-102' 
                      : 'bg-[#f4f6fa] text-[#5a6473] hover:bg-gray-200/50 hover:text-gray-900'
                  }`}
                >
                  {tabTitle}
                </button>
              );
            })}
          </div>

          {/* Interactive Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left side: Before/After Slider */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BeforeAfterSlider 
                    before={currentCase.before} 
                    after={currentCase.after} 
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Case Details Card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#f4f6fa]/60 border border-gray-150/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-[0_15px_40px_rgba(74,120,224,0.03)] transition-all duration-500"
                >
                  <div>
                    {/* Header Label */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-6 h-[1.5px] bg-[#4a78e0]" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#4a78e0] font-semibold">{infoHeader}</span>
                    </div>

                    {/* Case Title */}
                    <h2 className="text-[20px] sm:text-[24px] font-light leading-snug tracking-tight text-gray-900 mb-6">
                      {currentLang.title}
                    </h2>

                    {/* Detailed Spec List */}
                    <div className="space-y-4 text-[13px] border-t border-gray-200/50 pt-6">
                      <div>
                        <span className="block text-[10px] tracking-widest text-gray-400 uppercase font-light mb-1">{labelDoctor}</span>
                        <span className="font-medium text-gray-800">{currentLang.doctor}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] tracking-widest text-gray-400 uppercase font-light mb-1">{labelDuration}</span>
                        <span className="text-[#5a6473] font-light">{currentLang.duration}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] tracking-widest text-gray-400 uppercase font-light mb-1">{labelMaterial}</span>
                        <span className="text-[#5a6473] font-light">{currentLang.material}</span>
                      </div>
                      <div className="border-t border-gray-200/30 pt-4">
                        <span className="block text-[10px] tracking-widest text-gray-400 uppercase font-light mb-1">{labelComplaint}</span>
                        <p className="text-[#5a6473] font-light leading-relaxed">{currentLang.complaint}</p>
                      </div>
                      <div className="border-t border-gray-200/30 pt-4">
                        <span className="block text-[10px] tracking-widest text-gray-400 uppercase font-light mb-1">{labelProcedure}</span>
                        <p className="text-[#5a6473] font-light leading-relaxed">{currentLang.procedure}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* ── Case studies — editorial list ────────────── */}
      <section className="py-16 sm:py-24 bg-[#f4f6fa] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-12 reveal">
            <div className="w-6 h-[1px] bg-gray-400" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">{t.cases.tag}</span>
          </div>

          {t.cases.items.map((c, i) => (
            <div key={i} className="reveal group border-t border-gray-200 py-8 sm:py-10 last:border-b cursor-pointer">
              <div className="grid grid-cols-12 gap-4 items-baseline">
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-gray-350 tracking-[0.1em] font-light">{c.tag}</span>
                </div>
                <div className="col-span-10 sm:col-span-8 pl-2 sm:pl-6">
                  <h2 className="text-[clamp(1.1rem,2vw,1.6rem)] font-extralight tracking-[-0.01em] mb-2 group-hover:text-[#4a78e0] transition-colors duration-400">
                    {c.t}
                  </h2>
                  <p className="text-[13px] text-[#5a6473] leading-[1.7] font-light">{c.d}</p>
                </div>
                <div className="hidden sm:block sm:col-span-3 text-right">
                  <span className="text-[11px] text-gray-300 tracking-[0.1em] font-light">{c.meta}</span>
                </div>
              </div>
              <div className="relative mt-6 h-[1px] bg-gray-200/50 overflow-hidden">
                <div className="absolute inset-0 bg-[#4a78e0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
