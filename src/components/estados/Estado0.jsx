import styled from 'styled-components';

export default function Estado0(props){

    const {indice, setAltura, setEstado, verificaRetorna} = props;

    function virarCarta(){
        setAltura(130);
        setEstado(1);
        verificaRetorna();
    }

    return(
            <CsEstado0>
                <p data-test="flashcard-text" >Pergunta {indice + 1 }</p>
                <ion-icon data-test="play-btn" onClick={virarCarta} name="play-outline"></ion-icon>
             </CsEstado0>
    )
  }

  const CsEstado0 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  p{
    font-size: 16px;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
  }
  ion-icon{
    font-size: 23px;
    cursor: pointer;
  }
`;