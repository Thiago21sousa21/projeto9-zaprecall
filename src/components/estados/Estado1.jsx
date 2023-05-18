import styled from 'styled-components';
import setaVirar from "./../../assets/seta_virar.png";

export default function Estado1(props){

    const {data, indice, setEstado } = props;

    return(
            <CsEstado1>
              <p data-test="flashcard-text" >{data[indice].question}</p>
              <img data-test="turn-btn" onClick={()=> setEstado(2)} src={setaVirar}/>
            </CsEstado1>
    )
  }

const CsEstado1 = styled.div`
width: 100%;
height: 100%;
position: relative;

  p{
    font-family: 'Recursive', sans-serif;
    font-weight: 400; 
  }

  img{
    position: absolute;
    right:0;
    bottom: 0;
    cursor: pointer;

  }
`;