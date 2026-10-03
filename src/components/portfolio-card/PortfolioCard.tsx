import type { Project } from '../../types/project'
import './PortfolioCard.css'

type PortfolioCardProps = {
  project: Project
}

function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <article className="portfolio-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <ul className="portfolio-card__tech">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="portfolio-card__links">
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          Code
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </article>
  )
}

export default PortfolioCard
