import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Wrapper, Information, Illustration, Form } from "./styles.js";

import Illu from "../../assets/illustration.png";

import api from "../../config/api";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function submitRequest(e) {
    e.preventDefault();
    const information = { email, password };

    api
      .post("/auth/authenticate", information)
      .then((response) => {
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("token", `Bearer ${response.data.token}`);

        history.push("/manager");
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
          <Form onSubmit={submitRequest}>
            <a></a>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Digite seu email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Digite sua senha"
            />
            <input type="submit" value="Enviar" />
            <a>Esqueceu seu ID ?</a>
          </Form>
        </Information>
      </Wrapper>
    </>
  );
}
