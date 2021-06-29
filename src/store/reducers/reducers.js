import { combineReducers } from 'redux';
import movies from './movies/movies'
import tags from './tags/tags'

export default combineReducers({
    movies,
    tags
});