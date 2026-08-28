import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { portfolio, isUsableLink } from '../data/portfolio'
const navItems = [{ label:'About',href:'#about' },{ label:'Skills',href:'#skills' },{ label:'Projects',href:'#projects' },{ label:'GitHub',href:portfolio.github,external:true },{ label:'Resume',href:portfolio.resume,external:true }]
export default function Navbar({ theme, onToggleTheme }: { theme:'light'|'dark'; onToggleTheme:()=>void }) {
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>20);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[])
  return <header className={`navbar ${scrolled?'is-scrolled':''}`}><a className="wordmark" href="#top" aria-label="Back to top"><span>JM</span>{portfolio.brandName}</a><nav className={`nav-links ${open?'is-open':''}`} aria-label="Primary navigation">{navItems.map(item=>{const unavailable=item.label==='GitHub'&&!isUsableLink(item.href);return <a key={item.label} href={unavailable?'#contact':item.href} target={item.external&&!unavailable?'_blank':undefined} rel="noreferrer" onClick={()=>setOpen(false)}>{item.label}</a>})}</nav><div className="nav-actions"><ThemeToggle theme={theme} onToggle={onToggleTheme}/><a className="button button-small resume-button" href={portfolio.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={17}/></a><button className="icon-button menu-toggle" type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div></header>
}
