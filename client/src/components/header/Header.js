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
  

     const sair = (() => {
      localStorage.setItem('usuarioAtual', JSON.stringify({}))
      localStorage.setItem('recentes', JSON.stringify([]))
      window.location.href = '/login'
     })
      return (

        <div className='header'>
            <div href='#' className='logo'>
                <a href='#' className='logotext'><div className='educa'>Educa</div> <div className='vest'>vest</div></a>
               
            </div>
            <div className='links'>
                
                {/* <Fogo fogo={usuarioAtual.fogo}/> */}
                <Pontos pontos={usuarioAtual.pontos}/>
                <div className='usuario'>
                  <img 
                  src={usuarioAtual.foto} 
                  width={50}>
                  </img>
                  <text className='usuarionome'>{usuarioAtual.nome}</text>
                </div>
                  <div style={{backgroundColor: '#FC5050', color: 'white', width: 50, textAlign: 'center', borderRadius: 20, justifyContent: 'center', alignItems: 'center', display:'flex', cursor:'pointer', marginLeft:10, fontWeight:'bold', height: 30}} onClick={sair} 
>Sair</div>
                
            </div>
            
        </div>
      );
      
      
        }
      
    