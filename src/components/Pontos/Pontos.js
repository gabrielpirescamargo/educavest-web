import React, { Component } from 'react';
import './pontos.css'
import livro from '../../assets/livro.png'


export default class Pontos extends Component {
    render(){
      return (
        <div className='pontos'>
            <img src={livro} width={20}></img>
            <text className='pontuacao'>10</text>
        </div>
      );
      
      
        }
      
    }