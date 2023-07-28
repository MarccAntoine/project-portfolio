import styled from "styled-components";

import { projects } from "../content/projectsData";
import { useState } from "react";

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const Projects = () =>
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
    <Container id="projects">
        <ProjectsDiv>
            <div><ProjectsTitle>Projects</ProjectsTitle></div>
            <ProjectDiv key={projects[projectsIndex].id}>
                <ProjectName>{projects[projectsIndex].name}</ProjectName>
                <ProjectDesc>{projects[projectsIndex].description}</ProjectDesc>
                <ProjectImageDiv><img src={projects[projectsIndex].srcImg1} alt={projects[projectsIndex].name}/></ProjectImageDiv>
                <ArrowButtonNext onClick={nextProject}><NextArrow /></ArrowButtonNext>
                <ArrowButtonPrece onClick={precedentProject}><PreceArrow /></ArrowButtonPrece>
            </ProjectDiv>
        </ProjectsDiv>
    </Container>)
}

const Container = styled.div`
    margin-left: 30%;
    margin-top: 70px;
    padding-top: 100px;
    margin-left: 33%;
    width: 65%;
    position: relative;
`

const ProjectsDiv = styled.div`
    background-color: var(--second-blue);
    width: 95%;
    padding: 50px 20px;
    border-radius: 55px;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`

const ProjectsTitle = styled.h2`
    font-size: 45px;
    color: white;
`

const ProjectName = styled.h3`
    margin: 40px 0px 20px 0px;
    color: white;
`

const ProjectDesc = styled.p`
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20px;
    color: white;
`

const ProjectImageDiv = styled.div`
    width: 80%;
    aspect-ratio: 1.5;
    background-color: white;
    margin: 0 auto;
    border-radius: 15px;
`

const ArrowButtonNext = styled.button`
    z-index: 6;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 50%;
    right: calc(18px - 5vw);
    transform: translate(0%, -50%);

    @media only screen and (min-width: 1000px) {
        right: calc(25px - 5vw);
    }

    @media only screen and (min-width: 1200px) {
        right: calc(36px - 5vw);
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
    top: 50%;
    left: calc(18px - 5vw);
    transform: translate(0%, -50%);

    @media only screen and (min-width: 1000px) {
        left: calc(25px - 5vw);
    }

    @media only screen and (min-width: 1200px) {
        left: calc(36px - 5vw);
    }

    &:hover {
        cursor: pointer;
    }
`

const NextArrow = styled(IoIosArrowForward)`
    width: calc(30px + 5vw);
    height: auto;
    color: white;
    opacity: 70%;
    transition: all ease 0.3s;

    ${ArrowButtonNext}:hover & {
        opacity: 100%;
        transform: scale(1.2);
    }
`

const PreceArrow = styled(IoIosArrowBack)`
    width: calc(30px + 5vw);
    height: auto;
    color: white;
    opacity: 70%;
    transition: all ease 0.3s;

    ${ArrowButtonPrece}:hover & {
        opacity: 100%;
        transform: scale(1.2);
    }
`

const ProjectDiv = styled.div`
    position: relative;
`

export default Projects;