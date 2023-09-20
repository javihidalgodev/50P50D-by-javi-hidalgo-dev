import './App.css'
import projectsData from './mocks/projects.json'

import ProjectCard from './components/project-card/ProjectCard'

function App () {
  return (
    <>
      <div className="main-title">
        <h1>50 projects</h1>
        <h1>50 days</h1>
      </div>
      <h4>by Javier Hidalgo</h4>

      <div className='projects-container'>
        {
          projectsData.map(project => {
            return <ProjectCard key={project.link} data={project} />
          })
        }
      </div>

      <footer>
        <p>Inspired by <a href="https://50projects50days.com/">50projects50days.com</a> by Brad Traversy</p>
      </footer>
    </>
  )
}

export default App
