import styled from "styled-components";

export const HomePageStyles = styled.div`
width: 100%;
padding: 0px 1.5rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
button {
    color: var(--whiteFixed);
  }
  nav{
    margin-bottom: 20px;
  }
`

export const HomePageContainer = styled.main`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
padding: 4.5rem 0px;
background: rgb(39, 43, 51);
min-height: calc(-60px + 50vh);
@media (max-width: 40.625em){
    padding: 1.5rem;
}
`