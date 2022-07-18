import "./App.css";
import Experience from "./components/Experience";
const profilePhoto = require("./images/alek.png");
const ntnu = require("./images/ntnu.png");
const lillehammer = require("./images/lillehammer.png");
const ofk = require("./images/ofk.png");

function App() {
  const description =
    "Jeg jobbet to år som lærling innen IT support på Gjøvik videregående skole. Etter avsluttet lærlingtid tok jeg fagbrev //WRITE MORE";

  return (
    <div className="root">
      <div className="personal-info">
        <img src={profilePhoto} className="avatar" />
        <div className="intro-text">
          Hei! mitt navn er
          <span className="highlighted-text"> Aleksander Halvorsen Holthe </span>
          og jeg går siste året på studiet
          <span className="highlighted-text"> dataingeniør </span> ved NTNU i
          Trondheim
        </div>
      </div>
      <div className="qualifications">
        <h2>Arbeidserfaring</h2>
        <div className="experience">
          <Experience
            img={ofk}
            title={"IT-support lærling"}
            info={"2017-2019 I Gjøvik VGS"}
            button={true}
            description={description}
          />
        </div>
        <h2>Utdanning</h2>
        <div className="education">
          <Experience
            img={ntnu}
            title={"Dataingeniør"}
            info={"2020-2023 I Trondheim"}
            button={false}
          />
          <Experience
            img={ntnu}
            title={"Forkurs for ingeniør- og sivilingeniørutdanning"}
            info={"2019-2020 I Trondheim"}
            button={false}
          />
          <Experience
            img={lillehammer}
            title={"IKT-servicefag"}
            info={"2016-2017 I Lillehammer"}
            button={false}
          />
          <Experience
            img={lillehammer}
            title={"Elektro og datateknologi"}
            info={"2015-2016 I Lillehammer"}
            button={false}
          />
        </div>
        <h2>Utmerkelser</h2>
        <div className="test-results">
          <Experience
            img={ofk}
            title={"Fagbrev IKT-servicefag"}
            info={"2019 | resultat: Bestått meget godt"}
            button={false}
          />
        </div>
        <h2>Prosjekter</h2>
        <h2>//TODO</h2>
      </div>
      <div className="footer">
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
        <footer>Made by Aleksander Halvorsen Holthe © 2022</footer>
      </div>
    </div>
  );
}

export default App;
