import React, { Component } from 'react';
import './header.css'
import perfil from '../../assets/perfil.png'
import Buscar from '../Buscar/Buscar';

export default class Header extends Component {
    render(){
      return (

        <div className='header'>
            <div href='#' className='logo'>
                <a href='www.google.com' className='logotext'>Educavest</a>
                <Buscar/>
            </div>
            <div className='links'>
                
                <a className='linkstext' href='#'>Home</a>
                <a className='linkstext' href='#'>Matérias</a>
                <a className='linkstext' href='#'>t3este5</a>
                <a className='linkstext' href='#'>t3este6</a>
                <img src={perfil} width={20}></img>
            </div>
            
        </div>
      );
      
      
        }
      
    }