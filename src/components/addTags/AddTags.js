import { useSelector, useDispatch } from 'react-redux'
import Items from '../items/Items';
import React, { useState } from 'react';
import './AddTags.scss'
import SelectedTag from '../selectedTags/SelectedTags';
import { addTags } from '../../store/actions/tags/tags'
import loadingIcon from '../../assets/image/icon/loading.gif'

function AddTags(props) {
    const { data, loading } = props;
    const [tags, addOrRemoveTags] = useState([]);
    const dispatch = useDispatch()
    
    const itemSelected = (data) => {
        const { active, id } = data;
        if(!active) {
            if(tags.length === 5) {
                return
            }
            addOrRemoveTags(state => [...state, data])
        } else {
            addOrRemoveTags(state => [...state.filter(e => e.id !== id)])
        }
    }

    const addTag = () => {
        dispatch(addTags(tags))
        addOrRemoveTags([])
    }

    return (
        <div className="add-tags">
            <div className="items">
                <h2>Movies Tag:</h2>
                { loading ? <img 
                    srcSet={loadingIcon} 
                    className="loading"
                    alt="loading" /> : null }
                <Items 
                    data={data} 
                    tags={tags}
                    itemSelected={itemSelected}/>
            </div>
            <div className="selected-tags">
                <h2>Selected tags:</h2>
                <SelectedTag 
                    data={tags}
                    tags={tags}
                    itemSelected={itemSelected}/>
                {tags.length === 5}
                <button
                    onClick={addTag}
                    disabled={tags.length === 0}>Save Tags</button>
            </div>
        </div>
    );
}

export default AddTags;