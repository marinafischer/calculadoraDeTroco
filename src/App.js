import React, {useState} from 'react';
import styled from 'styled-components';

const Site = styled.div `
    justify-content: center;

`;

const Input = styled.input `
    widh: 400px;
    height: 30px;
    font-size: 16px;
    padding:10px
    border: 1px solid black;
`;

const TituloGrande = styled.h1 `
    color: pink;
`;

function App () {
    const [conta, setConta] = useState();
    const [gorjeta, setGorjeta] = useState(10);

  return (
    <Site> 
      <TituloGrande>CALCULADORA DE GORJETA</TituloGrande>
      <p>Quanto deu sua conta?</p>
      <Input type="number" value={conta} onChange={(e)=>setConta(e.target.value)}/> 
      <p>Qual percentual de gorjeta?</p>
      <Input type="number" value={gorjeta} onChange={(e)=>setGorjeta(e.target.value)}/> 
      <hr></hr>
      
      {conta > 0 &&
      <>
        <p>Sub-total R${conta}</p>
        <p>Gorjeta ({gorjeta}%): R$ {conta*gorjeta/100}</p>
        <h3> Total: {Number(conta) + (conta*gorjeta/100)} R$ </h3>
      </>
      }
       
    </Site>
  );
}

export default App;