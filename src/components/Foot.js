import styled from "styled-components";


const Foot = () =>
{
    return (
    <>
        <Container><Credit>Website Developped by Marc-Antoine Tremblay - 2023</Credit></Container>
    </>
    )
}

const Container = styled.div`
    margin-left: 30%;
    padding: 40px;

    @media only screen and (max-width: 800px) {
        margin: 30px 20px 0px 20px;
        width: 90%;
        padding: 20px;
    }
`

const Credit = styled.div`
    font-family: var(--main-font);
    font-size: 12px;
    filter: brightness(75%);
    text-align: center;

    color: var(--secondary-contrast);
`

export default Foot;