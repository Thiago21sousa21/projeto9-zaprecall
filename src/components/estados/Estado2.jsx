import styled from 'styled-components';
import certo from "./../../assets/icone_certo.png";
import erro from "./../../assets/icone_erro.png";
import quase from "./../../assets/icone_quase.png";


export default function Estado2(props){
    const {data, indice, setEstado, setAltura, setIcon, setCor, setManipulado, setArrIcon, arrIcon} = props
    let {setCont, cont, setBackground} = props;
    
   function setaPro3(icon, cor, tipoTest, numb){
    setEstado(3);
    setAltura(65);
    setIcon(icon);
    setCor(cor);
    cont++;
    setCont(cont);
    setManipulado(tipoTest);
    setBackground('#ffffff;');
    const newIcon = numb;
    const newArrIcon = [...arrIcon, newIcon];
    setArrIcon(newArrIcon);
   }

    return(
                <CsEstado2>
                  <p data-test="flashcard-text" > {data[indice].answer} </p>
                  <div className="alinhaButtonEstado2">
                    <button data-test="no-btn" onClick={()=>setaPro3(erro, 'red', "no-icon", 3)} className="red">Não lembrei</button>
                    <button data-test="partial-btn" onClick={()=>setaPro3(quase, 'orange', "partial-icon", 2)} className="orange" >Quase não lembrei</button>
                    <button data-test="zap-btn" onClick={()=>setaPro3(certo, 'green', "zap-icon", 1)} className="green" >Zap!</button>
                  </div>
                 </CsEstado2>
    )
  }

  const CsEstado2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .alinhaButtonEstado2{
    display: flex;
    justify-content: space-between;
  }

  button{
    width: 85px;
    height: 37px;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    cursor: pointer;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;

  }
  p{
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  .red{
    background: #FF3030;
  }
  .orange{
    background: #FF922E;
  }
  .green{
    background: #2FBE34;
  }
`;