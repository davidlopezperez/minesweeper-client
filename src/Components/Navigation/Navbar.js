import React from "react";
import {useHistory} from 'react-router-dom'
import { Container, Button } from "../Styles/styles";

const Navbar = ({board,onClick,LogOut}) => {

    const history = useHistory()

    const LOGOUT = () => {

        localStorage.clear()
        LogOut()

        history.push("/")

    }

  return (
    <Container
      width="100%"
      height="6vh"
      bg="transparent"
      position="absolute"
      top="5rem"
      left="0"
      display="flex"
      align="center"
      justify="space-around"
    >

        <Button
        width="16rem"
        height="4rem"
        radius="1rem"
        border="1px solid #fff"
        color="#fff"
        fontSize="1.4rem"
        bg="none"
        transition="1s all ease"
        hover_bg="red"
        hover_color="#fff"
        onClick={()=>LOGOUT()}
      >
        Salir
      </Button>

      <Button
        width="16rem"
        height="4rem"
        radius="1rem"
        border="1px solid #fff"
        color="#fff"
        fontSize="1.4rem"
        bg="none"
        transition="1s all ease"
        hover_bg="#02ed12"
        hover_color="black"
        onClick={()=>onClick(board)}
      >
        Guardar Partida
      </Button>
    </Container>
  );
};

export default Navbar;
