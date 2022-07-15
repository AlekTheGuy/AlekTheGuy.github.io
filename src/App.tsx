import "./App.css";
import Experience from "./components/Experience";
const profilePhoto = require("./images/alek.png");

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
          title={"IT-support apprentice"}
          info={"2017-2019 in Gjøvik, Norway"}
        />
        <Experience
          img={
            "https://innlandetfylke.no/kunde/grafikk/innlandet-fylkeskommune.svg"
          }
          title={"IT-support apprentice"}
          info={"2017-2019 in Gjøvik, Norway"}
        />
        <Experience
          img={
            "https://innlandetfylke.no/kunde/grafikk/innlandet-fylkeskommune.svg"
          }
          title={"IT-support apprentice"}
          info={"2017-2019 in Gjøvik, Norway"}
        />
      </div>
      <h2>Utdannelse</h2>
      <h2>Prøveresultater</h2>
    </div>
  );
}

export default App;
