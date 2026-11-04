'use client';

import { useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiPause, FiPlay } from 'react-icons/fi';

const skills = [
  ['HTML5', 'H5'],
  ['CSS3', 'C3'],
  ['SCSS', 'Sc'],
  ['JavaScript', 'Js'],
  ['jQuery', 'Jq'],
  ['React', 'Re'],
  ['Vue', 'Vu'],
  ['Java', 'Ja'],
  ['Git', 'Gt'],
  ['Spring', 'Sp'],
  ['Spring Boot', 'Sb'],
  ['TypeScript', 'Ts'],
  ['MySQL', 'Sq'],
  ['MyBatis', 'Mb'],
  ['REST API', 'Api'],
  ['Postman', 'Pm'],
  ['Photoshop', 'Ps'],
  ['Illustrator', 'Ai'],
  ['Adobe XD', 'Xd'],
  ['Figma', 'Fg'],
];

export default function SkillsRibbon() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const motion = useRef({
    x: 0,
    velocity: 0,
    down: false,
    hover: false,
    paused: false,
    lastX: 0,
    lastTime: 0,
  });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = viewport.current;
    const belt = track.current;
    if (!element || !belt) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const state = motion.current;
    let startAt = 0;
    let entered = false;
    let frame = 0;
    let previous = 0;
    let visible = false;
    let loopWidth = belt.scrollWidth / 2;
    const resize = new ResizeObserver(() => {
      loopWidth = belt.scrollWidth / 2;
    });
    resize.observe(belt);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !entered) {
        entered = true;
        startAt = performance.now() + 1600;
      }
    });
    observer.observe(element);
    const tick = (time: number) => {
      const dt = Math.min((time - previous) / 16.67 || 1, 2);
      previous = time;
      if (visible && !document.hidden) {
        if (!state.down) {
          state.x += state.velocity * dt;
          state.velocity *= Math.pow(0.94, dt);
          if (Math.abs(state.velocity) < 0.05) state.velocity = 0;
          if (
            !state.hover &&
            !state.paused &&
            !reduced.matches &&
            time > startAt &&
            state.velocity === 0
          ) {
            state.x -= 0.28 * dt;
          }
        }
        if (loopWidth)
          state.x =
            state.x > 0
              ? (state.x % loopWidth) - loopWidth
              : state.x % loopWidth;
        belt.style.transform = `translate3d(${state.x}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
    };
  }, []);

  const move = (direction: number) => {
    const card = track.current?.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 10 : 126;
    motion.current.x += direction * step;
    motion.current.velocity = 0;
  };

  return (
    <section
      className={'skills-ribbon' + (paused ? ' is-paused' : '')}
      aria-label="사용하는 기술과 디자인 도구"
    >
      <div className="skills-heading mono">
        <span>My toolkit</span>
        <div className="skills-controls">
          <button type="button" aria-label="이전 스킬" onClick={() => move(1)}>
            <FiArrowLeft aria-hidden="true" />
          </button>
          <button type="button" aria-label="다음 스킬" onClick={() => move(-1)}>
            <FiArrowRight aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={paused ? '스킬 모션 재생' : '스킬 모션 일시정지'}
            aria-pressed={paused}
            onClick={() => {
              motion.current.paused = !paused;
              setPaused(!paused);
            }}
          >
            {paused ? (
              <FiPlay aria-hidden="true" />
            ) : (
              <FiPause aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <div
        className="skills-viewport"
        ref={viewport}
        onPointerEnter={() => {
          motion.current.hover = true;
        }}
        onPointerLeave={() => {
          motion.current.hover = false;
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          Object.assign(motion.current, {
            down: true,
            velocity: 0,
            lastX: event.clientX,
            lastTime: performance.now(),
          });
          event.currentTarget.classList.add('is-dragging');
        }}
        onPointerMove={(event) => {
          const state = motion.current;
          if (!state.down) return;
          const now = performance.now();
          const dx = event.clientX - state.lastX;
          state.x += dx;
          state.velocity = (dx / Math.max(10, now - state.lastTime)) * 16;
          state.lastX = event.clientX;
          state.lastTime = now;
        }}
        onPointerUp={(event) => {
          motion.current.down = false;
          event.currentTarget.classList.remove('is-dragging');
        }}
        onPointerCancel={(event) => {
          motion.current.down = false;
          motion.current.velocity = 0;
          event.currentTarget.classList.remove('is-dragging');
        }}
      >
        <div className="skills-track" ref={track} role="list">
          {[0, 1].map((copy) =>
            skills.map(([name, symbol], index) => (
              <div
                className="skill-tile"
                role="listitem"
                key={`${copy}-${name}`}
                aria-hidden={copy === 1 ? true : undefined}
              >
                <span className="skill-number mono" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className="skill-symbol"
                  aria-hidden="true"
                  style={{ animationDelay: `${-index * 0.37}s` }}
                >
                  {[...symbol].map((letter, position) => (
                    <span
                      className={`skill-letter letter-${position}`}
                      key={position}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <span className="skill-name mono">{name}</span>
              </div>
            )),
          )}
        </div>
      </div>
      <div className="skills-caption mono">
        <span>Small marks. Many possibilities.</span>
        <span>Drag to explore ↔</span>
      </div>
    </section>
  );
}
