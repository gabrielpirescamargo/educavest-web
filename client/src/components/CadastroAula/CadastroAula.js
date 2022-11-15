import axios, * as others from 'axios';
import React, { Component, useState } from 'react';
import './CadastroAula.css'



export default function CadastroAula() {
  

    const [values, setValues] = useState();
     
    const handleaddValues = (value) => {
      setValues((prevValues) => ({
        ...prevValues,
        [value.target.name]: value.target.value,
      }));
    };

    const handleClickButton = () => {
      axios.post('http://localhost:3001/cadastroAula', {
        assunto: values.assunto, 
        materia: values.materia, 
        descricao: values.descricao,
        pontuacao: values.pontuacao,
        cor: values.cor,
        cor2: values.cor2,
        icone: values.icone,
        concluido: values.concluido,
       
      
      })
      alert('Aula cadastrada com sucesso!')
    }
    
    return (
      <div className='cadastroAula'>
       <div className='title'> Cadastrar aula</div> 
        <input className='checkbox' placeholder='Assunto' name="assunto" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Matéria' name="materia" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Descrição' name="descricao" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Pontuação' name="pontuacao" onChange={handleaddValues}></input>
        Cor #1
        <input className='color' type={'color'} placeholder='Cor #1' name="cor" onChange={handleaddValues}></input>
        Cor #2
        <input className='color' type={'color'} placeholder='Cor #2' name="cor2" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Icone (link)' name="icone" onChange={handleaddValues}></input>
        <input className='checkbox' placeholder='Concluido %' name="concluido" onChange={handleaddValues}></input>
        <input className='checkbox-submit' type={"submit"} value={"Cadastrar aula"} onClick={handleClickButton}></input>
      </div>
    );
  }
