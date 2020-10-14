import styled from "styled-components";

import { IoMdArrowRoundBack } from "react-icons/io";

// container
export const Container = styled.section`
  width: 100%;
  height: 100vh;
  /* background: #e9e9e9; */
  display: flex;
  align-items: center
`;

// container do card
export const ContainerCard = styled.div`
  max-width: 1110px;
  width: 80%;
  height: 80%;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 35px;
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

// card
export const Card = styled.div`
  width: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
`;

// container dos inputs
export const ContainerInputs = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// input
export const Input = styled.input`
  border: none;
  width: 600px;
  height: 60px;
  padding: 15px;
  background: #f2f2f2;
  border-radius: 30px;
  margin: 10px auto;
  font-size: 20px;

  /* 
    botão submit
   */
  &[type="submit"] {
    background-color: #564308;
    font-size: 27px;
    color: #fff;
    cursor: pointer;

    &:active {
      position: relative;
      top: 2px;
      left: 2px;
    }
  }
`;

// botão voltar
export const Back = styled(IoMdArrowRoundBack)`
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
`;
