import React, { useState } from "react";

import history from 'history'

import { Wrapper, Information, Illustration, Form } from "./styles.js";

import Logo from "../../assets/logo.png";
import Illu from "../../assets/illustration.png";

import api from "../../config/api";

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitRegister(e) {
    e.preventDefault();
    const informations = { name, email, password };

    api
      .post("/auth/register", informations)
      .then((response) => {
        window.location.reload();
      })
      .catch((response) => {
        alert("erro na requisição");
      });
  }

  return (
    <>
      <Wrapper>
        <Illustration>
          <img src={Illu} />
        </Illustration>
        <Information>
          <Form onSubmit={submitRegister}>
            <a></a>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
            <input onClick={submitRegister} type="submit" value="Enviar" />
            <a>Esqueceu seu ID ?</a>
          </Form>
        </Information>
      </Wrapper>
    </>
  );
}
