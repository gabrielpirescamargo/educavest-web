import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body.js';
import Login from './components/Login/Login.js';
import Cadastro  from './components/Cadastro/Cadastro.js';
import CadastroAula  from './components/CadastroAula/CadastroAula.js';
import CadastroConteudo  from './components/CadastroConteudo/CadastroConteudo.js';
import Axios from 'axios'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const Home = (() =>{
  return(
        <>
          <Header/>
          <Body/>
          <Footer/>
        </>
    )
})


function App() {
  
 
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/cadastro' element={<Cadastro/>}/>
              <Route path='/cadastroAula' element={<CadastroAula/>}/>
              <Route path='/cadastroConteudo' element={<CadastroConteudo/>}/>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
