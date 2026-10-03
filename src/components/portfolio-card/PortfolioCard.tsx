import type { Project } from '../../types/project'
import './PortfolioCard.css'

type PortfolioCardProps = {
    project: Project
}

function PortfolioCard({project}: PortfolioCardProps){
    return(
        <article className='portfolio-card'>
         <h3>{project.name}</h3>
         <p>{project.description}</p>

        </article>
    )
}

export default PortfolioCard