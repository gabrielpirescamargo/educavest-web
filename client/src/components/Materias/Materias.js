import React, { Component } from 'react';
import './materias.css'
import Pontos from '../Pontos/Pontos';
import Modal from 'react-modal'
import { useState, useEffect } from 'react';
import fechar from '../../assets/down.png'
import conteudos from '../../data/conteudos.json'
import materias from '../../data/materias.json'
import aulas from '../../data/aulas.json'
import axios from 'axios'

Modal.setAppElement('#root')




export default function Materias() {
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

  const [listAulas, setListAulas] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/getAulas').then((response) => {
      setListAulas(response.data)

    })
  }, [])

  const [pesquisa, setPesquisa] = useState('')

  const alterar = ((event) => {
    setPesquisa(event.target.value)
  })

  const [pesquisaFiltro, setPesquisaFiltro] = useState([])

   useEffect(() =>

   setPesquisaFiltro(materias.filter(a => {
    return a.materia.includes(pesquisa)

    })), [pesquisa])


  return (
    <div className='recente'>
      <div style={{diplay: 'flex', alignItems: 'center'}}>
        <text className='introrecente'>MATERIAS</text>
        <input
          className='search'
          placeholder='Pesquisar'
          value={pesquisa}
          onChange={alterar}
          autoFocus
          onFocus={alterar}
        ></input>
      </div>


      <div className='cards'>


        {pesquisaFiltro.map((r, i) => (

          <div onClick={() => {
            setModalData(r)
            handleOpenModal(true)
          }}
            key={i} className='cardmateria' >

            <img className='materiaicone' src={r.icone}></img>

            <text className='materiaassunto'>{r.materia}</text>

          </div>

        ))}
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

              <text className='assuntomodal'>{modalData.materia}</text>



            </div>

            <text className='descricaomodal'>{modalData.descricao}</text>
            <div className='conteudos'>
              <text className='introrecente'>ASSUNTOS</text>
              <div className='conteudosassunto'>


                {


                  listAulas.map((r, i) => {
                    if (modalData.materia === r.materia) {
                      return (


                        <div key={i}
                          className='conteudo' style={{ backgroundColor: '#48484A' }}>


                          <div className='horizontalconteudo'>
                            <img className='conteudoicone' src={r.icone}></img>
                            <div className='vertical'>
                              <text className='aulaassunto'>{r.assunto}</text>
                            </div>
                          </div>

                          




                        </div>
                      )
                    }


                  })


                }
              </div>
            </div>
          </div>




        </Modal>
      </div>
    </div>
  );


}

