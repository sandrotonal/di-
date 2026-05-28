import { PageHero } from '../components/PageHero';

export default function PrivacyPage({ t, lang }) {
  const content = {
    tr: {
      tag: "Gizlilik & Güvenlik",
      title: "Gizlilik Politikası",
      subtitle: "Kişisel verilerinizin güvenliği ve gizliliği bizim için en yüksek önceliktir. Aura Dental Studio olarak verilerinizi nasıl koruduğumuzu açıklıyoruz.",
      breadcrumb: "Gizlilik Politikası",
      sections: [
        {
          num: "01",
          title: "Veri Sorumlusu",
          text: "Aura Dental Studio (Nişantaşı, İstanbul) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, veri sorumlusu sıfatıyla hareket etmekteyiz. Sitemizi ziyaretiniz ve hizmetlerimizden yararlanmanız sırasında edindiğimiz verileri bu politikada belirtilen çerçevede işlemekteyiz."
        },
        {
          num: "02",
          title: "Toplanan Kişisel Veriler",
          text: "Kliniğimizle iletişime geçtiğinizde (randevu formları, telefon veya e-posta yoluyla), kimlik bilgileriniz (ad, soyad), iletişim bilgileriniz (telefon, e-posta), tıbbi geçmişiniz ve tedaviye yönelik ağız sağlığı verileriniz gibi sağlık verileriniz ve sitemizi kullanırken çerezler vasıtasıyla toplanan kullanım verileriniz işlenmektedir."
        },
        {
          num: "03",
          title: "Veri İşleme Amaçları",
          text: "Kişisel verileriniz; randevu taleplerinizin yönetilmesi, tedavi planlamalarınızın yapılması, yasal yükümlülüklerin yerine getirilmesi, hizmet kalitemizin artırılması ve onay vermeniz halinde bilgilendirme ve tanıtım iletilerinin gönderilmesi amaçlarıyla işlenmektedir."
        },
        {
          num: "04",
          title: "Çerezler (Cookies)",
          text: "Web sitemizde, kullanıcı deneyiminizi kişiselleştirmek, site trafiğimizi analiz etmek ve reklam/pazarlama faaliyetlerini yürütmek amacıyla çerezler kullanmaktayız. Çerez tercihlerinizi sitemizin altında yer alan çerez banner'ı üzerinden veya tarayıcı ayarlarınızdan dilediğiniz zaman değiştirebilirsiniz."
        },
        {
          num: "05",
          title: "Veri Güvenliği",
          text: "Toplanan kişisel verileriniz, yetkisiz erişim, kayıp veya ifşaya karşı korumak amacıyla kliniğimizce gerekli teknik ve idari güvenlik önlemleri alınarak steril dijital altyapılarda ve güvenli arşivlerde saklanmaktadır."
        },
        {
          num: "06",
          title: "Haklarınız",
          text: "KVKK'nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme, eksik/yanlış işlenmişse düzeltilmesini isteme ve silinmesini talep etme haklarına sahipsiniz. Başvurularınızı kliniğimize yazılı olarak iletebilirsiniz."
        }
      ]
    },
    en: {
      tag: "Privacy & Security",
      title: "Privacy Policy",
      subtitle: "The security and privacy of your personal data is our highest priority. We explain how Aura Dental Studio protects your information.",
      breadcrumb: "Privacy Policy",
      sections: [
        {
          num: "01",
          title: "Data Controller",
          text: "As Aura Dental Studio (Nişantaşı, Istanbul), we act as the data controller in accordance with relevant privacy laws. We process the data obtained during your visit to our website and use of our services within the framework specified in this policy."
        },
        {
          num: "02",
          title: "Personal Data Collected",
          text: "When you contact our clinic (via appointment forms, telephone or email), your identity information (name, surname), contact details (phone, email), medical history and oral health data related to your treatment, and usage data collected through cookies are processed."
        },
        {
          num: "03",
          title: "Purposes of Data Processing",
          text: "Your personal data is processed for managing appointment requests, creating treatment plans, fulfilling legal obligations, improving our service quality, and, with your consent, sending informational or promotional communications."
        },
        {
          num: "04",
          title: "Cookies",
          text: "On our website, we use cookies to personalize your user experience, analyze site traffic, and perform marketing activities. You can change your cookie preferences at any time via the cookie banner at the bottom of our site or through your browser settings."
        },
        {
          num: "05",
          title: "Data Security",
          text: "Your personal data is stored in sterile digital infrastructures and secure archives by taking all necessary technical and administrative security measures to protect them against unauthorized access, loss, or disclosure."
        },
        {
          num: "06",
          title: "Your Rights",
          text: "Under applicable data protection regulations, you have the right to learn whether your data is being processed, request information if processed, learn the purpose of processing, request correction of incomplete/incorrect data, or request deletion of your data. You can submit your requests to our clinic in writing."
        }
      ]
    },
    de: {
      tag: "Datenschutz & Sicherheit",
      title: "Datenschutzerklärung",
      subtitle: "Die Sicherheit und Privatsphäre Ihrer persönlichen Daten hat für uns höchste Priorität. Wir erklären, wie Aura Dental Studio Ihre Daten schützt.",
      breadcrumb: "Datenschutzerklärung",
      sections: [
        {
          num: "01",
          title: "Verantwortlicher",
          text: "Als Aura Dental Studio (Nişantaşı, Istanbul) handeln wir als Verantwortlicher im Sinne der Datenschutzgesetze. Wir verarbeiten die bei Ihrem Besuch unserer Website und der Nutzung unserer Dienste erhobenen Daten im in dieser Richtlinie festgelegten Rahmen."
        },
        {
          num: "02",
          title: "Erhobene personenbezogene Daten",
          text: "Wenn Sie Kontakt mit unserer Klinik aufnehmen (über Terminformulare, Telefon oder E-Mail), werden Ihre Identitätsdaten (Name, Nachname), Kontaktdaten (Telefon, E-Mail), Krankengeschichte und Mundgesundheitsdaten für Ihre Behandlung sowie Nutzungsdaten verarbeitet, die durch Cookies erfasst werden."
        },
        {
          num: "03",
          title: "Zwecke der Datenverarbeitung",
          text: "Ihre personenbezogenen Daten werden zur Verwaltung von Terminanfragen, zur Erstellung von Behandlungsplänen, zur Erfüllung gesetzlicher Verpflichtungen, zur Verbesserung unserer Dienstleistungsqualität und, mit Ihrer Einwilligung, zur Zusendung von Informations- oder Werbemitteilungen verarbeitet."
        },
        {
          num: "04",
          title: "Cookies",
          text: "Wir verwenden auf unserer Website Cookies, um Ihre Benutzererfahrung zu personalisieren, den Datenverkehr zu analysieren und Marketingaktivitäten durchzuführen. Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner unten auf unserer Website oder in Ihren Browsereinstellungen ändern."
        },
        {
          num: "05",
          title: "Datensicherheit",
          text: "Ihre personenbezogenen Daten werden unter Ergreifung aller erforderlichen technischen und organisatorischen Sicherheitsmaßnahmen in sterilen digitalen Infrastrukturen und sicheren Archiven gespeichert, um sie vor unbefugtem Zugriff, Verlust oder Offenlegung zu schützen."
        },
        {
          num: "06",
          title: "Ihre Rechte",
          text: "Nach den geltenden Datenschutzbestimmungen haben Sie das Recht zu erfahren, ob Ihre Daten verarbeitet werden, Auskunft über die verarbeiteten Daten zu verlangen, den Zweck der Verarbeitung zu erfahren, die Berichtigung unvollständiger/unrichtiger Daten zu verlangen oder die Löschung Ihrer Daten zu beantragen. Sie können Ihre Anträge schriftlich an unsere Klinik richten."
        }
      ]
    }
  };

  const current = content[lang] || content.tr;

  return (
    <>
      <PageHero
        tag={current.tag}
        title={current.title}
        subtitle={current.subtitle}
        breadcrumb={current.breadcrumb}
        lang={lang}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {current.sections.map((sec, i) => (
              <div key={i} className="border-t border-gray-100 pt-8 reveal">
                <div className="flex items-start gap-4">
                  <span className="text-[12px] font-mono text-[#4a78e0] tabular-nums mt-1 font-medium">{sec.num}</span>
                  <div className="flex-1">
                    <h2 className="text-[18px] sm:text-[20px] font-light text-gray-900 mb-4">{sec.title}</h2>
                    <p className="text-[13px] sm:text-[14px] text-[#5a6473] leading-[1.8] font-light">{sec.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
