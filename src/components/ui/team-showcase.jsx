import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { cn } from '../../lib/utils';

export default function TeamShowcase({ members }) {
  const [hoveredId, setHoveredId] = useState(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-sans">
      {/* ── Left: staggered photo grid ── */}
      <div className="flex gap-2 sm:gap-4 flex-shrink-0 justify-center md:justify-start pb-4 md:pb-0 w-full md:w-auto overflow-x-auto scrollbar-none">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 sm:gap-4">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[90px] h-[100px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 sm:gap-4 mt-[36px] sm:mt-[48px] md:mt-[60px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[102px] h-[112px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 sm:gap-4 mt-[18px] sm:mt-[24px] md:mt-[30px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[95px] h-[105px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list ── */}
      <div className="flex flex-col gap-5 pt-2 flex-1 w-full max-w-md">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-all duration-500 shadow-md border border-black/5',
        className,
        isDimmed ? 'opacity-40 scale-95' : 'opacity-100 scale-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter] duration-700"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.8)',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter || member.social?.linkedin || member.social?.instagram;

  return (
    <div
      className={cn(
        'cursor-pointer transition-all duration-300 border-b border-gray-100/50 pb-3 last:border-b-0',
        isDimmed ? 'opacity-40' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social */}
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'w-4 h-[2px] rounded-full flex-shrink-0 transition-all duration-500',
            isActive ? 'bg-[#4a78e0] w-6' : 'bg-gray-300',
          )}
        />
        <span
          className={cn(
            'text-[17px] md:text-[19px] font-light leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-gray-900 font-normal' : 'text-gray-600',
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-2 ml-2 transition-all duration-300',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-[#4a78e0] transition-all duration-200 hover:scale-110"
                title="Twitter / X"
              >
                <FaTwitter size={11} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-[#4a78e0] transition-all duration-200 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={11} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-[#4a78e0] transition-all duration-200 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={11} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-2 pl-7 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-[#4a78e0]">
        {member.role}
      </p>

      {/* Bio */}
      {member.bio && (
        <p className="mt-2 pl-7 text-[13px] text-gray-500 font-light leading-relaxed">
          {member.bio}
        </p>
      )}
    </div>
  );
}
