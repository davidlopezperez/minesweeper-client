import React, { useContext, useEffect } from "react";
import { Container, Text ,Label,Form,Select,Input,Button} from "../Styles/styles";
import {useHistory} from 'react-router-dom'
import GameContext from '../../Context/GameProvider/GameContext'


const GameParams = () => {





  const history = useHistory()

  const gameContext = useContext(GameContext)
  const {letStart} = gameContext

  const [state, setState] = React.useState({
    userName: "",
    columns: 10,
    difficulty: "",
    bobms: 0,
  });

  const {userName,difficulty,columns,bobms} = state

  const BombsQuantity = (difficulty) => {
    if (difficulty === 0.2) {
      setState({
        ...state,
        bobms: 20,
      });
    } else if (difficulty === 0.3) {
      setState({
        ...state,
        bobms: 30,
      });
    } else if (difficulty === 0.5) {
      setState({
        ...state,
        bobms: 50,
      });
    } else {

      setState({
          ...state,
          bobms:0
      })
    }
  };


const handleSubmit = e => { 

  console.log("handleSubmit")

  e.preventDefault()

  if(difficulty === "" || bobms === 0 || userName === "" )return;

  letStart({userName,columns,difficulty})
  history.push("/Game")
  
}

  useEffect(() => {
    BombsQuantity(state.difficulty);
  }, [state.difficulty]);

  

  return (
    <Container
      width="40rem"
      height="50rem"
      display="flex"
      direction="column"
      bg="#ffffffea"
      align="center"
      radius="2rem"
    >
      <Container margin="1rem 0 ">
        <Text
          size="2.7rem"
          decoration="underline"
          margin="1rem 0"
          transform="uppercase"
        >
          Bienvenido al Juego
        </Text>
        <Text size="1.4rem" align="center">
          Elegi la cantidad de columnas para empezar
        </Text>
      </Container>

      <Form onSubmit={handleSubmit} width="60%" margin="2rem 0 0 0 ">

        <Container display="flex" direction="column" margin="2rem 0">
            <Label size="1.4rem" margin="0.5rem 0" weight="bold" htmlFor="columnas">User Name</Label>
            <Input onChange={e => setState({...state, userName:e.target.value})} type="text" placeholder="Ej: Pikachu" size="1.4rem" radius="0.8rem" border="1px solid #000" padding="0.6rem"/>
        </Container>

        <Container display="flex" direction="column" margin="2rem 0">
          <Label size="1.4rem" margin="0.5rem 0" weight="bold" htmlFor="columnas">Dificultad</Label>
          <Select value={state.difficulty} onChange={e => setState({...state, difficulty:Number(e.target.value)})} size="1.4rem" radius="1rem" padding="0.5rem">
            <option value="">----- Seleccionar -----</option>
            <option value="0.2">Facil</option>
            <option value="0.3">Medio</option>
            <option value="0.5">Dificil</option>
          </Select>
        </Container>

        <Container>
          <Text size="1.4rem">Cantidad de Bombas : {state.bobms}</Text>
        </Container>

        <Container margin="4rem 0 0 0" width="100%" display="flex" direction="column" justify="center" align="center" >
          <Button 
          type="submit" 
          bg="#037bfc" 
          width="100%" 
          height="4rem"  
          display="inline-block"
          radius="1.5rem"
          fontSize="1.5rem"
          border="none"
          color="#fff"
          transition="1.5s all ease"
          hover_bg="#0ad100"
          hover_color="#000"
          
          >
            jugar
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default GameParams;
