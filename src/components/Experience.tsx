import "./Experience.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface ExperienceProps {
  img: string;
  title: string;
  info: string;
  button: boolean;
  description?: string;
}

export default function Experience({
  img,
  title,
  info,
  button,
  description,
}: ExperienceProps) {
  const renderButton = () => {
    if (button) {
      return (
        <Popup trigger={<button className="btn"> Mer info </button>} modal>
          <div> {description} </div>
        </Popup>
      );
    }
  };

  return (
    <div className={button ? "experience-card" : "education-card"}>
      <div>
        <img src={img} className="img" />
      </div>
      <div className="text">
        <div className="title-info">
          <div className="title">{title}</div>
          <div className="info">{info}</div>
        </div>
        {renderButton()}
      </div>
    </div>
  );
}
