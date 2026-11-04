'use client';

import { useEffect, useRef, useState } from 'react';
import Nav from './Nav';

export default function Header() {
  const header = useRef<HTMLElement>(null);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = header.current;
      if (!element) return;
      const middle = element.getBoundingClientRect().height / 2;
      const dark = Array.from(document.querySelectorAll('.work-projects')).some(
        (section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= middle && rect.bottom > middle;
        },
      );
      setOnDark(dark);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <header
      ref={header}
      className={'site-header' + (onDark ? ' is-on-dark' : '')}
    >
      <div className="site-header-inner">
      <a className="wordmark" href="#home" aria-label="Back. 홈">
        Back<span>.</span>
      </a>
      <Nav />
      </div>
    </header>
  );
}
