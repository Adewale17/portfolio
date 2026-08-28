import { ArrowUpRight, Code2, Eye } from "lucide-react";
import { isUsableLink } from "../data/portfolio";

type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
};
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const link = (url: string, label: string, Icon: typeof Eye) =>
    isUsableLink(url) ? (
      <a href={url} target="_blank" rel="noreferrer">
        {label}
        <Icon size={16} />
        <ArrowUpRight size={15} />
      </a>
    ) : (
      <span
        className="project-link-disabled"
        title={`Add the ${label} URL in src/data/portfolio.js`}
      >
        {label}
        <Icon size={16} />
      </span>
    );
  return (
    <article className="project-card" data-reveal>
      <div className="project-image">
        <img
          src={project.image}
          alt={`Placeholder artwork for ${project.name}`}
        />
        <span>0{index + 1}</span>
      </div>
      <div className="project-body">
        <div className="project-topline">
          <p>Selected work</p>
          <span>Placeholder</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {link(project.liveUrl, "Live demo", Eye)}
          {link(project.sourceUrl, "Source code", Code2)}
        </div>
      </div>
    </article>
  );
}
