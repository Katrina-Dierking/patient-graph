import * as types from '../config/actionTypes'

const initialState ={
    count: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.INCREMENT:  {
            return {
                items: {...state, count: state.count + 1},
            }
        }
        case types.DECREMENT:  {
            return {
                items: {...state, count: state.count - 1},
            }
        }
        default: {
            return state;
        }
    }
}