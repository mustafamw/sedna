import {
    ADD_TAG_LIST,
    REMOVE_TAG_LIST,
    SEARCH_TAG_LIST
} from '../../actionTypes/actionTypes'

export function addTags(data) {
    return (dispatch) => {
        dispatch({
            type: ADD_TAG_LIST,
            data
        })
    }
}

export function removeTags(data) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_TAG_LIST,
            data
        })
    }
}

export function searchTags(data) {
    return (dispatch) => {
        dispatch({
            type: SEARCH_TAG_LIST,
            data
        })
    }
}