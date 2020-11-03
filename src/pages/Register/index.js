import React, { useState } from "react"

import {useHistory, Link} from 'react-router-dom'

import { Wrapper, Information, Illustration, Form, Options } from "./styles.js";

import Logo from "../../assets/logo.png";
import Illu from "../../assets/illustration.png";

import api from "../../config/api";

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function submitRegister(e) {
    e.preventDefault();
    const informations = { name, email, password };

    api
      .post("/auth/register", informations)
      .then((response) => {
        history.push('/')
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
            <Options>
              <a>Esqueceu seu ID ?</a>
              <a>|</a>
              <Link to="/">Já possui uma conta ?</Link>
            </Options>
          </Form>
        </Information>
      </Wrapper>
    </>
  );
}
