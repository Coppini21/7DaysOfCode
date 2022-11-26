import React from "react";

import { useState, useEffect, useRef } from 'react'

import emailjs from '@emailjs/browser';


import { StyleHero, StyleImagem, StyleMain } from './style'

import imagemHero from '../../assets/imagem-hero 1.svg'



export default function Hero() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const form = useRef();

    function validate(name, email){
        console.log('entrou!!')
       
        console.log(name, email)
        

        if(name === '' || name.length <= 2 || email === '' || !email.includes('@')) {

            if(name === '' || name.length <= 2){
                error.mensagemName = 'Campo não pode estar em branco e deve ter mais de 2 caracteres.';

                if(email === '' || !email.includes('@')) {
                    error.mensagemEmail = 'Campo não pode estar em branco e deve ter "@".';
                } else {
                    error && delete error.mensagemEmail;
                }
            } else{
                error && delete error.mensagemName;     
            } 


            if(email === '' || !email.includes('@')){
                error.mensagemEmail = 'Campo não pode estar em branco e deve ter "@".';

                if(name === '' || name.length <= 2) {
                    error.mensagemName = 'Campo não pode estar em branco e deve ter mais de 2 caracteres.';
                } else {
                    error && delete error.mensagemName;
                }
            } else { 
                error && delete error.mensagemEmail;
            } 

            console.log(error)        

        } else {
            delete error.mensagemName;
            delete error.mensagemEmail;
            
            alert('"Obrigado pela sua assinatura, você receberá nossas novidades no e-mail [e-mail cadastrado]".')

            emailjs.sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            setError({})
        }

        return error;

    }

    
    function handleSubmit(e){
        e.preventDefault();
        
        setError(validate(name, email));
       
        setName('');
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

                <div className="divTotalForm">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div>
                            <input className="inputName" type='text' value={name} placeholder="insira seu nome" name='name' onChange={(e) => setName(e.target.value = e.target.value)}/> 
                        </div>
                        {error.mensagemName && <span className="mensagemErro">{error.mensagemName}</span>}
                          
                       <div className="inputEmail_Botao">
                            <input className="inputEmail" type='text' value={email} placeholder="insira seu e-mail" name='from_name' onChange={(e) => setEmail(e.target.value = e.target.value.toLowerCase())} />

                            <button className="btn">
                                Assinar newsletter
                            </button>
                       </div>
                       {error.mensagemEmail && <span className="mensagemErro">{error.mensagemEmail}</span>}
                      
                    </form>
                </div>
            </StyleHero>
            <StyleImagem>
                <img src={imagemHero} />
            </StyleImagem>

        </StyleMain>

    )
}