import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { getProjects } from "./data";
import { isInViewport } from './functions';
import './scss/Nav.scss';

const Nav = () => {

  let projects = getProjects();

  useEffect(() => {
    // for cases where deeplinked to a specific project...
    const elem = document.querySelector('.active');
    // check if active project link in sidebar nav isn't in viewport
    if (elem && !isInViewport(elem)) {
      // scroll nav list so selected project is in view
      elem.scrollIntoView()
    }
  }, []);

  return (
    <>
    <nav id="projects">
      {projects.map(project => (
        <NavLink
          to={`/${project.path}`}
          key={project.path}
          className="nav-item"
        >
          <NavItem name={project.name} description={project.description} />
        </NavLink>
      ))}
    </nav>
    </>
  )
}

export default Nav;
