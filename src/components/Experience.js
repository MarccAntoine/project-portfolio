import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'

import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Experience = (  {reference, isvisible} ) =>
{
    const {t} = useTranslation();

    return (
    <Container ref={reference} isvisible={isvisible.toString()} id='skills'>
        <Content>
            <Introduction><p>{t('expDesc')}</p></Introduction>
            <div>
                <LanguageTitle>{t('titleLang')}</LanguageTitle>
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
                <SubjectDiv1><SubjectTitle>{t('sub1')}</SubjectTitle><SubjectPara>{t('sub1par')}</SubjectPara></SubjectDiv1>
                <SubjectDiv2><SubjectTitle>{t('sub2')}</SubjectTitle><SubjectPara>{t('sub2par')}</SubjectPara></SubjectDiv2>
                <SubjectDiv3><SubjectTitle>{t('sub3')}</SubjectTitle><SubjectPara>{t('sub3par')}</SubjectPara></SubjectDiv3>
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
    margin-bottom: 80px;

    p {
        font-size: 1.5rem;
        line-height: 110%;
    }
`

const LanguagesDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 30px 0px;
    justify-content: center;
`

const LanguageTitle = styled.h3`
    font-size: 2rem;
`

const IconsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    font-size: 1.1rem;
    color: var(--secondary-contrast);

    ${IconsDiv}:hover & {
        display: inline;
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
        height: 40px;
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
    height: 40px;
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
        height: 40px;
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
        height: 40px;
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
        height: 40px;
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
        height: 40px;
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

    @media only screen and (max-width: 500px) {
        aspect-ratio: 0.7;
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
        width: 65%;
        left: 2%;
    }

    @media only screen and (min-width: 800px) {
        &:hover {
        transform: scale(1.09);
    }
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
        width: 65%;
        top: 37%;
        left: 42%;
    }

    @media only screen and (min-width: 800px) {
        &:hover {
        transform: scale(1.09);
    }
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
        width: 65%;
        top: 74%;
        left: 2%
    }

    @media only screen and (min-width: 800px) {
        &:hover {
        transform: scale(1.09);
    }
    }
`

const SubjectTitle = styled.h4`
    color: white;
    margin: 0px 0px 7% 0px;
    width: 60%;
    font-size: 1.2rem;

    @media only screen and (min-width: 750px) {
        font-size: 1.5rem;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.6rem;
    }

    @media only screen and (min-width: 1650px) {
        font-size: 1.8rem;
    }
`

const SubjectPara = styled.p`
    color: white;
    font-size: 14px;
    max-width: 75%;
    max-height: 60%;
    font-size: 1rem;

    @media only screen and (min-width: 850px) {
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1rem;
    }

    @media only screen and (min-width: 1650px) {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 850px) {
        font-size: 0.8rem;
    }

    @media only screen and (max-width: 750px) {
        font-size: 0.78rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 0.8rem;
    }
`


export default Experience;