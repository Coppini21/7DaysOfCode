import React from "react";
import { useEffect, useState } from "react";
import imagemSeta from '../../assets/seta.svg';

import api from '../../services/api';

import { StyleSectionOfertas, StyleContainer} from './style'






export default function Ofertas() {
    const [listaPlantas, setListaPlantas] = useState([]);
    const [valorPlanta, setValorPlanta] = useState(0);
    const [selectBtnOne, setSelectBtnOne] = useState("")


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
        
    }, [valorPlanta]);



    async function ordenar() {
        if (selectBtnOne === "1") {
            setListaPlantas([])
            const listaOrdenadaAlfabeto = await listaPlantas.sort(function (a, b) {
                if (a.nome > b.nome) {
                    return 1;
                }
                if (a.nome < b.nome) {
                    return -1;
                }
                return 0;
            });
   
            setListaPlantas(listaOrdenadaAlfabeto)
            console.log(listaPlantas)
        } 

        if (selectBtnOne === "2") {
            setListaPlantas([])
            const listaOrdenadaPreco = await listaPlantas.sort(function (a, b) {
                if (a.preco < b.preco)
                    return -1;
                else {
                    return true
                }
            });

            setListaPlantas(listaOrdenadaPreco)
            console.log(listaPlantas)
        } 

    }

    function filtroPorValor(){
        setListaPlantas()
        let valor = Number(valorPlanta)

       
        let precoConvertido = [];
        listaPlantas.forEach((item) => {
            if(valor < item.preco){
                setListaPlantas([])
                precoConvertido.push(item)
            
            }

            setListaPlantas(precoConvertido)
        })
    }


    return (

        <StyleSectionOfertas>
            <div className="titulo">
                <h1>Nossas Plantas</h1>
            </div>

            <div className="botoes">
                <div className="divTotalBtnOne">
                    <label htmlFor="selectBtnOne">Ordenar por </label>
                    <select name="selectBtnOne" id="selectBtnOne" value={selectBtnOne} onChange={(e) => setSelectBtnOne(e.target.value)}>
                        <option value="">Selecione...</option>
                        <option value="1">Nome</option>
                        <option value="2">Preço</option>
                    </select>

                    <button type="button" className="btnOne" onClick={() => ordenar()}>Ordenar</button>
                </div>

                <div className="divTotalBtnTwo">
                    <label htmlFor="valor">Filtrar por valor acima de R$ </label>
                    <input type="number" value={valorPlanta} id="valor" name="valor" min={0} onChange={(e) => setValorPlanta(e.target.value)} />

                    <button type="button" className="btnTwo" onClick={filtroPorValor} >Filtrar</button>
                </div>

            </div>

          
            <StyleContainer>
                {listaPlantas.map((planta) => {
                    return (
                        (planta.estoque > 0)
                        &&
                        (<div className="item" key={planta.id} >
                            <div className="imagem" style = {{ backgroundImage : `url("http://localhost:3000/imgPlantas/${planta.path_img}")`}} >
                            </div>
                            <div className="info-Ofertas">
                                <h3>{planta.nome}</h3>
                                <span>{`R$ ${planta.preco},00`}</span>
                                <a href="#">Compra <img src={imagemSeta} alt='' /> </a>
                            </div>

                        </div>
                        )
                    )
                })}
                
            </StyleContainer>
        </StyleSectionOfertas>
    );
}