import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact, DiNodejs } from "react-icons/di";
import Image from "../Images/Matt.jpg"
import "./HomeAbout.css";
const HomeAbout = () => {


  return (
    <div className="home-about">
      <div className="home-about-content-container">
        <div className="home-about-blurb">
          <h1>Full-Stack Developer 👋</h1>
          <p>
            Hi im Matthew Pimentel, A passionate developer based in Ontario, Canada&nbsp; 📍
          </p>
        </div>

        <div className="home-about-image">
          <img src={Image} alt="Matt" />
        </div>
      </div>
      <div className="home-about-tech">
        <div className="home-about-tech-spacer">
          <h1>Tech Stack</h1>
          <h1>|</h1>
        </div>
        <AiFillHtml5 size={50} />
        <DiCss3 size={50} />
        <DiJavascript1 size={50} />
        <DiReact size={50} />
        <DiNodejs size={50} />
      </div>
    </div>
  );
};

export default HomeAbout;
