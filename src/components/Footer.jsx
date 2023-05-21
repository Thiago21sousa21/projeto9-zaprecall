import styled from 'styled-components';
import certo from "./../assets/icone_certo.png";
import erro from "./../assets/icone_erro.png";
import quase from "./../assets/icone_quase.png";
import sad from './../assets/sad.png'
import party from './../assets/party.png'


export default function Footer(props){
  const {data, cont, arrIcon }=props;
  

if( cont === 8 && arrIcon.includes(3) ){
  return(
          <CsFooter1 data-test="footer" >

          <div data-test="finish-text" >
            <img src={sad}/>
            <span data-test="finish-text" >Putz...</span>
          </div>
          <p>Ainda faltam alguns... </p><p> Mas não desanime!</p>
          <div className='result'>{cont}/{data.length} CONCLUÍDOS</div>
          <div>{arrIcon.map((elemento, index) => <img key ={index} src= {elemento === 1 ? certo : elemento === 2 ? quase : erro }/>)}</div>
          
        </CsFooter1>
  )
}else if (cont === 8 && !arrIcon.includes(3)){
  return (<CsFooter2 data-test="footer">
            <div data-test="finish-text" >
              <img src={party}/>
              <span data-test="finish-text" >Parabéns!</span>
            </div>
            <p>Você não esqueceu de </p><p>  nenhum flashcard!</p>
            <div className='result'>{cont}/{data.length} CONCLUÍDOS</div>
            <div>{arrIcon.map((elemento, index) => <img key ={index} src= {elemento === 1 ? certo : elemento === 2 ? quase : erro }/>)}</div>
          </CsFooter2>
  )
} else{
  return(
        <CsFooter data-test="footer" >
    
            <div className='result'>{cont}/{data.length} CONCLUÍDOS</div>
            <div>{arrIcon.map((elemento, index) => <img key ={index} src= {elemento === 1 ? certo : elemento === 2 ? quase : erro }/>)}</div>
      
        </CsFooter>
  )
}
    // <CsFooter data-test="footer" alturaFinal={alturaFinal}>
    
    //   <div className='result'>{cont}/{data.length} CONCLUÍDOS</div>
    //   <div>{arrIcon.map((elemento, index) => <img key ={index} src= {elemento === 1 ? certo : elemento === 2 ? quase : erro }/>)}</div>
      
    // </CsFooter>

}

const CsFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 70px;
  width: 100%;

  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  img{
    margin-right: 5px;
  }
`;

const CsFooter1 = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: 170px;
  width: 100%;

  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;


  img{
    margin-right: 5px;
  }
  div{
    display: flex;
    justify-content: center;
  }
`;
const CsFooter2 = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;


  height: 170px;
  width: 100%;

  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  img{
    margin-right: 5px;
  }

`;