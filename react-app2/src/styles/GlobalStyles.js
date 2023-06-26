import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: darkviolet;
    }
    a{
        color: #fff;
        text-decoration: none;
        margin: 10px;
        padding: 20px;
    }
    .dark-theme,
    .dark-theme a {
        background-color: #333;
        color: #fff;
    }
`;