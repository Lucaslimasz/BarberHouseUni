import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const Information = styled.div`
  width: 50%;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.div`
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  a{
    color: #fff;
    text-align: center;
    font-size: 18px;
    margin: 10px 0;
  }

  input{
    width: 420px;
    height: 65px;
    font-size: 20px;
    padding-left: 15px;
    border-radius: 10px;
    color: #444;
    margin: 10px 0;
  }
  input[type="submit"]{
    font-size: 24px;
    font-weight: bold;
    padding: 0;
    cursor: pointer;
    background: var(--laranja-color);
    color: #000;
    transition: opacity .2s ease;
    &:hover{
      opacity: .9;
    }
  }
`;

export const Illustration = styled.div`
  width: 50%;

  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 570px;
    display: flex;
    justify-content: flex-end;
  }
`;
