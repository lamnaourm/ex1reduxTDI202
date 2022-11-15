import * as ActionsTypes from './ActionsTypes'

export const increment = (step) => {
    return {
        type: ActionsTypes.INCREMENT,
        payload : step
    }
}


export const decrement = (step) => {
    return {
        type: ActionsTypes.DECREMENT,
        payload : step
    }
}


export const init = (step) => {
    return {
        type: ActionsTypes.INIT,
        payload : step
    }
}