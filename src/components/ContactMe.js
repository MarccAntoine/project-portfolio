import {MdEmail} from 'react-icons/md'
import {BiMailSend} from'react-icons/bi'

import styled from 'styled-components'

const ContactMe = ( {reference, isvisible} ) =>
{

    const copyEmail = () =>
    {
        const notif = document.querySelector("#notif");
        navigator.clipboard.writeText("marc-a.t@hotmail.com");

        notif.style.visibility= "visible";
        notif.style.opacity= "100%";

        setTimeout(() => {
            notif.style.visibility= "hidden";
            notif.style.opacity= "0%";
        }, 2000)
    }

    return (
    <>
        <Container ref={reference} isvisible={isvisible.toString()} id='contact'>
            <SectionDiv>
                <SectionTitle><Title>Contact Me</Title><CopyButton onClick={copyEmail}><MailIcon /></CopyButton></SectionTitle>
                <div><p>Fill the form to send me directly an email or click the email icon to copy my email in your clipboard.</p></div>
                <div>
                    <FormDiv>
                        <NameDiv>
                            <FormLabel>Your name
                                <StyledInput />
                            </FormLabel>
                        </NameDiv>
                        <NameDiv>
                            <FormLabel>Your email
                                <StyledInput />
                            </FormLabel>
                        </NameDiv>
                        <MessageInput>
                            <FormLabel>Message
                                <StyledTextArea placeholder='This functionality requires server-side implementation that I will learn in the next week, the send button will be disabled until I am able to use Node.js and NodeMailer' rows="10"/>
                            </FormLabel>
                        </MessageInput>
                        <SendLabel htmlFor="send">Send email</SendLabel><SendButton disabled id='send' aria-label='Send Email'><SendIcon /></SendButton>
                    </FormDiv>
                </div>
            </SectionDiv>
        </Container>
        <Notif id="notif">Email copied to clipboard!</Notif>
    </>)
}

const Container = styled.div`
    margin-left: 30%;
    margin-top: 230px;
    margin-bottom: 50px;
    width: 70%;
    position: relative;

    transition: all ease-out 0.25s;

    @media only screen and (max-width: 800px) {
        margin: 180px 35px 0px 35px;
        width: 90%;
        margin-bottom: 0px;
    }

    @media only screen and (max-width: 800px) {
        padding-top: 170px;
        margin: 10px 18px 0px 18px;
        width: 90%;
        margin-bottom: 0px;
    }

    opacity: ${props => props.isvisible === "true" ?  "100%" : "40%"};
`

const SectionDiv = styled.div`
    padding: 0px 60px;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 95%;

    @media only screen and (max-width: 800px) {
        padding: 30px;
        margin: 0 auto;
    }
`

const SectionTitle = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 0px 0px 30px 0px;
`

const Title = styled.h2`
    font-size: 40px;

    @media only screen and (max-width: 800px) {
        font-size: 30px;
    }
`

const CopyButton = styled.button`
    background: none;
    border: none;
`

const MailIcon = styled(MdEmail)`
    height: 40px;
    width: auto;
    color: var(--secondary-contrast);

    &:hover {
        color: var(--second-green);
        cursor: pointer;
    }
`

const FormDiv = styled.form`
    position: relative;
    margin: 30px 0px;
    display: flex;
    flex-direction: column;
    align-self: start;
    align-items: center;
`

const StyledInput = styled.input`
    position: absolute;
    top: 20px;
    left: 0px;
    background-color: transparent;
    border: none;
    width: 100%;
    font-family: var(--main-font);
    font-size: 15px;
    color: var(--secondary-contrast);

    &:focus {
        border: none;
        outline: none;
    }

    @media only screen and (max-width: 800px) {
        font-size: 12px;
        top: 15px;
        width: 95%;
    }
`

const NameDiv = styled.div`
    border-radius: 10px;
    border: 1px solid var(--secondary-contrast);;
    width: 100%;
    height: 55px;
    position: relative;
    margin: 5px 0px;
    box-sizing: border-box;

    &:focus-within {
        outline: var(--main-blue);
        border: 2px solid var(--main-blue);
    }

    @media only screen and (max-width: 800px) {
        height: 47px;
    }
`

const FormLabel = styled.label`
    width: 98%;
    position: absolute;
    top: 3px;
    left: 10px;
    font-family: var(--second-font);
    font-weight: 900;
    color: var(--contrast-color);

    @media only screen and (max-width: 800px) {
        font-size: 15px;
    }
`

const MessageInput = styled.div`
    border-radius: 10px;
    border: 1px solid var(--secondary-contrast);;
    width: 100%;
    height: 238px;
    position: relative;
    margin: 5px 0px;

    &:focus-within {
        border: 2px solid var(--main-blue);
    }
`

const StyledTextArea = styled.textarea`
    position: absolute;
    top: 20px;
    left: 0px;
    background-color: transparent;
    border: none;
    width: 100%;
    font-family: var(--main-font);
    font-size: 15px;
    resize: none;
    color: var(--secondary-contrast);
    box-sizing: border-box;

    &:focus {
        border: none;
        outline: none;
    }

    @media only screen and (max-width: 800px) {
        font-size: 12px;
        top: 15px;
        width: 95%;
    }
`

const SendButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    bottom: 10px;
    right: 10px;
`

const SendLabel = styled.label`
    display: none;
`

const SendIcon = styled(BiMailSend)`
    height: 40px;
    width: auto;

    color: var(--secondary-contrast);

    &:hover {
        color: var(--main-blue);
        cursor: pointer;
    }
`

const Notif = styled.div`
    z-index: 7;
    width: 250px;
    height: 70px;
    border-radius: 55px;
    padding: 16px;
    text-align: center;

    font-family: var(--main-font);
    font-size: 20px;

    background-color: var(--second-blue);
    color: white;

    visibility: hidden;
    opacity: 0%;

    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0%);

    transition: all ease 0.3s;

    @media only screen and (max-width: 800px) {
        width: 125px;
        height: 50px;
        font-size: 12px;
        padding: 12px;
    }
`

export default ContactMe;