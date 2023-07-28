import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import GlobalStyles from "./components/GlobalStyles";
import Foot from "./components/Foot";
import { useState } from "react";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <GlobalStyles darkMode={isDarkMode}/>
      <Header setDarkMode={setIsDarkMode} darkMode={isDarkMode} />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Foot />
    </>
  );
}

export default App;
