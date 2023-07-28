import { FaHtml5, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'

import styled from 'styled-components'

const Experience = (  {reference, isvisible} ) =>
{
    return (
    <Container ref={reference} isvisible={isvisible.toString()} id='skills'>
        <Content>
            <Introduction><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></Introduction>
            <div>
                <h3>Programming languages and libraries</h3>
                <LanguagesDiv>
                    <IconsDiv>
                        <div><IconHtml /></div>
                        <IconsName>Html5</IconsName>
                    </IconsDiv>
                    <IconsDiv>
                        <div><IconCss /></div>
                        <IconsName>Css3</IconsName>
                    </IconsDiv>
                    <IconsDiv>
                        <div><IconJava /></div>
                        <IconsName>JavaScript</IconsName>
                    </IconsDiv>
                    <IconsDiv>
                        <div><IconReact /></div>
                        <IconsName>React</IconsName>
                    </IconsDiv>
                    <IconsDiv>
                        <div><IconPy /></div>
                        <IconsName>Python</IconsName>
                    </IconsDiv>
                </LanguagesDiv>
            </div>
            <SubjectsContainer>
                <SubjectDiv1><SubjectTitle>Web Development</SubjectTitle><SubjectPara>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</SubjectPara></SubjectDiv1>
                <SubjectDiv2><SubjectTitle>Graphism</SubjectTitle><SubjectPara>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</SubjectPara></SubjectDiv2>
                <SubjectDiv3><SubjectTitle>UI / UX</SubjectTitle><SubjectPara>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</SubjectPara></SubjectDiv3>
            </SubjectsContainer>
        </Content>
    </Container>)
}

const Container = styled.div`
    margin-left: 30%;
    margin-top: 130px;
    padding-top: 100px;
    margin-right: 0px;
    width: 70%;
    position: relative;

    transition: all ease-out 0.25s;

    @media only screen and (max-width: 800px) {
        padding-top: 200px;
        margin: 10px 35px 0px 35px;
        width: 90%;
    }

    @media only screen and (max-width: 500px) {
        padding-top: 200px;
        margin: 10px 18px 0px 18px;
        width: 90%;
    }

    opacity: ${props => props.isvisible === "true" ?  "100%" : "40%"};
`

const Content = styled.div`
    padding: 0px 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media only screen and (max-width: 800px) {
        padding: 0px;
        margin: 0 auto;
    }
`

const Introduction = styled.div`
    font-family: var(--main-font);
    font-size: 22px;
    margin-bottom: 80px;
`

const LanguagesDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 30px 0px;
    justify-content: center;
`

const IconsDiv = styled.div`
    margin: 5px 15px;
    transition: all ease-in-out 0.5s;
    height: 140px;
    width: 100px;

    &:hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 800px) {
        width: 60px;
        height: 80px;
    }
`

const IconsName = styled.div`
    display: none;
    height: 25px;
    font-family: var(--main-font);
    font-size: 18px;
    color: var(--secondary-contrast);

    ${IconsDiv}:hover & {
        display: inline;
    }

    @media only screen and (max-width: 800px) {
        font-size: 12px;
    }
`

const IconHtml = styled(FaHtml5)`
    width: auto;
    height: 100px;
    color: var(--secondary-contrast);

    ${IconsDiv}:hover & {
        color: var(--second-green);
    }

    @media only screen and (max-width: 800px) {
        width: auto;
        height: 50px;
    }
`

const IconCss = styled(FaCss3Alt)`
    width: auto;
    height: 100px;
    color: var(--secondary-contrast);

    ${IconsDiv}:hover & {
        color: var(--second-green);
    }

    @media only screen and (max-width: 800px) {
        width: auto;
        height: 50px;
    }
`

const IconJava = styled(DiJavascript)`
    width: auto;
    height: 100px;
    color: var(--secondary-contrast);

    ${IconsDiv}:hover & {
        color: var(--second-green);
    }

    @media only screen and (max-width: 800px) {
        width: auto;
        height: 50px;
    }
`

const IconReact = styled(FaReact)`
    width: auto;
    height: 100px;
    color: var(--secondary-contrast);

    ${IconsDiv}:hover & {
        color: var(--second-green);
    }

    @media only screen and (max-width: 800px) {
        width: auto;
        height: 50px;
    }
`

const IconPy = styled(FaPython)`
    width: auto;
    height: 100px;
    color: var(--secondary-contrast);

    ${IconsDiv}:hover & {
        color: var(--second-green);
    }

    @media only screen and (max-width: 800px) {
        width: auto;
        height: 50px;
    }
`

const SubjectsContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 0.96;

    @media only screen and (max-width: 800px) {
        width: 95%;
        margin: 0 auto;
    }
`

const SubjectDiv1 = styled.div`
    width: 50%;
    border-radius: 50%;
    background-color: var(--main-blue);
    position: absolute;
    top: 0%;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    aspect-ratio: 1;
`

const SubjectDiv2 = styled.div`
    width: 50%;
    border-radius: 50%;
    background-color: var(--main-blue);
    position: absolute;
    top: 32%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    aspect-ratio: 1;
`

const SubjectDiv3 = styled.div`
    width: 50%;
    border-radius: 50%;
    background-color: var(--main-blue);
    position: absolute;
    top: 50%;
    left: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    aspect-ratio: 1;
`

const SubjectTitle = styled.h4`
    color: white;
    margin: 15% 0px;
    width: 60%;
    font-size: calc(20px + 0.2vw);

    @media only screen and (min-width: 1000px) {
        font-size: calc(25px + 0.2vw);
    }

    @media only screen and (min-width: 1200px) {
        font-size: calc(27px + 0.2vw);
    }

    @media only screen and (max-width: 500px) {
        font-size: calc(14px + 0.2vw);
    }
`

const SubjectPara = styled.p`
    color: white;
    font-size: calc(15px + 0.1vw);
    max-width: 75%;
    max-height: 60%;

    @media only screen and (min-width: 1000px) {
        font-size: calc(18px + 0.1vw);
    }

    @media only screen and (min-width: 1200px) {
        font-size: calc(22px + 0.1vw);
    }

    @media only screen and (max-width: 500px) {
        font-size: calc(8px + 0.1vw);
    }
`


export default Experience;