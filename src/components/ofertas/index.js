import React from "react";
import imagemSeta from '../../assets/seta.svg'

import { StyleSectionOfertas, StyleContainer } from './style'



export default function Ofertas(){
    return(
        <StyleSectionOfertas>
            <div className="titulo">
                <span>Conheça nossas</span>
                <h1>Ofertas</h1>
            </div>
                    
            <StyleContainer>
                <div className="item">
                    <div className="imagem">
                    </div>
                    <div className="info-Ofertas">
                        <h3>Ajuga reptans</h3>
                        <span>R$ 20,00</span>
                        <a>Compra <img src={imagemSeta} alt=''/> </a>
                    </div>  
                </div>
                <div className="item">
                    <div className="imagem">
                    </div>
                    <div className="info-Ofertas">
                        <h3>Cordyline fruticosa</h3>
                        <span>R$ 20,00</span>
                        <a>Compra <img src={imagemSeta} alt=''/></a>
                    </div>
                </div>
                <div className="item">
                    <div className="imagem">
                    </div>
                    <div className="info-Ofertas">
                        <h3>Crassula ovata</h3>
                        <span>R$ 20,00</span>
                        <a>Compra <img src={imagemSeta} alt=''/></a>
                    </div>  
                </div>
        
                <div className="item">
                    <div className="imagem">
                    </div>
                    <div className="info-Ofertas">
                        <h3>Cyperus rotundus</h3>
                        <span>R$ 20,00</span>
                        <a>Compra <img src={imagemSeta} alt=''/></a>
                    </div>
                </div>
                <div className="item">
                    <div className="imagem">
                    </div>
                    <div className="info-Ofertas">
                        <h3>Delairea odorata</h3>
                        <span>R$ 20,00</span>
                        <a>Compra <img src={imagemSeta} alt=''/></a>
                    </div>
                </div>
                <div className="item">
                    <div className="imagem">
                    </div>
                    <div className="info-Ofertas">
                        <h3>Datura metel</h3>
                        <span>R$ 20,00</span>
                        <a>Compra <img src={imagemSeta} alt=''/></a>
                    </div> 
                </div>  
            </StyleContainer>
        </StyleSectionOfertas>
    );
}