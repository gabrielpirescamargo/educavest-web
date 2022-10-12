import React, { Component } from 'react';
import './materias.css'


const materias = [
  ,
  {
  "materia": "Matematica",
  "cor": "#FFAB01",
  "icone": require("../../assets/matematica.png")
 }
 ,
{
  "materia": "Arte",
  "cor": "#B18CFE",
  "icone": require("../../assets/arte.png")
 },
{
  "materia": "Portugues",
  "cor": "#FE6250",
  "icone": require("../../assets/portugues.png")
 }
 ,
{
  "materia": "Ciencia",
  "cor": "#EE719E",
  "icone": require("../../assets/ciencia.png")
 }


 
]



export default class Recente extends Component {
    render(){
      return (
        <div className='recente'>
           <text className='introrecente'>MATERIAS</text>

          <div className='cards'>
          
          
           {materias.map((r, i) => (
            
              <div key={i} className='cardmateria' >
              
                <img className='materiaicone' src={r.icone}></img>
                 
                <text className='materiaassunto'>{r.materia}</text>  

              </div>
                         
            ))}
            </div>
        </div>
      );
      
      
        }
      
    }