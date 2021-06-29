import { httpRequest } from '../../../utils/httpRequest' 
import {
    GET_MOVIES_LIST,
    SET_MOVIES_LIST_LOADING
} from '../../actionTypes/actionTypes'

export function getMoviesList() {
    return async (dispatch) => {
        try {
            dispatch({
                type: SET_MOVIES_LIST_LOADING,
            })
            const data = await httpRequest('get', 'movies.json?key=bf3c1c60');
            dispatch({
                type: GET_MOVIES_LIST,
                data
            })
        } catch (error) {
            console.error(error)
        }
    }
}