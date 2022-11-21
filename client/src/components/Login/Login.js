import React, { Component, useEffect, useState } from 'react';
import './login.css'
import axios from 'axios'
import Fogo from '../Fogo/Fogo'
import Pontos from '../Pontos/Pontos'
import user from '../../data/usuario.json'
import perfil from '../../assets/perfil.png'



export default function Login() {
    
    const [listUsuarios, setListUsuarios]  = useState([])
    const [usuario, setUsuario] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [login, setLogin] = useState([])
   

  
  useEffect(() => {
    axios.get('http://localhost:3001/getUsuarios').then((response) => {
      setListUsuarios(response.data)
      
    })
  }, [])
  
  const compararUsuario = (r) => {
    listUsuarios.map((r, i) => {
      if((r.email === email) && (r.senha ===senha)){
      login.push(true)
       localStorage.setItem('emailAtual', r.email);
       localStorage.setItem('senhaAtual', r.senha);
       localStorage.setItem('fotoAtual', r.foto);
       localStorage.setItem('usuarioAtual', JSON.stringify(r));
       

      }
      else{
        login.push(false)
      }
    })
    if(login.includes(true)){
      window.location.href ='/home'
    }
    else{
      alert('Dados incorretos!')
    }
  };
 
    return (
      <div className='cadastroAula'>
        <input id='email' autocomplete="off" placeholder='E-mail' className='checkbox' onChange={(e) => setEmail(e.target.value)} name='email' type={'email'} ></input>
        <input id='senha' placeholder='Senha' className='checkbox' onChange={(e) => setSenha(e.target.value)} name='senha' type={'password'}></input>
        <input type={'submit'} className='checkbox-submit' onClick={compararUsuario} value={'Login'}></input>
        <a href='/cadastro' style={{textDecoration: 'none', color: '#7073A9'}}> Fazer cadastro</a>  

      </div>
    );
  
}
