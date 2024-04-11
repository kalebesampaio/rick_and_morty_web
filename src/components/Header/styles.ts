import styled from "styled-components";

export const HeaderStyles = styled.header`
margin-top: 50px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
height: calc(-60px + 50vh);
text-align: center;
@media (max-width: 650px) {
    margin-top: 0px;
}
`

export const HeaderLogo = styled.img`
width: 100%;
`