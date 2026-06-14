import { useEffect, useRef, useState, type PropsWithChildren } from 'react';

type AnimatedSectionProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export function AnimatedSection({ children, className = '', id }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
