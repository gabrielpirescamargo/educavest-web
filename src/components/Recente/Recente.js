import React, { Component } from 'react';
import './recente.css'
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



export default class Recente extends Component {
    render(){
      return (
        <div className='recente'>
           <text className='introrecente'>RECENTE</text>

          <div className='cards'>
          
          
           {aulas.map((r, i) => (
            
              <div key={i} className='card' style={{backgroundColor: r.cor}}>
                <div className='horizontal'>
                <text className='aulaassunto'>{r.assunto}</text>  
                  <Pontos pontos={r.pontuacao}/>
                </div>
                <div className='horizontal2'>
                <img className='aulaicone' src={r.icone}></img>
                </div>
              </div>
              
            
            ))}
            </div>
        </div>
      );
      
      
        }
      
    }