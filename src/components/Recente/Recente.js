import React from 'react';
import './recente.css'
import Pontos from '../Pontos/Pontos';
import Modal from 'react-modal'
import { useState } from 'react';
import fechar from '../../assets/down.png'
import conteudos from '../../data/conteudos.json'
import aulas from '../../data/aulas.json'
import materias from '../../data/materias.json'


Modal.setAppElement('#root')


export default function Recente() {
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
      height: '90%',
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
  return (

    <div className='recente'>
      <text className='introrecente'>RECENTE</text>

      <div className='cards'>


        {aulas.map((r, i) => (

          <div key={i} onClick={() => {
            setModalData(r)
            handleOpenModal(true)
            console.log(modalData)
          }}
            className='card' style={{ backgroundColor: r.cor }}>
            <div className='horizontal'>
              <text className='aulaassunto'>{r.assunto}</text>
              <Pontos pontos={r.pontuacao} />
            </div>
            <div className='horizontal2'>
              <img className='aulaicone' src={r.icone}></img>

            </div>

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

              <text className='assuntomodal'>{modalData.assunto}</text>



            </div>

            <text className='descricaomodal'>{modalData.descricao}</text>
            <div className='conteudos'>
              <text className='introrecente'>EXERCICIOS</text>
              <div className='conteudosassunto'>


                {


                  conteudos.map((r, i) => {
                   if (modalData.assunto === r.assunto)  { 
                    return(


                      <div key={i}
                        className='conteudo' style={{ backgroundColor: '#48484A' }}>


                        <div className='horizontalconteudo'>
                          <img className='conteudoicone' src={r.icone}></img>
                          <div className='vertical'>
                            <text className='aulaassunto'>{r.nome}</text>
                            <Pontos pontos={r.pontuacao} />
                          </div>
                        </div>

                        <div className='play'>
                          play
                        </div>




                      </div>
                    ) } 


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