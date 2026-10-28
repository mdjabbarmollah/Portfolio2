import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <p className="hero-tag">{profile.title}</p>

        <h1 className="hero-title">
          <span className="hero-name">{`Hi, I'm ${profile.name}.`}</span>
          <span className="hero-tagline">I build web apps and fix AI-generated code.</span>
        </h1>

        <p className="hero-intro">{profile.intro}</p>

        <div className="btn-row">
          <a className="btn btn-primary" href={profile.socials.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> View GitHub
          </a>
          <a className="btn" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> View LinkedIn
          </a>
          <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">
            <FiDownload /> Resume
          </a>
        </div>
      </div>

      <div className="photo-frame">
        <img src={profile.photo} alt={profile.name} className="hero-photo" />
      </div>
    </section>
  );
}