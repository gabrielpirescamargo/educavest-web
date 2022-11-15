import React from 'react';
import './recomendados.css'
import Pontos from '../Pontos/Pontos';
import Modal from 'react-modal'
import { useState, useEffect } from 'react';
import fechar from '../../assets/down.png'
import conteudos from '../../data/conteudos.json'
import aulas from '../../data/aulas.json'
import materias from '../../data/materias.json'
import axios from 'axios'
import Buscar from '../Buscar/Buscar';




Modal.setAppElement('#root')





export default function Recomendados() {
  const [modalData, setModalData] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }
  const customStyles = {
    content: {
      top: '15%',
      left: '40%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '80%',
      height: '80%',
      transform: 'translate(-40%, -10%)',
      padding: '0px',
      border: '0px',
      background: '#2C2C2E',
      display: 'flex',
      flexWrap: 'wrap'


    },
    overlay: {
      backdropFilter: 'blur(5px)',
      background: 'rgba(0,0,0,0.44)',
    }
  }
  function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
  }

  const [listAulas, setListAulas] = useState([])
  const [recentes, setRecentes] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/getAulas').then((response) => {
      setListAulas(response.data.filter(a => {
        return a.assunto.toLowerCase()
    
      }).sort((a, b) => a.assunto.localeCompare(b.assunto)))

    })
  }, [])


  const [listConteudos, setListConteudos] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/getConteudos').then((response) => {
      setListConteudos(response.data)
      setRecentes(JSON.parse(localStorage.getItem('recentes')))
   

    })

  }, [])

  const [pesquisa, setPesquisa] = useState('')
  const [pesquisaFiltro, setPesquisaFiltro] = useState([])


  useEffect(() =>

    setPesquisaFiltro(listAulas.filter(a => {
      return a.assunto.toLowerCase().includes(pesquisa.toLowerCase())

    }).sort((a, b) => a.assunto.localeCompare(b.assunto))), [pesquisa])

    const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'))
    
   const somarPontos = (e => {
    usuarioAtual.pontos = parseInt(usuarioAtual.pontos)+ parseInt(e)
    localStorage.setItem('usuarioAtual', JSON.stringify(usuarioAtual));

    console.log (usuarioAtual)
   

   })
   const abrirAula = (e => {

    window.location.href = e

 
   })
    


  const alterar = ((event) => {
    setPesquisa(event.target.value)
  })




  const setRecentesArray = ((e) => {
    recentes.unshift(e)
    localStorage.setItem('recentes', JSON.stringify(recentes));

  })
  return (

    <div className='recente'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <text className='introrecente'>TODOS OS ASSUNTOS</text>
        <input
          className='search'
          placeholder='Pesquisar'
          value={pesquisa}
          onChange={alterar}
          autoFocus
          onFocus={alterar}
        ></input>
      </div>


      <div className='cardsRecomendados'>


        {
           pesquisaFiltro.length > 0 ?

          pesquisaFiltro.map((r, i) => (

            <div onClick={() => {
              setModalData(r)
              handleOpenModal(true)
              setRecentesArray(r)

            }}
              key={i} className='cardrecomendados' style={{ backgroundColor: r.cor }}>

              <text className='aulaassunto'>{r.assunto}</text>

              <img className='aulaicone' src={r.icone}></img>

              <Pontos pontos={r.pontuacao} />

            </div>


          )) :
          listAulas.map((r, i) => (
            

            <div onClick={() => {
              setModalData(r)
              handleOpenModal(true)
              setRecentesArray(r)

            }}
              key={i} className='cardrecomendados' style={{ backgroundColor: r.cor }}>

              <text className='aulaassunto'>{r.assunto}</text>

              <img className='aulaicone' src={r.icone}></img>

              <Pontos pontos={r.pontuacao} />

            </div>
        ))
        }
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}

        >


          <div className='top' style={{ background: modalData.cor }} >
            <div onClick={handleCloseModal} className='closediv'>
              <img className='close' src={fechar}></img>
              <text className='closetext' >Fechar </text>
            </div>
            <div className='infomodal'>
              <img className='aulaiconemodal' src={modalData.icone}></img>

              <text className='assuntomodal'>{modalData.assunto}</text>



            </div>

            <text className='descricaomodal'>{modalData.descricao}</text>
            <div className='conteudos'>
              <text className='introrecente'>EXERCICIOS</text>
              <div className='conteudosassunto'>


                {


                  listConteudos.map((r, i) => {
                    if (modalData.assunto === r.assunto) {
                      return (


                        <div key={i}
                        onClick={(e)=>{

                          somarPontos(r.pontuacao)
                          abrirAula(r.link)
                        
                        }}
                        
                          className='conteudo' style={{ backgroundColor: '#48484A' }}>


                          <div className='horizontalconteudo'>
                            <img className='conteudoicone' src={r.icone}></img>
                            <div className='vertical'>
                              <text className='aulaassunto'>{r.nome}</text>
                              <Pontos pontos={r.pontuacao} />
                            </div>
                          </div>

                          



                        </div>
                      )
                    }


                  }).sort((a, b) => a.assunto.localeCompare(b.assunto))


                }
              </div>
            </div>
          </div>




        </Modal>

      </div>
    </div>
  );


}
