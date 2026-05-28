export const Icon = {
  Arrow: ({s=16, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={c}>
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  ArrowUp: ({s=16, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c}>
      <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
    </svg>
  ),
  Plus: ({s=16, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={c}>
      <path d="M5 12h14"/><path d="M12 5v14"/>
    </svg>
  ),
  Clock: ({s=14, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c}>
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Menu: ({s=18, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={c}>
      <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  ),
  X: ({s=18, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={c}>
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  ),
  Phone: ({s=14, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={c}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  MapPin: ({s=14, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Chevron: ({s=14, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={c}>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  ),
  Mail: ({s=14, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c}>
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Star: ({s=14, c=""}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={c}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
};

const FlagSvg = {
  tr: () => (
    <svg width="14" height="10" viewBox="0 0 16 12">
      <rect width="16" height="12" fill="#E30A17"/>
      <circle cx="6.5" cy="6" r="2.5" fill="#fff"/>
      <circle cx="7.2" cy="6" r="2" fill="#E30A17"/>
    </svg>
  ),
  en: () => (
    <svg width="14" height="10" viewBox="0 0 16 12">
      <rect width="16" height="12" fill="#012169"/>
      <path d="M8,0 V12 M0,6 H16" stroke="#fff" strokeWidth="3"/>
      <path d="M8,0 V12 M0,6 H16" stroke="#C8102E" strokeWidth="2"/>
    </svg>
  ),
  de: () => (
    <svg width="14" height="10" viewBox="0 0 16 12">
      <rect width="16" height="4" fill="#000"/>
      <rect width="16" height="4" y="4" fill="#DD0000"/>
      <rect width="16" height="4" y="8" fill="#FFCE00"/>
    </svg>
  )
};
export { FlagSvg };
