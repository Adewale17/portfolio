import { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import SocialLinks from "./SocialLinks";
import HireMeCircle from "./HireMeCircle";
import { portfolio } from "../data/portfolio";

const roles = ["Full Stack Developer", "Programmer", "Web Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setRoleIndex((current) => (current + 1) % roles.length),
      2600,
    );
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero section-pad" id="top">
      <div className="hero-title" aria-label={portfolio.name}>
        <span>{portfolio.firstName}</span>
        <span className="circled-name">
          {portfolio.lastName}
          <svg
            viewBox="0 0 500 190"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse cx="250" cy="95" rx="240" ry="82" />
          </svg>
        </span>
      </div>
      <div className="hero-grid">
        <ProfileImage />
        <div className="hero-copy" data-reveal>
          <p className="availability">
            <span />
            {portfolio.availability}
          </p>
          <h2 aria-label={`I'm ${roles[roleIndex]}`}>
            I'm a{" "}
            <span
              className="changing-role"
              key={roles[roleIndex]}
              aria-hidden="true"
            >
              {roles[roleIndex]}
            </span>
          </h2>
          <p className="intro">{portfolio.introduction}</p>
          <SocialLinks />
          <HireMeCircle />
        </div>
      </div>
    </section>
  );
}
