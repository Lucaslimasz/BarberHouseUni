import React, { useEffect, useState } from "react";
import Moment from "moment";

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
  const [token, setToken] = useState();

  useEffect(() => {
     setToken(localStorage.getItem("token"));

    api
      .get("/create/solicitations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setInformations(response.data); 
      });

  }, [token]);

  function AcceptedSolicitation(_id) {

    console.log(_id);
    console.log(token);


    api
      .post(`/create/accepted/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("Agendado");
        window.location.reload();
      })
      .catch((response) => {
        console.log(response);
      });
  }

  function RemoveSolicitation(_id) {
    const token = localStorage.getItem("token");

    api
      .delete(`/create/solicitations/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("removido com sucesso!");
        window.location.reload();
      })
      .catch(() => {
        alert("error");
      });
  }

  return (
    <>
      <Navbar />
      <Container>
        <Items>
          {informations.map((information) => (
            <Item key={information._id}>
              <img src={Perfil} />
              <Information>
                <p>
                  <b>Nome: </b>
                  {information.name}
                </p>
                <p>
                  <b>Contato: </b>
                  {information.contact}
                </p>
                <p>
                  <b>Serviço: </b>
                  {information.type}
                </p>
                <p>
                  <b>Endereço: </b>
                  {information.street}, Nº {information.number}
                </p>
                <p>
                  <b>Dia: </b>
                  {Moment(information.date).format("DD/MM")}
                </p>
                <p>
                  <b>Horário: </b>
                  {information.hour}
                </p>
                <p>
                  <b>Obs: </b>
                  {information.message}
                </p>
                <Buttons>
                  <Accept onClick={() => AcceptedSolicitation(information._id)}>
                    Aceitar
                  </Accept>
                  <Refuse onClick={() => RemoveSolicitation(information._id)}>
                    Recusar
                  </Refuse>
                </Buttons>
              </Information>
            </Item>
          ))}
        </Items>
      </Container>
    </>
  );
}
