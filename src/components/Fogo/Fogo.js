import React, { Component } from 'react';
import './fogo.css'
import fire from '../../assets/fire.png'


export default class Fogo extends Component {
    render(){
      return (
        <div className='fogo'>
            <img src={fire} width={20}></img>
            <text className='consecutivo'>110</text>
        </div>
      );
      
      
        }
      
    }