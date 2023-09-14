import portrait from "../content/portrait.jpg"
import  styled  from "styled-components";
import { useTranslation } from 'react-i18next';

import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import { FaMapPin } from "react-icons/fa";

const AboutMe = ( {reference, isvisible} ) =>
{
    const {t} = useTranslation()
    return (
    <Container ref={reference} id="myself" isvisible={isvisible.toString()}>
        <ContentDiv>
            <ImgContainer><Portrait src={portrait}/></ImgContainer>
            <NameDiv><h3>Marc-Antoine Tremblay</h3></NameDiv>
            <RoleName><h4>{t('role')}</h4></RoleName>
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
    transition: all ease-out 0.25s;

    @media only screen and (max-width: 800px) {
        margin: 0px 15px 0px 15px;
        width: 90%;
        padding-top: 360px;
    }

    @media only screen and (max-width: 500px) {
        margin: 0px 15px 0px 15px;
        width: 90%;
        padding-top: 260px;
    }

    @media only screen and (max-width: 500px) {
        margin: 0px 15px 0px 15px;
        width: 90%;
        padding-top: 200px;
    }

    opacity: ${props => props.isvisible === "true" ?  "100%" : "40%"};
`

const RoleName = styled.div`
    text-align: center;
    width: 100%;

    h4 {
        font-size: 1.6rem;
    }
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

    @media only screen and (max-width: 800px) {
        width: 220px;
        height: 220px;
    }
`

const Portrait = styled.img`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
`

const NameDiv = styled.div`
    margin: 30px 0px;
    width: 100%;
    text-align: center;

    h3 {
        font-size: 2rem;
    }
`

const IconsDiv = styled.div`
    margin: 30px 0px;
    height: fit-content;
    width: fit-content;

    @media only screen and (max-width: 800px) {
        margin: 20px;
    }
`

const GithubIcon = styled(FaGithubSquare)`
    margin: 0 7px;
    height: 50px;
    width: 50px;
    color: var(--secondary-contrast);

    &:hover {
        color: var(--second-green);
    }

    @media only screen and (max-width: 800px) {
        width: auto;
        height: 30px;
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

    @media only screen and (max-width: 800px) {
        width: auto;
        height: 30px;
    }
`

const LocationDiv = styled.div`
    display: flex;
    gap: 6px;
    margin-top: 30px;

    h4 {
        font-size: 1.6rem;
    }
`

const LocationIcon = styled(FaMapPin)`
    margin: 0 7px;
    height: 20px;
    width: 20px;
    color: var(--secondary-contrast);
`


export default AboutMe;