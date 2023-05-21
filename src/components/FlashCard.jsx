import { useState } from "react";
import styled from "styled-components";
import Estado0 from "./estados/Estado0";
import Estado1 from "./estados/Estado1";
import Estado2 from './estados/Estado2';
import Estado3 from "./estados/Estado3";



export default function FlashCard(props){
    const [altura, setAltura ] = useState(65);
    const[icon, setIcon] = useState('');
    const[cor, setCor] = useState('');
    const [background, setBackground ] = useState('#ffffff;');
    const [estado, setEstado ] = useState(0);
    const[manipulado, setManipulado]= useState('');
    const {element, indice, data, setCont, cont, setArrIcon, arrIcon} = props;    


    function verificaRetorna(){
      if( estado == 0 ){
        return <Estado0 setBackground={setBackground} indice={indice} setAltura={setAltura} setEstado={setEstado} verificaRetorna={verificaRetorna}/>
      }else if( estado == 1 ){
        return <Estado1 data={data} indice={indice} setEstado={setEstado}/>
      }else if(estado == 2 ){
        return <Estado2 arrIcon={arrIcon} setArrIcon={setArrIcon}  setBackground={setBackground} setManipulado={setManipulado} data={data} indice={indice} setEstado={setEstado} setAltura={setAltura} setIcon={setIcon} setCor={setCor} setCont={setCont} cont={cont}/>
      } else {
        return <Estado3 manipulado={manipulado} indice={indice} icon={icon} cor={cor}/>
      }
    }

    return(
        <CsflashCard data-test="flashcard" altura={altura} background={background} >
                {/* {estado === 0 ? <p>Pergunta {indice + 1 }</p> : estado == 1 ? <p>{data[indice].question}</p> : <p> resposta teste </p>}
                {estado === 0 ? <ion-icon onClick={virarCarta} name="play-outline"></ion-icon> : estado == 1 ? <img onClick={()=> setEstado(2)} src={setaVirar}/> : null} */}
                {/* {estado == 0 ? <Estado0 setBackground={setBackground} indice={indice} setAltura={setAltura} setEstado={setEstado} verificaRetorna={verificaRetorna}/>: estado == 1 ? <Estado1 data={data} indice={indice} setEstado={setEstado}/> : estado == 2 ? <Estado2 setBackground={setBackground} setManipulado={setManipulado} data={data} indice={indice} setEstado={setEstado} setAltura={setAltura} setIcon={setIcon} setCor={setCor} setCont={setCont} cont={cont}/> : <Estado3 manipulado={manipulado} indice={indice} icon={icon} cor={cor}/>} */}
                {verificaRetorna()}
        </CsflashCard>
    );
  }

  const CsflashCard = styled.div`
    width: 300px;
    height: ${(props) => props.altura }px;
    padding: 22px;
    border-radius: 5px;

    background: ${ props => props.background};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    /* div{ 
      border: 1px solid black;
    } */

    margin-bottom: 25px;

    display: flex;
    align-items: center;

    /* ion-icon{
        position: absolute;
        bottom:50%;
        right:22px;
        transform: translate(0, 50%);
        font-size: 23px;
    } */
`;





