import SkillMarquee from './SkillMarquee'
import { skills } from '../data/portfolio'

export default function Skills() {
  const split = Math.ceil(skills.length / 2)
  return <section className="skills section-pad" id="skills"><div className="section-label" data-reveal><span>*SKILLS*</span><i /></div><div className="section-heading centered" data-reveal><p className="kicker">The tools behind the work</p><h2>A versatile stack for <span>complete products.</span></h2><p>Percentages are editable self-described indicators, not objective measurements.</p></div><div className="marquee-stack" data-reveal><SkillMarquee items={skills.slice(0, split)} /><SkillMarquee items={skills.slice(split)} reverse /></div></section>
}
