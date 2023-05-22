import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import styled from 'styled-components';
import data from './data';

export default function App() {
  const [cont, setCont ] = useState(0);
  const [arrIcon, setArrIcon ] = useState([]);

  return (
    <CsApp>
        <Header/>
        <Main arrIcon={arrIcon} setArrIcon={setArrIcon} data={data} setCont={ setCont} cont={cont}/>
        <Footer arrIcon={arrIcon}  data={data} cont={cont}/>
        <Welcome />
    </CsApp>
  );
}

const CsApp = styled.div`

  margin: 0 auto;
  background-color: #FB6B6B;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

`;


