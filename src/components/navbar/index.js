import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Limit } from "./styles";

export default function Navbar() {
  const history = useHistory();

  const [nameuser, setNameUser] = useState("");

  useEffect(() => {
    const nameUser = localStorage.getItem("name");
    setNameUser(nameUser);
  }, []);

  function Logout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <>
      <Container>
        <Limit>
          <div>
            Seja bem vindo, <b>{nameuser}</b>
          </div>
          <ul>
            <li>Extrato Mensal</li>
            <li>Agendas finalizadas</li>
            <li onClick={Logout}>Sair</li>
          </ul>
        </Limit>
      </Container>
    </>
  );
}
