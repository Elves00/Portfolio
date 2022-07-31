import "./header.css"

const Header = () => {

    return (
      <>
        <header className= "header">
        <h1>Some test stuff</h1>
        <ul className= "nav">
        <li> <a href="#skill">Home</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#skill">Project</a></li>
        <li><a href="#skill">Contact</a></li>
        </ul>

        </header>
      </>
    );
  };

  export default Header;