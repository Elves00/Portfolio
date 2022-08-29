import "./profile.css";
import LinkedIn from "../Images/LinkedIn.png";
import GitHub from "../Images/GitHubLight.png";
import Brecon from "../Images/Brecon.jpg"
const Profile = () => {
  return (
    <>
      <div id="profile" className="skill">
     
       <img className="headshot" alt="Headshot" src={Brecon}></img>
        <div className="profile">
          <h1>Brecon Rose</h1>
          <p>
            I’m looking for a role as a back-end developer with a focus on
            upskilling. I have a passion for coding, problem solving, and
            debugging. I love working in a team to find creative solutions to
            complex problems. The challenges of communicating, collaborating,
            and researching motivates me as a developer. I thrive when I can get
            stuck into a challenging problem where I can showcase and improve my
            skills.
          </p>
          <div className="container">
          <div>
            <a href="https://www.linkedin.com/feed/?trk=nav_logo">
              <button className="buttons">
                <img src={LinkedIn} alt="LinkedIn"></img>
              </button>
            </a>
          </div>
          <div>
            <a href="https://github.com/Elves00">
              <button className="buttons">
                <img src={GitHub} alt="GitHub"></img>
              </button>
            </a>
          </div>
        </div>
        </div>

        
      </div>
    </>
  );
};

export default Profile;
