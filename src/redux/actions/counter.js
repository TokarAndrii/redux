import {INCREMENT, DECREMENT} from "../actions/types"

export const add = () => ({
    type: INCREMENT,
    payload: 1,
})

export const sub = () => ({
    type: DECREMENT,
    payload: 1,
})
