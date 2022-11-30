import styled from "styled-components";

export const StyleSectionOfertas = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&display=swap');

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 150px 20px 150px;
    height: 100%;

    .titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px 0 0 0;
    }

    
    .titulo h1{
        font-family: 'Elsie Swash Caps', cursive;
        font-style: normal;
        font-size: 82px;
        font-weight: 900;
        line-height: 94px;
        text-align: center;
    }

    .botoes{
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: start;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        color: #202020;
        width: 413px;
        margin-right: 750px;
    }

    .divTotalBtnOne label, select{
        opacity: 0.5;
    }

    .divTotalBtnTwo label, input{
        opacity: 0.5;
    }

    .divTotalBtnTwo input{
        width: 90px;
    }

    .btnOne{
        padding: 10px 20px;
        border: none;
        background: #FFCB47;
        box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
        color: #FFFFFF;
        margin-left: 15px;
        transition: all 0.5s;

        &:hover{
            background: #FFB647;
        }
    }

    .btnTwo{
        padding: 10px 20px;
        border: none;
        background: #FFCB47;
        box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
        color: #FFFFFF;
        margin-left: 15px;
        transition: all 0.5s;

        &:hover{
            background: #FFB647;
        }
    }

    @media(max-width: 1300px){
        .botoes{
        margin-right: 350px;
        }
    }

    @media(max-width: 900px){
        .botoes{
        margin-right: 0;
        }
        
    }

`;


export const StyleContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1197px;
    margin-top: 25px;
    gap: 30px ;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 20px;
    

    .item{
        display: flex;
        width: 379px;
        height: 200px;
        background: #FFFFFF;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    }

    .imagem{
        width: 190px;
        height: 200px;
        background-repeat: no-repeat;
        background-size: cover;  
        position: absolute;
    }


    .info-Ofertas{
        margin-left: 200px;
        display: flex;
        flex-direction: column;
        width: 379px;
        height: 200px;
    }

    .info-Ofertas h3{
        margin-top: 25px;
        font-family: 'Elsie Swash Caps', cursive;
        font-style: normal;
        font-size: 32px;
        font-weight: 900;
        line-height: 37px;
        color: #202020;

    }

    .info-Ofertas span{
        margin-top: 15px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        line-height: 20px;
        color: #202020;
        opacity: 0.5;

    }

    .info-Ofertas a{
        display: flex;
        gap: 25px;
        margin-top: 15px;
        width: 110px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        line-height: 20px;
        color: #FFCB47;
        
    }

    .info-Ofertas a img{
        cursor: pointer;
    }


    @media(max-width: 1300px){
        grid-template-columns: 1fr 1fr;

        .botoes{
        margin-right: 450px;
        }
    }

    @media(max-width: 1104px){
        min-width: 763px;
    }

    @media(max-width: 900px){
        grid-template-columns: none;
        
    }
`;

