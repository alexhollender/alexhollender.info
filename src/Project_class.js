import React from 'react';
import { useLocation } from "react-router-dom";
import { Link, useOutletContext } from "react-router-dom";
import { getProjects } from "./data";
import './scss/Project.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  // when component mounts create the image array
  componentDidMount() {
    console.log('hello project');
  }


  render() {
    // get current URL path from <Outlet /> context
    var location = useOutletContext();
    // remove "/" from beginning of URL path
    var path = location.substring(1);
    // array of all project data
    let projectsArray = getProjects();
    // find project that matches current path
    var currProject = projectsArray.find(element => element.path === path);
    // dynamically reference relevant project component
    const RenderDynamicProject = currProject.component;

    return (
      <>
      <Link to="/" id="closeProject"></Link>
      {/* renders project component based on URL path */}
      <div id="projectContainer" className={path}>
        <div id={path}>
          <RenderDynamicProject />
        </div>
      </div>
      </>
    );
  }
}

export default Project;
