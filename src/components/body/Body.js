import React, { Component } from 'react';
import './body.css'
import Buscar from '../Buscar/Buscar'
import Fogo from '../Fogo/Fogo';
import Pontos from '../Pontos/Pontos';


export default class Body extends Component {
    render(){
      return (
        <div className='body'>
            
            <div className='status'>
                <Fogo/>
                <Pontos/>
            </div>

          
        </div>
      );
    }
}