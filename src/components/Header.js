import styled from "styled-components";

import {MdDarkMode, MdLightMode} from 'react-icons/md'

const Header = ( {darkMode, setDarkMode} ) =>
{
    const toggleDarkMode = () =>
    {
        setDarkMode(!darkMode);
    }

    const scrollSelect = (selectId) =>
    {
        console.log(selectId);
        const element = document.querySelector(`#${selectId}`);
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
    <>
        <StyledHeader>
        <div><h1>Marc-Antoine Tremblay</h1></div>
            <Navbar>
                <SectionsTitles>
                    <Line></Line>
                    <SectionDiv onClick={() => {scrollSelect("myself")}}><Ball></Ball><Sections>About Me</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("skills")}}><Ball></Ball><Sections>Expertise</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("projects")}}><Ball></Ball><Sections>Projects</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("contact")}}><Ball></Ball><Sections>Contact Me</Sections></SectionDiv>
                </SectionsTitles>
            </Navbar>
        </StyledHeader>
        {darkMode ? (<DarkDiv><DarkLabel>Light Mode</DarkLabel><ModeButton onClick={() => {toggleDarkMode()}}><Light /></ModeButton></DarkDiv>) : (<DarkDiv><DarkLabel>Dark Mode</DarkLabel><ModeButton onClick={() => {toggleDarkMode()}}><Dark /></ModeButton></DarkDiv>)}
    </>)
}

const SectionDiv = styled.button`
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
`

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
`

const SectionsTitles = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    gap: 20%;
`

const Sections = styled.div`
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

const ModeButton = styled.button`
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 40px;
    aspect-ratio: 1;
    border: 1px solid black;
    position: relative;
    z-index: 5;

    &:hover {
        cursor: pointer;
    }
`

const Dark = styled(MdDarkMode)`
    height: 30px;
    width: auto;
    color: var(--secondary-contrast);
`

const Light = styled(MdLightMode)`
    height: 30px;
    width: auto;
    color: var(--secondary-contrast);
`

const DarkDiv = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 9;
`

const DarkLabel = styled.label`
    z-index: -1;
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
`

export default Header;