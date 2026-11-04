'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  phase: number;
  isDot: boolean;
};

export default function HeroMonogram() {
  const field = useRef<HTMLButtonElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const button = field.current;
    const surface = canvas.current;
    const context = surface?.getContext('2d');
    if (!button || !surface || !context) return;

    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const particles: Particle[] = [];
    const bounds = { width: 1, height: 1, centerX: 0, centerY: 0 };
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let visible = true;
    let disposed = false;
    const colors = getComputedStyle(button);
    const ink = colors.getPropertyValue('--color-ink').trim() || '#191916';
    const orange =
      colors.getPropertyValue('--color-orange').trim() || '#ef6f2e';

    const makeParticles = () => {
      const mask = document.createElement('canvas');
      mask.width = 360;
      mask.height = 300;
      const pen = mask.getContext('2d');
      if (!pen) return;
      pen.font = 'bold 260px Georgia, "Times New Roman", serif';
      pen.textBaseline = 'middle';
      const left = (mask.width - pen.measureText('B.').width) / 2;
      pen.fillStyle = '#000000';
      pen.fillText('B', left, 150);
      pen.fillStyle = '#ff0000';
      pen.fillText('.', left + pen.measureText('B').width, 150);
      const pixels = pen.getImageData(0, 0, mask.width, mask.height).data;
      particles.length = 0;
      for (let y = 0; y < mask.height; y += 4) {
        for (let x = 0; x < mask.width; x += 4) {
          const pixel = (y * mask.width + x) * 4;
          if (pixels[pixel + 3] < 100) continue;
          particles.push({
            x: x - 180,
            y: y - 150,
            homeX: x - 180,
            homeY: y - 150,
            vx: 0,
            vy: 0,
            phase: Math.random() * Math.PI * 2,
            isDot: pixels[pixel] > 127,
          });
        }
      }
      if (particles.length) {
        const minX = Math.min(...particles.map((particle) => particle.homeX));
        const maxX = Math.max(...particles.map((particle) => particle.homeX));
        const minY = Math.min(...particles.map((particle) => particle.homeY));
        const maxY = Math.max(...particles.map((particle) => particle.homeY));
        bounds.width = maxX - minX;
        bounds.height = maxY - minY;
        bounds.centerX = (minX + maxX) / 2;
        bounds.centerY = (minY + maxY) / 2;
      }
    };

    const draw = (dt = 0) => {
      context.clearRect(0, 0, width, height);
      // 글자의 실제 윤곽을 기준으로 확대하고 안내 문구의 자리는 비워 둡니다.
      const scale = Math.max(
        0.1,
        Math.min((width - 32) / bounds.width, (height - 72) / bounds.height) *
          0.92,
      );
      const centerX = width / 2;
      const centerY = (height - 32) / 2;
      const px = (pointer.x - centerX) / scale + bounds.centerX;
      const py = (pointer.y - centerY) / scale + bounds.centerY;
      const step = dt * 60;
      for (const particle of particles) {
        if (motion.matches) {
          particle.x = particle.homeX;
          particle.y = particle.homeY;
          particle.vx = 0;
          particle.vy = 0;
        } else if (dt > 0) {
          const dx = particle.x - px;
          const dy = particle.y - py;
          const distance = Math.hypot(dx, dy);
          if (pointer.active && distance > 1 && distance < 75) {
            const force = (1 - distance / 75) * 1.7 * step;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
          particle.vx += (particle.homeX - particle.x) * 0.025 * step;
          particle.vy += (particle.homeY - particle.y) * 0.025 * step;
          particle.vx *= Math.pow(0.87, step);
          particle.vy *= Math.pow(0.87, step);
          particle.x += particle.vx * step;
          particle.y += particle.vy * step;
        }
        const breath = motion.matches
          ? 0
          : Math.sin(elapsed * 1.4 + particle.phase) * 1.2;
        context.beginPath();
        context.arc(
          centerX + (particle.x - bounds.centerX) * scale,
          centerY + (particle.y - bounds.centerY + breath) * scale,
          Math.max(0.8, 1.15 * scale),
          0,
          Math.PI * 2,
        );
        context.fillStyle = particle.isDot ? orange : ink;
        context.fill();
      }
    };

    const animate = (now: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden || motion.matches) return;
      const dt = previousTime
        ? Math.min((now - previousTime) / 1000, 0.032)
        : 1 / 60;
      previousTime = now;
      elapsed += dt;
      draw(dt);
      frame = requestAnimationFrame(animate);
    };
    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      draw();
      if (!disposed && visible && !document.hidden && !motion.matches)
        frame = requestAnimationFrame(animate);
    };
    const resize = () => {
      const rect = button.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      surface.width = Math.round(width * ratio);
      surface.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
      button.dataset.ready = 'true';
    };
    const move = (event: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };
    const leave = () => {
      pointer.active = false;
    };
    const scatter = () => {
      if (motion.matches) return;
      for (const particle of particles) {
        particle.vx += (Math.random() - 0.5) * 24;
        particle.vy += (Math.random() - 0.5) * 24;
      }
      pointer.active = false;
    };

    makeParticles();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(button);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    intersectionObserver.observe(button);
    button.addEventListener('pointermove', move, { passive: true });
    button.addEventListener('pointerleave', leave);
    button.addEventListener('pointercancel', leave);
    button.addEventListener('click', scatter);
    document.addEventListener('visibilitychange', syncAnimation);
    motion.addEventListener('change', syncAnimation);
    resize();
    document.fonts.ready.then(() => {
      if (disposed) return;
      makeParticles();
      syncAnimation();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      button.removeEventListener('pointermove', move);
      button.removeEventListener('pointerleave', leave);
      button.removeEventListener('pointercancel', leave);
      button.removeEventListener('click', scatter);
      document.removeEventListener('visibilitychange', syncAnimation);
      motion.removeEventListener('change', syncAnimation);
    };
  }, []);

  return (
    <div className="hero-monogram">
      <button
        ref={field}
        className="monogram-field"
        type="button"
        aria-label="B 모노그램 입자를 흩뜨리기. 마우스나 터치에 반응합니다."
      >
        <canvas ref={canvas} aria-hidden="true" />
        <span className="monogram-fallback serif" aria-hidden="true">
          B<span>.</span>
        </span>
      </button>
      <span className="monogram-hint mono" aria-hidden="true">
        <span className="monogram-pointer-hint">Move to explore / </span>Tap to
        scatter
      </span>
    </div>
  );
}
