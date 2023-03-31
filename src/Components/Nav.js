import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = ({ refToProjects, refToHome, refToContact }) => {
  let windowY;
  window.addEventListener("scroll", () => {
    windowY = window.scrollY;

    if (windowY > 0) {
      const nav = document.querySelector(".nav");
      nav.classList.add("nav-scrolled");
    } else {
      const nav = document.querySelector(".nav");
      nav.classList.remove("nav-scrolled");
    }
  });

  const scrollToHome = () => {
    if (refToHome.current) {
      refToHome.current.scrollIntoView();
    }
  };

  const scrollToProjects = () => {
    if (refToProjects.current) {
      refToProjects.current.scrollIntoView(true);
    }
  };

  const scrollToContact = () => {
    if (refToContact.current) {
      refToContact.current.scrollIntoView(true);
    }
  };

  const showMenu = () => {

  }

  return (
      <div className="nav">
        <h2>Matthew.dev</h2>
        <a onClick={scrollToHome}>Home</a>
        <a onClick={scrollToProjects}>Projects</a>
        <a onClick={scrollToContact}>Contact</a>
      </div>
  );
};

export default Nav;
