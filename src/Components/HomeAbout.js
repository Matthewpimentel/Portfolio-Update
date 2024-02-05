import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { DiCss3, DiReact, DiNodejs, DiJavascript1 } from "react-icons/di";
import Image from "../Images/Matt.jpg";
import "./HomeAbout.css";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
const HomeAbout = forwardRef((props, ref) => {
  const homeRef = useRef();

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div className="home-about" ref={homeRef}>
      <div className="home-about-content-container">
        <div className="home-about-blurb">
          <h1>Software Developer 👋</h1>
          <p>
            Hi I'm Matthew Pimentel, A passionate developer based in Ontario,
            Canada&nbsp; 📍
          </p>
        </div>

        <div className="home-about-image">
          <img src={Image} alt="Matt" />
        </div>
      </div>
      <div className="home-about-tech">
        <div className="home-about-tech-spacer">
          <h2>Tech Stack</h2>
          <h2>|</h2>
        </div>
        <div className="icon-container">
          <div className="icon-holder">
            <AiFillHtml5 size={30} className="icon-html" />
          </div>
          <h2>HTML5</h2>
        </div>
        <div className="icon-container">
          <div className="icon-holder">
            <DiCss3 size={30} className="icon-css" />
          </div>
          <h2>CSS3</h2>
        </div>
        <div className="icon-container">
        <div className="icon-holder">
          <DiJavascript1 size={30} className="icon-js" />
        </div>
        <h2>JavaScript</h2>
        </div>
        <div className="icon-container">
        <div className="icon-holder">
          <DiReact size={30} className="icon-react" />
        </div>
        <h2>ReactJS</h2>
        </div>
        <div className="icon-container">
        <div className="icon-holder">
          <DiNodejs size={30} className="icon-node" />
        </div>
        <h2>NodeJS</h2>
        </div>
      </div>
    </div>
  );
});

export default HomeAbout;
