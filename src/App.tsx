import "./App.css";
import Experience from "./components/Experience";
const profilePhoto = require("./images/alek.png");
const ntnu = require("./images/ntnu.png");

function App() {
  return (
    <div className="root">
      <div className="contact-info">
        <img src={profilePhoto} className="avatar" />
        <div className="name">Aleksander Halvorsen Holthe</div>
        <div className="links">
          <a href="https://github.com/AlekTheGuy" target={"blank"}>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/aleksander-halvorsen-h-69a713128/"
            target={"blank"}
          >
            Linkedin
          </a>
        </div>
      </div>
      <h2>Arbeidserfaring</h2>
      <div className="experience">
        <Experience
          img={
            "https://innlandetfylke.no/kunde/grafikk/innlandet-fylkeskommune.svg"
          }
          title={"IT-support lærling"}
          info={"2017-2019 I Gjøvik"}
        />
      </div>
      <h2>Utdannelse</h2>
      <div className="Education">
        <Experience
          img={ntnu}
          title={"Dataingeniør"}
          info={"2020-2023 I Trondheim"}
        />
      </div>
    </div>
  );
}

export default App;
