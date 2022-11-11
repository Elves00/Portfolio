import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="header__navbar">
          <li className="header__navbar-item">
            <a href="#skill">Home</a>
          </li>
          <li className="header__navbar-item">
            <a href="#skill">Skills</a>
          </li>
          <li className="header__navbar-item">
            <a href="#skill">Project</a>
          </li>
          <li className="header__navbar-item">
            <a href="#skill">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
