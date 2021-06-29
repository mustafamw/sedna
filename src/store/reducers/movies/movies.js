import {
    GET_MOVIES_LIST,
    SET_MOVIES_LIST_LOADING
} from '../../actionTypes/actionTypes'

const initState = {
    data: [],
    loading: false,
    loaded: false,
    errors: undefined,
  }
  
const movies = (state = initState, action) => {
    const { type, data } = action;
    switch (type) {
        case GET_MOVIES_LIST:
            return {
                ...state,
                data,
                loaded: true,
                loading: false,
                errors: undefined
            }
        case SET_MOVIES_LIST_LOADING:
            return {
                ...state,
                loaded: false,
                loading: true,
                errors: undefined            }
        default:
            return state
    }
}

export default movies;