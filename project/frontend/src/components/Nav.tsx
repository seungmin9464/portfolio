'use client';
import { useEffect, useRef, useState } from 'react';
const links = [
  { href: '#archive', label: 'Work' },
  { href: '#about', label: 'About' },
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive('#' + entry.target.id);
      },
      { rootMargin: '-15% 0px -50% 0px' },
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const controls = Array.from(
          button.current
            ?.closest('header')
            ?.querySelectorAll<HTMLElement>('a[href], button') ?? [],
        ).filter((element) => element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
    };
  }, [open]);
  useEffect(() => {
    const mq = matchMedia('(min-width: 761px)');
    const reset = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener('change', reset);
    return () => mq.removeEventListener('change', reset);
  }, []);
  return (
    <>
      <button
        ref={button}
        className="menu-toggle mono"
        type="button"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        Menu <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <nav
        id="main-nav"
        className={'main-nav' + (open ? ' is-open' : '')}
        aria-label="주요 메뉴"
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            aria-current={active === href ? 'location' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          className="resume-link"
          href="/resume.pdf"
          download
          onClick={() => setOpen(false)}
        >
          Resume <span aria-hidden="true">↗</span>
          <span className="sr-only"> 이력서 다운로드</span>
        </a>
        <div className="mobile-menu-footer contact-links mono">
          <span>email: seung9464@naver.com</span>
          <span>github: https://github.com/seungmin9464</span>
          <a href="/resume.pdf" download onClick={() => setOpen(false)}>
            resume ↗
          </a>
        </div>
      </nav>
    </>
  );
}
