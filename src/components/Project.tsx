import "./Project.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface ExperienceProps {
  title: string;
  description: string;
  technologies: string;
  info: string;
  sourcecode?: string;
}

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function Project({
  title,
  description,
  technologies,
  info,
  sourcecode,
}: ExperienceProps) {
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

        <Popup trigger={<button className="btn"> Mer info </button>} modal>
          <div> {description} </div>
        </Popup>
      </div>
    </div>
  );
}
