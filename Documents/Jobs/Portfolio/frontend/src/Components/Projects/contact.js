import "./contact.css";
import LinkedIn from "../Images/LinkedIn.png";
const Contact = () => {
  return (
    <>
      <contact id="contact" className="skill">
        <div className="container">
          <div>
            <a href="https://www.linkedin.com/feed/?trk=nav_logo">
              <button className="buttons">
                <img src={LinkedIn} alt="LinkedIn"></img>
              </button>
            </a>
          </div>
          <div>Linkden</div>
          <div>Git</div>
        </div>
      </contact>
    </>
  );
};

export default Contact;
