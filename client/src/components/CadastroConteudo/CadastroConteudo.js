import axios, * as others from 'axios';
import React, { Component, useState } from 'react';
import './CadastroConteudo.css'



export default function CadastroConteudo() {
  

    const [values, setValues] = useState();
     
    const handleaddValues = (value) => {
      setValues((prevValues) => ({
        ...prevValues,
        [value.target.name]: value.target.value,
      }));
    };

    const handleClickButton = () => {
      axios.post('http://localhost:3001/cadastroConteudo', {
        materia: values.materia, 
        assunto: values.assunto, 
        nome: values.nome,
        cor: '',
        pontuacao: values.pontuacao,
        icone: values.icone,
        link: values.video,
       
      
      })
      alert('Aula cadastrada com sucesso!')
    }
    
    return (
      <div className='cadastroAula'>
       <div className='title'> Cadastrar conteudo</div> 
        <input className='checkbox' placeholder='Assunto' name="assunto" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Matéria' name="materia" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Nome' name="nome" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Pontuação' name="pontuacao" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Icone (link)' name="icone" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Video aula(link)' name="video" onChange={handleaddValues}></input>
        <input className='checkbox-submit' type={"submit"} value={"Cadastrar conteudo"} onClick={handleClickButton}></input>
      </div>
    );
  }
