import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';
import { getItem, setItem } from '../utils/localStorage';
import { SEARCH_TAG_LIST } from '../store/actionTypes/actionTypes';

const reduxStateKey = 'reduxState'
const persistedState = getItem(reduxStateKey) ? getItem(reduxStateKey) : {};

export const store = createStore(reducers,
  persistedState, 
  compose(
    applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe((test) => {
  const { tags } = store.getState();
  if(tags.actionType !== SEARCH_TAG_LIST) {
    setItem(reduxStateKey, { tags })
  }
})