'use client';
export default function Footer() {
  const email = 'seung9464@naver.com';
  const github = 'https://github.com/seungmin9464';
  return (
    <footer className="site-footer" id="contact">
      <div className="contact-heading">
        <h2 className="serif">
          Let’s build something
          <span className="footer-dot">.</span>
        </h2>
        <div className="contact-links mono">
          <span>email: {email}</span>
          <span>github: {github}</span>
          <a href="/resume.pdf" download>
            resume ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom mono">
        <span>© 2026 Seungmin Back</span>
        <span>Made with intention.</span>
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'instant'
                : 'smooth',
            })
          }
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
