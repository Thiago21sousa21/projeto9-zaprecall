import styled from 'styled-components';

export default function Estado3(props){

    const {indice, icon, cor, manipulado } = props;

    return(
            <CsEstado3>
                <p data-test="flashcard-text" className= {cor} >Pergunta {indice + 1 }</p>
                <img data-test={manipulado} src={icon} />
             </CsEstado3>
    )
  }

  const CsEstado3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  .red{
    color: red;
  }
  .green{
    color: green;
  }
  .orange{
    color: orange;
  }
  p{
    font-size: 16px;
    text-decoration: line-through;
    font-family: 'Recursive';
    font-weight: 700;
  }
  ion-icon{
    font-size: 23px;
  }
`;