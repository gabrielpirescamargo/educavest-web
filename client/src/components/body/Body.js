import React, { Component } from 'react';
import './body.css'
import Recente from '../Recente/Recente';
import Materias from '../Materias/Materias';
import Recomendados from '../Recomendados/Recomendados';

export default class Body extends Component {
  render() {
    return (
      <div className='body'>
        <div className='articles'>
          <text className='introtext'>
            O que voce gostaria de aprender hoje?
          </text>
          <Recente/>
          <Materias/>
          <Recomendados/>
          
        </div>

      </div>
    );
  }
}