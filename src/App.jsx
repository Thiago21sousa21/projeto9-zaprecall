import { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';
import data from './data';

export default function App() {
  let [cont, setCont ] = useState(0);
  return (
    <CsApp>
        <Header/>
        <Main data={data} setCont={ setCont} cont={cont}/>
        <Footer data={data} cont={cont}/>
    </CsApp>
  )
}

const CsApp = styled.div`

  margin: 0 auto;
  background-color: #FB6B6B;
  width: 100%;
  min-height: 100vh;
  /* div{
    border: 1px solid black;
  } */

  display: flex;
  flex-direction: column;

`;
