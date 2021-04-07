import React, { useContext, useEffect, useState } from "react";
import { Cell, Container, MainContainer } from "../Styles/styles";
import GameContext from "../../Context/GameProvider/GameContext";
import  Navbar from '../Navigation/Navbar'

const Board = () => {


  let game = JSON.parse(localStorage.getItem("game"))

  const gameContext = useContext(GameContext);
  const { player, board,getBoardIfStarted,SaveGame,LogOut } = gameContext;

  const [gameBoard, setGameBoard] = useState([]);
  const [gameover , setGameOver] = useState(false)


  useEffect(() => {

    if(game && board.length < 1) {

      getBoardIfStarted(game);
    }

    if (board) {
      setGameBoard(board);
    }
  }, [player, board,game]);


  const GameOver = (game) => {

    game.map(cell => {

        if(cell.isRevealed && cell.value === "BOMB"){

            setGameOver(true)
            return;
        }
    })

  }

    
  const RevealCell = (column) => {

    let newGameBoard = JSON.parse(JSON.stringify(gameBoard));

      if(column.value === "0") {

        let Zero = newGameBoard.filter(cell => cell.value === "0") 

        Zero.forEach( v => v.isRevealed = true)

        setGameBoard(newGameBoard)
      }

    let cell = newGameBoard.filter((cell) => cell._id === column._id);

    cell[0].isRevealed = true;

    setGameBoard(newGameBoard);
  };


  const ToggleFlag = (e,column) => {

    e.preventDefault()

    let newGameBoard = JSON.parse(JSON.stringify(gameBoard));

    let cell = newGameBoard.filter((cell) => cell._id === column._id);

    cell[0].hasFlag = !cell[0].hasFlag;

    setGameBoard(newGameBoard);
  };


  useEffect(() => {

    GameOver(gameBoard)
    let board = JSON.parse(JSON.stringify(gameBoard))
    if(gameover){
        board.map(cell => cell.isRevealed = true)
        setGameBoard(board)
        return;
    }

  }, [gameBoard,gameover])




  return (
    <MainContainer>
      <Container
        width="250px"
        height="250px"
        bg="#fff"
        display="flex"
        wrap="wrap"
      >
         <Navbar board={gameBoard} LogOut={LogOut} onClick={SaveGame}/>
        {gameBoard.length < 1
          ? null
          : gameBoard.map((column) => (
              <Cell
                onClick={() => gameover? null : RevealCell(column)}
                onContextMenu={(e)=> ToggleFlag(e,column)}
                key={column._id}
                bg={
                  column.isRevealed && column.value === "BOMB"
                    ? "#f00000"
                    : column.isRevealed ? "#fff" : "grey"
                }
              >
                <>
                {column.isRevealed && column.value === "BOMB"
                  ? "💣"
                  : column.isRevealed && column.value == 0
                  ? ""
                  : column.isRevealed && column.value}

                  {column.hasFlag && !column.isRevealed &&"🚩"}
                </>
              </Cell>
            ))}
      </Container>
    </MainContainer>
  );
};

export default Board;
