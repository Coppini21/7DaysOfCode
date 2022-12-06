import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
}

html, body, #root{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    min-width: 763px;

}

body{
    position: relative;
}

button{
    cursor: pointer;
}

`;

