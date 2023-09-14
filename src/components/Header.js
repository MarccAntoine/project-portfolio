import { useEffect, useState } from "react";

import i18next from 'i18next';

import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Header = ( {darkMode, setDarkMode, openedMenu, setOpenedMenu} ) =>
{
    const [selectedLanguage, setSelectedLanguage] = useState('En')

    useEffect(() =>
    {
        i18next.changeLanguage(selectedLanguage)
    }, [selectedLanguage])

    return (
    <>
        <DesktopNavBar openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} setDarkMode={setDarkMode} darkMode={darkMode} setSelectedLanguage={setSelectedLanguage} selectedLanguage={selectedLanguage}/>
        <MobileNavBar openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} setDarkMode={setDarkMode} darkMode={darkMode} setSelectedLanguage={setSelectedLanguage} selectedLanguage={selectedLanguage}/>
    </>)
}

export default Header;