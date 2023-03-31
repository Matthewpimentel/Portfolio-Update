import "./Projects.css";
import lilypad from "../Images/lilypadpaper.JPG";
import dealbuddy from "../Images/dealbuddy.JPG";
import pokedex from "../Images/pokedex.JPG";
import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const Project = forwardRef((props, ref) => {
  const projectRef = useRef();

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      projectRef.current.scrollIntoView({ behavior: "smooth"});

    },
  }));
  

  const [elements, setElements] = useState([]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        entry.target.classList.contains("project-info-left")
      ) {
        entry.target.classList.add("appear-left");
      } else {
        entry.target.classList.remove("appear-left");
      }

      if (
        entry.isIntersecting &&
        entry.target.classList.contains("project-info-right")
      ) {
        entry.target.classList.add("appear-right");
      } else {
        entry.target.classList.remove("appear-right");
      }
    });
  });


  useEffect(() => {
    setElements(document.querySelectorAll("[class^=project-info]"));
  }, []);

  elements.forEach((element) => {
    observer.observe(element);
  });

  const goToLink = (link) => {
    window.open(link, "_blank");
  }

  return (
    <div className="projects-container" ref={projectRef}>
      <div className="projects-title">
        <h3>PORTFOLIO</h3>
      </div>
      <div className="project-info-left">
        <img src={lilypad}></img>
        <div className="projects-info-blurb">
          <h3>LilyPad Paper & Co 📖</h3>
          <p>
            An E-commerce website which allows users to purchase items. The
            website has the ability to purchase items, ship items and store
            items in the cart.
          </p>
          <h3>
            React &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Node
          </h3>
          <div className="projects-links">
            <button onClick={() => goToLink("https://github.com/Matthewpimentel/lilypadpaper")}>Code</button>
            <button onClick={() => goToLink("https://www.lilypadpaper.ca/")}>Live Site</button>
          </div>
        </div>
      </div>
      <div className="project-info-right">
        <div className="projects-info-blurb">
          <h3>DealBuddy 🎮</h3>
          <p>
            A web application that allows users to see video game sales. Created a web scraper using puppeteer to scrape data from Humblebundle. Users can sign up and login to set alerts for games.
          </p>
          <h3>
            React &nbsp; &nbsp; &nbsp; &nbsp; Node &nbsp; &nbsp; &nbsp; &nbsp; noSQL
          </h3>
          <div className="projects-links">
            <button onClick={() => goToLink("https://github.com/Matthewpimentel/DealBuddy")}>Code</button>
            <button onClick={() => goToLink("https://www.dealbuddy.ca/")}>Live Site</button>
          </div>
        </div>
        <img src={dealbuddy}></img>
      </div>
      <div className="project-info-left">
        <img src={pokedex}></img>
        <div className="projects-info-blurb">
          <h3>LilyPad Paper & Co 📖</h3>
          <p>
            A web application that uses PokeAPI to display information about Pokemon and Items from the series.
          </p>
          <h3>
            React
          </h3>
          <div className="projects-links">
            <button onClick={() => goToLink("https://github.com/Matthewpimentel/Pokedex")}>Code</button>
            <button onClick={() => goToLink("https://eloquent-bohr-63da2d.netlify.app/")}>Live Site</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
