"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";

const FIRST_BATCH = 3;

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, FIRST_BATCH);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Projects I have built and shipped.</p>

        <div className="work-grid">
          {visibleProjects.map((project) => (
            <article key={project.slug} className="card project-card">
              <Link href={`/projects/${project.slug}`} className="card-main">
                <div className="card-img" style={{ background: "#0b0b0f" }}>
                  {project.image && <img
                    src={project.image}
                    alt={project.name}
                    style={{ objectFit: "contain" }}
                  />}
                </div>
                <div className="card-body">
                  <h3>{project.name}</h3>
                  <p className="muted">{project.summary}</p>
                </div>
              </Link>

              <div className="card-footer">
                {project.liveLink ? (
                  <a
                    className="link-btn"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                ) : (
                  <span />
                )}
                <Link href={`/projects/${project.slug}`} className="btn btn-small">
                  Details <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {projects.length > FIRST_BATCH && (
          <div className="center">
            <button type="button" className="btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? "See Less" : "See More"}
              {showAll ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}