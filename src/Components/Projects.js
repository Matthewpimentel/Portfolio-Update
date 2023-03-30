import "./Projects.css";
import lilypad from "../Images/lilypadpaper.JPG";
const Project = () => {
    return (
        <div className="projects-container">
            <div className="projects-title">
                <h3>PORTFOLIO</h3>
            </div>
            <div className="project-info">
                <img src={lilypad}></img>
                <div className="projects-info-blurb">
                    <h3>LilyPad Paper & Co</h3>
                    <p>An E-commerce website which allows users to purchase items. The website has the ability to purchase items, ship items and store items in the cart.</p>
                    <h3>React &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Node</h3>
                </div>
            </div>

        </div>
    )
}

export default Project;