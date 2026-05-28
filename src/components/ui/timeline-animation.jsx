import { useRef, useEffect, useState } from "react";

export function TimelineContent({
  as: Tag = "div",
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variants = customVariants || {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.3, duration: 0.7 },
    }),
  };

  const style = inView
    ? variants.visible(animationNum)
    : variants.hidden;

  const inlineStyle = {
    transform: style.y !== undefined ? `translateY(${style.y}px)` : undefined,
    opacity: style.opacity,
    filter: style.filter,
    transition: style.transition
      ? `all ${style.transition.duration}s ease ${style.transition.delay}s`
      : "all 0.7s ease",
  };

  return (
    <Tag ref={ref} className={className} style={inlineStyle} {...props}>
      {children}
    </Tag>
  );
}
