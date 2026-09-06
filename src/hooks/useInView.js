import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const show = () => setIsVisible(true);

    const revealIfSeen = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        show();
        return true;
      }
      return false;
    };

    if (revealIfSeen()) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          show();
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "80px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
