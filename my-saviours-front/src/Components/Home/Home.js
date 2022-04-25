import react, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Story from "../Story/Story";
// import Keysecret from "../../Keysecret";
import Traits from "../Traits/Traits";
import Roadmap from "../Roadmap/Roadmap";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import Faq from '../Faq/Faq';


function Home() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Story />
      <Traits/>
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;