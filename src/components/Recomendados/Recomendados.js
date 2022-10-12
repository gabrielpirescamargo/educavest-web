import React, { Component } from 'react';
import './recomendados.css'
import Pontos from '../Pontos/Pontos';

const aulas = [
  ,
  {
  "assunto": "Adicao",
  "materia": "Matematica",
  "cor": "#FFAB01",
  "pontuacao": "100",
  "icone": require("../../assets/matematica.png")

  
 }
 ,
{
  "assunto": "Canto",
  "materia": "Arte",
  "cor": "#B18CFE",
  "pontuacao": "100",
  "icone": require("../../assets/arte.png")
 },
{
  "assunto": "Gramatica",
  "materia": "Portugues",
  "cor": "#FE6250",
  "pontuacao": "100",
  "icone": require("../../assets/portugues.png")
 }
 ,
{
  "assunto": "Protons",
  "materia": "Ciencia",
  "cor": "#EE719E",
  "pontuacao": "100",
  "icone": require("../../assets/ciencia.png")
 }
  ,
  {
  "assunto": "Adicao",
  "materia": "Matematica",
  "cor": "#FFAB01",
  "pontuacao": "100",
  "icone": require("../../assets/matematica.png")

  
 }
 ,
{
  "assunto": "Canto",
  "materia": "Arte",
  "cor": "#B18CFE",
  "pontuacao": "100",
  "icone": require("../../assets/arte.png")
 },
{
  "assunto": "Gramatica",
  "materia": "Portugues",
  "cor": "#FE6250",
  "pontuacao": "100",
  "icone": require("../../assets/portugues.png")
 }
 ,
{
  "assunto": "Protons",
  "materia": "Ciencia",
  "cor": "#EE719E",
  "pontuacao": "100",
  "icone": require("../../assets/ciencia.png")
 }
  ,
  {
  "assunto": "Adicao",
  "materia": "Matematica",
  "cor": "#FFAB01",
  "pontuacao": "100",
  "icone": require("../../assets/matematica.png")

  
 }
 ,
{
  "assunto": "Canto",
  "materia": "Arte",
  "cor": "#B18CFE",
  "pontuacao": "100",
  "icone": require("../../assets/arte.png")
 },
{
  "assunto": "Gramatica",
  "materia": "Portugues",
  "cor": "#FE6250",
  "pontuacao": "100",
  "icone": require("../../assets/portugues.png")
 }
 ,
{
  "assunto": "Protons",
  "materia": "Ciencia",
  "cor": "#EE719E",
  "pontuacao": "100",
  "icone": require("../../assets/ciencia.png")
 }
  ,
  {
  "assunto": "Adicao",
  "materia": "Matematica",
  "cor": "#FFAB01",
  "pontuacao": "100",
  "icone": require("../../assets/matematica.png")

  
 }
 ,
{
  "assunto": "Canto",
  "materia": "Arte",
  "cor": "#B18CFE",
  "pontuacao": "100",
  "icone": require("../../assets/arte.png")
 },
{
  "assunto": "Gramatica",
  "materia": "Portugues",
  "cor": "#FE6250",
  "pontuacao": "100",
  "icone": require("../../assets/portugues.png")
 }
 ,
{
  "assunto": "Protons",
  "materia": "Ciencia",
  "cor": "#EE719E",
  "pontuacao": "100",
  "icone": require("../../assets/ciencia.png")
 }
  ,
  {
  "assunto": "Adicao",
  "materia": "Matematica",
  "cor": "#FFAB01",
  "pontuacao": "100",
  "icone": require("../../assets/matematica.png")

  
 }
 ,
{
  "assunto": "Canto",
  "materia": "Arte",
  "cor": "#B18CFE",
  "pontuacao": "100",
  "icone": require("../../assets/arte.png")
 },
{
  "assunto": "Gramatica",
  "materia": "Portugues",
  "cor": "#FE6250",
  "pontuacao": "100",
  "icone": require("../../assets/portugues.png")
 }
 ,
{
  "assunto": "Protons",
  "materia": "Ciencia",
  "cor": "#EE719E",
  "pontuacao": "100",
  "icone": require("../../assets/ciencia.png")
 }
  ,
  {
  "assunto": "Adicao",
  "materia": "Matematica",
  "cor": "#FFAB01",
  "pontuacao": "100",
  "icone": require("../../assets/matematica.png")

  
 }
 ,
{
  "assunto": "Canto",
  "materia": "Arte",
  "cor": "#B18CFE",
  "pontuacao": "100",
  "icone": require("../../assets/arte.png")
 },
{
  "assunto": "Gramatica",
  "materia": "Portugues",
  "cor": "#FE6250",
  "pontuacao": "100",
  "icone": require("../../assets/portugues.png")
 }
 ,
{
  "assunto": "Protons",
  "materia": "Ciencia",
  "cor": "#EE719E",
  "pontuacao": "100",
  "icone": require("../../assets/ciencia.png")
 }
  ,
  {
  "assunto": "Adicao",
  "materia": "Matematica",
  "cor": "#FFAB01",
  "pontuacao": "100",
  "icone": require("../../assets/matematica.png")

  
 }
 ,
{
  "assunto": "Canto",
  "materia": "Arte",
  "cor": "#B18CFE",
  "pontuacao": "100",
  "icone": require("../../assets/arte.png")
 },
{
  "assunto": "Gramatica",
  "materia": "Portugues",
  "cor": "#FE6250",
  "pontuacao": "100",
  "icone": require("../../assets/portugues.png")
 }
 ,
{
  "assunto": "Protons",
  "materia": "Ciencia",
  "cor": "#EE719E",
  "pontuacao": "100",
  "icone": require("../../assets/ciencia.png")
 }
 
]



export default class Recomendados extends Component {
    render(){
      return (
        <div className='recente'>
           <text className='introrecente'>RECOMENDADOS</text>

          <div className='cards'>
          
          
           {aulas.map((r, i) => (
            
              <div key={i} className='cardrecomendados' style={{backgroundColor: r.cor}}>
                
                  <Pontos pontos={r.pontuacao}/>
                
                <img className='aulaicone' src={r.icone}></img>
                
                <text className='aulaassunto'>{r.assunto}</text>  
                
              </div>
              
            
            ))}
            </div>
        </div>
      );
      
      
        }
      
    }