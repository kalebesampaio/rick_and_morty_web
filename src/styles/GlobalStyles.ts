import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
        font-family: "IBM Plex Sans", sans-serif;
        scroll-behavior: smooth;
    }

    :root{
        --whiteFixed: #FFFFFF;
        --grey1: rgb(39, 43, 51);
        --grey2: rgb(60, 62, 68);
    }
    body{
        background-color: var(--grey1);
        width: 100%;
        min-height: 100vh;
    }

    button {
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            transition: 0.5s;
        }
    }

    a {
        text-decoration: none;
    }

 

`;