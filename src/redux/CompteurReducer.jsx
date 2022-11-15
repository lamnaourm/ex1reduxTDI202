import * as ActionsTypes from './ActionsTypes'

const initialState = {
    compteur : 100,
    solde : 20,
}

const CompteurReducer = (state=initialState, action) => {

    switch(action.type){
        case ActionsTypes.INCREMENT: return {...state, compteur: state.compteur+action.payload}
        case ActionsTypes.DECREMENT: return {...state, compteur: state.compteur-action.payload }
        case ActionsTypes.INIT: return {...state, compteur:action.payload }
    }
    return state;
}

export default CompteurReducer;
