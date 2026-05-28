import { PageHero } from '../components/PageHero';

export default function KVKKPage({ t, lang }) {
  const content = {
    tr: {
      tag: "Yasal Bilgilendirme",
      title: "KVKK Aydınlatma Metni",
      subtitle: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, verilerinizin işlenme süreçleri ve haklarınız hakkında şeffaf bilgilendirme.",
      breadcrumb: "KVKK Aydınlatma Metni",
      sections: [
        {
          num: "01",
          title: "Kişisel Verilerin Korunması Hakkında",
          text: "Aura Dental Studio olarak hastalarımızın ve ziyaretçilerimizin kişisel verilerinin korunmasına büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") kapsamında, veri sorumlusu olarak kişisel verilerinizi kanuni sınırlar içerisinde işlemekte ve korumaktayız."
        },
        {
          num: "02",
          title: "Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi",
          text: "Kişisel verileriniz; kliniğimizi ziyaretleriniz, randevu formları, telefon görüşmeleri, e-posta yazışmaları ve diğer fiziksel veya dijital kanallar aracılığıyla, sözlü, yazılı veya elektronik ortamda toplanmaktadır. Bu veriler, sağlık hizmetlerinin sunulması ve yasal yükümlülüklerimizin ifası amacıyla işlenmektedir."
        },
        {
          num: "03",
          title: "Verilerin Üçüncü Kişilere Aktarılması",
          text: "Sağlık ve kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde; Sosyal Güvenlik Kurumu, Sağlık Bakanlığı, adli merciler veya yetkili kamu kurum ve kuruluşları ile resmi talepler kapsamında ve hukuki yükümlülüklerimizi yerine getirmek üzere paylaşılabilecektir. Üçüncü şahıslara ticari amaçla veri aktarımı yapılmamaktadır."
        },
        {
          num: "04",
          title: "Veri Sahibi Olarak Haklarınız",
          text: "KVKK'nın 11. maddesi uyarınca kliniğimize başvurarak; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme ve düzeltilmesini/silinmesini isteme hakkına sahipsiniz."
        }
      ]
    },
    en: {
      tag: "Legal Notice",
      title: "GDPR Information Text",
      subtitle: "In accordance with the General Data Protection Regulation (GDPR), transparent information about the processing of your personal data and your rights.",
      breadcrumb: "GDPR Information",
      sections: [
        {
          num: "01",
          title: "Protection of Personal Data",
          text: "At Aura Dental Studio, we attach great importance to the protection of our patients' and visitors' personal data. Under the General Data Protection Regulation (\"GDPR\"), we process and protect your personal data within legal limits as a data controller."
        },
        {
          num: "02",
          title: "Collection Method and Legal Basis",
          text: "Your personal data is collected in oral, written, or electronic formats through visits to our clinic, appointment forms, telephone calls, email correspondence, and other physical or digital channels. This data is processed for the purpose of providing healthcare services and fulfilling our legal duties."
        },
        {
          num: "03",
          title: "Transfer of Data to Third Parties",
          text: "Your health and personal data may be shared with official health institutions, judicial authorities, or authorized public bodies within the scope of legal obligations and formal requests. No data transfer is made to third parties for commercial marketing purposes."
        },
        {
          num: "04",
          title: "Your Rights as a Data Subject",
          text: "Under GDPR, you have the right to access your personal data, request correction or erasure of your data, restrict the processing of your data, object to processing, request data portability, and withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal."
        }
      ]
    },
    de: {
      tag: "Rechtliche Hinweise",
      title: "DSGVO-Informationsblatt",
      subtitle: "In Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO), transparente Informationen über die Verarbeitung Ihrer personenbezogenen Daten und Ihre Rechte.",
      breadcrumb: "DSGVO-Hinweise",
      sections: [
        {
          num: "01",
          title: "Schutz personenbezogener Daten",
          text: "Aura Dental Studio legt großen Wert auf den Schutz der personenbezogenen Daten unserer Patienten und Besucher. Im Rahmen der Datenschutz-Grundverordnung (\"DSGVO\") verarbeiten und schützen wir Ihre Daten als Verantwortlicher im gesetzlich zulässigen Rahmen."
        },
        {
          num: "02",
          title: "Erhebungsmethode und Rechtsgrundlage",
          text: "Ihre personenbezogenen Daten werden in mündlicher, schriftlicher oder elektronischer Form durch Besuche in unserer Klinik, Terminformulare, Telefonate, E-Mail-Korrespondenz sowie andere physische oder digitale Kanäle erhoben. Diese Daten werden zum Zweck der Erbringung von Gesundheitsdienstleistungen und zur Erfüllung unserer gesetzlichen Pflichten verarbeitet."
        },
        {
          num: "03",
          title: "Weitergabe von Daten an Dritte",
          text: "Ihre gesundheitlichen und personenbezogenen Daten können im Rahmen gesetzlicher Verpflichtungen und behördlicher Anfragen an offizielle Gesundheitsbehörden, Justizorgane oder autorisierte öffentliche Stellen weitergegeben werden. Eine Datenweitergabe an Dritte zu kommerziellen Marketingzwecken erfolgt nicht."
        },
        {
          num: "04",
          title: "Ihre Rechte als betroffene Person",
          text: "Gemäß DSGVO haben Sie das Recht auf Auskunft über Ihre personenbezogenen Daten, das Recht auf Berichtigung oder Löschung Ihrer Daten, das Recht auf Einschränkung der Verarbeitung, das Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit. Sie können Ihre Einwilligung jederzeit widerrufen."
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
