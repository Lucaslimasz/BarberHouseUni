import React, { useState, useEffect } from "react";
// import Moment from 'react-moment';
import { useHistory } from "react-router";

import {
  Container,
  ContainerCard,
  Card,
  ContainerInputs,
  Input,
  Back,
} from "./styled";

import api from "../../config/api";

function Index(props) {
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [contact, setContact] = useState();
    const [type, setType] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [message, setMessage] = useState();

  const history = useHistory();

  const tokenUser = localStorage.getItem("tokenSVG");
  const id = props.match.params.id;

  

  function SubmitEdit(e) {
    e.preventDefault();

    const infos = { name, date, hour, contact, type, street, number, message };

    api
      .post(`/api/solicitations`, infos, {
        headers: {
          Authorization: tokenUser,
        },
      })
      .then(() => {
        alert("Criado com sucesso!");

        history.push("/");
      });
  }

  return (
    <>
      <Container>
        <ContainerCard>
          <Card>
            <Back onClick={() => history.push("/")} />
            <ContainerInputs onSubmit={SubmitEdit}>
              <h1>Adicionar agenda</h1>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
              />
              <Input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Data"
                type='date'
              />
              <Input
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                placeholder="Hora"
              />
              <Input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contato"
              />
              <Input
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Tipo de serviço"
              />
              <Input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Rua"
              />
              <Input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Número da residência"
              />
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Messagem / descrição"
              />
              <Input type="submit" />
            </ContainerInputs>
          </Card>
        </ContainerCard>
      </Container>
    </>
  );
}

export default Index;
