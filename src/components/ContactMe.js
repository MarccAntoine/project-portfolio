import {MdEmail} from 'react-icons/md'
import {BiMailSend} from'react-icons/bi'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const ContactMe = ( {reference, isvisible} ) =>
{
    const [showNotif, setShowNotif] = useState({state: false, notif: ""});
    const form = useRef();
    const {t} = useTranslation()

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const showNotifFunc = (notif) =>
    {

        setShowNotif({state : true, notif})

        setTimeout(() => {
            setShowNotif({state : false, notif : ""})
        }, 2000)
    }

    const copyEmail = () =>
    {
        navigator.clipboard.writeText("marcantoine.t.dev@gmail.com");

        showNotifFunc(t('notifcopy'))
    }

    const sendEmail = (e) => {
        e.preventDefault();


        const nameInput = document.getElementById('user_name');
        const emailInput = document.getElementById('user_email');
        const messageInput = document.getElementById('message');


    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            showNotifFunc(t('notifMis')); 
            return;
    }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            form.current.reset();
            showNotifFunc(t('notifsent'))
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
    <>
        <Container ref={reference} isvisible={isvisible.toString()} id='contact'>
            <SectionDiv>
                <SectionTitle><Title>{t('contactTitle')}</Title><CopyButton onClick={copyEmail}><MailIcon /></CopyButton></SectionTitle>
                <div><Intructions>{t('contactDesc')}</Intructions></div>
                <div>
                    <FormDiv ref={form}>
                        <NameDiv>
                            <FormLabel>{t('contactName')}
                                <StyledInput type='text' name="user_name" id='user_name'/>
                            </FormLabel>
                        </NameDiv>
                        <NameDiv>
                            <FormLabel>{t('contactMail')}
                                <StyledInput type='email' name="user_email" id='user_email'/>
                            </FormLabel>
                        </NameDiv>
                        <MessageInput>
                            <FormLabel>{t('contactMes')}
                                <StyledTextArea type="text" name="message" id='message' rows="10"/>
                            </FormLabel>
                        </MessageInput>
                        <SendLabel htmlFor="send">Send email</SendLabel><SendButton onClick={sendEmail} id='send' aria-label='Send Email'><SendIcon /></SendButton>
                    </FormDiv>
                </div>
            </SectionDiv>
        </Container>
        {showNotif.state ? <Notif style={{visibility: "visible", opacity : "100%"}}>{showNotif.notif}</Notif> : <Notif style={{visibility: "hidden", opacity : "0"}}></Notif>}
        
    </>)
}

const Container = styled.div`
    margin-left: 30%;
    margin-top: 230px;
    margin-bottom: 50px;
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

    @media only screen and (max-width: 800px) {
        gap: 10px;
    }
`

const Title = styled.h2`
    font-size: 2.5rem;
`

const Intructions = styled.p`
    font-size: 1.3em;
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

    @media only screen and (max-width: 800px) {
        height: 30px;
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
    font-size: 0.9rem;
    color: var(--secondary-contrast);

    &:focus {
        border: none;
        outline: none;
    }

    @media only screen and (max-width: 800px) {
        top: 15px;
        width: 96%;
        left: -3px;
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
        height: 42px;
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
    font-size: 1.1rem;

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
    font-size: 0.9rem;
    resize: none;
    color: var(--secondary-contrast);
    box-sizing: border-box;

    &:focus {
        border: none;
        outline: none;
    }

    @media only screen and (max-width: 800px) {
        top: 15px;
        width: 96%;
        left: -3px;
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
    padding: 10px;
    text-align: center;

    font-family: var(--main-font);
    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

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
        padding: 12px;
    }
`

export default ContactMe;