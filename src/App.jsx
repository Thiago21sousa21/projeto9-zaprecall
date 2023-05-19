import { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';
import data from './data';
import logo from './assets/logo.png'

function Welcome(){
  const [display, setDisplay] = useState("flex;")

  return(
    <CsWelcome display={display} >
      <img src={logo} alt="" />
      <p>ZapRecall</p>
      <button data-test="start-btn" onClick={() => setDisplay('none;')}>Iniciar Recall!</button>

    </CsWelcome>
  )
}
export default function App() {
  let [cont, setCont ] = useState(0);
  return (
    <CsApp>
        <Header/>
        <Main data={data} setCont={ setCont} cont={cont}/>
        <Footer data={data} cont={cont}/>
        <Welcome />
    </CsApp>
  )
}

const CsApp = styled.div`

  margin: 0 auto;
  background-color: #FB6B6B;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

`;

const CsWelcome = styled.div`
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;

  height: 100vh;
  width: 100%;

  background-color: #FB6B6B;

  display: ${(props)=> props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;  font-weight: 400;
  font-size: 18px;


  img{
    width: 136px;
    height: 161px;
    margin-bottom: 13px;
  }
  p{
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
    margin-bottom: 30px;
  }

  button{
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
  }
`;
