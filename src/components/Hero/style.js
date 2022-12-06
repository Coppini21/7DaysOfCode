import styled from 'styled-components';

import imagemEmail from '../../assets/mail.svg';
import icons8 from '../../assets/icons8.png'


export const StyleMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 150px;

    @media(max-width: 955px){
        padding: 0px 0px;
    }

`;

export const StyleImagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 800px;
    }
`;


export const StyleHero = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

    margin-top: 200px;
    min-width: 585px;

    > span{
        font-family: 'Montserrat';
        font-weight: 400px;
        font-size: 22px;
        line-height: 27px;
        color: #202020;
        opacity: 0.5;

    }

    h1{
        width: 375px;
        font-family: 'Elsie Swash Caps', cursive;
        font-size: 82px;
        font-style: normal;
        font-weight: 900;
        line-height: 94px;
    }

    p{
        margin-top: 30px;
        max-width: 481px;
        font-style: normal;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #202020;
        opacity: 0.5;

    }
    

    form {
        display: flex;
        gap: 10px;
        flex-direction: column;
        margin-top: 20px;

    }

    .inputEmail_Botao{
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06)
    }

    .inputEmail{
        height: 75px;
        width: 390px;
        padding-left: 60px;
        background-image: url("${imagemEmail}");
        background-repeat: no-repeat;
        background-position: 20px;
        border: 0;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #202020;
        opacity: 0.3;
    }

    .inputName{
        height: 75px;
        width: 390px;
        padding-left: 60px;
        background-image: url("${icons8}");
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: 20px;
        border: 0;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #202020;
        opacity: 0.3;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06)
    }

    .btn{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        width: 195px;
        border: 0;
        color: white;
        background-color: #FFCB47;
        box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
        height: 75px;
        transition: all 0.5s;

        &:hover{
            background: #FFB647;
        }
    }
    

    .mensagemErro{
        color: red;
        margin-left: 5px;
    }
`;

