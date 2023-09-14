import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

import {MdDarkMode, MdLightMode} from 'react-icons/md'

const DesktopNavBar = ( {darkMode, setDarkMode, openedMenu, setOpenedMenu, setSelectedLanguage, selectedLanguage} ) =>
{
    const {t} = useTranslation();

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
                    <Navbar>
                        <Line />
                        <SectionsTitles>
                            <SectionDiv onClick={() => {scrollSelect("myself")}}><Ball></Ball><Sections>{t('aboutMenu')}</Sections></SectionDiv>
                            <SectionDiv onClick={() => {scrollSelect("skills")}}><Ball></Ball><Sections>{t('expMenu')}</Sections></SectionDiv>
                            <SectionDiv onClick={() => {scrollSelect("projects")}}><Ball></Ball><Sections>{t('projectMenu')}</Sections></SectionDiv>
                            <SectionDiv onClick={() => {scrollSelect("contact")}}><Ball></Ball><Sections>{t('contactMenu')}</Sections></SectionDiv>
                        </SectionsTitles>
                    </Navbar>
            </StyledHeader>
            <LangSelect onClick={() => setSelectedLanguage(selectedLanguage === 'En' ? ("Fr") : ("En"))}>{selectedLanguage === 'En' ? ("Fr") : ("En")}</LangSelect>
            {darkMode ? (<DarkDiv><DarkLabel>{t('light')}</DarkLabel><ModeButton onClick={() => {setDarkMode(!darkMode)}}><Light /></ModeButton></DarkDiv>) : (<DarkDiv><DarkLabel>{t('dark')}</DarkLabel><ModeButton onClick={() => {setDarkMode(!darkMode)}}><Dark /></ModeButton></DarkDiv>)}
        </>
    )
}

const StyledHeader = styled.header`
    padding: 40px 0px 0px 40px;
    height: 100vh;
    width: 30%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`

export const NameDiv = styled.div`
    @media only screen and (max-width: 800px) {
        height: fit-content;
        width: 60%;
        margin-left: 25px;
    }
`

export const Nameh1 = styled.h1`
    font-size: 3rem;
`

export const SectionDiv = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    gap: 30px;
    padding: 0;
    margin: 0;

    &:hover {
        cursor: pointer;
        position: relative;
    }
`

const Navbar = styled.nav`
    display: flex;
    gap: 30px;
    opacity: 25%;
    transition: all ease-in-out 0.5s;

    &:hover {
        opacity: 100%;
        filter: none;
    }

    @media only screen and (max-width: 800px) {
        display: none;
    }
`

const SectionsTitles = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    gap: 20%;
`

export const Sections = styled.div`
    max-height: 30px;
    background-color: none;
    border: none;
    font-size: 25px;
    font-weight: 900;
    font-family: var(--main-font);
    text-align: left;
    padding: 0;
    margin: 0;
    transition: all ease 0.5s;
    overflow: visible;
    white-space: nowrap;
    color: var(--contrast-color);

    ${SectionDiv}:hover & {
        transform: translate(0%, -15%);
        font-weight: 900;
        font-family: var(--second-font);
        font-size: 37px;
    }
`

const Ball = styled.div`
    background-color: var(--contrast-color);
    border: none;
    border-radius: 50%;
    height: 27px;
    width: 27px;
    transition: all ease-in-out 0.3s;

    ${SectionDiv}:hover & {
        transform: scale(1.3);
    }
`

const Line = styled.div`
    background-color: var(--contrast-color);
    width: 3px;
    height: 60vh;
    position: absolute;
    bottom: 0;
    left: 51.5px;
`

export const ModeButton = styled.button`
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 40px;
    aspect-ratio: 1;
    border: 1px solid var(--secondary-contrast);
    position: relative;
    z-index: 5;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 900px) {
        height: 50px;
    }
`

export const Dark = styled(MdDarkMode)`
    height: 30px;
    width: auto;
    color: var(--secondary-contrast);
`

export const Light = styled(MdLightMode)`
    height: 30px;
    width: auto;
    color: var(--secondary-contrast);
`

export const DarkDiv = styled.div`
    position: fixed;
    top: 10px;
    right: 60px;
    z-index: 9;
    width: fit-content;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`

export const DarkLabel = styled.label`
    z-index: 5;
    position: absolute;
    left: -120px;
    display: none;
    width: 150px;
    height: 40px;
    background-color: var(--secondary-contrast);
    border-radius: 10px;
    color: var(--dark-mode-button);
    padding: 12px;

    font-size: 17px;
    font-family: var(--main-font);

    ${DarkDiv}:hover & {
        display: inline;
    }

    @media only screen and (max-width: 900px) {
        visibility: hidden;
    }
`

export const LangSelect = styled.button`
    position: fixed;
    top: 10px;
    right: 10px;
    height: 40px;
    z-index: 4;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid var(--secondary-contrast);
    color: var(--secondary-contrast);

    font-weight: bold;
    font-size: 1.5rem;
    font-family: var(--second-font);

    background-color: transparent;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 900px) {
        display: none;
    }
`

export default DesktopNavBar;