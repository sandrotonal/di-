import { useState, useEffect } from "react"

export function LocationTag({ city = "İstanbul", country = "Türkiye", lang = "tr", timezone = "GMT+3", isLightTheme = false }) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const borderClass = isLightTheme 
    ? "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20" 
    : "border-black/5 bg-white/40 text-[#5a6473] hover:border-black/10 hover:bg-white hover:shadow-[0_0_15px_rgba(0,0,0,0.02)]";

  const textClass = isLightTheme ? "text-white" : "text-[#5a6473]";
  const iconClass = isLightTheme ? "text-white/80" : "text-[#5a6473]/70";

  let displayCity = city;
  let displayCountry = country;

  if (city === "İstanbul" && country === "Türkiye") {
    if (lang === "en") {
      displayCity = "Istanbul";
      displayCountry = "Turkey";
    } else if (lang === "de") {
      displayCity = "Istanbul";
      displayCountry = "Türkei";
    }
  }

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex items-center gap-3 rounded-full border px-4 py-2 transition-all duration-500 ease-out hover:scale-[1.02] active:scale-[0.98] ${borderClass}`}
    >
      <div className="relative flex items-center justify-center">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-hidden relative">
        <span
          className={`text-[12px] font-medium transition-all duration-500 ${textClass}`}
          style={{
            transform: isHovered ? "translateY(-100%)" : "translateY(0)",
            opacity: isHovered ? 0 : 1,
          }}
        >
          {displayCity}, {displayCountry}
        </span>

        <span
          className={`absolute left-0 text-[12px] font-medium transition-all duration-500 ${textClass}`}
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          {currentTime} {timezone}
        </span>
      </div>

      <svg
        className={`h-3 w-3 transition-all duration-300 ${iconClass}`}
        style={{
          transform: isHovered ? "translateX(2px) rotate(-45deg)" : "translateX(0) rotate(0)",
          opacity: isHovered ? 1 : 0.5,
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </button>
  )
}
