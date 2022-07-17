import "./Experience.css";

interface ExperienceProps {
  img: string;
  title: string;
  info: string;
  button: boolean;
}

export default function Experience({
  img,
  title,
  info,
  button,
}: ExperienceProps) {
  const renderButton = () => {
    if (button) {
      return <button className="btn">Mer info</button>;
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
