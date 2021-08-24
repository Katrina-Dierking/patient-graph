import * as types from '../config/actionTypes'

export const getDaysRequest = () => ({
    type: types.GET_DAYS_REQUEST
})

export const getDaysSuccess = (days) => ({
    type: types.GET_DAYS_SUCCESS, 
    payload: {
        days
    }
})