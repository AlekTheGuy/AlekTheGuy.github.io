import "./Experience.css";

interface ExperienceProps {
    img: string;
    title: string;
    info: string;
}

export default function Experience({img, title, info}: ExperienceProps) {
  return (
    <div className="card">
      <img
        src={img}
        className="img"
      />
      <div className="text">
        <div className="title">{title}</div>
        <div className="info">{info}</div>
      </div>
      <button className="btn">More Info</button>
    </div>
  );
}
