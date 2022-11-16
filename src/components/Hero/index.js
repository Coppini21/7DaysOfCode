import React from "react";
import { useState } from 'react'

import { StyleHero, StyleImagem, StyleMain } from './style'

import imagemHero from '../../assets/imagem-hero 1.svg'


export default function Hero() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState({});

    function validate(value){

        if(!value.includes('@')) {
            error.mensagem = 'Email inválido';
        } else{
            delete error.mensagem;

            alert('"Obrigado pela sua assinatura, você receberá nossas novidades no e-mail [e-mail cadastrado]".')

            console.log(error)

            setError({})
        }

        return error;
    }

    
    function handleSubmit(e){
        e.preventDefault();
        
        setError(validate(email));

        setEmail('');
    }


    return (
        <StyleMain>
            <StyleHero>
                <span>Sua casa com as</span>
                <h1>melhores plantas</h1>

                <p>
                    Encontre aqui uma vasta seleçao de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </p>

                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={email} placeholder="insira seu e-mail" onChange={(e) => setEmail(e.target.value = e.target.value.toLowerCase())} />
    
                        <button>
                            Assinar newsletter
                        </button>

                    </form>

                    {error.mensagem && <span>{error.mensagem}</span> }

                </div>
            </StyleHero>
            <StyleImagem>
                <img src={imagemHero} />
            </StyleImagem>

        </StyleMain>

    )
}