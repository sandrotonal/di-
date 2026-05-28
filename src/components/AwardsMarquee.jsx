export function AwardsMarquee({ items }) {
  return (
    <section className="py-10 sm:py-14 border-y border-black/10 overflow-hidden bg-white">
      <div className="marquee-track-rev">
        {[...items, ...items, ...items, ...items].map((a, i) => (
          <div key={i} className="flex items-center gap-12 text-[16px] sm:text-[20px] font-extralight tracking-[-0.01em] whitespace-nowrap">
            <span className="italic text-teal-400">✦</span>
            <span>{a}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
