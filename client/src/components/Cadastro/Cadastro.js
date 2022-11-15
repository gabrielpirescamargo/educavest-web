import axios, * as others from 'axios';
import React, { Component, useState, useEffect } from 'react';
import './cadastro.css'



export default function Cadastro() {
  

    const [values, setValues] = useState();
     
    const handleaddValues = (value) => {
      setValues((prevValues) => ({
        ...prevValues,
        [value.target.name]: value.target.value,
      }));
    };

    const [cadastro, setCadastro] = useState([])
    const [listUsuarios, setListUsuarios]  = useState([])
    useEffect(() => {
      axios.get('http://localhost:3001/getUsuarios').then((response) => {
        setListUsuarios(response.data)
        
      })
    }, [])

    const handleClickButton = () => {
      listUsuarios.map((r, i) => {
        if(r.email === values.email)
        {
        cadastro.push(true)
        }
        else{
          cadastro.push(false)
        }
      })
      if(!cadastro.includes(true)){

        axios.post('http://localhost:3001/cadastro', {
          nome: values.nome, 
          senha: values.senha, 
          email: values.email,
          fogo: '0',
          pontos: '0',
          foto: 'https://i.imgur.com/LJadRtO.png',
          
          
        }).then((response) => {
          console.log(response)
          
        })
        alert('Usuário cadastrado com sucesso!')
      }
      else{
        alert('Email ja cadastrado!')
      }
    }
   
    
    return (
      <div className='cadastroAula'>
        <input name="nome" className='checkbox' placeholder='Nome' onChange={handleaddValues}></input>
        <input name="email" type={'email'} className='checkbox' placeholder='E-mail' onChange={handleaddValues}></input>
        <input name="senha" type={'password'} className='checkbox' placeholder='Senha' onChange={handleaddValues}></input>
        <input type={"submit"} className='checkbox-submit' value={"Cadastrar"} onClick={handleClickButton}></input>
        <a href='/login' style={{textDecoration: 'none', color: '#7073A9'}}> Fazer login</a>  
      </div>
    );
  }
