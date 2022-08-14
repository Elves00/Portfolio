
import Header from "./Components/Header/header";
import Skill from "./Components/Skills/skill";
import Project from "./Components/Project/project";
import Contact from "./Components/Contacts/contact";
import Footer from "./Components/Footer/footer";
import "./App.css";
function App() {
  return (
  <div className="app">
    <Header/>
    <Contact/>
    <Skill/>
    <Project/>
   
    <Footer/>
    </div>
  );
}

export default App;
