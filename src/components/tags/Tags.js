import Tag from './tag/Tag';
import './Tags.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Tags(props) {
    const [search, searched] = useState('');
    const { data, removeTags, searchTags } = props

    const tags = data.map((e, i) => (
        <Tag 
            key={i}
            data={e}
            index={i}
            removeTags={removeTags}/>
    ));

    const searchTag = (event) => {
        const { value } = event.target;
        searched(value);
        if(event.code === 'Enter') {
            searchTags(value);
            return;
        }
        searchTags(value);
    }

    return (
        <>
            <h2>Saved Tags:</h2>
            <div className="search-tags">
                <input 
                    type="text" 
                    placeholder="Search..."
                    className="search"
                    onChange={searchTag}
                    onKeyDown={searchTag}/>
            </div>
            { data.length > 0 ?
                <div className="tags">
                    {tags}
                </div>: null
            }
            { search.length > 0 && data.length === 0 ?
                <h3>Results not found...</h3> : null
            }
            { search.length === 0 && data.length === 0 ?
                <h3>Saved Tags will appear on here...</h3> : null
            }
        </>
    );
}

Tags.propTypes = {
    data: PropTypes.array,
    removeTags: PropTypes.func,
    searchTags: PropTypes.func
}

export default Tags;