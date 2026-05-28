export function Marquee({ items }) {
  return (
    <section className="py-10 sm:py-14 border-y border-black/10 overflow-hidden bg-[#f4f6fa]">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((m, i) => (
          <div key={i} className="flex items-center gap-16 text-[20px] sm:text-[28px] font-extralight tracking-[-0.02em] whitespace-nowrap">
            <span>{m}</span>
            <span className="text-[#4a78e0] text-[14px]">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
