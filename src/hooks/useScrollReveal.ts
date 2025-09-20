import { useEffect } from "react";

/**
 * Tự động thêm .reveal-show cho mọi phần tử có [data-reveal]
 * Hỗ trợ stagger bằng CSS var: style={{ '--delay': '120ms' } as React.CSSProperties }
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("reveal-show");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -5% 0px" }
    );

    els.forEach((el) => {
      // base state
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
