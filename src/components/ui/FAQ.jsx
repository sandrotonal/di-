import { Icon } from './Icons';

export function FAQ({ q, a, open, toggle }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 sm:py-8 text-left group"
        aria-expanded={open}
      >
        <span className="text-[17px] sm:text-[20px] font-light text-gray-900 pr-8 group-hover:text-teal-500 transition-colors">
          {q}
        </span>
        <div className="flex-shrink-0 faq-plus">
          <Icon.Plus s={18} />
        </div>
      </button>
      <div className="faq-content">
        <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.7] pb-6 sm:pb-8 pr-12">{a}</p>
      </div>
    </div>
  );
}
