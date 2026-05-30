import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TimelineContent } from "./timeline-animation";
import { Sparkles } from "lucide-react";

export default function AboutSection2({ t, lang }) {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 1.5, duration: 0.7 },
    }),
    hidden: { filter: "blur(10px)", y: 40, opacity: 0 },
  };

  const textVariants = {
    visible: (i) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.7 },
    }),
    hidden: { filter: "blur(10px)", opacity: 0 },
  };

  const c1 = t.philosophy.chapters[0].t;
  const c2 = t.philosophy.chapters[1].t;
  const c3 = t.philosophy.chapters[2].t;

  const highlightStyle = "inline-block xl:h-16 border-dotted px-3 rounded-md";
  const subtitle1 = lang === 'tr' ? 'Size özel gülüş tasarımı için' : lang === 'de' ? 'Für Ihr individuelles Smile Design' : 'For your personalized smile design';
  const subtitle2 = lang === 'tr' ? 'daha ilerisine gidiyoruz' : lang === 'de' ? 'gehen wir weiter' : 'we go further';

  return (
    <section className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 bg-[#f4f6fa] min-h-[60vh] flex items-center border-b border-gray-200">
      <div className="max-w-6xl mx-auto w-full" ref={heroRef}>
        <div className="flex flex-col items-start gap-8">
          <div className="w-full">
            <TimelineContent
              as="h1"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="sm:text-4xl text-2xl md:text-5xl lg:text-6xl !leading-[110%] font-extralight tracking-[-0.03em] text-gray-900 mb-8"
            >
              {t.philosophy.title.split(' ')[0]}{' '}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className={`text-[#4a78e0] border border-[#4a78e0]/30 ${highlightStyle}`}
              >
                {c1}
              </TimelineContent>{' '}
              {t.philosophy.title.split(' ').slice(2).join(' ')}{' '}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className={`text-[#5a6473] border border-[#5a6473]/30 ${highlightStyle}`}
              >
                {c2}
              </TimelineContent>{' '}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className={`text-[#4a78e0] border border-[#4a78e0]/30 italic font-normal ${highlightStyle}`}
              >
                {c3}
              </TimelineContent>
            </TimelineContent>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-start sm:items-center">
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-sm sm:text-xl"
              >
                <div className="font-medium text-gray-900 mb-1 capitalize">
                  {t.philosophy.desc.split('.')[0]}.
                </div>
                <div className="text-[#5a6473] font-light uppercase text-xs sm:text-sm tracking-wider">
                  {subtitle1} — {subtitle2}
                </div>
              </TimelineContent>

              <TimelineContent
                as="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/yaklasim");
                }}
                animationNum={5}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="bg-[#4a78e0] gap-2 font-medium shadow-lg shadow-[#4a78e0]/20 text-white h-12 px-6 rounded-full text-sm inline-flex items-center cursor-pointer hover:bg-[#4a78e0]/90 transition-colors shrink-0"
              >
                <Sparkles size={16} />
                {lang === 'tr' ? 'Yaklaşımımız' : lang === 'de' ? 'Unser Ansatz' : 'Our Approach'}
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
