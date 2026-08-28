import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import { portfolio, isUsableLink } from '../data/portfolio'

export default function Contact() {
  const emailReady = portfolio.email && !portfolio.email.startsWith('YOUR_')
  return <section className="contact section-pad" id="contact"><div className="contact-inner" data-reveal><p className="kicker">Have something in mind?</p><h2>Let's build something <span>worth using.</span></h2><p>Have a project, collaboration or opportunity in mind? I'd love to hear about it.</p><div className="contact-actions"><a className={`button ${!emailReady ? 'is-disabled' : ''}`} href={emailReady ? `mailto:${portfolio.email}` : undefined}>Hire me <ArrowUpRight size={19} /></a><div className="contact-links"><a className={!emailReady ? 'is-disabled' : ''} href={emailReady ? `mailto:${portfolio.email}` : undefined}><Mail /> Email</a><a className={!isUsableLink(portfolio.github) ? 'is-disabled' : ''} href={isUsableLink(portfolio.github) ? portfolio.github : undefined} target="_blank" rel="noreferrer"><GitBranch /> GitHub</a><a className={!isUsableLink(portfolio.linkedin) ? 'is-disabled' : ''} href={isUsableLink(portfolio.linkedin) ? portfolio.linkedin : undefined} target="_blank" rel="noreferrer"><BriefcaseBusiness /> LinkedIn</a></div></div></div></section>
}
