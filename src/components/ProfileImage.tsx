import { UserRound } from "lucide-react";
import { portfolio } from "../data/portfolio";
export default function ProfileImage() {
  return (
    <div className="portrait-wrap" data-reveal>
      <div className="portrait-placeholder">
        <UserRound size={60} />
        <span>Profile Pic</span>
      </div>
      <img
        src={portfolio.profileImage}
        alt={`${portfolio.name}, ${portfolio.role}`}
        onLoad={(event) => event.currentTarget.classList.add("is-loaded")}
      />
    </div>
  );
}
