import {ACCESS_TO_BOARD_SUCCESS,ACCESS_TO_BOARD_FAILED, SHOW_LOADING, HIDE_LOADING, SAVE_BOARD_SUCCESS, SAVE_BOARD_FAILED, LOG_OUT} from '../types'


export default (state,action) => {

    switch(action.type){

        case ACCESS_TO_BOARD_SUCCESS:
        case SAVE_BOARD_SUCCESS:

        localStorage.setItem("game", JSON.stringify(action.payload._id))
            return {
                ...state,
                player:action.payload.player,
                board:action.payload.board,
                _id:action.payload._id,
            }

        case ACCESS_TO_BOARD_FAILED:
        case SAVE_BOARD_FAILED:
        case LOG_OUT:
            return {
                ...state,
                player:action.payload,
                board:action.payload,
                _id:action.payload
            }  

        case SHOW_LOADING:
        case HIDE_LOADING:
            return {
                ...state,
                loading:action.payload
            }


        default:
            return state
    }



}