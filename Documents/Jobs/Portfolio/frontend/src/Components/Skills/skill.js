import "./skill.css";

const Skill = () => {
  return (
    <>
      <skill id="skill" >
        <h1>Technical skills</h1>
        <div className="container">
          <div className="skill">
            <h1>Java</h1>
            <p>2 years experince working on university projects</p>{" "}
          </div>
          <div className="skill">
            <h1>C++</h1>
            <p>working on a number of small scale things </p>
          </div>
          <div className="skill">
            <h1>Python</h1>
            <p>For data anyalsis and part of my minor</p>
          </div>
          <div className="skill">
            <h1>React</h1>
            <p>used for this project and a few others</p>
          </div>
        </div>
      </skill>
    </>
  );
};

export default Skill;
