import "./Project.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface ExperienceProps {
  title: string;
  description: string;
  technologies: string;
  info: string;
  sourcecode?: string;
  demoButton?: Boolean;
  demoLink?: string;
}



export default function Project({
  title,
  description,
  technologies,
  info,
  sourcecode,
  demoButton,
  demoLink,
}: ExperienceProps) {

  const demo = () => {
    if (demoButton) {
      return (
        <a href={demoLink} target="_blank">
          <button
            className="btn"
            formAction="https://github.com/AlekTheGuy/BoCo"
          >
            Demo
          </button>
        </a>
      );
    }
  }


  return (
    <div className="project-card">
      <div className="title">{title}</div>
      <div className="info">{info}</div>
      <div className="technologies-text">teknologi: {technologies}</div>
      <div className="buttons">
        <a href={sourcecode} target="_blank">
          <button
            className="btn"
            formAction="https://github.com/AlekTheGuy/BoCo"
          >
            Kildekode
          </button>
        </a>

        <Popup trigger={<button className="btn"> Mer info </button>} modal contentStyle={{ width: '80%', maxWidth: "1000px" }}>
          <div> {description} </div>
        </Popup>

        {demo()}
      </div>
    </div>
  );
}
