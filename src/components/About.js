import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-text">
        <h2 className="section-title">About Me</h2>
        <h3>Background</h3>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
