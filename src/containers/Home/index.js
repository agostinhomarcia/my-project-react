import React, { useState, useRef } from "react";
import {useHistory} from 'react-router-dom'

import axios from "axios";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import  H1  from "../../components/Title";
import ContainerItens  from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input
} from "./styles";

// essa estrutura chamamos de JSX

function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const inputName = useRef();
  const inputAge = useRef();
  // um estado no react é imutavél

  // React Hooks => ferramentas auxiliares

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
    history.push('/usuarios');

    
  }



  // React Hooks => useEffect efeito colateral
  // é chamada quando inicia minha aplicação
  // quando um estado que está dentro do array de dependencia do useEffect é alterado


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá! </H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button  onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
          {/* //padrao de função */}
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App;
