import * as types from '../config/actionTypes'

export const increment = (items) => ({
    type: types.INCREMENT, 
    payload: {
        items
    }
})
export const decrement = (items) => ({
    type: types.DECREMENT, 
    payload: {
        items
    }
})
