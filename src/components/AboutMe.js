import portrait from "../content/portrait.jpg"
import  styled  from "styled-components";

import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import { FaMapPin } from "react-icons/fa";

const AboutMe = () =>
{
    return (
    <Container id="myself">
        <ContentDiv>
            <ImgContainer><Portrait src={portrait}/></ImgContainer>
            <NameDiv><h3>Marc-Antoine Tremblay</h3></NameDiv>
            <div><h4>Full-stack web developper</h4></div>
            <LocationDiv><LocationIcon /><h4>Montreal, Quebec</h4></LocationDiv>
            <IconsDiv><a rel="noreferrer" target="_blank" href="https://github.com/MarccAntoine"><GithubIcon /></a><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/marc-antoine-tremblay/"><LinkedinIcon /></a></IconsDiv>
        </ContentDiv>
    </Container>
    )
}

const Container = styled.div`
    margin-left: 30%;
    padding-top: 180px;
    margin-right: 5%;
    width: 70%;
    position: relative;
`

const ContentDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ImgContainer = styled.div`
    width: 280px;
    height: 280px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0px 0px 5px -1px #f2f2f2;
`

const Portrait = styled.img`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
`

const NameDiv = styled.div`
    margin: 30px 0px;
`

const IconsDiv = styled.div`
    margin: 30px 0px;
`

const GithubIcon = styled(FaGithubSquare)`
    margin: 0 7px;
    height: 50px;
    width: 50px;
    color: var(--secondary-contrast);

    &:hover {
        color: var(--second-green);
    }
`

const LinkedinIcon = styled(FaLinkedin)`
    margin: 0 7px;
    height: 50px;
    width: 50px;
    color: var(--secondary-contrast);

    &:hover {
        color: var(--second-green);
    }
`

const LocationDiv = styled.div`
    display: flex;
    gap: 6px;
    margin-top: 30px;
`

const LocationIcon = styled(FaMapPin)`
    margin: 0 7px;
    height: 20px;
    width: 20px;
    color: var(--secondary-contrast);
`


export default AboutMe;