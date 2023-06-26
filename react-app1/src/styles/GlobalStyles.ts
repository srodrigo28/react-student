import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: darkblue;
    }
    a{
        color: #fff;
        margin: 10px;
        padding: 20px;

        text-decoration: none;
    }
    h1{
        color: #fff;
    }

`;