import React, { useContext } from 'react'
import {Container,Text} from '../Styles/styles'
import GameContext from '../../Context/GameProvider/GameContext'

const Loading = () => {

    const gameContext = useContext(GameContext)
    const {loading} = gameContext;


    return (

        <Container width="100vw" height="100vh" zIndex="100" position="absolute" display={loading ? "flex" : "none "} align="center" direction="column" justify="center" bg="#070069" >
        <div className="spinner-grow text-warning" style={{width:"8rem",height:"8rem",}} role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <Text margin="5rem 0 0 0" size="3rem" transform="uppercase" color="#fff">Cargando ...</Text>
        </Container>
    )
}

export default Loading
