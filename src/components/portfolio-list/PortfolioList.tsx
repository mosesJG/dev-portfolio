import { projects } from "../../data/projects"
import PortfolioCard from "../portfolio-card/PortfolioCard"


function PortfolioList( ){
  return (
    <section className="portfolio-list">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </section>
  )
}

export default PortfolioList