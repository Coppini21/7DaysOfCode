import React from "react";
import styled from "styled-components";

export const StyleSectionOfertas = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&display=swap');

    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100vh; */
    padding: 0 150px;

    .titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px 0 0 0;
    }

    .titulo span{
            font-family: 'Montserrat', sans-serif;
            font-size: 22px;
            font-weight: 400;
            font-style: normal;
            line-height: 27px;
            align-items: center;
            color: #202020;
            opacity: 0.5;
        }
    
    .titulo h1{
        font-family: 'Elsie Swash Caps', cursive;
        font-style: normal;
        font-size: 82px;
        font-weight: 900;
        line-height: 94px;
        text-align: center;
    }

`;

export const StyleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px ;
    max-width: 1197px;
    height: 410px;
    flex-wrap: wrap;
    margin-top: 15px;
  

    .item{
        display: flex;
        width: 379px;
        height: 200px;
        background: #FFFFFF;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        background-repeat: no-repeat;
        background-size: 215px;

    }


    .info-Ofertas{
        margin-left: 190px;
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

    .contagem{
        display: none;
    }

    @media(max-width: 1104px){
        min-width: 763px;
    }
`;

