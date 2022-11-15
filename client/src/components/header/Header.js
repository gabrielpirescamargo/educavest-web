import React, { Component, useEffect, useState } from 'react';
import './header.css'
import Buscar from '../Buscar/Buscar';
import Fogo from '../Fogo/Fogo'
import Pontos from '../Pontos/Pontos'
import user from '../../data/usuario.json'


export default function Header() {
  const [usuarioAtual, setUsuarioAtual] = useState(JSON.parse(localStorage.getItem("usuarioAtual")))

useEffect(()  => {
  setUsuarioAtual(JSON.parse(localStorage.getItem("usuarioAtual")))
}, [JSON.parse(localStorage.getItem("usuarioAtual"))])
  

     
      return (

        <div className='header'>
            <div href='#' className='logo'>
                <a href='#' className='logotext'><div className='educa'>Educa</div> <div className='vest'>vest</div></a>
               
            </div>
            <div className='links'>
                
                <Fogo fogo={usuarioAtual.fogo}/>
                <Pontos pontos={usuarioAtual.pontos}/>
                <div className='usuario'>
                  <img src={usuarioAtual.foto} width={50}></img>
                  <text className='usuarionome'>{usuarioAtual.nome}</text>
                </div>
                
            </div>
            
        </div>
      );
      
      
        }
      
    