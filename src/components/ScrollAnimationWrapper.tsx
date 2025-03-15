// components/ScrollAnimationWrapper.tsx
"use client";
import { useEffect, useRef, ReactNode } from 'react';

export default function ScrollAnimationWrapper({ children, delay = 0 }: { 
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-y-0');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-500 ease-out"
    >
      {children}
    </div>
  );
}