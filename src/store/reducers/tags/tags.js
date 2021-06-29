import {
    ADD_TAG_LIST,
    REMOVE_TAG_LIST,
    SEARCH_TAG_LIST
} from '../../actionTypes/actionTypes';

const initState = {
    data: [],
    orgData: [],
    actionType: undefined
};
  
const tags = (state = initState, action) => {
    const { type, data } = action;
    switch (type) {
        case ADD_TAG_LIST:
            return {
                ...state,
                data: [...state.data, data],
                orgData: [...state.orgData, data],
                actionType: ADD_TAG_LIST 
            };
        case REMOVE_TAG_LIST:
            return {
                data: state.data.filter((e, i) => i !== data),
                orgData: state.orgData.filter((e, i) => i !== data),
                actionType: REMOVE_TAG_LIST 
            };
        case SEARCH_TAG_LIST:
            return {
                ...state,
                data: state.orgData.filter((e) => {
                    return e.find((val) => val.name.toLowerCase().includes(data.toLowerCase()));
                }),
                actionType: SEARCH_TAG_LIST 
            };
        default:
            return state;
    }
};

export default tags;