import React from "react";
import { useEffect, useState } from "react";
import imagemSeta from '../../assets/seta.svg';

import api from '../../services/api';

import { StyleSectionOfertas, StyleContainer } from './style'



export default function Ofertas() {
    const [listaPlantas, setListaPlantas] = useState([])


    useEffect(() => {

        function resultadoApi() {
            api()
                .then((res) => {
                    console.log(res)
                    setListaPlantas(res)
                })
                .catch((error) => {
                    console.log(error)
                })

        }

        resultadoApi()


    }, []);

    let contagemIndice = 0

    return (

        <StyleSectionOfertas>
            <div className="titulo">
                <span>Conheça nossas</span>
                <h1>Ofertas</h1>
            </div>

            <StyleContainer>
                {listaPlantas.map((planta) => {
                    return (
                        (planta.estoque > 0 && contagemIndice < 6)
                        &&
                        (<div className="item" key={planta.id} style={{ backgroundImage: `url("http://localhost:3000/imgPlantas/${planta.path_img}")` }}>
                            <div className="imagem">
                            </div>
                            <div className="info-Ofertas">
                                <h3>{planta.nome}</h3>
                                <span>{planta.preco}</span>
                                <a>Compra <img src={imagemSeta} alt='' /> </a>
                            </div>
                            <span className="contagem">
                                {contagemIndice += 1}
                            </span>

                        </div>
                        )
                    )
                })}
            </StyleContainer>
        </StyleSectionOfertas>
    );
}