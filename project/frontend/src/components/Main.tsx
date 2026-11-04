'use client';

import { useState, useSyncExternalStore } from 'react';
import { projects } from '@/data/projects';
import {
  FiArrowDown,
  FiArrowUpRight,
  FiArrowLeft,
  FiArrowRight,
} from 'react-icons/fi';
import IdeaSketch from './IdeaSketch';
import HeroMonogram from './HeroMonogram';
import SkillsRibbon from './SkillsRibbon';

function subscribeGridSize(update: () => void) {
  const queries = [
    matchMedia('(max-width: 500px)'),
    matchMedia('(max-width: 768px)'),
    matchMedia('(min-width: 1200px)'),
  ];
  queries.forEach((query) => query.addEventListener('change', update));
  return () =>
    queries.forEach((query) => query.removeEventListener('change', update));
}

function getGridPageSize() {
  if (matchMedia('(max-width: 500px)').matches) return 2;
  return matchMedia('(min-width: 1200px)').matches ? 8 : 6;
}

function getMobileProjects() {
  return matchMedia('(max-width: 768px)').matches;
}

export default function Main() {
  const [filter, setFilter] = useState<'all' | 'client' | 'personal'>('all');
  const pageSize = useSyncExternalStore(
    subscribeGridSize,
    getGridPageSize,
    () => 8,
  );
  const [page, setPage] = useState(0);
  const [mobileBatches, setMobileBatches] = useState(1);
  const mobile = useSyncExternalStore(
    subscribeGridSize,
    getMobileProjects,
    () => false,
  );
  const visible = projects.filter(
    (project) =>
      project.published !== false &&
      (filter === 'all' || project.category === filter),
  );
  const pageCount = Math.ceil(visible.length / pageSize);
  const currentPage = Math.min(page, Math.max(0, pageCount - 1));
  const start = currentPage * pageSize;
  const mobileCount = Math.min(visible.length, mobileBatches * pageSize);
  const shownProjects = mobile
    ? visible.slice(0, mobileCount)
    : visible.slice(start, start + pageSize);

  return (
    <main id="main">
      <section className="quiet-poster" aria-labelledby="hero-title">
        <div className="poster-meta mono">
          <span>Seungmin Back / Full-stack developer</span>
          <span>Code · Systems · Experiences</span>
        </div>
        <div className="poster-motion">
          <HeroMonogram />
        </div>
        <div className="poster-copy">
          <h1 id="hero-title" className="serif">
            Ideas into
            <br />
            experiences<span>.</span>
          </h1>
          <p>
            작은 생각에서 시작해
            <br />
            쓸모 있는 경험을 만듭니다.
          </p>
          <a className="poster-explore mono" href="#archive">
            A closer look <FiArrowDown aria-hidden="true" />
          </a>
        </div>
        <a id="archive" className="poster-archive" href="#archive">
          <span className="mono">Selected work / Archive</span>
          <span>프로젝트와 그 과정의 기록</span>
          <span className="mono">
            Explore the archive <FiArrowDown aria-hidden="true" />
          </span>
        </a>
      </section>
      <section
        className="work-section section-space"
        id="work"
        aria-labelledby="work-heading"
      >
        <div className="work-projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow mono">01 / A collection of work</p>
              <h2 className="condensed" id="work-heading">
                Selected work
              </h2>
            </div>
            <p className="section-aside mono">
              Different perspectives.
              <br />
              Same curiosity.
            </p>
          </div>
          <div className="archive-intro">
            <p className="archive-kicker">만들어 온 경험을 모아두는 곳.</p>
            <p className="archive-statement">
              이곳은 프로덕트의 궤적을 기록한
              <br className="desktop-break" />{' '}
              <strong>프로젝트 아카이브</strong>
              입니다.
            </p>
            <p className="archive-description">
              복잡한 요구사항 속에서 단단한 뼈대를 세우고,
              <br />
              완성도와 디테일을 채워가며 가치를 빚어낸 시간.
            </p>
          </div>
          <div className="work-toolbar">
            <div className="filters" aria-label="프로젝트 분류">
              {(['all', 'client', 'personal'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={filter === key}
                  onClick={() => {
                    setFilter(key);
                    setPage(0);
                    setMobileBatches(1);
                  }}
                >
                  {key === 'all'
                    ? 'All'
                    : key === 'client'
                      ? 'Client'
                      : 'Personal'}
                </button>
              ))}
            </div>
            <span className="mono archive-count">
              {String(visible.length).padStart(2, '0')} projects
            </span>
          </div>
          {visible.length ? (
            <>
              <div className="archive-grid">
                {shownProjects.map((project) => (
                  <article className="archive-item" key={project.id}>
                    <a
                      className="archive-card"
                      href={project.href}
                      target={project.href ? '_blank' : undefined}
                      rel={project.href ? 'noopener noreferrer' : undefined}
                    >
                      <svg
                        className="project-outline"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect x="1" y="1" pathLength="1" />
                      </svg>
                      {(project.status === 'in-progress' ||
                        project.category === 'client') && (
                        <div className="project-tags">
                          {project.status === 'in-progress' && (
                            <span className="project-status">제작 중</span>
                          )}
                          {project.category === 'client' && (
                            <>
                              <span className="project-status">Web</span>
                              <span className="project-status">Mobile</span>
                            </>
                          )}
                        </div>
                      )}
                      <div className="archive-image">
                        <img
                          src={project.image}
                          alt={project.title + ' 프로젝트 화면'}
                          loading="lazy"
                        />
                      </div>
                      <div className="project-info">
                        <div>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                        <span className="mono">{project.stack}</span>
                      </div>
                    </a>
                    {project.href && (
                      <button
                        className="text-link mono archive-project-button"
                        type="button"
                        aria-label={project.title + ' 프로젝트 새 탭으로 열기'}
                        onClick={() =>
                          window.open(
                            project.href,
                            '_blank',
                            'noopener,noreferrer',
                          )
                        }
                      >
                        View project <FiArrowUpRight aria-hidden="true" />
                      </button>
                    )}
                  </article>
                ))}
              </div>
              {mobile && (
                <div className="archive-more mono">
                  <span aria-live="polite">
                    {mobileCount} / {visible.length}
                  </span>
                  {mobileCount < visible.length && (
                    <button
                      type="button"
                      onClick={() => setMobileBatches((count) => count + 1)}
                    >
                      More <FiArrowDown aria-hidden="true" />
                    </button>
                  )}
                </div>
              )}
              {!mobile && pageCount > 1 && (
                <nav
                  className="archive-pagination mono"
                  aria-label="프로젝트 페이지"
                >
                  <button
                    type="button"
                    aria-label="이전 프로젝트 페이지"
                    disabled={currentPage === 0}
                    onClick={() => setPage(currentPage - 1)}
                  >
                    <FiArrowLeft aria-hidden="true" /> Previous
                  </button>
                  <span aria-live="polite" aria-atomic="true">
                    {String(currentPage + 1).padStart(2, '0')} /{' '}
                    {String(pageCount).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    aria-label="다음 프로젝트 페이지"
                    disabled={currentPage + 1 >= pageCount}
                    onClick={() => setPage(currentPage + 1)}
                  >
                    Next <FiArrowRight aria-hidden="true" />
                  </button>
                </nav>
              )}
            </>
          ) : (
            <div className="archive-empty">
              <div>
                <h3>Good work takes shape.</h3>
                <p>
                  {filter === 'all'
                    ? '프로젝트를 정리하고 있습니다.'
                    : filter === 'client'
                      ? '실무 프로젝트를 정리하고 있습니다.'
                      : '개인 프로젝트를 정리하고 있습니다.'}
                  <br />
                  실제 작업물과 그 과정을 이곳에 담을 예정입니다.
                </p>
              </div>
              <span className="mono">Coming soon</span>
            </div>
          )}
        </div>
        <IdeaSketch />
        <a
          id="about"
          className="poster-archive section-transition"
          href="#about"
        >
          <span className="mono">About / Behind the work</span>
          <span>생각을 경험으로 만드는 사람</span>
          <span className="mono">
            Discover my approach <FiArrowDown aria-hidden="true" />
          </span>
        </a>
      </section>
      <section
        className="about-section section-space"
        id="about-content"
        aria-labelledby="about-heading"
      >
        <p className="eyebrow mono">02 / The person behind the work</p>
        <div>
          <h2 className="serif" id="about-heading">
            <span>Built with care.</span>
            <span>From front to back.</span>
          </h2>
          <div className="about-copy">
            <p>안녕하세요. 풀스택 개발자 백승민입니다.</p>
            <p>
              기업과 브랜드, 병원, 온라인 스토어 등 다양한 웹사이트를 제작하고
              운영하며, 각 서비스에 맞는 화면과 인터랙션을 구현해 왔습니다.
              디자이너·개발자와 협업하면서 화면의 작은 디테일부터 실제 운영에
              필요한 기능까지 함께 고민했습니다.
            </p>
            <p>
              지금은 냉장고 속 재료로 한 끼를 찾는 서비스 ‘냉큼’을 직접 기획하고
              개발하고 있습니다. 주어진 화면을 구현하는 경험을 넘어, 일상의
              불편함을 발견하고 하나의 서비스로 만들어가는 중입니다.
            </p>
            <p>
              보기 좋은 화면과 사용하기 편한 흐름, 이를 뒷받침하는 구조를 함께
              고민하며 만듭니다.
            </p>
            <a className="text-link mono" href="/resume.pdf" download>
              Get my resume <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <SkillsRibbon />
      </section>
    </main>
  );
}
