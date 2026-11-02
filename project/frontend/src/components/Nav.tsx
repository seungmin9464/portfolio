'use client';
import { useEffect, useRef, useState } from 'react';
const links = [{href:'#work',label:'Work'},{href:'#notes',label:'Notes'},{href:'#about',label:'About'}];
export default function Nav() {
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState('');
  const button=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive('#'+entry.target.id);},{rootMargin:'-15% 0px -50% 0px'});
    links.forEach(({href})=>{const el=document.querySelector(href);if(el)observer.observe(el)});
    return ()=>observer.disconnect();
  },[]);
  useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);button.current?.focus()}};window.addEventListener('keydown',close);return ()=>window.removeEventListener('keydown',close)},[open]);
  useEffect(()=>{const mq=matchMedia('(min-width: 761px)');const reset=()=>{if(mq.matches)setOpen(false)};mq.addEventListener('change',reset);return()=>mq.removeEventListener('change',reset)},[]);
  return <><button ref={button} className="menu-toggle mono" type="button" aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>Menu <span aria-hidden="true">{open?'−':'+'}</span></button><nav id="main-nav" className={'main-nav'+(open?' is-open':'')} aria-label="주요 메뉴">{links.map(({href,label})=><a key={href} href={href} aria-current={active===href?'location':undefined} onClick={()=>setOpen(false)}>{label}</a>)}<a className="resume-link" href="/resume.pdf" download onClick={()=>setOpen(false)}>Resume <span aria-hidden="true">↗</span><span className="sr-only"> 이력서 다운로드</span></a></nav></>;
}
