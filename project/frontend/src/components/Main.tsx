'use client';

import { useEffect, useRef, useState } from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import IdeaSketch from './IdeaSketch';

type Project = { id: string; title: string; description: string; image: string; category: 'client' | 'personal'; stack: string; href?: string };
// Add only your actual projects here. Image paths may point to /public files.
const projects: Project[] = [];

function ProjectPlaceholder() {
  return <div className="project-placeholder"><span className="placeholder-index mono">Selected work / Image space</span><div className="placeholder-word serif" aria-hidden="true">A work<br/>in progress<span>.</span></div><p>실제 프로젝트 이미지를 준비하고 있습니다.</p><span className="placeholder-bottom mono">Your work, closer.</span></div>;
}

export default function Main() {
  const hero = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<'all' | 'client' | 'personal'>('all');
  const [limit, setLimit] = useState(6);
  const visible = projects.filter(project => filter === 'all' || project.category === filter);
  const featured = projects[0];
  useEffect(() => {
    const element = hero.current;
    if (!element) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      const distance = element.offsetHeight - innerHeight + 80;
      const progress = media.matches ? 0 : Math.min(1, Math.max(0, -element.getBoundingClientRect().top / Math.max(1, distance)));
      element.style.setProperty('--expand', String(progress));
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule); media.addEventListener('change', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); media.removeEventListener('change', schedule); };
  }, []);
  return <main id="main">
    <section ref={hero} className="hero-scroll" aria-labelledby="hero-title"><div className="hero-sticky">
      <h1 id="hero-title" className="hero-title serif">A closer<span className="title-space"> </span><br className="mobile-break"/>look.</h1>
      <div className="hero-intro"><p className="mono">Seungmin Back /<br/>Full-stack Developer</p><p>아이디어를 구조로,<br/>구조를 경험으로 만듭니다.</p><span className="hero-keywords mono">Code<br/>Systems<br/>Experiences</span></div>
      <div className="hero-window">{featured ? <img src={featured.image} alt={featured.title + ' 프로젝트 화면'} /> : <ProjectPlaceholder/>}<svg className="window-thread" aria-hidden="true"><rect x="1" y="1" width="99.7%" height="99.7%" pathLength="1"/></svg></div>
      <div className="hero-caption mono"><span>{featured ? featured.title : 'Selected work / Coming soon'}</span><span>Follow the orange thread</span></div>
      <a className="scroll-cue mono" href="#work">Scroll to follow the thread <FiArrowDown aria-hidden="true"/></a>
      <div className="hero-rule" aria-hidden="true"><span/></div>
    </div></section>
    <section className="work-section section-space" id="work" aria-labelledby="work-heading"><div className="section-heading"><div><p className="eyebrow mono">01 / A collection of work</p><h2 className="condensed" id="work-heading">Selected work</h2></div><p className="section-aside mono">Different perspectives.<br/>Same curiosity.</p></div>
      <div className="archive-intro"><p className="archive-kicker">만들어 온 경험을 모아두는 곳.</p><p className="archive-statement">이곳은 프로덕트의 궤적을 기록한<br className="desktop-break"/> <strong>프로젝트 아카이브</strong>입니다.</p><p className="archive-description">복잡한 요구사항 속에서 단단한 뼈대를 세우고,<br/>완성도와 디테일을 채워가며 가치를 빚어낸 시간.</p></div><div className="work-toolbar"><div className="filters" aria-label="프로젝트 분류">{(['all','client','personal'] as const).map(key => <button key={key} type="button" aria-pressed={filter === key} onClick={() => { setFilter(key); setLimit(6); }}>{key === 'all' ? 'All' : key === 'client' ? 'Client' : 'Personal'}</button>)}</div><span className="mono archive-count">{String(visible.length).padStart(2,'0')} projects</span></div>
      {visible.length ? <><div className="archive-grid">{visible.slice(0,limit).map(project => <article className="archive-card" key={project.id}><div className="archive-image"><img src={project.image} alt={project.title + ' 프로젝트 화면'} loading="lazy"/></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><span className="mono">{project.stack}</span></div>{project.href && <a className="text-link mono" href={project.href}>View project <FiArrowUpRight aria-hidden="true"/></a>}</article>)}</div>{limit < visible.length && <button className="load-more mono" type="button" onClick={() => setLimit(count => count + 6)}>Load more + ({visible.length - limit})</button>}</> : <div className="archive-empty"><span className="empty-symbol serif" aria-hidden="true">b<span>.</span></span><div><h3>Good work takes shape.</h3><p>{filter === 'all' ? '프로젝트를 정리하고 있습니다.' : filter === 'client' ? '실무 프로젝트를 정리하고 있습니다.' : '개인 프로젝트를 정리하고 있습니다.'}<br/>실제 작업물과 그 과정을 이곳에 담을 예정입니다.</p></div><span className="mono">Coming soon</span></div>}
      <IdeaSketch/>
    </section>
    <section className="about-section section-space" id="about" aria-labelledby="about-heading"><p className="eyebrow mono">02 / The person behind the work</p><div><h2 className="serif" id="about-heading">Built with care.<br/>From front to back.</h2><div className="about-copy"><p>안녕하세요. 풀스택 개발자 백승민입니다.</p><p>보이는 인터페이스와 보이지 않는 구조를 함께 고민합니다. 복잡한 요구사항을 정리하고, 작은 디테일을 다듬으며 더 나은 경험을 만들어갑니다.</p><a className="text-link mono" href="/resume.pdf" download>Get my resume <FiArrowUpRight aria-hidden="true"/></a></div></div></section>
    <section className="notes-section section-space" id="notes" aria-labelledby="notes-heading"><div className="section-heading"><div><p className="eyebrow mono">03 / Thoughts in the making</p><h2 className="serif" id="notes-heading">Behind<br className="mobile-break"/> the build.</h2></div><span className="section-aside mono">Notes /<br/>Ideas /<br/>Experiments</span></div><div className="notes-empty"><span className="mono">Notes coming soon</span><p>만들며 고민한 것들, 그리고 그 과정에서 배운 것들을 기록합니다.<br/>첫 번째 기록을 준비하고 있습니다.</p><span className="notes-period" aria-hidden="true">○</span></div></section>
  </main>;
}


