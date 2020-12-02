import React, { useEffect, useState } from "react";

import Moment from 'moment';

import Navbar from "../../components/navbar";

import Perfil from "../../assets/solicitation/foto.jpg";

import { Container, Items, Item, Information,} from "./styles";

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
              </Information>
            </Item>
          ))}
        </Items>
      </Container>
    </>
  );
}
