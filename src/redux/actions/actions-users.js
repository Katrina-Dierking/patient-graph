import * as types from '../config/actionTypes'

export const loginUserAction = (credentials) => {
    return {
        type: types.LOGIN_USER,
        credentials
    }
}
export const userLoggedIn = (user) => {
    return {
        type: types.USER_LOGGEDIN,
        user
    }
}
export const logoutUserAction = () => {
    return {
        type: types.LOGOUT_USER
    }
}
export const userLoggedOutAction = () => {
    return {
        type: types.USER_LOGGEDOUT
    }
}