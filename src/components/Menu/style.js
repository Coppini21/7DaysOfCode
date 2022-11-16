
import styled from 'styled-components';


export const StyleMenu = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

    display: flex;
    width: 100%;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    padding: 30px 150px;

    nav{
        display: flex;
        gap: 10px;
        margin-top: 15px;
        font-weight: 400;
        font-family: 'Montserrat';
        font-size: 16px;
        color: #202020;
        line-height: 20px;
    }

    .opcao{
        display: flex;
        cursor: pointer;
    }

`;

