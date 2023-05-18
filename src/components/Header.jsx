import logo from "./../assets/logo.png";
import styled from 'styled-components';


export default function Header(){
    return(
      <CsHeader>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
      </CsHeader>
    );
  }

  const CsHeader = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 48px;
    margin-bottom: 60px;
    img{
      width: 52px;
      height: 60px;
    }
    h1{
      font-size: 52px;
      color: #ffffff;
      font-family: 'Righteous', cursive;
    }
  `;
