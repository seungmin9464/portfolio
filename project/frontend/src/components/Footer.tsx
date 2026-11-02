'use client';
export default function Footer(){
 const email=process.env.NEXT_PUBLIC_CONTACT_EMAIL;
 const github=process.env.NEXT_PUBLIC_GITHUB_URL;
 return <footer className="site-footer" id="contact"><div className="contact-heading"><h2 className="serif">Let’s build<br className="mobile-break"/> something<span className="footer-dot">.</span></h2><div className="contact-links mono">{email?<a href={'mailto:'+email}>Email ↗</a>:<span className="unconfigured">Email · 준비 중</span>}{github&&github.startsWith('https://')?<a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>:<span className="unconfigured">GitHub · 준비 중</span>}<a href="/resume.pdf" download>Resume ↗</a></div></div><div className="footer-bottom mono"><span>© 2026 Seungmin Back</span><span>Made with intention.</span><button type="button" onClick={()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>Back to top ↑</button></div></footer>
}


