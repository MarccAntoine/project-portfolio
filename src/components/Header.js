import styled from "styled-components";

import {MdDarkMode, MdLightMode} from 'react-icons/md'
import {SlMenu} from 'react-icons/sl'
import { useEffect, useState } from "react";

const Header = ( {darkMode, setDarkMode, openedMenu, setOpenedMenu} ) =>
{
    const [isMobile, setIsMobile] = useState(false);

    const showMenu = () =>
    {
        setOpenedMenu(!openedMenu)
    }

    useEffect(() =>
    {
        const windowSize = window.matchMedia('(max-width: 800px)');

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
            setOpenedMenu(false)
        };

        windowSize.addListener(handleMediaQueryChange);
    
        handleMediaQueryChange(windowSize);
    
        return () => {
            windowSize.removeListener(handleMediaQueryChange);
        };
    }, []) // eslint-disable-line

    const toggleDarkMode = () =>
    {
        setDarkMode(!darkMode);
    }

    const scrollSelect = (selectId) =>
    {
        const element = document.querySelector(`#${selectId}`);
        element.scrollIntoView({behavior: "smooth", block: "start"});

        if (openedMenu) {showMenu()}
    }

    return (
    <>
        <StyledHeader>
        <NameDiv><Nameh1>Marc-Antoine Tremblay</Nameh1></NameDiv>
            <Navbar>
                <SectionsTitles>
                    {isMobile? (<></>) : (<Line></Line>)}
                    <SectionDiv onClick={() => {scrollSelect("myself")}}><Ball></Ball><Sections>About Me</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("skills")}}><Ball></Ball><Sections>Expertise</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("projects")}}><Ball></Ball><Sections>Projects</Sections></SectionDiv>
                    <SectionDiv onClick={() => {scrollSelect("contact")}}><Ball></Ball><Sections>Contact Me</Sections></SectionDiv>
                </SectionsTitles>
            </Navbar>
            {isMobile ? (
                <>
                    <MenuButton onClick={showMenu}><MenuIcon /></MenuButton>
                    <NavMenu openedmenu={openedMenu.toString()}>
                        <SectionDiv onClick={() => {scrollSelect("myself")}}><Sections>About Me</Sections></SectionDiv>
                        <SectionDiv onClick={() => {scrollSelect("skills")}}><Sections>Expertise</Sections></SectionDiv>
                        <SectionDiv onClick={() => {scrollSelect("projects")}}><Sections>Projects</Sections></SectionDiv>
                        <SectionDiv onClick={() => {scrollSelect("contact")}}><Sections>Contact Me</Sections></SectionDiv>
                        {darkMode ? (<DarkDiv><DarkLabel>Light Mode</DarkLabel><ModeButton onClick={() => {toggleDarkMode()}}><Light /></ModeButton></DarkDiv>) : (<DarkDiv><DarkLabel>Dark Mode</DarkLabel><ModeButton onClick={() => {toggleDarkMode()}}><Dark /></ModeButton></DarkDiv>)}
                    </NavMenu>
                </>
            ) : (<></>)}
        </StyledHeader>
        {isMobile ? (<></>) : (<>{darkMode ? (<DarkDiv><DarkLabel>Light Mode</DarkLabel><ModeButton onClick={() => {toggleDarkMode()}}><Light /></ModeButton></DarkDiv>) : (<DarkDiv><DarkLabel>Dark Mode</DarkLabel><ModeButton onClick={() => {toggleDarkMode()}}><Dark /></ModeButton></DarkDiv>)}</>)}
    </>)
}

const NavMenu = styled.div`
    display: ${props => props.openedmenu === "true" ?  "flex" : "none"};

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

    overflow: scroll;
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

const NameDiv = styled.div`
    @media only screen and (max-width: 800px) {
        height: fit-content;
        width: 60%;
        margin-left: 25px;
    }
`

const Nameh1 = styled.h1`
    @media only screen and (max-width: 500px) {
        font-size: 30px;
    }
`

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

    @media only screen and (max-width: 800px) {
        display: none;
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

    @media only screen and (max-width: 800px) {
        height: 19vh;
        width: 100vw;
        background-color: var(--background-color);
        z-index: 50;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
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
    height: 45px;
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

    @media only screen and (max-width: 800px) {
        position: relative;
        z-index: 51;
    }
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