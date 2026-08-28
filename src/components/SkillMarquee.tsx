import SkillCard, { type Skill } from './SkillCard'

export default function SkillMarquee({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) {
  return <div className={`marquee ${reverse ? 'reverse' : ''}`}><div className="marquee-track">{[...items, ...items].map((skill, index) => <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />)}</div></div>
}
