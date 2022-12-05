import { createGlobalStyle } from 'styled-components';
import imagemVector from '../assets/Vector.svg';

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
    background-image: url("${imagemVector}");
    background-repeat: no-repeat;
    position: relative;
    background-position-x: right;
    background-position-y: top;
    background-size: 50%;
}

button{
    cursor: pointer;
}

`;