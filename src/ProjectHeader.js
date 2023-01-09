import { Link } from "react-router-dom";
import { getProjects } from "../data";
import './scss/ProjectHeader.scss';

const ProjectHeader = ({ project }) => {

  // find project that matches current projectPath
  let projectsArray = getProjects();
  var currProject = projectsArray.find(element => element.path === project);

  return (
    <header id="project-header">
      <Link to="/" id="back-button">← back</Link>
      <div id="project-title">{currProject.name}</div>
    </header>
  )
}

export default ProjectHeader;
