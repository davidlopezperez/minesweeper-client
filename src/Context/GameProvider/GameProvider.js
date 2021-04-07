import React, { useReducer} from 'react'
import GameContext from './GameContext'
import GameReducer from './GameReducer'
import {

    ACCESS_TO_BOARD_SUCCESS,
    ACCESS_TO_BOARD_FAILED,
    SHOW_LOADING,
    HIDE_LOADING,
    SAVE_BOARD_SUCCESS,
    SAVE_BOARD_FAILED,
    LOG_OUT

} from '../types'
import clientAxios from '../../Axios/axiosClient'


const GameProvider = ({children}) => {

   const initialState = {

        player:null,
        board:[],
        _id:null,
        loading:false,
    }

    const [state, dispatch] = useReducer(GameReducer, initialState,)


    const letStart = async (data) => {

        ShowLoading()

        try {

        const resultado = await clientAxios.post('/api/game/new',data,{})

        dispatch({
            type:ACCESS_TO_BOARD_SUCCESS,
            payload:resultado.data
        })

        HideLoading()


            
        } catch (error) {
            console.log(error)

            dispatch({
                type:ACCESS_TO_BOARD_FAILED,
                payload:null
            })

            HideLoading()
        }
    }


    const getBoardIfStarted = async (id) => {

        ShowLoading()

        try {

            const result = await clientAxios.get(`/api/game/get-only-one/${id}`)

            dispatch({
                type:ACCESS_TO_BOARD_SUCCESS,
                payload:result.data
            })

            HideLoading()
            
        } catch (error) {
            dispatch({
                type:ACCESS_TO_BOARD_FAILED,
                payload:null
            })
            HideLoading()
        }

    }


    const SaveGame = async (board) => {

       

        ShowLoading()


        try {

            let data = {
                player:state.player,
                _id:state._id,
                board:board,
            }

            const result = await clientAxios.put(`/api/game/save/${state._id}`,data)

            dispatch({
                type:SAVE_BOARD_SUCCESS,
                payload:result.data
            })

            HideLoading()
            
        } catch (error) {
            
            dispatch({
                type:SAVE_BOARD_FAILED,
                payload:null
            })
            HideLoading()
        }
    }


    const ShowLoading = () => {

        dispatch({
            type:SHOW_LOADING,
            payload:true
        })
    }

    const HideLoading = () => {

        dispatch({
            type:HIDE_LOADING,
            payload:false
        })
    }


    const LogOut = () => {

        dispatch({
            type:LOG_OUT,
            payload:null,
        })
    } 


    return (

        <GameContext.Provider
            value={{ 
                board:state.board,
                loading:state.loading,
                letStart,
                getBoardIfStarted,
                SaveGame,
                LogOut}}
        >
            {children}
        </GameContext.Provider>
    )



}


export default GameProvider