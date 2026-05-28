import { motion } from 'framer-motion';

export function ApproachTimeline({ t }) {
  const steps = (t.philosophy.chapters || []).map((chap, index) => {
    return {
      id: index + 1,
      roman: chap.n,
      title: chap.t,
      description: chap.d
    };
  });

  return (
    <section className="py-24 bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-16 reveal">
          <div className="w-8 h-[1px] bg-[#4a78e0]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.philosophy.tag}</span>
        </div>

        {/* Steps Grid - Cardless Minimal Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between"
            >
              <div>
                {/* Minimal Top Kılavuz Çizgi */}
                <div className="w-12 h-[1px] bg-gray-200 group-hover:bg-[#4a78e0] transition-colors duration-500 mb-6" />

                {/* Huge Thin Numeral */}
                <div className="text-[64px] sm:text-[76px] font-thin text-gray-200 group-hover:text-[#4a78e0] transition-colors duration-500 tracking-tight leading-none mb-4 tabular-nums">
                  0{step.id}
                </div>

                {/* Title */}
                <h3 className="text-[17px] sm:text-[18px] font-light text-gray-900 mb-3 group-hover:text-[#4a78e0] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#5a6473] leading-[1.7] font-light group-hover:text-gray-650 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Sub-label */}
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-300 mt-6 block font-light">
                Phase {step.roman}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
