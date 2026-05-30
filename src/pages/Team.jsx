import { PageHero } from '../components/PageHero';
import { IMG } from '../data/images';
import TeamShowcase from '../components/ui/team-showcase';

export default function TeamPage({ t, lang }) {
  const subtitle = lang === 'tr' 
    ? 'Alanında uzman, insana değer veren hekim kadromuzla tanışın.'
    : lang === 'de' 
      ? 'Lernen Sie unser hochqualifiziertes und menschliches Zahnärzteteam kennen.'
      : 'Meet our team of highly skilled, human-centric dental experts.';

  const mappedMembers = t.team.members.map((doc, i) => ({
    id: String(i + 1),
    name: doc.n,
    role: doc.r,
    bio: doc.bio,
    image: [IMG.doc1, IMG.doc2, IMG.doc3, IMG.doc4][i],
    social: [
      { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' },
      { linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' },
      { linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' }
    ][i]
  }));
  return (
    <>
      <PageHero
        tag={t.team.tag}
        title={t.team.title}
        subtitle={subtitle}
        breadcrumb={t.nav.doctors}
        lang={lang}
      />

      {/* ── Doctors — interactive showcase masonry ──────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <TeamShowcase members={mappedMembers} />
        </div>
      </section>

      {/* ── Full-bleed clinic image ───────────────────── */}
      <section className="relative h-[45vh] sm:h-[55vh] overflow-hidden">
        <img src={IMG.clinic3} alt="Klinik" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 pb-10 sm:pb-14 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto reveal">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] mb-3">
            {lang === 'tr' ? 'Klinik ortamı' : lang === 'de' ? 'Klinikumgebung' : 'Clinic environment'}
          </div>
          <p className="text-white text-[clamp(1.2rem,2.5vw,2rem)] font-extralight leading-[1.3] max-w-lg">
            {lang === 'tr' 
              ? 'Steril ameliyathane, dijital görüntüleme ve konforlu tedavi odaları.' 
              : lang === 'de' 
                ? 'Steriler Operationssaal, digitale Bildgebung und komfortable Behandlungsräume.' 
                : 'Sterile operating room, digital imaging and comfortable treatment rooms.'}
          </p>
        </div>
      </section>

      {/* ── Mission statement — centered, large text ─── */}
      <section className="py-16 sm:py-24 bg-[#f4f6fa]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="w-8 h-[1px] bg-[#4a78e0] mx-auto mb-8" />
            <p className="text-[clamp(1.2rem,2.5vw,2rem)] font-extralight leading-[1.6] tracking-[-0.02em] text-gray-700">
              {lang === 'tr' 
                ? 'Her birinin kendi alanında deneyimli, yenilikçi ve tutkulu hekimlerimiz; bilim ile sanatı bir arada sunar.' 
                : lang === 'de' 
                  ? 'Unsere in ihren Bereichen erfahrenen, innovativen und leidenschaftlichen Zahnärzte verbinden Wissenschaft mit Kunst.' 
                  : 'Experienced, innovative and passionate in their fields, our dentists present science and art together.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
