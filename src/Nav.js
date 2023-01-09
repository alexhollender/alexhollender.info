import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { getProjects } from "./data";
import './scss/Nav.scss';

const Nav = () => {

  let projects = getProjects();

  // when component mounts & updates
  useEffect(() => {
    // if deeplinked to a specific project
    // scroll nav list so selected project is in view
    const navListElem = document.getElementsByClassName('nav-item');
    for (const item of navListElem) {
      if (item.classList.contains('active')) {
          item.scrollIntoView()
      }
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
