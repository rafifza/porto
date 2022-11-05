import React from "react";
import "./App.css";
import { Header } from "./components/common";
import Profil from "./components/common/Profil/Profil";
import Skills from "./components/common/Skills/Skills";
import Project from "./components/common/Projects/Projects";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profil />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
