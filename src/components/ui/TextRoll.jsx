export function TextRoll({ text }) {
  return (
    <span className="text-roll">
      <span className="text-roll-inner">
        <span>{text}</span>
        <span aria-hidden>{text}</span>
      </span>
    </span>
  );
}
