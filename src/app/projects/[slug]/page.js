import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";
export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container details-page">
      <Link href="/#work" className="back-link">
        <FiArrowLeft /> Back to Work
      </Link>

      <h1 className="section-title">{project.name}</h1>
      <p className="section-sub">{project.description}</p>

      {project.image && (
        <img className="details-img" src={project.image} alt={project.name} />
      )}

      <div className="stats">
        <div className="card stat">
          <span className="stat-num">{project.tech.length}</span>
          <span className="muted">Total Technology</span>
        </div>
        <div className="card stat">
          <span className="stat-num">{project.features.length}</span>
          <span className="muted">Key Features</span>
        </div>
      </div>

      <div className="btn-row">
        {project.liveLink && (
          <a
            className="btn btn-primary"
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            className="btn"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>

      <div className="details-grid">
        <div className="card panel">
          <h2>Technologies Used</h2>
          <div className="chips">
            {project.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="card panel">
          <h2>Key Features</h2>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="details-grid">
        <div className="card panel">
          <h2>Challenges</h2>
          <p className="muted">{project.challenges}</p>
        </div>

        <div className="card panel">
          <h2>Future Plans</h2>
          <p className="muted">{project.future}</p>
        </div>
      </div>
    </main>
  );
}
