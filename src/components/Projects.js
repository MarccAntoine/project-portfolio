import styled from "styled-components";

import { projects } from "../content/projectsData";
import { useState } from "react";

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import {FaGithub, FaYoutube} from "react-icons/fa"


const Projects = ( {reference, isvisible} ) =>
{
    const [projectsIndex, setProjectsIndex] = useState(0);

    const nextProject = () =>
    {
        if (projectsIndex === projects.length - 1) {setProjectsIndex(0)}
        else {setProjectsIndex(projectsIndex + 1)}
    }

    const precedentProject = () =>
    {
        if (projectsIndex === 0) {setProjectsIndex(projects.length - 1)}
        else {setProjectsIndex(projectsIndex - 1)}
    }

    return (
    <Container ref={reference} isvisible={isvisible.toString()} id="projects">
        <ProjectsDiv>
            <div><ProjectsTitle>Projects</ProjectsTitle></div>
            <ProjectDiv key={projects[projectsIndex].id}>
                <ProjectName>{projects[projectsIndex].name}</ProjectName>
                <LinksDiv>
                    {projects[projectsIndex].git ? (
                            <a rel="noreferrer" target="_blank" href={projects[projectsIndex].git}><GithubIcon /></a>
                        ) : (<></>)}
                    {projects[projectsIndex].youtube ? (
                        <a rel="noreferrer" target="_blank" href={projects[projectsIndex].youtube}><YoutubeIcon /></a>
                    ) : (<></>)}
                </LinksDiv>
                <ProjectDesc>{projects[projectsIndex].description}</ProjectDesc>
                <ProjectImagesDiv>
                    <ProjectImageBack>
                        <ProjectImageMax><ImageProject src={projects[projectsIndex].srcImg1} alt={projects[projectsIndex].name}/></ProjectImageMax>
                        <ProjectImageSec><ImageProjectSec src={projects[projectsIndex].srcImg2} alt={projects[projectsIndex].name}/></ProjectImageSec>
                    </ProjectImageBack>
                </ProjectImagesDiv>
                <ArrowButtonNext onClick={nextProject}><NextArrow /></ArrowButtonNext>
                <ArrowButtonPrece onClick={precedentProject}><PreceArrow /></ArrowButtonPrece>
            </ProjectDiv>
        </ProjectsDiv>
    </Container>)
}

const Container = styled.div`
    margin-left: 30%;
    margin-top: 130px;
    padding-top: 40px;
    margin-left: 33%;
    width: 65%;
    position: relative;

    transition: all ease-out 0.25s;

    opacity: ${props => props.isvisible === "true" ?  "100%" : "40%"};

    @media only screen and (min-height: 1000px) {
        margin-top: 200px;
    }

    @media only screen and (min-height: 1200px) {
        margin-top: 250px;
    }

    @media only screen and (max-width: 800px) {
        padding-top: 170px;
        margin: 10px 18px 0px 0px;
        width: 100%;
    }
`

const ProjectsDiv = styled.div`
    background-color: transparent;
    width: 100%;
    padding: 50px 20px;
    border-radius: 55px;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    @media only screen and (max-width: 800px) {
        padding: 30px 20px;
        margin: 0 auto;
    }
`

const ProjectsTitle = styled.h2`
    font-size: 3rem;
    color: var(--contrast-color);
`

const ProjectName = styled.h3`
    margin: 40px 0px 20px 0px;
    color: var(--secondary-contrast);
    font-size: 2rem;

    @media only screen and (max-width: 600px) {
        font-size: 1.6rem;
        margin: 20px 0px 10px 0px;
    }

`

const ProjectDesc = styled.p`
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    color: var(--secondary-contrast);
    font-size: 1rem;
    line-height: 125%;

    @media only screen and (max-width: 600px) {
        padding-bottom: 10px;
    }
`

const ProjectImagesDiv = styled.div`
    background-color: transparent;
    width: 80%;
    aspect-ratio: 1.5;
    margin: 0 auto;
    border-radius: 15px;
    position: relative;

    display: flex;
    justify-content: center;
`

const ProjectImageBack = styled.div`
    padding: 1%;
    border-radius: 20px;
    background-color: transparent;

    height: 95%;
    aspect-ratio: 1.6;

    z-index: 5;
`

const ProjectImageMax = styled.div`
    overflow: hidden;
    border-radius: 15px;
    height: 100%;
    width: 65%;

    position: absolute;
    left: 5%;
    top: 30%;
`

const ProjectImageSec = styled.div`
    overflow: hidden;
    border-radius: 15px;
    height: 85%;
    width: 50%;
    position: absolute;
    left: 55%;
    top: 10%;
`

const ImageProject = styled.img`
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: auto;
    transition: all 1s ease;

    &:hover {
        transform: scale(1.1);
    }
`

const ImageProjectSec = styled.img`
    object-fit: cover;
    object-position: top;
    width: auto;
    height: 100%;
    transition: all 1s ease;

    &:hover {
        transform: scale(1.1);
    }
`

const ArrowButtonNext = styled.button`
    z-index: 6;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 8%;
    right: calc(38px - 5vw);
    transform: translate(0%, -50%);

    @media only screen and (min-width: 1000px) {
        right: calc(45px - 5vw);
    }

    @media only screen and (min-width: 1200px) {
        right: calc(56px - 5vw);
    }

    @media only screen and (max-width: 600px) {
        right: calc(20px - 5vw);
    }

    @media only screen and (max-width: 500px) {
        right: calc(12px - 5vw);
    }

    &:hover {
        cursor: pointer;
    }
`

const ArrowButtonPrece = styled.button`
    z-index: 6;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 8%;
    left: calc(38px - 5vw);
    transform: translate(0%, -50%);

    @media only screen and (min-width: 1000px) {
        left: calc(45px - 5vw);
    }

    @media only screen and (min-width: 1200px) {
        left: calc(56px - 5vw);
    }

    @media only screen and (max-width: 600px) {
        left: calc(20px - 5vw);
    }

    @media only screen and (max-width: 500px) {
        left: calc(12px - 5vw);
    }

    &:hover {
        cursor: pointer;
    }
`

const NextArrow = styled(IoIosArrowForward)`
    width: calc(8px + 4vw);
    height: auto;
    color: var(--secondary-contrast);
    opacity: 50%;
    transition: all ease 0.3s;

    ${ArrowButtonNext}:hover & {
        opacity: 75%;
        transform: scale(1.2);
    }
`

const PreceArrow = styled(IoIosArrowBack)`
    width: calc(8px + 4vw);
    height: auto;
    color: var(--secondary-contrast);
    opacity: 50%;
    transition: all ease 0.3s;

    ${ArrowButtonPrece}:hover & {
        opacity: 75%;
        transform: scale(1.2);
    }
`

const ProjectDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-width: 90%;

    @media only screen and (min-width: 1000px) {
        height: 750px;
    }

    @media only screen and (min-width: 1200px) {
        height: 800px;
    }

    @media only screen and (min-height: 1000px) {
        height: 950px;
    }

    @media only screen and (max-width: 999px) {
        height: 700px;
    }

    @media only screen and (max-width: 800px) {
        height: 700px;
    }

    @media only screen and (max-width: 600px) {
        height: 460px;
    }

    @media only screen and (max-width: 450px) {
        height: 400px;
    }
`

const LinksDiv = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const GithubIcon = styled(FaGithub)`
    height: 40px;
    width: auto;
    color: var(--secondary-contrast);

    &:hover {
        color: var(--second-green);
    }
`

const YoutubeIcon = styled(FaYoutube)`
    height: 40px;
    width: auto;
    color: var(--secondary-contrast);

    &:hover {
        color: var(--second-green);
    }
`

export default Projects;