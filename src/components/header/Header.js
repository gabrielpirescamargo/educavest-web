import React, { Component } from 'react';
import './header.css'
import perfil from '../../assets/perfil.png'
import Buscar from '../Buscar/Buscar';
import Fogo from '../Fogo/Fogo'
import Pontos from '../Pontos/Pontos'
import user from '../../data/usuario.json'

export default class Header extends Component {
    render(){
      return (

        <div className='header'>
            <div href='#' className='logo'>
                <a href='#' className='logotext'><div className='educa'>Educa</div> <div className='vest'>vest</div></a>
               
            </div>
            <Buscar/>
            <div className='links'>
                
                <Fogo fogo={user.fogo}/>
                <Pontos pontos={user.pontos}/>
                <div className='usuario'>
                  <img src={perfil} width={50}></img>
                  <text className='usuarionome'>{user.nome}</text>
                </div>
                
            </div>
            
        </div>
      );
      
      
        }
      
    }