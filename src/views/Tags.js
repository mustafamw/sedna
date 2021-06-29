import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getMoviesList } from '../store/actions/movies/movies';
import { removeTags, searchTags } from '../store/actions/tags/tags';
import AddTags from '../components/addTags/AddTags';
import Tags from '../components/tags/Tags';
import './Tags.scss';

function TagsView() {

  const movies = useSelector(state => state.movies);
  const tags = useSelector(state => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  const removeTag = (index) => {
    dispatch(removeTags(index));
  };

  const searchTag = (value) => {
    dispatch(searchTags(value));
  };

  return (
    <div className="tags-view">
      <AddTags {...movies} />
      <Tags 
        {...tags}
        removeTags={removeTag}
        searchTags={searchTag}
         />
    </div>
  );
}

export default TagsView;
