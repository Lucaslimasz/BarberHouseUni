import React from "react";

import { Wrapper, Information, Illustration, Form } from "./styles.js";

import Logo from '../../assets/logo.png'
import Illu from '../../assets/illustration.png'

export default function Index() {
  return (
    <>
      <Wrapper>
        <Illustration>
            <img src={Illu} />
        </Illustration>
        <Information>
            <Form>
                <a>

                

                </a>
                <input placeholder="Digite seu ID"/>
                <input type="submit" value="Enviar"/>
                <a>Esqueceu seu ID ?</a>
            </Form>
        </Information>
      </Wrapper>
    </>
  );
}
