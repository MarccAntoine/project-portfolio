import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'

import styled from 'styled-components'
import { expertise } from '../content/expertiseData'

const Experience = (  {reference, isvisible} ) =>
{
    return (
    <Container ref={reference} isvisible={isvisible.toString()} id='skills'>
        <Content>
            <Introduction><p>In 2019, I relocated to Montreal to pursue my studies in fashion marketing at LaSalle College. Upon completing my DEC, I embarked on a new journey in computer science by self-learning with Harvard's CS50 introduction to computer science and I enrolled in Concordia's web development bootcamp. Since then, I have acquired a range of new skills and developed a passion for the tech industry. I am eager to kickstart my career and continue my pursuit of learning in this field.</p></Introduction>
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
                        <div><IconNode /></div>
                        <IconsName>Node.js</IconsName>
                    </IconsDiv>
                    <IconsDiv>
                        <div><IconPy /></div>
                        <IconsName>Python</IconsName>
                    </IconsDiv>
                </LanguagesDiv>
            </div>
            <SubjectsContainer>
                <SubjectDiv1><SubjectTitle>{expertise[0].name}</SubjectTitle><SubjectPara>{expertise[0].description}</SubjectPara></SubjectDiv1>
                <SubjectDiv2><SubjectTitle>{expertise[1].name}</SubjectTitle><SubjectPara>{expertise[1].description}</SubjectPara></SubjectDiv2>
                <SubjectDiv3><SubjectTitle>{expertise[2].name}</SubjectTitle><SubjectPara>{expertise[2].description}</SubjectPara></SubjectDiv3>
            </SubjectsContainer>
        </Content>
    </Container>)
}

const Container = styled.div`
    margin-left: 30%;
    margin-top: 180px;
    padding-top: 50px;
    margin-right: 0px;
    width: 70%;
    position: relative;

    transition: all ease-out 0.25s;

    @media only screen and (min-height: 1000px) {
        margin-top: 300px;
    }

    @media only screen and (min-height: 1200px) {
        margin-top: 350px;
    }

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

const IconNode = styled(FaNodeJs)`
width: auto;
height: 95px;
color: var(--secondary-contrast);
margin-bottom: 3px;

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
    aspect-ratio: 0.95;

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
    justify-content: center;
    aspect-ratio: 1;

    transition: all ease 0.3s;

    @media only screen and (max-width: 500px) {
        width: 56%;
        left: 7%;
    }

    &:hover {
        transform: scale(1.09);
    }
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
    justify-content: center;
    aspect-ratio: 1;

    transition: all ease 0.3s;


    @media only screen and (max-width: 500px) {
        width: 56%;
        top: 40%;
        left: 49%;
    }

    &:hover {
        transform: scale(1.09);
    }
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
    justify-content: center;
    aspect-ratio: 1;

    transition: all ease 0.3s;


    @media only screen and (max-width: 500px) {
        width: 56%;
        top: 55%;
        left: -6%
    }

    &:hover {
        transform: scale(1.09);
    }
`

const SubjectTitle = styled.h4`
    color: white;
    margin: 0px 0px 7% 0px;
    width: 60%;
    font-size: 19px;

    @media only screen and (min-width: 1050px) {
        font-size: 23px;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 26px;
    }

    @media only screen and (min-width: 1650px) {
        font-size: 29px;
    }

    @media only screen and (min-width: 1800px) {
        font-size: 31px;
    }

    @media only screen and (max-width: 650px) {
        font-size: 15px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 14px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 13px;
    }
`

const SubjectPara = styled.p`
    color: white;
    font-size: 14px;
    max-width: 75%;
    max-height: 60%;

    @media only screen and (min-width: 800px) {
        font-size: 11px;
    }

    @media only screen and (min-width: 1075px) {
        font-size: 16px;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 18px;
    }

    @media only screen and (min-width: 1650px) {
        font-size: 21px;
    }

    @media only screen and (min-width: 1800px) {
        font-size: 25px;
    }

    @media only screen and (max-width: 650px) {
        font-size: 12px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 9px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 8px;
    }
`


export default Experience;