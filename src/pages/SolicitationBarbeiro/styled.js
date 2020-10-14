import styled from "styled-components";

import { TiEdit } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";
import { MdLibraryAdd, MdDeleteForever } from "react-icons/md";
import { CgEditMarkup } from "react-icons/cg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";

// container geral
export const Container = styled.section`
  width: 100%;
`;

// container do card
export const ContainerCard = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 70%;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// card
export const Card = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 30px 10px;
  position: relative;
`;

//  container dos botões de editar e excluir
export const Buttons = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 0 0 5px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9e8e8;
  position: absolute;
  top: 92%;

  > a {
    display: flex;
    align-items: center;
  }
`;

// icone de lixo
export const Trash = styled(FaTrashAlt)`
  width: 20px;
  height: 20px;
  margin: 0 10px;

  cursor: pointer;
  &:active {
    position: relative;
    top: 2px;
    left: 2px;
  }
`;

export const More = styled(MdLibraryAdd)`
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  margin: 0 5px;
`;

// icone de editar
export const Edit = styled(TiEdit)`
  width: 26px;
  height: 26px;
  margin: 0 10px;

  position: relative;
  top: 2px;
  left: 2px;
`;

export const TiDelete = styled(MdDeleteForever)`
  width: 35px;
  height: 35px;
  background: #00bda6;
  color: #fff;
  border-radius: 50px;
  padding: 5px;

  position: absolute;
  right: -10px;
  top: -10px;
  cursor: pointer;

  &:active {
    top: -8px;
    right: -11px;
  }
`;

export const EditeUnity = styled(CgEditMarkup)`
  width: 20px;
  height: 20px;

  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
  cursor: pointer;
`;

// itens
export const Item = styled.form`
  width: 250px;
  background: #cdcdcd;
  flex-shrink: 0;
  padding: 30px 10px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  border-radius: 5px;

  > input {
    border: none;
    padding: 5px;
  }
  > input[type="submit"] {
    padding: 5px 20px;
    margin-top: 20px;
    cursor: pointer;
  }
  > h1 {
    background: #00bda6;
    padding: 4px 10px;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;

    position: absolute;
    top: -10px;
    right: -10px;

    /* não selecionar */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:active {
      top: -9px;
      right: -11px;
    }
  }

  p {
    width: 95%;
    font-size: 20px;
    margin: 8px 0;
    font-weight: 500;
    text-align: center;
    color: #454545;

    b {
      padding: 0 5px;
    }
  }
`;

export const Times = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  cursor: pointer;

  > p {
    > b {
      color: #009e9b;
    }
  }
`;

export const ContainerEdit = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 100;

  > div {
    width: 500px;
    height: 300px;
    background: #cdcdcd;
    border-radius: 5px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > input {
      width: 90%;
      margin: 10px;
      padding: 10px;
      border-radius: 15px;
      font-size: 20px;
      &[type="submit"] {
        color: #fff;
        background: #00bda6;
        cursor: pointer;
        position: relative;

        &:active {
          top: 2px;
          left: 2px;
        }
      }
    }
  }
`;

export const ButtonsEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Back = styled(IoMdArrowRoundBack)`
  width: 30px;
  height: 30px;
  margin: 15px 0;
  cursor: pointer;
`;

export const EditDelete = styled(FaRegTrashAlt)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 15px 0;
`;

// container
export const WrapperNav = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  max-width: 1110px;
  margin: auto;
  flex-direction: row-reverse;
  justify-content: space-between;  

  > p {
    margin: 0 20px;
  }
  >div{
    display: flex;
  }
`;

// Logout
export const LogoutNav = styled(FaPowerOff)`
 background: #a6a6a6;
    padding: 12px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: opacity 0.2s;
   
    width: 56px;
    height: 56px;
    color: #fff;
    margin: 0 20px;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
`;

// botão de adicionar
export const AddNav = styled(SiAddthis)`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  color: #00bda6;
  cursor: pointer;
  &:hover {
      opacity: 0.7;
      cursor: pointer;
  }
`;
