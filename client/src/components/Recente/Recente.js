import React, { useEffect, useState } from 'react';
import './recente.css'
import Pontos from '../Pontos/Pontos';
import Modal from 'react-modal'
import fechar from '../../assets/down.png'
import conteudos from '../../data/conteudos.json'
import aulas from '../../data/aulas.json'
import materias from '../../data/materias.json'
import axios from 'axios';

Modal.setAppElement('#root')


export default function Recente() {
  const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'))
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
      flexWrap: 'wrap',
      zIndex: 99


    },
    overlay: {
      backdropFilter: 'blur(5px)',
      background: 'rgba(0,0,0,0.44)',
    }
  }


  const cleanPercentage = (percentage) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
  };

  const Circle = ({ colour, percentage, fill }) => {
    const r = 40;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    return (
      <circle
        r={r}
        cx={150}
        cy={50}
        fill={fill}
        stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
        strokeWidth={"0.5rem"}
        strokeDasharray={circ}



        strokeDashoffset={percentage ? strokePct : 0}
      ></circle>
    );
  };

  const Text = ({ percentage }) => {
    return (
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"2rem"}
        className='textpercent'
      >
        {percentage}%
      </text>
    );
  };


  const Pie = ({ percentage, colour, fill }) => {
    const pct = cleanPercentage(percentage);

    return (
      <svg width={100} height={100} >
        <g transform={`rotate(-90 ${"100 100"})`} >
          <Circle colour="#2C2C2E" fill={fill} />
          <Circle colour={colour} percentage={pct} fill={'transparent'} />
        </g>
        <Text percentage={pct} />
      </svg>
    );
  };
  const [listAulas, setListAulas]  = useState([])
  

  useEffect(() => {
    axios.get('http://localhost:3001/getAulas').then((response) => {
      setListAulas(response.data)
      
    })
  }, [])

  


  const [listConteudos, setListConteudos]  = useState([])
  

  useEffect(() => {
    axios.get('http://localhost:3001/getConteudos').then((response) => {
      setListConteudos(response.data)
      
    })
  }, [])
  const recentesLocal = JSON.parse(localStorage.getItem('recentes'))

  const [recentes, setRecentes] = useState(recentesLocal);

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('recentes'))){
      
    setRecentes(JSON.parse(localStorage.getItem('recentes')))
  }else{
    setRecentes(localStorage.setItem('recentes', JSON.stringify([]))
    )
  }
  }, [recentes])

  
  return (

    <div className='recente'>
      {
      recentes?(<text className='introrecente'>RECENTES</text>):
      (<></>)
      }
      

      <div className='cards'>

    
        {
          
          
            recentes && recentes.length?
            
        recentes.map((r, i) => (

          <div key={i} onClick={() => {
            setModalData(r)
            handleOpenModal(true)
            
      
            
          }}
            className='card' style={{ backgroundColor: r.cor }}>
            <div className='horizontalrecente'>
              <div className='esquerda'>
                <text className='aulaassunto'>{r.assunto}</text>
                <Pie percentage={r.concluido} colour={r.cor2} fill={r.cor} />

              </div>
              <div className='direita'>
                <Pontos pontos={r.pontuacao} />
                <img className='aulaicone' src={r.icone}></img>
              </div>
            </div>





          </div>



        )): (<div style={{color: '#cdcdcd' }}>Nenhuma assunto aprendido ainda. Confira o primeiro!</div>)}
        
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

                        <a href={r.link} >
                          <div key={i}

                            className='conteudo' style={{ backgroundColor: '#48484A' }}

                          >


                            <div className='horizontalconteudo'>
                              <img className='conteudoicone' src={r.icone}></img>
                              <div className='vertical'>
                                <text className='aulaassunto'>{r.nome}</text>
                                <Pontos pontos={r.pontuacao} />
                              </div>
                            </div>

                            <div className='play' >
                              play
                            </div>




                          </div>
                        </a>
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