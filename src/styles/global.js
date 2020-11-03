import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
    *{  
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    body{
        background: #FFFFFF;
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
