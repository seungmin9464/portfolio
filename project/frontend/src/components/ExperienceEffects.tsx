'use client';

import { useEffect, useRef, useState } from 'react';
import { BULB_PATH } from './IdeaSketch';

/** A short, non-blocking introduction tied to document and font readiness. */
export function OpeningSequence() {
  const [phase, setPhase] = useState<'waiting' | 'loading' | 'opening' | 'done'>('waiting');
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try { if (sessionStorage.getItem('back-intro-seen') === '1') return; } catch { /* Storage is optional. */ }
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;
    let enter = 0;
    const loaded = document.readyState === 'complete' ? Promise.resolve() : new Promise<void>(resolve => window.addEventListener('load', () => resolve(), { once: true }));
    const ready = Promise.all([loaded, document.fonts.ready]);
    // Never prevent access to the page if an asset is slow or fails.
    const limit = new Promise<void>(resolve => { timeout = setTimeout(resolve, 3000); });
    enter = requestAnimationFrame(() => { setPhase('loading'); Promise.race([ready, limit]).then(() => {
      if (cancelled) return;
      clearTimeout(timeout);
      try { sessionStorage.setItem('back-intro-seen', '1'); } catch { /* Optional. */ }
      setPhase('opening');
    }); });
    return () => { cancelled = true; cancelAnimationFrame(enter); clearTimeout(timeout); };
  }, []);
  return <div className="intro-loader" data-phase={phase} aria-hidden="true" onAnimationEnd={event => { if (event.target === event.currentTarget && phase === 'opening') setPhase('done'); }}>
    <div className="intro-signature"><span>b<span className="intro-dot">.</span></span><svg viewBox="0 0 260 90" fill="none"><path d="M18 15 C65 15 48 64 95 64 S133 10 170 32 S190 78 242 70" pathLength="1" /></svg></div>
    <span className="mono intro-label">A closer look. / Opening the archive</span>
  </div>;
}

/** The rail, bulb and contact endpoint share one path and one moving point. */
export function ScrollThread() {
  const svg = useRef<SVGSVGElement>(null);
  const line = useRef<SVGPathElement>(null);
  const point = useRef<SVGCircleElement>(null);
  useEffect(() => {
    const canvas = svg.current, path = line.current, dot = point.current;
    const root = document.querySelector<HTMLElement>('.page-shell');
    if (!canvas || !path || !dot || !root) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, measureFrame = 0, total = 0, shown = 0, previousTime = 0;
    let stops: { scroll: number; length: number }[] = [];
    const paint = (now: number) => {
      frame = 0;
      if (!total || !stops.length) return;
      if (motion.matches) { path.style.strokeDashoffset = '0'; dot.style.opacity = '0'; return; }
      let index = 1;
      while (index < stops.length - 1 && scrollY > stops[index].scroll) index++;
      const a = stops[index - 1], b = stops[index];
      const ratio = Math.max(0, Math.min(1, (scrollY - a.scroll) / Math.max(1, b.scroll - a.scroll)));
      const target = a.length + (b.length - a.length) * ratio;
      const dt = previousTime ? Math.min(32, Math.max(1, now - previousTime)) : 16;
      previousTime = now;
      const delta = target - shown;
      // A shared physical velocity limit also covers long horizontal turns and the bulb.
      const step = delta * (1 - Math.exp(-dt / 100));
      shown += Math.max(-dt * .6, Math.min(dt * .6, step));
      if (Math.abs(delta) < .25) shown = target;
      path.style.strokeDashoffset = String(total - shown);
      const pos = path.getPointAtLength(shown);
      dot.setAttribute('cx', String(pos.x)); dot.setAttribute('cy', String(pos.y));
      dot.style.opacity = shown > 1 ? '1' : '0';
      if (Math.abs(target - shown) > .25) frame = requestAnimationFrame(paint);
      else previousTime = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const measure = () => {
      measureFrame = 0;
      const bulb = root.querySelector<SVGSVGElement>('.idea-bulb');
      const contacts = root.querySelector<HTMLElement>('.contact-links');
      if (!bulb || !contacts) return;
      const rect = root.getBoundingClientRect(), art = bulb.getBoundingClientRect(), row = contacts.getBoundingClientRect();
      const width = rect.width, height = rect.height, inset = width <= 760 ? 10 : 22;
      const right = width - inset, left = inset, scale = art.width / 420;
      const bx = art.left - rect.left, by = art.top - rect.top;
      const x = (value: number) => bx + value * scale;
      const y = (value: number) => by + value * scale;
      const endY = row.top - rect.top + row.height / 2;
      const rootTop = rect.top + scrollY;
      const focus = Math.min(innerHeight * .46, 340);
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      const marks: { y: number; length: number }[] = [];
      let d = `M ${right} 90 L ${right} ${y(8) - 28}`;
      const mark = (at: number) => { path.setAttribute('d', d); marks.push({ y: at, length: path.getTotalLength() }); };
      mark(by - innerHeight * .45);
      // Enter the filament from the right; no second SVG stroke is drawn locally.
      d += ` Q ${right} ${y(8)} ${right - 28} ${y(8)} L ${x(184)} ${y(8)}`;
      mark(by - innerHeight * .15);
      let coordinate = 0;
      const transformed = BULB_PATH.replace(/-?\d*\.?\d+/g, value => String(coordinate++ % 2 === 0 ? x(Number(value)) : y(Number(value))));
      d += ' ' + transformed.replace(/^M/, 'L');
      mark(y(444) + innerHeight * .08);
      const exitY = y(444) + 30;
      d += ` Q ${x(168)} ${exitY} ${x(168) - 28} ${exitY} L ${left + 24} ${exitY} Q ${left} ${exitY} ${left} ${exitY + 24}`;
      mark(exitY + innerHeight * .25);
      // After the bulb the rail is completely straight, ending beside the contact row.
      d += ` L ${left} ${Math.max(exitY + 24, endY)}`;
      path.setAttribute('d', d);
      const oldTotal = total;
      total = path.getTotalLength();
      if (oldTotal) shown = Math.min(total, shown * total / oldTotal);
      canvas.setAttribute('viewBox', `0 0 ${width} ${height}`);
      canvas.style.height = `${height}px`;
      stops = [{ scroll: 0, length: 0 }];
      for (const mark of marks) {
        stops.push({ scroll: Math.max(stops[stops.length - 1].scroll + 1, Math.min(maxScroll - 1, rootTop + mark.y - focus)), length: mark.length });
      }
      stops.push({ scroll: Math.max(stops[stops.length - 1].scroll + 1, maxScroll), length: total });
      path.style.strokeDasharray = String(total);
      path.style.strokeDashoffset = String(total - shown);
      schedule();
    };
    const scheduleMeasure = () => { if (!measureFrame) measureFrame = requestAnimationFrame(measure); };
    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(root);
    root.querySelectorAll('main,footer,.idea-bulb').forEach(node => observer.observe(node));
    measure(); document.fonts.ready.then(scheduleMeasure);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', scheduleMeasure); motion.addEventListener('change', schedule);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); cancelAnimationFrame(measureFrame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', scheduleMeasure); motion.removeEventListener('change', schedule); };
  }, []);
  return <svg ref={svg} className="scroll-thread" aria-hidden="true" focusable="false" fill="none"><path ref={line} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle ref={point} r="3.5" fill="currentColor"/></svg>;
}
