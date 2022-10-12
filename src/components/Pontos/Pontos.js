import React, { Component } from 'react';
import './pontos.css'
import livro from '../../assets/livro.png'

function calculo(props) {
  return <h1>{props.pontos}</h1>;
}

export default class Pontos extends Component {
  
    render(){
      return (
        <div className='pontos'>
            <img src={livro} width={20}></img>
            <text className='pontuacao'>{this.props.pontos}</text>
        </div>
      );
      
      
        }
      
    }