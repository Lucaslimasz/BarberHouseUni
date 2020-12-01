import React, { useEffect, useState } from "react";

import Moment from 'moment';

import Navbar from "../../components/navbar";

import Perfil from "../../assets/solicitation/foto.jpg";

import { Container, Items, Item, Information, Trash, Finish } from "./styles";

import api from "../../config/api";

export default function Confirmed() {
  const [token, setToken] = useState();
  const [Informations, setInformations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(localStorage.getItem("token"));

    api
      .get("/create/accepted", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setInformations(response.data.schedule);
      });
  }, []);

  function RemoveSolicitation(_id) {
    const token = localStorage.getItem("token");

    api
      .delete(`/create/accepted/${_id}`, {
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

  function FinishSolicitation(_id){
    const token = localStorage.getItem('token');

    api.post(`/create/finished/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      alert('Finalizado com sucesso!');
      window.location.reload();
    }).catch(() => {
      alert('error')
    })
  }

  return (
    <>
      <Navbar />
      <Container>
        <Items>
          {Informations.map((information) => (
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
              </Information>
              <Trash onClick={() => RemoveSolicitation(information._id)}>x</Trash>
              <Finish onClick={() => FinishSolicitation(information._id)}>Finalizar</Finish>
            </Item>
          ))}
        </Items>
      </Container>
    </>
  );
}
