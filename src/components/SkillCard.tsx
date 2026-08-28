import type { CSSProperties } from "react";

export type Skill = {
  name: string;
  icon: string;
  percentage: number;
  color: string;
};
export default function SkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const style = {
    "--skill-color": skill.color,
    "--skill-level": `${skill.percentage}%`,
    "--tilt": `${index % 2 ? 0.7 : -0.7}deg`,
  } as CSSProperties;
  return (
    <article className="skill-card" style={style}>
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-details">
        <div>
          <h3>{skill.name}</h3>
          <span>{skill.percentage}%</span>
        </div>
        <div
          className="skill-meter"
          aria-label={`Editable proficiency indicator: ${skill.percentage} percent`}
        >
          <i />
        </div>
      </div>
    </article>
  );
}
