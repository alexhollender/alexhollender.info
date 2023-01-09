import { Link, NavLink } from "react-router-dom";
import './scss/Header.scss';

const Header = ({ detail }) => {

  const scrollBackUp = () => {
    const projectNavElem = document.getElementById('project-nav');
    if (projectNavElem) {
      document.getElementById('project-nav').scrollIntoView();
    }
  }

  return (
    <header className={detail && "detail"}>

      <Link to="/" onClick={scrollBackUp}>Alex Hollender</Link>

      <div className="tagline">you win some,<br/>you lose some</div>

      <NavLink to="aboutme">about me</NavLink>

    </header>
  )
}

export default Header;
