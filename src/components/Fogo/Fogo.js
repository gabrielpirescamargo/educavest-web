import React, { Component } from 'react';
import './fogo.css'
import fire from '../../assets/fire.png'

function calculo(props) {
  return <h1>{props.sequencia}</h1>;
}
export default class Fogo extends Component {
    render(){
      return (
        <div className='fogo'>
            <img src={fire} width={20}></img>
            <text className='consecutivo'>{this.props.sequencia}</text>
        </div>
      );
      
      
        }
      
    }