
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div id = "home">
        <ul className="nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
