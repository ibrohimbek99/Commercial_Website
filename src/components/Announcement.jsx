import styled from "styled-components"

const Container = styled.div `
height: 25px;
background-color: red;
color: white;
text-align: center;
justify-content: center;
font-size: 15px;
font-weight: 500;
`
const Announcement = () => {
    return (
        <Container>
            HAPPY NEW YEAR, OUR DEAR CUSTOMERS. USE PROMOCODE #2022 TO GET 40% DISCOUNT!
        </Container>
    )
}

export default Announcement
