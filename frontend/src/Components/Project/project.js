import "./project.css";
import Brecon from "../Images/Brecon.jpg";
import Plant from "../Images/Plant.PNG"
import Boid from "./boid";
const Project = () => {
  return (
    <>
      <div id="project">
        <h1>Projects</h1>

        <div className="container">
          <div className="project">
            <img src={Plant} alt="plant game" className="project-img"></img>
            <a href="https://github.com/Elves00/Plant-Game.git">
              <h1>Virtual Plant Game</h1>
              <p>
                University project with plants adding more text to the thingy
              </p>
            </a>
          </div>
          <div className="project">
            <img src={Brecon} alt="plant game" className="project-img"></img>
            <a href="https://github.com/Elves00/Ark_Software.git">
              <h1>Lost Ark</h1>
              <p>
                A forum website for the video game Lost Ark designed using the
                mern stack.
              </p>
            </a>
          </div>
          <div className="project">
            <img src={Brecon} alt="plant game" className="project-img"></img>

            <h1>CISE</h1>
            <p>For data anyalsis and part of my minor</p>
          </div>
          <div className="project">
            <div className="boid">
              <div className="boid-1">
              <Boid></Boid>
              </div>
              <div className="boid-2">
              <Boid></Boid>
              </div>
            </div>
            
          
            <a href="https://github.com/Elves00/Boid-Flock.git">
              <h1>Boid Flocks</h1>
              <p>used for this project and a few others</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
