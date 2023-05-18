import styled from 'styled-components';

export default function Footer(props){
  const {data, cont}=props;
  return(
    <CsFooter>
      {cont} / {data.length} CONCLUÍDOS
    </CsFooter>
  );
}

const CsFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;

  display: flex;
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

`;