import {
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,         
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaBrain, FaDatabase, FaLock, FaRobot } from "react-icons/fa";
import { skillGroups } from "@/data/profile";

const icons = {
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,        
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  FaBrain,
  FaDatabase,
  FaLock,
  FaRobot,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">What I use to build and fix things.</p>

        <div className="card skills-card">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-row">
              <h3 className="skill-label">{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => {
                  const Icon = icons[item.icon];
                  return (
                    <span key={item.name} className="chip">
                      {Icon && <Icon style={{ color: item.color }} />}
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}