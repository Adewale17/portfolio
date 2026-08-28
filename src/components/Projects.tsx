import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { portfolio, projects, isUsableLink } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="projects section-pad" id="projects">
      <div className="section-label" data-reveal>
        <span>*PROJECTS*</span>
        <i />
      </div>
      <div className="projects-heading" data-reveal>
        <div>
          <p className="kicker">Selected projects</p>
          <h2>
            Recent <span>Work</span>
          </h2>
          <p>
            A selection of projects I've designed, built and contributed to.
          </p>
        </div>
        {isUsableLink(portfolio.projectArchive) && (
          <a
            className="button button-outline"
            href={portfolio.projectArchive}
            target="_blank"
            rel="noreferrer"
          >
            View All Projects <ArrowUpRight size={18} />
          </a>
        )}
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.name} />
        ))}
      </div>
    </section>
  );
}
