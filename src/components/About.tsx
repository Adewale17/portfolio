import { ArrowDownRight, Braces, Layers3, ServerCog } from "lucide-react";
import { portfolio } from "../data/portfolio";
export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="section-label" data-reveal>
        <span>*ABOUT*</span>
        <i />
      </div>
      <div className="about-grid">
        <div data-reveal>
          <p className="kicker">How I approach the work</p>
          <h2>
            Building the whole experience, <span>not just the screen.</span>
          </h2>
        </div>
        <div className="about-copy" data-reveal>
          <p>{portfolio.about}</p>
          <a className="text-link" href="#contact">
            Start a conversation <ArrowDownRight size={18} />
          </a>
        </div>
      </div>
      <div className="principles" data-reveal>
        <div>
          <Braces />
          <span>01</span>
          <h3>Thoughtful interfaces</h3>
          <p>
            Clear, responsive experiences built around what people need to
            accomplish.
          </p>
        </div>
        <div>
          <ServerCog />
          <span>02</span>
          <h3>Reliable systems</h3>
          <p>
            Backend architecture and integrations designed for clarity, speed
            and growth.
          </p>
        </div>
        <div>
          <Layers3 />
          <span>03</span>
          <h3>End-to-end thinking</h3>
          <p>
            Every layer considered together, from the first interaction to the
            final API call.
          </p>
        </div>
      </div>
    </section>
  );
}
