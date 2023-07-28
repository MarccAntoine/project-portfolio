import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import GlobalStyles from "./components/GlobalStyles";
import Foot from "./components/Foot";
import { useEffect, useRef, useState } from "react";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const divsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [visibleIndex, setVisibleIndex] = useState([0]);
  const [openedMenu, setOpenedMenu] = useState(false);

  const isElementInViewport = () =>
  {
    divsRef.forEach((ref, index) =>
    {
      if (ref.current)
      {
        const position = ref.current.getBoundingClientRect();
        const isVisible = (position.top < (window.innerHeight - 100) && position.bottom >= 100);
        if (isVisible && !visibleIndex.includes(index)) {setVisibleIndex(prevVisibleIndex => [...prevVisibleIndex, index])}
        if (!isVisible && visibleIndex.includes(index)) {setVisibleIndex(prevVisibleIndex => prevVisibleIndex.filter(itemIndex => itemIndex !== index))}
      }
    })
  }

  useEffect(() =>
  {
    let scrollTimeout;
    const checkElement = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
  
      scrollTimeout = setTimeout(() => {
        isElementInViewport();
      }, 32); 
    };

    document.addEventListener("scroll", checkElement)
    
    return () => {
      document.removeEventListener("scroll", checkElement)
    }
  }, [visibleIndex]) // eslint-disable-line

  return (
    <>
      <GlobalStyles darkMode={isDarkMode} openedMenu={openedMenu} />
      <Header openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} setDarkMode={setIsDarkMode} darkMode={isDarkMode} />
      <AboutMe reference={divsRef[0]} isvisible={visibleIndex.includes(0)}/>
      <Experience reference={divsRef[1]} isvisible={visibleIndex.includes(1)}/>
      <Projects reference={divsRef[2]} isvisible={visibleIndex.includes(2)}/>
      <ContactMe reference={divsRef[3]} isvisible={visibleIndex.includes(3)}/>
      <Foot />
    </>
  );
}

export default App;
