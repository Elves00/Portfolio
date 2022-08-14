import "./contact.css";
import LinkedIn from "../Images/LinkedIn.png";
import GitHub from "../Images/GitHubLight.png"
const Contact = () => {
  return (
    <>
      <div id="contact" className="skill">
        <div className="container">
          <div>
            <a href="https://www.linkedin.com/feed/?trk=nav_logo">
              <button className="buttons">
                <img src={LinkedIn} alt="LinkedIn"></img>
              </button>
            </a>
          </div>
          <div><a href="https://github.com/Elves00">
              <button className="buttons">
                <img src={GitHub} alt="GitHub"></img>
              </button>
            </a></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
