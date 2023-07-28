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
`

const Credit = styled.div`
    font-family: var(--main-font);
    font-size: 12px;
    filter: brightness(75%);
    text-align: center;

    color: var(--secondary-contrast);
`

export default Foot;