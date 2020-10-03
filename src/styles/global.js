import { createGlobalStyle } from "styled-components";

import Bg from '../assets/bg.jpg';

export default createGlobalStyle`
    *{  
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    body{
        background-image: url(${Bg});
        background-position: center;
        background-size: cover;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
    input,
    button{
        border: none;
        outline: 0;
    }
    button{
        cursor: pointer;
    }
`;
