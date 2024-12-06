import "./App.css";
import Experience from "./components/Experience";
import Project from "./components/Project";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const profilePhoto = require("./images/alek.png");
const ntnu = require("./images/ntnu.png");
const lillehammer = require("./images/lillehammer.png");
const ofk = require("./images/ofk.png");

function App() {
  const description =
    `Jeg jobbet to år som lærling innen IT support på Gjøvik videregående skole. 
   Som lærling jobbet jeg hovedsaklig med feilsøking av teknisk utstyr (datamaskiner, skjermer, smartboard, osv) 
   samt drift av skolens lokale systemer, f.eks endring på subnets, undersøking av  rettigheter, vedlikehold på virtualiserte systemer og dokumentering på lokal wiki. \n
   Etter avsluttet lærlingtid tok jeg fagbrev med resultat meget godt bestått. Fagprøven bestod av å sette opp et lokalt nettverk med DHCP, Active directory med rettigheter, filserver, osv.
   `;

  return (
    <div className="root">
      <div className="personal-info">
        <img src={profilePhoto} className="avatar" />
        <div className="intro-text">
          Hei! Mitt navn er
          <span className="highlighted-text">
            {" "}
            Aleksander Halvorsen Holthe{" "}
          </span>
          og jeg går siste året på studiet
          <span className="highlighted-text"> dataingeniør </span> ved NTNU i
          Trondheim
        </div>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/aleksander-halvorsen-h-69a713128/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin size={45} color={"black"} />
          </a>

          <a
            href="https://github.com/AlekTheGuy/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub size={45} color={"black"} />
          </a>

          <a
            href="mailto:alekhh123@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiMail size={45} color={"black"} />
          </a>
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
            className={"experience-card"}
          />
        </div>
        <h2>Utdanning</h2>
        <div className="education">
          <Experience
            img={ntnu}
            title={"Dataingeniør"}
            info={"2020-2023 I Trondheim"}
            button={false}
            className={"education-card"}
          />
          <Experience
            img={ntnu}
            title={"Forkurs for ingeniør- og sivilingeniørutdanning"}
            info={"2019-2020 I Trondheim"}
            button={false}
            className={"education-card"}
          />
          <Experience
            img={lillehammer}
            title={"IKT-servicefag"}
            info={"2016-2017 I Lillehammer"}
            button={false}
            className={"education-card"}
          />
          <Experience
            img={lillehammer}
            title={"Elektro og datateknologi"}
            info={"2015-2016 I Lillehammer"}
            button={false}
            className={"education-card"}
          />
        </div>
        <h2>Utmerkelser</h2>
        <div className="test-results">
          <Experience
            img={ofk}
            title={"Fagbrev IKT-servicefag"}
            info={"2019 | resultat: Bestått meget godt"}
            button={false}
            className={"education-card"}
          />
        </div>
        <h2>Prosjekter</h2>
        <div className="projects">
          <Project
            title="BoCo - Borrow community"
            info="Laget ved hjelp av scrum i team på 10 personer"
            description="Dette prosjektet gikk over 3 uker som et eget fag i 4. semester. Vi brukte scrum og hadde daglige stand-up møter. Vi hadde også en produkteier
            som vi kommuniserte med for å få de nøyaktige kravene til oppgaven. Jeg jobbet i dette prosjektet med backend, jeg tegnet opp databasen og jobbet med 
            service og kontroller klasser i spring boot. Jeg lærte utrolig mye av dette prosjektet da vi for første gang hadde et stort prosjekt uten noen andre fag å bry oss om."
            technologies="Java, Spring Boot, Docker, javascript, Vue, PostgreSQL"
            sourcecode="https://github.com/AlekTheGuy/BoCo"
          />
          <Project
            title="Portfolio"
            info="Dette er siden du er på nå! Laget for å lære react og typescript, samt å bli bedre til å lage GUI som fungerer på alle enheter"
            description="Nettsiden er laget med inspirasjon fra en lang liste andre portfolio nettsider jeg fant via github. Den er laget i vanlig react med typescript uten GUI bibliotek eller template.
            Nettsiden er laget for å dynamisk tilpasse seg og være brukelig på alle vanlige enheter."
            technologies="React, Typescript, CSS, HTML"
            sourcecode="https://github.com/AlekTheGuy/alektheguy.github.io"
          />
          <Project
            title="C++ online kompilator"
            info="En nettside som kjører c++ kode i docker og skriver ut resultat fra terminalen"
            description="Nettsiden sender c++ koden som API kall til spring boot. Spring boot lager en gcc docker container som kjører den innsendte koden.
            GCC containeren sin terminal blir så sendt tilbake til nettsiden. For å kjøre må man ha installert docker og lastet ned GCC container. 
            Den kan også bare kjøres på UNIX basert operativsystem."
            technologies="Java, Spring boot, Docker, HTML, CSS"
            sourcecode="https://github.com/AlekTheGuy/IDATT2104-NetworkProgramming/tree/main/P5"
          />
          <Project
            title="Investeringskalkulator"
            info="En lett investeringskalkulator med chart.js graf"
            description="Jeg laget denne investeringskalkulatoren for eget bruk. Jeg hadde allerede laget porteføljenettsiden med vanlig react, så jeg ville prøve å bruke material design denne gangen(noe jeg ikke var så stor fan av i forhold til å designe selv(kanskje jeg bare er dårlig på material design)).
            Jeg er veldig glad i data og grafer, så jeg lærte meg chartjs. Jeg er fortsatt ikke ferdig da jeg må finne ut hvorfor alt av teknisk utstyr smelter når jeg implementerer en stacked bar chart.
            Når jeg har tid skal jeg også legge til automatisk kalkulering for det norske skattesystemet."
            technologies="React, Typescript, Material design, Chart.JS, HTML, CSS"
            sourcecode="https://github.com/AlekTheGuy/IDATT2104-NetworkProgramming/tree/main/P5"
            demoButton={true}
            demoLink="https://alekholthe.no/investment-calculator/"
          />
        </div>
      </div>
      <div className="footer">
        <footer>Made by Aleksander Halvorsen Holthe © 2022</footer>
      </div>
    </div>
  );
}

export default App;
