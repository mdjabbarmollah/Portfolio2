import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { profile } from "@/data/profile";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebook,
};

const socialLabels = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "Twitter",
  facebook: "Facebook",
};

export default function Contact() {
 
  const socials = Object.entries(profile.socials).filter(([, url]) => url);

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">Want to work together? Reach out through any channel below.</p>

        <div className="contact-grid">
          <a className="card contact-item" href={`mailto:${profile.email}`}>
            <FiMail />
            <strong>Email</strong>
            <span>{profile.email}</span>
          </a>

          <a className="card contact-item" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <FiPhone />
            <strong>Phone</strong>
            <span>{profile.phone}</span>
          </a>

          {profile.whatsapp && (
            <a
              className="card contact-item"
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <strong>WhatsApp</strong>
              <span>{profile.phone}</span>
            </a>
          )}
        </div>

        <div className="social-row">
          {socials.map(([key, url]) => {
            const Icon = socialIcons[key];
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label={socialLabels[key]}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
