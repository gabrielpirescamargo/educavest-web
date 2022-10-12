import React, { Component } from 'react';
import './header.css'
import perfil from '../../assets/perfil.png'
import Buscar from '../Buscar/Buscar';
import Fogo from '../Fogo/Fogo';
import Pontos from '../Pontos/Pontos';

const logado = {
  
    "nome": "Gabriela",
    "pontuacao": "2000",
    "sequencia": "10"
}

  
export default class Header extends Component {
    render(){
      return (

        <div className='header'>
            <div href='#' className='logo'>
                <a href='#' className='logotext'>Educavest</a>
                <Buscar />
            </div>
            <div className='links'>
              <div className='status'>
              <Fogo sequencia={logado.sequencia}/>
            <Pontos pontos={logado.pontuacao}/>
              </div>
            
                
                <img src={perfil} width={50}></img>

            </div>
            
        </div>
      );
      
      
        }
      
    }