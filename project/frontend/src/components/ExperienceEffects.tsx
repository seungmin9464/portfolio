'use client';

import { useEffect, useRef, useState } from 'react';
import { BULB_PATH } from './IdeaSketch';

export function OpeningSequence() {
  const [phase, setPhase] = useState<
    'waiting' | 'loading' | 'opening' | 'done'
  >('waiting');
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try {
      if (sessionStorage.getItem('back-intro-seen') === '1') return;
    } catch {
      // 저장소가 차단되어 있어도 로딩 화면은 사용할 수 있습니다.
    }
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;
    let onLoad: (() => void) | undefined;
    const loaded =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            onLoad = resolve;
            window.addEventListener('load', onLoad, { once: true });
          });
    const ready = Promise.all([loaded, document.fonts.ready]);
    // 이미지나 폰트가 늦어져도 3초 뒤에는 페이지를 엽니다.
    const limit = new Promise<void>((resolve) => {
      timeout = setTimeout(resolve, 3000);
    });
    const enter = requestAnimationFrame(() => {
      setPhase('loading');
      Promise.race([ready, limit]).then(() => {
        if (cancelled) return;
        clearTimeout(timeout);
        try {
          sessionStorage.setItem('back-intro-seen', '1');
        } catch {
          // 저장에 실패해도 페이지 진입에는 영향을 주지 않습니다.
        }
        setPhase('opening');
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(enter);
      clearTimeout(timeout);
      if (onLoad) window.removeEventListener('load', onLoad);
    };
  }, []);
  return (
    <div
      className="intro-loader"
      data-phase={phase}
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && phase === 'opening')
          setPhase('done');
      }}
    >
      <div className="intro-signature">
        <span>
          b<span className="intro-dot">.</span>
        </span>
        <svg viewBox="0 0 260 90" fill="none">
          <path
            d="M18 15 C65 15 48 64 95 64 S133 10 170 32 S190 78 242 70"
            pathLength="1"
          />
        </svg>
      </div>
      <span className="mono intro-label">
        A closer look. / Opening the archive
      </span>
    </div>
  );
}

export function ScrollThread() {
  const svg = useRef<SVGSVGElement>(null);
  const line = useRef<SVGPathElement>(null);
  const point = useRef<SVGCircleElement>(null);
  useEffect(() => {
    const canvas = svg.current;
    const path = line.current;
    const dot = point.current;
    const root = document.querySelector<HTMLElement>('.page-shell');
    if (!canvas || !path || !dot || !root) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let disposed = false;
    let bulbStart = 0;
    let bulbEnd = 0;
    let desktop = false;
    let frame = 0,
      measureFrame = 0,
      total = 0,
      shown = 0,
      previousTime = 0;
    let stops: { scroll: number; length: number }[] = [];
    const paint = (now: number) => {
      frame = 0;
      if (!total || !stops.length) return;
      if (motion.matches) {
        path.style.strokeDashoffset = '0';
        dot.style.opacity = '0';
        return;
      }
      let index = 1;
      while (index < stops.length - 1 && scrollY > stops[index].scroll) index++;
      const a = stops[index - 1],
        b = stops[index];
      const ratio = Math.max(
        0,
        Math.min(1, (scrollY - a.scroll) / Math.max(1, b.scroll - a.scroll)),
      );
      const target = a.length + (b.length - a.length) * ratio;
      const dt = previousTime
        ? Math.min(32, Math.max(1, now - previousTime))
        : 16;
      previousTime = now;
      const delta = target - shown;
      // PC 전구만 빠르게 그리고, 양쪽 직선 구간의 속도는 유지합니다.
      const drawingBulb = desktop && shown >= bulbStart && shown <= bulbEnd;
      const speed = drawingBulb ? 0.9 : 0.6;
      const step = delta * (1 - Math.exp(-dt / (drawingBulb ? 85 : 100)));
      shown += Math.max(-dt * speed, Math.min(dt * speed, step));
      if (Math.abs(delta) < 0.25) shown = target;
      path.style.strokeDashoffset = String(total - shown);
      const pos = path.getPointAtLength(shown);
      dot.setAttribute('cx', String(pos.x));
      dot.setAttribute('cy', String(pos.y));
      dot.style.opacity = shown > 1 ? '1' : '0';
      if (Math.abs(target - shown) > 0.25) frame = requestAnimationFrame(paint);
      else previousTime = 0;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const measure = () => {
      measureFrame = 0;
      const bulb = root.querySelector<SVGSVGElement>('.idea-bulb');
      const contacts = root.querySelector<HTMLElement>('#contact .contact-links');
      if (!bulb || !contacts) return;
      const rect = root.getBoundingClientRect(),
        art = bulb.getBoundingClientRect(),
        row = contacts.getBoundingClientRect();
      const width = rect.width,
        height = rect.height,
        inset = width <= 760 ? 10 : 22;
      desktop = width > 760;
      const right = width - inset,
        left = inset,
        scale = art.width / 420;
      const bx = art.left - rect.left,
        by = art.top - rect.top;
      const x = (value: number) => bx + value * scale;
      const y = (value: number) => by + value * scale;
      const endY = row.top - rect.top + row.height / 2;
      const rootTop = rect.top + scrollY;
      const focus = Math.min(innerHeight * 0.46, 340);
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - innerHeight,
      );
      const marks: { y: number; length: number }[] = [];
      let d = `M ${right} 90 L ${right} ${y(8) - 28}`;
      const mark = (at: number) => {
        path.setAttribute('d', d);
        marks.push({ y: at, length: path.getTotalLength() });
      };
      mark(by - innerHeight * 0.45);
      d += ` Q ${right} ${y(8)} ${right - 28} ${y(8)} L ${x(184)} ${y(8)}`;
      mark(by - innerHeight * (desktop ? 0.25 : 0.15));
      bulbStart = path.getTotalLength();
      let coordinate = 0;
      const transformed = BULB_PATH.replace(/-?\d*\.?\d+/g, (value) =>
        String(coordinate++ % 2 === 0 ? x(Number(value)) : y(Number(value))),
      );
      d += ' ' + transformed.replace(/^M/, 'L');
      mark(y(444) + innerHeight * (desktop ? -0.12 : 0.08));
      bulbEnd = path.getTotalLength();
      const exitY = y(444) + 30;
      d += ` Q ${x(168)} ${exitY} ${x(168) - 28} ${exitY} L ${left + 24} ${exitY} Q ${left} ${exitY} ${left} ${exitY + 24}`;
      mark(exitY + innerHeight * 0.25);
      d += ` L ${left} ${Math.max(exitY + 24, endY)}`;
      path.setAttribute('d', d);
      const oldTotal = total;
      total = path.getTotalLength();
      if (oldTotal) shown = Math.min(total, (shown * total) / oldTotal);
      canvas.setAttribute('viewBox', `0 0 ${width} ${height}`);
      canvas.style.height = `${height}px`;
      stops = [{ scroll: 0, length: 0 }];
      for (const mark of marks) {
        stops.push({
          scroll: Math.max(
            stops[stops.length - 1].scroll + 1,
            Math.min(maxScroll - 1, rootTop + mark.y - focus),
          ),
          length: mark.length,
        });
      }
      stops.push({
        scroll: Math.max(stops[stops.length - 1].scroll + 1, maxScroll),
        length: total,
      });
      path.style.strokeDasharray = String(total);
      path.style.strokeDashoffset = String(total - shown);
      schedule();
    };
    const scheduleMeasure = () => {
      if (!disposed && !measureFrame)
        measureFrame = requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(root);
    root
      .querySelectorAll('main,footer,.idea-bulb')
      .forEach((node) => observer.observe(node));
    measure();
    document.fonts.ready.then(scheduleMeasure);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', scheduleMeasure);
    motion.addEventListener('change', schedule);
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(measureFrame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', scheduleMeasure);
      motion.removeEventListener('change', schedule);
    };
  }, []);
  return (
    <svg
      ref={svg}
      className="scroll-thread"
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <path
        ref={line}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle ref={point} r="3.5" fill="currentColor" />
    </svg>
  );
}
