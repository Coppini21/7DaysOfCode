import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
}

html, body, #root{
    min-height: 100%;
    min-width: 763px;
}

body{
    background-image: url("http://localhost:3000/image 1.svg");
    background-repeat: no-repeat;
    position: relative;
    background-image: url("http://localhost:3000/Vector.svg");
    background-position-x: right;
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: 50%;
}

button{
    cursor: pointer;
}

`;