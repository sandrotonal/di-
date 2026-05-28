import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';

const testimonials = [
  {
    text: "Bu ERP, operasyonlarımızı kökten değiştirdi. Finans ve envanter yönetimini kolaylaştırdı. Bulut tabanlı platform sayesinde uzaktan bile üretken kalabiliyoruz.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    name: "Briana Patton",
    role: "Operasyon Müdürü",
  },
  {
    text: "Bu ERP'yi uygulamak çok kolay ve hızlıydı. Özelleştirilebilir, kullanıcı dostu arayüz sayesinde ekip eğitimi zahmetsiz oldu.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    name: "Bilal Ahmed",
    role: "BT Müdürü",
  },
  {
    text: "Destek ekibi olağanüstü, kurulum boyunca bize rehberlik etti ve sürekli yardım sağlayarak memnuniyetimizi garantiledi.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    name: "Saman Malik",
    role: "Müşteri Destek Lideri",
  },
  {
    text: "Bu ERP'nin kusursuz entegrasyonu iş operasyonlarımızı ve verimliliğimizi artırdı. Sezgisel arayüzü için şiddetle tavsiye ederim.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Güçlü özellikleri ve hızlı desteği iş akışımızı dönüştürdü ve bizi çok daha verimli hale getirdi.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
    name: "Zainab Hussain",
    role: "Proje Müdürü",
  },
  {
    text: "Sorunsuz uygulama beklentileri aştı. Süreçleri kolaylaştırarak genel iş performansını iyileştirdi.",
    image: "https://images.unsplash.com/photo-1554744511-d6c603f27c54?w=120&h=120&fit=crop&crop=face",
    name: "Aliza Khan",
    role: "İş Analisti",
  },
  {
    text: "İş fonksiyonlarımız kullanıcı dostu tasarım ve olumlu müşteri geri bildirimleriyle iyileşti.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
    name: "Farhan Siddiqui",
    role: "Pazarlama Direktörü",
  },
  {
    text: "İhtiyaçlarımızı anlayıp operasyonlarımızı geliştiren beklentilerin üzerinde bir çözüm sundular.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&h=120&fit=crop&crop=face",
    name: "Sana Sheikh",
    role: "Satış Müdürü",
  },
  {
    text: "Bu ERP'yi kullanarak çevrimiçi varlığımız ve dönüşümlerimiz önemli ölçüde iyileşti, iş performansımız arttı.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    name: "Hassan Ali",
    role: "E-ticaret Müdürü",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsPage({ t }) {
  return (
    <>
      <PageHero
        tag={t.testimonials.tag}
        title={t.testimonials.title}
        subtitle="Her biri gerçek, her biri ilham veren dönüşüm hikayeleri."
        breadcrumb="Hastalar"
      />

      {/* ── Animated Columns Section ─────────────────── */}
      <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-14"
          >
            <div className="flex justify-center">
              <div className="border border-gray-300 py-1.5 px-5 rounded-lg text-[11px] tracking-wider uppercase text-gray-700 bg-white/50">
                {t.testimonials.tag.split(' · ')[1] || 'Hastalar'}
              </div>
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,3rem)] font-extralight tracking-[-0.02em] mt-6 text-center">
              {t.testimonials.title}
            </h2>
            <p className="text-center mt-4 text-gray-600 text-[14px] leading-[1.7] max-w-md">
              Gerçek hastalarımızın gerçek hikayeleri.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden px-5 sm:px-8 lg:px-12">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </section>

      {/* ── Patient photos ────────────────────────────── */}
      <section className="py-0">
        <div className="grid grid-cols-3 h-[40vh] sm:h-[50vh]">
          {testimonials.slice(0, 3).map((item, i) => (
            <div key={i} className="overflow-hidden img-zoom rounded-sm border border-black/5">
              <img src={item.image.replace('w=120&h=120&fit=crop&crop=face', 'w=600&h=800&fit=crop')} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.2s]" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
            <div>
              <div className="w-8 h-[1px] bg-teal-800 mb-7" />
              <h2 className="text-[clamp(1.4rem,3vw,2.5rem)] font-extralight tracking-[-0.02em] leading-[1.15] text-gray-900">
                {t.common.stillHaveQuestions || 'Siz de katılın'}
              </h2>
            </div>
            <div className="flex flex-col sm:items-end gap-4">
              <p className="text-[13px] text-gray-400 max-w-xs sm:text-right leading-[1.7] font-light">
                {t.common.freeConsultation || 'İlk görüşme ücretsiz'}
              </p>
              <Link to="/iletisim"
                className="magnetic inline-flex items-center gap-3 text-[13px] border border-gray-300 text-gray-700 px-7 py-3.5 rounded-full hover:border-teal-800 hover:text-teal-800 transition-all duration-300 w-fit font-medium bg-white/50"
              >
                {t.common.appointment || 'Randevu Al'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
