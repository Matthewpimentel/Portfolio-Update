import "./Projects.css";
import lilypad from "../Images/lilypadpaper.JPG";
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
      projectRef.current.scrollIntoView({ behavior: "smooth" });
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

  return (
    <div className="projects-container">
      <div className="projects-title" ref={projectRef}>
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
        </div>
      </div>
      <div className="project-info-right">
        <div className="projects-info-blurb">
          <h3>LilyPad Paper & Co</h3>
          <p>
            An E-commerce website which allows users to purchase items. The
            website has the ability to purchase items, ship items and store
            items in the cart.
          </p>
          <h3>
            React &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Node
          </h3>
        </div>
        <img src={lilypad}></img>
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
        </div>
      </div>
    </div>
  );
});

export default Project;
