import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body.js';


function App() {
 
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
