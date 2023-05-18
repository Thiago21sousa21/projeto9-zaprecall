import styled from "styled-components";
import FlashCard from "./FlashCard";


export default function Main(props){
  const {data, setCont, cont} = props;
    return(
      <CsMain>    
        {data.map( (element, i) => <FlashCard data={data} cont={cont} setCont={setCont} key={element.question} indice={i}/>)}        
      </CsMain>
    );
}

const CsMain = styled.div`

  margin-bottom: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;



