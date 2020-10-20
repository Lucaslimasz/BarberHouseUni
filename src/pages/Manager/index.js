import React, { useEffect, useState } from "react";
import Moment from 'moment';

import Navbar from "../../components/navbar";

import Perfil from "../../assets/solicitation/foto.jpg";

import api from "../../config/api";

import {
  Container,
  Items,
  Item,
  Information,
  Buttons,
  Accept,
  Refuse,
} from "./styles";

export default function Manager() {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get("/create/solicitations", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setInformations(response.data);
      })
  }, [informations]);

  return (
    <>
      <Navbar />
      <Container>
        <Items>
        {informations.map((information) => (
            <Item>
              <img src={Perfil} alt="" />
              <Information>
                <p>
                  <b>Nome: </b>{information.name}
                </p>
                <p>
                  <b>Contato: </b>{information.contact}
                </p>
                <p>
                  <b>Serviço: </b>{information.type}
                </p>
                <p>
                  <b>Endereço: </b>{information.street}
                </p>
                <p>
                  <b>Dia: </b>{Moment(information.date).format('DD/MM')}
                </p>
                <p>
                  <b>Horário: </b>{information.hour}
                </p>
                <p>
                  <b>Obs: </b>{information.message}
                </p>
                <Buttons>
                  <Accept>Aceitar</Accept>
                  <Refuse>Recusar</Refuse>
                </Buttons>
              </Information>
            </Item>
        ))}
        </Items>
      </Container>
    </>
  );
}
