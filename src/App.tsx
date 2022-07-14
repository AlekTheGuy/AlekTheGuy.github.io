import "./App.css";
import Experience from "./components/Experience";
const profilePhoto = require("./images/alek.png");

function App() {
  return (
    <div className="root">
      <div className="contact-info">
        <img src={profilePhoto} className="avatar" />
        <div className="name">Aleksander Halvorsen Holthe</div>
      </div>
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
  );
}

export default App;
