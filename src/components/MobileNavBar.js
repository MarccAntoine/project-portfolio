import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

import {SlMenu} from 'react-icons/sl'

import { NameDiv, Nameh1, SectionDiv, Sections, DarkDiv, DarkLabel, ModeButton, LangSelect, Dark, Light } from "./DesktopNavBar";

const MobileNavBar = ( {darkMode, setDarkMode, openedMenu, setOpenedMenu, setSelectedLanguage, selectedLanguage} ) =>
{
    const {t} = useTranslation()

    const scrollSelect = (selectId) =>
    {
        const element = document.querySelector(`#${selectId}`);
        element.scrollIntoView({behavior: "smooth", block: "start"});

        if (openedMenu) {setOpenedMenu(!openedMenu)}
    }


    return (
        <>
        <StyledHeader>
        <NameDiv><Nameh1>Marc-Antoine Tremblay</Nameh1></NameDiv>
            <MenuButton onClick={() => {setOpenedMenu(!openedMenu)}}><MenuIcon /></MenuButton>
            {openedMenu ? (
                <NavMenu openedmenu={openedMenu.toString()}>
                    <SectionDiv onClick={() => {scrollSelect("myself")}}><Sections>{t('aboutMenu')}</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("skills")}}><Sections>{t('expMenu')}</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("projects")}}><Sections>{t('projectMenu')}</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("contact")}}><Sections>{t('aboutMenu')}</Sections></SectionDiv>
                    <ButtonsDiv>
                        <LangMobileSelect onClick={() => setSelectedLanguage(selectedLanguage === 'En' ? ("Fr") : ("En"))}>{selectedLanguage === 'En' ? ("Fr") : ("En")}</LangMobileSelect>
                        {darkMode ? (<DarMobileDiv><DarkLabel>Light Mode</DarkLabel><ModeButton onClick={() => {setDarkMode(!darkMode)}}><Light /></ModeButton></DarMobileDiv>) : (<DarMobileDiv><DarkLabel>Dark Mode</DarkLabel><ModeButton onClick={() => {setDarkMode(!darkMode)}}><Dark /></ModeButton></DarMobileDiv>)}
                    </ButtonsDiv>
                </NavMenu>
            ) : (<></>)}
        </StyledHeader>
        </>
    )
}

const StyledHeader = styled.header`
    height: 19vh;
    width: 100vw;
    background-color: var(--background-color);
    z-index: 50;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;

    @media only screen and (min-width: 900px) {
        display: none;
    }
`

const NavMenu = styled.div`
    display: flex;

    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    position: absolute;
    top: 18vh;
    left: 0;

    height: 82vh;
    width: 100vw;

    z-index: 25;

    background-color: var(--background-color);

    @media only screen and (max-width: 500px) {
        padding-bottom: 40px;
    }
`

const MenuIcon = styled(SlMenu)`
    height: 50%;
    width: auto;

    color: var(--secondary-contrast);
    margin-right: 30px;
`

const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`

const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const DarMobileDiv = styled(DarkDiv)`
    @media only screen and (max-width: 900px) {
        display: inline;
        position: relative;
        top: 0px;
        right: 0px;
        height: 50px;
    }
`

const LangMobileSelect = styled(LangSelect)`
    @media only screen and (max-width: 900px) {
        display: inline;
        position: relative;
        top: 0px;
        right: 0px;
        height: 50px;
    }
`



export default MobileNavBar;