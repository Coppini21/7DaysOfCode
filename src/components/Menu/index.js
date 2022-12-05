import React from "react";
import { StyleMenu } from './style';
import  imagem from '../../assets/logo.svg'

export default function Menu(){
    return(
        <StyleMenu>
            <div>
                <img src={imagem} alt='Logo imagem'/>
            </div>
           
            <nav>
                <div className="opcao">Como fazer</div>
                <span>/</span>
                <div className="opcao">Ofertas</div>
                <span>/</span>
                <div className="opcao">Depoimentos</div>
                <span>/</span>
                <div className="opcao">Vídeos</div>
                <span>/</span>
                <div className="opcao">Meu carrinho</div>
            </nav>
            
        </StyleMenu>
    )
}